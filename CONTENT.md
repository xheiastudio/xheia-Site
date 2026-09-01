# Xheia Site — All Content

Every piece of visible (and meta) text on the site, organized by concept rather than by
file, so it's easy to review/edit in one place. Each section names its current source
file — edit here for a quick read, but the actual site is generated from those
`.astro`/`.md` files, so changes made only here won't appear live until they're copied
back into the source (tell me what you've changed and I'll sync it in).

Placeholders (things not yet filled in) are marked **[PLACEHOLDER]**.

---

## Global / meta

**File:** `src/layouts/BaseLayout.astro`

- Page `<title>` format: `{page title} · Xheia`
- Default meta description (used by Home, Track Record, Contact — pages that don't set their own): "Xheia is a full-stack data consultancy run by **Hoda**. I turn fragmented data into systems you can actually trust."

---

## Header / Nav

**File:** `src/components/Header.astro`

- Wordmark: `xheia`
- Nav links: `Track Record` · `Approach` · `About` · `Contact`
- CTA button (site-wide, same everywhere): **"Start a conversation"** → links to `/contact`

---

## Home / Hero terminal (`/`)

**File:** `src/components/Hero.astro`. Home is Hero-only — Header, Hero, Footer, nothing else.
Page title: "Full-stack data consulting"

Boot sequence, in order:

1. `$ xheia --init`
2. `> loading modules...`
3. Module-loading lines (name + progress bar + "OK"): `cleansing.sys`, `warehousing.sys`, `agentic_ai.sys`
4. `> system ready`
5. `$ whoami` (typed)
6. `> full-stack data consultant` (typed)
7. `$ operator --info`
8. `> Hoda — four-plus years contracting across the UK, not one specialism. (more: /about)`

Then the visible (non-animated) content below the terminal:
- Headline: **"I turn fragmented data into systems you can actually trust."**
- Subhead: "Full-lifecycle data work — cleansing, migration, warehousing, BI — so any AI you build on top actually holds up."
- CTA: "Start a conversation"

---

## What I do (`/approach`)

**File:** `src/components/Capabilities.astro`
Eyebrow: `// what I do`. Rendered as a boot-menu — click/tap an item to expand it.

| Item | Body |
|---|---|
| Cleansing & migration | Fixing and moving data so it can actually be trusted downstream. |
| Warehousing & BI | A single source of truth, and the reporting layer built on it. |
| Agentic AI systems | The newest expression of the same full-lifecycle work — never a bolt-on. |

Link: "See the track record →" → `/track-record`

---

## Principles (`/approach`)

**File:** `src/components/PillarBlock.astro`
Eyebrow: `// principles`. Rendered as a diagnostic self-check — click/tap a principle to "run" it and reveal the body text.

| Title | Body |
|---|---|
| Truth over theater | Every claim on this site is backed by delivered work, described plainly. No hype, no vendor theater. |
| Clarity is engineered, not promised | Full-lifecycle discipline — ingestion, cleansing, warehousing, BI — is what makes anything built on top of the data actually trustworthy. |
| Built to survive scrutiny | Security-conscious, evidence-based, documented — not a pitch that only holds up in the room it was delivered in. |

---

## How I work (`/approach`)

**File:** `src/components/EngagementStructure.astro`
Eyebrow: `// how I work`
Heading: "How an engagement runs". Rendered as a level-path — three connected nodes.

| Phase | Body |
|---|---|
| 01 Discovery | Understand the data, the systems, and what "trustworthy" actually needs to mean here. |
| 02 Build | Ingestion, cleansing, warehousing, BI — the full-lifecycle work, done in the open. |
| 03 Handoff | Delivered work, documented plainly — evidence you can check, not just a claim. |

---

## Tools (`/approach`)

**File:** `src/components/Tools.astro`
Eyebrow: `// tools`. Real stack, grounded in `xheia-content-worksheet.md` — nothing invented. Rendered as a pixel-tag list (same visual style as case-study tags).

- Azure Synapse, Power BI, Power Automate, SharePoint, HubSpot, Apollo, Python, SQL, Microsoft Foundry, rapidfuzz, Claude Code
- Caption: "Exact-match preferred over fuzzy auto-merging on company records — a deliberate choice, not a limitation."

---

## Approach page intro

**File:** `src/pages/approach/index.astro`
- Intro line: "What I do, how I think about it, and how an engagement actually runs."
- Ends with the Contact CTA band (see below).

---

## Contact CTA band

**File:** `src/components/ContactCTA.astro`
- "I turn fragmented data into systems you can actually trust." + "Start a conversation" button

Appears on `/approach` and `/about`. Not on Home — Hero already carries its own CTA there.

---

## Track Record (`/track-record`)

**File:** `src/pages/track-record/index.astro`
Page title: "Track Record"

- Intro line: "Full-lifecycle data work — cleansing, migration, warehousing, BI — and the agentic systems built on top of it."
- Disclaimer (shown above the case studies): "Client details are withheld by agreement; the work and outcomes below are real."

### Case studies — 3 real, anonymized entries
**Files:** `src/content/case-studies/*.md`

**A life sciences membership organisation** — post-acquisition customer intelligence
- Problem: Three acquisitions had left customer data fragmented across systems, with no way to score, segment, or act on it as one combined base.
- Approach: Built a post-acquisition customer intelligence pipeline — ICP scoring, churn detection, reactivation targeting, and cross-sell mapping — delivered through a six-tab Power BI dashboard, with full documentation handed over.
- Outcome: A single, actionable view of the combined customer base, backed by full documentation handover.
- Tags: ICP scoring, churn detection, post-acquisition, life sciences

**A major UK supply chain organisation** — CRM migration
- Problem: Legacy systems needed to migrate to a modern CRM, with the data cleansing that migration depended on.
- Approach: Helped with the CRM implementation — data migration and cleansing work moving legacy data into the new system.
- Outcome: A clean migration into the new system, with the underlying data trustworthy from day one.
- Tags: data migration, CRM implementation, cleansing, public sector
- Note: the worksheet described this as "the biggest supply chain company in the UK" — softened here since that superlative is identifying even without naming the company. "Helped with" (not "led") matches the worksheet's own wording of her role.

**A fitness organisation** — compensation modelling
- Problem: The organisation needed to redesign compensation for personal trainers working across multiple countries.
- Approach: Delivered the financial analysis behind a new pay structure, working directly with the CPO, and presented the findings to the board.
- Outcome: A board presentation grounded in real financial analysis, not guesswork.
- Tags: financial modelling, compensation strategy, fitness
- Note: outcome says "a board presentation," not "board-approved" — the worksheet confirms findings were presented, not that the model was approved.

No Retail/Education entries — no real detail supplied for either yet. To add more: write a markdown file in `src/content/case-studies/` with `client` (anonymized by sector/scope, never a company name), `problem`, `approach`, `outcome`, and `tags` — only from real, user-supplied details.

---

## About (`/about`)

**File:** `src/pages/about.astro`
Page title: "About — Hoda"
Meta description: "I'm Hoda — a full-stack data consultant who's spent four-plus years contracting across the UK."

- Name heading: **Hoda**
- Role line: "I do full-stack data consulting under the name Xheia."
- Location line: "Based remotely — working with clients across the UK and internationally."
- Photo: **[PLACEHOLDER]** — styled placeholder box, no image yet

Narrative (first person, rewritten in the real-content pass — service-first, no project-level detail, no biomedical framing):

> I've spent four-plus years contracting across the UK — moving between industries, systems, and problems rather than staying inside one company or one specialism.
>
> That range is the point: life sciences, public sector, and fitness organisations have all needed the same underlying thing — data cleaned, consolidated, and turned into something a team can actually act on.
>
> That work is now extending into agentic AI systems — the newest expression of the same full-lifecycle discipline, not a separate offering.

Ends with the Contact CTA band (see above).

---

## Contact (`/contact`)

**File:** `src/pages/contact.astro`, form fields in `src/components/ContactForm.astro`
Page title: "Contact"

- Heading: "Start a conversation"
- Form fields: Name, Email, Company, Message
- Submit button: "Send"
- Mailto fallback: "Prefer email? Write to hoda.97@live.com directly." **[PLACEHOLDER — temporary address, flagged in SPEC.md to replace with the business address before public launch]**

---

## Footer

**File:** `src/components/Footer.astro`

- Wordmark: `xheia`
- Credit line: "Built and run by **Hoda**."
- Social links: `GitHub` **[PLACEHOLDER URL]**, `LinkedIn` **[PLACEHOLDER — your personal profile URL]**, `Xheia · LinkedIn` **[PLACEHOLDER — held back until the company page has real content]**
- Flavor line: "$ status: operational"

---

## Open placeholders — quick checklist

- [x] ~~Full name~~ → **Hoda**, resolved sitewide in the real-content pass
- [x] ~~Real case studies~~ → 3 real, anonymized entries added (life sciences, public sector, fitness); more can be added the same way as real detail comes in
- [ ] Personal LinkedIn URL → Footer
- [ ] GitHub URL → Footer
- [ ] Xheia company LinkedIn URL → Footer (add only once that page has real content)
- [ ] Headshot image → `/about`
- [ ] Real business contact email → replaces `hoda.97@live.com` in `ContactForm.astro` before public launch
- [ ] Retail/Education substance — still no real detail; narrative and case studies both skip these sectors until there is

## Still open (from xheia-content-worksheet.md, not addressed in this pass)

These are genuinely open questions, not something guessed at — see the worksheet for the full list:
- Ideal client profile (size, sector, kind of problem)
- Whether "Gen Z" should be visible in tone, or stay purely biographical
- Banned words / words that feel like "you"
- A concrete personal anecdote for About (texture, not a case study)
- What made the biomedical-to-data transition happen, if any of that texture is wanted anywhere now that the framing itself has changed

## Anything you want to change?

If you edit wording here, just flag which section changed (or paste the new version)
and I'll copy it into the actual site files — this doc itself doesn't update the live
site on its own.
