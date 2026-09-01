import { NextRequest, NextResponse } from 'next/server';

const API_ROOT = 'https://api.regulations.gov/v4';
const SAFE_ID = /^[A-Z0-9][A-Z0-9-]{2,80}$/i;
const MAX_PAGE_SIZE = 25;

type JsonRecord = Record<string, unknown>;

function asRecord(value: unknown): JsonRecord {
  return value && typeof value === 'object' ? (value as JsonRecord) : {};
}

function asArray(value: unknown): unknown[] {
  return Array.isArray(value) ? value : [];
}

function text(value: unknown): string | null {
  return typeof value === 'string' ? value : null;
}

function stripHtml(value: unknown): string {
  if (typeof value !== 'string') return '';
  return value
    .replace(/<[^>]*>/g, ' ')
    .replace(/&hellip;/g, '…')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function upstreamKey(): string {
  return process.env.REGULATIONS_GOV_API_KEY || 'DEMO_KEY';
}

async function regulationsFetch(path: string, params?: URLSearchParams) {
  const url = new URL(`${API_ROOT}${path}`);
  params?.forEach((value, key) => url.searchParams.set(key, value));

  const response = await fetch(url, {
    headers: {
      Accept: 'application/json',
      'X-Api-Key': upstreamKey(),
    },
    next: { revalidate: 300 },
  });

  if (!response.ok) {
    throw new Error(`Regulations.gov returned ${response.status}`);
  }

  return response.json() as Promise<unknown>;
}

function safeDocket(raw: unknown) {
  const data = asRecord(asRecord(raw).data);
  const attributes = asRecord(data.attributes);
  return {
    id: text(data.id),
    title: text(attributes.title) || 'Untitled federal docket',
    agencyId: text(attributes.agencyId),
    docketType: text(attributes.docketType),
    modifiedAt: text(attributes.modifyDate),
  };
}

function safeDocument(raw: unknown) {
  const item = asRecord(raw);
  const attributes = asRecord(item.attributes);
  const id = text(item.id);
  const frDocNumber = text(attributes.frDocNum);
  return {
    id,
    title: text(attributes.title) || 'Untitled document',
    type: text(attributes.documentType),
    postedAt: text(attributes.postedDate),
    commentStartAt: text(attributes.commentStartDate),
    commentEndAt: text(attributes.commentEndDate),
    openForComment: attributes.openForComment === true,
    federalRegisterNumber: frDocNumber,
    federalRegisterUrl: frDocNumber
      ? `https://www.federalregister.gov/d/${encodeURIComponent(frDocNumber)}`
      : null,
    regulationsUrl: id
      ? `https://www.regulations.gov/document/${encodeURIComponent(id)}`
      : null,
  };
}

function safeCommentSummary(raw: unknown) {
  const item = asRecord(raw);
  const attributes = asRecord(item.attributes);
  const id = text(item.id);
  return {
    id,
    title: text(attributes.title) || 'Public submission',
    postedAt: text(attributes.postedDate),
    snippet: stripHtml(attributes.highlightedContent),
    withdrawn: attributes.withdrawn === true,
    sourceUrl: id
      ? `https://www.regulations.gov/comment/${encodeURIComponent(id)}`
      : null,
  };
}

function safeCommentDetail(raw: unknown) {
  const root = asRecord(raw);
  const data = asRecord(root.data);
  const attributes = asRecord(data.attributes);
  const id = text(data.id);
  const included = asArray(root.included).map(asRecord);

  const attachments = included
    .filter((item) => item.type === 'attachments')
    .flatMap((item) => {
      const attachment = asRecord(item.attributes);
      return asArray(attachment.fileFormats).map((formatValue) => {
        const format = asRecord(formatValue);
        const fileUrl = text(format.fileUrl);
        return {
          title: text(attachment.title) || 'Comment attachment',
          format: text(format.format),
          size: typeof format.size === 'number' ? format.size : null,
          fileUrl: fileUrl?.startsWith('https://downloads.regulations.gov/')
            ? fileUrl
            : null,
        };
      });
    })
    .filter((attachment) => attachment.fileUrl);

  const name = [text(attributes.firstName), text(attributes.lastName)]
    .filter(Boolean)
    .join(' ');

  return {
    id,
    docketId: text(attributes.docketId),
    title: text(attributes.title) || 'Public submission',
    body: stripHtml(attributes.comment),
    author: name || null,
    organization: text(attributes.organization),
    postedAt: text(attributes.postedDate),
    trackingNumber: text(attributes.trackingNbr),
    duplicateCount:
      typeof attributes.duplicateComments === 'number'
        ? attributes.duplicateComments
        : null,
    withdrawn: attributes.withdrawn === true,
    sourceUrl: id
      ? `https://www.regulations.gov/comment/${encodeURIComponent(id)}`
      : null,
    attachments,
  };
}

function publicResponse(data: unknown) {
  return NextResponse.json(data, {
    headers: {
      'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=3600',
      'X-Content-Type-Options': 'nosniff',
    },
  });
}

export async function GET(request: NextRequest) {
  const mode = request.nextUrl.searchParams.get('mode') || 'docket';
  const id = request.nextUrl.searchParams.get('id') || '';

  if (!SAFE_ID.test(id)) {
    return NextResponse.json(
      { error: 'Enter a valid Regulations.gov docket or comment ID.' },
      { status: 400 },
    );
  }

  try {
    if (mode === 'docket') {
      const documentsParams = new URLSearchParams({
        'filter[docketId]': id,
        'page[size]': '25',
        sort: '-postedDate',
      });
      const commentsParams = new URLSearchParams({
        'filter[docketId]': id,
        'page[size]': '5',
      });

      const [docketRaw, documentsRaw, commentsRaw] = await Promise.all([
        regulationsFetch(`/dockets/${encodeURIComponent(id)}`),
        regulationsFetch('/documents', documentsParams),
        regulationsFetch('/comments', commentsParams),
      ]);

      const documentsRoot = asRecord(documentsRaw);
      const commentsRoot = asRecord(commentsRaw);
      const commentMeta = asRecord(commentsRoot.meta);

      return publicResponse({
        docket: safeDocket(docketRaw),
        documents: asArray(documentsRoot.data).map(safeDocument),
        totalComments:
          typeof commentMeta.totalElements === 'number'
            ? commentMeta.totalElements
            : 0,
        source: 'Regulations.gov API v4',
        fetchedAt: new Date().toISOString(),
      });
    }

    if (mode === 'comments') {
      const query = (request.nextUrl.searchParams.get('query') || '').slice(
        0,
        180,
      );
      const page = Math.max(
        1,
        Number.parseInt(request.nextUrl.searchParams.get('page') || '1', 10) ||
          1,
      );
      const pageSize = Math.min(
        MAX_PAGE_SIZE,
        Math.max(
          5,
          Number.parseInt(
            request.nextUrl.searchParams.get('pageSize') || '20',
            10,
          ) || 20,
        ),
      );
      const params = new URLSearchParams({
        'filter[docketId]': id,
        'page[number]': String(page),
        'page[size]': String(pageSize),
        sort: '-postedDate',
      });
      if (query) params.set('filter[searchTerm]', query);

      const raw = asRecord(await regulationsFetch('/comments', params));
      const meta = asRecord(raw.meta);
      return publicResponse({
        comments: asArray(raw.data).map(safeCommentSummary),
        totalMatches:
          typeof meta.totalElements === 'number' ? meta.totalElements : 0,
        page: typeof meta.pageNumber === 'number' ? meta.pageNumber : page,
        totalPages:
          typeof meta.totalPages === 'number'
            ? Math.max(1, meta.totalPages)
            : 1,
        hasNextPage: meta.hasNextPage === true,
        query,
        source: 'Regulations.gov API v4',
        fetchedAt: new Date().toISOString(),
      });
    }

    if (mode === 'comment') {
      const raw = await regulationsFetch(
        `/comments/${encodeURIComponent(id)}`,
        new URLSearchParams({ include: 'attachments' }),
      );
      return publicResponse({
        comment: safeCommentDetail(raw),
        source: 'Regulations.gov API v4',
        fetchedAt: new Date().toISOString(),
      });
    }

    return NextResponse.json(
      { error: 'Unsupported request mode.' },
      { status: 400 },
    );
  } catch (error) {
    const message =
      error instanceof Error ? error.message : 'Government data unavailable';
    const status = message.includes('404')
      ? 404
      : message.includes('429')
        ? 429
        : 502;
    return NextResponse.json(
      {
        error:
          status === 429
            ? 'Regulations.gov is temporarily rate-limiting requests. Please retry shortly.'
            : 'DocketLens could not retrieve this public record from Regulations.gov.',
      },
      { status },
    );
  }
}
