import type { APIRoute } from 'astro';
import { contactConfirmationHtml, escapeHtmlText } from '@/lib/email-confirmation-templates';
import { getSmtpConfig, responseWhenSmtpNotConfigured, sendSmtpMail } from '@/lib/smtp-mail';
import { SITE } from '@/config/site';

export const prerender = false;

const TO_EMAIL = SITE.email;

const STATUS_LABELS: Record<string, string> = {
  'hat-webseite': 'Hat bereits eine Webseite',
  'braucht-webseite': 'Benötigt eine neue Webseite',
};

export const POST: APIRoute = async ({ request }) => {
  if (!getSmtpConfig()) {
    return responseWhenSmtpNotConfigured('POST /api/barbershops');
  }

  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: 'Ungültiger Request' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { name, firma, email, telefon, website, status, nachricht, datenschutz } = body;

  if (!name || !firma || !email || !telefon || datenschutz !== 'true') {
    return new Response(JSON.stringify({ error: 'Pflichtfelder fehlen' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #EBEBEF;width:140px;font-size:12px;font-weight:600;color:#88888F;text-transform:uppercase;letter-spacing:.08em;vertical-align:top;">${label}</td>
      <td style="padding:10px 0;border-bottom:1px solid #EBEBEF;font-size:15px;color:#0C0C0F;">${value}</td>
    </tr>`;

  const html = `
    <div style="font-family:system-ui,sans-serif;max-width:600px;margin:0 auto;color:#0C0C0F;">
      <div style="background:#0C0C0F;padding:28px 32px;border-radius:12px 12px 0 0;">
        <p style="color:#38BDF8;font-size:11px;font-weight:700;letter-spacing:.15em;text-transform:uppercase;margin:0 0 8px;">Neuer Lead: Barbershop / Friseursalon</p>
        <h1 style="color:white;font-size:22px;font-weight:700;margin:0;">Zula Studios – Landingpage Barbershops</h1>
      </div>
      <div style="background:#FAFAF8;padding:32px;border:1px solid #EBEBEF;border-top:none;">
        <table style="width:100%;border-collapse:collapse;">
          ${row('Status', escapeHtmlText(STATUS_LABELS[status] ?? '—'))}
          ${row('Name', escapeHtmlText(name))}
          ${row('Salon', escapeHtmlText(firma))}
          ${row('E-Mail', `<a href="mailto:${escapeHtmlText(email)}" style="color:#0284C7;text-decoration:none;">${escapeHtmlText(email)}</a>`)}
          ${row('Telefon', `<a href="tel:${escapeHtmlText(telefon.replace(/\s/g, ''))}" style="color:#0284C7;text-decoration:none;">${escapeHtmlText(telefon)}</a>`)}
          ${website ? row('Webseite', escapeHtmlText(website)) : ''}
          ${nachricht ? row('Nachricht', `<span style="white-space:pre-wrap;line-height:1.6;">${escapeHtmlText(nachricht)}</span>`) : ''}
        </table>
      </div>
    </div>`;

  const incoming = await sendSmtpMail({
    to: TO_EMAIL,
    subject: `Neuer Lead (Barbershop): ${firma} – ${name}`,
    html,
    replyTo: email,
  });

  if (!incoming.ok) {
    return new Response(JSON.stringify({ error: 'E-Mail konnte nicht gesendet werden' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const confirmation = await sendSmtpMail({
    to: email,
    subject: 'Ihre Anfrage ist bei uns eingegangen – Zula Studios',
    html: contactConfirmationHtml(name),
    replyTo: TO_EMAIL,
  });

  if (!confirmation.ok) {
    console.error('SMTP confirmation mail error:', confirmation.message);
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
