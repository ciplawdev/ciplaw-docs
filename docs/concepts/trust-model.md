---
title: Trust Model
---

What Ciplaw assumes:
- Clients hold signing keys or produce correctly-wrapped envelopes.
- The gateway operator follows documented operational controls.

What Ciplaw does not assume:
- It does not assume operators have access to unencrypted client secrets.
- It does not assume the network is always private — transport protections are required.

Design implications:
- Clients should authenticate and present cryptographic material in envelope form.
- Audit logs should avoid storing secrets.
