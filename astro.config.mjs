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
  integrations: [
    // /pricing is hidden from nav post-launch (not yet decided whether to
    // show prices publicly) - excluded here too so it doesn't surface via
    // sitemap.xml while it's unlinked. Re-include by removing this filter
    // once /pricing is back in the nav (Header.astro).
    sitemap({ filter: (page) => !page.includes('/pricing') }),
  ],
});
