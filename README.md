# wax.contact

Premium domain sales landing page for **[wax.contact](https://wax.contact/)** — a global `.contact` domain for professional hair removal and waxing brands.

Asking price: **$100,000**. Direct owner sale via `sales@desertrich.com`.

Built with Astro, Tailwind CSS v4, and Cloudflare Workers Static Assets (Workers Builds auto-deploys from `main`).

## Features

- Full-bleed hero with looping Cloudflare Stream video
- Conversion-focused acquisition form + sticky mobile CTA
- Mobile-first layout with safe-area support
- SEO: canonical URLs, Open Graph/Twitter cards, Product + FAQ + Breadcrumb JSON-LD, sitemap, security headers
- www → apex redirect in the Worker

## Local development

```bash
npm install
npm run dev -- --port 43123 --host 127.0.0.1
```

Open [http://127.0.0.1:43123](http://127.0.0.1:43123).

## Build & deploy

```bash
npm run build
npm run deploy   # requires Wrangler auth
```

Pushing to `main` on GitHub also triggers Cloudflare Workers Builds for `wax-contact-v1`.

Static output lands in `dist/`.
