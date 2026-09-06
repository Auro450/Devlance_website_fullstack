<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Devlance Website — Agent Guide & Repository Memory

## Project Overview & Ownership
- **Brand**: Devlance (`https://www.devlance.online`)
- **Founders**: Aurojyoti Kundu (`Auro450`), Somsubhra Abir Das (`aabir98`)
- **Primary Repo**: `https://github.com/Auro450/Devlance_website_fullstack.git`
- **Vercel Connected Repo**: `https://github.com/aabir98/Devlance.git` (upstream production)

## Tech Stack & Architecture
- **Framework**: Next.js 16 (Turbopack, App Router) with React 19 and TypeScript.
- **Styling**: Tailwind CSS v4.
- **Animations**: GSAP (`gsap`, `@gsap/react`, `ScrollTrigger`) with aggressive easing (`back.out(2.5)`), custom rolling text typography, and `lenis` for smooth momentum scrolling.
- **Database & ORM**: Prisma v7 with `@prisma/adapter-better-sqlite3`.
  - SQLite database: `dev.db`
  - Vercel Serverless note: On Vercel, SQLite is copied to `/tmp` in `src/lib/prisma.ts`.
  - Build script MUST always include `prisma generate && next build`.

## UI & Content Standards
- **Tone**: Bold, punchy, crispy, unapologetic, high-tier digital product engineering and growth agency.
- **Work Page (`/work`)**: Always position latest client projects and case studies at the very top (index 0).
- **External Links**: Use `target="_blank"` and `rel="noopener noreferrer"`.
- **Contact Nav**: Links to `/#contact` with smooth Lenis scroll intercept (`lenis.scrollTo(contactEl, { duration: 1.8 })`).
- **Brand Rows**: Use `<BrandRow />` with rolling hover text animation for client and service listings.

## Deployment Protocol
1. Verify with `npm run build` locally first.
2. Commit with descriptive feat/fix messages.
3. Push to `origin main` (`Auro450/Devlance_website_fullstack`).
4. Sync/PR with upstream `aabir98/Devlance` to trigger Vercel production builds on `www.devlance.online`.

