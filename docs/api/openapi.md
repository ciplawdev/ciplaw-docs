---
title: OpenAPI
---

The OpenAPI spec is provided at `/openapi/ciplaw-gateway.v1.yaml`.

You can view it with tools such as `swagger-ui` or `redoc`. Example embed (Redoc):

```html
<div id="redoc"></div>
<script src="https://cdn.redoc.ly/redoc/latest/bundles/redoc.standalone.js"></script>
<script>
  Redoc.init('/openapi/ciplaw-gateway.v1.yaml', {}, document.getElementById('redoc'))
</script>
```

Use the spec to generate client code, tests, or to validate requests in CI.
