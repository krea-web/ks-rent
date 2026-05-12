# SEO Strategy — KS Rent Sardinia (Maggio 2026)

> **Audit completo del sito + 6 sub-agent specializzati + dati Google reali (GSC, GA4, CrUX, PageSpeed) — 11 maggio 2026.**

---

## 1. Stato attuale (dati Google reali, 28 giorni)

| Metrica | Valore | Note |
|---------|--------|------|
| Click organici totali | **29** | bassi ma in crescita |
| Impressions totali | **1.220** | volume di pubblicazione discreto |
| Sessions organiche (GA4) | **115** | 84 utenti, 320 pageview |
| Sessions/giorno | **4,3** | benchmark stagione: target 50+/giorno entro agosto |
| Posizione media query brand | 4,5 ("ks rent olbia") | OK |
| Posizione media query head | 9,2 ("noleggio auto olbia") | a 1 click dal top 5 |
| Sitemap dichiarati | 3 | duplicati: solo `sitemap-index.xml` va tenuto |

### Score sintetici dalla diagnostica

| Dimensione | Score | Status |
|------------|-------|--------|
| Technical SEO | 74/100 | OK con warning |
| Schema markup | ~75/100 | quasi completo, 3 fix necessari |
| Local SEO | 61/100 | sotto media — GBP debole, review pochissime |
| GEO/AI Search | 61/100 | manca llms.txt, no YouTube |
| Content E-E-A-T | 58/100 | /chi-siamo 404, /tariffe thin |
| SXO (Search Experience) | 49/100 | **page-type mismatch critici** |
| Hreflang i18n | 88/100 | quasi perfetto, 2 fix minori |

---

## 2. Query insights (GSC top 20)

### 🎯 Quick wins (pos 4-15, impressions ≥10)

| Query | Imp | Pos | Lingua | Azione |
|-------|-----|-----|--------|--------|
| autonoleggio olbia | 114 | 10,0 | IT | landing dedicata + ottimizzazione home |
| sardinia car rental | 41 | 6,6 | EN | rinforzare /en/ con keyword |
| car rental sardinia | 38 | 7,1 | EN | come sopra |
| mietwagen portisco | 30 | 8,5 | **DE** | localizzazione DE attiva! |
| noleggio auto olbia | 25 | 9,2 | IT | **PAGINA DEDICATA MANCANTE** |
| autonoleggio porto rotondo | 25 | 7,8 | IT | rinforzare landing Porto Rotondo |
| rent a car sardinia | 25 | 6,3 | EN | OK ma migliorabile |
| car hire sardinia | 21 | 6,9 | EN | OK |
| **autonoleggio olbia senza carta di credito** | 20 | 13,2 | IT | USP unica — landing dedicata? |
| olbia car rental | 19 | 5,6 | EN | quasi pos 5 |
| ks rent (brand) | 27 | 9,8 | IT | brand recognition gap |
| ks rent olbia (brand) | 16 | 4,5 | IT | OK |

### 🔴 Query con potenziale ma fuori ranking

| Query | Imp | Pos | Problema |
|-------|-----|-----|----------|
| car hire porto cervo sardinia | 19 | **73,4** | EN landing inadeguata |
| autonoleggio porto cervo | 18 | 23,2 | IT pagina esiste ma debole |
| noleggio auto portisco | 44+34 | 38/15 | landing Portisco mancante o duplicata |

### 💡 Insight strategici

1. **"Portisco"**: query DE + IT con 100+ impressions cumulate ma nessuna landing dedicata. **Opportunità grande**: creare `/noleggio-auto-portisco` (Marina di Portisco zone).
2. **"Senza carta di credito"**: USP unica del business (CLAUDE.md la cita) ma non sfruttata in landing dedicate. Query niche con bassa competition.
3. **Mercato DE attivo**: "mietwagen portisco" indica che la traduzione DE intercetta traffico — investire di più.
4. **Brand ranking debole**: "ks rent" pos 9,8 = collisione con KS Rent Roma (ksrent.it). La disambiguazione "Sardinia" nel title e schema è critica.

---

## 3. Issues prioritizzati (per impatto × effort)

### 🔴 CRITICAL — entro 7 giorni

| # | Issue | Effort | Impatto | File |
|---|-------|--------|---------|------|
| C1 | ~~`/chi-siamo` 404~~ → **slug reale è `/chisiamo`** (tutto attaccato). Esiste, ma E-E-A-T va comunque rinforzato (team, foto, P.IVA) | 4h | E-E-A-T | `src/pages/chisiamo.astro` |
| C2 | ~~`aggregateRating` hardcoded "28" mismatch~~ → **CORRETTO**: GBP reale ha 5.0/28. Ripristinato fallback con valori reali. | done | Schema validity | `src/lib/jsonLd.ts` ✅ |
| C3 | `/en/404`, `/de/404`, `/fr/404` escluse dal sitemap | done | Indexability | `astro.config.mjs` ✅ |
| C4 | Page-type mismatch su "noleggio auto olbia" → **brief completo in [BRIEF-noleggio-auto-olbia.md](BRIEF-noleggio-auto-olbia.md)** | 6-8h | Traffic | file dedicato Astro |
| C5 | NAP discrepancy Pagine Gialle: provincia "OT" obsoleta vs "SS" — **user in corso di correzione** | 30min | Local SEO | claim listing |
| C6 | ~~`/localita/:slug` redirect rotto~~ → **gli URL canonical sono direttamente `/noleggio-auto-{location}`, no doppio prefisso**. Il redirect legacy `/localita/:slug → /:slug` potrebbe essere RIMOSSO (mai usato schema vecchio) o sostituito con 21 redirect specifici se ci sono link esterni storici. | 20min | Link equity | `vercel.json` |

### 🟡 HIGH — entro 2 settimane

| # | Issue | Effort | Impatto | File |
|---|-------|--------|---------|------|
| H1 | Title homepage non include "Sardinia" → collisione brand con KS Rent Roma | 5min | Brand+CTR | `src/pages/index.astro` |
| H2 | `/tariffe` solo 327 parole (sotto soglia 500) — thin content | 3h | Quality | DB o file |
| H3 | CSP header mancante in `vercel.json` | 15min | Security | `vercel.json` |
| H4 | `/llms.txt` mancante (AI search signal) | 30min | GEO | `public/llms.txt` |
| H5 | Schema `Vehicle` → `Product` per Google rich snippets | 1h | Schema | `src/lib/jsonLd.ts` |
| H6 | Sitemap senza `xhtml:link` alternate per lingue | 10min | i18n | `astro.config.mjs` |
| H7 | Recensioni Google: solo 5 visibili → review request system | 2h | Local trust | nuovo script |
| H8 | `inLanguage: "it-IT"` hardcoded in `carRentalBase` per pagine EN/DE/FR | 20min | i18n schema | `src/lib/jsonLd.ts` |
| H9 | 10 `<img>` fleet showcase senza `width`/`height` (CLS/LCP) | 30min | CWV | `src/components/FleetGrid.astro` |
| H10 | Footer Tripadvisor badge visibile (era solo link nascosto) | 1h | Trust | `src/components/Footer.tsx` |
| H11 | Landing EN `car-hire-olbia-airport` mancante | 4h | Traffic UK | DB `seo_locations` |
| H12 | Schema `Vehicle` ha `unitCode: "DAY"` non valido nell'Offer | 30min | Schema | `src/lib/jsonLd.ts` |

### 🟢 MEDIUM — entro 30 giorni

| # | Issue | Effort | Impatto |
|---|-------|--------|---------|
| M1 | Landing dedicate "senza carta di credito" (USP) | 2h | Niche traffic |
| M2 | Landing `/noleggio-auto-portisco` (44+34 imp) | 2h | Quick win |
| M3 | Landing `/noleggio-auto-lusso-sardegna` (raggruppa RS3, M2, Quad) | 3h | Premium niche |
| M4 | Espandere FAQ pagine località a 134-167 parole per risposta (AI citability) | 6h | GEO |
| M5 | Citations: GetYourGuide, Discover Cars, Holidu | 3h | Local |
| M6 | Aggiungere `BreadcrumbList` alla homepage | 5min | Schema |
| M7 | Aggiungere `SearchAction` al nodo WebSite | 10min | SearchBox eligibility |
| M8 | `openingHoursSpecification` → array sintassi | 5min | Schema strict |
| M9 | Robots.txt: aggiungere `Applebot-Extended Allow` | 2min | Apple AI |
| M10 | `VEHICLE_SLUGS` hardcoded in `i18n.ts` → sync da DB | 4h | Robustezza i18n |
| M11 | Lifestyle photography per pagine premium (coppie/famiglie) | budget | UX/E-E-A-T |
| M12 | Listings su Tripadvisor/GetYourGuide/Discover Cars completi | 2h | Citations |

### 🔵 LOW / MID-TERM (Q3 2026)

| # | Issue | Effort | Impatto |
|---|-------|--------|---------|
| L1 | Canale YouTube (correlazione 0,737 con AI citations) | budget+tempo | GEO MAX |
| L2 | Wikidata entity per KS Rent Sardinia | 2h | Knowledge Graph |
| L3 | Press mentions strategia (travel blogger Sardegna) | budget | Authority |
| L4 | Esperienze territoriali contenuto (ZTL Porto Cervo, ferry timing) | 4h | E-E-A-T |
| L5 | Sezione business traveler (fattura, ritiro rapido) | 2h | Persona gap |

---

## 4. Roadmap 90 giorni — calendario operativo

### Settimana 1 (11-18 maggio 2026)
- [ ] **C2, C3, H1, H3, H4, H8, H12** — fix tecnici sicuri (file edits)
- [ ] **C5** — claim Pagine Gialle, correggere provincia
- [ ] **C6** — verificare tutti i 21 redirect legacy `/localita/:slug`
- [ ] Drift baseline catturata per monitoraggio

### Settimana 2 (19-25 maggio)
- [ ] **C1** — pagina `/chi-siamo` completa 4 lingue (600+ parole, foto team, P.IVA, REA)
- [ ] **C4** — landing `/noleggio-auto-olbia` (DB SEO Editor)
- [ ] **H2** — espansione `/tariffe` con deposito, contratto, cancellazione (600+ parole)
- [ ] **H5, H6** — fix schema Vehicle→Product + sitemap i18n

### Settimana 3-4 (26 mag-8 giu)
- [ ] **H7** — sistema review request (template WhatsApp/email post-noleggio)
- [ ] **H9** — fix CWV su FleetGrid (width/height)
- [ ] **H10** — Tripadvisor badge visibile
- [ ] **H11** — landing `/en/car-hire-olbia-airport`
- [ ] **M2** — landing `/noleggio-auto-portisco` IT+DE

### Mese 2 (giugno)
- [ ] M1 — USP "senza carta di credito" → landing dedicata IT/EN
- [ ] M3 — landing lusso Sardegna
- [ ] M4 — FAQ espanse su tutte le località principali
- [ ] M5 + M12 — citations GetYourGuide / Discover Cars / Holidu
- [ ] M11 — shooting fotografico lifestyle (priorità pre-stagione)

### Mese 3 (luglio)
- [ ] L1 — primi 3-5 video YouTube (consegna villa, tour flotta, confronti veicoli)
- [ ] L4 — contenuti territoriali differenzianti per location pages
- [ ] L5 — sezione business traveler
- [ ] Re-audit completo + drift compare

---

## 5. KPIs target (T+90 giorni)

| Metrica | Baseline (mag 2026) | Target (ago 2026) | Stretch |
|---------|---------------------|---------------------|---------|
| Click organici 28d | 29 | 200 | 400 |
| Impressions 28d | 1.220 | 6.000 | 10.000 |
| Sessions organiche 28d (GA4) | 115 | 800 | 1.500 |
| Posizione media "noleggio auto olbia" | 9,2 | 5,0 | 3,0 |
| Posizione media "autonoleggio olbia" | 10,0 | 6,0 | 3,0 |
| Pagine indicizzate (GSC) | ~49 | 80 | 100 |
| Recensioni Google totali | 5 | 25 | 50 |
| SEO Health Score | ~62 | 80 | 88 |

---

## 6. Strumenti & monitoring

- **GSC**: `python google_auth.py` Tier 2 attivo → `/seo google gsc` settimanale
- **CrUX trend**: `/seo google crux-history` mensile
- **Drift baseline**: catturata 11 maggio 2026 — re-compare ogni 2 settimane
- **Audit pre-stagione**: ri-eseguire `/seo audit` 1° luglio 2026 (pre-peak Ferragosto)
- **IndexNow**: ping dopo ogni batch contenuti nuovi (`npm run indexnow`)

---

## Disclaimer e limiti dell'audit

- GBP profile data (foto, posts, categorie, Q&A) non accessibili senza API GBP — verifica manuale richiesta.
- Backlink profile non accessibile (Ahrefs/SEMrush bloccati in robots.txt e API non configurate).
- DataForSEO non configurato — manca rank tracking locale e geo-grid Costa Smeralda.
- Mobile rank locale dalle coordinate Olbia (40.92, 9.52) non testato — usare DataForSEO `local_pack_serp` per misure precise.
- Competitor analysis basato su SERP scraping, non su crawl autorizzato dei loro siti.

---

*Documento generato da Claude Code + skill claude-seo Tier 2 (Google APIs attive).*
*Re-audit consigliato: 26 maggio 2026 (2 settimane) e 11 luglio 2026 (2 mesi).*
