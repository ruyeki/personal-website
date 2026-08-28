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
    "Persist AI builds AI-driven drug formulation. I work where the software meets the lab bench — the instruments, the data coming off them, and the tools the scientists and customers actually open.",
};

export const staged: StatusEntry[] = [
  {
    state: "modified",
    path: "asd/opcua_workflows.py",
    note: "Autonomous dissolution, stability, and formulation runs over OPC-UA — the lab keeps working after everyone goes home.",
  },
  {
    state: "new file",
    path: "reports/agents/multimodal_rag.py",
    note: "Specialized agents that read text, images, and tabular results together, then write the lab report a human would have written.",
  },
  {
    state: "modified",
    path: "microscopy/amscope_driver.py",
    note: "XY stage control and brightfield capture, with particle detection and amorphous-vs-crystalline classification on the way out.",
  },
  {
    state: "new file",
    path: "cloudlab/viewer/",
    note: "Customer-facing: upload formulation data, explore it as interactive graphs, charts, and tables instead of emailed spreadsheets.",
  },
];

/** The headline numbers, shown as a diff against how things worked before. */
export const impactDiff: DiffLine[] = [
  { k: "ctx", t: "@@ persist-ai/lab @@" },
  { k: "rem", t: "Manual instrument setup for every dissolution run" },
  { k: "add", t: "~50% less manual work; 100–150 more samples per week" },
  { k: "ctx", t: "" },
  { k: "ctx", t: "@@ persist-ai/reporting @@" },
  { k: "rem", t: "Analysts hand-assembling reports from scattered results" },
  { k: "add", t: "70% faster reporting via a multi-modal RAG pipeline" },
  { k: "ctx", t: "" },
  { k: "ctx", t: "@@ persist-ai/cloudlab @@" },
  { k: "rem", t: "Results delivered as static files and screenshots" },
  { k: "add", t: "Self-serve viewer generating $10k+/month in revenue" },
];
