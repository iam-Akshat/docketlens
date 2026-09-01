# DocketLens recording data

This is a recording runbook, not seeded app data. Every record must still resolve live from Regulations.gov before capture.

## Fixed public identifiers

| Purpose | Value |
| --- | --- |
| Live app | `https://docketlens.masterakshata.chatgpt.site/` |
| Docket | `FTC-2023-0033` — FTC Seek Comments on the Negative Option Rule |
| Search | `cancel` — 1,066 live matches at preflight |
| First comment | `FTC-2023-0033-1056` — Comment from DAngelo, James |
| Second comment | `FTC-2023-0033-1136` — Comment from Ellis, Amy |
| First official source | `https://www.regulations.gov/comment/FTC-2023-0033-1056` |
| Second official source | `https://www.regulations.gov/comment/FTC-2023-0033-1136` |

Both records returned substantive inline text and no attachments in the final local preflight. They demonstrate contrasting public views: easier online cancellation and a small-business request to exclude service contracts.

## Copy-ready agent prompt

> Use DocketLens’s site tools on docket `FTC-2023-0033`. Search “cancel” on page 1, then page 2. Inspect comments `FTC-2023-0033-1056` and `FTC-2023-0033-1136`, compare them, and pin one exact sentence from each with a neutral note. Prepare a preview titled “FTC click-to-cancel evidence brief.” Stop before verification or download.

## Exact checked excerpts

- `FTC-2023-0033-1056`: “If you signed up online, you should be able to cancel online.”
- `FTC-2023-0033-1136`: “Service contracts are not the same as gym memberships, and don't have the same issues that the FTC indicated as the reason to create the rule.”

## Expected visible result

- The site reports `8 site tools ready`.
- Pagination visibly changes from page 1 to page 2.
- Compare contains both comment IDs and official source links.
- Both agent-created pins are **Pending human review**.
- Copy and Download are disabled until the operator clicks **Verify** twice.
- Activity distinguishes agent, human, and system actions.
- No tool submits, edits, or deletes a government comment.

## Five-minute preflight

1. Open the live app in a WebMCP-capable browser and hard refresh.
2. Confirm the FTC title, 1,163 live comments, source badge, and eight-tool badge.
3. Search `cancel`, paginate to page 2, and inspect both fixed IDs.
4. Confirm both exact excerpts still exist in inline body text.
5. Open both official links and confirm they resolve.
6. Reload the share URL, close extra tabs, and start capture.

## Honest fallback if live data changes

Never use screenshots, cached JSON, or invented records. Search this live docket for `cancel`, choose two visible comments with substantive inline text, open their official links, and replace the IDs and excerpts before recording.

Do not expose the Regulations.gov API key in the page, prompt, terminal, repository, or video.
