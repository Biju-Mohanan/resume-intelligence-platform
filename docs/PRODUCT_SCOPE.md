# Product Scope

## Included product areas
- Career profile: contact, summary, experience, education, skills, certifications, projects, languages, and evidence.
- Resume workspace: create, import, edit, duplicate, version, reorder, hide/show sections, templates, preview, export.
- AI writing: summaries and bullet rewrites grounded in confirmed profile facts.
- ATS checker: structure, parsing, section completeness, formatting risks, and content quality.
- Keyword scanner: required/preferred term extraction, coverage, context, and missing-evidence warnings.
- Job intelligence: source adapters, filters, deduplication, details, matching, and saved jobs.
- Tailoring: proposed changes with before/after review and explicit approval.
- Career tools: cover letters, application tracker, interview preparation.
- Agent interface: scoped REST endpoints and MCP tools with read/write permissions.

## ATS evaluation categories
1. Parseability and document structure.
2. Section completeness and standard headings.
3. Keyword relevance and evidence-backed coverage.
4. Readability, clarity, and impact.
5. Formatting and export risks.

Scores must be explainable, configurable, and described as an independent heuristic—not as an employer ATS result or a reproduction of Rezi's private score.

## Out of scope for initial releases
- Guaranteed ATS pass or job placement.
- Automatic job applications or sending messages without approval.
- Scraping sites in violation of terms or bypassing access controls.
- Fabricating experience, metrics, skills, or credentials.
- Copying proprietary Rezi source code, assets, or private scoring logic.

## Release gates
A module is not production-ready until it has tests, validation, authorization checks, error handling, and documentation.
