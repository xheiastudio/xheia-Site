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
| `/` | Header, Hero, IdentityHook, Capabilities, PillarBlock ×3, EngagementStructure, ContactCTA band, Footer |
| `/track-record` | Header, intro line, then either an in-progress message (no case studies yet) or an anonymization disclaimer + grid of CaseStudyCard (once real entries exist), Footer |
| `/about` | Header, first-person origin narrative + headshot placeholder, ContactCTA, Footer |
| `/contact` | Header, ContactForm, mailto fallback, Footer |

`/track-record/[slug]` detail pages are not built now — leave the route open for later; case study cards render as static summaries with no dead links until real write-ups exist.

**Revision note (round 1 feedback):** the home page originally also carried a `ProofStrip` (condensed case-study cards) and an `AboutTeaser` section. Both were cut after seeing the live site — the case-study placeholders read as literal CV bullet points on a landing page, and a dedicated origin-story section overweighted the personal narrative for what's meant to read as a reputable company. `Capabilities` (what the work is, not specific past wins) replaces `ProofStrip` on home; the origin story now lives only on `/about`. The route was also renamed `/work` → `/track-record` to match the nav label.

**Revision note (identity & discoverability pass):** the site had zero personal name anywhere, which is a real trust/discoverability gap for a solo consultant growing an international client base (see `BRANDFINAL.md`'s "Personal identity vs. company brand" addendum). Fix stays scoped to where a prospect doing due diligence would actually look — Home/Header/Hero were unchanged at the time. `/about` now reads in first person with a headshot slot; the Footer carries a one-line personal credit plus a personal-LinkedIn link; page meta descriptions name the operator for search (meta-only, not visible page copy). Name and LinkedIn URLs are placeholders (`[Your Name]`, `href="#"`) until supplied — same convention as `ContactForm`'s temporary delivery address.

**Revision note (truth-over-theater pass):** all four Track Record case studies were fabricated or unverified — three invented outright, and the fourth (life sciences) written as generic placeholder copy never sourced from the user's real work. All four were deleted; `/track-record` now shows an honest in-progress message when the collection is empty, and will show an anonymization disclaimer ("client details are withheld by agreement...") above the grid once real, user-supplied entries exist — no fabricated content goes back in. `scripts/generate-case-studies.mjs` (a bulk fictional-placeholder generator) was deleted for the same reason; future entries are hand-authored from real details. Separately, all site copy (including `BRANDFINAL.md`'s tagline and "What I do") switched from "we" to "I" — this is a solo consultancy, and the copy shouldn't perform team scale. `IdentityHook` (a one-line "[name] — biomedical science background..." strip linking to `/about`) was added directly under Hero on Home so the homepage doesn't read anonymous, without turning Home into a full personal profile — see `BRANDFINAL.md`'s updated "Personal identity vs. company brand" addendum.

## Nav

`Xheia (mark+wordmark)` — `Track Record` — `About` — `Contact` — theme toggle — one CTA button. No dropdowns, no secondary items.

**Single contact path:** every CTA button, site-wide, is the same component with the label **"Start a conversation"**, and every one of them points to `/contact`. No calendar link, no chat widget, no second form anywhere.

## Components

- **Header/Nav** — theme toggle + nav links + CTA button
- **ThemeToggle** — dark (default) / light; persists to `localStorage`; respects `prefers-color-scheme` on first load
- **PixelMark** — eye-sprite logo, two color states per theme (see Colors below)
- **Hero** — mark, tagline headline, one-line outcome-framed subhead, CTA. Hosts the CRT/boot-sequence bezel treatment (thicker retro chrome, pixel rivet corner marks), a real CSS typewriter reveal for the terminal-prompt flourish (blinking caret, `$ whoami`-style lines), and a pixel-art retro mouse cursor on hover. **This is the only component allowed to use these motion/terminal effects.**
- **IdentityHook** — one line directly under Hero on Home: `[Your Name]` + the "biomedical science background, not the usual data path" hook, linking to `/about`. Not a profile — just enough that Home doesn't read anonymous. Added in the truth-over-theater pass — see revision note above.
- **Capabilities** — three capability tiles (Cleansing & migration / Warehousing & BI / Agentic AI systems) on Home, grounded in `BRANDFINAL.md` §1 "What I do" — links to `/track-record`. Replaces the original `ProofStrip` (cut after round-1 feedback — see revision note above).
- **CaseStudyCard** — fields: client/sector (or anonymized descriptor), problem, approach, outcome, tags[]. Single variant (always full detail) — used only on `/track-record`. The collection starts empty (all fabricated placeholders removed — see truth-over-theater revision note); entries are added by hand, one at a time, only from real details the user supplies.
- **PillarBlock** — renders the three pillars from `BRANDFINAL.md` §5 (Truth over theater / Clarity is engineered, not promised / Built to survive scrutiny), copy condensed from that section directly — do not invent new pillar language. Carries a small mono "eyebrow" label and a bordered panel treatment so the section reads as an intentional zone.
- **EngagementStructure / EngagementPhase** — three phases, in order: **Discovery → Build → Handoff**. Same eyebrow-label + panel treatment as PillarBlock.
- **ContactForm** — fields: name, email, company, message. Submits via Netlify Forms. Delivers to `hoda.97@live.com` **(temporary — replace with the business address before public launch)**. Plain-text `mailto:hoda.97@live.com` fallback rendered near the form, not styled as a competing CTA
- **CTAButton** — single shared visual treatment, label always "Start a conversation", always links to `/contact`
- **Footer** — wordmark, personal credit line ("Built and run by `[Your Name]`"), social links (GitHub, personal LinkedIn, and a placeholder Xheia-company-LinkedIn slot not linked live yet), terminal flavor line, status dot (per §4 social banner reference)

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

- Real case study content — the collection is currently empty (see `CaseStudyCard` and the truth-over-theater revision note); entries get added by hand, from real details only, as they're supplied
- `/track-record/[slug]` detail pages
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
