# CLAUDE.md — KS Rent Sardinia | Stack Astro 5 SSG + Multilingua

> **Prima di fare qualsiasi cosa, leggi questo file intero. Poi esegui il PASSO 0.**

---

## PASSO 0 — LETTURA OBBLIGATORIA DEL REPO PRIMA DI INIZIARE

Prima di scrivere una riga di codice, leggi questi file per capire la struttura reale del progetto:

```
# 1. Configurazione build + i18n
astro.config.mjs

# 2. Layout principale (meta tags, hreflang auto-injected, JSON-LD, switcher lingua)
src/layouts/BaseLayout.astro

# 3. Pagine dinamiche multilingua
src/pages/[slug].astro                    # IT default (località + spiagge)
src/pages/flotta/[slug].astro             # IT default (veicoli)
src/pages/[lang]/[slug].astro             # EN/DE/FR (località + spiagge)
src/pages/[lang]/flotta/[slug].astro      # EN/DE/FR (veicoli)

# 4. Schema JSON-LD (LocalBusiness, Vehicle, Breadcrumb, FAQ)
src/lib/jsonLd.ts

# 5. Helper i18n e dizionari UI 4 lingue
src/lib/i18n.ts
src/i18n/it.ts | en.ts | de.ts | fr.ts | index.ts

# 6. Admin (6 sezioni: Dashboard, Flotta, Manutenzione, Noleggi, SEO Editor, Reviews)
src/views/Admin.tsx
src/components/admin/sections/

# 7. Sitemap + redirect Vercel
public/sitemap-index.xml (generato al build)
vercel.json

# 8. Scripts SEO operativi
scripts/seo-similarity.mjs
scripts/audit-supabase-seo.mjs
scripts/indexnow-ping.mjs
scripts/fetch-google-reviews.mjs
scripts/export-seo-content.mjs
```

**Non procedere finché non hai letto tutti questi file.**

---

## IDENTITÀ DEL PROGETTO

| Campo | Valore |
|-------|--------|
| **Sito** | `https://www.ksrentsardinia.com` |
| **Business** | KS Rent Sardinia — Noleggio auto di lusso, SUV, supercar, moto, quad a Olbia, Gallura e Costa Smeralda |
| **Ragione sociale** | KS Rent S.R.L. |
| **P.IVA** | IT03028900904 |
| **REA** | SS - 224046 |
| **Capitale sociale** | 20.000,00 EUR |
| **PEC** | ks.rent.srl@pec.it |
| **Email** | ksrentsrl@gmail.com |
| **Telefono** | +393446107071 |
| **Data apertura** | 8 aprile 2025 |
| **Sede operativa** | Viale Isola Bianca 38, 07026 Olbia (SS) — coord: 40.922967, 9.520115 |
| **Sede legale** | Viale Aldo Moro 367, 07026 Olbia (SS) — coord: 40.944573, 9.497897 |
| **Indirizzo principale GBP** | Viale Aldo Moro 367 (sede legale) ⚠️ decisione pending se spostare a Isola Bianca |
| **Orari** | 10:00–13:00 + 15:00–22:30 (chiusura pranzo), 7 giorni su 7 |
| **Place ID (Google Maps)** | `ChIJP6b_YdBL2RIRkp3GdDzDwYU` — CID `9638199341974199698` |
| **Categoria GBP primaria** | Agenzia di noleggio auto (`car_rental`) |
| **Entità legale distinta da** | KS Rent S.r.l. (Roma) — sito `ksrent.it` — **NON siamo loro** |

### Social
- Instagram: `https://www.instagram.com/ksrentsardinia`
- TikTok: `https://www.tiktok.com/@ksrentsardinia`
- Tripadvisor: `https://www.tripadvisor.it/Attraction_Review-g187883-d34295915-...`

### Asset
- Logo: `https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/asset/KSRENTlogo.png`
- OG image: 1200×630 trasformata via Supabase image render
- Favicon: `https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/asset/ksrent-favicon.webp`

---

## STACK TECNICO (post-migrazione Vite SPA → Astro 5 SSG)

| Tecnologia | Dettaglio |
|------------|-----------|
| **Framework** | **Astro 5.18 SSG** (output `static`, no adapter, deploy CDN su Vercel) |
| **Build** | Astro + Vite 5 + SWC |
| **Styling** | Tailwind CSS 3.4 con `@astrojs/tailwind` |
| **React** | 18.3 — usato come **island** (`client:load`/`client:visible`) per Navbar, Booking form, Admin, FleetShowcase, Maps |
| **SEO meta + JSON-LD** | Iniezione **statica** in `<head>` via `BaseLayout.astro`. NO react-helmet-async, NO Prerender.io |
| **i18n** | Nativo Astro 5 — `defaultLocale: "it"` senza prefisso, `en/de/fr` con prefisso, `prefixDefaultLocale: false` |
| **Database** | Supabase (PostgreSQL) — vedi schema sotto |
| **Deploy** | Vercel (static + redirects + headers in `vercel.json`) |
| **Analytics** | GA4 `G-1JL353W8QW` + Google Ads `AW-18006357660` |
| **Privacy** | iubenda |
| **UI Components** | shadcn/ui (Radix) + Framer Motion (shimmed per drop-in) |
| **Maps** | @react-google-maps/api (in island `client:visible`) |
| **PDF** | jspdf + jspdf-autotable (admin: contratti) |

### Componenti SEO chiave
- [src/layouts/BaseLayout.astro](src/layouts/BaseLayout.astro) — hub unico per `<title>`, `<meta>`, canonical, **hreflang auto-injected**, Open Graph, Twitter, JSON-LD (LocalBusiness statico + AggregateRating dinamico se passato + Breadcrumb auto-injected via prop + FAQPage globale opzionale + custom array).
- [src/lib/jsonLd.ts](src/lib/jsonLd.ts) — builder per Vehicle, Breadcrumb (`buildBreadcrumbJsonLd`), FAQ, Service, Beach, Location.
- `src/components/SEOHead.tsx` — **stub legacy**, non usare. Tutto passa da BaseLayout.

---

## ARCHITETTURA i18n (4 lingue)

### Routing URL
- **IT** (default, no prefisso): `/`, `/flotta`, `/tariffe`, `/noleggio-auto-porto-cervo`, `/flotta/audi-rs3`
- **EN**: `/en/`, `/en/fleet`, `/en/rates`, `/en/{slug_en}`, `/en/flotta/{slug_en}`
- **DE**: `/de/`, `/de/fuhrpark`, `/de/preise`, `/de/{slug_de}`, `/de/flotta/{slug_de}`
- **FR**: `/fr/`, `/fr/flotte`, `/fr/tarifs`, `/fr/{slug_fr}`, `/fr/flotta/{slug_fr}`

### Dove vivono le traduzioni

| Tipo contenuto | Storage | File / colonna |
|----------------|---------|----------------|
| **UI strings** (CTA, navbar, footer, label form) | Codice TS | `src/i18n/{it,en,de,fr}.ts` — stessa struttura, stesse chiavi |
| **Pagine statiche** (landing, hero, FAQ globali) | File `.astro` | `src/pages/{en,de,fr}/*.astro` (file separati per lingua) |
| **Contenuti dinamici** (località, spiagge, veicoli) | Supabase | Colonne `_en`, `_de`, `_fr` su `seo_locations`, `seo_beaches`, `seo_vehicles` |

### Regole di pubblicazione contenuti dinamici
- Una pagina viene generata in lingua X SOLO se `slug_X` E `title_X` sono entrambi popolati nel DB
- Le restanti località/spiagge/veicoli rimangono solo in IT finché non sono tradotti via SEO Editor admin
- Il LanguageSwitcher porta sempre a una pagina valida (gli URL alternate vengono generati anche se il record manca, ma 404 = visibile sul livello DB)

### hreflang
Auto-iniettati in `<head>` da [BaseLayout.astro](src/layouts/BaseLayout.astro) tramite [src/lib/i18n.ts](src/lib/i18n.ts) `getAlternateLinks()`:
```html
<link rel="alternate" hreflang="it-it" href=".../path" />
<link rel="alternate" hreflang="en-gb" href=".../en/path" />
<link rel="alternate" hreflang="de-de" href=".../de/path" />
<link rel="alternate" hreflang="fr-fr" href=".../fr/path" />
<link rel="alternate" hreflang="x-default" href=".../path" />
```

### Switcher lingua
- Astro: [src/components/LanguageSwitcher.astro](src/components/LanguageSwitcher.astro)
- React (per Navbar island): [src/components/LanguageSwitcher.tsx](src/components/LanguageSwitcher.tsx)
- Pure `<a>` link, no JS-driven redirect, attributi `hreflang` corretti su ogni link
- Integrato nella Navbar desktop (vicino al ThemeToggle) e mobile (in cima al drawer)

---

## SCHEMA DATABASE SUPABASE (post-Fase 0)

### Tabelle SEO contenuti (multilingua)
- **`seo_locations`** — 21 record. Colonne IT: `slug`, `title`, `h1`, `meta_description`, `content_html`. Colonne EN/DE/FR: `slug_en/de/fr`, `title_en/de/fr`, `h1_en/de/fr`, `meta_description_en/de/fr`, `content_html_en/de/fr`. Asset: `hero_image_url`, `og_image_url`, `canonical_url`, `map_url`.
- **`seo_beaches`** — 20 record. Stesse colonne di seo_locations + `parking_info`.
- **`seo_vehicles`** — N record (uno per `group_slug`, es. `audi-rs3`, `honda-sh`). Colonne IT + 3 lingue, `slug_en/de/fr` (URL localizzata), `faqs` (jsonb multilingua), `recommended_locations` (text[]).

### Tabelle business
- **`vehicles`** — flotta. Colonne core: `make`, `model`, `category`, `year`, `fuel_type`, `color`, `license_plate`, `daily_rate`, `rate_april`...`rate_october` (tariffe mensili). **Nuove colonne post-Fase 0**: `group_slug` (link a seo_vehicles), `is_primary_variant` (immagine hero del gruppo), `gallery_urls` (jsonb), `transparent_image_url` (PNG hero pagina veicolo), `is_archived` (soft delete).
- **`bookings`** — prenotazioni con dati cliente, secondo conducente, contratto firmato (`signed_pdf_url` su Supabase Storage `contracts/`).
- **`profiles`** — `is_admin` flag per gating admin.
- **`leads`** — email form newsletter.

### Tabelle Fase 0 (nuove)
- **`reviews`** — Google Reviews + manuali. Colonne: `source ('google'|'manual')`, `google_review_id`, `author_name`, `author_photo_url`, `rating (1-5)`, `text`, `text_en/de/fr`, `published_at`, `is_published`, `is_featured`.
- **`admin_audit_log`** — tracciamento azioni admin. Auto-popolato da `src/lib/audit.ts`.
- **`vehicle_maintenance_log`** — storico KM/revisioni per veicolo.

### Storage buckets (creare manualmente in Supabase UI)
- `vehicles` (public) — immagini veicoli e gallerie
- `contracts` (private) — PDF contratti firmati
- `reviews` (public) — foto autori Google Reviews

---

## ROADMAP OPERATIVA — STATO AVANZAMENTO

### ✅ Fase 0 — Admin Redesign (completata)
- 6 sezioni admin: Dashboard, Flotta & Prezzi, Manutenzione, Noleggi & Contratti, **SEO Editor 4-lingue**, **Reviews Manager**
- Migrazione DB: [sql/08-phase-0-admin-redesign-schema.sql](sql/08-phase-0-admin-redesign-schema.sql)
- Helper: [src/lib/audit.ts](src/lib/audit.ts), [src/lib/adminStorage.ts](src/lib/adminStorage.ts)
- VehicleModal esteso con `group_slug`, gallery, immagine trasparente, archiviazione
- BookingModal: upload contratto firmato + audit log

### ✅ Fase 1 — Pagine Veicoli + Navbar + Linking (completata)
- [src/pages/flotta/[slug].astro](src/pages/flotta/[slug].astro) con hero, prezzi mensili, gallery, FAQ, location consigliate
- [src/lib/jsonLd.ts](src/lib/jsonLd.ts): `buildVehiclePageJsonLd`, `buildBreadcrumbJsonLd`
- [src/components/FleetGrid.astro](src/components/FleetGrid.astro): griglia card (in home + /flotta)
- Navbar mega-menu Flotta (desktop + mobile accordion)
- Footer: chip "Flotta" + 7 link veicolo
- Pagine località: doppio CTA "Scopri [Veicolo]" + "Prenota"

### ✅ Fase 2 — Google Reviews API + Tariffe (completata)
- [scripts/fetch-google-reviews.mjs](scripts/fetch-google-reviews.mjs) — sync Places API → Supabase
- `npm run sync-reviews` (auto al `prebuild`)
- [src/components/GoogleReviews.tsx](src/components/GoogleReviews.tsx) accetta props (con fallback hardcoded)
- Home Astro fetch reviews + count + averageRating
- [src/pages/tariffe.astro](src/pages/tariffe.astro) — listino prezzi mensili per categoria

**Env vars per attivare sync** (`.env.local`):
```
GOOGLE_PLACES_API_KEY=
GOOGLE_PLACE_ID=
SUPABASE_SERVICE_ROLE_KEY=
```

### ✅ Fase 3 — Schema markup avanzato (completata)
- [BaseLayout.astro](src/layouts/BaseLayout.astro) prop `aggregateRating` (rating dinamico) + `breadcrumbs` (auto BreadcrumbList)
- Home passa AggregateRating reale da Supabase
- Tutte le pagine principali e dinamiche emettono BreadcrumbList JSON-LD
- Vehicle schema con `Offer` + `priceSpecification` + `seller` AutoRental

### ✅ Fase 4 — i18n IT/EN/DE/FR (completata, 3 agenti in parallelo)
- [astro.config.mjs](astro.config.mjs) con `i18n` (4 lingue, IT senza prefisso)
- [src/lib/i18n.ts](src/lib/i18n.ts) — helper `getLocaleFromPath`, `localizePath`, `getAlternateLinks`
- Dizionari UI completi: [src/i18n/{it,en,de,fr}.ts](src/i18n/it.ts) — stessa struttura, ~175 chiavi
- Pagine statiche tradotte: `src/pages/{en,de,fr}/*.astro` (homepage, fleet, rates, about, 4 services, 404, book-now, sitemap) — 33 pagine totali
- Pagine dinamiche multilingua: [src/pages/[lang]/[slug].astro](src/pages/[lang]/[slug].astro), [src/pages/[lang]/flotta/[slug].astro](src/pages/[lang]/flotta/[slug].astro)
- LanguageSwitcher: [Astro](src/components/LanguageSwitcher.astro) + [React](src/components/LanguageSwitcher.tsx) integrati in Navbar
- hreflang auto-injected in tutte le pagine
- Slug localizzati: `/en/car-hire-porto-cervo`, `/de/autovermietung-porto-cervo`, `/fr/location-voiture-porto-cervo`

**Limitazione nota**: i React component (`Flotta.tsx`, `ChiSiamo.tsx`, `PrenotaOra.tsx`, `NotFound.tsx`) usati come island nelle pagine `/en|de|fr/` hanno ancora i body in italiano — solo title/meta/canonical/breadcrumb sono localizzati. Per tradurre completamente i body, refactorare i component per leggere da `getDict(lang)`.

### ✅ Fase 5 — Riscrittura CLAUDE.md (questo file)

---

## OPERAZIONI QUOTIDIANE — CHECKLIST

### Aggiungere una nuova località/spiaggia (4 lingue)
1. Admin → SEO Editor → tab Località/Spiagge → "Aggiungi"
2. Compila campi IT (slug, title, h1, meta_description, content_html, hero_image_url)
3. Cambia tab a EN → bulk action "Copia da IT" → traduci → salva
4. Ripeti per DE, FR
5. Per ogni lingua, popola `slug_xx` con keyword localizzata (es. EN: `car-hire-{location}`)
6. La pagina viene generata automaticamente al prossimo `npm run build`
7. Esegui `npm run indexnow` per pingare i motori di ricerca

### Aggiungere un nuovo veicolo
1. Admin → Flotta → "Aggiungi Veicolo"
2. Imposta `group_slug` (es. `audi-rs3`); se è una variante usa lo stesso slug
3. Carica `transparent_image_url` (PNG su sfondo trasparente per hero)
4. Carica galleria (`gallery_urls`)
5. Imposta tariffe mensili Aprile→Ottobre
6. Admin → SEO Editor → tab Veicoli → crea/modifica record per quel `group_slug` (4 lingue)
7. Build → la pagina `/flotta/[slug]` viene generata automaticamente

### Sync recensioni Google
```bash
npm run sync-reviews     # one-shot
# oppure automatico ad ogni: npm run build (via prebuild hook)
```

### Verifica SEO post-deploy
```bash
node scripts/seo-similarity.mjs       # audit duplicati contenuto rendered
node scripts/audit-supabase-seo.mjs   # audit qualità contenuti DB
npm run indexnow                      # ping IndexNow ai motori
# https://hreflang.org/ con qualche URL del sito per validare hreflang
```

---

## NOTE CRITICHE — NON DIMENTICARE

1. **Mai usare lo stesso meta_description in due pagine diverse.** Zero eccezioni, nemmeno tra lingue.

2. **I dati SEO dinamici vivono in Supabase.** Per modificare title/h1/meta_description/content_html, usa l'admin SEO Editor (non file locali).

3. **Componenti SEO esistenti**: `BaseLayout.astro`, `FAQSection.tsx`, `jsonLd.ts` sono **da estendere, non riscrivere**.

4. **`SEOHead.tsx` è uno STUB**. Tutto passa da `BaseLayout.astro`.

5. **Prerender.io è stato rimosso.** Non serve più: Astro SSG produce HTML statico già pre-renderizzato.

6. **KS Rent Sardinia ≠ KS Rent Roma.** In ogni contenuto includere "Sardinia" o "Olbia" per la disambiguazione.

7. **Veicoli noti** (per citazioni nei contenuti): Audi RS3 (verde + grigia), BMW M2, Jeep Avenger, Fiat Panda Hybrid, Mercedes Classe A, Honda SH 125/350, Yamaha Quad Raptor.

8. **Data apertura: 8 aprile 2025** (foundingDate `2025-04-08`). Verificare coerenza tra `jsonLd.ts` e contenuti.

9. **301 redirect**: NON rimuovere quelli da `/localita/:slug` → `/:slug` e `/spiagge/:slug` → `/:slug` in `vercel.json`. Servono per non perdere link equity.

10. **Auth admin**: Supabase Auth con flag `profiles.is_admin`. Tutte le tabelle nuove (reviews, admin_audit_log, vehicle_maintenance_log) hanno RLS che richiede `is_admin = true` per scrittura.

11. **Storage buckets** (`vehicles`, `contracts`, `reviews`) vanno creati MANUALMENTE in Supabase UI. Lo script `08-phase-0-admin-redesign-schema.sql` non li crea.

12. **i18n — slug per lingua possono divergere**: lo slug `noleggio-auto-porto-cervo` (IT) può diventare `car-hire-porto-cervo` (EN), `autovermietung-porto-cervo` (DE), `location-voiture-porto-cervo` (FR). Massimizza intercettazione keyword localizzate.

---

## DEPLOY E PUSH

**Dopo ogni sessione di modifiche confermata dall'utente:**

```bash
git add .
git commit -m "[Fase X]: [descrizione delle modifiche]"
git push origin main
```

Il push su GitHub deve avvenire **solo dopo conferma esplicita da parte dell'utente** che le modifiche sono corrette e pronte per il deploy. Vercel auto-deploya da `main`.

---

## FILE CRITICI — RIFERIMENTO RAPIDO

| File | Ruolo | Righe ca. |
|------|-------|-----------|
| [src/layouts/BaseLayout.astro](src/layouts/BaseLayout.astro) | Hub meta + JSON-LD + hreflang + i18n | ~250 |
| [src/lib/jsonLd.ts](src/lib/jsonLd.ts) | Tutti gli schema JSON-LD (12+ export) | ~720 |
| [src/lib/i18n.ts](src/lib/i18n.ts) | Helper i18n (locale, hreflang, paths) | ~50 |
| [src/i18n/{it,en,de,fr}.ts](src/i18n/it.ts) | Dizionari UI 4 lingue | ~220 ognuno |
| [src/pages/[slug].astro](src/pages/[slug].astro) | Generatore IT località/spiagge | ~460 |
| [src/pages/flotta/[slug].astro](src/pages/flotta/[slug].astro) | Generatore IT veicoli | ~400 |
| [src/pages/[lang]/[slug].astro](src/pages/[lang]/[slug].astro) | Generatore EN/DE/FR località/spiagge | ~250 |
| [src/pages/[lang]/flotta/[slug].astro](src/pages/[lang]/flotta/[slug].astro) | Generatore EN/DE/FR veicoli | ~430 |
| [src/components/Navbar.tsx](src/components/Navbar.tsx) | Mega-menu desktop + drawer mobile + switcher | ~830 |
| [src/components/FleetGrid.astro](src/components/FleetGrid.astro) | Griglia card veicolo | ~110 |
| [src/components/LanguageSwitcher.tsx](src/components/LanguageSwitcher.tsx) | Switcher React | ~55 |
| [src/views/Admin.tsx](src/views/Admin.tsx) | Admin orchestrator | ~600 |
| [src/components/admin/sections/](src/components/admin/sections/) | Dashboard, SEO Editor, Reviews | 200-450 |
| [scripts/](scripts/) | seo-similarity, audit-supabase-seo, indexnow-ping, fetch-google-reviews, export-seo-content | — |
| [astro.config.mjs](astro.config.mjs) | Config build + i18n + sitemap | ~95 |
| [vercel.json](vercel.json) | Redirect 301 + cache headers | ~40 |
| [public/robots.txt](public/robots.txt) | Crawlers AI permessi, SEO tool bloccati | ~40 |
