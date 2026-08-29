import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { DiffStat } from "./DiffBlock";
import { branches } from "@/content/branches";
import type { Branch } from "@/content/types";

const stateStyle: Record<Branch["state"], { pill: string; color: string; label: string }> = {
  active: { pill: "pill--open", color: "var(--add)", label: "active" },
  shipped: { pill: "pill--branch", color: "var(--accent)", label: "shipped" },
  merged: { pill: "pill--merged", color: "var(--branch)", label: "merged" },
};

/**
 * `git branch -a` — side projects.
 *
 * The connector is pure CSS: a vertical spine on the list, plus a rounded
 * elbow per row (border-left + border-bottom + a corner radius). No SVG, so it
 * reflows correctly at any width.
 */
export default function BranchSection() {
  return (
    <section id="branch" aria-labelledby="branch-title" className="shell scroll-mt-24 pb-20 md:pb-24">
      <SectionHead
        id="branch"
        title="Side projects"
        cmd="git branch"
        flags="-a --sort=-committerdate"
        blurb="Things I started off the clock — usually to learn something new, or just to build something cool for its own sake."
      />

      <Reveal>
        <ol className="relative pl-6 md:pl-8">
          {/* main spine */}
          <span
            aria-hidden="true"
            className="absolute top-0 bottom-6 left-[3px] w-[2px] rounded-full"
            style={{ background: "var(--border-strong)" }}
          />
          <span
            aria-hidden="true"
            className="absolute left-0 -bottom-1 text-[10px] whitespace-nowrap text-faint"
          >
            main
          </span>

          {branches.map((b, i) => {
            const s = stateStyle[b.state];
            return (
              <li key={b.name} className="relative">
                {/* elbow connector */}
                <span
                  aria-hidden="true"
                  className="absolute -left-[21px] top-0 h-[30px] w-[18px] rounded-bl-[10px] border-b-2 border-l-2 md:-left-[29px] md:w-[26px]"
                  style={{ borderColor: "var(--border-strong)" }}
                />
                <span
                  aria-hidden="true"
                  className="absolute -left-[7px] top-[22px] h-[13px] w-[13px] rounded-full border-2 md:-left-[7px]"
                  style={{ background: "var(--bg)", borderColor: s.color }}
                />

                <article
                  className="panel mb-4 transition-colors hover:border-line-strong"
                  style={{ marginTop: i === 0 ? 0 : undefined }}
                >
                  <div className="panel-head">
                    <svg viewBox="0 0 16 16" className="h-3 w-3" style={{ color: s.color }} fill="currentColor" aria-hidden="true">
                      <path d="M9.5 3.25a2.25 2.25 0 1 1 3 2.122V6A2.5 2.5 0 0 1 10 8.5H6a1 1 0 0 0-1 1v1.128a2.251 2.251 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.5 0v1.836A2.492 2.492 0 0 1 6 7h4a1 1 0 0 0 1-1v-.628A2.25 2.25 0 0 1 9.5 3.25Zm-6 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm8.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM4.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Z" />
                    </svg>
                    <code className="text-fg">{b.name}</code>
                    <span className={`pill ${s.pill}`}>{s.label}</span>
                    <span className="ml-auto flex items-center gap-3">
                      <DiffStat add={b.stat.add} rem={b.stat.rem} />
                    </span>
                  </div>

                  <div className="px-4 py-4">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="text-[15px] font-semibold text-fg">{b.title}</h3>
                      <time className="text-[11.5px] text-faint">{b.range}</time>
                    </div>

                    <p className="prose mt-2.5 max-w-[70ch] text-[13.5px] text-muted">
                      {b.blurb}
                    </p>

                    {b.next && (
                      <div className="todo">
                        <span className="todo-label">TODO</span>
                        <p className="prose max-w-[68ch] text-[13px] text-muted">{b.next}</p>
                      </div>
                    )}

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {b.stack.map((t) => (
                        <span key={t} className="pill">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                      {b.links.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="lnk inline-flex items-center gap-1.5 text-[12.5px]"
                        >
                          <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
                            <path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5A1.75 1.75 0 0 1 3.75 2Zm6.5-1h4a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V3.56L8.53 8.78a.75.75 0 0 1-1.06-1.06L12.69 2.5h-2.44a.75.75 0 0 1 0-1.5Z" />
                          </svg>
                          {l.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ol>
      </Reveal>
    </section>
  );
}
