# Xheia Site — All Content

Every piece of visible (and meta) text on the site, organized by concept rather than by
file, so it's easy to review/edit in one place. Each section names its current source
file — edit here for a quick read, but the actual site is generated from those
`.astro`/`.md` files, so changes made only here won't appear live until they're copied
back into the source (tell me what you've changed and I'll sync it in).

**A structural pass is in progress** (moving "What I do" / "Principles" / "How I work"
off the home page onto a new `/approach` page, and reworking the terminal). Where a
section is about to move, it's flagged below with **→ moving to ...** so this doesn't
read confusingly mid-change. The words themselves aren't changing in that pass — only
where they live and how they're presented — so it's safe to start editing copy now.

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
- Nav links: `Track Record` · `About` · `Contact` **(→ a fourth item, `Approach`, is being added)**
- CTA button (site-wide, same everywhere): **"Start a conversation"** → links to `/contact`

---

## Hero / terminal (Home, `/`)

**File:** `src/components/Hero.astro`

- Terminal line 1: `$ whoami`
- Terminal line 2: `> full-stack data consultant`
- Headline: **"I turn fragmented data into systems you can actually trust."**
- Subhead: "Full-lifecycle data work — cleansing, migration, warehousing, BI — so any AI you build on top actually holds up."
- CTA: "Start a conversation"

**→ Getting a richer boot sequence** as part of the current pass — more terminal lines (fake module-loading for cleansing/warehousing/agentic-AI, styled as a boot-up), plus the identity-hook line below folded in as one more line:

- "**[Your Name]** — biomedical science background, not the usual data path. (more: /about)" — previously a separate line under the Hero (`IdentityHook.astro`, being removed); becomes part of the terminal script instead.

Page title (Home): "Full-stack data consulting"

---

## What I do (currently Home → **moving to `/approach`**)

**File:** `src/components/Capabilities.astro`
Eyebrow: `// what I do`

| Item | Body |
|---|---|
| Cleansing & migration | Fixing and moving data so it can actually be trusted downstream. |
| Warehousing & BI | A single source of truth, and the reporting layer built on it. |
| Agentic AI systems | The newest expression of the same full-lifecycle work — never a bolt-on. |

Link: "See the track record →" → `/track-record`

---

## Principles (currently Home → **moving to `/approach`**)

**File:** `src/components/PillarBlock.astro`
Eyebrow: `// principles`

| Title | Body |
|---|---|
| Truth over theater | Every claim on this site is backed by delivered work, described plainly. No hype, no vendor theater. |
| Clarity is engineered, not promised | Full-lifecycle discipline — ingestion, cleansing, warehousing, BI — is what makes anything built on top of the data actually trustworthy. |
| Built to survive scrutiny | Security-conscious, evidence-based, documented — not a pitch that only holds up in the room it was delivered in. |

---

## How I work (currently Home → **moving to `/approach`**)

**File:** `src/components/EngagementStructure.astro`
Eyebrow: `// how I work`
Heading: "How an engagement runs"

| Phase | Body |
|---|---|
| 01 Discovery | Understand the data, the systems, and what "trustworthy" actually needs to mean here. |
| 02 Build | Ingestion, cleansing, warehousing, BI — the full-lifecycle work, done in the open. |
| 03 Handoff | Delivered work, documented plainly — evidence you can check, not just a claim. |

---

## Contact CTA band

**File:** `src/components/ContactCTA.astro`
- "I turn fragmented data into systems you can actually trust." + "Start a conversation" button

Currently appears on Home and About. **→ Removed from Home** in the current pass (Hero already carries the CTA, and Home is being trimmed to just the terminal); stays on About, and will appear on the new `/approach` page too.

---

## Track Record (`/track-record`)

**File:** `src/pages/track-record/index.astro`
Page title: "Track Record"

- Intro line: "Full-lifecycle data work — cleansing, migration, warehousing, BI — and the agentic systems built on top of it."

### Case studies — currently empty [PLACEHOLDER]
**Files:** `src/content/case-studies/*.md` (none exist yet)

All four case studies previously here were removed — three were invented outright, and the fourth (life sciences) was generic copy never actually sourced from real engagement details. None of it was true. The page shows one of two states automatically, depending on whether any `.md` files exist:

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

- [ ] Full name → replaces every `[Your Name]` above (Hero boot sequence, About heading/title/meta, Footer credit, BaseLayout default description)
- [ ] Real case studies → `src/content/case-studies/`, anonymized by sector/scope, one at a time, as you send real details
- [ ] Personal LinkedIn URL → Footer
- [ ] GitHub URL → Footer
- [ ] Xheia company LinkedIn URL → Footer (add only once that page has real content)
- [ ] Headshot image → `/about`
- [ ] Real business contact email → replaces `hoda.97@live.com` in `ContactForm.astro` before public launch

## Anything you want to change?

If you edit wording here, just flag which section changed (or paste the new version)
and I'll copy it into the actual site files — this doc itself doesn't update the live
site on its own.
