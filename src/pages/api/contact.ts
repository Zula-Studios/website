import type { APIRoute } from 'astro';
import { emailHeader, emailSummaryStyle, EMAIL_LINK_STYLE } from '@/lib/email-layout';
import { contactConfirmationHtml } from '@/lib/email-confirmation-templates';
import { getSmtpConfig, responseWhenSmtpNotConfigured, sendSmtpMail } from '@/lib/smtp-mail';
import { SITE } from '@/config/site';

export const prerender = false;

const TO_EMAIL = SITE.email;

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

  const { name, email, telefon, nachricht, datenschutz } = body;

  if (!name || !email || !nachricht || datenschutz !== 'true') {
    return new Response(JSON.stringify({ error: 'Pflichtfelder fehlen' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const html = `
    <div style="font-family: system-ui, -apple-system, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; color: #0A0A0C;">
      ${emailHeader('Neue Kontaktanfrage', 'Zula Studios – Kontaktformular')}
      <div style="background: #FFFFFF; padding: 32px; border: 1px solid #E4E6EB; border-top: none;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #E4E6EB; width: 130px; font-size: 12px; font-weight: 600; color: #88888F; text-transform: uppercase; letter-spacing: 0.08em;">Name</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #E4E6EB; font-size: 15px; color: #0A0A0C; font-weight: 500;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #E4E6EB; font-size: 12px; font-weight: 600; color: #88888F; text-transform: uppercase; letter-spacing: 0.08em;">E-Mail</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #E4E6EB; font-size: 15px; color: #0A0A0C;">
              <a href="mailto:${email}" style="${EMAIL_LINK_STYLE}">${email}</a>
            </td>
          </tr>
          ${telefon ? `<tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #E4E6EB; font-size: 12px; font-weight: 600; color: #88888F; text-transform: uppercase; letter-spacing: 0.08em;">Telefon</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #E4E6EB; font-size: 15px; color: #0A0A0C;">
              <a href="tel:${telefon.replace(/\s/g, '')}" style="${EMAIL_LINK_STYLE}">${telefon}</a>
            </td>
          </tr>` : ''}
          <tr>
            <td style="padding: 14px 0 0; font-size: 12px; font-weight: 600; color: #88888F; text-transform: uppercase; letter-spacing: 0.08em; vertical-align: top;">Nachricht</td>
            <td style="padding: 14px 0 0; font-size: 15px; color: #0A0A0C; line-height: 1.6; white-space: pre-wrap;">${nachricht.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</td>
          </tr>
        </table>
      </div>
      <div style="background: #F4F5F7; padding: 20px 32px; border: 1px solid #E4E6EB; border-top: none; border-radius: 0 0 12px 12px;">
        <p style="margin: 0; font-size: 11px; color: #AEAEB5;">Eingegangen: ${new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin' })} Uhr · Zula Studios Kontaktformular</p>
      </div>
    </div>
  `;

  const incoming = await sendSmtpMail({
    to: TO_EMAIL,
    subject: `Neue Kontaktanfrage von ${name}`,
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
