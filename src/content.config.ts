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
