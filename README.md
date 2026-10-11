# Ariful Islam — portfolio

A single-page portfolio. Next.js App Router, Tailwind CSS v4, fully static, deployed on Vercel.

**Live:** _(fill in once Vercel is connected)_

---

## Run it

```bash
npm install
npm run dev          # http://localhost:3000
```

```bash
npm run build && npm start   # the production build, locally
npx eslint .                 # lint
```

Node 20 or newer.

## Where things are

| Path              | What                                                              |
| ----------------- | ----------------------------------------------------------------- |
| `lib/content.ts`  | **Everything the site says.** Edit this and nothing else, usually. |
| `app/page.tsx`    | The section order.                                                 |
| `app/layout.tsx`  | Fonts, `<head>` metadata, link-preview tags.                       |
| `app/globals.css` | The palette, the type scale, the small shared classes.             |
| `components/`     | One file per section, plus `Reveal`, `Nav`, `Gallery`.             |
| `public/work/`    | Dashboard screenshots.                                             |
| `public/cv/`      | The two CV PDFs the site offers for download.                      |

## Changing the content

Open `lib/content.ts`. It holds the hero copy, the impact figures, every project,
the experience and education entries, the stack groups, the references and the
contact links. The components read from it, so adding a project means adding an
object to the `projects` array — no JSX to touch.

Two things live outside it:

- **The CV files** — replace `public/cv/Ariful-Islam-CV.pdf` and
  `public/cv/Ariful-Islam-CV-Europass.pdf` with newer exports, keeping the names.
- **The portrait** — `public/ariful-islam.jpg`.

## The palette

Defined once, as CSS custom properties in `app/globals.css`:

| Token             | Value     | Used for                       |
| ----------------- | --------- | ------------------------------ |
| `--color-paper`   | `#faf8f3` | the page                       |
| `--color-paper-2` | `#f4f1e9` | alternating sections           |
| `--color-ink`     | `#16140f` | body text, the contact section |
| `--color-muted`   | `#6e6658` | secondary text                 |
| `--color-line`    | `#e2dccf` | hairlines and borders          |
| `--color-accent`  | `#9a4a2b` | section numbers, emphasis      |

Changing one here changes it everywhere.

## Deploying

Push to `main` and Vercel builds and deploys. No environment variables are
required. `NEXT_PUBLIC_SITE_URL` is optional and only sets the canonical URL in
`<head>` and in `sitemap.xml` — set it if you point a custom domain at the site.

## A note on the screenshots

`public/work/` holds captures of Odoo dashboards built at Tex Fasteners, taken
from the neutralised testing database. They carry real item names and figures.
Swap or redact them before sharing widely if that is a concern.
