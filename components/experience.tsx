import Image, { StaticImageData } from "next/image";

import persist from "@/assets/persist-logo.jpg";
import codelab from "@/assets/codelab.jpg";
import asa from "@/assets/aggiesportsanalytics.jpg";
import libretexts from "@/assets/libretexts.png";
import cea from "@/assets/cea.jpg";

interface Role {
  company: string;
  role: string;
  summary: string;
  location: string;
  date: string;
  logo: StaticImageData;
}

const roles: Role[] = [
  {
    company: "Persist AI",
    role: "Software Engineer",
    summary:
      "Currently working on the Nike team, an AI-powered formulation assistant.",
    location: "Sacramento, CA",
    date: "Jun 2025 – Present",
    logo: persist,
  },
  {
    company: "Persist AI",
    role: "Software Engineer Intern",
    summary:
      "Worked on building an internal project-management platform, Hephaestus.",
    location: "Sacramento, CA",
    date: "Feb – Jun 2025",
    logo: persist,
  },
  {
    company: "CodeLab",
    role: "Software Engineer Intern",
    summary:
      "Rebuilt the Siegel Lab enzyme database (40+ schools, 1,000+ students) in Next.js",
    location: "UC Davis",
    date: "Dec 2023 – Dec 2024",
    logo: codelab,
  },
  {
    company: "Aggie Sports Analytics",
    role: "Software Developer",
    summary:
      "Built ScoutAI and NBA Slider Stats — AI-powered sports analytics tools",
    location: "UC Davis",
    date: "Jan 2024 – May 2025",
    logo: asa,
  },
  {
    company: "LibreTexts",
    role: "Site Reliability Engineer",
    summary:
      "Maintained a Kubernetes cluster serving educational software at scale",
    location: "Davis, CA",
    date: "Jan 2023 – Feb 2024",
    logo: libretexts,
  },
  {
    company: "Clean Energy Associates",
    role: "Software Developer Intern",
    summary: "Frontend bug-fixing and DocuSign integration for internal tools",
    location: "Remote",
    date: "Jun – Aug 2022",
    logo: cea,
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>

      <div className="mt-4">
        {roles.map((r, i) => (
          <div
            key={i}
            className="flex items-start gap-4 border-t border-foreground/10 py-6 first:border-t-0 first:pt-2"
          >
            <Image
              alt={`${r.company} logo`}
              className="h-12 w-12 flex-shrink-0 rounded-lg object-cover"
              height={48}
              src={r.logo}
              width={48}
            />
            <div className="flex-1">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="text-lg font-semibold">{r.company}</h3>
                <span className="whitespace-nowrap text-sm text-foreground/45">
                  {r.date}
                </span>
              </div>
              <p className="text-foreground/85">{r.role}</p>
              <p className="mt-0.5 text-sm leading-relaxed text-foreground/55">
                {r.summary} • {r.location}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
