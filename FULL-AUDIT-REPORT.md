# FULL SEO AUDIT — ksrentsardinia.com

**Data audit:** 2026-05-12
**Tipo business rilevato:** Local Service (autonoleggio) + Hybrid (delivery a domicilio)
**Mercato:** IT primario, EN/DE/FR secondario (turismo)
**Sito:** Astro 5 SSG, Vercel CDN, Supabase backend, 4 lingue

---

## EXECUTIVE SUMMARY

### SEO Health Score: **68 / 100** — *Needs Improvement*

> Il sito ha fondamenta SEO eccellenti (schema markup ricco, hreflang corretto su 4 lingue, robots.txt e llms.txt curati, meta tag puliti), ma è **bloccato da un grave regressione di deploy**: 60+ pagine dinamiche (veicoli `/flotta/*`, spiagge e località) sono presenti nel build locale ma restituiscono 404 in produzione. Diverse di queste pagine erano già indicizzate da Google. Senza fix questo problema annulla in gran parte il lavoro SEO degli ultimi mesi.

### Punteggi per categoria

| Categoria | Peso | Score |
|-----------|------|-------|
| Technical SEO | 22% | **50/100** |
| Content Quality | 23% | **65/100** |
| On-Page SEO | 20% | **90/100** |
| Schema / Structured Data | 10% | **80/100** |
| Performance (CWV) | 10% | **55/100** |
| AI Search Readiness | 10% | **65/100** |
| Images | 5% | **80/100** |

### Top 5 problemi critici (da fixare entro 24-48h)

1. **60+ pagine dinamiche in 404 in produzione** — `/flotta/audi-rs3`, `/flotta/bmw-m2`, `/flotta/honda-sh`, `/noleggio-auto-porto-cervo`, `/noleggio-auto-baja-sardinia`, `/cala-del-faro`, `/cala-sabina`, `/noleggio-auto-marinella`, `/noleggio-auto-palau`, etc. tutte restituiscono **404**, anche se presenti nel build locale (`dist/`).
2. **Sitemap di produzione contiene solo 41 URL** vs 200+ del build locale — il sitemap deployato è uno stato vecchio (mancano flotta, spiagge, gran parte località).
3. **Apex domain redirect è 307, non 301** — `https://ksrentsardinia.com` → `https://www.ksrentsardinia.com` con `307 Temporary` (Google indica 1210 impression sul dominio apex vs 85 su www → split signal).
4. **GSC: 2 sitemap legacy ancora sottomessi** (`sitemap.xml` su apex e su www) — da rimuovere per evitare confusione del crawler.
5. **llms.txt promuove URL ora 404** — `/noleggio-auto-porto-cervo`, `/flotta/audi-rs3`, `/flotta/bmw-m2`, etc. sono nei "best pages to cite" ma sono inaccessibili → segnale pessimo a ChatGPT/Perplexity/Claude.

### Top 5 quick wins (entro 1 settimana)

1. **Re-deploy del build locale** (fix #1+#2 in un colpo solo) — controllare env vars Vercel (SUPABASE_URL, ANON_KEY)
2. **Cambiare apex redirect da 307 a 301** in `vercel.json`
3. **Rimuovere `/noleggio-auto-santa-teresa-gallura`** dal DB Supabase (memory: non in copertura, era SEO bait)
4. **Allineare orari in `llms.txt`**: scritto "10:00–22:30 7gg" ma reale è split `10-13 + 15-22:30`
5. **Allineare `geo` JSON-LD con meta `geo.position`** (sede operativa Isola Bianca, non sede legale Aldo Moro)

---

## 1. TECHNICAL SEO — Score 50/100

### 1.1 Indicizzazione & Crawling

| Test | Risultato |
|------|-----------|
| Homepage `200 OK` con UA browser | ✅ |
| Homepage `lang="it-IT"` | ✅ |
| Canonical homepage | ✅ `https://www.ksrentsardinia.com/` |
| robots meta | ✅ `index, follow, max-image-preview:large, max-snippet:-1` |
| GSC indexation homepage | ✅ Submitted and indexed, Google canonical = user canonical |
| Apex `https://ksrentsardinia.com` redirect | ⚠️ **307** (deve essere **301**) |
| HSTS + preload | ✅ `max-age=63072000; includeSubDomains; preload` |
| CSP headers | ✅ Strict CSP definita |
| X-Content-Type-Options / X-Frame-Options / Referrer-Policy | ✅ Tutti presenti |

### 1.2 Sitemap & robots

| File | Stato |
|------|-------|
| `/robots.txt` | ✅ 81 righe — AI bots permessi (GPTBot, ClaudeBot, PerplexityBot, etc.), competitor SEO bots bloccati (AhrefsBot, SemrushBot, MJ12, DotBot, Rogerbot), aree sensibili e tracking params bloccati |
| `/sitemap-index.xml` | ⚠️ Solo 1 sitemap child |
| `/sitemap-0.xml` | 🚨 **Solo 41 URL** (vs 200+ in dist/ locale) — mancano flotta, spiagge, 25+ località |
| `/llms.txt` | ⚠️ Presente e ben strutturato MA contiene link a pagine 404 |
| GSC Sitemaps | 🚨 3 sitemap sottomessi: `sitemap-index.xml` (231 URL, **0 indicizzati**), `sitemap.xml` su www (48 URL, **0 indicizzati**), `sitemap.xml` su apex (48 URL, **0 indicizzati**) |

### 1.3 Mismatch Build vs Produzione (CRITICO)

Test su 7 pagine note (presenti in `dist/` locale):

| URL | Status prod | Era in GSC? |
|-----|-------------|-------------|
| `/flotta/audi-rs3` | 🚨 404 | Indeterminato |
| `/flotta/bmw-m2` | 🚨 404 | Indeterminato |
| `/flotta/honda-sh` | 🚨 404 | Indeterminato |
| `/noleggio-auto-porto-cervo` | 🚨 404 | Indeterminato |
| `/noleggio-auto-porto-rotondo` | 🚨 404 | Indeterminato |
| `/noleggio-auto-baja-sardinia` | 🚨 404 | Indeterminato |
| `/spiaggia-pevero` | 🚨 404 | — |
| `/noleggio-auto-marinella` | 🚨 404 | ✅ Click 1, impression 5, posizione 1.2 |
| `/noleggio-auto-palau` | 🚨 404 | ✅ Click 1, impression 2, posizione 78.5 |
| `/cala-del-faro` | 🚨 404 | ✅ Impression 3, posizione 84.3 |
| `/cala-sabina` | 🚨 404 | ✅ Impression 6, posizione 65 |
| `/capo-testa` | 🚨 404 | ✅ Impression 1, posizione 7 |
| `/capriccioli` | 🚨 404 | ✅ Impression 4 |

**Implicazione**: Google ha *già indicizzato* almeno 5 pagine che ora restituiscono 404 → erosione di link equity, ranking persi, segnale "site quality declining" al crawler.

**Root cause probabile** (in ordine di likelihood):
1. Vercel build sta lanciando `getStaticPaths()` su `[slug].astro` e `flotta/[slug].astro` senza env Supabase impostate → `supabase.from(...)` ritorna `[]` → paths vuoti
2. Tabelle `seo_locations`, `seo_beaches`, `seo_vehicles` filtri (RLS?) bloccano la lettura dal client anon in build
3. Branch deploy / preview disallineato col main

**Verifica**: leggere log build Vercel + comparare `dist/` locale vs ultimo deploy.

---

## 2. ON-PAGE SEO — Score 90/100

### 2.1 Meta tag (homepage)

| Tag | Valore | Note |
|-----|--------|------|
| `<title>` | `Noleggio Auto Olbia \| KS Rent Sardinia — Costa Smeralda` (55 char) | ✅ Lunghezza ok, keyword + brand + città |
| `<meta description>` | `Noleggio auto a Olbia con consegna a domicilio in Costa Smeralda. SUV, supercar e city car senza carta di credito. Prenota online con KS Rent Sardinia.` (156 char) | ✅ |
| `<meta robots>` | `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1` | ✅ Optimal |
| `<meta viewport>` | `width=device-width,initial-scale=1,maximum-scale=5` | ✅ |
| `<meta geo.region>` | `IT-SS` | ✅ |
| `<meta geo.position>` | `40.923018;9.520169` (Isola Bianca) | ⚠️ Mismatch con JSON-LD geo (vedi §4) |
| `<meta theme-color>` | `#000000` | ✅ |

### 2.2 Hreflang (4 lingue)

```html
<link rel="alternate" hreflang="it-it" href="https://www.ksrentsardinia.com/">
<link rel="alternate" hreflang="en-gb" href="https://www.ksrentsardinia.com/en/">
<link rel="alternate" hreflang="de-de" href="https://www.ksrentsardinia.com/de/">
<link rel="alternate" hreflang="fr-fr" href="https://www.ksrentsardinia.com/fr/">
<link rel="alternate" hreflang="x-default" href="https://www.ksrentsardinia.com/">
```

✅ Tutti reciprochi, x-default su IT, coverage corretta.

> ⚠️ Considerare uso di `en` invece di `en-gb` (mercato anglofono internazionale, non solo UK). Stesso per `de-de` → `de`, `fr-fr` → `fr` se il pubblico è multi-regione. Per ora ok ma valutare a regime.

### 2.3 Heading

- Homepage: 1× H1 ("Noleggio Auto Olbia e Costa Smeralda"), 5× H2, 12× H3 → struttura semantica corretta
- `/tariffe`: H1 presente ("Tariffe Noleggio Auto Olbia") ✅
- `/en/`: H1 ("Car Hire Olbia and Costa Smeralda") ✅
- `/flotta`: **H1 MANCANTE** ⚠️ (la pagina ha title ma nessun H1 visibile nell'HTML statico)

### 2.4 Open Graph + Twitter Card

✅ Completi: `og:title`, `og:description`, `og:url`, `og:image` (1200×630), `og:type=website`, `og:locale=it_IT`, `og:site_name`, `twitter:card=summary_large_image`, `twitter:site/creator=@ksrentsardinia`. OG image servita via Supabase Storage trasformata.

### 2.5 Internal linking

GSC URL Inspection homepage riporta solo **2 referring URLs** interni (`/en/`, `/de/`). Suggerisce profondità di link interni bassa — la homepage non viene linkata da molte altre pagine. Quando le 60+ pagine dinamiche saranno fixate, la link equity migliorerà naturalmente.

---

## 3. CONTENT QUALITY — Score 65/100

### 3.1 Cosa è live ora (41 URL totali)

- **5 location IT**: `/noleggio-auto-olbia`, `/noleggio-auto-aeroporto-olbia`, `/noleggio-auto-porto-olbia`, `/noleggio-auto-costa-smeralda`, `/noleggio-auto-senza-carta-di-credito-olbia`
- **10 location per ciascuna lingua EN/DE/FR** — i version multilingua sono live (es. `/en/car-hire-porto-rotondo`, `/de/autovermietung-porto-cervo`)
- Statiche: `/flotta`, `/tariffe`, `/chisiamo`, `/prenotaora`, `/mappa-sito` + 4 omologhi multilingua

### 3.2 Cosa è offline (in dist/ ma 404 in prod)

- 7 pagine veicolo `/flotta/{audi-rs3, bmw-m2, fiat-panda, honda-sh, jeep-avenger, mercedes-classe-a, yamaha-quad-raptor}`
- 25+ location IT (porto-cervo, porto-rotondo, baja-sardinia, palau, arzachena, cannigione, golfo-aranci, portisco, marinella, capo-coda-cavallo, budoni, agrustos, pittulongu, bados, murta-maria, porto-san-paolo, puntaldia, poltu-quatu, **santa-teresa-gallura** ←DA RIMUOVERE)
- 4 spiagge: cala-brandinchi, cala-del-faro, cala-moresca, cala-sabina (e altre presumibilmente in DB)

### 3.3 E-E-A-T

| Segnale | Stato |
|---------|-------|
| Experience (esperienza diretta) | ⚠️ `/chisiamo` esiste ma non visibile il fondatore (foto, biografia) |
| Expertise (competenza) | ✅ Categoria, flotta dettagliata, FAQ schema |
| Authoritativeness | ✅ 11 `sameAs` in JSON-LD (PagineGialle, Cylex, Tripadvisor, Instagram, TikTok, Google Maps CID) |
| Trustworthiness | ✅ P.IVA, REA, sede legale, PEC, telefono, email visibili nelle pagine — ma da verificare presenza nel footer |
| Reviews | ✅ AggregateRating 5/5 su 28 review reali (Google Places API sync attivo) |

### 3.4 Duplicate content / thin content

- Le 4 versioni `/{lang}/` della homepage hanno meta description **identiche tra IT e altre lingue tradotte**: ok perché sono traduzioni dirette, non duplicati
- Le 5 location IT live hanno meta description distinte ✅
- Rischio futuro: con 25+ location IT + 25+ EN + 25+ DE + 25+ FR + 20 spiagge, mantenere unicità del meta description è critico. Lo script `scripts/seo-similarity.mjs` esiste — usarlo prima di ogni build.

### 3.5 Brand positioning mismatch

Per memoria utente, il brand ha rimosso "lusso/luxury" dal sito e adotta posizionamento "premium accessibile, qualità trasparente". Tuttavia:

- JSON-LD `priceRange: "€€€"` (tre €) suggerisce "fascia alta" → considerare `€€` (medio-alto)
- Meta description homepage parla di "SUV, supercar e city car" → "supercar" può essere percepito lusso. Coerenza ok con flotta reale (Audi RS3, BMW M2) ma valutare wording

---

## 4. SCHEMA / STRUCTURED DATA — Score 80/100

### 4.1 Homepage schema (2 script JSON-LD)

**Script #1** (LocalBusiness graph completo):
```
@graph:
  - AutoRental + LocalBusiness  (@id: #organization)
    ✅ name, telephone, address, geo, aggregateRating(5.0/28), priceRange €€€
    ✅ 2× openingHoursSpecification (split 10-13 + 15-22:30, 7 giorni)
    ✅ 6× LocationFeatureSpecification (servizi attributi)
    ✅ 11× sameAs (citation profile completo)
    ✅ areaServed con 3 AdministrativeArea + 3 City + 9 Place (Olbia, Costa Smeralda, Porto Cervo, etc.)
  - Service (@id: #delivery-service) — servizio consegna
  - WebSite (@id: #website) + SearchAction (sitelinks searchbox)
```

**Script #2**:
```
FAQPage con 9 Question/Answer
```

### 4.2 Issues schema

| Issue | Priorità |
|-------|----------|
| `geo` in JSON-LD usa coord sede legale (`40.944573, 9.497897` = Aldo Moro 367) ma `<meta geo.position>` usa coord operative (`40.923018, 9.520169` = Isola Bianca 38) | 🟧 Alta |
| `address` JSON-LD usa "Viale Aldo Moro 367" (sede legale) — ma da memory NAP GBP è "Viale Isola Bianca 38" (sede operativa, 5 min da aeroporto). **Decisione utente pending** | 🟧 Alta |
| `priceRange: "€€€"` non coerente con positioning "premium accessibile, non lusso" | 🟨 Media |
| `aggregateRating.ratingValue=5` esatto — Google a volte segnala 5.0 esatti come sospetti. Valutare se ricalcolare con maggiore precisione (es. 4.96) | 🟨 Bassa |
| Nessun `Vehicle` schema sul listing `/flotta` — quando le pagine veicolo torneranno live aggiungere CollectionPage o ItemList con Vehicle items | 🟨 Bassa |

### 4.3 Rich Results test (GSC URL Inspection)

✅ Verdict PASS — FAQ e Review snippets rilevati, **0 issues**.

---

## 5. PERFORMANCE (Core Web Vitals) — Score 55/100

### 5.1 Lighthouse Mobile (PageSpeed Insights)

| Metrica | Valore | Soglia OK | Stato |
|---------|--------|-----------|-------|
| **Performance Score** | 59 | ≥90 | 🟥 Poor |
| Accessibility | 96 | ≥90 | ✅ |
| Best Practices | 92 | ≥90 | ✅ |
| SEO | 100 | ≥90 | ✅ |
| **LCP** | 6.2s | ≤2.5s | 🟥 Poor |
| FCP | 3.3s | ≤1.8s | 🟨 Needs Improvement |
| TBT | 460ms | ≤200ms | 🟨 Needs Improvement |
| CLS | 0 | ≤0.1 | ✅ |
| TTI | 7.2s | — | — |
| Speed Index | 3.4s | — | — |

### 5.2 CrUX Field Data

❌ `No CrUX data for this origin. The site likely has insufficient Chrome traffic volume for eligibility.`

Il sito è troppo giovane / poco trafficato per essere nel CrUX dataset. Lighthouse lab è l'unica fonte. Quando il traffico crescerà CrUX diventerà disponibile (target: 100+ visite mobile/giorno per ~28 giorni).

### 5.3 Opportunità identificate

| Audit | Saving |
|-------|--------|
| `unused-javascript` | **150 KiB** (poi PSI dice 750ms risparmio render) |
| `mainthread-work-breakdown` | 2.3s thread time (11 long tasks) |
| `unused-css-rules` | 15 KiB |
| `legacy-javascript-insight` | 12 KiB (polyfills inutili per browser moderni) |
| `cache-insight` | 18 KiB (cache lifetime corti per alcuni asset) |
| `render-blocking-insight` | Score 0.5 (font Google Fonts loadati 2 volte: preload + stylesheet + stylesheet duplicato) |
| `forced-reflow-insight` | Score 0 (JS legge `offsetWidth` dopo DOM mutation) |
| `errors-in-console` | Score 0 (errori JS in produzione) |
| `color-contrast` (a11y) | Score 0 |
| `inspector-issues` | Score 0 |

### 5.4 Asset analysis

- Total page weight: 688 KiB (ok)
- Font Google: caricato 2 volte come stylesheet in `<head>` — duplicato
- Logo KSRENTlogo.png usato come hero con `fetchpriority=high` + `preload` ✅
- 38 immagini sulla homepage, tutte con alt non vuoto ✅

---

## 6. AI SEARCH READINESS (GEO) — Score 65/100

### 6.1 llms.txt

✅ Presente a `/llms.txt`, ben strutturato:
- Business essentials (P.IVA, sede, contatti, orari, area servizio)
- Entity disambiguation (vs KS Rent Roma) — ottimo per evitare confusione LLM
- Best pages to cite (sezioni Listings, Vehicle landing, Location, Multilingual)
- Key facts (USP: senza carta di credito, consegna domicilio, flotta proprietaria, 7gg, 4 lingue)
- Authoritative sources
- Licensing esplicito con permesso scraping AI e attribuzione

### 6.2 ❌ Problemi LLM-facing

1. **llms.txt promuove URL 404** — sezione "Best pages to cite" elenca `/flotta/audi-rs3`, `/flotta/bmw-m2`, `/flotta/jeep-avenger`, `/flotta/honda-sh`, `/flotta/yamaha-quad-raptor`, `/noleggio-auto-porto-cervo`, `/noleggio-auto-porto-rotondo`, `/noleggio-auto-san-teodoro`, `/noleggio-auto-baja-sardinia` — **tutti 404**. Quando ChatGPT/Claude/Perplexity provano a fetchare per citare, ottengono 404 e degradano l'affidabilità della fonte.
2. **Orari discrepanti**: llms.txt dice "10:00–22:30, 7 giorni su 7" ma orari reali (e in JSON-LD schema) sono `10-13 + 15-22:30`. Se un utente chiede "orari KS Rent Sardinia" a ChatGPT, può rispondere informazione sbagliata.

### 6.3 Robots.txt AI-friendly

✅ 15 bot AI esplicitamente permessi (GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-Web, Anthropic-ai, PerplexityBot, YouBot, CCBot, Google-Extended, Applebot, Applebot-Extended, Bytespider, meta-externalagent, Amazonbot). Approccio bilanciato: AI permessi, SEO competitor bot bloccati.

### 6.4 Brand mention signals

✅ 11 citation sources in `sameAs` (Cylex, Hotfrog, PagineGialle, Trova-aperto, Firmania, Paginebianche, Mister Imprese, Tripadvisor, Instagram, TikTok, Google Maps CID). Strong entity graph.

### 6.5 Citability

Contenuti delle pagine live ben strutturati:
- Domande chiare in FAQ schema
- Liste numerate e bullet (importanti per Perplexity passage extraction)
- Risposte concise nelle FAQ

---

## 7. IMAGES — Score 80/100

| Verifica | Risultato |
|----------|-----------|
| Total images homepage | 38 |
| Without alt | 0 ✅ |
| Empty alt | 0 ✅ |
| OG image dimensioni dichiarate | ✅ 1200×630 |
| Favicon WebP | ✅ |
| Hero logo `fetchpriority=high` + `preload` | ✅ |
| Modern formats (WebP/AVIF) | ✅ Favicon WebP, le altre via Supabase Storage transform |
| Lazy loading | Non verificato sull'HTML — verificare presenza `loading="lazy"` su below-fold |
| CLS prevention (width/height) | ✅ (CLS=0) |

---

## 8. LOCAL SEO — Inferred from JSON-LD + memory

| Elemento | Stato |
|----------|-------|
| LocalBusiness schema | ✅ AutoRental + LocalBusiness combinati |
| NAP visibile su pagina | Da verificare (footer) |
| Coordinate coerenti meta vs JSON-LD | ⚠️ **No** — meta usa Isola Bianca, JSON-LD usa Aldo Moro |
| GBP Place ID coerente | ✅ Per memory (`ChIJP6b_YdBL2RIRkp3GdDzDwYU`) |
| GBP indirizzo principale | ⚠️ Decisione pending (Aldo Moro vs Isola Bianca) |
| Citation count | ✅ 11 in sameAs (forte) |
| AggregateRating | ✅ 5.0 su 28 review |
| Service area | ✅ 12+ Place in JSON-LD areaServed |
| Industry-specific keywords | ✅ "noleggio auto", "car hire", "autovermietung", "location voiture", "Costa Smeralda", "Olbia" |
| Foundation date | ✅ `2025-04-08` ricalcabile da CLAUDE.md |

---

## 9. GSC INSIGHTS (28 giorni)

### Top query opportunità

| Query | Impressions | Click | CTR | Posizione | Note |
|-------|-------------|-------|-----|-----------|------|
| autonoleggio olbia | 114 | 2 | 1.75% | **10.1** | 🎯 Big near-page-1 — molto vicino top 10 |
| sardinia car rental | 42 | 2 | 4.76% | 6.4 | EN, fascia top 10 |
| car rental sardinia | 38 | 1 | 2.63% | 7.1 | EN |
| ks rent | 26 | 1 | 3.85% | 9.8 | Brand |
| ks rent olbia | 28 | 6 | mix | 1.6-4.3 | Brand domina |
| noleggio auto olbia | — | — | — | — | (parziale, da approfondire) |

**Pattern principale**: brand + non-brand mix. Le keyword non-brand più importanti (`autonoleggio olbia`, `sardinia car rental`) sono in posizione 6-10 — un push di link building / contenuto può portarle in top 5.

### Top page opportunity

`/noleggio-auto-marinella` aveva CTR 20%, posizione 1.2 → **adesso è 404**. Stessa cosa per `/noleggio-auto-palau` e diverse spiagge. **Ogni giorno offline = ranking erosion**.

### Apex vs www split

- `ksrentsardinia.com/` → 31 click / 1210 impressions / pos 9.0
- `www.ksrentsardinia.com/` → 7 click / 85 impressions / pos 6.0

Google sta indicizzando il dominio apex separatamente dal www, splittando i segnali. Causa: redirect 307 invece di 301.

---

## 10. GA4 (28 giorni — traffico organico)

| Metrica | Valore |
|---------|--------|
| Sessions | 128 |
| Users | 90 |
| Pageviews | 440 |
| Avg sessions/day | 4.7 |

Traffico ancora basso (sito giovane, fondato apr 2025). Bounce rate medio basso (alcuni giorni 0%), durata sessione molto variabile (alcuni outlier sospetti di bot, es. 2194s).

---

## STRENGTHS — Da preservare

1. ✅ JSON-LD ricco e ben strutturato (AutoRental + LocalBusiness + Service + WebSite + SearchAction + FAQPage)
2. ✅ AggregateRating reale da Google Places API (5/28)
3. ✅ Hreflang 4 lingue con x-default corretto, reciprocità ok
4. ✅ robots.txt AI-friendly + competitor SEO bloccati
5. ✅ llms.txt presente con entity disambiguation (vs KS Rent Roma) — raro e di valore
6. ✅ Title/meta tag puliti, lunghezza ottimale, keyword + brand + città
7. ✅ Sicurezza headers: HSTS preload, CSP, X-Content-Type, Referrer-Policy
8. ✅ 38 immagini tutte con alt, OG image 1200×630, favicon WebP
9. ✅ CLS 0 (layout stabile)
10. ✅ GSC verificata, GA4 + Google Ads tracking attivi
11. ✅ SEO score Lighthouse 100/100

---

*Per il piano d'azione prioritizzato vedi `ACTION-PLAN.md`*
