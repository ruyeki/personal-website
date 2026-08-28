"use client";

import { useEffect, useState } from "react";

/**
 * Dark is the default. `.light` on <html> opts into the paper theme.
 *
 * The class is set pre-paint by the inline script in layout.tsx; this only
 * flips it and persists the choice. Rendered as a placeholder until mounted so
 * server and client markup agree (the icon depends on state the server can't
 * know).
 */
export default function ThemeToggle() {
  const [light, setLight] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setLight(document.documentElement.classList.contains("light"));
  }, []);

  function toggle() {
    const root = document.documentElement;
    const next = !root.classList.contains("light");

    // Suppress the cross-fade on every element while the palette swaps.
    root.classList.add("transitions-off");
    root.classList.toggle("light", next);
    try {
      localStorage.setItem("theme", next ? "light" : "dark");
    } catch {
      /* private mode — the toggle still works for this session */
    }
    window.setTimeout(() => root.classList.remove("transitions-off"), 0);

    setLight(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={light ? "Switch to dark theme" : "Switch to light theme"}
      title={light ? "Switch to dark theme" : "Switch to light theme"}
      className="grid h-7 w-7 place-items-center rounded-md border border-line text-muted transition-colors hover:border-line-strong hover:bg-hover hover:text-fg"
    >
      {!mounted ? (
        <span className="h-3.5 w-3.5" />
      ) : light ? (
        // moon
        <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
          <path d="M9.6 1.2a6.8 6.8 0 1 0 5.2 8.6 5.4 5.4 0 0 1-5.2-8.6Z" />
        </svg>
      ) : (
        // sun
        <svg
          viewBox="0 0 16 16"
          className="h-3.5 w-3.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <circle cx="8" cy="8" r="3.1" />
          <path d="M8 1v1.6M8 13.4V15M15 8h-1.6M2.6 8H1M12.9 3.1l-1.1 1.1M4.2 11.8l-1.1 1.1M12.9 12.9l-1.1-1.1M4.2 4.2 3.1 3.1" />
        </svg>
      )}
    </button>
  );
}
