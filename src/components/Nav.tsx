"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/content/site";
import ThemeToggle from "./ThemeToggle";

/**
 * Sticky repo header. Doubles as a scroll-spy: the active section's anchor is
 * highlighted the way a checked-out branch would be.
 *
 * The spy tracks whichever section's top is closest to (but still above) the
 * header line — simpler and less jumpy than IntersectionObserver ratios when
 * sections differ wildly in height.
 */
export default function Nav() {
  const [active, setActive] = useState<string>(nav[0].id);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const ids = nav.map((n) => n.id);

    function onScroll() {
      setScrolled(window.scrollY > 8);

      const line = 96; // just below the sticky header
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }

      // Pin the last section once we're at the bottom, otherwise a short final
      // section can never win the "closest above the line" test.
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 4) {
        current = ids[ids.length - 1];
      }
      setActive(current);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-200 ${
        scrolled ? "border-line bg-bg/85 backdrop-blur-md" : "border-transparent bg-bg"
      }`}
    >
      <div className="shell flex h-14 items-center gap-3">
        {/* Repo identity */}
        <a
          href="#top"
          className="flex shrink-0 items-center gap-1.5 text-[13px] transition-colors hover:text-fg"
        >
          <svg viewBox="0 0 16 16" className="h-4 w-4 text-accent" fill="currentColor" aria-hidden="true">
            <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v11.5a.75.75 0 0 1-.75.75H11v2.25a.25.25 0 0 0 .4.2l1.35-1.01a.25.25 0 0 1 .3 0l1.35 1.01a.25.25 0 0 0 .4-.2V13h.45a.75.75 0 0 1 0 1.5H4.5A2.5 2.5 0 0 1 2 12V2.5Zm3 0v9h7.5v-9H5Zm-1.5 9.5a1 1 0 0 0 1 1H5V2H4.5a1 1 0 0 0-1 1v9Z" />
          </svg>
          <span className="hidden text-muted sm:inline">{site.handle}</span>
          <span className="hidden text-faint sm:inline">/</span>
          <span className="font-semibold text-fg">ryan</span>
        </a>

        {/* Wrapper carries the responsive hide: `.pill` sets display in
            unlayered CSS, which outranks Tailwind's `hidden` utility. */}
        <span className="hidden shrink-0 sm:block">
        <span className="pill pill--branch" title={`On branch ${site.branch}`}>
          <svg viewBox="0 0 16 16" className="h-3 w-3" fill="currentColor" aria-hidden="true">
            <path d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.492 2.492 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z" />
          </svg>
          {site.branch}
        </span>
        </span>

        <div className="flex-1" />

        {/* Section anchors — horizontally scrollable rather than collapsed
            into a hamburger; there are only five and they're short. */}
        <nav
          aria-label="Sections"
          className="no-bar -mx-1 flex min-w-0 items-center gap-0.5 overflow-x-auto px-1"
        >
          {nav.map((item) => {
            const on = active === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={on ? "true" : undefined}
                className={`shrink-0 rounded-md px-2 py-1 text-[12.5px] transition-colors ${
                  on ? "bg-accent/10 text-accent" : "text-muted hover:bg-hover hover:text-fg"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="ml-1 shrink-0">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
