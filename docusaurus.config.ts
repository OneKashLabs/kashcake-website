import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const DESCRIPTION =
  'Birthday and anniversary reminders from your contacts on Android. No internet access. Free and open source.';

// The one organization every OneKash Labs site points to, defined on onekash.org.
const ORG = {'@type': 'Organization', '@id': 'https://onekash.org/#org', name: 'OneKash Labs', url: 'https://onekash.org'};

const config: Config = {
  title: 'KashCake',
  tagline: 'Never forget a Cake Day',
  favicon: 'img/favicon.png',
  future: {v4: true},
  url: 'https://kashcake.onekash.org',
  baseUrl: '/',
  organizationName: 'OneKashLabs',
  projectName: 'kashcake-website',
  // GitHub Pages serves /path/index.html at /path/, so links use the slash form.
  trailingSlash: true,
  onBrokenLinks: 'throw',
  i18n: {defaultLocale: 'en', locales: ['en']},
  headTags: [
    {tagName: 'link', attributes: {rel: 'apple-touch-icon', href: '/img/logo.png'}},
    {tagName: 'meta', attributes: {name: 'theme-color', content: '#faf8f2'}},
    {
      tagName: 'script',
      attributes: {type: 'application/ld+json'},
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'KashCake',
        url: 'https://kashcake.onekash.org',
        description: DESCRIPTION,
        operatingSystem: 'Android 12 or later',
        applicationCategory: 'LifestyleApplication',
        downloadUrl: 'https://github.com/OneKashLabs/KashCake/releases',
        softwareHelp: 'https://github.com/OneKashLabs/KashCake/issues',
        license: 'https://www.apache.org/licenses/LICENSE-2.0',
        image: 'https://kashcake.onekash.org/img/logo.png',
        screenshot: [
          'https://kashcake.onekash.org/img/app/home.webp',
          'https://kashcake.onekash.org/img/app/quick_view.webp',
          'https://kashcake.onekash.org/img/app/reminder_sheet.webp',
        ],
        offers: {'@type': 'Offer', price: '0', priceCurrency: 'USD'},
        sameAs: ['https://github.com/OneKashLabs/KashCake'],
        author: ORG,
        publisher: ORG,
      }),
    },
    {
      tagName: 'script',
      attributes: {type: 'application/ld+json'},
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'KashCake',
        url: 'https://kashcake.onekash.org/',
        publisher: ORG,
      }),
    },
  ],
  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        theme: {customCss: './src/css/custom.css'},
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    image: 'img/social-card.png',
    metadata: [
      {name: 'description', content: DESCRIPTION},
      {property: 'og:type', content: 'website'},
      {property: 'og:site_name', content: 'KashCake'},
      {property: 'og:image:width', content: '1280'},
      {property: 'og:image:height', content: '640'},
      {property: 'og:image:alt', content: 'KashCake: never forget a Cake Day. Kash holding a birthday cake, beside the app’s list of upcoming dates.'},
      {name: 'twitter:image:alt', content: 'KashCake: never forget a Cake Day. Kash holding a birthday cake, beside the app’s list of upcoming dates.'},
    ],
    colorMode: {respectPrefersColorScheme: true},
    navbar: {
      title: 'KashCake',
      logo: {alt: 'KashCake logo', src: 'img/icon-rounded.png'},
      items: [
        // The home page is not this link's page, so it never shows as the current one.
        {to: '/#get', label: 'Get KashCake', position: 'left', activeBaseRegex: '^$'},
        {to: '/beta/', label: 'Join the beta', position: 'left'},
        {href: 'https://github.com/sponsors/one-kash', label: 'Donate', position: 'right'},
        {href: 'https://github.com/OneKashLabs/KashCake', label: 'Source', position: 'right'},
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          items: [
            {label: 'Get KashCake', to: '/#get'},
            {label: 'Join the beta', to: '/beta/'},
            {label: 'Privacy', href: 'https://github.com/OneKashLabs/KashCake/blob/main/PRIVACY.md'},
            {label: 'Report a problem', href: 'https://github.com/OneKashLabs/KashCake/issues'},
            {label: 'Donate', href: 'https://github.com/sponsors/one-kash'},
            {label: 'Source', href: 'https://github.com/OneKashLabs/KashCake'},
          ],
        },
      ],
      copyright:
        'Built with love in Austin by <a href="https://onekash.org">onekash labs</a>. Free and open source under Apache-2.0.',
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
