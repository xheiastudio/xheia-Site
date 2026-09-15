# Xheia — Brand Handoff

## 1. Positioning

**One-line value prop:** I turn fragmented data into systems you can actually trust.

**What I do:** Full-stack data consultancy — cleansing, migration, warehousing, BI — with agentic AI systems as the newest expression of that work, not a separate offering. Data quality is the foundation; AI capability is downstream of it, never the headline.

**Positioning tier:** Premium / boutique. Solo-expert-led, not agency-styled. Direct, defensible claims over ones that imply team scale that doesn't exist.

**Location:** Remote-first, deliberately not tied to one place — works with clients across the world. Not agency-styled around a single office/market.

**Target personas:**
- Burned buyers — vendor-skeptical directors who've been oversold before
- Transformation leads — operating in M&A / consolidation contexts
- AI-curious technical leaders — CTOs, Heads of Data, evaluating what's real
- Internal champions — inside regulated enterprises navigating internal AI skepticism

**Anti-persona:** SMB / ecommerce buyers looking for accessible, high-volume, beginner-level education. Explicitly out of scope.

**Origin story (public narrative — revised, real):** Four-plus years contracting across the UK — moving between industries and problems rather than staying inside one company or one specialism. Delivered data consolidation and migration, predictive customer intelligence, and financial modelling work across life sciences, public sector, and fitness. Now extending into agentic AI systems, most recently an agentic customer profiling build. **The biomedical-science framing previously used here has been dropped entirely** — confirmed by the operator as not fitting the story ("the biomed story just doesn't fit at all"); the real hook is the range of contracting work itself, not a science-to-data pivot narrative. Retail and Education were named as sectors in the earlier version of this story but are dropped here — no real engagement detail has been supplied for either, and nothing should be asserted about them until there is.

**Personal identity vs. company brand:** Xheia stays the standalone brand for Home, Header, and Hero. The operator's name and story surface where a prospect doing due diligence would actually look: the `/about` page (voiced in first person, with a headshot), the site footer (a one-line credit), and page meta descriptions (search/discoverability, not visible copy). As of the structural-redesign pass, the identity hook lives *inside* Hero's boot sequence itself (an `operator --info` line) rather than as a separate standalone element on Home — one less "box under the box," same information; as of the real-content pass, that line reflects the revised origin story above, not the dropped biomedical framing. All copy is voiced in first person ("I," not "we") since this is a solo consultancy, not a team — see the tagline and "What I do" above. This resolves a real trust/discoverability gap for a solo consultant growing an international client base, without turning the home page into a full personal-brand pitch — the origin story stays a "small space" on `/about`, per the standing rule that it shouldn't be the whole brand.

**Name (confirmed, real-content pass):** **Hoda** — first name only, no surname, by explicit choice. No pronouns used anywhere on the site, also by explicit choice. Every `[Your Name]` placeholder across the site (About, Footer, BaseLayout meta, Hero) resolves to this.

## 2. Audience & Tone

**Tone (non-negotiable):** Direct, Sharp, Credible.
**Tone (modifiers):** Unbothered, Technical-but-human.

**Values:**
- Honesty and proof-of-work over polish — never oversell AI readiness
- Evidence-based claims, but not afraid of bold, current, attention-grabbing language where it genuinely fits
- Outcome-first framing — lead with what the client gets, not the "AI" label, except where "AI" is the clearest word for the thing

## 3. Naming

**Name:** Xheia
**Pronunciation:** "Zay-ah"
**Origin:** Derived from Aletheia (Greek: truth, disclosure, unconcealment) and Theia (Titaness of sight and perception). The X is a stylized stand-in for the "Z" sound, in the tradition of names like Xero.
**Standalone identity:** Xheia alone — no descriptor suffix (e.g. no "Intelligence") riding alongside the name, keeping AI framing out of the name itself.

**Availability status (checked 13 Aug 2026):**
- USPTO: no exact match — clear
- EUIPO: no exact match — clear
- UK Companies House: no exact match — clear
- UK IPO trademark (similar-match search): no exact match. Two phonetically close registered marks in tech classes: HEXIA (UK00004201247, classes 9/44) and XHENA (WO0000001899315, class 9). Not a blocker, but get a solicitor's opinion before filing a UK trademark application.
- Domain: xheia.com is registered/parked, listed on the aftermarket at ~$7,695 - stayed unavailable. **Resolved:** xheia.co registered via Namecheap and is the live production domain (see astro.config.mjs's `site`). A .com acquisition remains open as a future option, not a blocker to launch.

**Outstanding before company registration:**
- Solicitor review of HEXIA/XHENA proximity before filing a UK trademark
- Companies House registration under Xheia

## 4. Visual Identity

### Mark
Pixel-art eye sprite — a blocky, retro-console-style eye outline with a small five-block pupil at its center. The pupil was originally an X shape but was changed to a solid dot after testing, since the X read as a hazard/warning symbol rather than an eye.

- **Dark mode (primary):** outline in Signal green (#3EF07C), pupil in Aperture blue (#3E6BF0), on Ink (#0D0D10)
- **Light mode:** outline switches to Ink (#0D0D10), pupil stays Aperture blue (#3E6BF0), on Paper (#F2F0EA). Signal green loses contrast on light backgrounds and is not used there.
- **Favicon:** the mark holds up at small sizes but is not crisp at true 16px — a simplified low-detail variant is recommended before final favicon export.
- **Console/CRT frame — retired on the live site (stripped-terminal pass):** this section originally called for a bezel-and-screen treatment (scanlines, power LED, console buttons) wrapping Home's boot sequence. Direct feedback was that the skeuomorphic device chrome (window-buttons bar, LED, bezel border/inset shadow, scanline texture) read as busy rather than premium, and didn't resemble Apple-caliber restraint. It's been removed from Hero.astro entirely, authorized as an explicit override of this doc rather than the other way around. What remains is the actual identity worth keeping: mono type, `$`/`>` prompt glyphs, real character-by-character typing, the caret — a terminal in the sense of "typed text on a prompt," not a CRT-monitor prop on the page. Whitespace now does the framing job the border used to do. Corner rivets (see the pixel-system bullet below) are retired along with it — `PixelRivets.astro` had no other consumer and has been deleted.
- **Site-wide pixel system (added in the "big visual pass"; the chrome-buttons bar and corner rivets it introduced were later retired — see the bullet above):** the literal boot-sequence device — typed terminal lines — stays a Hero-exclusive narrative moment; duplicating it elsewhere would be redundant, not purposeful. The pixel-art visual language around it still extends across the whole site: a sitewide custom pixel cursor, small pixel-art icons, and a CRT-flicker page-transition effect. Every such addition still respects the rest of this section (Signal green dark-mode-only, no rounded corners) and always respects `prefers-reduced-motion`.
- **Pixel cursor is a real element, not a CSS swap (structural-redesign pass):** the original implementation used a CSS `cursor:` property — technically present, but too subtle to register as a feature. It's now a JS-tracked, visibly rendered pixel-art element (`PixelCursor`) that follows the mouse and changes color/scale over interactive elements. Fine-pointer devices only; the native cursor is only ever hidden via a JS-added class, so a JS failure never leaves a visitor with no cursor at all.
- **Distinct interactions per section, not one pattern repeated (structural-redesign pass):** applying the same bordered-box-plus-rivets template to every section read as "boxes under boxes," not design. Sections that share a conceptual role (the relocated "what I do / principles / how I work" trio, now on `/approach`) each get their own interaction instead: a boot-menu select-list, a diagnostic self-check with a verify animation, and a level-path of connected nodes. When adding a new content section, default to inventing a treatment that fits *its own meaning*, not the nearest existing template. **Update (Home-consistency pass):** implementation had since added its own outer "one frame per section" convention on top of this — every /approach section wrapped in a `border` + tinted `background`, a decision this doc never actually called for. Direct feedback that this contradicted Home's own established identity (zero borders anywhere; whitespace does the framing) led to removing it sitewide: sections now separate via generous margin and their own section-head, no box. The "distinct interaction per section" rule above is unaffected — only the box that used to wrap each interaction is gone. **Update (full-redesign pass):** Capabilities and PillarBlock's per-item bodies are click-to-expand again (native `<details>`/`<summary>`, closed by default) — an intervening pass had made every item's body auto-reveal on scroll, which read as "loads of writing" once the page had this many items. Reverted per direct feedback and per the apple-design skill's own `layout.md`: "Take advantage of progressive disclosure to help people discover content that's currently hidden." The level-path (EngagementStructure) and stack manifest (Tools) are unaffected — neither has paragraph-length body text to hide.
- **Single terminal frame, tagline as terminal output (single-terminal-frame pass):** Hero previously nested a second bordered/tinted box (the boot log) inside the outer CRT bezel's own window chrome — two visually nested frames read as "a terminal within a terminal." The boot log now sits directly on the bezel's screen, one frame only. Separately, the tagline headline used to switch to the pixel display font in its own section below a divider — a different visual register from the terminal text above it, and it didn't read as part of the same session. It's now the terminal's own final, biggest line of output: same IBM Plex Mono and `>`/`//` prompt conventions as every other line, just sized up for emphasis, with no invented code syntax (no `console.log(...)`, no fake `return` statement) — grounded in the terminal's existing visual language rather than adding a new one. This is why the Type System table above now excludes Home's Hero headline from the Display tier's scope. The boot sequence plays once, ending on the tagline; the log and tagline then stay on screen together (an intermediate version made the log loop forever with the tagline permanently static — reverted after live use showed that read as disconnected rather than as one session).
- **Light mode's status accent is Coral, not a blue fallback (home-finalization pass):** `tokens.css` was letting `--accent-status` fall back to Aperture blue in light mode, since Signal green is dark-mode-only — but `--accent-primary` (links, CTAs) is already Aperture blue in both modes, so status indicators (LED, progress bars, "OK" badges, terminal caret, footer status dot) were rendering in the exact same color as primary links/CTAs, collapsing two distinct roles into one and reading as flat "just white and blue." This section already specified "Coral for occasional secondary emphasis" in light mode — the fix makes `--accent-status` actually use it, correcting an implementation gap rather than deciding anything new. `PixelMark`'s idle blink (added in the big visual pass) was also tuned more noticeable — a 6s cycle with a ~2%-of-cycle closed-eye window read as effectively static; now 3s with a wider window — and the mark itself was sized up everywhere it appears (Header, Footer).

### Wordmark
Lowercase, set in IBM Plex Mono, paired with terminal-style flourishes (a blinking caret, `$ whoami`-style prompt lines) in motion and hero contexts.

### Type system
Three tiers, each with a distinct job:

| Tier | Typeface | Use |
|---|---|---|
| Display | Pixel/bitmap font (e.g. Press Start 2P) | Boot-sequence screens elsewhere, social graphics, and (as of the site-wide pixel pass) section headings and numerals throughout the site — always short phrases/labels, never for body text. **No longer used for Home's Hero headline** (single-terminal-frame pass, below) |
| Wordmark / UI / code | IBM Plex Mono | Logo, buttons, nav labels, terminal moments, and (as of the single-terminal-frame pass) Home's hero headline/subhead, styled as the terminal's own output rather than a separate display-font headline |
| Body | IBM Plex Sans | Paragraph copy — proposals, case studies, site content |

### Color palette

| Name | Hex | Role |
|---|---|---|
| Ink | #0D0D10 | Dark background / light-mode text |
| Paper | #F2F0EA | Light background / dark-mode text |
| Aperture blue | #3E6BF0 | Primary accent — works in both modes |
| Signal green | #3EF07C | Dark-mode-only accent — mark, glow states, terminal moments |
| Flare coral | #FF8A5C | Secondary accent — used sparingly, never simultaneously with green as primary |
| Mist | #9A9A93 | Neutral / secondary text, captions |

**Light mode:** Paper background, Ink text, Aperture blue for links and CTAs, Coral for occasional secondary emphasis. Green is not used.
**Dark mode:** Ink background, Paper text, Signal green comes alive (mark, success/status states), Aperture blue and Coral both remain available as accents.

### Social banner reference
Mark on the left, wordmark and tagline carrying the copy, faint scanline texture, small terminal flavor line and status dot — built at 3:1 ratio for X/LinkedIn header use.

## 5. Messaging Pillars

**Truth over theatre**
Every claim on this site is backed by delivered work, described plainly. No hype, no vendor theatre. This is the pillar that speaks directly to burned buyers.

**Clarity is engineered, not promised**
Full-lifecycle discipline — ingestion, cleansing, warehousing, BI — is what makes anything built on top of the data actually trustworthy. Clean systems are built, not claimed.

**Built to survive scrutiny**
For technical leaders and regulated enterprises who will actually check the work: security-conscious, evidence-based, documented — not a pitch that only holds up in the room it was delivered in.

## Tagline
"I turn fragmented data into systems you can actually trust." — this is the primary
tagline, used verbatim on Home's Hero. The shared `ContactCTA` band (on `/approach` and
`/about`) carries a distinct closing line as of the copy pass — "I turn fragmented data
into systems that hold up after I've moved on." — a deliberate variant, not a
contradiction or a typo.
