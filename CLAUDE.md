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
| **Recensioni Google** | **5,0 / 5 su 46 recensioni** (snapshot in `src/data/google-rating-snapshot.json`) |
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
| **Privacy** | **Self-hosted** (iubenda RIMOSSO, giugno 2026): cookie banner proprio `src/components/CookieConsent.tsx` + **Google Consent Mode v2** (denied default); Privacy Policy + Cookie Policy interne via `LegalPageContent.astro` (`pageType` `privacy`/`cookie`, 4 lingue). Mappa Google in click-to-load. |

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
- **`vehicles.units`** (int, default 1) — quantità reali per **riga veicolo/card** (il DB ha 1 riga per modello/variante, non 1 per unità fisica). Il booking mostra 1 card per `make+model` → SH 125/SH 350 e RS3 Verde/Grigio sono card distinte con stock separato. Valori: Panda 15, Classe A 4, Jeep 2, BMW M2 1, Quad 1, SH125 15, SH350 3, RS3 Verde 1, RS3 Grigio 2. (`sql/11-booking-availability.sql`)
- **RPC `check_vehicle_availability(vehicle_id,start,end)`** — `SECURITY DEFINER`, verifica overlap date (**esclusivo**: stesso giorno rientro/ritiro NON è conflitto) su prenotazioni non `cancelled` per quella riga vs `units` → ritorna `{available, free_units, total_units}` senza esporre righe. Chiamata da `PrenotaOra.tsx` (verifica disponibilità step 2).
- **`profiles`** — flag `is_admin`.
- **`leads`** — email newsletter.
- **`reviews`** — Google + manuali. `source`, `google_review_id`, `author_name/photo_url`, `rating`, `text` (+ 3 lingue), `published_at`, `is_published`, `is_featured`.
- **`admin_audit_log`** — azioni admin (via `src/lib/audit.ts`).
- **`vehicle_maintenance_log`** — storico KM/revisioni.

### Storage buckets (creare MANUALMENTE in Supabase UI)
`vehicles` (public), `contracts` (private), `reviews` (public).

---

## STATO SVILUPPO — DOVE SIAMO ARRIVATI (agg. 2026-06-03)

### Sito pubblico: ~378 pagine generate, 4 lingue. Stato **production-ready**.

#### 🆕 MILESTONE GIUGNO 2026 — Funnel WhatsApp + WF Telegram + Hardening sicurezza
- **🔄 PRENOTAZIONE → FUNNEL RICHIESTA WHATSAPP** (cambio strutturale, deciso dal proprietario:
  6 prenotazioni → 5 annullate ⇒ basta self-booking, gestione umana via WhatsApp).
  - `src/views/PrenotaOra.tsx` ridotto da **5 step a 3**: **Veicolo → Date (stima prezzo, NIENTE
    check disponibilità) → Ritiro/Consegna** → bottone verde **"Invia richiesta su WhatsApp"**.
  - Nuovo helper `src/lib/whatsappRequest.ts`: `WHATSAPP_NUMBER` + `buildWhatsAppRequest(lang, {...})`
    → `wa.me` con messaggio precompilato (veicolo, periodo, giorni, **stima** prezzo, ritiro) in 4 lingue.
    Mostra solo la tariffa di noleggio, mai franchigia (Nota #13).
  - **RIMOSSI dal sito**: form guidatore/secondo guidatore, upload patente (bucket `licenses`),
    check disponibilità (RPC `check_vehicle_availability`), submit a n8n `/create-booking`, modali
    firma/successo (`SignatureModal.tsx`/`SuccessModal.tsx` **eliminati**). Card `FleetShowcase`
    → `?vehicle=<group_slug>` (pre-seleziona nel wizard).
  - **Coerenza contenuti**: tutte le FAQ/guide/HowTo/meta/schema in 4 lingue riscritte sul nuovo
    flusso ("invii richiesta WhatsApp → ti rispondiamo di persona"); zero claim "self-booking/
    conferma istantanea/carica patente/firma dal telefono". Verificato anche sui `content_html` Supabase (0 occorrenze).
- **📄 WF TELEGRAM GENERATORE CONTRATTI** — nuovo workflow n8n **`KS RENT - Contratto via Telegram`**
  (id `lKPZb13jcW5pT5C8`, **ATTIVO**). Il proprietario manda al bot **foto patente + didascalia**
  (dati prenotazione) **oppure** un **vocale + foto** → OCR patente (riuso `gpt-4o`) + GPT estrae i
  campi + Whisper trascrive il vocale → genera **PDF contratto** → lo rispedisce in chat **e** salva
  su Supabase (bucket privato `contracts`, path `<booking_id>/...`) + riga `bookings`. Tabella di
  correlazione `telegram_pending_contracts`. ⚠️ **NON ancora testato end-to-end** (vedi checklist).
  Il vecchio WF `d5dWGrmTzNHrSwnc` (`/create-booking` + `/sign`) resta **dormiente** (sito non lo chiama più).
- **🔐 HARDENING SICUREZZA** (audit + advisor Supabase, vedi sezione "CHECKLIST AUTONOMIA & SICUREZZA"):
  `franchise_amount` (+ damage_policy, license_plate, km_current, next_revision_date) **bloccate al
  ruolo anon** via column-grant + tutte le query `vehicles` portate a colonne esplicite; `seo_beaches`/
  `seo_locations` scrittura solo-admin; rimosse policy INSERT pubbliche su `bookings`; `search_path`
  funzioni fissato; revocato EXECUTE su `check_vehicle_availability`/`handle_new_user`.
- **Dati**: recensioni **46** @ 5,0; Panda giugno **75** / luglio **80** / agosto **90**; backlink
  +Opendi (Europages revocato non-B2B; Yelp non pubblica sul web). Tracker: `docs/BACKLINKS-CITAZIONI.md`.



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
- **CSP refinement** (`vercel.json`): `connect-src`/`script-src`/`frame-src` con Google Ads/doubleclick/googlesyndication. (Domini iubenda RIMOSSI dal CSP a giugno 2026 con la dismissione di iubenda.)
- **Broken internal links**: audit (`audit-buttons.mjs`) + fix 22 link verso slug localizzati corretti.
- **Backlink/directory**: `sameAs` esteso (carmappa, empresite, aziendeeasy).
- **Email reminder ritiro**: workflow **N8N + Gmail** (vedi Nota Critica #14).
- **Reviews**: 46 @ 5,0 in tutto il codebase + snapshot JSON (aggiornamento manuale dello snapshot).

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
> ⚠️ Le key Places API vivono su **Vercel** (env del deploy), non in locale. In locale lo snapshot resta `src/data/google-rating-snapshot.json` (mantenuto a mano: 46 @ 5,0). Env per attivare il sync: `GOOGLE_PLACES_API_KEY`, `GOOGLE_PLACE_ID`, `SUPABASE_SERVICE_ROLE_KEY`.

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
12. **🔄 FLUSSO BOOKING = FUNNEL WHATSAPP (riscritto giugno 2026)** — `src/views/PrenotaOra.tsx`.
    Il vecchio "freeze" sul submit N8N `/create-booking` **NON vale più**: il wizard NON crea più
    prenotazioni. Ora è a **3 step** (veicolo → date+stima → ritiro/consegna) e termina con
    **"Invia richiesta su WhatsApp"** (`handleSendWhatsApp()` → `buildWhatsAppRequest()` in
    `src/lib/whatsappRequest.ts`). **Rimossi**: check disponibilità (RPC `check_vehicle_availability`,
    ora inutilizzata/revocata), form guidatore, upload patente, submit N8N, modali firma/successo.
    Il ramo n8n `/create-booking` (`d5dWGrmTzNHrSwnc`) è **dormiente**. La generazione contratti è
    passata al WF Telegram `lKPZb13jcW5pT5C8`. Se si modifica il wizard: non reintrodurre patente/
    firma/availability; l'unico "submit" è l'apertura di `wa.me` col messaggio precompilato.
13. **💶 FRANCHIGIA / DEPOSITO — MAI pubblicare i prezzi sul sito.** Esiste `vehicles.franchise_amount` nel DB ma **non va mostrato** in `/tariffe` né altrove. Sempre **CTA WhatsApp** per il preventivo personalizzato. (memory: `feedback_franchigia_no_prezzi.md`)
14. **📧 EMAIL = N8N + Gmail.** Le email transazionali/reminder passano dal workflow **N8N + Gmail** già configurato dall'utente. **NON** introdurre Resend / SendGrid / trigger Supabase. (memory: `reference_email_n8n_gmail.md`)
15. **react-day-picker è v9** — l'API `classNames` differisce da v8 (`month_caption`, `weekdays/weekday`, `week`, `day/day_button`, `selected`, `range_start/middle/end`, `button_previous/next`, `components.Chevron`). Vedi `src/components/ui/calendar.tsx`.
16. **`framer-motion` è shimmato** — non aspettarti animazioni reali da `<motion.X>`; sono render statici (scelta di bundle size).
17. **SEO "non appaio su Google"**: vedi tabella "In sospeso" — è maturazione dominio, non un bug. Niente fix di codice.
18. **🔐 COLONNE VEICOLI RISERVATE — mai `select('*')` su `vehicles` lato anon.** Le colonne
    `franchise_amount`, `damage_policy`, `license_plate`, `km_current`, `next_revision_date` sono
    bloccate al ruolo anon via **column-grant** Supabase: un `select('*')` da build/client darebbe
    *"permission denied for table vehicles"*. Usa SEMPRE l'elenco colonne pubbliche esplicito
    (vedi le query in `tariffe.astro`/`PrenotaOra.tsx`/`FleetShowcase.tsx`). L'admin (authenticated)
    legge tutto. Questo protegge la regola Nota #13 anche a livello DB.

---

## CHECKLIST AUTONOMIA & SICUREZZA (per il "100% funzionante e autonomo")

### ✅ Sicurezza — già a posto (audit + advisor Supabase, giugno 2026)
- **Secret**: `.env`/`.env.local`/`.env.production` **gitignorati e NON in git**; in git solo la
  **anon key** (pubblica per design, protetta da RLS). **Nessun service_role** nel repo/bundle.
  → I segreti NON sono rubabili da GitHub. **NON eliminare i `.env` locali** (servono a build e
  script `scripts/*`); i secret di produzione vivono solo su **Vercel** (env del deploy).
- **Client**: usa solo `PUBLIC_SUPABASE_ANON_KEY`; nessun secret hardcoded nei componenti.
- **RLS/grant**: `bookings` leggibile solo da admin (PII al sicuro); `vehicles` con column-grant
  (franchigia bloccata); `seo_*` scrittura solo-admin; `bookings` INSERT pubblico rimosso;
  `telegram_pending_contracts` accessibile solo da service_role; `search_path` funzioni fissato.
- **Header**: CSP/HSTS/X-Frame-Options/Referrer-Policy in `vercel.json`. Admin protetto da
  `profiles.is_admin` (sessione + flag).

### ⏳ Da fare per il 100% (manuali / fuori repo)
- [ ] **Restringere la Google Maps key** (`PUBLIC_GOOGLE_MAPS_API_KEY`, unica chiave pubblica nel
      bundle) ai **referrer del dominio** in Google Cloud Console → impedisce abusi/consumo quota da altri.
- [ ] **Supabase Auth**: abilitare *Leaked Password Protection* (HaveIBeenPwned) — toggle dashboard.
- [ ] **Test end-to-end WF Telegram contratti** (`lKPZb13jcW5pT5C8`): inviare al bot foto patente +
      didascalia → verificare PDF in chat + riga `bookings` + file in `contracts/<booking_id>/`. Poi
      provare il path vocale+foto. (Se un nodo fallisce, leggere l'esecuzione su n8n e correggere.)
- [ ] **GSC**: "Convalida correzione" sui report Eventi + "Richiedi indicizzazione" della pagina
      `/guide/sagre-eventi-gallura-2026-calendario` (lo schema è già corretto live).
- [ ] **Verifica funnel WhatsApp live** nelle 4 lingue (`/prenotaora`, `/en/book-now`,
      `/de/jetzt-buchen`, `/fr/reserver`): veicolo→date→ritiro→messaggio precompilato corretto.
- [ ] **Meta Pixel / Instagram ads**: rinviato (servono Pixel ID + codice verifica dominio).

### 🟡 Bassa priorità (opzionali)
- Storage bucket pubblici (`asset`/`reviews`/`vehicle_images`/`vehicles`) consentono il *listing*
  dei file (solo nomi, i file sono già pubblici): hardening opzionale, rischio nullo.
- Le 2 chiavi **anon** hardcoded in `scripts/audit-supabase-seo.mjs` e `scripts/seo-similarity.mjs`
  potrebbero leggere da env per pulizia (sono pubbliche, non è un problema di sicurezza).
- `is_admin_user()` resta eseguibile da anon (ritorna `false`): è usata nelle RLS di storage, lasciata com'è.

### 📁 Igiene repo
- ✅ Niente file temporanei/backup tracciati; `dist/` e `node_modules/` gitignorati; 0 TODO/FIXME in `src/`.
- ✅ Dead code rimosso (`SignatureModal.tsx`, `SuccessModal.tsx`). `generateBlankContract.ts` resta (usato da Admin).

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
