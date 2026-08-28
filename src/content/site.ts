import type { DiffLine, Remote } from "./types";

export const site = {
  name: "Ryan Uyeki",
  handle: "ruyeki",
  repo: "ruyeki/ryan",
  branch: "main",
  role: "Software Engineer",
  org: "Persist AI",
  location: "West Sacramento, CA",
  url: "https://ryanuyeki.vercel.app",
  email: "ruyeki2003@gmail.com",

  /** Used for <title> and OG. Keep it one line. */
  tagline:
    "Software engineer building lab automation and applied-AI tooling at Persist AI.",

  description:
    "Ryan Uyeki is a software engineer at Persist AI, where he builds OPC-UA lab automation, multi-modal RAG reporting, and customer-facing data tools for pharmaceutical formulation. UC Davis CS, 2025.",
} as const;

/** Anchors in the sticky header. `id` must match a <section id> on the page. */
export const nav = [
  { id: "status", label: "status" },
  { id: "log", label: "log" },
  { id: "branch", label: "branch" },
  { id: "stash", label: "stash" },
  { id: "remote", label: "remote" },
] as const;

/**
 * The hero "about" block, rendered as a diff. This is the one place the site
 * gets to have a voice — read it out loud before changing it.
 */
export const aboutDiff: DiffLine[] = [
  { k: "ctx", t: "Ryan Uyeki — software engineer, Sacramento CA." },
  { k: "rem", t: "CS student who liked building things on the side." },
  { k: "add", t: "Engineer who ships the boring, load-bearing parts:" },
  { k: "add", t: "instruments that run themselves, pipelines that don't" },
  { k: "add", t: "silently drop data, and interfaces people actually open." },
  { k: "ctx", t: "" },
  { k: "ctx", t: "Currently at Persist AI, where software talks to real" },
  { k: "ctx", t: "hardware and a bad assumption costs you a week of lab time." },
  { k: "rem", t: "Measured myself in features shipped." },
  { k: "add", t: "Measure myself in hours of manual work deleted." },
];

export const remotes: Remote[] = [
  {
    name: "origin",
    url: "github.com/ruyeki",
    href: "https://github.com/ruyeki",
    mode: "fetch",
  },
  {
    name: "linkedin",
    url: "linkedin.com/in/ruyeki",
    href: "https://www.linkedin.com/in/ruyeki/",
    mode: "fetch",
  },
  {
    name: "email",
    url: "ruyeki2003@gmail.com",
    href: "mailto:ruyeki2003@gmail.com",
    mode: "push",
  },
];
