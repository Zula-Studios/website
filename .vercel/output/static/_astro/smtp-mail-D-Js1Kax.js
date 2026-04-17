import nodemailer from 'nodemailer';

function escapeHtmlText(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
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
function contactConfirmationHtml(vorname) {
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
function projektConfirmationHtml(vorname, serviceLabel, budgetLabel, timelineLabel) {
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
function applicationConfirmationHtml(vorname, stelleLabel) {
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

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://zulastudios.de", "SSR": true};
function readEnv(key) {
  const fromProcess = process.env[key];
  if (typeof fromProcess === "string" && fromProcess.trim().length > 0) return fromProcess.trim();
  const fromMeta = Object.assign(__vite_import_meta_env__, { USER: process.env.USER, _: process.env._ })[key];
  if (typeof fromMeta === "string" && fromMeta.trim().length > 0) return fromMeta.trim();
  return void 0;
}
function getSmtpConfig() {
  const host = readEnv("SMTP_HOST");
  const user = readEnv("SMTP_USER");
  const pass = readEnv("SMTP_PASS");
  if (!host || !user || !pass) return null;
  const portRaw = readEnv("SMTP_PORT");
  const port = portRaw ? Number(portRaw) : 587;
  if (!Number.isFinite(port) || port <= 0) return null;
  const secure = readEnv("SMTP_SECURE") === "true" || readEnv("SMTP_SECURE") === "1" || port === 465;
  const from = readEnv("SMTP_FROM") ?? "Zula Studios <noreply@zulastudios.de>";
  return {
    host,
    port,
    secure,
    auth: { user, pass },
    from
  };
}
const missingSmtpMessage = "E-Mail-Versand ist nicht konfiguriert. SMTP_HOST, SMTP_USER und SMTP_PASS fehlen (lokal: .env, Production: z. B. Vercel → Environment Variables).";
function responseWhenSmtpNotConfigured(routeLabel) {
  if (Object.assign(__vite_import_meta_env__, { USER: process.env.USER, _: process.env._ }).DEV) {
    console.warn(`[${routeLabel}] ${missingSmtpMessage}`);
  }
  return new Response(JSON.stringify({ error: missingSmtpMessage }), {
    status: 503,
    headers: { "Content-Type": "application/json" }
  });
}
async function sendSmtpMail(opts) {
  const cfg = getSmtpConfig();
  if (!cfg) {
    return { ok: false, message: missingSmtpMessage };
  }
  try {
    const transporter = nodemailer.createTransport({
      host: cfg.host,
      port: cfg.port,
      secure: cfg.secure,
      auth: cfg.auth
    });
    await transporter.sendMail({
      from: cfg.from,
      to: opts.to,
      subject: opts.subject,
      html: opts.html,
      replyTo: opts.replyTo,
      attachments: opts.attachments?.map((a) => ({
        filename: a.filename,
        content: a.content,
        contentType: a.contentType
      }))
    });
    return { ok: true };
  } catch (e) {
    console.error("SMTP error:", e);
    const message = e instanceof Error ? e.message : "E-Mail konnte nicht gesendet werden";
    return { ok: false, message };
  }
}

export { applicationConfirmationHtml as a, contactConfirmationHtml as c, getSmtpConfig as g, projektConfirmationHtml as p, responseWhenSmtpNotConfigured as r, sendSmtpMail as s };
