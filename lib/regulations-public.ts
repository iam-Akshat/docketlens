type JsonRecord = Record<string, unknown>;

export function asRecord(value: unknown): JsonRecord {
  return value && typeof value === 'object' ? (value as JsonRecord) : {};
}

export function asArray(value: unknown): unknown[] {
  return Array.isArray(value) ? value : [];
}

function text(value: unknown): string | null {
  return typeof value === 'string' ? value : null;
}

export function stripHtml(value: unknown): string {
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

export function safeDocket(raw: unknown) {
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

export function safeDocument(raw: unknown) {
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

export function safeCommentSummary(raw: unknown) {
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

export function safeCommentDetail(raw: unknown) {
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
