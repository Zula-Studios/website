/** Minimal escaping for user-supplied text in HTML mail bodies */
export function escapeHtmlText(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

const WRAPPER_OPEN = `
<div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; color: #0C0C0F;">
  <div style="background: #0C0C0F; padding: 28px 32px; border-radius: 12px 12px 0 0;">
    <p style="color: #38BDF8; font-size: 11px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; margin: 0 0 8px;">Bestätigung</p>
    <h1 style="color: white; font-size: 22px; font-weight: 700; margin: 0;">Zula Studios</h1>
  </div>
  <div style="background: #FAFAF8; padding: 32px; border: 1px solid #EBEBEF; border-top: none; border-radius: 0 0 12px 12px;">`;

const WRAPPER_CLOSE = `
  </div>
</div>`;

export function contactConfirmationHtml(vorname: string): string {
  const safe = escapeHtmlText(vorname);
  return `${WRAPPER_OPEN}
    <p style="margin: 0 0 16px; font-size: 16px; line-height: 1.6; color: #0C0C0F;">Hallo ${safe},</p>
    <p style="margin: 0 0 16px; font-size: 15px; line-height: 1.65; color: #3F3F46;">
      vielen Dank für Ihre Nachricht über unser Kontaktformular. Wir haben Ihre Anfrage erhalten und melden uns in der Regel <strong>innerhalb von 24 Stunden</strong> bei Ihnen.
    </p>
    <p style="margin: 0 0 20px; font-size: 15px; line-height: 1.65; color: #3F3F46;">
      Diese E-Mail dient als Bestätigung – Sie müssen nichts weiter tun.
    </p>
    <p style="margin: 0; font-size: 15px; line-height: 1.65; color: #0C0C0F;">
      Mit freundlichen Grüßen<br/>
      <strong>Zula Studios</strong>
    </p>
${WRAPPER_CLOSE}`;
}

export function projektConfirmationHtml(
  vorname: string,
  serviceLabel: string,
  budgetLabel: string,
  timelineLabel: string
): string {
  const v = escapeHtmlText(vorname);
  const s = escapeHtmlText(serviceLabel);
  const b = escapeHtmlText(budgetLabel);
  const t = escapeHtmlText(timelineLabel);
  return `${WRAPPER_OPEN}
    <p style="margin: 0 0 16px; font-size: 16px; line-height: 1.6; color: #0C0C0F;">Hallo ${v},</p>
    <p style="margin: 0 0 16px; font-size: 15px; line-height: 1.65; color: #3F3F46;">
      vielen Dank für Ihre Projektanfrage. Wir haben alle Angaben erhalten und melden uns bei Ihnen, sobald wir sie gesichtet haben – in der Regel <strong>innerhalb von 24 Stunden</strong>.
    </p>
    <div style="background: white; border: 1px solid #EBEBEF; border-radius: 10px; padding: 16px 18px; margin: 0 0 20px;">
      <p style="margin: 0 0 10px; font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #88888F;">Ihre Angaben in Kürze</p>
      <p style="margin: 0; font-size: 14px; line-height: 1.7; color: #0C0C0F;">
        <strong>Leistung:</strong> ${s}<br/>
        <strong>Budget:</strong> ${b}<br/>
        <strong>Zeitplan:</strong> ${t}
      </p>
    </div>
    <p style="margin: 0 0 20px; font-size: 15px; line-height: 1.65; color: #3F3F46;">
      Bei Rückfragen antworten Sie einfach auf diese E-Mail.
    </p>
    <p style="margin: 0; font-size: 15px; line-height: 1.65; color: #0C0C0F;">
      Mit freundlichen Grüßen<br/>
      <strong>Zula Studios</strong>
    </p>
${WRAPPER_CLOSE}`;
}

export function applicationConfirmationHtml(vorname: string, stelleLabel: string): string {
  const v = escapeHtmlText(vorname);
  const s = escapeHtmlText(stelleLabel);
  return `${WRAPPER_OPEN}
    <p style="margin: 0 0 16px; font-size: 16px; line-height: 1.6; color: #0C0C0F;">Hallo ${v},</p>
    <p style="margin: 0 0 16px; font-size: 15px; line-height: 1.65; color: #3F3F46;">
      vielen Dank für Ihre Bewerbung bei Zula Studios (<strong>${s}</strong>). Wir haben Ihre Angaben und Ihren Lebenslauf erhalten und melden uns bei Rückfragen oder dem nächsten Schritt — in der Regel <strong>innerhalb weniger Werktage</strong>.
    </p>
    <p style="margin: 0 0 20px; font-size: 15px; line-height: 1.65; color: #3F3F46;">
      Bei weiteren Unterlagen können Sie einfach auf diese E-Mail antworten.
    </p>
    <p style="margin: 0; font-size: 15px; line-height: 1.65; color: #0C0C0F;">
      Mit freundlichen Grüßen<br/>
      <strong>Zula Studios</strong>
    </p>
${WRAPPER_CLOSE}`;
}
