"use client";

import { useState } from "react";
import DiffBlock from "./DiffBlock";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import Slideshow from "./Slideshow";
import { commits } from "@/content/log";

/**
 * `git log` — work history as an expandable commit list.
 *
 * The newest commit starts open so the section reads as content, not as a row
 * of closed doors. State is a Set of hashes rather than a single index, so
 * more than one can be open at a time.
 */
export default function LogSection() {
  const [open, setOpen] = useState<Set<string>>(new Set([commits[0].hash]));

  function toggle(hash: string) {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(hash)) next.delete(hash);
      else next.add(hash);
      return next;
    });
  }

  const allOpen = open.size === commits.length;

  return (
    <section id="log" aria-labelledby="log-title" className="shell scroll-mt-24 pb-20 md:pb-24">
      <SectionHead
        id="log"
        title="What I've accomplished"
        cmd="git log"
        flags="--author=ruyeki --stat"
        blurb="My track record as a commit history — one commit per thing I've built and shipped, newest first. Expand one to see what changed because I was there — minus lines are how it worked before, plus lines are what I left behind."
      />

      <Reveal>
        <div className="mb-4 flex items-center justify-between text-[12px]">
          <span className="text-faint">
            {commits.length} commits on <span className="text-accent">main</span>
          </span>
          <button
            type="button"
            onClick={() => setOpen(allOpen ? new Set() : new Set(commits.map((c) => c.hash)))}
            className="rounded-md border border-line px-2 py-1 text-muted transition-colors hover:border-line-strong hover:bg-hover hover:text-fg"
          >
            {allOpen ? "collapse all" : "expand all"}
          </button>
        </div>

        <ol className="relative">
          {/* The graph spine */}
          <span
            aria-hidden="true"
            className="absolute top-3 bottom-3 left-[7px] w-px bg-[var(--border)]"
          />

          {commits.map((c, i) => {
            const isOpen = open.has(c.hash);
            const isHead = i === 0;

            return (
              <li key={c.hash} className="relative pl-8">
                {/* Graph node */}
                <span
                  aria-hidden="true"
                  className="absolute top-[15px] left-0 grid h-[15px] w-[15px] place-items-center rounded-full border-2"
                  style={{
                    background: "var(--bg)",
                    borderColor: isHead ? "var(--accent)" : "var(--border-strong)",
                  }}
                >
                  {isHead && (
                    <span
                      className="h-[5px] w-[5px] rounded-full"
                      style={{ background: "var(--accent)" }}
                    />
                  )}
                </span>

                <div className={`panel mb-3 ${isOpen ? "shadow-[var(--shadow)]" : ""}`}>
                  <button
                    type="button"
                    onClick={() => toggle(c.hash)}
                    aria-expanded={isOpen}
                    aria-controls={`commit-${c.hash}`}
                    className="w-full px-4 py-3.5 text-left transition-colors hover:bg-hover"
                  >
                    <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1.5">
                      <code className="hash text-[12.5px]">{c.hash}</code>
                      <span className="min-w-0 text-[13.5px] font-medium text-fg">{c.subject}</span>
                      {c.refs?.map((ref) => (
                        <span key={ref} className="pill pill--branch">
                          {ref}
                        </span>
                      ))}
                      <svg
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                        className={`ml-auto h-3.5 w-3.5 shrink-0 text-faint transition-transform duration-200 ${
                          isOpen ? "rotate-90" : ""
                        }`}
                        fill="currentColor"
                      >
                        <path d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06Z" />
                      </svg>
                    </div>

                    <div className="mt-2 flex flex-wrap items-baseline gap-x-2 gap-y-1 text-[12px] text-muted">
                      <span className="text-fg">{c.role}</span>
                      <span className="text-faint">at</span>
                      <span>{c.org}</span>
                      <span className="text-faint">·</span>
                      <span>{c.location}</span>
                      <span className="text-faint">·</span>
                      <time className="text-faint">{c.range}</time>
                    </div>
                  </button>

                  {isOpen && (
                    <div id={`commit-${c.hash}`}>
                      <div className="diff-hunk">
                        @@ {c.org.toLowerCase().replace(/[^a-z0-9]+/g, "-")} @@
                      </div>
                      <DiffBlock lines={c.body} />
                      {c.images && c.images.length > 0 && (
                        <div className="grid gap-4 border-t border-line px-4 py-4 sm:grid-cols-2">
                          {c.images.map((img) => (
                            <figure key={img.src}>
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={img.src}
                                alt={img.alt}
                                loading="lazy"
                                className="w-full rounded-md border border-line"
                              />
                              <figcaption className="mt-2 text-[12px] text-faint">
                                {img.caption}
                              </figcaption>
                            </figure>
                          ))}
                        </div>
                      )}
                      {c.gallery && c.gallery.length > 0 && (
                        <Slideshow slides={c.gallery} />
                      )}
                      <div className="border-t border-line bg-inset px-4 py-3">
                        <div className="flex flex-wrap gap-1.5">
                          {c.stack.map((s) => (
                            <span key={s} className="pill">
                              {s}
                            </span>
                          ))}
                        </div>
                        {c.links && c.links.length > 0 && (
                          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                            {c.links.map((l) => (
                              <a
                                key={l.href}
                                href={l.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="lnk inline-flex items-center gap-1.5 text-[12px]"
                              >
                                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
                                  <path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5A1.75 1.75 0 0 1 3.75 2Zm6.5-1h4a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V3.56L8.53 8.78a.75.75 0 0 1-1.06-1.06L12.69 2.5h-2.44a.75.75 0 0 1 0-1.5Z" />
                                </svg>
                                {l.label}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </Reveal>
    </section>
  );
}
