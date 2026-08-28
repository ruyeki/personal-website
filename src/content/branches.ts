import type { Branch } from "./types";

/**
 * `git branch -a` — side projects.
 *
 * `state` drives the badge and the branch-graph node:
 *   active  — still committing to it
 *   shipped — live and in use
 *   merged  — done, folded back into the main story
 */
export const branches: Branch[] = [
  {
    name: "feat/ai-karthik",
    title: "Report Generator",
    state: "merged",
    range: "Jun 2025 — Aug 2025",
    blurb:
      "A multi-agent chatbot that writes structured project reports by retrieving text, images, and graphs out of Persist AI's lab notebook. A watcher script re-indexes Chroma and SQLite whenever the notebook changes, so answers are never quoting last week's data.",
    stack: ["Python", "LangChain", "OpenRouter", "Gemini", "Chroma", "FastAPI", "React"],
    links: [{ label: "github.com/ruyeki/ai-karthik", href: "https://github.com/ruyeki/ai-karthik" }],
    stat: { add: 74, rem: 12 },
  },
  {
    name: "feat/scout-ai",
    title: "ScoutAI",
    state: "merged",
    range: "Dec 2024 — May 2025",
    blurb:
      "An AI scouting assistant built for the UC Davis basketball team's game prep. Scrapes opponent, player, and team statistics into SQLite, then answers questions across a conversation — the memory module is what makes the follow-up questions work.",
    stack: ["Python", "OpenAI API", "LangChain", "BeautifulSoup", "SQLite"],
    links: [
      { label: "github.com/nmaffly/SmartAnalytics", href: "https://github.com/nmaffly/SmartAnalytics" },
    ],
    stat: { add: 61, rem: 8 },
  },
  {
    name: "feat/d2d-cure",
    title: "D2D Cure",
    state: "shipped",
    range: "2024",
    blurb:
      "The protein and enzyme data platform for the Siegel Lab's national curriculum — 40+ institutions and 1,000+ students submitting and comparing results. Moved from legacy PHP onto Next.js with real authentication and per-institution admin control.",
    stack: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
    links: [{ label: "d2dcure.com", href: "https://d2dcure.com" }],
    stat: { add: 88, rem: 41 },
  },
  {
    name: "feat/nba-slider-stats",
    title: "NBA Slider Stats",
    state: "shipped",
    range: "2024",
    blurb:
      "Drag sliders to weight the stats you actually care about and watch the league re-rank live. Built because every 'best player' argument is really a disagreement about weights.",
    stack: ["React", "Python", "Pandas"],
    links: [{ label: "github.com/ruyeki", href: "https://github.com/ruyeki" }],
    stat: { add: 33, rem: 5 },
  },
  {
    name: "feat/this-site",
    title: "This Site",
    state: "active",
    range: "2025 — present",
    blurb:
      "A portfolio that reads like a repository, because that's how the work actually accumulates. Next.js and hand-written CSS, no component library — every diff row and branch line here is drawn on purpose.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    links: [{ label: "github.com/ruyeki", href: "https://github.com/ruyeki" }],
    stat: { add: 47, rem: 47 },
  },
];
