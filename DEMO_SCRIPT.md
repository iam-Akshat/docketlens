# DocketLens manual demo script — 2:15 target

Record ChatGPT and the in-app browser together. Keep the agent conversation visible whenever a WebMCP tool runs. Do not show terminals, source code, API keys, or invented records.

## Before recording

1. Open `https://docketlens.masterakshata.chatgpt.site/?docket=FTC-2023-0033&q=cancel` in ChatGPT’s in-app browser.
2. Confirm the page shows **Regulations.gov live**, **8 site tools ready**, a live comment count, and search results. Counts may change.
3. Start a fresh ChatGPT conversation so the agent workflow is easy to follow.
4. Keep this file and `DEMO_DATA.md` off-camera. Use the known comment IDs and quotes in `DEMO_DATA.md` to check that live records load, not as answers to paste into ChatGPT.
5. Begin the recorded run with no evidence pins or prepared brief from rehearsal. The docket and search above are the starting context; the agent chooses which comments to inspect.

## 0:00–0:18 — Problem and product

**Show:** DocketLens beside the ChatGPT conversation. Point out the real FTC docket, live count, and tool badge.

**Say:**

> “A federal rulemaking can receive thousands of public comments. DocketLens is a shared research workspace where a person and an agent can investigate those records without losing the original evidence.”

## 0:18–0:32 — Why WebMCP

**Show:** The `8 site tools ready` badge and the Search, Source, Compare, Evidence, and Activity areas.

**Say:**

> “Instead of guessing how to click through the website, ChatGPT gets eight structured WebMCP tools. Every agent action updates the same visible workspace that I can inspect and control.”

## 0:32–1:25 — Agent research workflow

Paste this into ChatGPT:

> I'm researching the FTC's click-to-cancel rule. Use DocketLens to find a couple of contrasting public comments, show me the original sources, and prepare a short evidence brief for me to review.

Let the agent choose search terms, pages, comments, and excerpts. Different runs may find different records. Do not feed it the preflight IDs or quotes, or require a particular tool order.

**While the agent runs, say:**

> “I've asked a research question. The agent chooses which comments to open and which passages support the comparison. I can follow its work in the same workspace and check the original sources.”

Describe the contrast only after reading the comments it actually finds. Two comments are examples, not a measure of overall public opinion.

**Make sure the recording visibly captures:**

- the agent invoking site tools;
- live search results and the source text the agent inspects;
- the selected comments and their official source links, including Compare if the agent uses it;
- exact evidence pins marked **Pending human review**;
- the warning that Copy and Download are unavailable while evidence is pending.

If it answers only in chat without preparing the workspace, use this short follow-up on camera:

> Save the supporting quotes in DocketLens and put the brief there so I can review it.

Keep any follow-up visible. Do not describe a step as completed unless the app shows it.

## 1:25–1:52 — Human verification

**Do manually:** Open each pending pin, compare it with the source text, and click **Verify**. Do not ask the agent to verify.

**Say:**

> “The agent can find and organize evidence, but it cannot approve its own work. A quote is accepted only when it exactly matches the fetched comment, and export remains locked until I verify every agent-created pin.”

## 1:52–2:08 — Auditable result

**Show:** All pins verified (for example, `2/2 verified` if there are two), the brief preview, enabled export buttons, official links, then the Activity tab.

**Say:**

> “After verification, the brief contains exact excerpts, neutral notes, review status, comment IDs, and official source links. The activity trail distinguishes agent actions, human decisions, and system events.”

## 2:08–2:15 — Closing

**End on:** Evidence or Activity with all pins verified and `8 site tools ready` visible.

**Say:**

> “DocketLens never files a government comment. WebMCP accelerates the research, while the human can see, verify, and audit every step.”

## If something fails

- If a record does not load, stop recording; do not improvise fictional data.
- Re-run the preflight in `DEMO_DATA.md` off-camera, then retry with the natural prompt. Keep specific IDs and quotes out of the recorded request.
- If the agent cannot find a meaningful contrast, show that limitation or ask it to keep looking. Do not narrate a predetermined result.
- If the agent is slow, pause the recording between completed tool calls rather than hiding the agent interaction.
- Keep the final video under three minutes.
