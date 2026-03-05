"use client";

import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-card px-4 text-xs font-semibold uppercase tracking-[0.16em] text-card-foreground shadow-lg shadow-black/15 transition hover:bg-accent"
      aria-label="Toggle theme"
    >
      <span className="dark:hidden">🌙</span>
      <span className="hidden dark:inline">☀️</span>
      <span className="dark:hidden">Dark</span>
      <span className="hidden dark:inline">Light</span>
    </button>
  );
}
