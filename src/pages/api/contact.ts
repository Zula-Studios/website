import type { APIRoute } from 'astro';
import { contactConfirmationHtml } from '@/lib/email-confirmation-templates';
import { getSmtpConfig, responseWhenSmtpNotConfigured, sendSmtpMail } from '@/lib/smtp-mail';

export const prerender = false;

const TO_EMAIL = 'sahbazoglu@tecpert.com';

export const POST: APIRoute = async ({ request }) => {
  if (!getSmtpConfig()) {
    return responseWhenSmtpNotConfigured('POST /api/contact');
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

  const { vorname, nachname, email, telefon, nachricht, datenschutz } = body;

  if (!vorname || !nachname || !email || !nachricht || datenschutz !== 'true') {
    return new Response(JSON.stringify({ error: 'Pflichtfelder fehlen' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const html = `
    <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; color: #0C0C0F;">
      <div style="background: #0C0C0F; padding: 28px 32px; border-radius: 12px 12px 0 0;">
        <p style="color: #38BDF8; font-size: 11px; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; margin: 0 0 8px;">Neue Kontaktanfrage</p>
        <h1 style="color: white; font-size: 22px; font-weight: 700; margin: 0;">Zula Studios – Kontaktformular</h1>
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
              <a href="tel:${telefon.replace(/\s/g, '')}" style="color: #0284C7; text-decoration: none;">${telefon}</a>
            </td>
          </tr>` : ''}
          <tr>
            <td style="padding: 14px 0 0; font-size: 12px; font-weight: 600; color: #88888F; text-transform: uppercase; letter-spacing: 0.08em; vertical-align: top;">Nachricht</td>
            <td style="padding: 14px 0 0; font-size: 15px; color: #0C0C0F; line-height: 1.6; white-space: pre-wrap;">${nachricht.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</td>
          </tr>
        </table>
      </div>
      <div style="background: white; padding: 20px 32px; border: 1px solid #EBEBEF; border-top: none; border-radius: 0 0 12px 12px;">
        <p style="margin: 0; font-size: 11px; color: #AEAEB5;">Eingegangen: ${new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin' })} Uhr · Zula Studios Kontaktformular</p>
      </div>
    </div>
  `;

  const incoming = await sendSmtpMail({
    to: TO_EMAIL,
    subject: `Neue Kontaktanfrage von ${vorname} ${nachname}`,
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
    subject: 'Ihre Nachricht ist bei uns eingegangen – Zula Studios',
    html: contactConfirmationHtml(vorname),
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
