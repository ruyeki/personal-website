import DiffBlock from "./DiffBlock";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { impactDiff, staged, statusMeta } from "@/content/status";

const stateColor: Record<string, string> = {
  modified: "var(--accent)",
  "new file": "var(--add)",
  renamed: "var(--branch)",
};

/** `git status` — the work that's in flight right now. */
export default function StatusSection() {
  return (
    <section id="status" aria-labelledby="status-title" className="shell scroll-mt-24 pb-20 md:pb-24">
      <SectionHead
        id="status"
        title="What I'm working on now"
        cmd="git status"
        blurb={statusMeta.summary}
      />

      <Reveal>
        <div className="panel shadow-[var(--shadow)]">
          <div className="panel-head">
            <span className="dot dot--live text-add" aria-hidden="true" />
            <span>
              On branch <span className="text-accent">{statusMeta.branch}</span>
            </span>
            <span className="text-faint">·</span>
            <span>
              tracking <span className="text-fg">{statusMeta.upstream}</span>
            </span>
            <span className="ml-auto text-faint">since {statusMeta.since}</span>
          </div>

          <p className="border-b border-line px-4 py-3 text-[12.5px] text-faint">
            Changes not staged for commit — still shipping:
          </p>

          <ul className="divide-y divide-[var(--border)]">
            {staged.map((entry) => (
              <li
                key={entry.path}
                className="group flex flex-col gap-1.5 px-4 py-3.5 transition-colors hover:bg-hover sm:flex-row sm:gap-4"
              >
                <div className="flex shrink-0 items-baseline gap-2 sm:w-[19rem]">
                  <span
                    className="shrink-0 text-[11.5px] whitespace-nowrap tabular-nums"
                    style={{ color: stateColor[entry.state] }}
                  >
                    {entry.state}:
                  </span>
                  <code className="min-w-0 text-[12.5px] break-all text-fg">{entry.path}</code>
                </div>
                <p className="prose min-w-0 flex-1 text-[13px] text-muted">
                  {entry.note}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      {/* Why it matters, as a before/after */}
      <Reveal delay={80}>
        <div className="panel mt-6 shadow-[var(--shadow)]">
          <div className="panel-head">
            <span className="mono-label">the diff it made</span>
            <span className="ml-auto text-faint">git diff --stat main..HEAD</span>
          </div>
          <DiffBlock lines={impactDiff} />
        </div>
      </Reveal>
    </section>
  );
}
