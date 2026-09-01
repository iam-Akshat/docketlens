import { NextRequest, NextResponse } from 'next/server';

import { REGULATIONS_RESULT_WINDOW } from '@/lib/docket-guards';
import {
  asArray,
  asRecord,
  safeCommentDetail,
  safeCommentSummary,
  safeDocket,
  safeDocument,
} from '@/lib/regulations-public';

const API_ROOT = 'https://api.regulations.gov/v4';
const SAFE_ID = /^[A-Z0-9][A-Z0-9-]{2,80}$/i;
const MAX_PAGE_SIZE = 25;

function upstreamKey(): string {
  return process.env.REGULATIONS_GOV_API_KEY || 'DEMO_KEY';
}

async function regulationsFetch(path: string, params?: URLSearchParams) {
  const url = new URL(`${API_ROOT}${path}`);
  params?.forEach((value, key) => url.searchParams.set(key, value));

  for (let attempt = 0; attempt < 2; attempt += 1) {
    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
        'X-Api-Key': upstreamKey(),
      },
      next: { revalidate: 300 },
    });

    if (response.ok) {
      return response.json() as Promise<unknown>;
    }

    const retryable = response.status === 429 || response.status >= 500;
    if (!retryable || attempt === 1) {
      throw new Error(`Regulations.gov returned ${response.status}`);
    }

    await new Promise((resolve) => setTimeout(resolve, 250));
  }

  throw new Error('Regulations.gov did not return a response');
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
      const maxPage = Math.ceil(REGULATIONS_RESULT_WINDOW / pageSize);
      if (page > maxPage) {
        return NextResponse.json(
          {
            error: `Result page must be between 1 and ${maxPage}; Regulations.gov limits each query window to ${REGULATIONS_RESULT_WINDOW.toLocaleString()} records.`,
          },
          { status: 400 },
        );
      }
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
            ? Math.min(maxPage, Math.max(1, meta.totalPages))
            : 1,
        hasNextPage: meta.hasNextPage === true && page < maxPage,
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
