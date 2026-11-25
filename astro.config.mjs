// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';

import { SITE } from './src/config/site.ts';

// https://astro.build/config
export default defineConfig({
  site: SITE.url,
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  integrations: [
    tailwind(),
    mdx(),
    sitemap({
      // Danke-, Kampagnen- und Fehlerseiten sind noindex → nicht in die Sitemap
      filter: (page) => !/\/(danke|kampagne\/[^/]+|404)\/?$/.test(page),
      // URLs ohne Slash am Ende — identisch mit Canonical und internen Links
      serialize: (item) => ({
        ...item,
        url: item.url.replace(/(?<=[^/])\/$/, '').replace(/^(https?:\/\/[^/]+)$/, '$1/'),
      }),
    }),
  ],
  compressHTML: true,

  // Eingestellte Leistungen dauerhaft (301) auf die passendste Seite umleiten,
  // damit Rankings und Backlinks erhalten bleiben
  redirects: {
    '/leistungen/astro-websites': { status: 301, destination: '/leistungen/landingpages' },
    '/leistungen/wordpress-astro-migration': { status: 301, destination: '/leistungen/individuelle-entwicklung' },
  },

  vite: {
    build: {
      cssMinify: true,
      minify: 'esbuild',
      rollupOptions: {
        output: {
          manualChunks: undefined,
        },
      },
    },
  },
});
