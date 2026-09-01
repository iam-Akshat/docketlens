# DocketLens — WebMCP Challenge submission

## Submission links

- Live product: [docketlens.masterakshata.chatgpt.site](https://docketlens.masterakshata.chatgpt.site)
- Public source: [github.com/iam-Akshat/docketlens](https://github.com/iam-Akshat/docketlens)
- Demo video: upload the verified narrated MP4 to public YouTube before submitting the form.

## One-line pitch

DocketLens lets people and their agents investigate thousands of real federal public comments together, with every finding pinned to an official source and kept under human review.

## What we built

DocketLens is a complete, read-only public-comment research product. It opens a live Regulations.gov docket, searches its submissions, inspects source text and attachments, compares viewpoints, organizes records with tags, validates exact evidence excerpts, and exports a cited Markdown brief.

Our demo uses the U.S. Copyright Office's real **Artificial Intelligence and Copyright** docket, `COLC-2023-0006`. All records and counts shown are fetched from Regulations.gov; no fictional comments are seeded.

## Why this is a strong fit for WebMCP

Regulatory research is a stateful, multi-step workflow. A human decides the question and judges the evidence; an agent is far faster at searching a large record, opening candidate sources, and organizing passages. WebMCP gives the agent structured access to those real product actions instead of forcing it to infer a visual interface.

DocketLens exposes eight narrow tools for loading a docket, searching and paginating comments, inspecting a source, tagging records, pinning a validated excerpt, comparing submissions, reading shared workspace state, and preparing a brief. Agent actions update the same visible page the human is using. That makes collaboration legible: users can see what changed, open the government source, verify evidence, and control export.

## Better user experience

A policy analyst can ask: “Find contrasting views from OpenAI and the Authors Guild, compare the original submissions, and pin one source-backed passage from each.” The agent executes precise tools against the live docket. The person sees the source inspector and comparison panel update, checks the original links, approves or removes evidence, and downloads the final brief.

This replaces a slow loop of web searches, tabs, copy-paste, and lost citations without replacing human judgment.

## What was difficult before

Normal browsing agents manipulate page controls heuristically and may lose context across search, source inspection, comparison, and note-taking. Ordinary chat summaries also separate the agent's answer from the analyst's working state. DocketLens makes the page itself the shared research object and makes every evidence item traceable.

## Implementation

- Next.js-compatible React application built with Vinext for ChatGPT Sites/Cloudflare Workers.
- Imperative WebMCP registration through `document.modelContext.registerTool(...)`.
- Strict JSON input schemas and narrow, task-specific outputs.
- `untrustedContentHint` on operations that return public user-submitted text.
- Server-side Regulations.gov API v4 proxy with identifier validation, response minimization, caching, official-host attachment allow-listing, and secret-safe API-key handling.
- Human-review state for agent-created evidence and human-controlled Markdown export.

## Why it can win

**WebMCP leverage:** eight tools form one coherent stateful workflow; they do more than expose search and visibly coordinate with the human UI.

**Execution:** the app is deployed, responsive, source-linked, error-aware, and useful without any fictional setup.

**Impact:** large public dockets affect copyright, health, labor, transport, energy, and technology policy. DocketLens can be reused on any compatible Regulations.gov docket.

**Creativity and ambition:** it is not another agent chat box. It treats an official public record as a shared, auditable human-agent research surface.

## Important limitation

DocketLens supports research, not legal advice, and never files a public comment. Automated findings require human verification.
