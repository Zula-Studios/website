import { SITE } from '@/config/site';

/**
 * Gemeinsame Bausteine für alle E-Mails (Benachrichtigungen an uns und
 * Bestätigungen an Kunden) — Farben wie auf der Website.
 */
export const EMAIL_COLORS = {
  ink: '#0A0A0C',
  green: '#00F573',
  /** Grün mit ausreichendem Kontrast auf hellem Grund (Links) */
  greenText: '#00873F',
  greenSoft: '#ECFFF4',
  greenBorder: '#B3F5D0',
  surface: '#F4F5F7',
  border: '#E4E6EB',
  muted: '#62626E',
  faint: '#88888F',
} as const;

// Mails brauchen absolute, öffentlich ladbare URLs (Logo, Links).
export const EMAIL_SITE_URL = SITE.url;

// Weißes Logo auf transparentem Grund, gezeigt auf dem dunklen Header.
// Alt-Text greift, wenn das Mailprogramm Bilder blockiert.
export const LOGO_URL = new URL(SITE.logo, EMAIL_SITE_URL).toString();

/** Dunkler Kopfbereich mit Logo, grünem Eyebrow und optionalem Titel. */
export function emailHeader(eyebrow: string, title?: string): string {
  const c = EMAIL_COLORS;
  return `
      <div style="background: ${c.ink}; padding: 32px 32px 28px; border-radius: 12px 12px 0 0; text-align: center;">
        <a href="${EMAIL_SITE_URL}" style="text-decoration: none;">
          <img src="${LOGO_URL}" alt="${SITE.name}" width="72" style="display: block; margin: 0 auto 18px; width: 72px; height: auto; border: 0;" />
        </a>
        <p style="color: ${c.green}; font-size: 11px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; margin: 0${title ? ' 0 8px' : ''};">${eyebrow}</p>
        ${title ? `<h1 style="color: #FFFFFF; font-size: 22px; font-weight: 700; letter-spacing: -0.02em; margin: 0;">${title}</h1>` : ''}
      </div>
      <div style="height: 3px; background: ${c.green}; line-height: 3px; font-size: 0;">&nbsp;</div>`;
}

/** Hervorgehobene Zeile unter dem Header (z. B. Leistung, Status). */
export function emailSummaryStyle(): string {
  const c = EMAIL_COLORS;
  return `background: ${c.greenSoft}; padding: 16px 32px; border: 1px solid ${c.greenBorder}; border-top: none;`;
}

export const EMAIL_LINK_STYLE = `color: ${EMAIL_COLORS.greenText}; text-decoration: none; font-weight: 500;`;
