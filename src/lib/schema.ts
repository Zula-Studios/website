import { SITE } from '@/config/site';

/** Hamburg + nationwide — for Service / ProfessionalService areaServed */
export const areaServedHH = [
  { '@type': 'City' as const, name: 'Hamburg' },
  { '@type': 'AdministrativeArea' as const, name: 'Hamburg' },
  { '@type': 'Country' as const, name: 'Germany' },
];

export function localBusinessSchema(overrides: Record<string, unknown> = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE.url}/#localservice`,
    name: SITE.name,
    alternateName: 'Zula Studios Hamburg',
    description: SITE.description,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    image: new URL(SITE.logo, SITE.url).toString(),
    priceRange: '€€',
    foundingDate: SITE.founded,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      postalCode: SITE.address.zip,
      addressCountry: SITE.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    areaServed: areaServedHH,
    sameAs: [...Object.values(SITE.social).filter(Boolean), SITE.githubRepo].filter(Boolean),
    ...overrides,
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  serviceType: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    url: opts.url,
    provider: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
      address: {
        '@type': 'PostalAddress',
        addressLocality: SITE.address.city,
        addressCountry: SITE.address.country,
      },
    },
    serviceType: opts.serviceType,
    areaServed: areaServedHH,
  };
}

export function faqPageSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };
}
