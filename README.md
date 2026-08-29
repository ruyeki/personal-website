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
