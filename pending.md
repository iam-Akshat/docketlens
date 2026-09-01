# DocketLens — pending before final submission

Do not submit until every **P0** item is complete.

## P0 — submission blockers

- [x] Approve public access for the Sites deployment.
- [ ] Verify the public app and live Regulations.gov API work in an anonymous browser.
- [ ] Record a clear 2–3 minute walkthrough inside a real WebMCP-capable browser.
- [ ] Show the `8 site tools ready` badge and an agent performing search, pagination, inspection, comparison, evidence pinning, and brief preparation.
- [ ] Show the human verifying agent-created evidence and reviewing the activity trail.
- [ ] Use only real public records; show official source links and the read-only boundary.
- [ ] Upload the narrated demo publicly to YouTube.
- [ ] Add the final YouTube URL to `SUBMISSION.md` and the Devpost form.
- [ ] Recheck the live URL, repository URL, license visibility, description, and video URL from a signed-out browser.
- [ ] Run the saved-comment preflight in `DEMO_DATA.md`; if either record lacks inline text, replace both prompt IDs with newly verified live records.

## P1 — recommended before judging

- [ ] Add public-endpoint rate limiting so anonymous traffic cannot exhaust the Regulations.gov quota.
- [ ] Surface WebMCP registration failures with a visible diagnostic instead of silently falling back to “unsupported.”
- [ ] Resolve the attachment-only evidence gap: either extract searchable PDF text or clearly scope the product and demo to inline-text comments.
- [ ] Warn prominently—or require confirmation—when exporting a brief containing pending evidence.
- [ ] Add focused tests for quote grounding, cross-docket rejection, API response minimization, and pagination.

## P2 — polish if time permits

- [ ] Align the agent pagination limit with Regulations.gov’s practical result limit and return a specific out-of-range error.
- [ ] Expand linting to the whole repository and remove unused dependencies.
- [ ] Run a final keyboard, mobile-layout, loading, empty-state, and upstream-error pass.
- [ ] Prepare concise answers to the five adversarial questions in the final judge review.

## Already complete

- [x] Shareable URLs restore the docket, query, result page, and selected source.
- [x] Verified a second real-data workflow using FTC-2023-0033 and inline consumer comments.
- [x] Eight imperative WebMCP tools share visible state with the human UI.
- [x] Real Regulations.gov data with no fictional demo records.
- [x] Exact-source quote validation and pending-human-review evidence state.
- [x] Read-only server proxy with secret-safe API access and minimized public data.
- [x] Public MIT-licensed repository with passing CI.
- [x] Private production deployment with the latest verified build.
- [x] Narrated short demo, captions, thumbnail, and YouTube upload copy prepared locally.
- [x] Final timed narration, copy-ready prompts, real recording identifiers, and honest fallback documented.
- [x] Independent final audits completed with Gemini 3.7 Flash and Claude Fable-5 High.
