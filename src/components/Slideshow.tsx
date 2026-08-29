"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

type Slide = { src: string; alt: string; caption: string };

/**
 * A two-up sliding carousel: always shows two photos side by side, and the
 * arrows shift the window by one — so you scroll horizontally through the set,
 * wrapping around. Clicking any photo opens a full-screen lightbox you can
 * click/arrow through. Captions are optional (`showCaptions`).
 */
export default function Slideshow({
  slides,
  showCaptions = true,
}: {
  slides: Slide[];
  showCaptions?: boolean;
}) {
  const n = slides.length;
  const [i, setI] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const go = (d: number) => setI((prev) => (prev + d + n) % n);
  const lbGo = useCallback(
    (d: number) => setLightbox((p) => (p === null ? p : (p + d + n) % n)),
    [n],
  );
  const close = useCallback(() => setLightbox(null), []);

  const pair = [
    { s: slides[i], idx: i },
    { s: slides[(i + 1) % n], idx: (i + 1) % n },
  ];

  // Keyboard nav + scroll lock while the lightbox is open.
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") lbGo(1);
      else if (e.key === "ArrowLeft") lbGo(-1);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightbox, close, lbGo]);

  return (
    <div className="border-t border-line px-4 py-4">
      <div className="relative">
        <div className="grid gap-4 sm:grid-cols-2">
          {pair.map(({ s, idx }, k) => (
            <figure key={`${i}-${k}`}>
              <button
                type="button"
                onClick={() => setLightbox(idx)}
                aria-label={`Expand photo ${idx + 1}`}
                className="block w-full cursor-zoom-in"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.src}
                  alt={s.alt}
                  loading="lazy"
                  className="aspect-[4/3] w-full rounded-md border border-line bg-inset object-contain transition-opacity hover:opacity-90"
                />
              </button>
              {showCaptions && (
                <figcaption className="mt-2 text-[12px] text-faint">{s.caption}</figcaption>
              )}
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

      {/* Lightbox — portaled to <body> so it escapes the Reveal transform's
          stacking context and truly covers the viewport. */}
      {lightbox !== null &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="Photo viewer"
          >
          {/* Close */}
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute top-4 right-4 grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-black/40 text-white/80 transition-colors hover:bg-black/60 hover:text-white"
          >
            <svg viewBox="0 0 16 16" className="h-4 w-4" fill="currentColor" aria-hidden="true">
              <path d="M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94 4.28 3.22Z" />
            </svg>
          </button>

          {/* Prev */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              lbGo(-1);
            }}
            aria-label="Previous photo"
            className="absolute top-1/2 left-3 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/40 text-white/80 transition-colors hover:bg-black/60 hover:text-white"
          >
            <svg viewBox="0 0 16 16" className="h-5 w-5" fill="currentColor" aria-hidden="true">
              <path d="M9.78 3.22a.75.75 0 0 1 0 1.06L6.06 8l3.72 3.72a.75.75 0 1 1-1.06 1.06L4.44 8.53a.75.75 0 0 1 0-1.06l4.28-4.25a.75.75 0 0 1 1.06 0Z" />
            </svg>
          </button>

          {/* Image — clicking it advances to the next photo */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={slides[lightbox].src}
            alt={slides[lightbox].alt}
            onClick={(e) => {
              e.stopPropagation();
              lbGo(1);
            }}
            className="max-h-[85vh] max-w-[92vw] cursor-pointer rounded-md object-contain"
          />

          {/* Next */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              lbGo(1);
            }}
            aria-label="Next photo"
            className="absolute top-1/2 right-3 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/40 text-white/80 transition-colors hover:bg-black/60 hover:text-white"
          >
            <svg viewBox="0 0 16 16" className="h-5 w-5" fill="currentColor" aria-hidden="true">
              <path d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.28 4.25a.75.75 0 0 1 0 1.06l-4.28 4.25a.75.75 0 1 1-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06Z" />
            </svg>
          </button>

          {/* Counter + optional caption */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-center" onClick={(e) => e.stopPropagation()}>
            <span className="rounded-full border border-white/20 bg-black/40 px-2.5 py-0.5 text-[12px] text-white/80">
              {lightbox + 1} / {n}
            </span>
            {showCaptions && (
              <p className="mt-2 max-w-[80vw] text-[12.5px] text-white/70">{slides[lightbox].caption}</p>
            )}
          </div>
          </div>,
          document.body,
        )}
    </div>
  );
}
