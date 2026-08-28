"use client";

import { useState } from "react";
import DiffBlock from "./DiffBlock";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
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
        blurb="Every role, newest first. Expand one to see what changed because I was there — minus lines are how it worked before, plus lines are what I left behind."
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
                      <div className="flex flex-wrap gap-1.5 border-t border-line bg-inset px-4 py-3">
                        {c.stack.map((s) => (
                          <span key={s} className="pill">
                            {s}
                          </span>
                        ))}
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
