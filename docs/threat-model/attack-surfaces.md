---
title: Attack Surfaces
---

Concise enumeration of practical attack surfaces:

- Network transport (use TLS with mutual auth when required).
- Operator access to runtime memory or keys (protect keys with KMS/HSM).
- Replay of previously-signed envelopes (use nonces/timestamps).
- Malicious clients sending malformed or large payloads (validate and rate-limit).
