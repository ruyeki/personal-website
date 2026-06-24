import Image from "next/image";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

import profile from "@/assets/profile.jpg";
import { siteConfig } from "@/config/site";

const socials = [
  { label: "LinkedIn", href: siteConfig.links.linkedin, Icon: Linkedin },
  { label: "GitHub", href: siteConfig.links.github, Icon: Github },
  { label: "Email", href: siteConfig.links.email, Icon: Mail },
  { label: "Résumé", href: "/Ryan%20Uyeki's%20Resume.pdf", Icon: FileText },
];

export default function SiteHeader() {
  return (
    <header className="flex flex-col items-center gap-6 pt-10 sm:flex-row sm:items-start sm:gap-8">
      <Image
        priority
        alt="Ryan Uyeki"
        className="h-36 w-36 flex-shrink-0 rounded-full object-cover"
        height={180}
        src={profile}
        width={180}
      />

      <div className="flex flex-col text-center sm:text-left">
        <h1 className="text-4xl font-semibold tracking-tight">
          Ryan Uyeki <span className="align-middle text-2xl">🇺🇸</span>
        </h1>

        <p className="mt-3 max-w-xl text-lg leading-relaxed text-foreground/75">
          Software Engineer at{" "}
          <a
            className="text-[#c9a36b] underline decoration-[#c9a36b]/40 underline-offset-4 hover:decoration-[#c9a36b]"
            href="https://persist-ai.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Persist AI
          </a>{" "}
          building full-stack and AI-powered products. UC Davis graduate,
          basketball player since age 5, and all-around sports enthusiast.
        </p>

        <div className="mt-5 flex items-center justify-center gap-5 sm:justify-start">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              aria-label={label}
              className="text-foreground/60 transition-colors hover:text-foreground"
              href={href}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon size={22} strokeWidth={1.75} />
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
