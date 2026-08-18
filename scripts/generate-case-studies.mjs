#!/usr/bin/env node
// Generates placeholder case-study entries for src/content/case-studies/. Sectors and
// work types are grounded in BRANDFINAL.md §1 ("life sciences, public sector, retail,
// education, and fitness... predictive customer intelligence... most recently an
// agentic customer profiling build") — descriptors only, no invented client names or metrics.
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'src/content/case-studies');

const caseStudies = [
  {
    slug: 'life-sciences-consolidation',
    client: 'Life sciences — data consolidation',
    problem: 'Multiple data sources across teams, with no single source of truth for reporting.',
    approach: 'Consolidated ingestion pipelines, cleansing rules, and a unified warehouse.',
    outcome: 'Leadership dashboards teams could trust without cross-checking source systems.',
    tags: ['data consolidation', 'warehousing', 'life sciences'],
  },
  {
    slug: 'public-sector-bi-modernization',
    client: 'Public sector — BI modernization',
    problem: 'Legacy reporting tools that could not keep pace with policy-driven data demands.',
    approach: 'Rebuilt the BI layer on a modern warehouse with documented, auditable transforms.',
    outcome: 'Faster reporting that held up under audit.',
    tags: ['BI', 'public sector', 'warehousing'],
  },
  {
    slug: 'retail-customer-intelligence',
    client: 'Retail — predictive customer intelligence',
    problem: 'Customer data fragmented across systems, with no predictive layer.',
    approach: 'Built a unified customer data model and a predictive scoring pipeline.',
    outcome: 'A single customer view that internal teams could act on directly.',
    tags: ['predictive analytics', 'customer intelligence', 'retail'],
  },
  {
    slug: 'fitness-agentic-profiling',
    client: 'Fitness — agentic customer profiling',
    problem: 'Customer profiling that was manual and inconsistent across channels.',
    approach: 'Delivered an agentic profiling system built on top of the cleaned customer data layer.',
    outcome: 'Automated profiling that stayed accurate as the underlying data changed.',
    tags: ['agentic AI', 'customer profiling', 'fitness'],
  },
];

mkdirSync(outDir, { recursive: true });

for (const { slug, ...data } of caseStudies) {
  const frontmatter = [
    '---',
    `client: "${data.client}"`,
    `problem: "${data.problem}"`,
    `approach: "${data.approach}"`,
    `outcome: "${data.outcome}"`,
    `tags: [${data.tags.map((t) => `"${t}"`).join(', ')}]`,
    '---',
    '',
  ].join('\n');

  const path = join(outDir, `${slug}.md`);
  writeFileSync(path, frontmatter);
  console.log(`wrote: ${path}`);
}
