// Smooth-open enhancement for <details> elements (Capabilities, PillarBlock) - the
// native toggle already gives real keyboard/screen-reader semantics for free (a
// real tab stop, Enter/Space activation, exposed expanded/collapsed state); this
// only adds a height transition on top of that, and only when opening. Gated
// entirely behind prefers-reduced-motion: the listener is never attached at all
// when set, leaving native (instant) show/hide untouched. Closing stays instant
// too, deliberately - animating it means intercepting the native toggle before it
// happens, real added complexity for a lesser payoff ("let people cancel motion...
// don't make people wait," motion.md).
export function initDisclosure(detailsSelector: string, contentSelector: string): void {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  document.querySelectorAll<HTMLDetailsElement>(detailsSelector).forEach((details) => {
    const content = details.querySelector<HTMLElement>(contentSelector);
    if (!content) return;

    details.addEventListener('toggle', () => {
      if (!details.open) return;

      content.style.height = '0px';
      content.style.overflow = 'hidden';
      requestAnimationFrame(() => {
        content.style.transition = 'height 0.35s cubic-bezier(0.16, 1, 0.3, 1)';
        content.style.height = `${content.scrollHeight}px`;
      });

      content.addEventListener(
        'transitionend',
        () => {
          content.style.height = '';
          content.style.overflow = '';
          content.style.transition = '';
        },
        { once: true },
      );
    });
  });
}
