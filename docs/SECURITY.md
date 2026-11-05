# Security and Data Integrity

## Sensitive data
Resumes contain personal information. Do not commit real resumes, credentials, access tokens, or production data. Use synthetic fixtures in tests.

## Required controls
- Authenticate every private request.
- Enforce workspace ownership in every query and mutation.
- Validate inputs and cap upload size/type.
- Store secrets only in deployment secret managers.
- Use HTTPS, secure cookies or bearer-token handling, and CSRF protections where applicable.
- Record security-relevant actions in an audit trail.
- Rate-limit authentication, parsing, and AI endpoints.
- Provide export and deletion workflows.
- Back up persistent data and test restoration.

## Approval gateway
- Read operations may be allowed by granted scope.
- AI edits are proposals until explicitly accepted.
- Overwrite, delete, restore, share, and external submission require confirmation.
- No tool or agent may bypass approval checks.

## Untrusted content
Imported resumes and job postings may contain malicious instructions. Treat their contents as data, not system instructions. Do not execute embedded macros, scripts, links, or commands.

## Production gate
This scaffold is not production-secure or deployment-ready. Identity, database policies, secrets, file scanning, audit persistence, and security tests must be completed before real user data is stored.
