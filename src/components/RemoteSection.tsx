import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { remotes, site } from "@/content/site";

/** `git remote -v` — contact. */
export default function RemoteSection() {
  return (
    <section id="remote" aria-labelledby="remote-title" className="shell scroll-mt-24 pb-24">
      <SectionHead
        id="remote"
        title="Get in touch"
        cmd="git remote"
        flags="-v"
        blurb="Open to interesting problems, especially ones where software has to touch the physical world. Fastest way to reach me is email."
      />

      <Reveal>
        <div className="panel shadow-[var(--shadow)]">
          <ul className="divide-y divide-[var(--border)]">
            {remotes.map((r) => (
              <li key={r.name}>
                <a
                  href={r.href}
                  target={r.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={r.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className="group flex flex-wrap items-center gap-x-3 gap-y-1 px-4 py-3.5 transition-colors hover:bg-hover"
                >
                  <code className="w-[4.5rem] shrink-0 text-[12.5px] text-accent">{r.name}</code>
                  <span className="min-w-0 flex-1 truncate text-[13px] text-fg group-hover:underline">
                    {r.url}
                  </span>
                  <span className="text-[11.5px] text-faint">({r.mode})</span>
                  <svg
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                    className="h-3.5 w-3.5 shrink-0 text-faint transition-transform group-hover:translate-x-0.5 group-hover:text-muted"
                    fill="currentColor"
                  >
                    <path d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06l2.97-2.97H2.75a.75.75 0 0 1 0-1.5h8.44L8.22 4.03a.75.75 0 0 1 0-1.06Z" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <footer className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-line pt-6 text-[11.5px] text-faint">
          <span>
            <span className="text-accent">$</span> git log -1 --format=%cd
          </span>
          <span className="text-faint/70">·</span>
          <span>{site.repo}</span>
          <span className="text-faint/70">·</span>
          <span>built with Next.js and no component library</span>
          <span className="ml-auto">© {new Date().getFullYear()} {site.name}</span>
        </footer>
      </Reveal>
    </section>
  );
}
