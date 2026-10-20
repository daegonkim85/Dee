# Dee Kim — Portfolio

A code-based portfolio for **Dee Kim**, a Los Angeles product designer (9+ years; currently Senior Product Designer at Disney) positioning as an AI-leveraging product designer expanding into advertising and creative work.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS**, with **Framer Motion** for subtle motion and **next-themes** for light/dark mode.

## Design direction

Light editorial minimalism — large grotesk-style display headlines, small-caps eyebrows, hairline rules, generous whitespace, and a single bolder accent color (vermillion) that leans into the creative/advertising angle. Light and dark themes are both first-class.

## Stack

- Next.js 15 (App Router, React 19)
- TypeScript (strict)
- Tailwind CSS 3 with CSS-variable design tokens (see `src/app/globals.css`)
- Framer Motion (hero word-reveal + scroll reveals)
- next-themes (class-based light/dark toggle)
- next/font (Inter for text, JetBrains Mono for meta)

## Structure

```
src/
  app/
    layout.tsx           # root layout, fonts, theme provider, nav, footer
    page.tsx             # home — hero + featured work + intro
    work/page.tsx        # work index (published + coming soon)
    work/[slug]/page.tsx # case-study template (SSG via generateStaticParams)
    about/page.tsx       # bio, experience timeline, approach, skills + AI tools
    ai/page.tsx          # LLM-readable structured profile
    sitemap.ts / robots.ts
  components/             # nav, footer, hero, theme toggle, work card, placeholder, reveal
  content/               # site.ts, work.ts (case data), about.ts
```

Case studies are managed as structured data in `src/content/work.ts` — each entry renders through the shared template at `src/app/work/[slug]/page.tsx`. Imagery is currently **clearly-marked placeholders** (`src/components/placeholder.tsx`); swap in real assets via `next/image` when available.

### Content defaults chosen during build

- **Featured projects (3):** Turo – Admin Tool, WeWork – Pricing Management Tool, RingCentral – Breakout Rooms. These give product range plus a 0→1 story reframed toward craft and ideas.
- **District & Coupang** are kept as "Coming Soon" teasers, as in the current site.
- **Accent color:** vermillion (`--accent`), slightly bolder to support the creative lean. Adjust the `--accent` tokens in `globals.css` to retune.
- Copy, metrics, and "AI in the process" notes are reframed/illustrative placeholders pending Dee's sign-off on exact figures.

## Local development

```bash
cd portfolio
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (must pass)
npm run start    # serve the production build
npm run lint     # eslint
```

## Deploying to Vercel

1. Push this repo to GitHub.
2. In [Vercel](https://vercel.com/new), **Import** the repository.
3. Set the **Root Directory** to `portfolio/` (this app is a sibling of other projects in the repo).
4. Framework preset auto-detects **Next.js**. Build command `next build`, output handled automatically.
5. Deploy. Every push to the default branch triggers a production deploy; PRs get preview deploys.

### Custom domain

1. In the Vercel project → **Settings → Domains**, add your domain (e.g. `deekim.design`).
2. At your registrar, point DNS as Vercel instructs:
   - Apex (`deekim.design`): `A` record → `76.76.21.21`.
   - `www`: `CNAME` → `cname.vercel-dns.com`.
3. Wait for DNS to propagate; Vercel issues the SSL certificate automatically.
4. Update `site.meta.url` in `src/content/site.ts` to the final domain so metadata, sitemap, and the `/ai` profile use canonical URLs.

## Notes

- `src/content/site.ts` holds name, links (Dribbble, LinkedIn, email), nav, and SEO metadata.
- The résumé link points to `/dee-kim-resume.pdf` (replace the placeholder in `public/`).
- Respects `prefers-reduced-motion` — animations are skipped for users who opt out.
