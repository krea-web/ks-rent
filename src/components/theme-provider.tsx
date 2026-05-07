import { useCallback, useEffect, useState } from "react";

/**
 * Context-free theme manager. Su Astro ogni componente React vive nella
 * propria isola, quindi non possiamo affidarci a un singolo
 * <ThemeProvider> wrapper globale. useTheme legge/scrive direttamente
 * da localStorage e applica la classe a <html>.
 *
 * Lo "anti-flash" iniziale è gestito da uno script `is:inline` nel
 * BaseLayout, che mette la classe corretta su <html> prima di idratare
 * qualsiasi React island.
 */

type Theme = "dark" | "light" | "system";
const STORAGE_KEY = "ksrent-ui-theme";

function readTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  const v = localStorage.getItem(STORAGE_KEY) as Theme | null;
  return v === "light" || v === "dark" || v === "system" ? v : "dark";
}

function applyTheme(theme: Theme) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  if (theme === "system") {
    const sys = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    root.classList.add(sys);
  } else {
    root.classList.add(theme);
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // No-op wrapper: kept for compatibility with codebase imports.
  return <>{children}</>;
}

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>("dark");

  useEffect(() => {
    setThemeState(readTheme());
  }, []);

  const setTheme = useCallback((next: Theme) => {
    if (typeof window === "undefined") return;
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
    setThemeState(next);
  }, []);

  return { theme, setTheme } as const;
}
