# Layth Aero — Web

Marketing site for Layth Aero, building long-endurance autonomous aircraft for
persistent maritime surveillance.

## Stack

- Next.js 15 (App Router) + React 19
- Tailwind CSS 4
- Framer Motion for scroll-reveal and parallax
- Inter / JetBrains Mono / Newsreader

## Development

```bash
pnpm install
pnpm dev     # http://localhost:3000
pnpm build   # production build
```

## Structure

```
app/
  layout.tsx     fonts, metadata, viewport
  globals.css    design tokens, keyframes, utilities
  page.tsx       section composition
components/
  nav.tsx        sticky top bar (logo + Request Brief)
  hero.tsx       parallax hero
  swarm.tsx      animated drone swarm with comms mesh
  sections.tsx   contact, footer
  motion.tsx     shared reveal primitives
  mark.tsx       logo mark
```

The contact form is presentational only — no backend is wired up; the
`info@laythaero.com` mailto link is the working contact path.

## Deploying to GitHub Pages

The site builds to a fully static export, so Pages can host it as-is.
`.github/workflows/deploy.yml` builds and publishes on every push to `main`.

One-time setup in the GitHub repo:

1. **Settings → Pages → Build and deployment → Source: GitHub Actions.**
2. Push to `main` (or run the workflow manually from the Actions tab).

The workflow reads the Pages subpath from `actions/configure-pages` and passes
it to the build as `BASE_PATH`, because a project site is served from
`/<repo>` rather than the domain root. It also writes `.nojekyll` so Pages
does not strip the `_next` asset directory.

To reproduce a Pages-identical build locally:

```bash
BASE_PATH=/<repo-name> pnpm build   # writes ./out
npx serve out                       # or any static file server
```

Leave `BASE_PATH` unset for local dev, a user/org site
(`<user>.github.io`), or a custom domain served from the root.
