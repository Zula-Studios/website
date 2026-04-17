const CAREERS_DATE_POSTED = "2026-04-17";
const CAREERS_VALID_THROUGH = "2027-04-17";
const careerJobs = [
  {
    slug: "shopify-entwickler",
    title: "Shopify Entwickler (m/w/d)",
    cardTitle: "Shopify Entwickler",
    tag: "E-Commerce · Themes · Apps",
    iconName: "shop",
    teaser: "Von Theme & Liquid bis Apps und APIs — du machst Shopify-Projekte technisch rund.",
    highlights: [
      "Liquid, Storefront & Checkout",
      "Metafields, Functions, private Apps",
      "Theming, Performance, Code Reviews"
    ],
    intro: "Du bringst Shops zum Laufen: von Theme-Anpassungen und Sections über Shopify Functions bis zu privaten Apps und API-Integrationen. Bei uns arbeitest du an echten Kundenprojekten — ohne Agentur-Bingo, mit klarem Fokus auf Qualität.",
    responsibilities: [
      "Entwicklung und Pflege von Shopify Themes (Liquid, CSS/JS) und Section-Architekturen",
      "Umsetzung von Features mit Storefront API, Admin API, Metafields und Checkout-Erweiterungen",
      "Mitwirkung an privaten Apps oder Skripten (z. B. Node, serverless Functions) je nach Projekt",
      "Enge Zusammenarbeit mit Projektleitung und Design — technische Machbarkeit früh einbringen",
      "Qualitätssicherung: Reviews, Tests, dokumentierte Übergaben"
    ],
    requirements: [
      "Mehrjährige Erfahrung in der Shopify-Entwicklung (Liquid, Theme-Architektur, APIs)",
      "Sicherer Umgang mit HTML, CSS und JavaScript (modernes JS)",
      "Erfahrung mit Git und teamweitem Branching / Reviews",
      "Sehr gute Deutschkenntnisse in Wort und Schrift"
    ],
    niceToHave: [
      "Shopify Plus, Hydrogen / Headless oder App-Entwicklung (Remix, Node)",
      "Erfahrung mit CI/CD, Theme-Kit/CLI, automatisierten Deployments",
      "Grundverständnis für Conversion, Performance und SEO im Shop-Kontext"
    ],
    weOffer: [
      "Spannende Projekte mit echten Shop-Betreibern — kein reines „White-Label-Band“",
      "Arbeit remote in Deutschland mit flexiblen Kernzeiten",
      "Kleines Team, kurze Wege, ehrliches Feedback",
      "Moderner Stack, regelmäßiger Austausch zu Shopify-Updates und Best Practices"
    ],
    leistungHref: "/leistungen/shopify-shop-erstellen",
    leistungLabel: "Shopify Shop erstellen"
  },
  {
    slug: "individuelle-entwicklung",
    title: "Softwareentwickler/in – Individuelle Entwicklung (m/w/d)",
    cardTitle: "Individuelle Entwicklung",
    tag: "Custom Apps · APIs · Headless",
    iconName: "code",
    teaser: "Backend, APIs und Integrationen — wenn der Standard-Shop an Grenzen stößt.",
    highlights: [
      "Laravel, Node oder vergleichbar",
      "REST, Webhooks, saubere Architektur",
      "Headless, Astro/React von Vorteil"
    ],
    intro: "Du entwickelst maßgeschneiderte Lösungen jenseits des Standard-Shops: Backend-Services, Schnittstellen und Integrationen für anspruchsvolle E-Commerce-Projekte. Du bist die technische Stütze, wenn Kunden mehr brauchen als Theme und App Store.",
    responsibilities: [
      "Konzeption und Implementierung von APIs, Webhooks und Middleware zwischen Shopify und Drittsystemen",
      "Entwicklung und Betreuung von Custom Apps oder Backend-Services (z. B. Laravel, Node)",
      "Mitwirkung an Architektur-Entscheidungen (Skalierung, Sicherheit, Wartbarkeit)",
      "Dokumentation für Team und Kunden, Code Reviews",
      "Enge Zusammenarbeit mit Shopify-fokussierten Rollen im Team"
    ],
    requirements: [
      "Fundierte Erfahrung in mindestens einem Backend- oder Full-Stack-Ökosystem (z. B. Laravel, Node.js)",
      "Sicherer Umgang mit APIs, Authentifizierung und Fehlerbehandlung",
      "Eigenverantwortliches Arbeiten in kleinen Teams, klare Kommunikation",
      "Sehr gute Deutschkenntnisse"
    ],
    niceToHave: [
      "Erfahrung mit Shopify Admin API / App Bridge",
      "Kenntnisse in Astro, React oder Next.js für Headless-Frontends",
      "Erfahrung mit ERP, PIM oder Zahlungsanbietern im E-Commerce"
    ],
    weOffer: [
      "Technisch anspruchsvolle Projekte mit klarem Scope und Ownership",
      "Remote in Deutschland, Abstimmung im Team per Slack/Meet",
      "Raum für Weiterbildung und Experimente mit neuen Tools",
      "Flache Hierarchien, direkter Draht zu Gründung & Lead Dev"
    ],
    leistungHref: "/leistungen/individuelle-entwicklung",
    leistungLabel: "Individuelle Entwicklung"
  }
];
function getCareerBySlug(slug) {
  return careerJobs.find((j) => j.slug === slug);
}
function getStelleLabel(slug) {
  if (slug === "initiativ") return "Initiativbewerbung";
  return getCareerBySlug(slug)?.title ?? slug;
}
const bewerbungStelleOptions = [
  ...careerJobs.map((j) => ({ value: j.slug, label: j.title })),
  { value: "initiativ", label: "Initiativbewerbung" }
];

export { CAREERS_DATE_POSTED as C, CAREERS_VALID_THROUGH as a, bewerbungStelleOptions as b, careerJobs as c, getStelleLabel as g };
