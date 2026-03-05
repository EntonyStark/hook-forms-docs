"use client";

import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme !== "light";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-9 items-center gap-2 rounded-full border border-slate-300 bg-white px-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-700 transition hover:border-cyan-400/60 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
      aria-label="Toggle theme"
      suppressHydrationWarning
    >
      <span>{isDark ? "☀️" : "🌙"}</span>
      <span>{isDark ? "Light" : "Dark"}</span>
    </button>
  );
}
