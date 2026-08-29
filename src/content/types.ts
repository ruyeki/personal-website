/**
 * Shared content shapes.
 *
 * Everything the site renders comes from `src/content/*`. Components never
 * hardcode copy — edit the data here and the UI follows.
 */

/** One line inside a rendered diff block. */
export type DiffLine = {
  /** `add` renders green with `+`, `rem` red with `-`, `ctx` is unchanged context. */
  k: "add" | "rem" | "ctx";
  t: string;
};

/** A `git status` entry — something in flight right now. */
export type StatusEntry = {
  state: "modified" | "new file" | "renamed";
  path: string;
  note: string;
};

/** A commit in the work history log. */
export type Commit = {
  hash: string;
  /** Conventional-commit style subject line. */
  subject: string;
  role: string;
  org: string;
  location: string;
  range: string;
  /** e.g. `["HEAD", "origin/main"]` — rendered as decorations after the hash. */
  refs?: string[];
  stack: string[];
  /** Shown when the commit is expanded. */
  body: DiffLine[];
  /** Optional images, shown side by side when the commit is expanded. `src` is a /public path. */
  images?: { src: string; alt: string; caption: string }[];
  /** Optional photo gallery, shown as a clickable slideshow when the commit is expanded. */
  gallery?: { src: string; alt: string; caption: string }[];
  /** Optional repo/site links for work that has something public to point at. */
  links?: { label: string; href: string }[];
};

/** A side project, modelled as a branch. */
export type Branch = {
  /** Full ref name, e.g. `feat/scout-ai`. */
  name: string;
  title: string;
  state: "active" | "merged" | "shipped";
  range: string;
  blurb: string;
  stack: string[];
  links: { label: string; href: string }[];
  /** Optional "what's coming" note, rendered as a TODO callout under the blurb. */
  next?: string;
  /** Drives the little diffstat bar. Rough by design — it's a vibe, not telemetry. */
  stat: { add: number; rem: number };
};

/** A `git stash` entry — the non-code stuff. */
export type StashEntry = {
  /** Branch this was stashed on. Flavour text. */
  on: string;
  title: string;
  body: string;
};

/** A group of skills, rendered as a `git config` INI section. */
export type SkillGroup = {
  /** INI section name, e.g. `languages`. Lowercase, no spaces. */
  section: string;
  items: string[];
};

/** A `git remote -v` row — contact links. */
export type Remote = {
  name: string;
  url: string;
  href: string;
  mode: "fetch" | "push";
};
