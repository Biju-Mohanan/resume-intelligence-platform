# Resume Intelligence Platform

A free-first, open-source career workspace for building evidence-based resumes, checking ATS readiness, tailoring to job descriptions, discovering opportunities, and tracking applications.

> Independent implementation inspired by publicly documented resume-workflow capabilities. It does not copy Rezi's proprietary code, scoring formula, branding, or private systems.

## Product goals
- One canonical career profile with evidence and provenance.
- Multiple targeted resumes with version history.
- Resume import, editing, templates, and PDF/DOCX export.
- Explainable ATS checks and job-description keyword analysis.
- Truth-preserving AI-assisted tailoring with human approval.
- Job discovery, deduplication, matching, and application tracking.
- Cover-letter and interview-preparation workspaces.
- A permissioned API/MCP layer for agent workflows.

## Repository layout
- `apps/api`: FastAPI backend and domain services.
- `apps/web`: React + TypeScript frontend.
- `packages/contracts`: shared API/data contracts (planned).
- `docs`: architecture, roadmap, security, and product scope.

## Current status
Foundation scaffold. Product modules are added incrementally; planned modules are clearly marked and must not be treated as production-ready.

## Free-first deployment
GitHub is the source repository, not the runtime host. A hosted frontend, API runtime, and persistent database are separate services. Free tiers can sleep, impose quotas, or change; production deployment requires explicit approval and provider configuration.

## Development
See [API](apps/api/README.md) and [Web](apps/web/README.md). Copy `.env.example` to `.env` for local configuration. Never commit secrets or real candidate personal data.

## Integrity and safety
- Never invent qualifications, dates, employers, metrics, or skills.
- Keep AI suggestions as drafts until a user approves them.
- Require explicit confirmation for destructive edits and external submissions.
- Treat job descriptions and imported documents as untrusted input.
- Keep user data private and isolated.
