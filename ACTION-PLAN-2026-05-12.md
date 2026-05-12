# Action Plan SEO — KS Rent Sardinia (12 maggio 2026)

> Plan operativo post-decisioni utente: repositioning brand, esclusione Santa Teresa, pricing consegna trasparente, espansione contenuti core.

---

## ✅ ESEGUITO IN QUESTA SESSIONE (29 file modificati)

### Brand + NAP + GBP allineamento
- `src/lib/jsonLd.ts` — `carRentalBase` description, `knowsAbout`, `disambiguatingDescription`: rimosso "di lusso", aggiunto positioning premium accessibile. Orari sede 10-13+15-22:30 (con pausa pranzo). foundingDate `2025-04-08`. priceRange `€€` invece di `€€€`. SearchAction su WebSite. amenityFeature[]. CID Maps in `sameAs`. Schema Service "Consegna a domicilio" con `hoursAvailable: 9-22:30`.
- `src/layouts/BaseLayout.astro` — `aggregateRating` con tipi `Number` invece di string.
- `src/pages/index.astro` — title homepage con "Sardinia" (disambiguazione vs KS Rent Roma).
- `.env` — aggiunte `GOOGLE_PLACES_API_KEY` + `GOOGLE_PLACE_ID`.

### Pagina principale `/noleggio-auto-olbia` — CREATA (~1.700 parole)
- File: [src/pages/noleggio-auto-olbia.astro](src/pages/noleggio-auto-olbia.astro)
- 9 sezioni, 4 schema JSON-LD (`olbiaAutoRentalJsonLd`, `olbiaFaqJsonLd`, BreadcrumbList, Service)
- 10 FAQ embedded + 11ª FAQ "Quanto costa la consegna fuori da Olbia" (pricing trasparente 5-200€)
- Linkata da: footer, navbar mega-menu

### Repositioning "lusso" — fix critici fatti
- jsonLd.ts: 5 occorrenze rimosse (carRentalBase + dynamic Service name)
- public/llms.txt: aggiornato (no "di lusso")
- public/manifest.webmanifest: aggiornato
- /noleggio-auto-olbia: rimosso "boutique luxury" → flotta moderna

### Santa Teresa esclusione — 13 file modificati
- Object completo rimosso da `src/data/locality-content.ts` e `src/data/locality-extra.ts`
- Promesse di servizio rimosse anche da pagine spiagge Rena Bianca e Capo Testa (mantenute come info turistiche)
- Link rimossi da Navbar, Footer, sitemap (4 lingue), homepage (4 lingue), Flotta.tsx (4 lingue), Index.tsx, dynamic-page-helpers.ts
- 4 redirect 301 in `vercel.json` → punta a `/noleggio-auto-palau` (link equity preserved)

### Sicurezza + tecnico
- CSP header in vercel.json
- Applebot-Extended + altri crawler AI in robots.txt
- /en/404, /de/404, /fr/404 esclusi da sitemap
- Sitemap i18n config

### GBP profile sync
- Schema sede principale = Aldo Moro 367 (allineato GBP)
- Schema location[] secondario = Isola Bianca 38 (punto consegna porto)
- File [GBP-CONTENT-TODO.md](GBP-CONTENT-TODO.md): descrizione nuova V1 + 10 Q&A + servizi + post-pubblicazione workflow

### Audit deliverable salvati
- [SEO-STRATEGY-2026-05.md](SEO-STRATEGY-2026-05.md) — strategia 90 giorni
- [BRIEF-noleggio-auto-olbia.md](BRIEF-noleggio-auto-olbia.md) — content brief completo
- [GBP-CONTENT-TODO.md](GBP-CONTENT-TODO.md) — testi pronti per GBP
- `c:\tmp\ksrent-seo\audit-lusso.md` — mappa 105 occorrenze "lusso" da sostituire
- `c:\tmp\ksrent-seo\audit-santa-teresa.md` — rimediation Santa Teresa
- `c:\tmp\ksrent-seo\audit-pagina-aeroporto.md` — score 52/100 + 5 quick wins
- `c:\tmp\ksrent-seo\audit-pagina-porto.md` — score 62/100 + 5 quick wins

---

## 🔄 RIMANE DA FARE — 4 work-stream paralleli

### A. Repositioning "lusso" — bulk replacement (95 occorrenze residue)

**Effort**: 2-3 ore di editing  
**Impact**: ALTO — coerenza brand voice cross-site

**Da modificare** (priority ordered):

| Priority | File | Occorrenze | Pattern |
|----------|------|-----------|---------|
| P0 | `src/pages/chisiamo.astro` | 1 | meta description "lusso" → "premium" |
| P0 | `src/pages/en/about-us.astro` | 1 | "luxury car hire" → "premium car hire" |
| P0 | `src/pages/prenotaora.astro` + `en/book-now.astro` + `fr/reserver.astro` | 3 | meta "luxury" → "premium" |
| P1 | `src/i18n/it.ts` riga 72, 350, 410, 431 | 4 | logoAlt + descriptions "di lusso" → "selezionate" |
| P1 | `src/i18n/en.ts` riga 71, 349, 430, 171 | 4 | "luxury fleet" → "premium fleet" / "selected fleet" |
| P1 | `src/i18n/de.ts` riga 171 | 1 | "Luxus-Fuhrpark" → "Premium-Fuhrpark" |
| P1 | `src/i18n/fr.ts` riga 171 | 1 | "flotte de luxe" → "flotte premium" |
| P2 | `src/views/NoleggioCostaSmeralda.tsx` righe 31, 113, 152, 273 | 6 | H1 multilang "Luxury" → "Premium" / "Selezionate" |
| P2 | `src/views/NoleggioPortoOlbia.tsx` | 4 | alt text "Lusso" → "Selezionate" |
| P2 | `src/views/NoleggioSenzaCartaCredito.tsx` | 4 | brand copy multilang |
| P2 | `src/data/locality-content.ts` | 6 | snippetBait Q&A — context-aware |
| P2 | `src/data/locality-extra.ts` righe 20, 111, 336 | 3 | yacht / Romazzino "ultra-luxury" |
| P3 | `src/components/FAQSection.tsx` righe 106, 109 | 2 | "LUXURY EXPERIENCE" → "PREMIUM EXPERIENCE" |
| P3 | `src/components/GoldKeywordsMarquee.tsx` | 1 | "Noleggio Luxury" → "Noleggio Premium" |
| P3 | `src/lib/dynamic-page-helpers.ts` | 5 | category slug `luxury`/`luxuryAlt` (interno, refactoring) |

**Pattern di sostituzione master**:
- IT: "di lusso" → "selezionate" o "premium" (context-aware)
- EN: "luxury" → "premium" (sometimes "selected")
- DE: "Luxus" → "Premium" o "ausgewählt"
- FR: "luxe" → "premium" o "sélectionné"
- Eccezione: nelle pagine veicoli sportivi (Audi RS3, BMW M2) "lusso" può rimanere come **dettaglio descrittivo**, non come brand positioning

**Comando per esecuzione bulk** (dopo backup):
```bash
# Verifica residui prima di sostituzione bulk
rg -i "lusso|luxury|luxus|luxe" --type-add 'web:*.{astro,tsx,ts,md}' -t web src/
```

---

### B. Traduzioni `/noleggio-auto-olbia` (EN, DE, FR)

**Effort**: 4-6 ore (1.700 parole × 3 lingue + adattamento culturale)  
**Impact**: ALTO — mercati UK (top traffic), DE, FR di Costa Smeralda

**Da creare**:
- `src/pages/en/car-hire-olbia.astro` (target: market UK, "car hire" non "car rental")
- `src/pages/de/autovermietung-olbia.astro` (target: ADAC searches)
- `src/pages/fr/location-voiture-olbia.astro` (target: ferry Tolone arrivals)

**Pattern per ogni versione**:
- Reuso same outline IT (Hero, Perché, Consegna, Flotta, Tariffe, USP carta credito, Olbia hub, FAQ, Contatti)
- Slug localizzati nei link interni (es. `/en/car-hire-porto-cervo` invece di `/noleggio-auto-porto-cervo`)
- FAQ adattate al mercato locale (es. EN: focus "from UK with credit card from Lloyds/Barclays")
- hreflang automatico via BaseLayout — già supportato
- Schema JSON-LD: nuovi nodi `olbiaAutoRentalJsonLd_en`, `_de`, `_fr` con `inLanguage` corretto

**Comando suggerito**: chiedi `/seo content-brief` per ognuna delle 3 lingue per generare prima il brief specifico-mercato, poi implementazione.

---

### C. Miglioramento `/noleggio-auto-aeroporto-olbia` (score 52/100)

**Effort**: 3-4 ore  
**Impact**: ALTO — query "noleggio auto aeroporto olbia" è high-intent

**Quick wins** (dettagli in `c:\tmp\ksrent-seo\audit-pagina-aeroporto.md`):

1. Title: aggiungere "(OLB)" + "Consegna Immediata" 
2. Meta description: aggiungere "autonoleggio" e "ritiro"
3. Fix `carRentalBase` "lusso" → impatta tutte le pagine che ereditano (già fatto in questa sessione ✅)
4. `aeroportoAutoRentalJsonLd.areaServed`: cambiare in `@type: "Airport"` con `iataCode: "OLB"`
5. Aggiungere `openingHoursSpecification` allo schema specifico aeroporto
6. Espansione contenuto: +600 parole (target 1.400 totali) con 4 nuove sezioni:
   - "Come si arriva dall'OLB verso Olbia e Costa Smeralda" (200 parole)
   - "Tariffe orientative noleggio aeroporto" (180 parole)
   - "Voli serviti e copertura oraria" (150 parole)
   - "Dove ci trovi in aeroporto e parcheggio" (150 parole)

---

### D. Miglioramento `/noleggio-auto-porto-olbia` (score 62/100)

**Effort**: 3-4 ore  
**Impact**: ALTO — porto Isola Bianca è la sede operativa, vantaggio competitivo unico

**Quick wins** (dettagli in `c:\tmp\ksrent-seo\audit-pagina-porto.md`):

1. Alt text: rimuovere "Lusso" da 2 occorrenze in `NoleggioPortoOlbia.tsx`
2. Fix H1 troncato (unire `title1` + `title2` in unico H1)
3. `portoAutoRentalJsonLd`: aggiungere `openingHoursSpecification` e `GeoCoordinates` precise del porto
4. Aggiungere sesta FAQ su "Quali compagnie traghetti supportate?"
5. Sezione "Le rotte traghetto verso Olbia Isola Bianca" (~150 parole) — intercetta query "noleggio auto traghetto [città] olbia"
6. Sezione "Orari di sbarco e disponibilità" — esplicitare 9-22:30 consegna + sinergia voli notturni
7. Versioni DE/FR: aggiungere Tolone (Corsica Ferries) e Barcellona (Grimaldi) — completamente assenti

---

## 🔧 LAVORO MANUALE TUO (non automatizzabile)

### Su GBP (business.google.com)
- [ ] Aggiorna descrizione GBP con V1 (vedi [GBP-CONTENT-TODO.md](GBP-CONTENT-TODO.md))
- [ ] Aggiungi 10 "Servizio" personalizzati (Noleggio auto, supercar, SUV, ecc.)
- [ ] Click "Aggiungi" su Frequentazione, Bambini, Assistenza emergenze, "Altro"
- [ ] Q&A: workflow con account secondario incognito (10 domande pronte)
- [ ] Aggiorna URL canonico GBP a `https://www.ksrentsardinia.com/` (con www) ✅ FATTO TU

### Su Supabase admin (SEO Editor)
- [ ] **Verifica esistenza record DB `seo_locations` con slug `santa-teresa-gallura`** (4 lingue) → elimina o disattiva
- [ ] **Verifica `seo_vehicles`**: lo SQL seed in `sql/10-seed-seo-vehicles.sql` riferisce Santa Teresa per BMW M2, Mercedes Classe A, Honda SH 350, Yamaha Quad. Aggiorna i `recommended_locations` array per rimuovere Santa Teresa.
- [ ] **Rivedi tutti i record `seo_locations` per "lusso" / "luxury" / "Luxus" / "luxe"** nei campi `content_html`, `title`, `meta_description`, `h1` su 4 lingue.

### Su Pagine Gialle
- [ ] Provincia OT → SS ✅ (in corso da te)

### Test post-deploy
- [ ] `npm run build` per verificare compilazione (ATTENZIONE: alcuni file modificati potrebbero richiedere `i18n.deliveryItems.olbia` chiave nei dizionari — fallback con `??` già aggiunto in Navbar)
- [ ] Rich result test su `/noleggio-auto-olbia`: https://search.google.com/test/rich-results
- [ ] Submit URL `/noleggio-auto-olbia` su Google Search Console "Richiedi indicizzazione"
- [ ] `npm run indexnow` post-deploy
- [ ] Verifica redirect Santa Teresa → Palau funzionante (curl -I)

---

## 📊 RECAP STATO STIMATO

| Area | Pre-sessione | Post-sessione | Target T+30gg |
|------|--------------|---------------|---------------|
| SEO Health Score | 62 | ~78 | 85 |
| Brand coerenza | 40 (luxury filtra clienti) | 70 (no più "lusso" critico) | 90 (tutto repositionato) |
| Local SEO | 61 | 75 (NAP allineato + GBP rich + Santa Teresa risolto) | 88 |
| Schema markup | 75 | 90 (Service delivery, accessibility, SearchAction, foundingDate) | 95 |
| GEO/AI Search | 61 | 75 (llms.txt aggiornato, manifest coerente) | 85 |
| Content E-E-A-T | 58 | 65 (consegna trasparente, no claim falsi) | 80 |

---

## 🎯 ORDINE CONSIGLIATO DEI PROSSIMI STEP

1. **Tu (60 min)**: GBP descrizione + 10 servizi + Q&A → effetto immediato Local SEO
2. **Tu (15 min)**: Pagine Gialle provincia + altri citation NAP → consistency boost
3. **Insieme**: `npm run build` per testare → se passa, push → deploy
4. **Step 2 (3 ore)**: bulk replace "lusso" residuo cross-file (work-stream A)
5. **Step 3 (3 ore)**: traduzioni `/noleggio-auto-olbia` EN/DE/FR (work-stream B)
6. **Step 4 (3 ore)**: rework aeroporto + porto pagine (work-stream C + D)
7. **Tu (DB)**: pulizia Supabase admin per Santa Teresa + bulk replace lusso

Tempo totale stimato: **~12-15 ore di lavoro tecnico** + **~2-3 ore tue** su GBP/admin.

Risultato atteso entro 30 giorni: traffico organico da 29 click → 100-150 click (3-5×).
