import type { DiffLine, StatusEntry } from "./types";

/**
 * `git status` — what's actually on my desk right now at Persist AI.
 * Update this when the work changes; it's the most time-sensitive file here.
 */

export const statusMeta = {
  branch: "persist-ai/main",
  upstream: "origin/persist-ai",
  since: "June 2025",
  summary:
    "I work across two products — Persist-AI-Suite, our multi-agent formulator, and the Cloud Lab customers order experiments through — and run the sprint for both.",
};

export const staged: StatusEntry[] = [
  {
    state: "new file",
    path: "nike/agents/formulators/",
    note: "Integrating specialized formulator agents into Persist-AI-Suite, our multi-agent AI formulator. Each one widens the range of formulations the system can reason about, which is time a scientist doesn't spend starting from a blank page.",
  },
  {
    state: "new file",
    path: "nike/tests/",
    note: "Wrote and own the entire test suite. Persist-AI-Suite's output turns into real experiments, so a silent regression costs bench time and material — not just a red build.",
  },
  {
    state: "modified",
    path: "nike/app/",
    note: "Working across the whole software side: shipping features, fixing bugs, and keeping the platform coherent as new agents land in it.",
  },
  {
    state: "new file",
    path: "cloudlab/sharing/",
    note: "Sharing and notification system for the Cloud Lab, where customers design a formulation and we build, run, and return the results. Keeps both sides in sync without anyone refreshing a page or chasing an email.",
  },
  {
    state: "new file",
    path: "cloudlab/admin/",
    note: "Admin tooling for uploading result files and client onboarding files — the path every customer's data takes into and out of the lab.",
  },
  {
    state: "new file",
    path: "cloudlab/theme/dark.ts",
    note: "Dark mode across the Cloud Lab, because the people reading result dashboards are not always doing it at noon.",
  },
  {
    state: "modified",
    path: "team/sprint-board",
    note: "Scrum master on both projects: assigning work, sizing story points, and keeping the board honest so the team knows what's actually in flight.",
  },
  {
    state: "modified",
    path: "team/interns/",
    note: "And on top of all of that, mentoring a high school intern — scoping their projects, running weekly check-ins, and coaching them through the parts of the job that never make it into a ticket.",
  },
];

/** Where the work has moved, shown as a diff against how things ran before. */
export const impactDiff: DiffLine[] = [
  { k: "ctx", t: "@@ nike @@" },
  { k: "rem", t: "Candidate formulations designed and evaluated by hand" },
  { k: "add", t: "A multi-agent system that proposes them, behind a test suite" },
  { k: "add", t: "that catches regressions before they reach a real experiment" },
  { k: "ctx", t: "" },
  { k: "ctx", t: "@@ cloudlab @@" },
  { k: "rem", t: "Customers waiting on email for status and results" },
  { k: "add", t: "Self-serve: design a formulation, follow the run, get notified" },
  { k: "ctx", t: "" },
  { k: "ctx", t: "@@ team @@" },
  { k: "rem", t: "Heads-down individual contributor" },
  { k: "add", t: "Scrum master on both projects; mentoring the intern cohort" },
];
