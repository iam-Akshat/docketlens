# DocketLens manual demo script — 2:55 target

Record ChatGPT and the in-app browser together. Keep the agent conversation visible whenever a WebMCP tool runs. Do not show terminals, source code, API keys, or invented records.

## Before recording

1. Open `https://docketlens.masterakshata.chatgpt.site/?docket=FTC-2023-0033&q=cancel` in ChatGPT’s in-app browser.
2. Confirm the page shows **Regulations.gov live**, **8 site tools ready**, a live comment count, and search results. Counts may change.
3. Start a fresh ChatGPT conversation so the agent workflow is easy to follow.
4. Keep this file and `DEMO_DATA.md` off-camera. Use the known comment IDs and quotes in `DEMO_DATA.md` to check that live records load, not as answers to paste into ChatGPT.
5. Begin the recorded run with no evidence pins or prepared brief from rehearsal. The docket and search above are the starting context; the agent chooses which comments to inspect.
6. The shared URL automatically loads the docket, searches `cancel`, and previews the first result. Credit those steps to the app. The agent's work starts with comparing arguments and choosing supporting evidence.

## 0:00–0:15 — Problem and product

**Show:** DocketLens beside the ChatGPT conversation. Point out the real FTC docket, live count, and tool badge.

**Say:**

> “This link has already opened the FTC docket and searched for cancellation comments. DocketLens does that automatically. The research is deciding which arguments matter and whether the sources support them.”

## 0:15–0:35 — Why WebMCP fits this work

**Show:** The `8 site tools ready` badge and the Search, Source, Compare, Evidence, and Activity areas.

**Say:**

> “WebMCP lets the agent work in the evidence board I'm reviewing. It finds contrasting arguments and pins supporting quotes. I check them here, then it can read what I've kept and look for a perspective we're missing. We don't have to copy our working evidence between the page and chat.”

## 0:35–1:20 — Agent research workflow

Paste this into ChatGPT:

> Find a couple of contrasting views in this FTC docket and save the supporting quotes in DocketLens for me to review.

Let the agent work from the loaded docket and results, searching further when useful. It chooses comments and excerpts; different runs may find different records. Do not feed it the preflight IDs or quotes, require a particular tool order, or ask it to repeat the existing search. The task is evidence selection, not loading a page or generating a formatted document.

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

> Save those supporting quotes on the evidence board so I can review them.

Keep any follow-up visible. Do not describe a step as completed unless the app shows it.

## 1:20–1:45 — Human verification

**Do manually:** Open each pending pin and compare it with the source text. Click **Verify** only if the excerpt and note support the intended use; remove weak or irrelevant evidence. Do not ask the agent to verify. Leave at least one genuinely useful verified pin for the brief, or continue researching if none qualifies.

**Say:**

> “DocketLens checks that the quote matches the fetched source. I check its context and whether the note is fair. I can verify it or remove it. These decisions update the same board the agent reads, and the app blocks export while any evidence is pending.”

## 1:45–2:25 — Continue research from the human's decisions

After reviewing the pins, paste:

> I've reviewed the evidence. What perspective are we missing? Find another comment worth considering and add a supporting quote for me to review.

**Show:** The agent reading the current evidence-board state, inspecting sources as needed, and searching for an additional perspective. If it finds a useful comment, show the new quote marked **Pending human review** alongside the evidence already reviewed. Do not paste your decisions or comment IDs into chat.

The state tool returns pinned comment IDs and review statuses, not full quote text or removal reasons. The agent can reopen sources to assess their arguments. Do not claim it knows why you removed a pin, or that these few comments represent the whole docket.

**Say:**

> “The agent now works from the evidence I've kept and reviewed. It checks for another perspective instead of repeating the first search. Any new quote comes back to me for review; my earlier verification doesn't approve its next finding.”

If the agent does not read the workspace, ask on camera: “Check what I've kept on the board first.” Describe only the actions actually shown. If it cannot find an additional perspective, keep that limitation visible rather than forcing a duplicate or irrelevant pin.

## 2:25–2:45 — Review the new evidence and export

**Do manually:** If a new pin was added, check its source and note, then verify it only if justified; otherwise remove it. Once no pending pins remain, click **Preview** to assemble the brief and **Download** if ready. The app formats the current board; no extra agent prompt is needed for that step.

**Show:** The actual verified-pin count, the brief with official links, and the Activity trail of initial research, human review, follow-up research, and final review. Do not assume there will be exactly three pins.

**Say:**

> “I check the new evidence too. The app then formats the reviewed board into a cited brief. The agent helped investigate and fill a gap; I decide what belongs in the final evidence set.”

## 2:45–2:55 — Closing

**End on:** Evidence or Activity with all pins verified and `8 site tools ready` visible.

**Say:**

> “WebMCP lets the agent work in the evidence board I review. We build the brief together. DocketLens never files a government comment.”

## If something fails

- If a record does not load, stop recording; do not improvise fictional data.
- Re-run the preflight in `DEMO_DATA.md` off-camera, then retry with the natural prompt. Keep specific IDs and quotes out of the recorded request.
- If the agent cannot find a meaningful contrast, show that limitation or ask it to keep looking. Do not narrate a predetermined result.
- These timestamps are editing targets, not a promise of tool speed. If needed, trim silent waits between completed calls and disclose cuts or speed-ups. Keep both research passes and human reviews visible; do not rush verification to hit the target.
- Keep the final video under three minutes.
