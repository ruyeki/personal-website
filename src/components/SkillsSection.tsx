import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { skills, skillsMeta } from "@/content/skills";

/**
 * `git config --list` — the toolchain.
 *
 * Each group renders as an INI `[section]` from a git config file, with the
 * skills as pills underneath. Content lives in src/content/skills.ts.
 */
export default function SkillsSection() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="shell scroll-mt-24 pb-20 md:pb-24">
      <SectionHead
        id="skills"
        title="Skills and tooling"
        cmd="git config"
        flags="--list --show-scope"
        blurb={skillsMeta.intro}
      />

      <Reveal>
        <ul className="grid gap-3 sm:grid-cols-2">
          {skills.map((group) => (
            <li
              key={group.section}
              className="panel flex flex-col p-4 transition-colors hover:border-line-strong hover:bg-hover"
            >
              <code className="text-[12.5px] text-accent">[{group.section}]</code>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span key={item} className="pill">
                    {item}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
