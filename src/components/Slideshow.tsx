"use client";

import { useState } from "react";

type Slide = { src: string; alt: string; caption: string };

/**
 * A two-up sliding carousel: always shows two photos side by side (matching the
 * inline image grid elsewhere), and the arrows shift the window by one — so you
 * scroll horizontally through the set, wrapping around. Falls back to a single
 * column on narrow screens.
 */
export default function Slideshow({ slides }: { slides: Slide[] }) {
  const n = slides.length;
  const [i, setI] = useState(0);
  const go = (d: number) => setI((prev) => (prev + d + n) % n);
  const pair = [slides[i], slides[(i + 1) % n]];

  return (
    <div className="border-t border-line px-4 py-4">
      <div className="relative">
        <div className="grid gap-4 sm:grid-cols-2">
          {pair.map((s, idx) => (
            <figure key={`${i}-${idx}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                className="aspect-[4/3] w-full rounded-md border border-line bg-inset object-contain"
              />
              <figcaption className="mt-2 text-[12px] text-faint">{s.caption}</figcaption>
            </figure>
          ))}
        </div>

        {/* Prev / next — shift the two-up window by one */}
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous photos"
          className="absolute top-[42%] left-2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full border border-line bg-bg/80 text-muted backdrop-blur-sm transition-colors hover:border-line-strong hover:text-fg"
        >
          <svg viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor" aria-hidden="true">
            <path d="M9.78 3.22a.75.75 0 0 1 0 1.06L6.06 8l3.72 3.72a.75.75 0 1 1-1.06 1.06L4.44 8.53a.75.75 0 0 1 0-1.06l4.28-4.25a.75.75 0 0 1 1.06 0Z" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next photos"
          className="absolute top-[42%] right-2 grid h-8 w-8 -translate-y-1/2 place-items-center rounded-full border border-line bg-bg/80 text-muted backdrop-blur-sm transition-colors hover:border-line-strong hover:text-fg"
        >
          <svg viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor" aria-hidden="true">
            <path d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.28 4.25a.75.75 0 0 1 0 1.06l-4.28 4.25a.75.75 0 1 1-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06Z" />
          </svg>
        </button>
      </div>

      {/* Dots — one per starting position */}
      <div className="mt-3 flex justify-center gap-1.5">
        {slides.map((s, idx) => (
          <button
            key={s.src}
            type="button"
            onClick={() => setI(idx)}
            aria-label={`Start at photo ${idx + 1}`}
            aria-current={idx === i ? "true" : undefined}
            className={`h-1.5 rounded-full transition-all ${
              idx === i ? "w-5 bg-accent" : "w-1.5 bg-[var(--border-strong)] hover:bg-muted"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
