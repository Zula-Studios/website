export const SITE = {
  name: 'Zula Studios',
  // ≤ 60 chars total when used in default title: "Zula Studios – {tagline}"
  tagline: 'Shopify Agentur Hamburg',
  description:
    'Shopify Agentur in Hamburg: Shops, Migrationen, Astro-Websites und Laravel-Entwicklung. 10+ Projekte. Kostenloses Erstgespräch für Unternehmen in HH & DE.',
  url: 'https://zulastudios.de',
  email: 'hello@zulastudios.com',
  phone: '+49 (0) 176 34 44 74 85',
  twitterHandle: '@zulastudios',
  address: {
    street: 'Ostpreußenstrasse 6',
    city: 'Hamburg',
    zip: '20095',
    country: 'DE',
    countryName: 'Deutschland',
  },
  geo: {
    latitude: 53.5511,
    longitude: 9.9937,
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/zulastudios/',
    github: 'https://github.com/Zula-Studios',
    instagram: 'https://www.instagram.com/zula_studios/',
    facebook: 'https://www.facebook.com/profile.php?id=61595344593815',
  },
  githubRepo: 'https://github.com/Zula-Studios',
  // Cal-Link für die Terminbuchung (cal.eu-Instanz): Pfad + Origin getrennt,
  // da das Inline-Embed beides braucht. Buchungs-URL: `${calcomOrigin}/${calcom}`
  calcom: 'zula-studios/30min',
  calcomOrigin: 'https://cal.eu',
  logo: '/images/logo.png',
  ogImage: '/images/og-default.jpg',
  founded: '2020',
  locale: 'de_DE',
  lang: 'de',
};

export const NAV_LINKS = [
  { label: 'Referenzen', href: '/referenzen' },
  { label: 'Leistungen', href: '/leistungen' },
  {
    label: 'Services',
    href: '#',
    children: [
      { label: 'Shopify Shop erstellen', href: '/leistungen/shopify-shop-erstellen' },
      { label: 'Shopify Migration', href: '/leistungen/shopify-migration' },
      { label: 'WordPress zu Astro', href: '/leistungen/wordpress-astro-migration' },
      { label: 'Landingpages', href: '/leistungen/landingpages' },
      { label: 'Astro Websites', href: '/leistungen/astro-websites' },
      { label: 'Individuelle Entwicklung', href: '/leistungen/individuelle-entwicklung' },
    ],
  },
  { label: 'Über uns', href: '/ueber-uns' },
  { label: 'Karriere', href: '/karriere' },
  { label: 'Kontakt', href: '/kontakt' },
];
