---
title: Envelope Encryption
---

Envelope encryption: the payload is encrypted using a data key, which is itself encrypted (wrapped) by a master key.

Practices:
- Do not store unwrapped data keys or plaintext payloads.
- Use short-lived data keys per message when practical.
- Ensure the master key is protected and rotated according to policy.

This pattern enables the gateway to keep encrypted blobs at rest while allowing authorized verification/processing when keys are available.
