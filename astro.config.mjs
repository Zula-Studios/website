import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

const SITE_URL = 'https://zulastudios.de';

export default defineConfig({
  site: SITE_URL,

  // ── HTML minification ──────────────────────────────────────────────────────
  compressHTML: true,

  // ── Instant link prefetching (massive INP + navigation speed improvement) ──
  prefetch: {
    prefetchAll: true,          // prefetch all internal links in viewport
    defaultStrategy: 'viewport', // start prefetching when link enters viewport
  },

  integrations: [
    tailwind(),
    mdx(),

    // ── Sitemap with per-page priorities ──────────────────────────────────────
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      serialize(item) {
        // Homepage: daily crawl, top priority
        if (item.url === `${SITE_URL}/`) {
          return { ...item, priority: 1.0, changefreq: 'daily' };
        }
        // Service landing pages: slow change, high value
        if (/\/leistungen\/.+/.test(item.url)) {
          return { ...item, priority: 0.9, changefreq: 'monthly' };
        }
        // Core pages
        if (/\/(leistungen|referenzen|ueber-uns|kontakt)\/?$/.test(item.url)) {
          return { ...item, priority: 0.85, changefreq: 'weekly' };
        }
        // Blog posts
        if (item.url.includes('/blog/')) {
          return { ...item, priority: 0.8, changefreq: 'monthly' };
        }
        // Blog index
        if (item.url.endsWith('/blog/')) {
          return { ...item, priority: 0.75, changefreq: 'daily' };
        }
        // Case studies
        if (item.url.includes('/referenzen/')) {
          return { ...item, priority: 0.8, changefreq: 'monthly' };
        }
        // Low-value utility pages
        return { ...item, priority: 0.4, changefreq: 'monthly' };
      },
    }),
  ],

  output: 'static',
  adapter: node({ mode: 'standalone' }),

  // ── Vite build optimisations ──────────────────────────────────────────────
  vite: {
    build: {
      // esbuild is the fastest minifier – already default, but explicit is clear
      minify: 'esbuild',
      // Minify all CSS
      cssMinify: true,
      // Increase chunk size warning threshold (Astro CSS bundles are intentionally large)
      chunkSizeWarningLimit: 600,
      rollupOptions: {
        output: {
          // Content-hash file names for immutable caching
          assetFileNames: '_astro/[name]-[hash][extname]',
          chunkFileNames: '_astro/[name]-[hash].js',
          entryFileNames: '_astro/[name]-[hash].js',
        },
      },
    },
    // Dedupe common packages across chunks
    optimizeDeps: {
      include: [],
    },
  },
});
