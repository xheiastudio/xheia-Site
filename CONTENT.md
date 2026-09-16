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
- Default meta description (used by Home, Work, Contact — pages that don't set their own): "Xheia is a full-stack data consultancy run by **Hoda**. I turn fragmented data into systems you can actually trust."

---

## Header / Nav

**File:** `src/components/Header.astro`

- Wordmark: `xheia`
- Nav links: `Approach` · `Work` · `About` · `Contact` (Work renamed from "Track Record" — see SPEC.md revision note; Approach/Work order swapped in the nav-swap-and-copy-V2 pass)
- CTA button (site-wide, same everywhere): **"Start a conversation"** → links to `/contact`

---

## Home / Hero terminal (`/`)

**File:** `src/components/Hero.astro`. Home is Hero-only — Header, Hero, Footer, nothing else.
Page title: "Full-stack data consulting"

Single terminal frame (no nested boxed panel — see SPEC.md's single-terminal-frame
revision note), sized to its content — no longer forced to fill the full viewport
height, which used to leave empty space below the (fixed-length) content.

The boot sequence **plays once** (home-finalization pass — an intermediate version
made it loop forever with the tagline permanently static; live use showed that wasn't
wanted). Every single-line item types out character-by-character; the headline,
subhead, and operator-response line reveal as a block instead (they wrap, and the
per-character technique breaks on wrapped text). Pacing sped up a third time in the
copy pass (CPS/DWELL/BEAT all tightened again) — same full sequence, noticeably faster
than before:

1. `$ xheia --init` (typed)
2. `> loading modules...` (typed)
3. Module-loading lines (name typed + progress bar + "OK"): `cleansing.sys`, `warehousing.sys`, `agentic_ai.sys`
4. `> system ready` (typed)
5. `$ whoami` (typed)
6. `> full-stack data consultant` (typed)
7. `$ operator --info` (typed)
8. `> Hoda - multidisciplinary across BI, automation and data strategy. (more: /about)` (block reveal; copy pass — reworded from the years-contracting fact to a skills-summary line, keeping the `Hoda -` lead-in and the `(more)` link)
9. Headline (`>` prefix, block reveal): **"I turn fragmented data into systems you can actually trust."**
10. Subhead (`//` prefix, block reveal): "From cleansing and migration to warehousing and BI - building the foundation that makes reliable decisions possible." (copy pass — replaces the earlier "so whatever you build on it actually holds up" line)
11. CTA: "Start a conversation"

Once the sequence finishes, everything (boot log + tagline + CTA) stays on screen
together — nothing clears, nothing loops. A `boot-skip` class (set once per session
after the sequence first completes) shows the fully "booted" end state instantly on
repeat visits to Home, so revisiting doesn't mean sitting through the whole sequence
again with the tagline hidden meanwhile.

---

## What I do (`/approach`)

**File:** `src/components/Capabilities.astro`
Eyebrow: `// what I do`. Rendered as a boot-menu — each item auto-loads staggered (bar
fills, then a ✓-prefixed body paragraph lands), being first on the page it plays
immediately on load with no scroll needed. Previously click/tap-to-expand; converted
to auto-load in the nav-swap-and-copy-V2 pass.

| Item | Body |
|---|---|
| Cleansing & migration | Fixing and moving data so it can actually be trusted downstream. |
| Warehousing & BI | A single source of truth, and the reporting layer built on it. |
| AI agents & automation | The newest expression of the same full-lifecycle work - never a bolt-on. |
| Post-acquisition integration | Consolidating data from multiple systems after a merger or acquisition into one source you can actually act on. |
| Financial modelling & commercial analysis | Financial analysis that stands up in front of a board. |

(AI agents & automation renamed from "Agentic AI systems" in the copy pass. Last two
items added in the copy V2 pass — traced to the life-sciences and fitness case studies
respectively.)

Link: "See the work →" → `/work`

---

## Principles (`/approach`)

**File:** `src/components/PillarBlock.astro`
Eyebrow: `// principles`. Rendered as a diagnostic self-check — indicator dot + title,
a bar fills on its own line below it, then a ✓-prefixed body paragraph lands. This is
the ORIGIN of that bar-fill-then-checkmark visual; previously click/tap to "run" a
principle, now auto-loads staggered as the section scrolls into view (nav-swap-and-
copy-V2 pass) — same layout either way.

| Title | Body |
|---|---|
| Truth over theatre | Every claim on this site is backed by delivered work, described plainly. No hype, no vendor theatre. |
| Clarity is engineered, not promised | Full-lifecycle discipline - ingestion, cleansing, warehousing, BI - is what makes anything built on top of the data actually trustworthy. |
| Built to survive scrutiny | Security-conscious, evidence-based, documented - not a pitch that only holds up in the room it was delivered in. |

(Wording unchanged in the copy pass — explicitly held back — punctuation-only fix.)

---

## How I work (`/approach`)

**File:** `src/components/EngagementStructure.astro`
Eyebrow: `// how I work`
Heading: "How an engagement runs". Rendered as a level-path — three connected nodes.

| Phase | Body |
|---|---|
| 01 Discovery | First, I get into your data and your systems and work out what "reliable" needs to mean for your business specifically. I've worked across life sciences, public sector, and fitness without knowing the domain going in - so I don't assume I already understand your context, I ask until I do. |
| 02 Build | Ingestion, cleansing, warehousing, BI. You see it get built as it happens, not just a finished dashboard dropped on you at the end. |
| 03 Handoff | You get the finished work, plus documentation good enough that someone else could pick it up without me in the room. That's not a nice-to-have - it's what I actually leave behind on every project. |

---

## Tools (`/approach`)

**File:** `src/components/Tools.astro`
Eyebrow: `// tools`. Real stack, grounded in `xheia-content-worksheet.md` — nothing invented. Rendered as a pixel-tag list (same visual style as case-study tags), fading in as a group on scroll — deliberately no per-item "boot check" bar (a flat tag list doesn't suit it).

- Microsoft data & AI stack (Azure, Power BI, Foundry) · Python · SQL · Power Automate · Claude Code (condensed from 11 individual tools to 5 grouped labels in the copy V2 pass — same real stack)
- No caption (removed in the copy pass — the previous exact-match/fuzzy-matching explainer line didn't land, per direct feedback; just the tag list now)

---

## Approach page intro

**File:** `src/pages/approach/index.astro`
- Intro line: "What I do, how I think about it, and how a project runs from first call to handover."
- Ends with the Contact CTA band (see below).

---

## Contact CTA band

**File:** `src/components/ContactCTA.astro`
- "I turn fragmented data into systems that hold up after I've moved on." + "Start a conversation" button (copy pass — was "...systems you can actually trust.", the same line as Home's tagline; now a distinct closing line so the two aren't identical)

Appears on `/approach` and `/about`. Not on Home — Hero already carries its own CTA there, with its own (unchanged) primary tagline.

---

## Work (`/work`)

**File:** `src/pages/work/index.astro`
Page title: "Work" (renamed from "Track Record" — a proof-of-work research doc flagged that
label as priming a resume reading; the case-study structure itself already matched the
research's recommendation, so only the label/route changed)

- Intro line: "Real engagements across life sciences, public sector, and fitness - different sectors, same underlying problem to solve." (copy pass — replaces a line that repeated Home's lifecycle phrasing verbatim)
- Sectors strip: `// sectors Fitness · Life sciences · Public sector` — derived automatically from each case study's tags (sector is always the last tag), not hardcoded
- Disclaimer (shown above the case studies): "Client details are withheld by agreement; the work and outcomes below are real."
- Below the grid (copy pass, new): "More case studies loading" + a blinking caret, reusing the existing `.pending-caret` treatment (previously dormant — only used for the true empty-state message, which isn't active with 3 real entries)

### Case studies — 3 real, anonymized entries
**Files:** `src/content/case-studies/*.md`

**A life sciences membership organisation** — post-acquisition customer intelligence
- Problem: Three acquisitions had left customer data fragmented across systems, with no way to score, segment, or act on it as one combined base.
- Approach: Built a post-acquisition customer intelligence pipeline - ICP scoring, churn detection, reactivation targeting, and cross-sell mapping - delivered through a six-tab Power BI dashboard, with full documentation handed over.
- Outcome: A single, actionable view of the combined customer base, backed by full documentation handover.
- Tags: ICP scoring, churn detection, post-acquisition, life sciences

**A major UK supply chain organisation** — CRM migration
- Problem: Legacy systems needed to migrate to a modern CRM, with the data cleansing that migration depended on.
- Approach: Helped with the CRM implementation - data migration and cleansing work moving legacy data into the new system.
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
Page title: "About - Hoda"
Meta description: "I'm Hoda - a full-stack data consultant who's spent four-plus years contracting across the UK."

- Name heading: **Hoda**
- Role line (copy V2 pass — location broadened from "across the UK and internationally" to "across the world"): "I do full-stack data consulting under the name Xheia - based remotely, working with clients across the world."
- Photo: real headshot (`src/assets/hoda-headshot.jpg`), sized big and deliberately the only photographic element on the site - it stands out precisely by breaking from the site's monochrome/pixel-art visual language, not by competing with it

Narrative (first person; copy V2 pass, 3 paragraphs — service-first, no biomedical
framing, no project-level detail — proof now lives exclusively on `/work`):

> Four-plus years contracting in the UK, across different industries. Same job every time: take data that's scattered and unreliable and turn it into something a team can actually run the business on.
>
> What keeps me doing this: I like the actual problem-solving - messy data, no clear starting point, figuring it out anyway.
>
> I'm now applying the same approach to AI agents and automation - same discipline, newer tools.

An earlier pass added a headline-result proof paragraph here (the post-acquisition
dashboard result, with a `/work` link), per a proof-of-work research doc that flagged
About as having zero concrete proof. The copy V2 pass removed it again, replacing it
with the personal-motivation line above — concrete proof now lives exclusively on
`/work`, per the standing "About is service-first, not a CV" decision.

Ends with the Contact CTA band (see above).

---

## Contact (`/contact`)

**File:** `src/pages/contact.astro`, form fields in `src/components/ContactForm.astro`
Page title: "Contact"

- Heading: "Start a conversation"
- Form fields: Name, Email, Company, Message
- Submit button: "Send"
- Mailto fallback: "Prefer email? Write to contact@xheia.co directly."

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
- [x] ~~"Track Record" label~~ → renamed to **Work** (nav, route, page title), per the proof-of-work research doc
- [ ] Personal LinkedIn URL → Footer
- [ ] GitHub URL → Footer
- [ ] Xheia company LinkedIn URL → Footer (add only once that page has real content)
- [x] ~~Headshot image~~ → real photo added to `/about`
- [x] ~~Real business contact email~~ → `contact@xheia.co` (Google Workspace on the `xheia.co` domain), live in `ContactForm.astro`
- [ ] Retail/Education substance — still no real detail; narrative and case studies both skip these sectors until there is
- [ ] Public-proof link (article/demo/repo) on `/work` — recommended by the research doc, blocked until something real exists to link
- [ ] Named/testimonial-backed case study — blocked until client permission or a testimonial exists

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
