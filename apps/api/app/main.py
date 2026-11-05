from fastapi import FastAPI

app = FastAPI(
    title="Resume Intelligence Platform API",
    version="0.1.0",
    description="Free-first resume workspace and career intelligence API.",
)


@app.get("/health", tags=["system"])
def health() -> dict[str, str]:
    """Basic liveness endpoint; does not inspect external dependencies."""
    return {"status": "ok"}


@app.get("/api/v1", tags=["system"])
def api_root() -> dict[str, str]:
    return {
        "name": "Resume Intelligence Platform",
        "version": "0.1.0",
        "status": "foundation",
    }
