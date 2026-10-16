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
  /** Meta-Description, ca. 140–160 Zeichen, mit der konkreten Technik */
  seoDescription: string;
  challenge: string;
  solution: string;
  resultText: string;
  /** Technologie-Stack – klar sichtbar auf der Detailseite */
  techStack: string[];
  /** Ein zitierbarer Satz pro Technik, für SEO und GEO */
  techDetails: { name: string; text: string }[];
  /** Konkrete Leistungen / was umgesetzt wurde */
  deliverables: string[];
  metrics: { value: string; label: string }[];
  tags: string[];
  testimonial?: { quote: string; name: string; role: string };
  url?: string;
  featured: boolean;
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
    tagline: 'Von null auf Vollgas: Shop-Design, Entwicklung, Google, Meta & TikTok Ads — komplett aus einer Hand.',
    description:
      'Acos Paris ist ein europäischer Anbieter von Friseurbedarf, Salonmöbeln und Haarpflegeprodukten. Der Shop läuft auf Shopify mit Liquid-Templates, Kollektionen für Endkunden und B2B sowie Tracking über GA4. Dazu kommen laufende Kampagnen auf Google Ads, Meta Ads und TikTok — Design, Entwicklung und Werbung aus einer Hand.',
    seoDescription:
      'Shopify-Case Acos Paris: Liquid, Google Ads, Meta Ads, TikTok und GA4. Design, Entwicklung und laufender Ads-Betrieb aus Hamburg.',
    challenge:
      'Acos Paris startete ohne Online-Shop und ohne bezahlte Acquisition. Für Endkunden und B2B-Salons fehlten sowohl ein verkaufsstarker Auftritt als auch eine skalierbare Kampagnenstruktur. Parallel mussten Sortiment, Kartonware und Markenwirkung in einem System funktionieren — ohne interne E-Commerce-Abteilung und ohne bestehende technische Basis.',
    solution:
      'Wir übernahmen Konzept, UI/UX und den kompletten Shopify-Aufbau inklusive Kollektionen und B2B-Struktur. Anschließend setupten wir Google Shopping & Search, Meta Ads und TikTok und steuerten den laufenden Betrieb. So entstand ein Full-Service-Setup: Shop live, Tracking sauber, Paid Channels von Tag eins auf Wachstum ausgerichtet.',
    resultText:
      'Der Shop ging als vollständiger Verkaufskanal live. Paid-Kampagnen brachten von Beginn an qualifizierten Traffic für Endkunden und Salons — Design, Technik und Ads greifen ineinander.',
    techStack: ['Shopify', 'Liquid', 'Google Ads', 'Meta Ads', 'TikTok', 'GA4'],
    techDetails: [
      { name: 'Shopify', text: 'Der Online-Shop von Acos Paris läuft auf Shopify. Kollektionen, B2B-Kartonware und Checkout sind dort als vollständiger Verkaufskanal für Endkunden und Salons in der EU aufgesetzt.' },
      { name: 'Liquid', text: 'Theme und Sektionen sind in Liquid gebaut. Produktdaten, Kollektionen und das Shop-Design laufen damit in einem Shopify-Theme zusammen.' },
      { name: 'Google Ads', text: 'Google Shopping und Google Search schicken qualifizierten Traffic auf den Shop, von Tag eins an den EU-Markt.' },
      { name: 'Meta Ads', text: 'Meta Ads auf Facebook und Instagram laufen parallel zu Google und TikTok und werden im laufenden Betrieb für denselben Shop gesteuert.' },
      { name: 'TikTok', text: 'TikTok ist als weiterer Paid-Kanal eingebunden. Die Kampagnen laufen neben Google Ads und Meta Ads und bringen Reichweite aus TikTok auf den Shopify-Shop.' },
      { name: 'GA4', text: 'Google Analytics 4 misst Shop, Google Ads, Meta Ads und TikTok in einem Setup, damit Paid Traffic und Verkäufe zusammen auswertbar sind.' },
    ],
    deliverables: [
      'UI/UX-Konzept und Shop-Design',
      'Shopify-Shop mit Kollektionen und B2B-Karton-Kategorie',
      'Google Shopping- & Search-Kampagnen',
      'Meta Ads (Facebook & Instagram)',
      'TikTok Ads',
      'Laufender Ads-Betrieb für den EU-Markt',
    ],
    metrics: [
      { value: 'A–Z', label: 'Design bis Live-Betrieb' },
      { value: 'Google', label: 'Shopping & Search Ads' },
      { value: 'Meta', label: 'Facebook & Instagram Ads' },
      { value: 'TikTok', label: 'Ads eingebunden' },
    ],
    tags: ['Shopify', 'Full-Service', 'Google Ads', 'Meta Ads', 'TikTok', 'B2B'],
    url: 'https://acosparis.com',
    featured: true,
    cardBg: 'linear-gradient(145deg, #2A1810 0%, #1A120C 55%, #12100E 100%)',
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
      'HOCHFORM GmbH ist ein Reinigungsunternehmen in Hamburg und Norderstedt. Die Website ist mit Astro.js und Tailwind CSS gebaut: zwölf Leistungsseiten, sichtbare ISO-Signale und ein Anfrageformular über eine eigene Formular-API. Lokale SEO für Hamburg und Norderstedt war von Anfang an Teil des Aufbaus.',
    seoDescription:
      'Astro.js-Website für HOCHFORM: Tailwind CSS, 12 Leistungsseiten, Formular-API und lokale SEO für Hamburg und Norderstedt. Case aus Hamburg.',
    challenge:
      'HOCHFORM hatte Qualität und ISO-Zertifizierungen — aber online wirkte das Angebot weder klar noch anfragefreundlich. Zwölf Leistungen, Zielgebiete Hamburg/Norderstedt und B2B-Entscheider brauchten eine Struktur, die Vertrauen aufbaut und den Weg zur Anfrage verkürzt. Eine generische Firmenwebsite hätte das Portfolio und die Qualitätsversprechen nicht transportiert.',
    solution:
      'Wir bauten eine Astro-Website mit eigenen Leistungsseiten, sichtbaren ISO-Signalen und einem direkten Anfrageformular. Lokale SEO für Hamburg und Norderstedt wurde von Anfang an mitgedacht. Design und Texte sprechen Gewerbekunden an: klar, seriös und conversion-orientiert statt Broschüren-Feeling.',
    resultText:
      'HOCHFORM tritt digital so auf, wie das Unternehmen arbeitet: professionell und anfragebereit. Leistungen, Zertifikate und Kontaktwege sind auf einen Blick erfassbar — mit Fokus auf Hamburg und Norderstedt.',
    techStack: ['Astro.js', 'Tailwind CSS', 'Lokale SEO', 'Formular-API'],
    techDetails: [
      { name: 'Astro.js', text: 'Die Website der HOCHFORM GmbH ist mit Astro.js gebaut. Zwölf Leistungsseiten für Büro, Gebäude, Glas und Industrie werden statisch ausgeliefert und bleiben für die Suche in Hamburg und Norderstedt schnell lesbar.' },
      { name: 'Tailwind CSS', text: 'Das Layout ist mit Tailwind CSS umgesetzt, mobil zuerst, damit Gewerbekunden Leistungen und Zertifikate ohne Umweg erreichen.' },
      { name: 'Lokale SEO', text: 'Texte, Leistungsseiten und regionale Signale sind auf Suchanfragen in Hamburg und Norderstedt ausgerichtet, nicht auf eine generische Firmenbroschüre.' },
      { name: 'Formular-API', text: 'Anfragen laufen über eine eigene Formular-API direkt an HOCHFORM, ohne ein schweres Formular-Plugin im Seitenaufbau.' },
    ],
    deliverables: [
      '12 Leistungsseiten (Büro, Gebäude, Glas, Industrie u. a.)',
      'ISO-Zertifikate als Vertrauenssignale',
      'Online-Anfrage- / Buchungsformular',
      'Lokale SEO für Hamburg & Norderstedt',
      'Mobile-first Design und Launch',
    ],
    metrics: [
      { value: '3', label: 'ISO-Zertifikate integriert' },
      { value: '12', label: 'Leistungsseiten' },
      { value: 'B2B', label: 'Fokus Gewerbe­kunden' },
      { value: 'lokal', label: 'SEO Hamburg & Norderstedt' },
    ],
    tags: ['Astro.js', 'Webdesign', 'SEO', 'B2B', 'Lokale SEO', 'Gebäudereinigung'],
    url: 'https://hochform-management.de',
    featured: true,
    cardBg: 'linear-gradient(145deg, #0E3A52 0%, #123A4A 50%, #0F2A38 100%)',
    cardAccent: '#38BDF8',
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
      'Easy Gutachten ist ein unabhängiger KFZ-Sachverständiger in Halstenbek. Die Website ist mit Astro.js und TypeScript umgesetzt, gestylt mit Tailwind CSS, und führt über ein mehrstufiges Schadenformular zur Anfrage. Lokale SEO deckt Halstenbek, Pinneberg und Hamburg ab.',
    seoDescription:
      'Astro.js-Website für Easy Gutachten: TypeScript, Tailwind CSS, Schadenformular und lokale SEO in Halstenbek, Pinneberg und Hamburg.',
    challenge:
      'Nach einem Unfall entscheiden Sekunden und Klarheit: Wer lokal sucht, erwartet eine Seite, die sofort lädt, Vertrauen schafft und zur Meldung führt. Langsame WordPress-Setups und unklare Formulare verlieren genau diese Anfragen. Easy Gutachten brauchte Performance, ein einfaches Schadenformular und Sichtbarkeit in Halstenbek, Pinneberg und Hamburg.',
    solution:
      'Mit Astro.js entstand eine extrem schnelle Website inkl. 3-stufigem Schadensmelde-Formular und Service-Unterseiten. Ein SEO-Blog beantwortet typische Fragen (Totalschaden, Rechte nach Unfall). Lokale SEO und Core Web Vitals waren Teil des Briefings — nicht Nacharbeit.',
    resultText:
      'Ladezeiten unter einer Sekunde und eine klare Lead-Strecke: Interessenten melden Schäden digital, ohne Umwege. Die Seite rankt lokal und konvertiert mobil.',
    techStack: ['Astro.js', 'TypeScript', 'Tailwind CSS', 'Formulare', 'Lokale SEO'],
    techDetails: [
      { name: 'Astro.js', text: 'Die Website von Easy Gutachten in Halstenbek ist mit Astro.js gebaut. Sie lädt in unter einer Sekunde und ersetzt ein langsameres WordPress-Setup.' },
      { name: 'TypeScript', text: 'Seitenstruktur und Formularlogik sind in TypeScript geschrieben, inklusive der Service-Unterseiten für die Gutachtenarten.' },
      { name: 'Tailwind CSS', text: 'Das Interface ist mit Tailwind CSS gestaltet, mobil zuerst, weil Schadenmeldungen oft vom Telefon kommen.' },
      { name: 'Formulare', text: 'Ein dreistufiges Schadensformular nimmt die Meldung auf, ohne dass Interessenten den Weg zur Anfrage suchen müssen.' },
      { name: 'Lokale SEO', text: 'Inhalte und Struktur zielen auf Halstenbek, Pinneberg und Hamburg, ergänzt um einen SEO-Blog zu Totalschaden und Rechten nach dem Unfall.' },
    ],
    deliverables: [
      'Astro.js-Website mit Top Core Web Vitals',
      '3-stufiges Schadensmelde-Formular',
      'Service-Unterseiten für Gutachtenarten',
      'SEO-Blog (Totalschaden, Unfallrechte u. a.)',
      'Lokale SEO Halstenbek, Pinneberg, Hamburg',
    ],
    metrics: [
      { value: '100+', label: 'Gutachten erstellt' },
      { value: '<1s', label: 'Ladezeit (Astro.js)' },
      { value: '100', label: 'PageSpeed Score' },
      { value: 'lokal', label: 'SEO Halstenbek & Hamburg' },
    ],
    tags: ['Astro.js', 'Performance', 'Leadgenerierung', 'Lokale SEO', 'Core Web Vitals'],
    url: 'https://easy-kfzgutachten.de',
    featured: false,
    cardBg: 'linear-gradient(145deg, #0F3D2A 0%, #123528 55%, #0F1F18 100%)',
    cardAccent: '#34D399',
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
      'DNMZ Engineering in Bergheim hat eine Astro.js-Website mit TypeScript und Tailwind CSS. Leistungsseiten für Gutachten, Bewertung und Analyse sitzen neben einem zweistufigen Schadenformular. Lokale SEO zielt auf Bergheim, Köln und das Umland.',
    seoDescription:
      'Astro.js-Website für DNMZ Engineering: TypeScript, Tailwind CSS, Schadenformular und lokale SEO für Bergheim, Köln und Umland.',
    challenge:
      'Als Ingenieurbüro muss DNMZ technisch seriös wirken — und gleichzeitig mobil am Unfallort erreichbar sein. Eine langsame oder unklare Website kostet Anfragen im Rhein-Erft-Kreis und Umgebung. Gefragt war ein Auftritt, der Kompetenz zeigt, Leistungen trennt und Schadenmeldungen rund um die Uhr annimmt.',
    solution:
      'Wir setzten auf Astro.js mit klarer Leistungsstruktur (Gutachten, Bewertung, Analyse), einem 2-stufigen Online-Formular und lokaler SEO für Bergheim, Köln und Umland. Mobile CTAs und PageSpeed standen im Zentrum — damit aus Suchanfragen konkrete Fälle werden.',
    resultText:
      'Top-PageSpeed, klare Leistungswege und qualifizierte Anfragen auch außerhalb der Bürozeiten. Die digitale Präsenz spiegelt die technische Expertise wider.',
    techStack: ['Astro.js', 'TypeScript', 'Tailwind CSS', 'Formulare', 'Lokale SEO'],
    techDetails: [
      { name: 'Astro.js', text: 'Die Website von DNMZ Engineering in Bergheim ist mit Astro.js gebaut. Gutachten, Bewertung und Analyse haben eigene Leistungsseiten und laden mit Top-PageSpeed.' },
      { name: 'TypeScript', text: 'Formularschritte und Seitentypen sind in TypeScript umgesetzt, damit die Schadenmeldung auch mobil am Unfallort durchläuft.' },
      { name: 'Tailwind CSS', text: 'Das Layout nutzt Tailwind CSS. Mobile CTAs stehen im Vordergrund, weil Anfragen oft außerhalb der Bürozeiten starten.' },
      { name: 'Formulare', text: 'Ein zweistufiges Online-Formular nimmt die Schadenmeldung in unter 90 Sekunden auf.' },
      { name: 'Lokale SEO', text: 'Die Seiten sind auf Bergheim, Köln und das Umland im Rhein-Erft-Kreis ausgerichtet, über zehn lokale Regionen.' },
    ],
    deliverables: [
      'Astro.js-Website (Performance-first)',
      'Leistungsseiten (Gutachten, Bewertung, Analyse)',
      '2-stufiges Online-Schadenformular',
      'Lokale SEO für Bergheim, Köln und Umland',
      'Mobile-first CTAs',
    ],
    metrics: [
      { value: '65+', label: 'Gutachten erstellt' },
      { value: '<1s', label: 'Ladezeit (Astro.js)' },
      { value: '100', label: 'PageSpeed Score' },
      { value: '10', label: 'Lokale SEO-Regionen' },
    ],
    tags: ['Astro.js', 'Performance', 'Lokale SEO', 'Leadgenerierung', 'Core Web Vitals'],
    url: 'https://dnmz-engineering.de',
    featured: false,
    cardBg: 'linear-gradient(145deg, #2A1F4A 0%, #1E1838 55%, #14121F 100%)',
    cardAccent: '#A78BFA',
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
      'Für den KFZ-Gutachter Al Hajji in Hamburg steht eine Astro.js-Website mit TypeScript und Tailwind CSS. Dazu ein zweistufiges Formular mit WhatsApp, eine Schadensgalerie und lokale SEO für neun Hamburger Bezirke.',
    seoDescription:
      'Astro.js-Website für KFZ-Gutachter Al Hajji: TypeScript, Tailwind, WhatsApp-Formular, Schadensgalerie und lokale SEO in Hamburg.',
    challenge:
      'Trotz Erfahrung fehlte eine professionelle Online-Präsenz — in Google Hamburg praktisch unsichtbar. Ohne Website, ohne lokale Landing-Logik und ohne einfache Kontaktwege gingen Anfragen an Mitbewerber. Ziel: Sichtbarkeit in allen relevanten Bezirken und eine Conversion-Strecke, die auch unter Stress nach dem Unfall funktioniert.',
    solution:
      'Astro.js-Website mit 2-stufigem Formular inkl. WhatsApp, echter Schadensgalerie und FAQ zur freien Gutachterwahl. Lokale SEO für neun Hamburger Bezirke wurde systematisch aufgebaut. Performance und klare CTAs sorgen dafür, dass Suchende sofort handeln können.',
    resultText:
      'Auffindbar in ganz Hamburg — mit Galerie, Formular und WhatsApp als kurzen Wegen zur Anfrage. Die digitale Basis passt zum lokalen Geschäftsmodell.',
    techStack: ['Astro.js', 'TypeScript', 'Tailwind CSS', 'WhatsApp', 'Lokale SEO'],
    techDetails: [
      { name: 'Astro.js', text: 'Die Website von KFZ-Gutachter Al Hajji in Hamburg ist mit Astro.js gebaut. Sie war der erste professionelle Auftritt und ist auf kurze Ladezeiten ausgelegt.' },
      { name: 'TypeScript', text: 'Formular und Seitentypen sind in TypeScript geschrieben, inklusive Schadensgalerie und FAQ zur freien Gutachterwahl.' },
      { name: 'Tailwind CSS', text: 'Das Layout ist mit Tailwind CSS umgesetzt, mit klaren Buttons für Anruf und Schadenmeldung.' },
      { name: 'WhatsApp', text: 'Das zweistufige Formular bietet WhatsApp als direkten Kontaktweg, wenn nach dem Unfall keine Zeit für ein langes Formular bleibt.' },
      { name: 'Lokale SEO', text: 'Die lokale SEO deckt neun Hamburger Bezirke ab, damit der Gutachter in der Stadt gefunden wird und nicht nur über den Namen.' },
    ],
    deliverables: [
      'Astro.js-Website mit Top-Ladezeiten',
      '2-stufiges Formular inkl. WhatsApp',
      'Echte Schadensgalerie',
      'Lokale SEO für 9 Hamburger Bezirke',
      'FAQ zur freien Gutachterwahl',
    ],
    metrics: [
      { value: '85+', label: 'Gutachten erstellt' },
      { value: '<1s', label: 'Ladezeit (Astro.js)' },
      { value: '100', label: 'PageSpeed Score' },
      { value: '9', label: 'Hamburger Bezirke SEO' },
    ],
    tags: ['Astro.js', 'Performance', 'Lokale SEO', 'Hamburg', 'Leadgenerierung'],
    url: 'https://kfzgutachter-alhajji.de',
    featured: false,
    cardBg: 'linear-gradient(145deg, #4A1A1A 0%, #2A1212 55%, #1A1010 100%)',
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
      'KV-Sofort läuft als Laravel-Anwendung auf PHP. Das Backend führt Anfrage, Auftrag, Payment-Gateway und Lexware-API in einem Ablauf zusammen. Rechnungen und E-Mails gehen über die REST-API raus, die Buchhaltung synct direkt nach Lexware.',
    seoDescription:
      'Laravel-Backend für KV-Sofort: PHP, REST-API, Payment-Gateway und Lexware-Anbindung. Von der Anfrage bis zur Buchhaltung.',
    challenge:
      'Anfragen, Aufträge, Zahlung und Buchhaltung liefen über getrennte Tools und manuelle Schritte. Das kostete Zeit, erzeugte Fehlerquellen und verhinderte Skalierung. KV-Sofort brauchte einen durchgängigen digitalen Prozess: von der Kundenanfrage bis zur Lexware-Buchung — ohne Copy-Paste zwischen Systemen.',
    solution:
      'Wir entwickelten ein Laravel-Backend mit Nutzerverwaltung, Auftragsmanagement und integrierter Bezahlfunktion. Rechnungen und E-Mails werden automatisch ausgelöst; die Lexware-API synct die Buchhaltung. So entsteht ein End-to-End-Workflow statt Stückwerk.',
    resultText:
      'Vollautomatisierte Abwicklung von Anfrage bis Buchhaltung. Weniger manuelle Arbeit, klarere Auftragsstände und eine stabile technische Basis für Wachstum.',
    techStack: ['Laravel', 'PHP', 'REST API', 'Payment-Gateway', 'Lexware API'],
    techDetails: [
      { name: 'Laravel', text: 'KV-Sofort ist eine Laravel-Anwendung. Anfrage, Auftrag, Zahlung und Buchhaltung laufen in einem Backend, nicht in getrennten Tools.' },
      { name: 'PHP', text: 'Die Anwendung ist in PHP geschrieben, mit Nutzerverwaltung und Auftragsmanagement für digitale Kostenvoranschläge nach einem Autounfall.' },
      { name: 'REST API', text: 'Eine REST-API stößt Rechnungen und E-Mails an, sobald ein Auftrag den passenden Status erreicht.' },
      { name: 'Payment-Gateway', text: 'Die Bezahlfunktion sitzt im Backend. Kunden beauftragen den Kostenvoranschlag online, ohne ein separates Zahlungsformular.' },
      { name: 'Lexware API', text: 'Die Lexware-API überträgt die Buchhaltung automatisch. Zwischen Auftrag und Buchung gibt es keinen manuellen Export.' },
    ],
    deliverables: [
      'Laravel-Backend mit Nutzerverwaltung',
      'Auftragsmanagement-System',
      'Integrierte Bezahlfunktion',
      'Automatische Rechnungen & E-Mails',
      'Lexware-Buchhaltungs-Sync per API',
    ],
    metrics: [
      { value: 'Laravel', label: 'Backend-Framework' },
      { value: 'Payment', label: 'Bezahl­funktion integriert' },
      { value: 'Lexware', label: 'Buchhaltungs­anbindung via API' },
      { value: '100%', label: 'Vollautomatisierte Abwicklung' },
    ],
    tags: ['Laravel', 'Backend', 'Bezahlfunktion', 'Lexware API', 'REST API'],
    url: 'https://kv-sofort.de',
    featured: false,
    cardBg: 'linear-gradient(145deg, #0F3D38 0%, #123530 55%, #0F1F1C 100%)',
    cardAccent: '#2DD4BF',
  },
  {
    slug: 'kfz-technik-nord-website',
    client: 'KFZ-Technik-Nord',
    clientKurz: 'KN',
    industry: 'KFZ-Werkstatt',
    service: 'Website & Terminbuchung',
    serviceType: 'website',
    jahr: '2025',
    tagline: 'Moderner Webauftritt für die Mercedes- & Smart-Werkstatt in Norderstedt — klar, mobil und terminbereit.',
    description:
      'Die Website von KFZ-Technik-Nord ist mit Craft CMS umgesetzt. Die Mercedes- und Smart-Werkstatt in Norderstedt pflegt Leistungen und Termininhalte selbst im CMS. Das Frontend nutzt Tailwind CSS, ergänzt um lokale SEO für Norderstedt.',
    seoDescription:
      'Craft-CMS-Website für KFZ-Technik-Nord: Tailwind CSS, Terminbuchung und lokale SEO für die Mercedes- und Smart-Werkstatt in Norderstedt.',
    challenge:
      'Die Werkstatt beherrscht Mercedes und Smart — online fehlte ein Auftritt, der das auf den ersten Blick transportiert. Interessenten brauchten mobile Übersicht zu Leistungen und einen direkten Weg zu Kontakt oder Termin. Ohne klare lokale Signale und ohne moderne Seite gingen Potenziale in Norderstedt verloren.',
    solution:
      'Wir entwickelten eine mobile-first Website auf Craft CMS mit Leistungsübersicht, Markenfokus Mercedes & Smart und lokalen SEO-Grundlagen. Kontakt- und Terminwege stehen prominent — ohne unnötige Ablenkung. Inhalte lassen sich im CMS pflegen, das Design bleibt schlank.',
    resultText:
      'Interessenten finden Leistungen und Terminwege ohne Umwege. Die Werkstatt wirkt online so spezialisiert wie vor Ort.',
    techStack: ['Craft CMS', 'Tailwind CSS', 'Lokale SEO'],
    techDetails: [
      { name: 'Craft CMS', text: 'Die Website von KFZ-Technik-Nord in Norderstedt ist mit Craft CMS gebaut. Die Werkstatt pflegt Leistungen, Markenfokus Mercedes und Smart sowie Termininhalte selbst im CMS.' },
      { name: 'Tailwind CSS', text: 'Das Frontend ist mit Tailwind CSS umgesetzt, mobil zuerst, damit Leistungen und Terminwege auf dem Telefon sofort sichtbar sind.' },
      { name: 'Lokale SEO', text: 'Seiten und Texte sind auf Norderstedt ausgerichtet, damit die Werkstatt lokal gefunden wird und nicht nur über den Markennamen.' },
    ],
    deliverables: [
      'Mobile-first Website',
      'Leistungsübersicht Mercedes & Smart',
      'Direkte Kontakt- und Terminwege',
      'Lokale SEO-Grundlage Norderstedt',
      'Launch und technische Basis',
    ],
    metrics: [
      { value: 'Craft', label: 'CMS' },
      { value: 'Mobil', label: 'First Design' },
      { value: 'Lokal', label: 'SEO Norderstedt' },
      { value: 'Mercedes', label: '& Smart Fokus' },
    ],
    tags: ['Craft CMS', 'Webdesign', 'Lokale SEO', 'Norderstedt', 'KFZ-Werkstatt'],
    url: 'https://kfz-technik-nord.de',
    featured: false,
    cardBg: 'linear-gradient(145deg, #2A3038 0%, #1C222A 55%, #14181E 100%)',
    cardAccent: '#94A3B8',
  },
  {
    slug: 'unfallpaten-website',
    client: 'Unfallpaten',
    clientKurz: 'UP',
    industry: 'Unfall & Schadenabwicklung',
    service: 'Astro.js Website & Leadgenerierung',
    serviceType: 'website',
    jahr: '2025',
    tagline: 'Schnelle Astro.js-Plattform für Unfallgeschädigte — Gutachter, Anwalt, Werkstatt und Mietwagen aus einer Hand.',
    description:
      'Die Unfallpaten-Website ist mit Astro.js, TypeScript und Tailwind CSS gebaut. Leistungsseiten für Gutachter, Anwalt, Werkstatt und Mietwagen führen in kurze Lead-Formulare. Meta Pixel liefert die Tracking-Grundlage für Kampagnen.',
    seoDescription:
      'Astro.js-Website für Unfallpaten: TypeScript, Tailwind CSS, Lead-Formulare und Meta Pixel. Gutachter, Anwalt, Werkstatt und Mietwagen.',
    challenge:
      'Nach dem Unfall sind Nutzer gestresst und brauchen Orientierung: Was zuerst? Wer hilft? Wohin mit der Meldung? Eine langsame oder unübersichtliche Seite verliert genau diese Kontakte. Unfallpaten brauchte eine Plattform, die vier Kernleistungen bündelt und mobil in Sekunden zur Anfrage führt — inklusive Tracking für Kampagnen.',
    solution:
      'Mit Astro.js entstand eine performante Website mit klaren Leistungsseiten (Gutachter, Anwalt, Werkstatt, Mietwagen), Lead-Formularen und starken CTAs. Mobile-First und Core Web Vitals waren Pflicht. Meta Pixel und Tracking-Grundlage ermöglichen bezahlte Akquise ohne Blindflug.',
    resultText:
      'Schnelle mobile Website mit direktem Weg zur Anfrage. Leistungen sind verständlich, Formulare kurz, und Kampagnen lassen sich messbar steuern.',
    techStack: ['Astro.js', 'TypeScript', 'Tailwind CSS', 'Formulare', 'Meta Pixel'],
    techDetails: [
      { name: 'Astro.js', text: 'Die Website von Unfallpaten ist mit Astro.js gebaut. Gutachter, Anwalt, Werkstatt und Mietwagen haben eigene Leistungsseiten und laden schnell genug für Nutzer direkt nach dem Unfall.' },
      { name: 'TypeScript', text: 'Seiten und Formularlogik sind in TypeScript geschrieben, mobil zuerst, weil die Meldung oft unterwegs passiert.' },
      { name: 'Tailwind CSS', text: 'Das Layout nutzt Tailwind CSS, mit kurzen Wegen von der Leistung zum Formular.' },
      { name: 'Formulare', text: 'Lead-Formulare nehmen die Schadenmeldung auf und führen sie in den weiteren Prozess, ohne dass vier Leistungen auf einer unübersichtlichen Seite liegen.' },
      { name: 'Meta Pixel', text: 'Das Meta Pixel ist die Tracking-Grundlage für bezahlte Kampagnen, damit Anfragen aus Facebook und Instagram dem jeweiligen Einsatz zugeordnet werden können.' },
    ],
    deliverables: [
      'Astro.js-Website (Performance & Core Web Vitals)',
      'Leistungsseiten: Gutachter, Anwalt, Werkstatt, Mietwagen',
      'Lead-Formulare und klare CTAs',
      'Mobile-First für Soforthilfe',
      'Tracking-Grundlage für Kampagnen',
    ],
    metrics: [
      { value: 'Astro', label: 'Statisches Frontend' },
      { value: '4', label: 'Kernleistungen' },
      { value: 'Lead', label: 'Formulare & CTAs' },
      { value: '<1s', label: 'Schnelle Ladezeiten' },
    ],
    tags: ['Astro.js', 'Performance', 'Leadgenerierung', 'Conversion', 'Core Web Vitals'],
    url: 'https://www.unfallpaten.de',
    featured: true,
    cardBg: 'linear-gradient(145deg, #4A1414 0%, #2A1010 55%, #1A0C0C 100%)',
    cardAccent: '#F87171',
  },
  {
    slug: 'unfallpaten-crm-laravel',
    client: 'Unfallpaten CRM',
    clientKurz: 'UC',
    industry: 'Unfall & Schadenabwicklung',
    service: 'Laravel CRM',
    serviceType: 'entwicklung',
    jahr: '2025',
    tagline: 'Individuelles Laravel-CRM für Unfallpaten — Anfragen, Fälle und Partnerprozesse zentral gesteuert.',
    description:
      'Das Unfallpaten-CRM ist eine individuelle Laravel-Anwendung mit PHP, MySQL und REST-API. Fallakten, Rollen und Partner für Gutachter und Werkstätten laufen in einem System. Formulare der Astro.js-Website landen per API im CRM, Queues halten den Betrieb stabil.',
    seoDescription:
      'Laravel-CRM für Unfallpaten: PHP, MySQL, REST-API und Queues. Fallakten, Rollen und Leads der Astro.js-Website in einem System.',
    challenge:
      'Website-Leads, Partner und laufende Fälle verteilten sich über E-Mail, Tabellen und Einzeltools. Es fehlte ein zentrales System mit Rollen, Status und Nachvollziehbarkeit. Ohne CRM blieben Übergaben fehleranfällig und das Team arbeitete ohne gemeinsame Fallakte — trotz wachsender Anfragen über die Astro-Website.',
    solution:
      'Wir bauten ein individuelles Laravel-CRM mit Rollen- und Rechteverwaltung, Fallakten inkl. Status-Workflows und Partnerverwaltung für Gutachter und Werkstätten. Website-Formulare landeten per API direkt im CRM. Queues und saubere Datenmodelle halten den Betrieb stabil, wenn das Volumen steigt.',
    resultText:
      'Anfragen landen im CRM, Fälle sind teamfähig und nachvollziehbar. Website und Backend greifen ineinander — von Lead bis Abschluss.',
    techStack: ['Laravel', 'PHP', 'MySQL', 'REST API', 'Queues'],
    techDetails: [
      { name: 'Laravel', text: 'Das Unfallpaten-CRM ist eine individuelle Laravel-Anwendung. Fälle, Partner und Website-Leads liegen in einem System statt in E-Mail und Tabellen.' },
      { name: 'PHP', text: 'Die Fachlogik ist in PHP geschrieben: Rollen, Rechte und Status-Workflows für Gutachter, Werkstätten und das eigene Team.' },
      { name: 'MySQL', text: 'Fallakten und Partnerdaten liegen in MySQL, mit einem Datenmodell, das bei steigendem Anfragevolumen stabil bleibt.' },
      { name: 'REST API', text: 'Die REST-API nimmt Formulare der Astro.js-Website entgegen. Ein Lead auf unfallpaten.de landet direkt als Fall im CRM.' },
      { name: 'Queues', text: 'Queues verarbeiten Übergaben im Hintergrund, damit Statuswechsel und Benachrichtigungen nicht am einzelnen Request hängen.' },
    ],
    deliverables: [
      'Individuelles Laravel-CRM',
      'Rollen- und Rechteverwaltung',
      'Fallakten mit Status-Workflows',
      'Partnerverwaltung (Gutachter, Werkstätten)',
      'Anbindung der Website-Formulare per API',
    ],
    metrics: [
      { value: 'Laravel', label: 'CRM-Backend' },
      { value: 'Cases', label: 'Fall-Workflows' },
      { value: 'Rollen', label: '& Rechte' },
      { value: 'API', label: 'Website-Anbindung' },
    ],
    tags: ['Laravel', 'CRM', 'Individuelle Entwicklung', 'Workflows', 'API'],
    featured: true,
    cardBg: 'linear-gradient(145deg, #1A2A4A 0%, #142038 55%, #101828 100%)',
    cardAccent: '#38BDF8',
  },
];

export const serviceBadge: Record<ServiceType, { label: string; bg: string; text: string }> = {
  migration: { label: 'Migration', bg: 'bg-accent-50', text: 'text-accent-600' },
  shop: { label: 'Shop erstellt', bg: 'bg-emerald-50', text: 'text-emerald-700' },
  entwicklung: { label: 'Individuelle Entwicklung', bg: 'bg-violet-50', text: 'text-violet-700' },
  website: { label: 'Website', bg: 'bg-sky-50', text: 'text-sky-700' },
};
