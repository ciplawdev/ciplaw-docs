---
title: FAQ
---

Q: How is the master key rotated?

A: Rotate the master key in KMS/HSM and rewrap short-lived data keys. Avoid bulk unwrapping of stored blobs.

Q: What are data retention policies?

A: Retain only metadata and hashed identifiers by default. Encrypted blobs retention should be minimized and governed by policy.

Q: Do you log plaintext?

A: No. Logs should only contain hashes, IDs, and operational metadata.

Q: What rate limits exist?

A: Implement per-client rate limits and burst controls. The gateway supports standard rate-limit headers and 429 responses.

Q: How is replay protected?

A: Clients include nonces and timestamps in envelopes; the gateway rejects expired or replayed nonces.
