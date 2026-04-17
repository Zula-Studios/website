/**
 * Plesk / Phusion Passenger entry point.
 *
 * In Plesk → Domain → Node.js set:
 *   Application Startup File: startup.mjs
 *   Document Root:            /path/to/domain/dist/client
 *   Application Root:         /path/to/domain
 *   Node.js version:          20 (or 22)
 *
 * Add the following environment variables in Plesk:
 *   HOST          0.0.0.0
 *   SMTP_HOST     your.smtp.host
 *   SMTP_PORT     587
 *   SMTP_USER     your@email.com
 *   SMTP_PASS     yourpassword
 */

// Passenger sets PORT automatically; HOST must be 0.0.0.0 so it binds to all interfaces.
process.env.HOST = process.env.HOST || '0.0.0.0';

await import('./dist/server/entry.mjs');
