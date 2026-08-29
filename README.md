# https://ryanuyeki.vercel.app/

A personal site that reads like a repository. Each section is a git command:

| Section       | Command          | Holds                              |
| ------------- | ---------------- | ---------------------------------- |
| Hero          | `whoami`         | Intro, plus "about, as a diff"     |
| Current work  | `git status`     | What's in flight at Persist AI now |
| Work history  | `git log`        | Every role, expandable into a diff |
| Side projects | `git branch -a`  | Projects on a branch graph         |
| Free time     | `git stash list` | The non-code stuff                 |
| Contact       | `git remote -v`  | Links                              |

## Running it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export-able production build
```

## Editing content — start here

**No copy lives in a component.** Everything renders from `src/content/`, so
you can update the site without touching layout code:

| File                       | What it controls                                                 |
| -------------------------- | ---------------------------------------------------------------- |
| `src/content/site.ts`      | Name, role, nav items, the hero `about` diff, contact remotes     |
| `src/content/status.ts`    | Current work + the impact diff. **Most time-sensitive file here.** |
| `src/content/log.ts`       | Work history. Newest commit first; `refs: ["HEAD"]` marks current |
| `src/content/branches.ts`  | Side projects                                                    |
| `src/content/stash.ts`     | Free time — **written as scaffolding, meant to be replaced**      |
| `src/content/types.ts`     | The shapes above. Read this if you're adding a field             |

### Writing a diff

`DiffLine[]` drives every diff block:

```ts
{ k: "rem", t: "How it worked before" }   // red,   prefixed −
{ k: "add", t: "What I changed it to" }   // green, prefixed +
{ k: "ctx", t: "Unchanged context" }      // muted, no prefix
{ k: "ctx", t: "" }                        // blank spacer row
{ k: "ctx", t: "@@ section-name @@" }      // renders as a hunk header
```

Line numbers are synthesised in `DiffBlock.tsx` — add/remove lines freely and
the gutters stay consistent. The convention worth keeping: **`-` is the world
before you, `+` is what you left behind.**

## Design notes

- **No component library.** Plain Next.js + Tailwind v4. Design tokens are CSS
  custom properties at the top of `src/app/globals.css`; change a palette there
  and both themes follow.
- **Dark by default**, `.light` on `<html>` opts into the paper theme. The
  no-flash script lives in `layout.tsx`.
- **Two typefaces, on purpose.** JetBrains Mono for git chrome (paths, hashes,
  diffs, pills); Inter via the `.prose` class for anything that's a real
  sentence. Mono-everywhere was tried and hurt readability.
- **Cascade gotcha:** component classes in `globals.css` are *unlayered*, so
  they beat Tailwind utilities in `@layer utilities`. An element with both
  `.pill` and `hidden` will stay visible — put the responsive class on a
  wrapper instead. Same reason `.no-bar` is defined in `globals.css` rather
  than as an arbitrary variant.

## Structure

```
src/
├── app/
│   ├── globals.css     design tokens + component classes
│   ├── layout.tsx      fonts, metadata, JSON-LD, theme script
│   └── page.tsx        section order
├── components/
│   ├── DiffBlock.tsx   the diff renderer everything is built from
│   ├── Nav.tsx         sticky repo header + scroll-spy
│   ├── Reveal.tsx      scroll-in animation wrapper
│   └── *Section.tsx    one per section, all read from src/content
└── content/            ← all copy lives here
```
