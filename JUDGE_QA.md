# DocketLens — five hard judge questions

## 1. Why is this not just a chatbot over government data?

DocketLens is a shared research workspace, not a chat answer. The agent changes the same visible docket, result page, source inspector, comparison, tags, and evidence board that the human is reviewing. Every evidence item carries an exact public-record excerpt and official link.

## 2. Why does this need WebMCP?

The agent needs access to the analyst's ongoing research, not just the public records. WebMCP connects it to the current docket, selected sources, evidence board, and review states. It can stage quotes in the page; the human can verify or remove them; then the agent can read those decisions and rebuild the brief. That two-way handoff is the product's use of WebMCP.

A direct Regulations.gov API connection alone cannot see what the analyst has reviewed in DocketLens. A custom integration or browser automation could support the same collaboration, so WebMCP is not the only possible implementation. It provides a standard interface for the site's research actions, while DocketLens enforces exact-source checks and human-review restrictions.

## 3. What prevents fabricated or misplaced evidence?

The server returns minimized Regulations.gov records. A quote can be pinned only when it exactly exists in the fetched source text, and a comment is rejected if its docket ID differs from the active docket. Agent-created pins remain pending until a person verifies them; pending evidence cannot be exported.

## 4. What are the honest limitations?

DocketLens currently pins inline comment text only; it links official attachments but does not extract their contents. Regulations.gov also limits each paginated query window, which the UI and WebMCP schema enforce. The app is research support, not legal advice or an agency conclusion.

## 5. Who would use this after the hackathon?

Journalists, public-interest researchers, policy teams, law firms, trade groups, and civil-society organizations already review large federal dockets. The product removes repetitive searching and citation bookkeeping while preserving the human verification their work requires. It works with compatible live Regulations.gov dockets and never depends on fictional demo data.
