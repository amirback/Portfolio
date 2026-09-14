# Portfolio — Amirkhan Panaguzhiyev

Single page, Next.js App Router + TypeScript + TailwindCSS. No client data, no analytics,
no forms, no storage.

## Commands

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm start
```

## Where things live

```
app/
  layout.tsx            fonts, <html lang="en">, SEO + OG metadata
  page.tsx              the page: order of sections, nothing but structure
  globals.css           the whole design system (colours, type scale, rules, reveal)
  opengraph-image.tsx   1200×630 OG card, generated from the hero text
  icon.svg              favicon
components/
  Photo.tsx             one photo slot; grey placeholder until a file is set
  Reveal.tsx            fade + 14px rise on entry, skipped under prefers-reduced-motion
content/
  portfolio.ts          every word on the site
  photos.ts             every image path on the site
public/photos/          put real photos here
```

## Adding a photo

Drop the file in `public/photos/`, then set `src` on the matching entry in
`content/photos.ts`:

```ts
{ id: "portrait", src: "/photos/portrait.jpg", alt: "...", caption: "портрет", ratio: "4:5" }
```

While `src` is `null` the slot renders as a grey block with its caption. Ratios are
fixed per slot: `4:5` for the hero portrait, `3:2` everywhere else — crop to match.

## Deploying

Pushes to `main` deploy on Vercel. `NEXT_PUBLIC_SITE_URL` overrides the canonical /
OG base URL; without it the Vercel production domain is used.
