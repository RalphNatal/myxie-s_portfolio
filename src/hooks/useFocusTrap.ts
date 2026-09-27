import { useEffect, useRef } from "react";

const FOCUSABLE = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled]):not([type='hidden'])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
].join(",");

/**
 * Keeps keyboard focus inside the returned element while `active`, closes on Escape,
 * and returns focus to whatever was focused before it opened.
 * Put `data-autofocus` on the element that should receive focus first.
 */
export function useFocusTrap<T extends HTMLElement>(active: boolean, onEscape: () => void) {
  const containerRef = useRef<T>(null);
  const onEscapeRef = useRef(onEscape);

  useEffect(() => {
    onEscapeRef.current = onEscape;
  }, [onEscape]);

  useEffect(() => {
    const container = containerRef.current;
    if (!active || !container) return;

    const previouslyFocused =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const getFocusable = () => Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE));

    const initial = container.querySelector<HTMLElement>("[data-autofocus]") ?? getFocusable()[0];
    (initial ?? container).focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onEscapeRef.current();
        return;
      }
      if (event.key !== "Tab" || !container) return;

      const focusable = getFocusable();
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) {
        event.preventDefault();
        return;
      }

      const current = document.activeElement;
      const focusIsOutside = !container.contains(current);
      if (event.shiftKey && (current === first || focusIsOutside)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (current === last || focusIsOutside)) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      // preventScroll avoids jumping back up the page when a link inside navigated elsewhere.
      previouslyFocused?.focus({ preventScroll: true });
    };
  }, [active]);

  return containerRef;
}
