export const COMMENTS_PAGE_SIZE = 20;
export const REGULATIONS_RESULT_WINDOW = 5_000;
export const MAX_RESULT_PAGE = Math.ceil(
  REGULATIONS_RESULT_WINDOW / COMMENTS_PAGE_SIZE,
);

export function normalizeEvidenceText(value: string) {
  return value.replace(/\s+/g, ' ').trim().toLocaleLowerCase();
}

export function isGroundedQuote(source: string, quote: string) {
  const normalizedQuote = normalizeEvidenceText(quote);
  return (
    normalizedQuote.length >= 12 &&
    normalizeEvidenceText(source).includes(normalizedQuote)
  );
}

export function commentBelongsToDocket(
  commentDocketId: string | null,
  activeDocketId: string,
) {
  return commentDocketId === activeDocketId;
}

export function validatedResultPage(page: number) {
  const normalized = Number.isFinite(page) ? Math.trunc(page) : 1;
  if (normalized < 1 || normalized > MAX_RESULT_PAGE) {
    throw new Error(
      `Result page must be between 1 and ${MAX_RESULT_PAGE}; Regulations.gov limits each query window to ${REGULATIONS_RESULT_WINDOW.toLocaleString()} records.`,
    );
  }
  return normalized;
}
