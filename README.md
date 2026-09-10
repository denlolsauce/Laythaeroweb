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
  nav.tsx        sticky nav + mobile menu
  hero.tsx       parallax hero with live radar scope
  radar.tsx      animated maritime radar with contact acquisition
  sections.tsx   ticker, thesis, platform, capability, autonomy, company, contact, footer
  motion.tsx     shared reveal primitives
  mark.tsx       logo mark
```

The contact form is presentational only — no backend is wired up.
