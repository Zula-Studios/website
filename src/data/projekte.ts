export type ServiceType = 'migration' | 'shop' | 'entwicklung' | 'website';

export interface Projekt {
  slug: string;
  client: string;
  clientKurz: string;
  industry: string;
  service: string;
  serviceType: ServiceType;
  jahr: string;
  tagline: string;
  description: string;
  challenge: string;
  solution: string;
  resultText: string;
  metrics: { value: string; label: string }[];
  tags: string[];
  testimonial?: { quote: string; name: string; role: string };
  url?: string;
  featured: boolean;
  // Visual: used as background color for the project card visual
  cardBg: string;
  cardAccent: string;
}

export const projekte: Projekt[] = [
  {
    slug: 'acos-paris-shopify-shop',
    client: 'Acos Paris',
    clientKurz: 'AP',
    industry: 'Friseur & Beauty B2B',
    service: 'Full-Service Shopify',
    serviceType: 'shop',
    jahr: '2024',
    tagline: 'Von null auf Vollgas: Shop-Design, Entwicklung, Google & Meta Ads — komplett aus einer Hand.',
    description:
      'Acos Paris ist ein europäischer Anbieter von Friseurbedarf, Salonmöbeln und Haarpflegeprodukten. Wir übernahmen das gesamte Projekt von A bis Z: vom Shop-Design über die technische Umsetzung auf Shopify bis hin zu laufenden Google- und Meta-Ads-Kampagnen.',
    challenge:
      'Acos Paris startete ohne Online-Präsenz und benötigte nicht nur einen Shop, sondern eine komplette digitale Strategie. B2B-Karton-Bestellungen für Salons, ein breites Sortiment aus über 10 Marken sowie Salonmöbel mit hohen Warenkorbwerten mussten nahtlos abgebildet werden — und von Anfang an mit gezieltem Paid Traffic bespielt werden.',
    solution:
      'Komplette Umsetzung von A–Z: Konzept & UI/UX-Design, Shopify-Entwicklung mit strukturierter Kollektion-Architektur (Salonmöbel, Werkzeuge, Haarpflege), B2B-Karton-Kategorie für Großbestellungen sowie tägliche Deal-Sektionen. Parallel dazu Aufbau und Management der Google Shopping- & Search-Kampagnen sowie Meta-Ads (Facebook & Instagram) für den europäischen Markt.',
    resultText:
      'Vom ersten Tag an brachten die Paid-Kampagnen qualifizierten Traffic in den neuen Shop. Google Shopping und Meta Ads spielten zielgruppengenau sowohl Endkunden als auch professionelle Salons an — mit messbaren Ergebnissen im Umsatz und bei den B2B-Großbestellungen.',
    metrics: [
      { value: 'A–Z', label: 'Design bis Live-Betrieb' },
      { value: 'Google', label: 'Shopping & Search Ads' },
      { value: 'Meta', label: 'Facebook & Instagram Ads' },
      { value: 'EU', label: 'Europa­weiter Markt' },
    ],
    tags: ['Shopify', 'Full-Service', 'Google Ads', 'Meta Ads', 'UI/UX Design', 'B2B', 'Salonmöbel', 'Europa-Versand'],
    url: 'https://acosparis.com',
    featured: true,
    cardBg: 'linear-gradient(135deg, #1A0A00 0%, #0D0D0D 100%)',
    cardAccent: '#C9A84C',
  },
  {
    slug: 'hochform-website',
    client: 'HOCHFORM GmbH',
    clientKurz: 'HF',
    industry: 'Gebäudereinigung',
    service: 'Website & SEO',
    serviceType: 'website',
    jahr: '2025',
    tagline: 'Professioneller Web-Auftritt für ISO-zertifiziertes Reinigungsunternehmen — mehr Anfragen, mehr Aufträge.',
    description:
      'HOCHFORM GmbH ist ein professionelles Reinigungsunternehmen in Hamburg und Norderstedt mit drei ISO-Zertifizierungen (9001, 14001, 45001). Wir entwickelten einen modernen, conversion-optimierten Website-Auftritt, der Vertrauen schafft und Neukunden gewinnt.',
    challenge:
      'Als ISO-zertifiziertes Unternehmen fehlte HOCHFORM ein digitaler Auftritt, der das professionelle Niveau der Dienstleistungen widerspiegelt. 12 verschiedene Reinigungsleistungen mussten strukturiert und für Suchmaschinen optimiert dargestellt werden, ohne den Besucher zu überfordern.',
    solution:
      'Entwicklung einer modernen Multi-Service-Website mit klarer Navigationsstruktur für alle 12 Leistungsseiten (Büro-, Gebäude-, Glas-, Industriereinigung und mehr). Integration der drei ISO-Zertifikate als Vertrauenssignale. Online-Buchungsformular für direkte Terminanfragen. Lokale SEO-Optimierung für Hamburg & Norderstedt.',
    resultText:
      'Der neue Auftritt positioniert HOCHFORM als klaren Qualitätsführer in der Region. Die ISO-Zertifikate als prominentes Design-Element erhöhen die Abschlussquote bei B2B-Anfragen spürbar.',
    metrics: [
      { value: '3', label: 'ISO-Zertifikate integriert' },
      { value: '12', label: 'Leistungsseiten' },
      { value: 'B2B', label: 'Fokus Gewerbe­kunden' },
      { value: 'lokal', label: 'SEO Hamburg & Norderstedt' },
    ],
    tags: ['Webdesign', 'SEO', 'B2B', 'Lokale SEO', 'Gebäudereinigung', 'ISO-zertifiziert'],
    url: 'https://hochform-management.de',
    featured: true,
    cardBg: 'linear-gradient(135deg, #001A2C 0%, #0C1A24 100%)',
    cardAccent: '#0EA5E9',
  },
  {
    slug: 'easy-kfzgutachten-website',
    client: 'Easy Gutachten',
    clientKurz: 'EG',
    industry: 'KFZ-Gutachten',
    service: 'Astro.js Website & Leadgenerierung',
    serviceType: 'website',
    jahr: '2025',
    tagline: 'Blitzschnelle Astro.js-Website für KFZ-Gutachter: perfekte Core Web Vitals, maximale Conversions.',
    description:
      'Easy Gutachten (Mehmet Killi) ist ein unabhängiger KFZ-Sachverständiger in Halstenbek mit über 10 Jahren Erfahrung. Wir entwickelten eine performance- und conversion-optimierte Website mit Astro.js — mehrstufiges Online-Schadenformular, Blog und lokale SEO inklusive.',
    challenge:
      'Als selbstständiger Gutachter fehlte eine digitale Präsenz, die Unfallgeschädigte in der Region abholt und zur Kontaktaufnahme führt. Die Website musste auf mobilen Geräten am Unfallort sofort laden, informieren und Vertrauen aufbauen — gleichzeitig in Google für alle relevanten Regionen sichtbar sein.',
    solution:
      'Umsetzung mit Astro.js für maximale Performance: statisches Rendering, minimales JavaScript, perfekte Core Web Vitals. 3-stufiges Schadensmelde-Formular (Schadensart → Fahrzeugdaten → Kontakt). Blog mit SEO-Artikeln (Totalschaden, Unfallrechte, etc.). Lokale SEO für Halstenbek, Pinneberg und Hamburg. Service-Unterseiten für jede Gutachtenart.',
    resultText:
      'Die Astro.js-Website lädt in unter einer Sekunde und erreicht Top-Werte in den Core Web Vitals. Das Online-Formular generiert kontinuierlich qualifizierte Neukundenanfragen aus der Region.',
    metrics: [
      { value: '100+', label: 'Gutachten erstellt' },
      { value: '<1s', label: 'Ladezeit (Astro.js)' },
      { value: '100', label: 'PageSpeed Score' },
      { value: 'lokal', label: 'SEO Halstenbek & Hamburg' },
    ],
    tags: ['Astro.js', 'Performance', 'Leadgenerierung', 'Lokale SEO', 'Core Web Vitals', 'KFZ-Gutachten'],
    url: 'https://easy-kfzgutachten.de',
    featured: false,
    cardBg: 'linear-gradient(135deg, #001A10 0%, #0C0C0F 100%)',
    cardAccent: '#22C55E',
  },
  {
    slug: 'dnmz-engineering-website',
    client: 'DNMZ Engineering',
    clientKurz: 'DN',
    industry: 'KFZ-Gutachten & Ingenieurbüro',
    service: 'Astro.js Website & Leadgenerierung',
    serviceType: 'website',
    jahr: '2025',
    tagline: 'Astro.js-Hochleistungswebsite für KFZ-Ingenieurbüro: technische Kompetenz trifft digitale Sichtbarkeit.',
    description:
      'DNMZ Engineering & Consulting ist ein unabhängiges KFZ-Sachverständigen-Ingenieurbüro in Bergheim. Wir entwickelten eine performance-optimierte Astro.js-Website, die technische Seriosität ausstrahlt, sofort lädt und Unfallgeschädigte im Rhein-Erft-Kreis zuverlässig in Anfragen verwandelt.',
    challenge:
      'Als Ingenieurbüro fehlte ein digitaler Auftritt, der sowohl technische Kompetenz als auch persönliche Zugänglichkeit vermittelt. Die Website musste auf mobilen Geräten — oft direkt am Unfallort — in Millisekunden laden und das Einzugsgebiet Bergheim, Köln und den gesamten Rhein-Erft-Kreis lokal abdecken.',
    solution:
      'Entwicklung mit Astro.js für maximale Performance und perfekte Core Web Vitals. Klare Leistungsstruktur (KFZ-Gutachten, Fahrzeugbewertung, Schadensanalyse). 2-stufiges Online-Schadenformular. Lokale SEO für Bergheim, Köln, Pulheim, Frechen und 6 weitere Regionen. Mobile-first Design mit sofortigem CTA.',
    resultText:
      'Die Astro.js-Website liefert Top-PageSpeed-Werte und ist für das gesamte Rhein-Erft-Gebiet lokal sichtbar. Das Online-Formular generiert rund um die Uhr qualifizierte Anfragen.',
    metrics: [
      { value: '65+', label: 'Gutachten erstellt' },
      { value: '<1s', label: 'Ladezeit (Astro.js)' },
      { value: '100', label: 'PageSpeed Score' },
      { value: '10', label: 'Lokale SEO-Regionen' },
    ],
    tags: ['Astro.js', 'Performance', 'Lokale SEO', 'Leadgenerierung', 'Core Web Vitals', 'KFZ-Gutachten', 'Bergheim'],
    url: 'https://dnmz-engineering.de',
    featured: false,
    cardBg: 'linear-gradient(135deg, #0A001A 0%, #0C0C14 100%)',
    cardAccent: '#818CF8',
  },
  {
    slug: 'kfzgutachter-alhajji-website',
    client: 'KFZ-Gutachter Al Hajji',
    clientKurz: 'AH',
    industry: 'KFZ-Gutachten',
    service: 'Astro.js Website & Leadgenerierung',
    serviceType: 'website',
    jahr: '2025',
    tagline: 'Astro.js-Performance trifft Hamburger Lokalpräsenz: Von null auf Google-Seite-1 in allen Stadtteilen.',
    description:
      'Bilal Al Hajji ist Kraftfahrzeugtechnikermeister und unabhängiger KFZ-Gutachter in Hamburg. Wir entwickelten eine blitzschnelle Astro.js-Website mit echter Schadensgalerie, 2-stufigem Formular und flächendeckender lokaler SEO für alle neun Hamburger Bezirke.',
    challenge:
      'Bilal Al Hajji hatte trotz langjähriger Erfahrung keinerlei digitale Präsenz. Potenzielle Kunden suchten online nach KFZ-Gutachtern in Hamburg — und fanden ihn nicht. Der neue Auftritt musste sofortige Sichtbarkeit in allen Hamburger Stadtteilen und gleichzeitig hohes Vertrauen schaffen.',
    solution:
      'Umsetzung mit Astro.js für maximale Ladegeschwindigkeit und perfekte Core Web Vitals — entscheidend, da Unfallgeschädigte die Website oft am Unfallort auf dem Smartphone aufrufen. 2-stufiges Schadensmelde-Formular mit WhatsApp-Option. Echte Schadensgalerie mit realen Fällen. Lokale SEO für alle 9 Hamburger Bezirke. FAQ zur freien Gutachterwahl.',
    resultText:
      'Die Kombination aus Astro.js-Performance und strategischer lokaler SEO macht Al Hajji in ganz Hamburg auffindbar. Die echte Schadensgalerie und 24h-Garantie treiben die Conversion-Rate maßgeblich.',
    metrics: [
      { value: '85+', label: 'Gutachten erstellt' },
      { value: '<1s', label: 'Ladezeit (Astro.js)' },
      { value: '100', label: 'PageSpeed Score' },
      { value: '9', label: 'Hamburger Bezirke SEO' },
    ],
    tags: ['Astro.js', 'Performance', 'Lokale SEO', 'Hamburg', 'Core Web Vitals', 'KFZ-Gutachten', 'Leadgenerierung'],
    url: 'https://kfzgutachter-alhajji.de',
    featured: false,
    cardBg: 'linear-gradient(135deg, #1A0000 0%, #0C0C0F 100%)',
    cardAccent: '#F87171',
  },
  {
    slug: 'kv-sofort-website',
    client: 'KV-Sofort',
    clientKurz: 'KV',
    industry: 'KFZ & Schadenservice',
    service: 'Laravel Backend & Bezahlung',
    serviceType: 'entwicklung',
    jahr: '2025',
    tagline: 'Vollständiges Laravel-Backend mit integrierter Bezahlfunktion — von der Anfrage bis zur Abrechnung automatisiert.',
    description:
      'KV-Sofort ist eine digitale Plattform für KFZ-Kostenvoranschläge mit vollautomatisierter Auftragsabwicklung. Wir entwickelten ein komplettes Laravel-Backend mit Bezahlfunktion, Nutzerverwaltung und Buchungslogik — von der ersten Anfrage bis zur bezahlten Rechnung.',
    challenge:
      'KV-Sofort benötigte mehr als eine Website: eine vollständige Web-Applikation, die den gesamten Prozess vom Kostenvoranschlag über die Auftragsbestätigung bis hin zur Zahlungsabwicklung digital und automatisiert abbildet — sicher, skalierbar und ohne manuelle Eingriffe.',
    solution:
      'Entwicklung einer Laravel-Web-Applikation mit vollständigem Backend: Nutzerverwaltung & Authentifizierung, Auftragsmanagement-System, integrierte Bezahlfunktion (Payment-Gateway-Anbindung), automatische Rechnungsgenerierung und E-Mail-Benachrichtigungen. Zusätzlich vollständige API-Anbindung an Lexware für automatische Buchhaltungssynchronisation — Rechnungen, Belege und Zahlungen werden direkt in Lexware übergeben. REST-API-Architektur für zukünftige Erweiterungen.',
    resultText:
      'KV-Sofort läuft vollständig automatisiert: Anfragen werden entgegengenommen, verarbeitet, bezahlt und direkt in Lexware verbucht — ohne einen einzigen manuellen Schritt. Das Laravel-Backend mit Lexware-Integration bildet die skalierbare Grundlage für weiteres Wachstum.',
    metrics: [
      { value: 'Laravel', label: 'Backend-Framework' },
      { value: 'Payment', label: 'Bezahl­funktion integriert' },
      { value: 'Lexware', label: 'Buchhaltungs­anbindung via API' },
      { value: '100%', label: 'Vollautomatisierte Abwicklung' },
    ],
    tags: ['Laravel', 'Backend', 'Bezahlfunktion', 'Lexware API', 'Payment-Gateway', 'REST API', 'Buchhaltung', 'Automatisierung'],
    url: 'https://kv-sofort.de',
    featured: false,
    cardBg: 'linear-gradient(135deg, #001A18 0%, #0C0C0F 100%)',
    cardAccent: '#2DD4BF',
  },
];

export const serviceBadge: Record<ServiceType, { label: string; bg: string; text: string }> = {
  migration:    { label: 'Migration',              bg: 'bg-accent-50',    text: 'text-accent-600' },
  shop:         { label: 'Shop erstellt',           bg: 'bg-emerald-50',   text: 'text-emerald-700' },
  entwicklung:  { label: 'Individuelle Entwicklung', bg: 'bg-violet-50',   text: 'text-violet-700' },
  website:      { label: 'Website',                 bg: 'bg-sky-50',       text: 'text-sky-700' },
};
