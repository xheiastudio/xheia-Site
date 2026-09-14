// Small, independent character-by-character text reveal — the runtime counterpart
// to Hero.astro's build-time CSS typing technique (a width:0->auto steps()
// animation, computed from known text at build time). This one is JS-driven so it
// can also handle text that's only known at runtime (a fetch response, an
// image-load trigger) — Hero's own .caret/.bezel/.scanlines stay exclusive to
// Hero.astro per CLAUDE.md; this is a separate mechanism, not a reuse of it.
//
// prefers-reduced-motion is checked inside these functions so every consumer gets
// it for free, rather than each caller re-implementing the check.

export interface TypeOptions {
  /** characters per second */
  cps?: number;
  /** append a blinking .type-cursor while typing */
  cursor?: boolean;
  onDone?: () => void;
}

function reducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function typeText(el: HTMLElement, text: string, opts: TypeOptions = {}): void {
  const { cps = 45, cursor = true, onDone } = opts;

  if (reducedMotion()) {
    el.textContent = text;
    onDone?.();
    return;
  }

  el.textContent = '';
  let cursorEl: HTMLSpanElement | null = null;
  if (cursor) {
    cursorEl = document.createElement('span');
    cursorEl.className = 'type-cursor';
    cursorEl.setAttribute('aria-hidden', 'true');
    el.insertAdjacentElement('afterend', cursorEl);
  }

  const interval = 1000 / cps;
  let i = 0;
  const tick = () => {
    i += 1;
    el.textContent = text.slice(0, i);
    if (i < text.length) {
      setTimeout(tick, interval);
    } else {
      cursorEl?.remove();
      onDone?.();
    }
  };
  setTimeout(tick, interval);
}

/** Types several lines one after another, each starting a beat after the last finishes. */
export function typeSequence(
  items: Array<{ el: HTMLElement; text: string }>,
  opts: TypeOptions & { gap?: number } = {},
): void {
  const { gap = 250, ...rest } = opts;

  if (reducedMotion()) {
    items.forEach(({ el, text }) => {
      el.textContent = text;
    });
    rest.onDone?.();
    return;
  }

  const runNext = (index: number) => {
    if (index >= items.length) return;
    const { el, text } = items[index];
    typeText(el, text, {
      ...rest,
      onDone: () => {
        if (index === items.length - 1) rest.onDone?.();
        setTimeout(() => runNext(index + 1), gap);
      },
    });
  };
  runNext(0);
}
