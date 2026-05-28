// @ts-check
import { defineConfig } from 'astro/config';
import { resolve } from 'path';

import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '~': resolve('./src'),
      },
    },
  },

  adapter: vercel({
    functionPerRoute: false,
  })
});