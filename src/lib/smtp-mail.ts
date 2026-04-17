import nodemailer from 'nodemailer';

export type SmtpConfig = {
  host: string;
  port: number;
  secure: boolean;
  auth: { user: string; pass: string };
  from: string;
};

function readEnv(key: string): string | undefined {
  const fromProcess = process.env[key];
  if (typeof fromProcess === 'string' && fromProcess.trim().length > 0) return fromProcess.trim();
  const fromMeta = import.meta.env[key as keyof ImportMetaEnv];
  if (typeof fromMeta === 'string' && fromMeta.trim().length > 0) return fromMeta.trim();
  return undefined;
}

/** Liest SMTP-Zugangsdaten (lokal: .env, Production: z. B. Vercel Environment Variables). */
export function getSmtpConfig(): SmtpConfig | null {
  const host = readEnv('SMTP_HOST');
  const user = readEnv('SMTP_USER');
  const pass = readEnv('SMTP_PASS');
  if (!host || !user || !pass) return null;

  const portRaw = readEnv('SMTP_PORT');
  const port = portRaw ? Number(portRaw) : 587;
  if (!Number.isFinite(port) || port <= 0) return null;

  const secure =
    readEnv('SMTP_SECURE') === 'true' ||
    readEnv('SMTP_SECURE') === '1' ||
    port === 465;

  const from =
    readEnv('SMTP_FROM') ?? 'Zula Studios <noreply@zulastudios.de>';

  return {
    host,
    port,
    secure,
    auth: { user, pass },
    from,
  };
}

const missingSmtpMessage =
  'E-Mail-Versand ist nicht konfiguriert. SMTP_HOST, SMTP_USER und SMTP_PASS fehlen (lokal: .env, Production: z. B. Vercel → Environment Variables).';

export function responseWhenSmtpNotConfigured(routeLabel: string): Response {
  if (import.meta.env.DEV) {
    console.warn(`[${routeLabel}] ${missingSmtpMessage}`);
  }
  return new Response(JSON.stringify({ error: missingSmtpMessage }), {
    status: 503,
    headers: { 'Content-Type': 'application/json' },
  });
}

export type SmtpAttachment = {
  filename: string;
  content: Buffer;
  contentType?: string;
};

export async function sendSmtpMail(opts: {
  to: string | string[];
  subject: string;
  html: string;
  replyTo?: string;
  attachments?: SmtpAttachment[];
}): Promise<{ ok: true } | { ok: false; message: string }> {
  const cfg = getSmtpConfig();
  if (!cfg) {
    return { ok: false, message: missingSmtpMessage };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: cfg.host,
      port: cfg.port,
      secure: cfg.secure,
      auth: cfg.auth,
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
        contentType: a.contentType,
      })),
    });
    return { ok: true };
  } catch (e) {
    console.error('SMTP error:', e);
    const message =
      e instanceof Error ? e.message : 'E-Mail konnte nicht gesendet werden';
    return { ok: false, message };
  }
}
