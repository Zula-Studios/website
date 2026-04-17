import { g as getSmtpConfig, r as responseWhenSmtpNotConfigured, s as sendSmtpMail, p as projektConfirmationHtml } from '../../_astro/smtp-mail-D-Js1Kax.js';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const TO_EMAIL = "hallo@zulastudios.de";
const SERVICE_LABELS = {
  "shopify-shop": "Shopify Shop",
  "shopify-migration": "Migration zu Shopify",
  "individuelle-entwicklung": "Custom App / Integration",
  "optimierung": "Performance & Conversion",
  "beratung": "Beratung / Audit",
  "sonstiges": "Sonstiges"
};
const BUDGET_LABELS = {
  "bis-5000": "Bis 5.000 €",
  "5k-15k": "5.000 – 15.000 €",
  "15k-30k": "15.000 – 30.000 €",
  "30k-plus": "30.000+ €",
  "noch-offen": "Noch nicht bekannt"
};
const TIMELINE_LABELS = {
  "sofort": "So bald wie möglich",
  "1-3-monate": "In 1–3 Monaten",
  "3-plus": "In 3+ Monaten",
  "unklar": "Noch unklar"
};
const POST = async ({ request }) => {
  if (!getSmtpConfig()) {
    return responseWhenSmtpNotConfigured("POST /api/projekt");
  }
  let body;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: "Ungültiger Request" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  const { vorname, nachname, email, telefon, nachricht, service, budget, timeline, datenschutz } = body;
  if (!vorname || !nachname || !email || !nachricht || !service || datenschutz !== "true") {
    return new Response(JSON.stringify({ error: "Pflichtfelder fehlen" }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  const serviceLabel = SERVICE_LABELS[service] ?? service;
  const budgetLabel = BUDGET_LABELS[budget] ?? budget ?? "—";
  const timelineLabel = TIMELINE_LABELS[timeline] ?? timeline ?? "—";
  const html = `
    <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; color: #0C0C0F;">
      <div style="background: #0C0C0F; padding: 28px 32px; border-radius: 12px 12px 0 0;">
        <p style="color: #38BDF8; font-size: 11px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; margin: 0 0 8px;">Neue Projektanfrage</p>
        <h1 style="color: white; font-size: 22px; font-weight: 700; margin: 0;">Zula Studios – Projekt starten</h1>
      </div>
      <div style="background: #F0F9FF; padding: 16px 32px; border: 1px solid #BAE6FD; border-top: none;">
        <p style="margin: 0; font-size: 14px; color: #0369A1;">
          <strong style="font-weight: 700;">Leistung:</strong> ${serviceLabel}
          &nbsp;&nbsp;·&nbsp;&nbsp;
          <strong style="font-weight: 700;">Budget:</strong> ${budgetLabel}
          &nbsp;&nbsp;·&nbsp;&nbsp;
          <strong style="font-weight: 700;">Zeitplan:</strong> ${timelineLabel}
        </p>
      </div>
      <div style="background: #FAFAF8; padding: 32px; border: 1px solid #EBEBEF; border-top: none;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #EBEBEF; width: 130px; font-size: 12px; font-weight: 600; color: #88888F; text-transform: uppercase; letter-spacing: 0.08em;">Name</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #EBEBEF; font-size: 15px; color: #0C0C0F; font-weight: 500;">${vorname} ${nachname}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #EBEBEF; font-size: 12px; font-weight: 600; color: #88888F; text-transform: uppercase; letter-spacing: 0.08em;">E-Mail</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #EBEBEF; font-size: 15px; color: #0C0C0F;">
              <a href="mailto:${email}" style="color: #0284C7; text-decoration: none;">${email}</a>
            </td>
          </tr>
          ${telefon ? `<tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #EBEBEF; font-size: 12px; font-weight: 600; color: #88888F; text-transform: uppercase; letter-spacing: 0.08em;">Telefon</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #EBEBEF; font-size: 15px; color: #0C0C0F;">
              <a href="tel:${telefon.replace(/\s/g, "")}" style="color: #0284C7; text-decoration: none;">${telefon}</a>
            </td>
          </tr>` : ""}
          <tr>
            <td style="padding: 14px 0 0; font-size: 12px; font-weight: 600; color: #88888F; text-transform: uppercase; letter-spacing: 0.08em; vertical-align: top;">Beschreibung</td>
            <td style="padding: 14px 0 0; font-size: 15px; color: #0C0C0F; line-height: 1.6; white-space: pre-wrap;">${nachricht.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</td>
          </tr>
        </table>
      </div>
      <div style="background: white; padding: 20px 32px; border: 1px solid #EBEBEF; border-top: none; border-radius: 0 0 12px 12px;">
        <p style="margin: 0; font-size: 11px; color: #AEAEB5;">Eingegangen: ${(/* @__PURE__ */ new Date()).toLocaleString("de-DE", { timeZone: "Europe/Berlin" })} Uhr · Zula Studios Projektformular</p>
      </div>
    </div>
  `;
  const incoming = await sendSmtpMail({
    to: TO_EMAIL,
    subject: `Neue Projektanfrage: ${serviceLabel} von ${vorname} ${nachname}`,
    html,
    replyTo: email
  });
  if (!incoming.ok) {
    return new Response(JSON.stringify({ error: "E-Mail konnte nicht gesendet werden" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
  const confirmation = await sendSmtpMail({
    to: email,
    subject: "Ihre Projektanfrage ist eingegangen – Zula Studios",
    html: projektConfirmationHtml(vorname, serviceLabel, budgetLabel, timelineLabel),
    replyTo: TO_EMAIL
  });
  if (!confirmation.ok) {
    console.error("SMTP confirmation mail error:", confirmation.message);
  }
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
