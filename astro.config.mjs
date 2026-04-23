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
  integrations: [tailwind(), mdx(), sitemap()],
  compressHTML: true,

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
