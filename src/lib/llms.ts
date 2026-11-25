/**
 * Inhalte für /llms.txt und /llms-full.txt (https://llmstxt.org).
 * Wird beim Build aus denselben Daten wie die Website erzeugt — neue
 * Leistungen, Referenzen, Blogartikel und Jobs erscheinen automatisch.
 */
import { getCollection } from 'astro:content';
import { SITE } from '@/config/site';
import { servicesByCategory, serviceHref } from '@/data/services';
import { projekte } from '@/data/projekte';
import { careerJobs } from '@/data/careers';

const abs = (path: string) => (path === '/' ? `${SITE.url}/` : `${SITE.url}${path}`);
const link = (title: string, path: string, note?: string) =>
  `- [${title}](${abs(path)})${note ? `: ${note}` : ''}`;

async function getPosts() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.publishedDate.localeCompare(a.data.publishedDate));
}

const intro = () => `# ${SITE.name}

> ${SITE.name} ist eine Shopify- und Web-Agentur aus ${SITE.address.city} (gegründet ${SITE.founded}). Wir entwickeln Shopify-Shops, migrieren Shops von WooCommerce, Magento, Shopware & Co. zu Shopify, bauen schnelle Landingpages und individuelle Software (Astro.js, Next.js, Laravel) und integrieren KI-Lösungen. Wir arbeiten für Unternehmen in Hamburg und bundesweit remote.

Wichtige Fakten:
- Sitz: ${SITE.address.street}, ${SITE.address.zip} ${SITE.address.city}, ${SITE.address.countryName}
- Einsatzgebiet: Hamburg und ganz Deutschland (remote), deutschsprachig
- Kontakt: ${SITE.email} · ${SITE.phone}
- Erstgespräch: kostenlos und unverbindlich, Antwort innerhalb von 24 Stunden — ${abs('/projekt-starten')}
- Schwerpunkte: Shopify (Custom Themes, Liquid, Apps), Shopify-Migration, Astro.js, Next.js, Laravel, Headless Commerce, KI-Integration`;

export async function buildLlmsTxt(): Promise<string> {
  const posts = await getPosts();
  const sections: string[] = [intro()];

  for (const { category, items } of servicesByCategory) {
    sections.push(
      `## Leistungen: ${category.title}\n\n` +
        items.map(s => link(s.title, serviceHref(s), s.desc)).join('\n'),
    );
  }

  sections.push(
    `## Referenzen\n\n` +
      [
        link('Alle Referenzen', '/referenzen', 'Übersicht aller Kundenprojekte'),
        ...projekte.map(p =>
          link(`${p.client} (${p.service}, ${p.jahr})`, `/referenzen/${p.slug}`, `${p.tagline} Tech: ${p.techStack.join(', ')}.`),
        ),
      ].join('\n'),
  );

  if (posts.length) {
    sections.push(
      `## Ratgeber & Blog\n\n` +
        posts.map(p => link(p.data.title, `/blog/${p.slug}`, p.data.description)).join('\n'),
    );
  }

  sections.push(
    `## Unternehmen\n\n` +
      [
        link('Über uns', '/ueber-uns', 'Team, Werte und Arbeitsweise'),
        link('Kontakt', '/kontakt', 'E-Mail, Telefon und Kontaktformular'),
        link('Projekt starten', '/projekt-starten', 'Kurzes Formular für ein kostenloses Erstgespräch'),
        link('Karriere', '/karriere', 'Offene Stellen'),
        ...careerJobs.map(j => link(j.title, `/karriere/${j.slug}`, j.teaser)),
      ].join('\n'),
  );

  sections.push(
    `## Optional\n\n` +
      [
        link('Vollständige Inhalte für KI-Systeme', '/llms-full.txt', 'Leistungen, Referenzen und Blogartikel im Volltext'),
        link('Sitemap', '/sitemap-index.xml'),
        link('Impressum', '/impressum'),
        link('Datenschutz', '/datenschutz'),
      ].join('\n'),
  );

  return sections.join('\n\n') + '\n';
}

export async function buildLlmsFullTxt(): Promise<string> {
  const posts = await getPosts();
  const out: string[] = [intro()];

  for (const { category, items } of servicesByCategory) {
    out.push(`## Leistungen: ${category.title}\n\n${category.desc}`);
    for (const s of items) {
      const lines = [
        `### ${s.title}`,
        `URL: ${abs(serviceHref(s))}`,
        '',
        s.desc,
        '',
        'Umfang:',
        ...s.features.map(f => `- ${f}`),
      ];
      const page = s.page;
      if (page?.intro) lines.push('', `${page.intro.lead} ${page.intro.text}`);
      if (page?.useCases?.length) lines.push('', `Ideal für: ${page.useCases.join(', ')}.`);
      if (page?.process?.steps.length) {
        lines.push('', 'Ablauf:', ...page.process.steps.map((st, i) => `${i + 1}. ${st.title} — ${st.desc}`));
      }
      if (page?.faqs?.length) {
        lines.push('', 'Häufige Fragen:', ...page.faqs.flatMap(f => [`- Frage: ${f.q}`, `  Antwort: ${f.a}`]));
      }
      out.push(lines.join('\n'));
    }
  }

  out.push('## Referenzen');
  for (const p of projekte) {
    out.push(
      [
        `### ${p.client} — ${p.service} (${p.jahr})`,
        `URL: ${abs(`/referenzen/${p.slug}`)}`,
        `Branche: ${p.industry}`,
        `Technologien: ${p.techStack.join(', ')}`,
        '',
        p.description,
        '',
        `Herausforderung: ${p.challenge}`,
        `Lösung: ${p.solution}`,
        `Ergebnis: ${p.resultText}`,
        p.metrics.length ? `Kennzahlen: ${p.metrics.map(m => `${m.value} ${m.label}`).join(' · ')}` : '',
        p.deliverables.length ? `Umgesetzt: ${p.deliverables.join(', ')}` : '',
        p.testimonial ? `Kundenstimme: „${p.testimonial.quote}“ — ${p.testimonial.name}, ${p.testimonial.role}` : '',
      ]
        .filter(Boolean)
        .join('\n'),
    );
  }

  if (posts.length) {
    out.push('## Ratgeber & Blog');
    for (const post of posts) {
      out.push(
        [
          `### ${post.data.title}`,
          `URL: ${abs(`/blog/${post.slug}`)}`,
          `Veröffentlicht: ${post.data.publishedDate}${post.data.modifiedDate ? ` · Aktualisiert: ${post.data.modifiedDate}` : ''}`,
          '',
          post.data.description,
          '',
          // MDX-Importe/Komponenten entfernen, Markdown-Text behalten
          post.body.replace(/^import .*$/gm, '').replace(/<[A-Z][^>]*\/>/g, '').trim(),
        ].join('\n'),
      );
    }
  }

  out.push(
    `## Kontakt\n\n${SITE.name}, ${SITE.address.street}, ${SITE.address.zip} ${SITE.address.city}\nE-Mail: ${SITE.email}\nTelefon: ${SITE.phone}\nKostenloses Erstgespräch: ${abs('/projekt-starten')}`,
  );

  return out.join('\n\n') + '\n';
}
