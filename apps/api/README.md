# API

FastAPI service for the Resume Intelligence Platform.

## Status
Foundation only. The current endpoints are liveness and API identity checks; business modules are planned.

## Run locally
Python 3.11+ recommended.

```bash
python -m venv .venv
# Windows: .venv\Scripts\activate
# macOS/Linux: source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Open `/docs` for the development API schema and `/health` for liveness.
