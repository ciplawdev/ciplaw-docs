---
title: Gateway API
---

POST /v1/verify

Request (application/json):

```json
{
  "payload": "<base64-or-jwt-or-envelope>",
  "signature": "<base64sig>",
  "metadata": { "client_id": "acme" }
}
```

Responses:
- 201 Created

```json
{
  "id": "verify_01F...",
  "status": "accepted",
  "received_at": "2026-02-13T12:00:00Z"
}
```

- 400 Bad Request (malformed payload)

```json
{ "error": "invalid_request", "message": "missing payload" }
```

- 422 Unprocessable Entity (signature invalid)

```json
{ "error": "invalid_signature", "message": "signature verification failed" }
```

GET /v1/verify/{id}

Responses:
- 200 OK

```json
{
  "id": "verify_01F...",
  "status": "success|failed|pending",
  "result": { "valid": true }
}
```

- 404 Not Found

```json
{ "error": "not_found", "message": "id not found" }
```

Error shape

All errors use this generic shape where appropriate:

```json
{
  "error": "short_code",
  "message": "human readable explanation",
  "details": { }
}
```
