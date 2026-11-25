import { iso } from './visuals';

/**
 * Zentrale Quelle für alle Leistungen.
 *
 * Header (Desktop + Mobile), Footer, /leistungen und die Detailseiten lesen
 * von hier. Eine neue Leistung (z. B. ein KI-Service) = ein neuer Eintrag in
 * `services` — fertig.
 *
 * - Hat die Leistung eine eigene Seite unter `src/pages/leistungen/<slug>.astro`,
 *   reicht der Basiseintrag ohne `page`.
 * - Ohne eigene Seite: `page` ausfüllen — dann rendert
 *   `src/pages/leistungen/[slug].astro` die Detailseite automatisch im
 *   gleichen Design wie die bestehenden Leistungsseiten.
 * - `draft: true` blendet eine Leistung überall aus (Navigation, Übersicht,
 *   Detailseite, Sitemap), bis sie live gehen soll.
 */

export type ServiceCategoryId = 'web' | 'ki';

export interface ServiceCategory {
  id: ServiceCategoryId;
  /** Kurzlabel für Navigation & Footer */
  label: string;
  /** Überschrift auf /leistungen */
  title: string;
  desc: string;
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'web',
    label: 'Web & E-Commerce',
    title: 'Web & E-Commerce',
    desc: 'Shopify-Shops, Migrationen, Astro-Websites und individuelle Entwicklung.',
  },
  {
    id: 'ki',
    label: 'KI & Automatisierung',
    title: 'KI & Automatisierung',
    desc: 'KI-Lösungen, die Abläufe beschleunigen — integriert in Ihren Shop, Ihre Website und Ihre Tools.',
  },
];

export interface ServicePage {
  /** <title> der Seite */
  metaTitle: string;
  metaDescription: string;
  /** schema.org serviceType, z. B. 'AI Chatbot Development' */
  serviceType: string;
  hero: {
    title: string;
    accent: string;
    text: string;
    /** Fallback: /images/heroes/hero-services.png */
    image?: string;
    imageWidth?: number;
    imageHeight?: number;
    /** Unsichtbarer SEO-Präfix für die H1 */
    seo?: string;
  };
  /** Einleitungsabsatz unter dem Hero (fetter Lead-in + Text) */
  intro?: { lead: string; text: string };
  useCases?: string[];
  benefits?: {
    label: string;
    title: string;
    items: { icon: string; title: string; desc: string }[];
  };
  included?: { label?: string; title: string; items: string[] };
  process?: {
    label?: string;
    title: string;
    text?: string;
    steps: { title: string; desc: string }[];
  };
  faqs?: { q: string; a: string }[];
  finalCta?: { title: string; text: string };
}

export interface Service {
  slug: string;
  category: ServiceCategoryId;
  title: string;
  /** Kürzerer Name in Header-Dropdown (Fallback: title) */
  navLabel?: string;
  /** Name im Footer (Fallback: navLabel → title) */
  footerLabel?: string;
  desc: string;
  image: string;
  cta: string;
  features: string[];
  /** Nur für Leistungen ohne eigene .astro-Seite */
  page?: ServicePage;
  draft?: boolean;
}

export const allServices: Service[] = [
  // ── Web & E-Commerce ──────────────────────────────────────────────
  {
    slug: 'shopify-shop-erstellen',
    category: 'web',
    title: 'Shopify Shop erstellen',
    desc: 'Von der Konzeption über das Custom Theme bis zum Launch. Performante Shops, die konvertieren.',
    image: iso.shopify,
    cta: 'Shop erstellen lassen',
    features: ['Custom Theme Entwicklung', 'Mobile-first Design', 'SEO-Volloptimierung', 'Zahlungsanbieter-Integration', 'Performance-Optimierung'],
  },
  {
    slug: 'shopify-migration',
    category: 'web',
    title: 'Shopify Migration',
    desc: 'Sicher & datenverlustfrei von WooCommerce, Magento, OXID, Shopware und anderen Systemen zu Shopify.',
    image: iso.migration,
    cta: 'Migration starten',
    features: ['Datenmigration (Produkte, Kunden, Bestellungen)', 'SEO URL-Redirects', 'Zero-Downtime Ansatz', 'QA & Testing', 'Post-Launch Support'],
  },
  {
    slug: 'landingpages',
    category: 'web',
    title: 'Landingpages',
    desc: 'Conversion-starke Landingpages mit Astro.js — schnell, mobil optimiert und perfekt für Ads, Produkt-Launches und Lead-Kampagnen.',
    image: iso.landing,
    cta: 'Landingpage anfragen',
    features: ['Astro.js Performance', 'Conversion-Design', 'Formulare & Lead-Capture', 'GA4 & Meta Pixel', 'Core Web Vitals optimiert', 'Launch in 2–3 Wochen'],
  },
  {
    slug: 'individuelle-entwicklung',
    category: 'web',
    title: 'Individuelle Entwicklung',
    footerLabel: 'Laravel & Astro.js Entwicklung',
    desc: 'Custom Apps, Liquid-Entwicklung und API-Integrationen — mit Astro.js, Next.js und Laravel dort, wo es technisch Sinn macht. Maßgeschneidert, wenn Standard nicht ausreicht.',
    image: iso.laravel,
    cta: 'Projekt besprechen',
    features: ['Custom Shopify Apps', 'Frontends: Astro.js & Next.js', 'Backends & APIs: Laravel', 'ERP / PIM / WMS Integration', 'Headless Commerce', 'Performance-Audits'],
  },

  // ── KI & Automatisierung ──────────────────────────────────────────
  // Vorlage: Inhalte prüfen/anpassen und `draft` entfernen, um live zu gehen.
  {
    slug: 'ki-chatbots',
    category: 'ki',
    title: 'KI-Chatbots & Assistenten',
    navLabel: 'KI-Chatbots',
    desc: 'KI-Assistenten für Shop und Website — beantworten Produkt- und Supportfragen rund um die Uhr, auf Basis Ihrer eigenen Inhalte.',
    image: iso.talk,
    cta: 'Chatbot anfragen',
    features: ['Training auf eigenen Inhalten', 'Shopify- & Website-Integration', 'Übergabe an Ihr Support-Team', 'DSGVO-konformes Setup', 'Mehrsprachig', 'Auswertung & Optimierung'],
    page: {
      metaTitle: 'KI-Chatbots Hamburg – Assistenten für Shop & Website',
      metaDescription: 'KI-Chatbots aus Hamburg: Assistenten für Shopify und Websites, trainiert auf Ihren Inhalten, DSGVO-konform. Jetzt kostenloses Erstgespräch vereinbaren.',
      serviceType: 'AI Chatbot Development',
      hero: {
        title: 'KI-Chatbots,',
        accent: 'die wirklich helfen.',
        text: 'Wir bauen KI-Assistenten, die Ihre Kunden auf Basis Ihrer eigenen Inhalte beraten — integriert in Shop, Website und Support-Tools.',
        seo: 'KI-Chatbots entwickeln in Hamburg — ',
      },
      intro: {
        lead: 'KI-Agentur in Hamburg, bundesweit remote:',
        text: 'Wir verbinden Sprachmodelle mit Ihren Produktdaten, FAQs und Dokumenten — für schnellere Antworten, weniger Support-Tickets und mehr Conversions.',
      },
      useCases: ['Produktberatung', 'Kundensupport', 'Bestellstatus', 'Lead-Qualifizierung', 'Interne Wissensdatenbank', 'Terminbuchung'],
      benefits: {
        label: 'Warum KI-Chatbots?',
        title: 'Antworten in Sekunden, rund um die Uhr',
        items: [
          { icon: iso.launch, title: '24/7 erreichbar', desc: 'Ihre Kunden bekommen sofort Antworten — auch nachts und am Wochenende.' },
          { icon: iso.target, title: 'Auf Ihre Inhalte trainiert', desc: 'Antworten basieren auf Ihren Produkten, FAQs und Richtlinien.' },
          { icon: iso.shield, title: 'DSGVO-konform', desc: 'EU-Hosting-Optionen, klare Datenflüsse und transparente Einwilligung.' },
          { icon: iso.chart, title: 'Messbar', desc: 'Auswertung von Fragen, Lücken und Conversions für stetige Verbesserung.' },
        ],
      },
      included: {
        title: 'Alles für einen produktiven Assistenten',
        items: ['Use-Case-Workshop', 'Wissensbasis aus Ihren Inhalten', 'Chat-Widget im Markendesign', 'Shopify-/Website-Integration', 'Übergabe an Mensch', 'Analytics-Dashboard', 'DSGVO-Dokumentation', 'Launch & Schulung'],
      },
      process: {
        title: 'Vom Use Case zum Live-Assistenten',
        text: 'Klarer Ablauf, früh testbar — typischerweise live in 3–5 Wochen.',
        steps: [
          { title: 'Use Case & Ziele', desc: 'Welche Fragen soll der Assistent beantworten — und woran messen wir den Erfolg?' },
          { title: 'Datenbasis', desc: 'Produkte, FAQs und Dokumente aufbereiten und anbinden.' },
          { title: 'Prompting & Verhalten', desc: 'Tonalität, Grenzen und Übergaben an Ihr Team definieren.' },
          { title: 'Integration', desc: 'Widget in Shop oder Website einbinden, Tools wie CRM oder Ticketsystem anbinden.' },
          { title: 'Tests & Feinschliff', desc: 'Realistische Testfragen, Qualitätschecks und Optimierung.' },
          { title: 'Go-Live & Monitoring', desc: 'Launch, Auswertung und laufende Verbesserung.' },
        ],
      },
      faqs: [
        { q: 'Welche KI-Modelle setzt ihr ein?', a: 'Wir wählen das Modell passend zu Use Case, Datenschutz und Budget — und können es später wechseln, ohne den Chatbot neu zu bauen.' },
        { q: 'Ist das DSGVO-konform?', a: 'Ja, mit EU-Hosting-Optionen, Auftragsverarbeitung und transparenter Einwilligung. Wir dokumentieren die Datenflüsse für Ihre Datenschutzerklärung.' },
        { q: 'Funktioniert das mit Shopify?', a: 'Ja. Der Assistent kann Produktdaten, Verfügbarkeiten und Bestellstatus aus Shopify nutzen.' },
      ],
      finalCta: { title: 'KI-Assistent geplant?', text: 'Erzählen Sie uns von Ihrem Use Case — wir melden uns mit einem konkreten Vorschlag.' },
    },
  },
];

/** Alle veröffentlichten Leistungen in Anzeige-Reihenfolge. */
export const services = allServices.filter(s => !s.draft);

export const serviceHref = (s: Service) => `/leistungen/${s.slug}`;
export const serviceNavLabel = (s: Service) => s.navLabel ?? s.title;
export const serviceFooterLabel = (s: Service) => s.footerLabel ?? s.navLabel ?? s.title;

/** Kategorien mit ihren (veröffentlichten) Leistungen — leere Kategorien entfallen. */
export const servicesByCategory = serviceCategories
  .map(category => ({ category, items: services.filter(s => s.category === category.id) }))
  .filter(group => group.items.length > 0);

/** Leistungen ohne eigene .astro-Seite, die über [slug].astro gerendert werden. */
export const generatedServicePages = services.filter(
  (s): s is Service & { page: ServicePage } => Boolean(s.page),
);
