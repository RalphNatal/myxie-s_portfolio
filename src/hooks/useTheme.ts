import { useCallback, useSyncExternalStore } from "react";

export type Theme = "light" | "dark";

// Must match the key read by the inline theme script in index.html.
const STORAGE_KEY = "theme";
const DARK_QUERY = "(prefers-color-scheme: dark)";

const listeners = new Set<() => void>();
let stopWatchingSystem: (() => void) | null = null;

function readStoredTheme(): Theme | null {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "light" || value === "dark" ? value : null;
  } catch {
    return null;
  }
}

function storeTheme(theme: Theme) {
  try {
    window.localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // Storage can be blocked (private mode, strict cookie settings); the theme still applies for this visit.
  }
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  listeners.forEach((listener) => listener());
}

function subscribe(listener: () => void) {
  listeners.add(listener);

  if (!stopWatchingSystem) {
    const media = window.matchMedia(DARK_QUERY);
    const followSystem = (event: MediaQueryListEvent) => {
      if (readStoredTheme() === null) applyTheme(event.matches ? "dark" : "light");
    };
    media.addEventListener("change", followSystem);
    stopWatchingSystem = () => media.removeEventListener("change", followSystem);
  }

  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) {
      stopWatchingSystem?.();
      stopWatchingSystem = null;
    }
  };
}

function getTheme(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

/**
 * The active color theme. It is null during prerendering and hydration, because the
 * visitor's preference is only known in the browser.
 */
export function useTheme() {
  const theme = useSyncExternalStore<Theme | null>(subscribe, getTheme, () => null);

  const toggleTheme = useCallback(() => {
    const next: Theme = getTheme() === "dark" ? "light" : "dark";
    storeTheme(next);
    applyTheme(next);
  }, []);

  return { theme, toggleTheme };
}
