import type { Commit } from "./types";

/**
 * `git log` — the work history, newest first.
 *
 * One commit per thing built, not one per job. Several commits share a role
 * and a date range, the same way a real log does. Each expands into a diff:
 * `-` lines are the world before, `+` lines are what I left behind, and
 * unprefixed lines are context.
 */
export const commits: Commit[] = [
  {
    hash: "a3f9c21",
    subject: "feat(instruments): end-to-end automation for Amscope and Stunner",
    role: "Software Engineer",
    org: "Persist AI",
    location: "West Sacramento, CA",
    range: "Jun 2025 — present",
    refs: ["HEAD", "persist-ai/main"],
    stack: ["Python", "OPC-UA", "React", "On-prem infra", "Computer vision"],
    body: [
      { k: "rem", t: "Amscope and Stunner driven by hand, one sample at a time" },
      { k: "add", t: "OPC-UA server scripts running against both instruments, so" },
      { k: "add", t: "they collect on their own and stream straight to our on-prem" },
      { k: "add", t: "server instead of landing in a folder someone has to find" },
      { k: "ctx", t: "" },
      { k: "add", t: "On the Amscope side: XY stage control, brightfield capture," },
      { k: "add", t: "particle detection, and amorphous vs. crystalline classification" },
      { k: "ctx", t: "" },
      { k: "add", t: "Apps on top render it as images, graphs, and charts, so a" },
      { k: "add", t: "scientist reads a result instead of parsing an export" },
      { k: "add", t: "→ ~50% less manual work, 100–150 more samples per week" },
      { k: "ctx", t: "" },
      { k: "ctx", t: "The practical version: the lab keeps running after everyone" },
      { k: "ctx", t: "has gone home." },
    ],
  },
  {
    hash: "4e71b0d",
    subject: "feat(scheduler): own the lab automation workflows",
    role: "Software Engineer",
    org: "Persist AI",
    location: "West Sacramento, CA",
    range: "Jun 2025 — present",
    stack: ["Python", "In-house scheduler", "Lab automation"],
    body: [
      { k: "rem", t: "Formulation builds and analysis staged by a person each time" },
      { k: "add", t: "Built and owned the automation workflows on our in-house" },
      { k: "add", t: "scheduler — encoding how specific formulations get built and" },
      { k: "add", t: "analyzed as runs the scheduler drives end to end" },
      { k: "ctx", t: "" },
      { k: "ctx", t: "Same protocol, same order, every time. That repeatability is" },
      { k: "ctx", t: "what makes two experiments actually comparable — a workflow" },
      { k: "ctx", t: "that drifts between runs produces data nobody can trust." },
    ],
    images: [
      {
        src: "/lab-workflows.webp",
        alt: "Ryan at a lab workstation, building automation workflows on screen",
        caption: "An actual picture of me making automation workflows",
      },
      {
        src: "/lab-floor.webp",
        alt: "The Persist AI automation lab floor, with robotic instruments and a scientist at work",
        caption: "A peek at the lab floor these workflows actually run on.",
      },
    ],
  },
  {
    hash: "b90c15e",
    subject: "feat(cloudlab): put the results in the customer's hands",
    role: "Software Engineer",
    org: "Persist AI",
    location: "West Sacramento, CA",
    range: "2025 — present",
    stack: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Data viz"],
    body: [
      { k: "rem", t: "Results delivered to customers as static files" },
      { k: "add", t: "Co-built CloudLab Viewer: customers upload formulation data" },
      { k: "add", t: "and explore it live as interactive graphs, charts, and tables" },
      { k: "add", t: "→ $10k+/month in company revenue" },
      { k: "ctx", t: "" },
      { k: "ctx", t: "This is the surface customers actually touch — the same place" },
      { k: "ctx", t: "they order an experiment and read what came back from it." },
      { k: "ctx", t: "Still building on it; see git status." },
    ],
  },
  {
    hash: "7c3fa88",
    subject: "feat(reports): AI-Karthik, a multi-modal RAG report generator",
    role: "Software Engineer",
    org: "Persist AI",
    location: "West Sacramento, CA",
    range: "Jun 2025 — Aug 2025",
    stack: ["Python", "LangChain", "OpenRouter", "Gemini", "Chroma", "FastAPI", "React"],
    body: [
      { k: "rem", t: "Reports assembled by hand from text, images, and tables" },
      { k: "add", t: "AI-Karthik — specialized agents that retrieve across all three" },
      { k: "add", t: "at once from the lab notebook, then draft the report a human" },
      { k: "add", t: "would have written" },
      { k: "add", t: "→ 70% faster reporting" },
      { k: "ctx", t: "" },
      { k: "add", t: "A watcher re-indexes Chroma and SQLite whenever the notebook" },
      { k: "add", t: "changes, so an answer is never quoting last week's data" },
      { k: "ctx", t: "" },
      { k: "ctx", t: "The hard part wasn't generation. It was retrieval that stays" },
      { k: "ctx", t: "honest when the underlying lab data moves under you." },
    ],
  },
  {
    hash: "7b2e104",
    subject: "feat(hephaestus): build the board the company runs on",
    role: "Software Engineer Intern",
    org: "Persist AI",
    location: "West Sacramento, CA",
    range: "Feb 2025 — Jun 2025",
    stack: ["React", "Python", "PostgreSQL"],
    body: [
      { k: "rem", t: "Task tracking scattered across tools and a Jira subscription" },
      { k: "add", t: "Hephaestus — a project management platform I led and shipped," },
      { k: "add", t: "adopted company-wide as the hub for task tracking and" },
      { k: "add", t: "cross-functional work" },
      { k: "add", t: "→ ~$5,000/year saved" },
      { k: "ctx", t: "" },
      { k: "ctx", t: "The first thing I scoped, shipped, and owned end to end — and" },
      { k: "ctx", t: "the first time I had to care what other people needed from a" },
      { k: "ctx", t: "tool, not just whether it worked." },
    ],
  },
  {
    hash: "0000000",
    subject: "initial commit",
    role: "B.S. Computer Science",
    org: "University of California, Davis",
    location: "Davis, CA",
    range: "Sep 2021 — Jun 2025",
    stack: ["Algorithms", "Systems", "Databases"],
    body: [
      { k: "add", t: "B.S. in Computer Science" },
    ],
    gallery: [
      {
        src: "/grad-1.jpeg",
        alt: "Ryan in cap and gown with friends after the UC Davis commencement",
        caption: "Commencement day — four years compiled into one afternoon.",
      },
      {
        src: "/grad-2.jpeg",
        alt: "Ryan and a friend in the sun",
        caption: "The people who made the all-nighters survivable.",
      },
      {
        src: "/grad-3.jpeg",
        alt: "Ryan with his family at graduation, holding a graduation Pikachu and flowers",
        caption: "With the family that got me to the stage — Pikachu included.",
      },
      {
        src: "/grad-4.jpeg",
        alt: "Ryan and a friend in cap and gown in front of a UC Davis backdrop",
        caption: "Aggie for life. Go Ags.",
      },
      {
        src: "/grad-5.jpeg",
        alt: "The ScoutAI team presenting on stage in front of a Scout AI slide",
        caption: "Pitching ScoutAI — the basketball project that started it all.",
      },
      {
        src: "/grad-6.jpeg",
        alt: "CodeLab cohort holding certificates of achievement",
        caption: "CodeLab demo night — a room full of people who ship.",
      },
      {
        src: "/grad-7.jpeg",
        alt: "Ryan with two friends at a party",
        caption: "The crew, off the clock.",
      },
      {
        src: "/grad-8.jpeg",
        alt: "Intramural basketball team posing on the bleachers",
        caption: "Intramural hoops — the only cardio I signed up for.",
      },
      {
        src: "/grad-9.jpeg",
        alt: "Group selfie with friends outside Golden 1 Center at night",
        caption: "Kings night at Golden 1 with the whole crew.",
      },
    ],
  },
];
