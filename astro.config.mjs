// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Placeholder - no production domain decided yet (BRANDFINAL.md: xheia.com is
  // parked/unavailable, .ai/.co/.uk still open, not yet registered). This is the
  // ONE place the real domain needs to go once it exists - sitemap URLs, canonical
  // links, and Open Graph/Twitter meta (BaseLayout.astro) all derive from it via
  // Astro.site/Astro.url, so updating this one line fixes all of them at once.
  site: 'https://xheia.example',
  integrations: [sitemap()],
});
