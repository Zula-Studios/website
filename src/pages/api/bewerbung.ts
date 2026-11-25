import type { APIRoute } from 'astro';
import { emailHeader, emailSummaryStyle, EMAIL_LINK_STYLE } from '@/lib/email-layout';
import { applicationConfirmationHtml } from '@/lib/email-confirmation-templates';
import { getStelleLabel } from '@/data/careers';
import { getSmtpConfig, responseWhenSmtpNotConfigured, sendSmtpMail } from '@/lib/smtp-mail';
import { SITE } from '@/config/site';

export const prerender = false;

const TO_EMAIL = SITE.email;

/** Vercel Request-Body oft ≤ 4,5 MB — Puffer für multipart. */
const MAX_CV_BYTES = 4 * 1024 * 1024;

const ALLOWED_STELLE = new Set([
  'shopify-entwickler',
  'individuelle-entwicklung',
  'initiativ',
]);

const ALLOWED_CV_MIME = new Set([
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]);

function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function safeHttpUrl(u: string): string | null {
  try {
    const parsed = new URL(u);
    if (parsed.protocol === 'http:' || parsed.protocol === 'https:') return u;
  } catch {
    /* ignore */
  }
  return null;
}

function safeFilename(name: string): string {
  const stripped = name.replace(/[/\\?%*:|"<>]/g, '').trim();
  const base = stripped.replace(/\s+/g, '_').slice(0, 120);
  if (!base || base === '.' || base === '..') return 'lebenslauf.pdf';
  return base;
}

function extAllowed(name: string): boolean {
  const lower = name.toLowerCase();
  return lower.endsWith('.pdf') || lower.endsWith('.doc') || lower.endsWith('.docx');
}

export const POST: APIRoute = async ({ request }) => {
  if (!getSmtpConfig()) {
    return responseWhenSmtpNotConfigured('POST /api/bewerbung');
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return new Response(JSON.stringify({ error: 'Ungültiger Request' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const vorname = String(formData.get('vorname') ?? '').trim();
  const nachname = String(formData.get('nachname') ?? '').trim();
  const email = String(formData.get('email') ?? '').trim();
  const telefon = String(formData.get('telefon') ?? '').trim();
  const stelle = String(formData.get('stelle') ?? '').trim();
  const portfolio = String(formData.get('portfolio') ?? '').trim();
  const nachricht = String(formData.get('nachricht') ?? '').trim();
  const datenschutz = String(formData.get('datenschutz') ?? '');

  const fileEntry = formData.get('lebenslauf');
  if (!vorname || !nachname || !email || !nachricht || !stelle || datenschutz !== 'true') {
    return new Response(JSON.stringify({ error: 'Pflichtfelder fehlen' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (!ALLOWED_STELLE.has(stelle)) {
    return new Response(JSON.stringify({ error: 'Ungültige Position' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (!fileEntry || typeof fileEntry === 'string' || !(fileEntry instanceof File)) {
    return new Response(JSON.stringify({ error: 'Bitte einen Lebenslauf hochladen (PDF oder Word).' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (fileEntry.size === 0) {
    return new Response(JSON.stringify({ error: 'Die Datei ist leer.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (fileEntry.size > MAX_CV_BYTES) {
    return new Response(JSON.stringify({ error: 'Datei zu groß (max. 4 MB).' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const rawName = fileEntry.name || 'lebenslauf.pdf';
  if (!extAllowed(rawName)) {
    return new Response(JSON.stringify({ error: 'Nur PDF oder Word (.doc, .docx) erlaubt.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  let mime = fileEntry.type || '';
  if (!mime || mime === 'application/octet-stream') {
    if (rawName.toLowerCase().endsWith('.pdf')) mime = 'application/pdf';
    else if (rawName.toLowerCase().endsWith('.docx'))
      mime = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
    else if (rawName.toLowerCase().endsWith('.doc')) mime = 'application/msword';
    else mime = 'application/octet-stream';
  }
  if (!ALLOWED_CV_MIME.has(mime)) {
    return new Response(JSON.stringify({ error: 'Ungültiger Dateityp. Bitte PDF oder Word verwenden.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  let fileBuffer: Buffer;
  try {
    fileBuffer = Buffer.from(await fileEntry.arrayBuffer());
  } catch {
    return new Response(JSON.stringify({ error: 'Datei konnte nicht gelesen werden.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const stelleLabel = getStelleLabel(stelle);
  const portfolioTrim = portfolio.trim();
  const portfolioSafe = portfolioTrim ? safeHttpUrl(portfolioTrim) : null;
  const attachmentName = safeFilename(rawName);

  const html = `
    <div style="font-family: system-ui, -apple-system, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; color: #0A0A0C;">
      ${emailHeader('Neue Bewerbung', 'Zula Studios – Bewerbungsformular')}
      <div style="background: #FFFFFF; padding: 32px; border: 1px solid #E4E6EB; border-top: none;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #E4E6EB; width: 140px; font-size: 12px; font-weight: 600; color: #88888F; text-transform: uppercase; letter-spacing: 0.08em;">Position</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #E4E6EB; font-size: 15px; color: #0A0A0C; font-weight: 600;">${esc(stelleLabel)}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #E4E6EB; font-size: 12px; font-weight: 600; color: #88888F; text-transform: uppercase; letter-spacing: 0.08em;">Lebenslauf</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #E4E6EB; font-size: 15px; color: #0A0A0C;">Im Anhang: ${esc(attachmentName)} (${(fileEntry.size / 1024).toFixed(0)} KB)</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #E4E6EB; font-size: 12px; font-weight: 600; color: #88888F; text-transform: uppercase; letter-spacing: 0.08em;">Name</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #E4E6EB; font-size: 15px; color: #0A0A0C; font-weight: 500;">${esc(vorname)} ${esc(nachname)}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #E4E6EB; font-size: 12px; font-weight: 600; color: #88888F; text-transform: uppercase; letter-spacing: 0.08em;">E-Mail</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #E4E6EB; font-size: 15px; color: #0A0A0C;">
              <a href="mailto:${encodeURIComponent(email)}" style="${EMAIL_LINK_STYLE}">${esc(email)}</a>
            </td>
          </tr>
          ${telefon ? `<tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #E4E6EB; font-size: 12px; font-weight: 600; color: #88888F; text-transform: uppercase; letter-spacing: 0.08em;">Telefon</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #E4E6EB; font-size: 15px; color: #0A0A0C;">
              <a href="tel:${String(telefon).replace(/\s/g, '')}" style="${EMAIL_LINK_STYLE}">${esc(String(telefon))}</a>
            </td>
          </tr>` : ''}
          ${portfolioTrim ? `<tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #E4E6EB; font-size: 12px; font-weight: 600; color: #88888F; text-transform: uppercase; letter-spacing: 0.08em; vertical-align: top;">Links</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #E4E6EB; font-size: 15px; color: #00873F; word-break: break-all;">
              ${portfolioSafe ? `<a href="${esc(portfolioSafe)}" style="${EMAIL_LINK_STYLE}">${esc(portfolioTrim)}</a>` : esc(portfolioTrim)}
            </td>
          </tr>` : ''}
          <tr>
            <td style="padding: 14px 0 0; font-size: 12px; font-weight: 600; color: #88888F; text-transform: uppercase; letter-spacing: 0.08em; vertical-align: top;">Anschreiben</td>
            <td style="padding: 14px 0 0; font-size: 15px; color: #0A0A0C; line-height: 1.6; white-space: pre-wrap;">${esc(nachricht)}</td>
          </tr>
        </table>
      </div>
      <div style="background: #F4F5F7; padding: 20px 32px; border: 1px solid #E4E6EB; border-top: none; border-radius: 0 0 12px 12px;">
        <p style="margin: 0; font-size: 11px; color: #AEAEB5;">Eingegangen: ${new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin' })} Uhr · Bewerbungsformular</p>
      </div>
    </div>
  `;

  const incoming = await sendSmtpMail({
    to: TO_EMAIL,
    subject: `Bewerbung: ${stelleLabel} — ${vorname} ${nachname}`,
    html,
    replyTo: email,
    attachments: [
      {
        filename: attachmentName,
        content: fileBuffer,
        contentType: mime,
      },
    ],
  });

  if (!incoming.ok) {
    return new Response(JSON.stringify({ error: 'E-Mail konnte nicht gesendet werden' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const confirmation = await sendSmtpMail({
    to: email,
    subject: 'Ihre Bewerbung ist eingegangen – Zula Studios',
    html: applicationConfirmationHtml(vorname, stelleLabel),
    replyTo: TO_EMAIL,
  });

  if (!confirmation.ok) {
    console.error('SMTP Bewerbungs-Bestätigung:', confirmation.message);
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
