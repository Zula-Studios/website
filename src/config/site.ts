export const SITE = {
  name: 'Zula Studios',
  // ≤ 60 chars total when used in default title: "Zula Studios – {tagline}"
  tagline: 'Shopify Studio Hamburg',
  description:
    'Professionelle Shopify-Entwicklung in Hamburg: Shops erstellen, Migrationen & Custom Apps mit Laravel, Next.js & Astro. 10+ Projekte. Kostenloses Erstgespräch.',
  url: 'https://zulastudios.de',
  email: 'hello@zulastudios.com',
  phone: '+49 (0) 176 34 44 74 85',
  twitterHandle: '@zulastudios',
  address: {
    street: 'Ostpreußenstrasse 6',
    city: 'Henstedt-Ulzburg',
    zip: '24558',
    country: 'DE',
    countryName: 'Deutschland',
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/zulastudios/',
    github: 'https://github.com/zula-studios',
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
  { label: 'Karriere', href: '/karriere' },
  { label: 'Kontakt', href: '/kontakt' },
];
