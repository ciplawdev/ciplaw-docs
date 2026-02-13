import { Config } from '@docusaurus/types';

const config: Config = {
  title: 'Ciplaw',
  tagline: 'Zero Plain Exposure.',
  url: 'https://example.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'static/img/logo.svg',
  organizationName: 'ciplawdev',
  projectName: 'ciplaw-docs',
  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl: undefined,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
    },
    navbar: {
      title: 'Ciplaw',
      logo: { src: 'img/logo.svg', alt: 'Ciplaw' },
      items: [
        { to: '/docs/quickstart', label: 'Quickstart', position: 'left' },
        { to: '/docs/api/intro', label: 'API', position: 'left' },
        { to: '/docs/threat-model/assumptions', label: 'Threat Model', position: 'left' },
        { to: '/docs/faq', label: 'FAQ', position: 'left' },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `© ${new Date().getFullYear()} Ciplaw`,
    },
    prism: {
      theme: undefined,
      darkTheme: undefined,
    },
  },
};

export default config;
