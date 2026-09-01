# DocketLens manual demo script — 2:15 target

Record ChatGPT and the in-app browser together. Keep the agent conversation visible whenever a WebMCP tool runs. Do not show terminals, source code, API keys, or invented records.

## Before recording

1. Open `https://docketlens.masterakshata.chatgpt.site/?docket=FTC-2023-0033&q=cancel` in ChatGPT’s in-app browser.
2. Confirm the page shows **Regulations.gov live**, **8 site tools ready**, 1,163 comments, and search results.
3. Start a fresh ChatGPT conversation so the agent workflow is easy to follow.
4. Keep this file off-camera for narration and prompts.

## 0:00–0:18 — Problem and product

**Show:** DocketLens beside the ChatGPT conversation. Point out the real FTC docket, live count, and tool badge.

**Say:**

> “A federal rulemaking can receive thousands of public comments. DocketLens is a shared research workspace where a person and an agent can investigate those records without losing the original evidence.”

## 0:18–0:32 — Why WebMCP

**Show:** The `8 site tools ready` badge and the Search, Source, Compare, Evidence, and Activity areas.

**Say:**

> “Instead of guessing how to click through the website, ChatGPT gets eight structured WebMCP tools. Every agent action updates the same visible workspace that I can inspect and control.”

## 0:32–1:25 — Agent research workflow

Paste this exact prompt into ChatGPT:

> Use DocketLens’s site tools only. On docket `FTC-2023-0033`, search `cancel` on page 1 and then page 2. Inspect comments `FTC-2023-0033-1056` and `FTC-2023-0033-1136`, then compare them. Pin these exact excerpts with neutral notes: from `FTC-2023-0033-1056`, “If you signed up online, you should be able to cancel online.” From `FTC-2023-0033-1136`, “Service contracts are not the same as gym memberships, and don't have the same issues that the FTC indicated as the reason to create the rule.” Prepare a brief preview titled “FTC click-to-cancel evidence brief.” Stop before verification, copying, or downloading.

**While the agent runs, say:**

> “The agent searches the live docket, moves beyond the first result page, opens two specific public comments, and compares their original text. One commenter supports easier online cancellation; the other asks the FTC to distinguish small-business service contracts. The app keeps both official record links visible and generates no verdict.”

**Make sure the recording visibly captures:**

- the agent invoking site tools;
- the result indicator changing to page 2;
- both comment IDs in Compare;
- two exact evidence pins marked **Pending human review**;
- the warning that Copy and Download are unavailable while evidence is pending.

## 1:25–1:52 — Human verification

**Do manually:** Open each pending pin, compare it with the source text, and click **Verify**. Do not ask the agent to verify.

**Say:**

> “The agent can find and organize evidence, but it cannot approve its own work. A quote is accepted only when it exactly matches the fetched comment, and export remains locked until I verify every agent-created pin.”

## 1:52–2:08 — Auditable result

**Show:** `2/2 verified`, the brief preview, enabled export buttons, both official links, then the Activity tab.

**Say:**

> “After verification, the brief contains exact excerpts, neutral notes, review status, comment IDs, and official source links. The activity trail distinguishes agent actions, human decisions, and system events.”

## 2:08–2:15 — Closing

**End on:** Evidence or Activity with `2/2 verified` and `8 site tools ready` visible.

**Say:**

> “DocketLens never files a government comment. WebMCP accelerates the research, while the human can see, verify, and audit every step.”

## If something fails

- If a record does not load, stop recording; do not improvise fictional data.
- Re-run the preflight in `DEMO_DATA.md` and replace the IDs only with newly verified live comments.
- If the agent is slow, pause the recording between completed tool calls rather than hiding the agent interaction.
- Keep the final video under three minutes.
