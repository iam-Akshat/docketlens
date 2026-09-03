# DocketLens manual demo script — 2:45 target

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

> “A federal rulemaking can receive thousands of public comments. An agent can help find relevant passages, but I still need to check whether they support the brief. DocketLens gives us one workspace for that research and review.”

## 0:18–0:43 — Why WebMCP fits this work

**Show:** The `8 site tools ready` badge and the Search, Source, Compare, Evidence, and Activity areas.

**Say:**

> “Regulations.gov supplies the records. WebMCP connects the agent to my research workspace: it can read what I'm looking at and put source-linked quotes on this board. I review them here, then the agent can read my decisions and continue. We don't have to copy evidence and review decisions between chat and the app.”

## 0:43–1:30 — Agent research workflow

Paste this into ChatGPT:

> I'm researching the FTC's click-to-cancel rule. Use DocketLens to find a couple of contrasting public comments, show me the original sources, and prepare a short evidence brief for me to review.

Let the agent choose search terms, pages, comments, and excerpts. Different runs may find different records. Do not feed it the preflight IDs or quotes, or require a particular tool order.

**While the agent runs, say:**

> “The agent's findings appear here as evidence I can inspect, not just an answer in chat. Each pin keeps the original source attached and waits for my review.”

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

## 1:30–1:57 — Human verification

**Do manually:** Open each pending pin and compare it with the source text. Click **Verify** only if the excerpt and note support the intended use; remove weak or irrelevant evidence. Do not ask the agent to verify. Leave at least one genuinely useful verified pin for the brief, or continue researching if none qualifies.

**Say:**

> “DocketLens checks that the quote matches the fetched source. I check its context and whether the note is fair. I can verify it or remove it. These decisions update the same board the agent reads, and the app blocks export while any evidence is pending.”

## 1:57–2:25 — Hand the reviewed workspace back to the agent

After reviewing the pins, paste:

> I've finished reviewing the evidence in DocketLens. Check the board and refresh the brief using what's there now.

**Show:** The agent reading workspace state and preparing a fresh brief. The updated review statuses should be reflected in the brief. If you removed a pin, confirm it is absent. Do not paste the decisions or comment IDs into chat.

**Say:**

> “This is the handoff back. Through WebMCP, the agent can read which evidence I kept and verified, then rebuild the brief from that board. I don't have to describe every click or send the evidence back to it.”

If the agent does not read the workspace, do not claim it did. Ask it on camera to check the current evidence board before refreshing the brief.

## 2:25–2:37 — Auditable result

**Show:** All pins verified (for example, `2/2 verified` if there are two), the brief preview, enabled export buttons, official links, then the Activity tab.

**Say:**

> “The brief keeps the quotes, notes, review status, and official links. The activity trail shows the agent's research and my review. I control the download.”

## 2:37–2:45 — Closing

**End on:** Evidence or Activity with all pins verified and `8 site tools ready` visible.

**Say:**

> “WebMCP lets the agent work in the evidence board I review. We build the brief together. DocketLens never files a government comment.”

## If something fails

- If a record does not load, stop recording; do not improvise fictional data.
- Re-run the preflight in `DEMO_DATA.md` off-camera, then retry with the natural prompt. Keep specific IDs and quotes out of the recorded request.
- If the agent cannot find a meaningful contrast, show that limitation or ask it to keep looking. Do not narrate a predetermined result.
- If the agent is slow, pause the recording between completed tool calls rather than hiding the agent interaction.
- Keep the final video under three minutes.
