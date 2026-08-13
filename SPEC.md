# Xheia Website — Implementation Spec

Source documents: `BRANDFINAL.md` (brand truth) and the structure plan at `/Users/hoda/.claude/plans/read-brandfinal-md-in-this-sparkling-starfish.md` (approved). This spec is the implementation-ready version of that plan — all open decisions from the interview are resolved below. Implement against this file in a fresh session; don't re-litigate decisions already made here.

## Stack

- **Framework:** Astro, static output (zero client JS by default; hydrate only the theme toggle, boot-sequence animation, and form as needed)
- **Hosting:** Netlify
- **Forms:** Netlify Forms (native — no third-party service)
- **Fonts:** IBM Plex Mono, IBM Plex Sans, and a pixel/bitmap display font (e.g. Press Start 2P)

## Pages & routes

| Route | Contents |
|---|---|
| `/` | Header, Hero, ProofStrip, PillarBlock ×3, EngagementStructure, AboutTeaser, ContactCTA band, Footer |
| `/work` | Header, intro line, grid of CaseStudyCard (full), Footer |
| `/about` | Header, full origin narrative, ContactCTA, Footer |
| `/contact` | Header, ContactForm, mailto fallback, Footer |

`/work/[slug]` detail pages are not built now — leave the route open for later; case study cards render as static summaries with no dead links until real write-ups exist.

## Nav

`Xheia (mark+wordmark)` — `Work` — `About` — `Contact` — theme toggle — one CTA button. No dropdowns, no secondary items.

**Single contact path:** every CTA button, site-wide, is the same component with the label **"Start a conversation"**, and every one of them points to `/contact`. No calendar link, no chat widget, no second form anywhere.

## Components

- **Header/Nav** — theme toggle + nav links + CTA button
- **ThemeToggle** — dark (default) / light; persists to `localStorage`; respects `prefers-color-scheme` on first load
- **PixelMark** — eye-sprite logo, two color states per theme (see Colors below)
- **Hero** — mark, tagline headline, one-line outcome-framed subhead, CTA. Hosts the CRT/boot-sequence bezel treatment and terminal-prompt flourish (blinking caret, `$ whoami`-style lines). **This is the only component allowed to use these motion/terminal effects.**
- **ProofStrip** — 2–3 condensed `CaseStudyCard`s on Home, links to `/work`
- **CaseStudyCard** — fields: client/sector (or anonymized descriptor), problem, approach, outcome, tags[]. Same component, condensed and full variants, used on both `/` and `/work`
- **PillarBlock** — renders the three pillars from `BRANDFINAL.md` §5 (Truth over theater / Clarity is engineered, not promised / Built to survive scrutiny), copy condensed from that section directly — do not invent new pillar language
- **EngagementStructure / EngagementPhase** — three phases, in order: **Discovery → Build → Handoff**
- **AboutTeaser** — 2–3 sentence excerpt of the origin story + link to `/about`
- **ContactForm** — fields: name, email, company, message. Submits via Netlify Forms. Delivers to `hoda.97@live.com` **(temporary — replace with the business address before public launch)**. Plain-text `mailto:hoda.97@live.com` fallback rendered near the form, not styled as a competing CTA
- **CTAButton** — single shared visual treatment, label always "Start a conversation", always links to `/contact`
- **Footer** — wordmark, social links, terminal flavor line, status dot (per §4 social banner reference)

## Design tokens

Enforce theme colors and type tiers as shared tokens, not per-component choices:

**Colors**
| Token | Hex | Notes |
|---|---|---|
| Ink | `#0D0D10` | Dark bg / light-mode text |
| Paper | `#F2F0EA` | Light bg / dark-mode text |
| Aperture blue | `#3E6BF0` | Primary accent, both modes |
| Signal green | `#3EF07C` | **Dark mode only** — never render in light mode |
| Flare coral | `#FF8A5C` | Secondary accent, sparing use, never simultaneous with green as primary |
| Mist | `#9A9A93` | Secondary text, captions |

Dark mode: Ink bg, Paper text, Signal green active (mark/status), Aperture blue + Coral available.
Light mode: Paper bg, Ink text, Aperture blue for links/CTAs, Coral for occasional emphasis, **no green**.

**Type tiers**
| Tier | Font | Scope |
|---|---|---|
| Display | Pixel/bitmap (Press Start 2P) | Hero headline, boot-sequence/social graphics only — never body text |
| Wordmark/UI/code | IBM Plex Mono | Logo, buttons, nav labels, terminal moments |
| Body | IBM Plex Sans | All paragraph copy — case studies, about, form labels |

## Out of scope for this build

- Real case study content (structure/placeholders only — see `CaseStudyCard`)
- `/work/[slug]` detail pages
- Blog/insights section
- Any second contact mechanism (calendar embed, chat widget)

## Verification (run before calling any page/section done)

1. Screenshot the page in both dark and light mode; compare against the Colors table above — confirm no Signal green in light mode, Ink/Paper swap correctly, CRT/terminal effects appear only in Hero
2. Check mobile width: nav, hero offer, and the single CTA all stay visible/clear above the fold
3. Click every CTA on the page — confirm all resolve to `/contact`
4. Once `npm run build`/lint exist, run them and fix failures before considering the task done
5. Before marking a non-trivial page/section done, have a fresh-context subagent diff the implementation against this spec and flag correctness/requirement gaps only — fix and re-review

## Process notes for the implementing session

- Re-enter plan mode before scaffolding the Astro project structure (this spec defines *what*, not the file-by-file *how*)
- Generate repetitive pieces (page stubs, card/phase component boilerplate) via a script rather than hand-writing each file
- Commit after each meaningful chunk (a page, a component, a section), directly to `main`, with descriptive messages
- Once Astro/npm exists, fill in `CLAUDE.md`'s empty Commands/Code style sections and run `/permissions` to allowlist `npm run dev/build/lint`
