import type { Branch } from "./types";

/**
 * `git branch -a` — side projects, i.e. the things I build off the clock.
 *
 * Work projects live in log.ts instead, so nothing is claimed twice. If a
 * project started as a hobby and became work, it belongs in the log.
 *
 * `state` drives the badge and the branch-graph node:
 *   active  — still committing to it
 *   shipped — live and in use
 *   merged  — done, folded back into the main story
 */
export const branches: Branch[] = [
  {
    name: "feat/cortana",
    title: "Cortana — Home Server",
    state: "active",
    range: "2026 — present",
    blurb:
      "My old college laptop, refusing to retire. It runs Ubuntu with a monitoring pipeline I built out: node_exporter scrapes system metrics, Prometheus stores and queries them, Grafana draws the dashboards — so the box tells me it's unhappy before something actually falls over. It also hosts my own apps, including a finance tracker I actually use. I named it Cortana, which is currently a generous description of a machine that draws graphs.",
    next:
      "Give it the brain the name implies. A local LLM reading from that same Prometheus data, so instead of interpreting a dashboard I can just ask how the server is doing — what's under load, what's trending the wrong way, what's worth looking at before it turns into an outage. Then put it behind an API so every app on the box inherits it, and the server can explain itself to anything that asks.",
    stack: ["Ubuntu", "Linux", "Prometheus", "Grafana", "node_exporter", "Self-hosting"],
    links: [],
    stat: { add: 52, rem: 9 },
  },
  {
    name: "feat/roguelite",
    title: "Untitled Rogue-lite",
    state: "active",
    range: "2026 — present",
    blurb:
      "Building a rogue-lite in Unity with friends. No roadmap, no launch date, no metrics — the rare project where shipping isn't the point and the group chat is half the fun.",
    stack: ["Unity", "C#", "Game design"],
    links: [],
    stat: { add: 38, rem: 14 },
  },
  {
    name: "feat/pc-build",
    title: "Custom PC Build",
    state: "shipped",
    range: "2026",
    blurb:
      "My first full custom build. A Ryzen 5 9600X on an ASRock B850M Pro A — a genuinely modern AM5 / DDR5 / PCIe 5.0 platform — paired with 16GB of DDR5 I bought off a stranger on Facebook Marketplace and a GTX 1080 that refuses to become obsolete. Not a showpiece; a machine I use every day, built to grow into the board.",
    next:
      "The CPU and board are the long-term bet; the GPU and memory are where it grows next — a real modern graphics card and a full 32GB+, once Marketplace stops being my supplier.",
    stack: [
      "Ryzen 5 9600X",
      "ASRock B850M Pro A",
      "16GB DDR5",
      "NVIDIA GTX 1080",
      "AM5",
      "PCIe 5.0",
    ],
    links: [],
    stat: { add: 7, rem: 0 },
  },
  {
    name: "feat/this-site",
    title: "This Site",
    state: "active",
    range: "2025 — present",
    blurb:
      "A portfolio that reads like a repository, because that's how the work actually accumulates. Next.js and hand-written CSS, no component library — every diff row, branch line, and commit node in the background is drawn on purpose.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Canvas"],
    links: [
      {
        label: "github.com/ruyeki/personal-website",
        href: "https://github.com/ruyeki/personal-website",
      },
    ],
    stat: { add: 47, rem: 47 },
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
    name: "feat/nba-slider-stats",
    title: "NBA Slider Stats",
    state: "shipped",
    range: "2024",
    blurb:
      "Drag sliders to weight the stats you actually care about and watch the league re-rank live. Built because every 'best player' argument is really a disagreement about weights.",
    stack: ["React", "Python", "Pandas"],
    links: [
      {
        label: "github.com/NobodyTypical/NBA-Slider-Stats",
        href: "https://github.com/NobodyTypical/NBA-Slider-Stats",
      },
    ],
    stat: { add: 33, rem: 5 },
  },
];
