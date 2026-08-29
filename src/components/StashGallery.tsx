"use client";

import { useState } from "react";
import Slideshow from "./Slideshow";

type Slide = { src: string; alt: string; caption: string };

/**
 * A photo gallery hidden behind a dropdown toggle. Collapsed by default so the
 * stash card stays light; expands to reveal the two-up clickable slideshow.
 */
export default function StashGallery({ slides }: { slides: Slide[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-3">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="inline-flex items-center gap-1.5 rounded-md border border-line px-2 py-1 text-[11.5px] text-muted transition-colors hover:border-line-strong hover:bg-hover hover:text-fg"
      >
        <svg
          viewBox="0 0 16 16"
          className={`h-3 w-3 transition-transform duration-200 ${open ? "rotate-90" : ""}`}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06Z" />
        </svg>
        {open ? "hide photos" : `photos (${slides.length})`}
      </button>

      {open && (
        <div className="mt-1 -mx-4 -mb-4">
          <Slideshow slides={slides} showCaptions={false} />
        </div>
      )}
    </div>
  );
}
