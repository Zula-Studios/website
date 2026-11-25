import type { APIRoute } from 'astro';
import { emailHeader, emailSummaryStyle, EMAIL_LINK_STYLE } from '@/lib/email-layout';
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

  const { name, firma, email, telefon, website, status, nachricht, datenschutz, stadt, kampagne, quelle, utm_source, utm_medium, paket } = body;

  if (!name || !firma || !email || !telefon || datenschutz !== 'true') {
    return new Response(JSON.stringify({ error: 'Pflichtfelder fehlen' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #E4E6EB;width:140px;font-size:12px;font-weight:600;color:#88888F;text-transform:uppercase;letter-spacing:.08em;vertical-align:top;">${label}</td>
      <td style="padding:10px 0;border-bottom:1px solid #E4E6EB;font-size:15px;color:#0A0A0C;">${value}</td>
    </tr>`;

  const html = `
    <div style="font-family:system-ui,-apple-system,'Segoe UI',sans-serif;max-width:600px;margin:0 auto;color:#0A0A0C;">
      ${emailHeader('Neuer Lead: Barbershop / Friseursalon', 'Zula Studios – Landingpage Barbershops')}
      <div style="background:#FFFFFF;padding:32px;border:1px solid #E4E6EB;border-top:none;border-radius:0 0 12px 12px;">
        <table style="width:100%;border-collapse:collapse;">
          ${row('Status', escapeHtmlText(STATUS_LABELS[status] ?? '—'))}
          ${row('Name', escapeHtmlText(name))}
          ${row('Salon', escapeHtmlText(firma))}
          ${stadt ? row('Stadt', escapeHtmlText(stadt)) : ''}
          ${row('E-Mail', `<a href="mailto:${escapeHtmlText(email)}" style="${EMAIL_LINK_STYLE}">${escapeHtmlText(email)}</a>`)}
          ${row('Telefon', `<a href="tel:${escapeHtmlText(telefon.replace(/\s/g, ''))}" style="${EMAIL_LINK_STYLE}">${escapeHtmlText(telefon)}</a>`)}
          ${website ? row('Webseite', escapeHtmlText(website)) : ''}
          ${paket ? row('Paket', escapeHtmlText(paket)) : ''}
          ${nachricht ? row('Nachricht', `<span style="white-space:pre-wrap;line-height:1.6;">${escapeHtmlText(nachricht)}</span>`) : ''}
          ${quelle ? row('Quelle', escapeHtmlText(quelle)) : ''}
          ${kampagne || utm_source || utm_medium ? row('Kampagne', escapeHtmlText([kampagne, utm_source, utm_medium].filter(Boolean).join(' · '))) : ''}
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
