// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Real production domain (registered via Namecheap - xheia.com itself stayed
  // parked/unavailable per BRANDFINAL.md, .co was open). Sitemap URLs, canonical
  // links, and Open Graph/Twitter meta (BaseLayout.astro) all derive from this one
  // value via Astro.site/Astro.url.
  site: 'https://xheia.co',
  integrations: [sitemap()],
});
