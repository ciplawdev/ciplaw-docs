---
title: Quickstart
---

This quickstart shows a 5-minute local run using the reference implementation (ciplaw-zero) via Docker and simple curl examples.

Prerequisites
- Node 20+ and pnpm (for the docs site)
- Docker (to run the gateway locally)

Run locally (reference image from ciplaw-zero):

```bash
# start the reference gateway (example image tag)
docker run --rm -p 8080:8080 ciplaw/ciplaw-zero:latest
```

POST /v1/verify

```bash
curl -X POST http://localhost:8080/v1/verify \
  -H "Content-Type: application/json" \
  -d '{"payload":"eyJhbGciOi...","signature":"base64sig"}'
```

Successful response (201 Created):

```json
{
  "id": "verify_01F...",
  "status": "accepted",
  "received_at": "2026-02-13T12:00:00Z"
}
```

GET /v1/verify/:id

```bash
curl http://localhost:8080/v1/verify/verify_01F...
```

Successful response (200):

```json
{
  "id": "verify_01F...",
  "status": "success",
  "result": { "valid": true }
}
```

If you are testing locally, use the gateway logs to correlate requests.
