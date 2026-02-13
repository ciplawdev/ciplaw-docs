/**
 * Sidebars for the Ciplaw docs site.
 */

const sidebars = {
  docs: [
    'index',
    'quickstart',
    {
      type: 'category',
      label: 'Concepts',
      items: [
        'concepts/overview',
        'concepts/zero-plain-exposure',
        'concepts/envelope-encryption',
        'concepts/trust-model',
      ],
    },
    {
      type: 'category',
      label: 'API',
      items: [
        'api/intro',
        'api/gateway',
        'api/openapi',
      ],
    },
    {
      type: 'category',
      label: 'Threat Model',
      items: [
        'threat-model/attack-surfaces',
        'threat-model/assumptions',
        'threat-model/mitigations',
      ],
    },
    'faq',
    'changelog',
  ],
};

export default sidebars;
