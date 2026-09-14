// Astro 5+ Content Layer API — config lives at src/content.config.ts (not src/content/config.ts).
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const caseStudies = defineCollection({
  loader: glob({ pattern: 'case-studies/*.md', base: './src/content' }),
  schema: z.object({
    client: z.string(),
    problem: z.string(),
    approach: z.string(),
    outcome: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = { caseStudies };

// The glob loader's entry.id is the file path relative to `base`, minus extension —
// it does NOT strip the case-studies/ subdirectory (e.g. "case-studies/foo"), so
// every consumer that turns an entry into a /work/<slug> URL needs this same strip.
// Centralized here so the regex can't drift out of sync between callers.
export function caseStudySlug(id: string): string {
  return id.replace(/^case-studies\//, '');
}
