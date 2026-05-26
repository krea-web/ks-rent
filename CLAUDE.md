# CLAUDE.md — KS Rent Sardinia | Astro 5 SSG multilingua

> **Prima di fare qualsiasi cosa, leggi questo file intero. Poi esegui il PASSO 0.**
>
> Questo file è la **fonte di verità** su identità, stack, stato dello sviluppo
> e regole inviolabili del progetto. Aggiornare la sezione "STATO SVILUPPO" e
> "NOTE CRITICHE" ad ogni milestone.

---

## PASSO 0 — LETTURA OBBLIGATORIA DEL REPO PRIMA DI INIZIARE

Prima di scrivere una riga di codice, leggi questi file per capire la struttura reale:

```
# 1. Configurazione build + i18n + sitemap
astro.config.mjs

# 2. Layout principale (meta, hreflang auto, JSON-LD, switcher lingua, skip-nav)
src/layouts/BaseLayout.astro

# 3. Pagine dinamiche multilingua (località + spiagge + veicoli)
src/pages/[slug].astro                    # IT default
src/pages/flotta/[slug].astro             # IT veicoli
src/pages/[lang]/[slug].astro             # EN/DE/FR località + spiagge
src/pages/[lang]/flotta/[slug].astro      # EN/DE/FR veicoli

# 4. Schema JSON-LD (~30 export: LocalBusiness, Vehicle, Person, Service, ecc.)
src/lib/jsonLd.ts

# 5. Helper i18n + dizionari UI 4 lingue
src/lib/i18n.ts
src/i18n/{it,en,de,fr}.ts

# 6. Booking wizard (FLUSSO CONGELATO — vedi Nota Critica #12)
src/views/PrenotaOra.tsx

# 7. Admin (6 sezioni)
src/views/Admin.tsx
src/components/admin/sections/

# 8. Componenti riutilizzati ovunque
src/components/GuideArticleLayout.astro   # template guide/magazine
src/components/VehiclePageBody.astro      # corpo pagina veicolo
src/components/LegalPageContent.astro     # pagine legali shared (3 tipi)
src/components/Footer.tsx                 # link legali + social
src/components/ui/calendar.tsx            # react-day-picker v9 wrapper

# 9. Deploy + SEO operativo
vercel.json                               # redirect 301 + security headers + CSP
public/robots.txt | public/llms.txt
scripts/                                  # 22 script SEO/asset/audit
docs/PAGES-CHECKLIST.md                   # tracker UX/SEO per rotta
```

**Non procedere finché non hai letto i file rilevanti per il tuo task.**

---

## IDENTITÀ DEL PROGETTO

| Campo | Valore |
|-------|--------|
| **Sito** | `https://www.ksrentsardinia.com` |
| **Business** | KS Rent Sardinia — Noleggio auto di lusso, SUV, supercar, moto, quad a Olbia, Gallura e Costa Smeralda |
| **Ragione sociale** | KS Rent S.R.L. |
| **Fondatori** | **Francesco Milo** e **Salvatore Milo** (fratelli, imprenditori sardi) |
| **P.IVA / CF** | IT03028900904 |
| **REA** | SS - 224046 |
| **Capitale sociale** | 20.000,00 EUR |
| **PEC** | ks.rent.srl@pec.it |
| **Email** | ksrentsrl@gmail.com |
| **Telefono / WhatsApp** | +39 344 6107071 |
| **Data apertura** | 8 aprile 2025 (`foundingDate: 2025-04-08`) |
| **Sede operativa / consegna porto** | Viale Isola Bianca 38, 07026 Olbia (SS) — 40.922967, 9.520115 |
| **Sede legale** | Viale Aldo Moro 367, 07026 Olbia (SS) — 40.944573, 9.497897 |
| **Orari** | 10:00–13:00 + 15:00–22:30, 7 giorni su 7 |
| **Place ID (Google Maps)** | `ChIJP6b_YdBL2RIRkp3GdDzDwYU` — CID `9638199341974199698` |
| **Categoria GBP** | Agenzia di noleggio auto (`car_rental`) |
| **Recensioni Google** | **5,0 / 5 su 41 recensioni** (snapshot in `src/data/google-rating-snapshot.json`) |
| **⚠️ Entità DISTINTA da** | KS Rent S.r.l. (Roma) — sito `ksrent.it` — **NON siamo loro** |

### Social & directory (usate come `sameAs` in JSON-LD)
- Instagram: `https://www.instagram.com/ksrentsardinia`
- TikTok: `https://www.tiktok.com/@ksrentsardinia`
- Tripadvisor: `https://www.tripadvisor.it/Attraction_Review-g187883-d34295915-...`
- Directory: PagineGialle, PagineBianche, Cylex, Hotfrog, MisterImprese, **carmappa.com, empresite.it, aziendeeasy.it**

### Asset
- Logo: `.../storage/v1/object/public/asset/KSRENTlogo.png`
- Favicon: `.../asset/ksrent-favicon.webp`
- OG images custom per pagina: `.../asset/og/*.webp` (1200×630)
- Supabase project ref: `zgytnkimjpoosvshfopz`

---

## STACK TECNICO

| Tecnologia | Dettaglio |
|------------|-----------|
| **Framework** | **Astro 5.18 SSG** (`output: "static"`, no adapter, CDN Vercel, `trailingSlash: "never"`) |
| **Build** | Astro + Vite 5 + SWC + `astro-compress` (HTML/CSS/JS/SVG) |
| **Styling** | Tailwind 3.4 (`@astrojs/tailwind`, `applyBaseStyles:false`) + `@tailwindcss/typography` |
| **React** | 18.3 come **island** (`client:load/visible/idle/only`) — Navbar, Booking, Admin, Maps, FleetShowcase, Reviews |
| **Animazioni** | **`framer-motion` è SHIMMATO** → `src/lib/framer-motion-shim.tsx` rende `<motion.X>` come `<X>` puri (–100 KB di bundle). Vedi alias in astro.config.mjs |
| **SEO meta + JSON-LD** | Iniezione **statica** in `<head>` via `BaseLayout.astro`. NO react-helmet, NO Prerender.io |
| **i18n** | Nativo Astro 5 — `defaultLocale:"it"` senza prefisso, `en/de/fr` con prefisso, `prefixDefaultLocale:false` |
| **DB** | Supabase (PostgreSQL + Storage) — MCP `supabase-ksrent` disponibile |
| **Date** | `date-fns` v4 + **`react-day-picker` v9.14** (⚠️ API classNames diversa da v8) |
| **Form** | `react-hook-form` + `zod` |
| **Admin charts** | `recharts` v3 (Dashboard) |
| **Contratti** | `jspdf` + `jspdf-autotable` + `react-signature-canvas` (firma) |
| **UI** | shadcn/ui (Radix) + `sonner` (toast) + `vaul` (drawer) + `embla-carousel` + `cmdk` |
| **Maps** | `@react-google-maps/api` (island `client:visible`) |
| **Deploy** | Vercel (static + redirect 301 + security headers + CSP in `vercel.json`) |
| **Analytics** | GA4 `G-1JL353W8QW` + Google Ads tag `AW-18006357660` |
| **Privacy** | iubenda (Privacy + Cookie) |

### Componenti SEO chiave (da ESTENDERE, non riscrivere)
- [src/layouts/BaseLayout.astro](src/layouts/BaseLayout.astro) — hub unico `<title>`, meta, canonical, **hreflang auto**, OG/Twitter, JSON-LD (LocalBusiness statico + `aggregateRating` dinamico + `breadcrumbs` auto-`BreadcrumbList` + FAQ globale opzionale + array custom). Skip-nav a11y.
- [src/lib/jsonLd.ts](src/lib/jsonLd.ts) — ~30 builder: `localBusinessJsonLd`, `buildVehicleJsonLd`, `buildVehiclePageJsonLd`, `buildLocationJsonLd`, `buildBeachJsonLd` (con `TouristAttraction`), `buildBreadcrumb`/`buildBreadcrumbJsonLd`, `personFrancescoMilo`/`personSalvatoreMilo`/`founderAuthorRefs`, `serviceCatalogJsonLd` (7 servizi), `buildSpeakableJsonLd`, `buildCollectionPageJsonLd`, FAQ varie.
- `src/components/SEOHead.tsx` — **STUB legacy, non usare**. Tutto passa da BaseLayout.

---

## ARCHITETTURA i18n (4 lingue)

### Routing URL — slug localizzati per massimizzare keyword
- **IT** (default, no prefisso): `/`, `/flotta`, `/tariffe`, `/noleggio-auto-porto-cervo`, `/flotta/audi-rs3`, `/guide/...`
- **EN**: `/en/`, `/en/fleet`, `/en/rates`, `/en/car-hire-porto-cervo`, `/en/fleet/audi-rs3`
- **DE**: `/de/`, `/de/fuhrpark`, `/de/preise`, `/de/autovermietung-porto-cervo`
- **FR**: `/fr/`, `/fr/flotte`, `/fr/tarifs`, `/fr/location-voiture-porto-cervo`

Gli slug possono **divergere per lingua** (es. `noleggio-auto-porto-cervo` → `car-hire-porto-cervo` → `autovermietung-porto-cervo` → `location-voiture-porto-cervo`). Mappa in [src/lib/i18n.ts](src/lib/i18n.ts).

### Dove vivono le traduzioni
| Tipo | Storage | File / colonna |
|------|---------|----------------|
| **UI strings** | Codice TS | `src/i18n/{it,en,de,fr}.ts` (~175+ chiavi, stessa struttura) |
| **Pagine statiche** (landing, guide, legali) | File `.astro` | `src/pages/{en,de,fr}/*.astro` |
| **Contenuti dinamici** (località, spiagge, veicoli) | Supabase | Colonne `_en`, `_de`, `_fr` |

### Regole pubblicazione contenuti dinamici
- Una pagina è generata in lingua X SOLO se `slug_X` **E** `title_X` sono popolati nel DB.
- Le restanti restano solo IT finché non tradotte via SEO Editor admin.

### hreflang
Auto-iniettati in `<head>` da [BaseLayout.astro](src/layouts/BaseLayout.astro) via `getAlternateLinks()` (conosce slug veri + traduzioni pubblicate). `it-it`, `en-gb`, `de-de`, `fr-fr`, `x-default`.

> ⚠️ **La sitemap NON usa il blocco i18n di `@astrojs/sitemap`** (generava alternate per sostituzione meccanica del prefisso → 404). Vedi commento in astro.config.mjs. Gli hreflang corretti vengono solo da BaseLayout.

---

## SCHEMA DATABASE SUPABASE

### Tabelle SEO contenuti (multilingua: IT + colonne `_en/_de/_fr`)
- **`seo_locations`** — 21 record. `slug`, `title`, `h1`, `meta_description`, `content_html` (+ 3 lingue), `hero_image_url`, `og_image_url`, `canonical_url`, `map_url`.
- **`seo_beaches`** — 20 record. Come locations + `parking_info`.
- **`seo_vehicles`** — 1 record per `group_slug` (es. `audi-rs3`, `honda-sh`). IT + 3 lingue, `faqs` (jsonb multilingua), `recommended_locations` (text[]).

### Tabelle business
- **`vehicles`** — flotta. `make`, `model`, `category`, `year`, `fuel_type`, `color`, `license_plate`, `daily_rate`, `rate_april`…`rate_october`, `group_slug`, `is_primary_variant`, `gallery_urls` (jsonb), `transparent_image_url`, `is_archived`. (Esiste `franchise_amount` — **vedi Nota Critica #13: NON pubblicare prezzi franchigia**.)
- **`bookings`** — prenotazioni + cliente + 2° conducente + `signed_pdf_url`. RLS: pubblico **solo INSERT**, lettura solo admin.
- **`vehicle_group_stock`** — quantità reali per `group_slug` (il DB ha 1 riga rappresentante per modello, non 1 per unità fisica). Usata dalla RPC disponibilità. Inventario: rs3 3, bmw-m2 1, classe-a 4, jeep 2, panda 15, honda-sh 18, quad 1. (`sql/11-booking-group-availability.sql`)
- **RPC `check_group_availability(group_slug,start,end)`** — `SECURITY DEFINER`, verifica overlap date su prenotazioni non `cancelled` vs stock → ritorna `{available, free_units, total_units}` senza esporre righe. Chiamata da `PrenotaOra.tsx` (verifica disponibilità step 2).
- **`profiles`** — flag `is_admin`.
- **`leads`** — email newsletter.
- **`reviews`** — Google + manuali. `source`, `google_review_id`, `author_name/photo_url`, `rating`, `text` (+ 3 lingue), `published_at`, `is_published`, `is_featured`.
- **`admin_audit_log`** — azioni admin (via `src/lib/audit.ts`).
- **`vehicle_maintenance_log`** — storico KM/revisioni.

### Storage buckets (creare MANUALMENTE in Supabase UI)
`vehicles` (public), `contracts` (private), `reviews` (public).

---

## STATO SVILUPPO — DOVE SIAMO ARRIVATI (agg. 2026-05-26)

### Sito pubblico: ~370 pagine generate, 4 lingue. Stato **production-ready**.

#### ✅ Fasi fondative (0→5) — completate
- **Fase 0 — Admin redesign**: 6 sezioni (Dashboard, Flotta & Prezzi, Manutenzione, Noleggi & Contratti, SEO Editor 4-lingue, Reviews Manager). Migrazione `sql/08-phase-0-admin-redesign-schema.sql`. Helper `audit.ts`, `adminStorage.ts`. VehicleModal + BookingModal estesi (gallery, immagine trasparente, archiviazione, upload contratto firmato).
- **Fase 1 — Pagine veicoli + linking**: `/flotta/[slug]` (hero, prezzi mensili, gallery, FAQ, location consigliate), FleetGrid, Navbar mega-menu, footer chip Flotta.
- **Fase 2 — Reviews API + tariffe**: `fetch-google-reviews.mjs` (sync Places API → Supabase, auto al prebuild), GoogleReviews component, `/tariffe` listino mensile.
- **Fase 3 — Schema avanzato**: `aggregateRating` + `breadcrumbs` dinamici in BaseLayout, Vehicle schema con Offer + priceSpecification + seller AutoRental.
- **Fase 4 — i18n IT/EN/DE/FR**: config i18n, helper, dizionari completi, ~33 pagine statiche tradotte, generatori dinamici multilingua, LanguageSwitcher, hreflang, slug localizzati.

#### ✅ Espansione contenuti (post-Fase 4)
- **Sistema Guide / Magazine**: **15 guide × 4 lingue = 60 pagine** (`GuideArticleLayout.astro` + `GuideTOC`, `GuideReadingProgress`, `GuideVehicleStrip`, `RelatedGuides`, `GuideSpotlight`). Tipografia editorial (serif + drop-cap + barra dorata h2).
- **Pagine confronto veicoli**: **6 pair × 4 lingue = 24** (`/flotta/confronta/audi-rs3-vs-bmw-m2`, ecc.) + 4 index.
- **Service landing top-level**: 6 servizi × 4 lingue (Olbia, aeroporto, porto, Costa Smeralda, senza-carta-di-credito, **scooter/moto/quad**). La landing moto — `MotoScooterContent.astro` + 4 wrapper (`/noleggio-moto-scooter-olbia`, `/en/scooter-motorbike-rental-olbia`, `/de/motorrad-roller-mieten-olbia`, `/fr/location-scooter-moto-olbia`) — è stata creata per chiudere il gap SEO "noleggio scooter Olbia" (vedi `docs/seo-cluster-noleggio-auto-olbia.md`); schema `motoScooterRentalJsonLd` + `motoScooterFaqJsonLd`.
- **Pagine legali**: **3 tipi × 4 lingue = 12** via `LegalPageContent.astro` (`pageType`: `terms` | `withdrawal` | `supplier-info`):
  - IT: `/termini-e-condizioni`, `/diritto-recesso`, `/informativa-fornitore`
  - EN: `/en/terms-conditions`, `/en/withdrawal-rights`, `/en/supplier-info`
  - DE: `/de/agb`, `/de/widerrufsrecht`, `/de/anbieterinformationen`
  - FR: `/fr/conditions-generales`, `/fr/droit-de-retractation`, `/fr/informations-fournisseur`
  - ⚖️ Template AGCM/Codice del Consumo. **Disclaimer**: revisione di un legale è consigliata prima del lancio definitivo.

#### ✅ SEO avanzato (P0→P4) — completato
- **P0**: schema `Person` (founders) + `Review` + `HowTo` + `VehicleListing` + OG images custom per pagina.
- **P1**: riscrittura LLM batch **153/160** `content_html` su Supabase + `llms.txt` arricchito.
- **P2**: `Service` schemas (7) + `TouristAttraction` su spiagge + `Speakable`.
- **P3**: `robots.txt` con 11 nuovi crawler AI/social ammessi + raffinamento security headers.
- **P4**: image sitemap (`generate-image-sitemap.mjs`) + audit internal links + baseline snapshot SEO.
- **Content diversification**: **160/160 record** locale-specifici diversificati (Gemini API) → similarity Jaccard media bassa.

#### ✅ SEO Master Plan — Fase A: Fondamenta (2026-05-26)
Vedi [SEO-MASTER-PLAN.md](SEO-MASTER-PLAN.md) §1. Indirizzo principale (NAP) **deciso = Viale Aldo Moro 367** (coincide col GBP).
- **F2 — NAP allineato in codice a Aldo Moro 367 / 40.944573, 9.497897**: `carRentalBase` (address+geo) + provider in `buildLocationJsonLd` ([jsonLd.ts](src/lib/jsonLd.ts)) + meta `geo.position`/`ICBM` in [BaseLayout.astro](src/layouts/BaseLayout.astro). Il punto porto **Isola Bianca 38** resta SOLO come punto di consegna secondario (`location[1]` + contenuti pagina porto) — corretto, non incoerente. ⚠️ Resta da allineare le **directory** manualmente (GBP/PagineGialle/Cylex/Tripadvisor/…).
- **F3 — priceRange** standardizzato a **`€€`** ovunque (era `€€€` in `localBusinessJsonLd`).
- **F4 — Crawlability pagine `client:only`** (i crawler AI non eseguono JS): 3 componenti statici condivisi (4 lingue):
  - `BookingIntro.astro` → `/prenotaora` + EN/DE/FR (prima ZERO testo server-side).
  - `FleetIntro.astro` → `/flotta` + EN/DE/FR (intro prosa + link hub).
  - `AboutCrawlerText.astro` → chi siamo enciclopedico su **tutte e 4 le lingue** (EN/DE/FR erano vuote SSR; IT migrato dal vecchio blocco inline `sr-only`). **Scelta**: `sr-only` mantenuto (contenuto coerente con la view React → no cloaking, no duplicazione visibile).

#### ✅ Rifiniture & fix recenti (maggio 2026)
- **Newsletter signup** in footer (`NewsletterSignup.tsx` → `leads`).
- **Image optimization**: `OptimizedImage.tsx` + Supabase image transform `?width=&quality=` srcset (TopBeachesShowcase, GuideSpotlight, hero) → Core Web Vitals.
- **Footer**: link Tripadvisor + WhatsApp + 3 link legali.
- **Calendario prenotazione (2026-05-26)**: migrato `ui/calendar.tsx` da API react-day-picker v8 → v9; convertito a **range picker singolo inline** (data inizio + fine nella stessa finestra) con celle 44px touch. Flusso submit invariato.
- **Fix hydration** (#418/#423/#425): `GoogleReviews` date formattate in modo deterministico (no `toLocaleDateString`).
- **CSP refinement** (`vercel.json`): `connect-src` con iubenda + Google Ads/doubleclick/googlesyndication.
- **Broken internal links**: audit (`audit-buttons.mjs`) + fix 22 link verso slug localizzati corretti.
- **Backlink/directory**: `sameAs` esteso (carmappa, empresite, aziendeeasy).
- **Email reminder ritiro**: workflow **N8N + Gmail** (vedi Nota Critica #14).
- **Reviews**: 41 @ 5,0 in tutto il codebase + snapshot JSON.

### ⏸️ In sospeso / decisioni aperte (NON ancora fatte)
| # | Item | Stato / motivo |
|---|------|----------------|
| 2 | **Google / Meta Ads** | Non è un task di codice. Richiede budget + setup account. GA4 + tag Google Ads già installati nel sito (tracking pronto). Serve per traffico immediato a pagamento mentre la SEO organica matura. |
| 4 | **Booking checkbox consenso (B2), età ≥21 (B3), documenti richiesti (M1)** | **CONGELATI** nel flusso PrenotaOra (Nota Critica #12). Riattivabili solo con sblocco esplicito. |
| 6 | **Foto reali (fotografo)** | Decisione utente, rinviata. Ora foto AI/contestuali + avatar fondatori. |
| 8 | **Copy da umanizzare** | Possibili interventi puntuali (utente da confermare quali pagine). |
| — | **Stripe gateway (L3)** | Cambio di business model — decisione owner. Congelato. |
| — | **SMS reminder pre-ritiro (L2)** | Non implementato (Twilio). |
| — | **"Sito non appare su Google"** | **NON è un bug**: dominio giovane (apr 2025), zero authority, ~370 URL creati in fretta, migrazione recente. Tecnicamente indicizzabile (index/follow OK, canonical OK, robots OK). Soluzione = richieste indicizzazione manuale in GSC + backlink + tempo (3-6 mesi). **Nessun fix di codice esiste.** |

> Tracker dettagliato per-rotta (8 aspetti UX/SEO): [docs/PAGES-CHECKLIST.md](docs/PAGES-CHECKLIST.md).

---

## OPERAZIONI QUOTIDIANE — CHECKLIST

### Aggiungere una località/spiaggia (4 lingue)
1. Admin → SEO Editor → tab Località/Spiagge → "Aggiungi"
2. Compila IT (slug, title, h1, meta_description, content_html, hero_image_url)
3. Tab EN → "Copia da IT" → traduci → popola `slug_en` con keyword localizzata → salva
4. Ripeti DE, FR. Build genera la pagina automaticamente.
5. `npm run indexnow` per pingare i motori.

### Aggiungere un veicolo
1. Admin → Flotta → "Aggiungi Veicolo" → imposta `group_slug` (varianti = stesso slug)
2. Carica `transparent_image_url` (PNG hero) + `gallery_urls` + tariffe Apr→Ott
3. Admin → SEO Editor → tab Veicoli → record per quel `group_slug` (4 lingue)
4. Build → `/flotta/[slug]` generata.

### Sync recensioni Google
```bash
npm run sync-reviews     # one-shot (richiede env keys — vedi sotto)
# automatico ad ogni: npm run build (prebuild hook)
```
> ⚠️ Le key Places API vivono su **Vercel** (env del deploy), non in locale. In locale lo snapshot resta `src/data/google-rating-snapshot.json` (mantenuto a mano: 41 @ 5,0). Env per attivare il sync: `GOOGLE_PLACES_API_KEY`, `GOOGLE_PLACE_ID`, `SUPABASE_SERVICE_ROLE_KEY`.

### Build locale senza side-effect
```bash
npx astro build          # salta prebuild (sync-reviews) e postbuild (indexnow ping)
npm run build            # build completa con sync + image sitemap + indexnow ping
```

### Audit SEO / qualità
```bash
node scripts/audit-pages-visual.mjs --top=20   # immagini/pagina + similarity Jaccard
node scripts/audit-supabase-seo.mjs            # qualità contenuti DB
node scripts/audit-internal-links.mjs          # link interni rotti
node scripts/audit-buttons.mjs                 # tasti/href senza rotta valida
node scripts/seo-similarity.mjs                # duplicati su HTML renderizzato
node scripts/diversify-supabase-content.mjs    # riscrittura LLM content_html (Gemini)
npm run indexnow                               # ping IndexNow ai motori
```

---

## NOTE CRITICHE — NON DIMENTICARE (regole inviolabili)

1. **Mai lo stesso `meta_description` in due pagine** — nemmeno tra lingue. Zero eccezioni.
2. **I dati SEO dinamici vivono in Supabase** — modifica title/h1/meta/content via admin SEO Editor, non file locali.
3. **`BaseLayout.astro`, `jsonLd.ts`, `FAQSection.tsx`, `GuideArticleLayout.astro`, `VehiclePageBody.astro`, `LegalPageContent.astro` si ESTENDONO, non si riscrivono.**
4. **`SEOHead.tsx` è uno STUB** — tutto passa da BaseLayout.
5. **Prerender.io rimosso** — Astro SSG produce HTML statico già pre-renderizzato.
6. **KS Rent Sardinia ≠ KS Rent Roma** — in ogni contenuto includere "Sardinia"/"Olbia" per disambiguazione.
7. **Veicoli noti**: Audi RS3 (verde + grigia), BMW M2, Jeep Avenger, Fiat Panda Hybrid, Mercedes Classe A, Honda SH 125/350, Yamaha Quad Raptor.
8. **Data apertura: 8 aprile 2025** (`foundingDate 2025-04-08`) — coerenza tra jsonLd e contenuti.
9. **301 redirect in `vercel.json`**: NON rimuovere `/localita/:slug`→`/:slug`, `/spiagge/:slug`→`/:slug`, né i redirect `/porto-cervo`→`/noleggio-auto-porto-cervo` ecc. Servono per link equity.
10. **Auth admin**: Supabase Auth + flag `profiles.is_admin`. RLS richiede `is_admin=true` per scrittura su reviews / audit_log / maintenance_log.
11. **Storage buckets** (`vehicles`, `contracts`, `reviews`) vanno creati MANUALMENTE in Supabase UI.
12. **🔒 FREEZE FLUSSO BOOKING — `src/views/PrenotaOra.tsx`**: il **submit della prenotazione (→ webhook N8N `/create-booking`) NON si tocca**. Il submit (`format(startDate,"yyyy-MM-dd")` → N8N) resta identico. Congelati finché non sbloccati: B2 checkbox consenso, B3 età ≥21, M1 documenti, L3 Stripe. **⚠️ SBLOCCATO (2026-05-27)**: la **verifica disponibilità** è stata spostata da N8N a **Supabase RPC `check_group_availability`** (per gruppo/stock, vedi schema DB sopra). `checkAvailability()` ora chiama `supabase.rpc(...)`, non più `fetch(N8N/check-availability)`. Il resto del flusso resta congelato.
13. **💶 FRANCHIGIA / DEPOSITO — MAI pubblicare i prezzi sul sito.** Esiste `vehicles.franchise_amount` nel DB ma **non va mostrato** in `/tariffe` né altrove. Sempre **CTA WhatsApp** per il preventivo personalizzato. (memory: `feedback_franchigia_no_prezzi.md`)
14. **📧 EMAIL = N8N + Gmail.** Le email transazionali/reminder passano dal workflow **N8N + Gmail** già configurato dall'utente. **NON** introdurre Resend / SendGrid / trigger Supabase. (memory: `reference_email_n8n_gmail.md`)
15. **react-day-picker è v9** — l'API `classNames` differisce da v8 (`month_caption`, `weekdays/weekday`, `week`, `day/day_button`, `selected`, `range_start/middle/end`, `button_previous/next`, `components.Chevron`). Vedi `src/components/ui/calendar.tsx`.
16. **`framer-motion` è shimmato** — non aspettarti animazioni reali da `<motion.X>`; sono render statici (scelta di bundle size).
17. **SEO "non appaio su Google"**: vedi tabella "In sospeso" — è maturazione dominio, non un bug. Niente fix di codice.

---

## DEPLOY E PUSH

```bash
git add .
git commit -m "[area]: [descrizione]"
git push origin main          # Vercel auto-deploya da main
```

> Il push su GitHub avviene **solo dopo conferma esplicita dell'utente** che le modifiche sono corrette. Messaggio di commit termina con `Co-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>`.

---

## FILE CRITICI — RIFERIMENTO RAPIDO

| File | Ruolo |
|------|-------|
| [src/layouts/BaseLayout.astro](src/layouts/BaseLayout.astro) | Hub meta + JSON-LD + hreflang + i18n + skip-nav |
| [src/lib/jsonLd.ts](src/lib/jsonLd.ts) | ~30 builder schema JSON-LD |
| [src/lib/i18n.ts](src/lib/i18n.ts) | Helper locale, hreflang, path localizzati |
| [src/i18n/{it,en,de,fr}.ts](src/i18n/it.ts) | Dizionari UI 4 lingue |
| [src/pages/[slug].astro](src/pages/[slug].astro) | Generatore IT località/spiagge |
| [src/pages/flotta/[slug].astro](src/pages/flotta/[slug].astro) | Generatore IT veicoli |
| [src/pages/[lang]/[slug].astro](src/pages/[lang]/[slug].astro) | Generatore EN/DE/FR località/spiagge |
| [src/pages/[lang]/flotta/[slug].astro](src/pages/[lang]/flotta/[slug].astro) | Generatore EN/DE/FR veicoli |
| [src/components/GuideArticleLayout.astro](src/components/GuideArticleLayout.astro) | Template guide/magazine (60 pagine) |
| [src/components/VehiclePageBody.astro](src/components/VehiclePageBody.astro) | Corpo pagina veicolo |
| [src/components/VehicleComparison.astro](src/components/VehicleComparison.astro) | Pagine confronto (24) |
| [src/components/LegalPageContent.astro](src/components/LegalPageContent.astro) | Pagine legali shared (12, 3 tipi × 4 lingue) |
| [src/components/ui/calendar.tsx](src/components/ui/calendar.tsx) | Wrapper react-day-picker v9 |
| [src/views/PrenotaOra.tsx](src/views/PrenotaOra.tsx) | Booking wizard — 🔒 FLUSSO CONGELATO |
| [src/components/Navbar.tsx](src/components/Navbar.tsx) | Mega-menu + drawer + switcher |
| [src/components/Footer.tsx](src/components/Footer.tsx) | Link legali + social + newsletter |
| [src/views/Admin.tsx](src/views/Admin.tsx) | Admin orchestrator (6 sezioni) |
| [astro.config.mjs](astro.config.mjs) | Build + i18n + sitemap (no blocco i18n) |
| [vercel.json](vercel.json) | Redirect 301 + security headers + CSP |
| [public/robots.txt](public/robots.txt) | Crawler AI ammessi, tool SEO bloccati |
| [src/pages/llms.txt.ts](src/pages/llms.txt.ts) | `/llms.txt` **generato a build-time** (review count da `getAggregateRating()`, no drift). Era `public/llms.txt`, rimosso. |
| [docs/PAGES-CHECKLIST.md](docs/PAGES-CHECKLIST.md) | Tracker UX/SEO per rotta |
| [scripts/](scripts/) | 22 script: sync reviews, audit, diversify, indexnow, image/OG gen, sitemap |
