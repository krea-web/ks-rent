# KS Rent Sardinia

Sito web ufficiale di **KS Rent Sardinia** — autonoleggio premium a Olbia, Costa Smeralda e Gallura.

## Stack

- **Framework**: React 18 + TypeScript 5
- **Build**: Vite 5 (SWC)
- **Styling**: Tailwind CSS 3 + shadcn/ui
- **Routing**: React Router v6
- **Database**: Supabase (PostgreSQL)
- **Deploy**: Vercel
- **SEO**: react-helmet-async + JSON-LD strutturato
- **Prerender**: Prerender.io (SSR per bot)

## Sviluppo locale

```sh
npm install
npm run dev
```

Il server parte su `http://localhost:8080`.

## Build

```sh
npm run build
```

Genera il bundle in `dist/` e rigenera automaticamente `public/sitemap.xml`.

## Deploy

Il deploy avviene automaticamente su **Vercel** al push su `main`.

## Struttura

```
src/
  pages/          # Pagine (Index, Flotta, ChiSiamo, PrenotaOra, DynamicPage...)
  components/     # Componenti riutilizzabili (SEOHead, FAQSection, Navbar...)
  lib/            # Utility (jsonLd, supabase, analytics)
  data/           # Contenuti SEO per-pagina (locality-content, locality-extra)
public/
  sitemap.xml     # Generato automaticamente
  robots.txt      # Regole crawler
  manifest.webmanifest
```
