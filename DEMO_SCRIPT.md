# DocketLens demo script — target 2:20

Use the live site and real Regulations.gov records only. Keep `DEMO_DATA.md` open off-camera.

## 0:00–0:18 — Problem

**Show:** The loaded `COLC-2023-0006` docket, live comment count, government-source badge, and `8 site tools ready`.

**Say:** “A major federal docket can contain thousands of public comments. Finding competing views is slow; preserving exact, reviewable evidence is harder. DocketLens is a shared policy-research workspace for a person and their agent.”

## 0:18–0:35 — Product boundary

**Show:** Search results, Source inspector, Evidence, Compare, and Activity tabs.

**Say:** “The records come live from Regulations.gov. DocketLens is deliberately read-only: it researches public submissions but can never file or alter a government comment.”

## 0:35–1:20 — WebMCP research

Paste this into the agent:

> Use DocketLens’s site tools on the currently loaded docket. Search “fair use” and inspect comment `COLC-2023-0006-10085`. Then search “OpenAI” and inspect comment `COLC-2023-0006-10199`. Compare those two public comments. Pin one exact, complete sentence from each source that represents the commenter’s position; do not paraphrase, infer intent, or treat either commenter as speaking for OpenAI or the Authors Guild. Add concise neutral analyst notes. Stop before human verification or download.

**Say while it runs:** “The agent is not guessing at buttons. The website exposes eight structured WebMCP tools. Searches, opened sources, comparisons, and evidence pins appear in the same visible state I control.”

**Show:** The Compare view, both official comment links, two pending pins, and Agent activity.

## 1:20–1:48 — Human judgment

**Show:** Open each pending pin, compare its exact text with the source inspector, then click **Verify** yourself.

**Say:** “Every agent-created quote starts pending. The app rejects a quote that is not verbatim source text, and only a person can verify it. WebMCP accelerates the evidence work without quietly taking over judgment.”

## 1:48–2:08 — Auditable output

Paste:

> Prepare the cited brief preview titled “AI copyright evidence brief” from the current verified evidence. Do not download anything.

**Show:** The source-linked Markdown preview, then the Activity tab. Manually download only if it helps the shot.

**Say:** “The result is a cited brief with exact excerpts, source IDs, review status, and a transparent activity trail.”

## 2:08–2:20 — Why it matters

**Say:** “The same workflow applies to public dockets in health, labor, transport, energy, and technology. WebMCP turns a website into a reliable collaboration surface: the agent does structured research; the analyst sees, checks, and owns the conclusion.”

End on the Evidence view with both official source links and `2/2 verified` visible.

## Recording rules

- Run the preflight in `DEMO_DATA.md` shortly before recording.
- Never show the Regulations.gov API key.
- Do not call the two selected comments official OpenAI or Authors Guild submissions.
- If either saved comment cannot be inspected with inline text, stop and use the real-data fallback in `DEMO_DATA.md`; never fabricate a result.
- Existing rehearsal: `.demo-artifacts/output/docketlens-demo-narrated.mp4` (21.92 seconds, intentionally ignored by Git).
