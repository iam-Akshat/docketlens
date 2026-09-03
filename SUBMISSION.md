# DocketLens — WebMCP Challenge submission

## Submission links

- Live product: [docketlens.masterakshata.chatgpt.site](https://docketlens.masterakshata.chatgpt.site)
- Source repository: [github.com/iam-Akshat/docketlens](https://github.com/iam-Akshat/docketlens) — change visibility from private to public before submission.
- Demo video: record the live human-agent workflow in `DEMO_SCRIPT.md`, upload it to public YouTube, then replace this line with the final URL.

## One-line pitch

DocketLens lets people and their agents investigate thousands of real federal public comments together, with every finding pinned to an official source and kept under human review.

## What we built

DocketLens is a complete, read-only public-comment research product. It opens a live Regulations.gov docket, searches its submissions, inspects source text and attachments, compares viewpoints, organizes records with tags, validates exact evidence excerpts, and exports a cited Markdown brief.

Our demo uses the FTC's real **Negative Option Rule** docket, `FTC-2023-0033`, to investigate contrasting public comments about click-to-cancel. All records and counts shown are fetched from Regulations.gov; no fictional comments are seeded.

## Why this is a strong fit for WebMCP

Regulatory research alternates between searching for evidence and judging it. An agent can help find relevant submissions, but a researcher must check the original context and decide what belongs in the brief. Both need access to the same evidence board, including changes made by the other.

DocketLens uses WebMCP to expose eight research tools connected to that visible workspace. The agent reads the current docket and selection, searches and compares records, and pins source-checked passages. The person verifies or removes evidence in the page. The agent can then read the updated review states and prepare a brief from the remaining evidence, without the person copying their decisions into chat. Export stays under human control.

Regulations.gov's API provides records; it does not provide the analyst's DocketLens selection, evidence board, or review decisions. WebMCP exposes that application context and its allowed actions through a standard interface. A custom integration or browser automation could also connect the two, but WebMCP lets a compatible agent work through the site's declared research tools. DocketLens itself enforces quote validation and review requirements.

## Better user experience

A policy analyst opens the FTC docket and asks: “Find a couple of contrasting public comments and prepare a short evidence brief for me to review.” The agent chooses sources and stages evidence in the page. The analyst checks the originals and verifies or removes pins, then asks: “I've finished reviewing. Check the board and refresh the brief.” The agent continues from the analyst's actual decisions. The analyst downloads the result.

This replaces a slow loop of web searches, tabs, copy-paste, and lost citations without replacing human judgment.

## What was difficult before

When findings live in chat and review happens elsewhere, the analyst has to transfer quotes, preserve citations, and explain which evidence they kept. DocketLens keeps those decisions attached to the source excerpts in one workspace. WebMCP gives the agent a structured way to read that state and contribute to it at each handoff.

## Implementation

- Next.js-compatible React application built with Vinext for ChatGPT Sites/Cloudflare Workers.
- Imperative WebMCP registration through `document.modelContext.registerTool(...)`.
- Strict JSON input schemas and narrow, task-specific outputs.
- `untrustedContentHint` on operations that return public user-submitted text.
- Server-side Regulations.gov API v4 proxy with identifier validation, response minimization, caching, official-host attachment allow-listing, and secret-safe API-key handling.
- Human-review state for agent-created evidence and human-controlled Markdown export.
- Visible WebMCP registration diagnostics, exact-quote and cross-docket guards, and focused automated safety tests.

## Why it can win

**WebMCP leverage:** the demo shows a round trip: agent research changes the evidence board, human review changes its state, and the agent reads those decisions to prepare the brief. Eight tools connect the agent to the same working context as the analyst.

**Execution:** the app is deployed, responsive, source-linked, error-aware, and useful without any fictional setup.

**Impact:** large public dockets affect copyright, health, labor, transport, energy, and technology policy. DocketLens can be reused on any compatible Regulations.gov docket.

**Creativity and ambition:** the unit of collaboration is a source-linked evidence board. Agent findings become reviewable objects, and human decisions become state the agent can use in its next step.

## Important limitation

DocketLens supports research, not legal advice, and never files a public comment. Automated findings require human verification, and pending evidence cannot be exported. The current product validates inline Regulations.gov comment text; it links official attachments but does not extract their contents.
