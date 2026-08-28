import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { stash, stashMeta } from "@/content/stash";

/**
 * `git stash list` — free time.
 *
 * Deliberately the lightest section on the page: no diffs, no metrics, no
 * impact numbers. Content lives in src/content/stash.ts and is meant to be
 * rewritten by hand.
 */
export default function StashSection() {
  return (
    <section id="stash" aria-labelledby="stash-title" className="shell scroll-mt-24 pb-20 md:pb-24">
      <SectionHead
        id="stash"
        title="What I do outside work"
        cmd="git stash list"
        blurb={stashMeta.intro}
      />

      <Reveal>
        <ul className="grid gap-3 sm:grid-cols-2">
          {stash.map((entry, i) => (
            <li
              key={entry.title}
              className="panel flex flex-col p-4 transition-colors hover:border-line-strong hover:bg-hover"
            >
              <div className="flex items-baseline gap-2 text-[11.5px]">
                <code className="hash">stash@{`{${i}}`}</code>
                <span className="text-faint">WIP on</span>
                <code className="text-accent">{entry.on}</code>
              </div>

              <h3 className="mt-2.5 text-[14px] font-medium text-fg">{entry.title}</h3>
              <p className="prose mt-1.5 text-[13px] text-muted">{entry.body}</p>
            </li>
          ))}
        </ul>

        <p className="mt-4 text-[11.5px] text-faint">
          <span className="text-accent">$</span> git stash pop{" "}
          <span className="opacity-60">— usually on a Saturday</span>
        </p>
      </Reveal>
    </section>
  );
}
