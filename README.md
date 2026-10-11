# Ariful Islam — portfolio

A single-page portfolio. Next.js App Router, Tailwind CSS v4, fully static, deployed on Vercel.

Dark by default with a light mode, a particle-text hero on canvas, a LinkedIn-style
work history, and project rows whose device mockups open a full-screen album.

**Live:** https://arifulislam-portfolio.vercel.app

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
| `components/`     | One file per section, plus `Reveal`, `Nav`, `ParticleName`, `Lightbox`. |
| `scripts/cv/`     | The HTML source of the one-page CV.                                |
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

Push to `main` and Vercel builds and deploys. The project is
`portfolio` under `kamrul0628-gmailcom's projects`, linked to this repo.

One production environment variable is set:

| Variable               | Value                                      | Why                                                                   |
| ---------------------- | ------------------------------------------ | --------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | `https://arifulislam-portfolio.vercel.app` | The canonical URL in `<head>`, in `sitemap.xml` and on the link preview |

Point a custom domain at the site and that variable is the one to change,
otherwise search engines keep being told the `.vercel.app` address is canonical.

## Regenerating the CV

`public/cv/Ariful-Islam-CV.pdf` is printed from `scripts/cv/Ariful-Islam-CV.html`.
To change it, edit the HTML, open it in Chrome, and print to PDF with:

- **Destination:** Save as PDF
- **Paper:** A4 · **Margins:** None · **Scale:** Default
- **Background graphics:** on

Save over `public/cv/Ariful-Islam-CV.pdf`. It is built to fit exactly one page —
if you add a bullet, check it has not spilled onto a second.

The Europass CV in the same folder is exported from the Europass site, not built
here.

## The theme

Dark is the default. The choice is stored in `localStorage` under `theme` and
applied by a small inline script in `app/layout.tsx` before the first paint, so
a light-mode visitor never sees a black flash. Both palettes live at the top of
`app/globals.css` as `:root[data-theme="dark"]` and `:root[data-theme="light"]`.

## A note on the screenshots

`public/work/` holds:

- **Odoo boards** captured at Tex Fasteners from the neutralised testing
  database. They carry real item names and figures.
- **Bravo Secure** screens rendered from the project's own HTML previews.
- **Exzellent** dashboards from the product's preview assets.
- **MKY** chat UI rendered from the project's own front end.

Swap or redact the Odoo ones before sharing widely if that is a concern.
