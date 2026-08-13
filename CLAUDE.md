# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Repository state

This repo is the Xheia consulting website (`xheia-Site`), currently pre-code: it contains only brand documentation. No site code, package manager, build system, or test suite exists yet. Do not assume or fabricate build/lint/test commands until they are actually added to the repo — check for a `package.json` or equivalent before running anything.

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

A site structure plan (page map, nav, component breakdown, tech stack recommendation) has been drafted separately and is not yet checked into this repo. When implementation starts, confirm with the user whether that plan should be pulled in before scaffolding the site.

## Not yet configured (revisit once relevant)

- **Permissions:** once a build system exists, run `/permissions` to allowlist frequently-used safe commands (e.g. `npm run lint`, `git commit`) so approvals stop interrupting routine work.
- **Commands / Code style sections:** to be added once the tech stack and package manager are chosen.