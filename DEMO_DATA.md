# DocketLens recording data

This is a recording runbook, not seeded app data. Every record must still resolve live from Regulations.gov before capture.

## Fixed public identifiers

| Purpose | Value |
| --- | --- |
| Live app | `https://docketlens.masterakshata.chatgpt.site/` |
| Docket | `COLC-2023-0006` — Artificial Intelligence and Copyright |
| First search | `fair use` |
| First comment | `COLC-2023-0006-10085` — Comment from La raza community outreach |
| Second search | `OpenAI` |
| Second comment | `COLC-2023-0006-10199` — Comment from Bessette, Thomas |
| First official source | `https://www.regulations.gov/comment/COLC-2023-0006-10085` |
| Second official source | `https://www.regulations.gov/comment/COLC-2023-0006-10199` |

These two records completed the existing real-data rehearsal. They are individual public comments used to demonstrate contrasting evidence, not official statements by OpenAI or the Authors Guild.

## Copy-ready agent prompts

### 1. Research, compare, and stage evidence

> Use DocketLens’s site tools on the currently loaded docket. Search “fair use” and inspect comment `COLC-2023-0006-10085`. Then search “OpenAI” and inspect comment `COLC-2023-0006-10199`. Compare those two public comments. Pin one exact, complete sentence from each source that represents the commenter’s position; do not paraphrase, infer intent, or treat either commenter as speaking for OpenAI or the Authors Guild. Add concise neutral analyst notes. Stop before human verification or download.

### 2. Prepare the result after manual verification

> Prepare the cited brief preview titled “AI copyright evidence brief” from the current verified evidence. Do not download anything.

## Expected visible result

- The site reports `8 site tools ready`.
- The Compare view contains both exact comment IDs and official source links.
- Each agent-created pin is labeled **Pending human review**.
- The operator, not the agent, clicks **Verify**.
- The final brief contains only exact fetched excerpts, review status, and source URLs.
- Activity records which actions came from the agent and which came from the human.
- No tool submits, edits, or deletes a government comment.

## Five-minute preflight

1. Open the live app in a WebMCP-capable browser and hard refresh.
2. Confirm the docket title, live-source badge, comment count, and eight-tool badge.
3. Search each saved term and inspect each saved comment ID.
4. Confirm both records expose enough inline body text for a complete-sentence quote.
5. Open both official links in separate tabs and confirm they resolve.
6. Clear local state or reload the docket, close extra tabs, zoom to 90–100%, and start capture.

## Honest fallback if live data changes

Do not use screenshots, cached JSON, or invented records. Search the same live docket for `fair use` and `OpenAI`, choose two visible comments with substantive inline text, open their official links, and replace the two IDs in the prompt before recording. Describe them as “two public commenters,” not named organizations, unless the source metadata proves the organization.

Do not expose the Regulations.gov API key in the page, prompt, terminal, repository, or video.
