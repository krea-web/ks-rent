# KS Rent Sardinia — Astro SSG

Sito statico Astro 5 (output `static`) per [ksrentsardinia.com](https://www.ksrentsardinia.com).

Migrazione da Vite + React SPA → Astro SSG eseguita per risolvere il problema di indicizzazione (Google indicizzava solo 6-7 pagine su 59 a causa di rendering client-side, contenuti duplicati e dipendenza da Prerender.io). Vedi [`../CLAUDE.md`](../CLAUDE.md) per il contesto SEO/AEO/GEO completo.

## Stack

- **Astro 5** in modalità `static` (zero JS di default)
- **@astrojs/react** — riuso 1:1 dei componenti React esistenti come isole
- **@astrojs/tailwind** — riuso della config Tailwind 3 esistente
- **@astrojs/sitemap** — sitemap automatico
- **astro-compress** — minify HTML/CSS/JS
- **Supabase** — fetch a build (`getStaticPaths`) per le 41 pagine dinamiche

## Struttura

```
astro-app/
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro      # head globale, meta, JSON-LD organization, GA4
│   ├── pages/
│   │   ├── index.astro            # /
│   │   ├── chisiamo.astro         # /chisiamo
│   │   ├── flotta.astro           # /flotta
│   │   ├── prenotaora.astro       # /prenotaora
│   │   ├── noleggio-auto-*.astro  # 4 landing servizi
│   │   ├── admin.astro / login.astro
│   │   ├── 404.astro
│   │   └── [slug].astro           # 41 pagine dinamiche (località + spiagge) via SSG
│   ├── views/                     # Componenti React per le pagine (Index, Flotta, ecc.)
│   ├── components/                # UI components condivisi (Navbar, Footer, ecc.)
│   ├── lib/
│   │   ├── supabase.ts
│   │   ├── jsonLd.ts              # JSON-LD builders
│   │   ├── dynamic-page-helpers.ts # helpers SEO per [slug].astro
│   │   ├── router-shim.tsx        # shim Link/NavLink per evitare react-router
│   │   └── ...
│   ├── data/                      # locality-content.ts (FAQ + tips per slug)
│   ├── hooks/, types/
│   └── index.css                  # Tailwind base
├── public/                        # robots, manifest, IndexNow keys, favicon
├── scripts/
│   ├── indexnow-ping.mjs          # IndexNow ping post-deploy
│   └── DEPLOY.md                  # docs deploy + Supabase webhook
├── astro.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

## Comandi

```bash
npm install         # prima volta
npm run dev         # dev server (localhost:4321)
npm run build       # build statico in dist/ (~12-21 s)
npm run preview     # preview locale del dist/
npm run indexnow    # ping IndexNow su tutte le URL del sitemap (post-deploy)
```

## Variabili d'ambiente

Vedi `.env.example`. Necessarie:

- `PUBLIC_SUPABASE_URL`
- `PUBLIC_SUPABASE_ANON_KEY`
- `PUBLIC_GOOGLE_MAPS_API_KEY`
- `PUBLIC_SITE_URL` (default `https://www.ksrentsardinia.com`)

## Pipeline aggiornamento contenuti

Modifica record in `seo_locations`/`seo_beaches` su Supabase → webhook Supabase → Vercel Deploy Hook → Vercel rebuilda → live in ~90 s. Vedi [`scripts/DEPLOY.md`](scripts/DEPLOY.md) per il setup completo.
