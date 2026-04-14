export const SITE = {
  name: 'Zula Studios',
  // ≤ 60 chars total when used in default title: "Zula Studios – {tagline}"
  tagline: 'Shopify Studio Hamburg',
  description:
    'Professionelle Shopify-Entwicklung in Hamburg: Shops erstellen, Migrationen & Custom Apps mit Laravel, Next.js & Astro. 100+ Projekte. Kostenloses Erstgespräch.',
  url: 'https://zulastudios.de',
  email: 'hallo@zulastudios.de',
  phone: '+49 40 12345678',
  twitterHandle: '@zulastudios',
  address: {
    street: 'Musterstraße 1',
    city: 'Hamburg',
    zip: '20095',
    country: 'DE',
    countryName: 'Deutschland',
  },
  social: {
    linkedin: 'https://linkedin.com/company/zulastudios',
    instagram: 'https://instagram.com/zulastudios',
    github: 'https://github.com/zulastudios',
    twitter: 'https://twitter.com/zulastudios',
  },
  logo: '/images/logo.svg',
  ogImage: '/images/og-default.jpg',
  founded: '2020',
  locale: 'de_DE',
  lang: 'de',
};

export const NAV_LINKS = [
  { label: 'Leistungen', href: '/leistungen' },
  {
    label: 'Services',
    href: '#',
    children: [
      { label: 'Shopify Shop erstellen', href: '/leistungen/shopify-shop-erstellen' },
      { label: 'Shopify Migration', href: '/leistungen/shopify-migration' },
      { label: 'Individuelle Entwicklung', href: '/leistungen/individuelle-entwicklung' },
    ],
  },
  { label: 'Blog', href: '/blog' },
  { label: 'Über uns', href: '/ueber-uns' },
  { label: 'Kontakt', href: '/kontakt' },
];
