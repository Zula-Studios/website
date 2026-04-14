export type ServiceType = 'migration' | 'shop' | 'entwicklung';

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
  featured: boolean;
  // Visual: used as background color for the project card visual
  cardBg: string;
  cardAccent: string;
}

export const projekte: Projekt[] = [
  {
    slug: 'techfashion-shopify-migration',
    client: 'TechFashion GmbH',
    clientKurz: 'TF',
    industry: 'Mode & Lifestyle',
    service: 'Shopify Migration',
    serviceType: 'migration',
    jahr: '2024',
    tagline: 'WooCommerce → Shopify Plus. Null Downtime. Null Ranking-Verlust.',
    description:
      'TechFashion betrieb einen langsamen WooCommerce-Shop mit wachsenden Performance-Problemen und hohem Wartungsaufwand. Ziel war eine vollständige Migration zu Shopify Plus mit Erhalt aller SEO-Rankings.',
    challenge:
      'Der bestehende WooCommerce-Shop mit über 3.200 Produkten, 18.000 Kundendaten und 5 Jahren Bestellhistorie war dauerhaft überlastet. Plugin-Konflikte führten zu regelmäßigen Ausfällen, während die Ladezeit auf über 7 Sekunden gestiegen war.',
    solution:
      'Wir entwickelten einen stufenweisen Migrationsplan: Parallel zum laufenden WooCommerce-Shop bauten wir den neuen Shopify Plus Store auf. Alle 3.200 Produkte, Kundendaten und die Bestellhistorie wurden automatisiert und manuell geprüft migriert. 100% der bestehenden URLs wurden per 301-Redirect übergeleitet.',
    resultText:
      'Der neue Shop war von Tag 1 schneller, sicherer und skalierbarer. Die Conversion Rate stieg innerhalb von 6 Wochen um 18%. Google Search Console zeigte keine Ranking-Verluste.',
    metrics: [
      { value: '+18%', label: 'Conversion Rate' },
      { value: '-71%', label: 'Ladezeit' },
      { value: '0', label: 'Tage Downtime' },
      { value: '100%', label: 'SEO-Rankings erhalten' },
    ],
    tags: ['Shopify Plus', 'Migration', 'WooCommerce', 'SEO', '3.200 Produkte'],
    testimonial: {
      quote:
        'Zula Studios hat unseren WooCommerce-Shop in Rekordzeit zu Shopify Plus migriert – ohne einen einzigen Tag Downtime. Die Conversion Rate hat sich innerhalb von Wochen spürbar verbessert.',
      name: 'Markus Weber',
      role: 'CEO, TechFashion GmbH',
    },
    featured: true,
    cardBg: '#0C0C0F',
    cardAccent: '#0284C7',
  },
  {
    slug: 'naturkosmetik-berlin-shopify-shop',
    client: 'Naturkosmetik Berlin',
    clientKurz: 'NB',
    industry: 'Beauty & Wellness',
    service: 'Shopify Shop erstellen',
    serviceType: 'shop',
    jahr: '2024',
    tagline: 'Von 0 auf Shopify: Custom Theme, Subscription Commerce, Internationalisierung.',
    description:
      'Naturkosmetik Berlin wollte den Sprung von stationärem Handel in den E-Commerce wagen. Wir entwickelten einen vollständig maßgeschneiderten Shopify-Shop mit Subscription-Commerce und mehrsprachiger Auslieferung.',
    challenge:
      'Das Unternehmen hatte keinerlei Online-Präsenz und benötigte eine Lösung, die sowohl das Markenimage widerspiegelt als auch Abo-Modelle und den EU-Markt von Anfang an unterstützt.',
    solution:
      'Custom Shopify Theme entwickelt von Grund auf. Integration von ReCharge für Subscription Commerce. Shopify Markets für DE/AT/CH mit automatischer Währungsanpassung. Vollständige SEO-Optimierung mit strukturierten Daten für alle Produktseiten.',
    resultText:
      'Innerhalb der ersten drei Monate nach Launch überstieg der Online-Umsatz die gesetzten Ziele um 40%. Der organische Traffic wuchs durch konsequente SEO-Umsetzung monatlich um 15–20%.',
    metrics: [
      { value: '+105%', label: 'Organischer Traffic (6 Mo.)' },
      { value: '+40%', label: 'Umsatz über Ziel' },
      { value: '4.8/5', label: 'Kundenbewertung' },
      { value: '3', label: 'Märkte (DE/AT/CH)' },
    ],
    tags: ['Custom Theme', 'Shopify Markets', 'Subscription', 'SEO', 'Internationalisierung'],
    testimonial: {
      quote:
        'Der Shop übertrifft alle Erwartungen. Die Conversion Rate hat sich in den ersten drei Monaten verdoppelt und unsere Kunden lieben das Design.',
      name: 'Sandra Koch',
      role: 'Gründerin, Naturkosmetik Berlin',
    },
    featured: true,
    cardBg: '#0A1F12',
    cardAccent: '#16A34A',
  },
  {
    slug: 'sportworld-custom-app',
    client: 'SportWorld AG',
    clientKurz: 'SW',
    industry: 'Sport & Outdoor',
    service: 'Individuelle Entwicklung',
    serviceType: 'entwicklung',
    jahr: '2023',
    tagline: 'Custom Fulfillment-App: Shopify + ERP-Integration in Echtzeit.',
    description:
      'SportWorld AG benötigte eine Echtzeit-Synchronisation zwischen ihrem Shopify Plus Store und dem SAP-ERP-System für Lager, Bestellungen und Kundenpreise.',
    challenge:
      'Bestehende Shopify-Apps konnten die komplexen B2B-Preislisten und das SAP-basierte Lagerverwaltungssystem nicht abbilden. Manuelle Datenpflege kostete täglich mehrere Stunden Arbeitszeit.',
    solution:
      'Entwicklung einer Private Shopify App mit bidirektionaler SAP-Anbindung. Echtzeit-Bestandssync, automatische Preislistenübergabe für B2B-Kunden, Custom Order-Routing zu den richtigen Fulfillment-Centern.',
    resultText:
      'Die manuelle Datenpflege wurde vollständig eliminiert. Die Fehlerquote bei Bestellungen sank auf nahezu null. Das Team spart täglich über 3 Stunden Arbeitszeit.',
    metrics: [
      { value: '0', label: 'Manuelle Datenpflege' },
      { value: '-94%', label: 'Bestellfehler' },
      { value: '3+ Std.', label: 'Zeitersparnis/Tag' },
      { value: '<1s', label: 'Sync-Latenz' },
    ],
    tags: ['Custom App', 'SAP Integration', 'Shopify Plus', 'B2B', 'Echtzeit-Sync'],
    testimonial: {
      quote:
        'Die Custom-App hat unsere Fulfillment-Prozesse revolutioniert. Sauberer Code, klare Kommunikation, top Ergebnis.',
      name: 'Thomas Bauer',
      role: 'E-Commerce Manager, SportWorld AG',
    },
    featured: false,
    cardBg: '#0C1020',
    cardAccent: '#6366F1',
  },
  {
    slug: 'haushaltskoenig-shopify-plus',
    client: 'Haushalts-König',
    clientKurz: 'HK',
    industry: 'Haushalts­waren',
    service: 'Shopify Migration',
    serviceType: 'migration',
    jahr: '2023',
    tagline: 'Magento 2 → Shopify Plus: 8.000 Produkte, null Kompromisse.',
    description:
      'Haushalts-König betrieb einen veralteten Magento 2-Shop mit hohen Hosting-Kosten und steigendem Entwicklungsaufwand. Die Migration zu Shopify Plus sollte Kosten senken und die Performance drastisch verbessern.',
    challenge:
      'Über 8.000 Produkte mit komplexen Varianten, 24.000 Kundendaten und ein stark angepasstes Magento-Theme machten die Migration besonders herausfordernd.',
    solution:
      'Schrittweise Produktmigration mit Custom-Script für die Magento-spezifischen Attribute. Neues Shopify Plus Theme mit allen gewohnten Funktionen. Vollständiges 301-Redirect-Set für alle 8.000+ Produkt-URLs.',
    resultText:
      'Die Hosting-Kosten sanken um 62%. Die Ladezeit verbesserte sich von 5,8s auf 1,4s. Keine messbaren SEO-Verluste in der Google Search Console.',
    metrics: [
      { value: '-62%', label: 'Hosting-Kosten' },
      { value: '1.4s', label: 'Ladezeit (vorher: 5.8s)' },
      { value: '8.200+', label: 'Produkte migriert' },
      { value: '0', label: 'SEO-Rankingverluste' },
    ],
    tags: ['Shopify Plus', 'Magento 2', 'Migration', '8.000 Produkte', 'Performance'],
    featured: false,
    cardBg: '#1A0C00',
    cardAccent: '#0284C7',
  },
  {
    slug: 'velotec-headless-commerce',
    client: 'VeloTec GmbH',
    clientKurz: 'VT',
    industry: 'Fahrrad & Mobilität',
    service: 'Individuelle Entwicklung',
    serviceType: 'entwicklung',
    jahr: '2024',
    tagline: 'Headless Shopify mit Astro: 98 PageSpeed. Überall.',
    description:
      'VeloTec wollte maximale Performance und vollständige Design-Freiheit. Wir entwickelten ein Headless-Commerce-Setup mit Astro als Frontend und der Shopify Storefront API.',
    challenge:
      'Standard-Shopify-Themes konnten die komplexe Produktkonfigurator-Logik nicht abbilden. Gleichzeitig war eine PageSpeed-Score von über 95 nicht verhandelbar.',
    solution:
      'Headless Commerce mit Astro + Shopify Storefront API. Custom Produktkonfigurator in Alpine.js. Server-Side Rendering für SEO. Shopify bleibt für Bestellungen, Inventory und Zahlungen zuständig.',
    resultText:
      'PageSpeed Score von 98 auf Mobile und Desktop. Der Produktkonfigurator steigerte die durchschnittliche Bestellgröße um 34%.',
    metrics: [
      { value: '98', label: 'PageSpeed Score' },
      { value: '+34%', label: 'Ø Bestellwert' },
      { value: '<0.1s', label: 'Time to First Byte' },
      { value: '100%', label: 'Core Web Vitals' },
    ],
    tags: ['Headless', 'Astro', 'Storefront API', 'Performance', 'Konfigurator'],
    featured: false,
    cardBg: '#000F1A',
    cardAccent: '#0EA5E9',
  },
  {
    slug: 'biolandhof-mayer-shop',
    client: 'Biolandhof Mayer',
    clientKurz: 'BM',
    industry: 'Lebensmittel & Bio',
    service: 'Shopify Shop erstellen',
    serviceType: 'shop',
    jahr: '2023',
    tagline: 'Vom Hofladen ins Netz: Shopify mit Abo-Gemüsekiste.',
    description:
      'Biolandhof Mayer wollte seine beliebte Gemüsekiste als Abo-Modell online anbieten. Wir entwickelten einen Shopify-Shop mit vollständig integriertem Subscription-Commerce.',
    challenge:
      'Keine technische Erfahrung, kleines Budget, aber hohe Anforderungen: wöchentliche Abo-Kisten, flexible Pausen, Liefergebiete per PLZ-Prüfung.',
    solution:
      'Shopify Basic mit Custom Subscription-App (ReCharge), PLZ-basierte Liefergebiets-Prüfung im Checkout, automatische Abo-Reminder per E-Mail-Flow.',
    resultText:
      '85% der Bestellungen kommen inzwischen über das Abo-Modell. Der Hof konnte sein Liefergebiet auf 3 Landkreise ausweiten.',
    metrics: [
      { value: '85%', label: 'Anteil Abo-Bestellungen' },
      { value: '3×', label: 'Liefergebiet ausgeweitet' },
      { value: '+220%', label: 'Online-Umsatz (6 Mo.)' },
      { value: '4.9/5', label: 'Shop-Bewertung' },
    ],
    tags: ['Subscription Commerce', 'ReCharge', 'Custom Checkout', 'Lokale Lieferung'],
    featured: false,
    cardBg: '#0A1500',
    cardAccent: '#65A30D',
  },
];

export const serviceBadge: Record<ServiceType, { label: string; bg: string; text: string }> = {
  migration:    { label: 'Migration',              bg: 'bg-accent-50',         text: 'text-accent-600' },
  shop:         { label: 'Shop erstellt',           bg: 'bg-emerald-50',        text: 'text-emerald-700' },
  entwicklung:  { label: 'Individuelle Entwicklung', bg: 'bg-violet-50',        text: 'text-violet-700' },
};
