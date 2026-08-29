import Image from "next/image";
import DiffBlock from "./DiffBlock";
import Reveal from "./Reveal";
import { aboutDiff, site } from "@/content/site";
import profile from "@/app/profile.jpg";

const facts = [
  { k: "role", v: `${site.role}, ${site.org}` },
  { k: "loc", v: site.location },
  { k: "edu", v: "B.S. Computer Science, UC Davis" },
];

export default function Hero() {
  return (
    <section id="top" className="shell pt-12 pb-20 md:pt-20 md:pb-24">
      <Reveal>
        {/* Prompt line */}
        <p className="mb-6 text-[13px] text-muted">
          <span className="text-accent">$</span> whoami
          <span className="caret ml-1.5" aria-hidden="true" />
        </p>

        <div className="flex flex-col-reverse gap-8 md:flex-row md:items-start md:gap-10">
          <div className="min-w-0 flex-1">
            <h1 className="text-[clamp(30px,6.5vw,52px)] font-semibold leading-[1.08] tracking-tight">
              {site.name}
            </h1>

            <p className="prose mt-4 max-w-[56ch] text-[15px] text-muted md:text-[16px]">
              I build the software that runs a pharmaceutical lab —{" "}
              <span className="text-fg">multi-agent AI formulators</span>,{" "}
              <span className="text-fg">instrument automation</span>, and the{" "}
              <span className="text-fg">customer-facing tools</span> on top of both. Mostly
              Python and TypeScript, mostly in places where the code has to be right the first
              time because the experiment already ran. These days I also run the sprint and
              mentor our interns.
            </p>

            <dl className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[12.5px]">
              {facts.map((f) => (
                <div key={f.k} className="flex items-baseline gap-2">
                  <dt className="text-faint">{f.k}</dt>
                  <dd className="text-muted">{f.v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-7 flex flex-wrap items-center gap-2">
              <a
                href="#status"
                className="rounded-md border border-accent/40 bg-accent/10 px-3 py-1.5 text-[12.5px] text-accent transition-colors hover:bg-accent/[0.18]"
              >
                git status
                <span className="ml-1.5 text-accent/60">— what I&apos;m on now</span>
              </a>
              <a
                href="#log"
                className="rounded-md border border-line px-3 py-1.5 text-[12.5px] text-muted transition-colors hover:border-line-strong hover:bg-hover hover:text-fg"
              >
                git log
              </a>
              <a
                href="#branch"
                className="rounded-md border border-line px-3 py-1.5 text-[12.5px] text-muted transition-colors hover:border-line-strong hover:bg-hover hover:text-fg"
              >
                git branch
              </a>
            </div>
          </div>

          {/* Avatar, framed like a committed asset */}
          <div className="shrink-0 self-start">
            <div className="panel w-[92px] p-1.5 md:w-[136px]">
              <Image
                src={profile}
                alt={site.name}
                placeholder="blur"
                priority
                sizes="136px"
                className="aspect-square w-full rounded-[5px] object-cover"
              />
              <p className="px-1 pt-1.5 pb-0.5 text-center text-[10px] text-faint">profile.jpg</p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* About, as a diff */}
      <Reveal delay={80}>
        <div className="panel mt-12 shadow-[var(--shadow)]">
          <div className="panel-head">
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 text-faint" fill="currentColor" aria-hidden="true">
              <path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z" />
            </svg>
            <span className="text-fg">about.md</span>
            <span className="hidden text-faint sm:inline">·</span>
            <span className="hidden sm:inline">revised — the version that&apos;s actually true</span>
            <span className="ml-auto flex items-center gap-2">
              <span className="text-add">+6</span>
              <span className="text-rem">−2</span>
            </span>
          </div>
          <div className="diff-hunk">@@ -1,4 +1,8 @@ about</div>
          <DiffBlock lines={aboutDiff} />
        </div>
      </Reveal>
    </section>
  );
}
