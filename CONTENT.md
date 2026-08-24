# Xheia Site — All Content

Every piece of visible (and meta) text on the live site, in one place. Each section
names the source file it lives in — edit here for a quick read, but the actual site is
generated from those `.astro`/`.md` files, so changes made only here won't appear live
until they're copied back into the source.

Placeholders (things not yet filled in) are marked **[PLACEHOLDER]**.

---

## Global / meta

**File:** `src/layouts/BaseLayout.astro`

- Page `<title>` format: `{page title} · Xheia`
- Default meta description (used by Home, Track Record, Contact — pages that don't set their own): "Xheia is a full-stack data consultancy run by **[Your Name]**. I turn fragmented data into systems you can actually trust."

---

## Header / Nav

**File:** `src/components/Header.astro`

- Wordmark: `xheia`
- Nav links: `Track Record` · `About` · `Contact`
- CTA button (site-wide, same everywhere): **"Start a conversation"** → links to `/contact`

---

## Home (`/`)

**File:** `src/pages/index.astro` (assembles the sections below)
Page title: "Full-stack data consulting"

### Hero
**File:** `src/components/Hero.astro`

- Terminal line 1: `$ whoami`
- Terminal line 2: `> full-stack data consultant`
- Headline: **"I turn fragmented data into systems you can actually trust."**
- Subhead: "Full-lifecycle data work — cleansing, migration, warehousing, BI — so any AI you build on top actually holds up."
- CTA: "Start a conversation"

### Identity hook
**File:** `src/components/IdentityHook.astro`
One line directly under Hero, so Home doesn't read anonymous — not a profile, just a hook + link to `/about`.

- "**[Your Name]** — biomedical science background, not the usual data path. [More about me →](/about)"

### Capabilities
**File:** `src/components/Capabilities.astro`
Eyebrow: `// what I do`

| Tile | Body |
|---|---|
| Cleansing & migration | Fixing and moving data so it can actually be trusted downstream. |
| Warehousing & BI | A single source of truth, and the reporting layer built on it. |
| Agentic AI systems | The newest expression of the same full-lifecycle work — never a bolt-on. |

Link: "See the track record →" → `/track-record`

### Pillars
**File:** `src/components/PillarBlock.astro`
Eyebrow: `// principles`

| Title | Body |
|---|---|
| Truth over theater | Every claim on this site is backed by delivered work, described plainly. No hype, no vendor theater. |
| Clarity is engineered, not promised | Full-lifecycle discipline — ingestion, cleansing, warehousing, BI — is what makes anything built on top of the data actually trustworthy. |
| Built to survive scrutiny | Security-conscious, evidence-based, documented — not a pitch that only holds up in the room it was delivered in. |

### How an engagement runs
**File:** `src/components/EngagementStructure.astro`
Eyebrow: `// how I work`
Heading: "How an engagement runs"

| Phase | Body |
|---|---|
| 01 Discovery | Understand the data, the systems, and what "trustworthy" actually needs to mean here. |
| 02 Build | Ingestion, cleansing, warehousing, BI — the full-lifecycle work, done in the open. |
| 03 Handoff | Delivered work, documented plainly — evidence you can check, not just a claim. |

### Contact CTA band
**File:** `src/components/ContactCTA.astro`
- "I turn fragmented data into systems you can actually trust." + "Start a conversation" button

---

## Track Record (`/track-record`)

**File:** `src/pages/track-record/index.astro`
Page title: "Track Record"

- Intro line: "Full-lifecycle data work — cleansing, migration, warehousing, BI — and the agentic systems built on top of it."

### Case studies — currently empty [PLACEHOLDER]
**Files:** `src/content/case-studies/*.md` (none exist yet)

All four case studies previously here were removed — three were invented outright, and the fourth (life sciences) was generic copy never actually sourced from real engagement details. None of it was true. The page now shows one of two states automatically, depending on whether any `.md` files exist in that folder:

- **Empty (current state):** "Case studies are added here as real engagements are finalized for publication."
- **Once real entries exist:** an anonymization disclaimer — "Client details are withheld by agreement; the work and outcomes below are real." — followed by the case-study grid.

To add a real one: write a markdown file in `src/content/case-studies/` with `client` (anonymized by sector/scope, e.g. "a life sciences membership organisation" — never a company name), `problem`, `approach`, `outcome`, and `tags`. Only from real, user-supplied details — nothing invented.

---

## About (`/about`)

**File:** `src/pages/about.astro`
Page title: "About — **[Your Name]**"
Meta description: "I'm **[Your Name]** — I have a biomedical science background, not the usual data path."

- Name heading: **[Your Name]** [PLACEHOLDER]
- Role line: "I do full-stack data consulting under the name Xheia."
- Photo: **[PLACEHOLDER]** — styled placeholder box, no image yet

Narrative (first person):

> I have a biomedical science background — not the usual data or computer science path. Moving into data work wasn't a planned trajectory for me; it was an unexpected, self-directed shift.
>
> Four-plus years since, I've delivered enterprise-scale data consolidation, predictive customer intelligence, financial modelling, and BI — across life sciences, public sector, retail, education, and fitness.
>
> That work is now extending into agentic AI systems, most recently an agentic customer profiling build I delivered. The AI is downstream of the data-quality work — not a separate offering, and not the headline.

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
- Credit line: "Built and run by **[Your Name]**." [PLACEHOLDER]
- Social links: `GitHub` **[PLACEHOLDER URL]**, `LinkedIn` **[PLACEHOLDER — your personal profile URL]**, `Xheia · LinkedIn` **[PLACEHOLDER — held back until the company page has real content]**
- Flavor line: "$ status: operational"

---

## Open placeholders — quick checklist

- [ ] Full name → replaces every `[Your Name]` above (Home identity hook, About heading/title/meta, Footer credit, BaseLayout default description)
- [ ] Real case studies → `src/content/case-studies/`, anonymized by sector/scope, one at a time, as you send real details
- [ ] Personal LinkedIn URL → Footer
- [ ] GitHub URL → Footer
- [ ] Xheia company LinkedIn URL → Footer (add only once that page has real content)
- [ ] Headshot image → `/about`
- [ ] Real business contact email → replaces `hoda.97@live.com` in `ContactForm.astro` before public launch
