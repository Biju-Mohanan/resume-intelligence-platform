# Architecture

## Design
A modular monolith is the initial deployment shape: one API and one web client, with clear domain boundaries. This keeps the free-first system understandable while allowing modules to be separated later if scale requires it.

## Runtime
- Web: React, TypeScript, Vite.
- API: Python, FastAPI, Pydantic.
- Persistence: PostgreSQL for hosted deployments; SQLite may be used for local development only.
- File storage: provider-neutral object storage adapter (implementation pending).
- AI: provider interface with deterministic/rule-based baseline; optional local or free-tier models. No paid model is required for core CRUD and ATS rules.
- Documents: isolated import/export pipeline for DOCX/PDF.
- Agent access: scoped REST API first; MCP adapter after core contracts stabilize.

## Domains
1. Identity and workspace isolation.
2. Career profile and evidence library.
3. Resume documents, sections, templates, and versions.
4. Document import, parsing, rendering, and export.
5. ATS evaluation and keyword analysis.
6. Job discovery, normalization, deduplication, and matching.
7. Tailoring proposals and approval workflow.
8. Application tracking, cover letters, and interview preparation.
9. MCP/API permissions, audit, and integrations.

## Tailoring flow
Job description -> requirement extraction -> candidate evidence retrieval -> coverage/gap analysis -> draft edits -> factual consistency checks -> ATS/readability checks -> user review -> approved version snapshot.

A job description is never evidence that the candidate has a skill. Each proposed claim must map to profile evidence or be clearly marked as an unverified suggestion.

## Job flow
Source adapters -> normalize -> verify -> deduplicate -> persist -> filter/rank -> job details -> tailored resume draft. Sponsorship, salary, location, and visa requirements remain unknown unless the source confirms them.

## Data principles
- Canonical profile is the source of truth.
- Resume versions are immutable snapshots after approval.
- Stable IDs preserve section identity and ordering.
- Missing fields are not silently deleted.
- AI-generated text records provenance and approval state.
- Tenant/user ownership is enforced at every data boundary.

## Deployment topology
Deploy web and API separately, connect both to a managed persistent database, and configure allowed origins and secrets through provider environment settings. Free-tier availability and persistence guarantees must be checked at deployment time. No deployment is performed by this repository scaffold.
