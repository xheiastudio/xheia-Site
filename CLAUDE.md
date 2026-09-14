# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Repository state

This repo is the Xheia consulting website (`xheia-Site`): an Astro static site (`npm create astro@latest`, TypeScript strict, static output) deployed on Netlify. `SPEC.md` is the implementation-ready spec — pages, nav, components, and design tokens are all resolved there; read it alongside `BRANDFINAL.md` before touching site code.

## Commands

| Command | Action |
|---|---|
| `npm run dev` | Local dev server |
| `npm run build` | Production build to `dist/` (also what Netlify runs) |
| `npm run preview` | Serve the built `dist/` locally |
| `npm run check` | Astro + TypeScript type-checking |
| `npm run lint` | Alias for `npm run check` — no separate ESLint setup; revisit only if the codebase outgrows this |

## Code style

- Design tokens live in `src/styles/tokens.css` as CSS custom properties. Components MUST reference semantic tokens (`--bg`, `--text`, `--accent-primary`, `--accent-status`, `--mark-outline`, etc.), never the color primitives (`--color-ink`, `--color-signal`, ...) directly — this is what makes "no Signal green in light mode" structural rather than a per-component judgment call. `--color-signal` should only ever appear inside `tokens.css` itself.
- Fonts are self-hosted via `@fontsource` (IBM Plex Mono, IBM Plex Sans, Press Start 2P) — no Google Fonts CDN link, ever.
- No UI framework (`@astrojs/react`/preact/svelte) is installed and none should be added without discussion — the three interactive needs (theme toggle, boot-sequence, form) are handled with plain `.astro` components and vanilla `<script>` tags, not islands.
- The typed boot sequence and blinking-caret terminal prompt are Hero-exclusive (`src/components/Hero.astro`) — don't reuse `.typed`/`caret-blink` elsewhere. The literal CRT-device chrome (bezel border, scanline overlay, window-buttons bar) was removed from Hero itself in the stripped-terminal pass (see BRANDFINAL.md §4) — `.bezel`/`.screen` are now plain unbordered containers, not a skeuomorphic device frame.
- `CTAButton` is the only CTA component, always labeled "Start a conversation", always linking to `/contact` — don't create a second CTA style or destination.
- Case study data lives in the `caseStudies` content collection (`src/content.config.ts`, Astro's Content Layer API — config path is `src/content.config.ts`, not the older `src/content/config.ts`), not hardcoded arrays.

## Apple-sleekness pattern reference (established on Home, replicate elsewhere)

Home (`Hero.astro`, `Header.astro`, `Footer.astro`) went through a full "Apple-level sleekness, pixel-DNA kept" pass. These are the reusable rules — apply them deliberately when giving another page the same treatment, don't re-derive from scratch:

- **Two-tier motion, by design:** data/grid sections (Capabilities, PillarBlock, EngagementStructure, Tools) keep the sitewide default `[data-reveal]` blocky `steps(6, end)` reveal — the "pixel-materialize" feel. Personal/hero-moment sections (Home, About, Contact) and all interactive controls (buttons, toggles, links) use `cubic-bezier(0.16, 1, 0.3, 1)` — the "Apple-smooth" feel. Pick per content type, don't apply one everywhere.
- **Ambient glow recipe:** two `radial-gradient`s on an `inset: 0` container (never a smaller fixed-size box — the edge shows as a visible seam against light backgrounds). Dark mode: moderate two-accent-blob opacity. Light mode needs a **materially bolder** primary blob than the dark-mode value, verified by sampling actual rendered pixels (`getImageData`) — the same percentage shift reads as an obvious glow near black but is nearly imperceptible near white (Weber-Fechner). Never eyeball a screenshot as "good enough." Drop `--accent-status`/Coral from any light-mode glow — it saturates too visibly against Paper; use `--text` at low opacity for a second "shadow" point of depth instead.
- **Monumental-mark-watermark recipe:** when a hero-like section has a large empty void and no real additional content to fill it, render `PixelMark` at a huge scale (`~30-40rem`) at very low opacity, bleeding off a corner via the container's `overflow: hidden`, in a different screen zone than any existing glow. Opacity is per-theme (verify, don't guess — Ink at low alpha reads very differently from Signal green at the same alpha). This fills a void without inventing content BRANDFINAL doesn't support.
- **`PageIntroAtmosphere.astro`** is the canonical non-Hero implementation of the two recipes above, sized for a page-intro zone rather than a full hero (scaled-down glow ellipses, a proportionally smaller mark, no scroll parallax). Wrap a page's intro heading in it rather than re-deriving this CSS per page — `/approach` is the first consumer, `/work` is the next.
- **Progressive disclosure for any section with several title+paragraph items:** a page that shows every item's full body text at once, all the time, reads as a document rather than a design — even with atmosphere/no-boxes/type-hierarchy applied. Capabilities and PillarBlock (`/approach`) are click-to-expand (`<details>`/`<summary>`, closed by default; smooth-height enhancement in `src/scripts/disclosure.ts`, gated behind `prefers-reduced-motion`) for exactly this reason. Use it whenever a section has more than 2-3 items with real body copy; a short list of names/labels (Tools) or an already-compact graphic layout (EngagementStructure's level-path) doesn't need it.
- **No bordered/tinted-background section containers, anywhere:** Home has zero borders (`.bezel`/`.screen` are plain unbordered containers by design — "whitespace now does the framing job the border used to do"). Content sections on other pages follow the same rule: separate sections with generous margin (`--space-20`) and each section's own section-head (number + eyebrow), never a `border` + `color-mix(...) background` box. An earlier "one frame per section" standard (border+tint wrapping each of /approach's content sections) has been superseded by this — removed sitewide in the pass that added this line.
- **Sticky/blurred header, whitespace-not-border footer:** already global components (`Header.astro`, `Footer.astro`) — nothing to redo per-page.
- **Focus rings:** any text link relying on color/underline-only affordance gets `outline: 2px solid var(--accent-primary); outline-offset: 2-3px` on `:focus-visible`.
- **Reduced-transparency + reduced-motion:** ship both fallbacks in the same commit as any new `backdrop-filter` or `animation` — never as a follow-up.
- **Pixel-DNA floor, never crossed:** `--radius: 0`, `PixelMark`, `PixelCursor`, `.pixel-notch`, the boot-flicker page-transition, and Hero's typed-terminal `.typed`/caret mechanics are the identity — new polish wraps around them, it never replaces them.

## Brand source of truth

See @BRANDFINAL.md for all brand-facing decisions — copy, color, typography, tone, naming. Read it before any brand decision; don't restate its content here. Key constraints that are easy to get wrong:

- **Tone:** Direct, Sharp, Credible (non-negotiable), with Unbothered and Technical-but-human as modifiers. Evidence over polish — no agency-styled or oversold AI-hype language.
- **Positioning:** premium/boutique, solo-expert-led. YOU MUST NOT imply team scale that doesn't exist in any copy or claim. AI is downstream of data-quality work, not the headline.
- **Colors are mode-specific, not interchangeable:** Signal green (`#3EF07C`) is dark-mode only, never light mode. Aperture blue (`#3E6BF0`) works in both. Ink (`#0D0D10`) and Paper (`#F2F0EA`) swap roles between dark/light. IMPORTANT: getting this wrong breaks the visual system — always check mode before applying color.
- **Type system has three restricted tiers:** pixel/bitmap display font (hero/boot-sequence only, never body text), IBM Plex Mono (wordmark, UI, buttons, terminal moments), IBM Plex Sans (all body copy).
- **CRT/console bezel treatment** is for hero/motion contexts only — not the everyday logo lockup, not applied site-wide.
- **Anti-persona:** SMB/ecommerce and beginner-level buyers are out of scope — target vendor-skeptical technical/enterprise buyers instead.

## Workflow

- For larger features (a full page, a new section, the contact flow): interview me first for technical, UX, and edge-case decisions, then write a spec to SPEC.md before implementing. Implement in a fresh session against that spec rather than continuing the same conversation. Skip this for small, obvious changes.
- Enter plan mode (Shift+Tab) before any multi-file change or new feature. Skip planning only for trivial, one-line fixes.
- Once a build/lint/test system exists in this repo: run it after every code change and fix failures before considering a task done. Show the actual output (test results, build status) rather than asserting completion.
- After any UI/visual change, take a screenshot and compare it against BRANDFINAL.md's color and type system before calling the task complete.
- Prefer scripting over manual, turn-by-turn edits: for any operation touching multiple files (bulk renames, batch content generation, repetitive edits), write and run a script rather than editing files one at a time in conversation. This keeps token usage down since a script processes files directly instead of pulling their contents into context.
- Use whatever language fits the task — Bash for file/shell operations, Python or Node for anything more complex (data transforms, generation scripts). This project runs on macOS, which already has zsh/bash built in — no need to install anything for basic scripting. If a task needs Python and it's not already installed, check first (`python3 --version`) before installing anything.
- Use CLI tools directly where available (e.g. `gh` for GitHub operations) instead of multi-step manual instructions.
- Commit after each meaningful chunk of work (a page, a component, a section) — not one large commit at the end.
- Never invent brand colors, copy, or positioning claims not grounded in BRANDFINAL.md — ask rather than guess.

## Verification loop

- Prompt-level (available now): after any change, run build/lint/tests if they exist, or take a screenshot for UI changes and compare against BRANDFINAL.md. Iterate until it passes — don't assert completion without showing the actual check output.
- Adversarial review: before marking any non-trivial task done, use a subagent to review the diff against the relevant plan or SPEC.md in a fresh context. Ask it to report only gaps affecting correctness or stated requirements — not style preferences. Fix flagged gaps and re-review.
- Stop hook (once a build/lint/test command exists): set up a hook that runs the check as a script and blocks the turn from ending until it passes, rather than relying on prompt-level instruction alone. Revisit this once real tooling is in place.

## Repo etiquette

- Solo-owned repo — commit directly to `main`. No PR process needed unless a collaborator joins later.
- Write descriptive commit messages (what changed and why) — not "update" or "fix".

## Planning artifacts

The site structure plan referenced here has been superseded: it was folded into `SPEC.md`, which is now checked into the repo and is the implementation-ready source of truth for pages, nav, components, and tokens.

## Not yet configured (revisit once relevant)

- **Stop hook:** the Verification loop section above calls for a hook that runs `npm run check`/`npm run build` and blocks the turn from ending until it passes. Now that real tooling exists, this is worth setting up — hasn't been done yet.
- **Real case study content, `/work/[slug]` detail pages, business contact address:** all explicitly out of scope for the initial build (see `SPEC.md`) and still open. The content collection schema in `src/content.config.ts` is ready for `/work/[slug]` to be added later without a data-model change.