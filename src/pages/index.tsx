import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout title="Ciplaw" description="Zero Plain Exposure.">
      <main style={{ padding: '3rem', maxWidth: 900 }}>
        <h1>Ciplaw — Zero Plain Exposure.</h1>
        <p>Developer-focused documentation for integrating with the Ciplaw gateway.</p>
        <ul>
          <li><Link to="/docs/quickstart">Quickstart</Link></li>
          <li><Link to="/docs/api/intro">API Reference</Link></li>
          <li><Link to="/docs/threat-model/assumptions">Threat Model</Link></li>
          <li><Link to="/docs/faq">FAQ</Link></li>
        </ul>
      </main>
    </Layout>
  );
}
