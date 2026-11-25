#!/usr/bin/env node
/**
 * Meldet alle URLs aus der Live-Sitemap per IndexNow an Bing, Yandex & Co.
 * (Bing speist u. a. die ChatGPT-Suche und Copilot.)
 *
 * Nutzung — nach jedem Deploy:  npm run indexnow
 * Der Schlüssel liegt öffentlich unter /<KEY>.txt (so verlangt es IndexNow).
 */
const SITE = 'https://zulastudios.com';
const KEY = '52e2a50e714f0272adcbb32fb892637e';

const fetchText = async (url) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${url} → HTTP ${res.status}`);
  return res.text();
};

const index = await fetchText(`${SITE}/sitemap-index.xml`);
const sitemaps = [...index.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const urls = [];
for (const sm of sitemaps) {
  const xml = await fetchText(sm);
  urls.push(...[...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]));
}

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host: new URL(SITE).host,
    key: KEY,
    keyLocation: `${SITE}/${KEY}.txt`,
    urlList: urls,
  }),
});

console.log(`IndexNow: ${urls.length} URLs gemeldet → HTTP ${res.status}`);
if (res.status >= 400) {
  console.error(await res.text());
  process.exit(1);
}
