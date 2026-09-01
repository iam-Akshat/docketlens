# DocketLens — pending before final submission

The product work is complete. Do not submit until the three **manual blockers** below are complete.

## Manual submission blockers

- [ ] Change the GitHub repository from private to public and verify the MIT license is visible while signed out.
- [ ] Upload `.demo-artifacts/output/docketlens-submission-demo.mp4` to public YouTube with `.demo-artifacts/output/docketlens-demo-captions.srt`.
- [ ] Replace the video placeholder in `SUBMISSION.md`, then recheck the live URL, public repository URL, description, and YouTube URL while signed out.

## Completed P0 verification

- [x] Public access approved for the Sites deployment.
- [x] Public app and live Regulations.gov API verified without authentication.
- [x] Recorded a narrated 1:59.95 walkthrough in a WebMCP-capable workflow.
- [x] Demo shows `8 site tools ready`, search, pagination, inspection, tagging, comparison, evidence pinning, and brief preparation.
- [x] Demo shows the human verifying agent-created evidence and the activity trail.
- [x] Demo uses only real FTC public records and shows the read-only boundary and official links.
- [x] Fixed-record preflight passed for `FTC-2023-0033-1056` and `FTC-2023-0033-1136` with substantive inline text.
- [x] Final MP4 decode check passed: H.264, 1440×810, 25 fps, AAC narration, under three minutes.

## Completed product hardening

- [x] WebMCP registration failures now surface a visible diagnostic.
- [x] Attachment-only records are explicitly scoped: official files are linked, but only inline text can be pinned.
- [x] Pending agent evidence prominently locks Copy and Download until human verification.
- [x] Focused tests cover quote grounding, cross-docket rejection, API response minimization, and pagination.
- [x] Agent and API pagination enforce Regulations.gov's 5,000-record query window with a specific error.
- [x] Application lint, automated tests, and production build pass.
- [x] Keyboard focus, mobile layout, loading, empty, and upstream-error states were checked.
- [x] Five concise adversarial judge answers are prepared in `JUDGE_QA.md`.

## Deferred infrastructure enhancement

- [ ] Add durable per-client rate limiting when the hosting platform exposes an appropriate binding. Current safeguards are a read-only proxy, strict result caps, response caching, a private upstream key, and retry-safe errors; an in-memory Worker counter would be unreliable and was intentionally not added.

## Already complete

- [x] Shareable URLs restore docket, query, result page, and selected source.
- [x] Eight imperative WebMCP tools share visible state with the human UI.
- [x] Real Regulations.gov data with no fictional demo records.
- [x] Exact-source quote validation and pending-human-review evidence state.
- [x] Read-only server proxy with secret-safe API access and minimized public data.
- [x] MIT license, CI, submission copy, demo script, and real recording identifiers.
