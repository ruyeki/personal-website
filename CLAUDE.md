# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Next.js dev server with Turbopack (http://localhost:3000)
npm run build    # Production build
npm run start    # Serve the production build
npm run lint     # eslint --fix (auto-fixes; this is the only check — there are no tests)
```

There is no test suite, no typecheck script (rely on the editor / `next build`), and **no lockfile** — `.npmrc` sets `package-lock=false`, so use `npm install` and do not commit a `package-lock.json`.

## Architecture

Personal portfolio for Ryan Uyeki, deployed to Vercel (https://ryanuyeki.vercel.app). Originally scaffolded from the **HeroUI Next.js App Router template**, but redesigned into a **clean, minimal, serif-typeset** site (warm-dark background, gold `#c9a36b` accent). Much of the HeroUI scaffolding is now dormant.

- **Next.js 15 App Router** (`app/`). Two routes:
  - [app/page.tsx](app/page.tsx) — the home page (a server component) stacks the sections in order: `SiteHeader → Experience → Education → Project → Skills`. To add/reorder content, edit this composition and the corresponding component in [components/](components/). These section components are server components (plain presentational markup with data arrays inline).
  - [app/ai-ryan/page.tsx](app/ai-ryan/page.tsx) — the "AI Ryan" chatbot page, which renders the client component [components/ai-ryan-chat.tsx](components/ai-ryan-chat.tsx).
- [app/layout.tsx](app/layout.tsx) is the shell: `Providers` + the minimal [components/navbar.tsx](components/navbar.tsx) (a `"use client"` nav with just **Home** / **AI Ryan**, active link underlined via `usePathname`) + a centered `max-w-3xl` `<main>` + footer. Default theme is **dark** and the design is effectively dark-only (no theme switch in the UI).
- [app/providers.tsx](app/providers.tsx) composes `HeroUIProvider` + `next-themes`. (HeroUIProvider is retained but no HeroUI components are rendered anymore.)

### AI Ryan chatbot
[components/ai-ryan-chat.tsx](components/ai-ryan-chat.tsx) POSTs `{ inputMessage }` to an external backend (`https://personal-website-backend-q46x.onrender.com/chat`) with `credentials: "include"`, expecting `{ data }` back. The backend is a separate repo/service, not in this codebase; the render.com host is hard-coded here.

### UI stack & styling
- **Tailwind** is the styling system. The serif typeface (**Source Serif 4**) is set as `font-serif` on `<body>` and is the default for the whole site; configured in [config/fonts.ts](config/fonts.ts) + [tailwind.config.js](tailwind.config.js). `Inter`/`Fira Code` are still exported but unused.
- Theme colors are CSS variables in [styles/globals.css](styles/globals.css) (`.dark` block holds the real palette). `--background`/`--foreground` use the `<alpha-value>` form in [tailwind.config.js](tailwind.config.js) so opacity modifiers like `text-foreground/55` work. The gold accent (`#c9a36b`) is applied as an **arbitrary value** in classes (`text-[#c9a36b]`), not a theme token.
- Social/UI icons come from **lucide-react**. The bespoke SVGs and company-logo `<Image>` components in [components/icons.tsx](components/icons.tsx) remain but most are now unused.
- **Dormant from the template** (installed, configured, but NOT rendered): HeroUI (`@heroui/*`), shadcn/ui ([components.json](components.json) + `cn()` in [lib/utils.ts](lib/utils.ts)), MUI, the animation libs (`framer-motion`/`gsap`/`three`/`ogl`), [components/magicui/](components/magicui/), [components/primitives.ts](components/primitives.ts), [components/theme-switch.tsx](components/theme-switch.tsx). Don't assume these are in use — grep before relying on them.

### Conventions
- Path alias `@/*` maps to the repo root (see [tsconfig.json](tsconfig.json)) — import as `@/components/...`, `@/config/...`.
- Section components keep their content in a typed array at the top of the file (see [components/experience.tsx](components/experience.tsx), [components/project.tsx](components/project.tsx)) and `.map()` it — edit the array to change content. Company logos live in `assets/` and are imported as static images.
- Only the `links` in [config/site.ts](config/site.ts) are meaningful (github/linkedin/email); the `name`/`navItems`/`navMenuItems` are leftover template defaults the UI does not use.
- ESLint config ([eslint.config.mjs](eslint.config.mjs)) enforces prettier, import ordering, unused-import removal, and jsx-a11y — `npm run lint` auto-fixes most of it.
