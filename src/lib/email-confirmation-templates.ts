import { SITE } from '@/config/site';
import { emailHeader, EMAIL_LINK_STYLE, EMAIL_SITE_URL } from '@/lib/email-layout';

/** Minimal escaping for user-supplied text in HTML mail bodies */
export function escapeHtmlText(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

const WRAPPER_OPEN = `
<div style="font-family: system-ui, -apple-system, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; color: #0A0A0C;">${emailHeader('Bestätigung')}
  <div style="background: #FFFFFF; padding: 32px; border: 1px solid #E4E6EB; border-top: none;">`;

const WRAPPER_CLOSE = `
  </div>
  <div style="background: #F4F5F7; padding: 20px 32px; border: 1px solid #E4E6EB; border-top: none; border-radius: 0 0 12px 12px; text-align: center;">
    <p style="margin: 0 0 4px; font-size: 12px; font-weight: 600; color: #0A0A0C;">${SITE.name} · ${SITE.address.city}</p>
    <p style="margin: 0; font-size: 12px; color: #88888F;">
      <a href="mailto:${SITE.email}" style="${EMAIL_LINK_STYLE}">${SITE.email}</a> · ${SITE.phone} · <a href="${EMAIL_SITE_URL}" style="${EMAIL_LINK_STYLE}">zulastudios.com</a>
    </p>
  </div>
</div>`;

export function contactConfirmationHtml(name: string): string {
  const safe = escapeHtmlText(name);
  return `${WRAPPER_OPEN}
    <p style="margin: 0 0 16px; font-size: 16px; line-height: 1.6; color: #0A0A0C;">Hallo ${safe},</p>
    <p style="margin: 0 0 16px; font-size: 15px; line-height: 1.65; color: #3F3F46;">
      vielen Dank für Ihre Nachricht über unser Kontaktformular. Wir haben Ihre Anfrage erhalten und melden uns in der Regel <strong>innerhalb von 24 Stunden</strong> bei Ihnen.
    </p>
    <p style="margin: 0 0 20px; font-size: 15px; line-height: 1.65; color: #3F3F46;">
      Diese E-Mail dient als Bestätigung – Sie müssen nichts weiter tun.
    </p>
    <p style="margin: 0; font-size: 15px; line-height: 1.65; color: #0A0A0C;">
      Mit freundlichen Grüßen<br/>
      <strong>Zula Studios</strong>
    </p>
${WRAPPER_CLOSE}`;
}

export function projektConfirmationHtml(
  name: string,
  serviceLabel: string,
  timelineLabel?: string
): string {
  const v = escapeHtmlText(name);
  const s = escapeHtmlText(serviceLabel);
  const t = timelineLabel ? escapeHtmlText(timelineLabel) : '';
  return `${WRAPPER_OPEN}
    <p style="margin: 0 0 16px; font-size: 16px; line-height: 1.6; color: #0A0A0C;">Hallo ${v},</p>
    <p style="margin: 0 0 16px; font-size: 15px; line-height: 1.65; color: #3F3F46;">
      vielen Dank für Ihre Projektanfrage. Wir haben alle Angaben erhalten und melden uns bei Ihnen, sobald wir sie gesichtet haben – in der Regel <strong>innerhalb von 24 Stunden</strong>.
    </p>
    <div style="background: white; border: 1px solid #E4E6EB; border-radius: 10px; padding: 16px 18px; margin: 0 0 20px;">
      <p style="margin: 0 0 10px; font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #88888F;">Ihre Angaben in Kürze</p>
      <p style="margin: 0; font-size: 14px; line-height: 1.7; color: #0A0A0C;">
        <strong>Leistung:</strong> ${s}${t ? `<br/>\n        <strong>Zeitplan:</strong> ${t}` : ''}
      </p>
    </div>
    <p style="margin: 0 0 20px; font-size: 15px; line-height: 1.65; color: #3F3F46;">
      Bei Rückfragen antworten Sie einfach auf diese E-Mail.
    </p>
    <p style="margin: 0; font-size: 15px; line-height: 1.65; color: #0A0A0C;">
      Mit freundlichen Grüßen<br/>
      <strong>Zula Studios</strong>
    </p>
${WRAPPER_CLOSE}`;
}

export function applicationConfirmationHtml(vorname: string, stelleLabel: string): string {
  const v = escapeHtmlText(vorname);
  const s = escapeHtmlText(stelleLabel);
  return `${WRAPPER_OPEN}
    <p style="margin: 0 0 16px; font-size: 16px; line-height: 1.6; color: #0A0A0C;">Hallo ${v},</p>
    <p style="margin: 0 0 16px; font-size: 15px; line-height: 1.65; color: #3F3F46;">
      vielen Dank für Ihre Bewerbung bei Zula Studios (<strong>${s}</strong>). Wir haben Ihre Angaben und Ihren Lebenslauf erhalten und melden uns bei Rückfragen oder dem nächsten Schritt — in der Regel <strong>innerhalb weniger Werktage</strong>.
    </p>
    <p style="margin: 0 0 20px; font-size: 15px; line-height: 1.65; color: #3F3F46;">
      Bei weiteren Unterlagen können Sie einfach auf diese E-Mail antworten.
    </p>
    <p style="margin: 0; font-size: 15px; line-height: 1.65; color: #0A0A0C;">
      Mit freundlichen Grüßen<br/>
      <strong>Zula Studios</strong>
    </p>
${WRAPPER_CLOSE}`;
}
