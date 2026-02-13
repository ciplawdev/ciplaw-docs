---
title: Zero Plain Exposure
---

"Zero Plain Exposure" is an engineering constraint: do not persist plaintext data anywhere the system operator or third parties can access it.

Key points:
- Data should be processed in-memory and encrypted at-rest immediately using envelope encryption.
- Minimize logs that contain plaintext — use hashes or identifiers instead.
- Design APIs to accept cryptographic envelopes instead of raw secrets.

This is a practical constraint, not a marketing claim: it reduces exposure but does not eliminate all risk (see trust model).
