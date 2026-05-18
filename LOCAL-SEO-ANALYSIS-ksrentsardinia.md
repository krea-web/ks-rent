# Local SEO Analysis — KS Rent Sardinia

**Sito**: https://www.ksrentsardinia.com
**Data analisi**: 2026-05-13
**Tipo business**: **Hybrid** (brick-and-mortar con 2 sedi a Olbia + Service Area Business per consegna a domicilio in Gallura/Costa Smeralda)
**Vertical**: Automotive — Car Rental (`AutoRental`)
**Place ID GBP**: `ChIJP6b_YdBL2RIRkp3GdDzDwYU` — CID `9638199341974199698`

---

## Local SEO Score: **78/100**

| Dimensione | Peso | Score | Note sintetiche |
|---|---|---|---|
| GBP Signals | 25% | 18/25 | GBP attivo, categoria corretta, ma indecisione su indirizzo primario penalizza il segnale |
| Reviews & Reputation | 20% | 17/20 | 28 recensioni 5.0 con sync API attivo, AggregateRating dinamico in homepage, ma manca strategia di velocity |
| Local On-Page SEO | 20% | 18/20 | NAP visibile in footer, dedicated service pages presenti, nuova landing /noleggio-auto-olbia ottima |
| NAP Consistency & Citations | 15% | 9/15 | **Discrepanza schema homepage (Aldo Moro) vs schema dynamic pages (Isola Bianca)** + Bing Places/Apple Business non visibili |
| Local Schema Markup | 10% | 9/10 | Schema ricchissimo `AutoRental + LocalBusiness`, multi-location, openingHours, areaServed, amenityFeature |
| Local Link & Authority | 10% | 7/10 | 11 directory locali in `sameAs`, ma manca Camera di Commercio Sassari, BBB-equivalent IT, "best of" lists |

---

## 1. GBP Signals — 18/25

### Cosa è già a posto
- Profilo GBP attivo e verificato (Place ID confermato in memoria)
- Categoria primaria corretta: `car_rental` (Agenzia di noleggio auto) — **#1 fattore Whitespark 2026**
- Embed `maps.google.com/?cid=9638199341974199698` presente in `sameAs` JSON-LD
- Componente `CompanyMap.tsx` integrato nel sito (mappa Google embed)
- Orari complessi gestiti correttamente (split 10-13 + 15-22:30) sia in schema che in dichiarazioni cliente

### Problemi rilevati
- **🔴 CRITICAL — Indirizzo primario GBP indeciso** (memory: `reference_gbp_profile.md`): GBP usa Viale Aldo Moro 367 (sede legale), ma la sede operativa è Viale Isola Bianca 38. Questo genera disallineamento tra:
  - GBP: Viale Aldo Moro 367 (40.944573, 9.497897)
  - Schema homepage `localBusinessJsonLd.address`: Viale Aldo Moro 367 ✅ allinea con GBP
  - Schema `carRentalBase` (usato da TUTTE le pagine località/spiagge): Viale Isola Bianca 38 (40.923018, 9.520169) ❌ **diverge dal GBP**
  - Footer: mostra entrambe (operativa Isola Bianca + legale Aldo Moro) ✅
- **🟡 HIGH — Categorie secondarie GBP non documentate**: ottimale 4 categorie aggiuntive (BrightLocal). Possibili: `Limousine service`, `Motor scooter dealer`, `ATV rental service`, `Airport shuttle service`
- **🟡 MEDIUM — GBP Q&A**: Q&A è stato deprecato da Google a Dicembre 2025 (sostituito da Ask Maps Gemini AI). Le 11 FAQ globali in `faqPageJsonLd` + 11 in `olbiaFaqJsonLd` sono già un'ottima copertura sostitutiva
- **🟡 MEDIUM — Nessun riferimento a Google Posts** nel workflow: i Post non sono fattore di ranking diretto ma triggerano Post Justifications nei risultati locali

### Azioni
1. **Decidere primary address GBP** entro 7 giorni e allineare schema `carRentalBase` (riga 416-423 di `src/lib/jsonLd.ts`) con la decisione
2. Aggiungere 2-3 categorie secondarie su GBP
3. Pubblicare 1 GBP Post settimanale (offerta stagionale, nuovo veicolo, evento Costa Smeralda)

---

## 2. Reviews & Reputation — 17/20

### Cosa è già a posto
- **Sync automatico Google Places API → Supabase** via `scripts/fetch-google-reviews.mjs` (eseguito al `prebuild`)
- Tabella `reviews` con 28 record, rating medio 5.0
- Componente `GoogleReviews.tsx` in homepage con dati dinamici (`reviews`, `totalCount`, `averageRating`)
- `AggregateRating` JSON-LD **dinamico** sulla homepage (`index.astro` riga 41-45) ✅
- Threshold "magic 10" Sterling Sky superato (28 ≫ 10)
- Rating ≥ 4.5 (5.0): supera la soglia del 31% di consumatori che usa solo 4.5+

### Problemi rilevati
- **🔴 HIGH — `aggregateRating` hardcoded in `localBusinessJsonLd`** (`jsonLd.ts` riga 61-67): valore fisso 5.0/28 mentre la homepage emette quello dinamico via prop. Il ratingCount cresce → lo statico diverge → flag in GSC. Il dynamic via `BaseLayout` aggregateRating prop deve **sostituire** non sommarsi a quello statico
- **🟡 HIGH — Velocity reviews**: 28 recensioni in ~13 mesi (apr 2025 → mag 2026) ≈ 2.15/mese. La regola **18-day rule (Sterling Sky)** richiede ≥1 review/3 settimane per mantenere posizione: bisogna verificare se c'è continuità o gap
- **🟡 MEDIUM — Recensioni solo Google + Tripadvisor**: i consumatori usano in media 6 review sites (BrightLocal 2026). Mancano: **Trustpilot, Booking.com (per servizi turistici), Holidu/Rentalcars per car rental**
- **🟡 MEDIUM — Nessun review schema `review[]` in homepage**: il blocco `Vehicle` su pagine `/flotta/[slug]` ha `review[]` (jsonLd.ts riga 896-910) ma `localBusinessJsonLd` ha solo `aggregateRating`. Aggiungere top 3-5 review come oggetti `Review` dentro l'organization aiuta rich results
- **🟢 LOW — Manca strategia formale di review request post-noleggio**: WhatsApp template + email automation post-restituzione

### Azioni
1. **Rimuovere il blocco `aggregateRating` hardcoded** da `localBusinessJsonLd` o convertirlo in builder che riceve i valori dal layout
2. Verificare velocity recensioni ultimi 90gg via SEO Editor admin → tab Reviews (chiarire se ci sono "gap" >18gg)
3. Implementare automazione: post-noleggio invia template WhatsApp con link diretto Google Reviews
4. Iscrivere a Trustpilot (free profile) per ampliare cross-platform presence

---

## 3. Local On-Page SEO — 18/20

### Cosa è già a posto
- **Title homepage**: "Noleggio Auto Olbia | KS Rent Sardinia — Costa Smeralda" — city + service ✅
- **NAP visibile in footer** su ogni pagina: indirizzi entrambe le sedi + `tel:+393446107071` + `mailto:ksrentsrl@gmail.com`
- **Click-to-call** con `tel:` link presente (`Footer.tsx` riga 250)
- **Dedicated service pages** per ogni servizio core: `/noleggio-auto-olbia`, `/noleggio-auto-aeroporto-olbia`, `/noleggio-auto-porto-olbia`, `/noleggio-auto-costa-smeralda`, `/noleggio-auto-senza-carta-di-credito-olbia` — **questo è il #1 fattore Whitespark per local organic**
- 21 pagine località + 20 spiagge con `content_html` unico per pagina (CLAUDE.md: requisito >60% unique enforced)
- Internal linking hub-and-spoke: home → location pages → vehicle pages (mega-menu Navbar + footer chips)
- SEO rich text statico in homepage (legibile da Google senza JS)
- Tutti i CTA primari e contatti above the fold
- BreadcrumbList JSON-LD su ogni pagina

### Problemi rilevati
- **🟡 MEDIUM — 21 location pages + 20 spiagge = 41 pagine "geo"** che si avvicina alla soglia WARNING (30+) della quality gate. Memory conferma: contenuti unici via SEO Editor admin, ma è da rieseguire `node scripts/seo-similarity.mjs` + `node scripts/audit-supabase-seo.mjs` per verificare che tutte siano >60% unique e non doorway-like (swap test RicketyRoo)
- **🟡 MEDIUM — Tariffe stagionali (apr-ott)**: nessuna nota visibile su cosa accade nov-mar. Da gennaio-marzo gli utenti potrebbero atterrare in cerca di info → 404 commerciale
- **🟢 LOW — Mancano local FAQ specifiche per pagina località**: ogni pagina /noleggio-auto-{citta} potrebbe avere 2-3 FAQ uniche (parcheggio, distanza dal centro, evento locale)

### Azioni
1. Eseguire `node scripts/seo-similarity.mjs` e generare report duplicati; eventualmente arricchire le pagine borderline
2. Aggiungere banner stagionale "Stagione 2026 aperta" / fuori stagione "Prenota per la prossima stagione, listini ad aprile"
3. Per ogni location page nuova: 2-3 FAQ specifiche del posto

---

## 4. NAP Consistency & Citations — 9/15

### Stato NAP cross-source

| Sorgente | Indirizzo | Telefono | Coordinate |
|---|---|---|---|
| GBP (memory) | Viale Aldo Moro 367 | +39 344 6107071 | 40.944573, 9.497897 |
| Footer (visibile) | **Entrambe le sedi** | +393446107071 (`tel:`) | — |
| Schema `localBusinessJsonLd` (homepage) | Viale Aldo Moro 367 | +393446107071 | 40.944573, 9.497897 ✅ |
| Schema `localBusinessJsonLd.location[1]` | Viale Isola Bianca 38 | — | 40.923018, 9.520169 |
| Schema `carRentalBase` (location/beach pages) | **Viale Isola Bianca 38** ❌ | +393446107071 | 40.923018, 9.520169 |

→ **🔴 CRITICAL inconsistency**: 21 pagine località + 20 spiagge emettono schema con indirizzo primario diverso dal GBP. Google legge `address.streetAddress` come segnale di entità → potenziale dilution della Place entity.

### Citations

**Presenti in `sameAs` JSON-LD** (11):
- Cylex, Hotfrog, Pagine Gialle, Trova-aperto, Firmania, Pagine Bianche, MisterImprese (directory IT)
- Tripadvisor (review platform)
- Maps Google (CID), Instagram, TikTok

**Mancanti tier 1**:
- ❌ **Bing Places** (powers ChatGPT, Copilot, Alexa — citato come critical da memory + Whitespark 2026)
- ❌ **Apple Business Connect** (uso raddoppiato al 27% — BrightLocal 2026)
- ❌ **Camera di Commercio Sassari** (registroimprese.it visibile? richiesto come trust signal IT)
- ❌ **BBB-equivalent IT**: Forum Consumatori, ConfCommercio Olbia, Confartigianato

**Data aggregators IT**:
- ⚠️ Verificare submission su **Data Axle Italy** e **Foursquare** (downstream verso TomTom, Apple Maps, Snapchat)

### Azioni
1. **🔴 PRIORITARIO**: Decidere `address` primario e fixare incoerenza:
   - Opzione A (raccomandata): allineare tutto a Aldo Moro 367 (sede legale = GBP attuale)
   - Opzione B: spostare GBP a Isola Bianca 38 (sede operativa, più rilevante per cliente che sbarca al porto) e allineare schema homepage
2. **Claimare Bing Places** (powers ChatGPT/Copilot — 45% utenti AI per local recommendations)
3. **Claimare Apple Business Connect**
4. Aggiungere a `sameAs`: registroimprese.it/p-iva/03028900904, link Camera Commercio Sassari, BingMaps, Apple Maps

---

## 5. Local Schema Markup — 9/10

### Cosa è già a posto
- **`@type: ["AutoRental", "LocalBusiness"]`** — corretto subtype industry per car rental
- `@graph` con 3 nodi (Organization, Service "delivery", WebSite) — pattern moderno e collegato via `@id`
- Tutte le proprietà richieste: `name`, `address` (PostalAddress completa), `geo` (5+ decimali ✅)
- Tutte le raccomandate: `openingHoursSpecification` (split orario corretto), `telephone`, `url`, `priceRange`, `image`, `aggregateRating`, `email`, `vatID`, `taxID`, `foundingDate`
- `areaServed` con 18 entità geografiche tipizzate (`AdministrativeArea`/`City`/`Place`)
- `amenityFeature` (parcheggio, accessibilità, contactless, WhatsApp)
- `disambiguatingDescription` per separare entità da KS Rent Roma (`ksrent.it`) — best practice E-E-A-T
- `location[]` con multi-place per le 2 sedi
- BreadcrumbList su tutte le pagine
- `Service` separato per "Consegna a domicilio" con `provider` linkato via `@id`
- Vehicle schema su `/flotta/[slug]` con Offer + priceSpec + Review + Rating + MerchantReturnPolicy + ShippingDetails ✅

### Problemi rilevati
- **🔴 (vedi #2)**: `aggregateRating` hardcoded vs dynamic conflict
- **🔴 (vedi #4)**: NAP discrepancy schema dynamic pages
- **🟡 LOW — `priceRange` inconsistente**: homepage `€€€`, dynamic pages `€€` (`carRentalBase`). Decidere
- **🟢 LOW — Manca `paymentAccepted` enumerato** secondo schema.org spec (è stringa libera, accettato ma non perfetto)
- **🟢 LOW — `currenciesAccepted` solo su organization ma non su `carRentalBase`**

### Azione
- Vedi #2 e #4. Inoltre uniformare `priceRange` (raccomando `€€€` in tutto: brand positioning premium accessibile da memory)

---

## 6. Local Link & Authority — 7/10

### Cosa è già a posto
- 11 citations in `sameAs` (vedi sezione 4)
- Tripadvisor presente (alta autorità per turismo)
- Brand storytelling forte ("società sarda indipendente, P.IVA visibile")

### Mancanti
- ❌ **Camera di Commercio di Sassari** — equivalente IT del Chamber of Commerce US (autorità + verifica business)
- ❌ **Confcommercio / Confartigianato Olbia** — local trust signals
- ❌ **"Best of" placements**: nessun link riconosciuto da liste autorevoli ("migliori autonoleggi Olbia 2026", "best car rental Costa Smeralda Sardinia") — questo è il **#1 fattore di AI visibility (Whitespark 2026)**
- ❌ **Local press digital PR**: La Nuova Sardegna, L'Unione Sarda, Olbia.it
- ❌ **Sponsorship/community signals**: eventi Costa Smeralda (Smeralda Holding), Yacht Club Costa Smeralda, eventi Rolex
- ❌ **Link da hotel/villa partners** (alta autorità contestuale per turismo)

### Azioni
1. Iscrizione/menzione su Camera di Commercio Sassari, Confcommercio Olbia
2. Outreach a 5 redazioni locali (La Nuova Sardegna, Olbia.it) con press release "Stagione 2026 KS Rent Sardinia"
3. Pitch a 3 blog di viaggio italiani per inclusione in "miglior autonoleggio Olbia 2026"
4. Partnership con 5 hotel/ville Costa Smeralda con scambio link (footer "Trasporti consigliati")

---

## AI Search Impact (riferimento — esegui `/seo geo` per audit completo)

KS Rent Sardinia è già ben posizionato per AI search:
- ✅ `robots.txt` permette tutti i bot AI principali (GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot, CCBot)
- ✅ `llms.txt` presente in `/public/llms.txt`
- ✅ FAQ schema con 11+ domande (passage-level citability)
- ✅ Disambiguation forte vs KS Rent Roma (riduce confusion in LLM responses)

Da migliorare per AI:
- Bing Places (bottleneck per ChatGPT, Copilot, Alexa)
- Brand mentions su Reddit (r/sardegna, r/italytravel) — Reddit è top sorgente AI
- Citazione su "best of" lists (top fattore AI visibility 2026)

---

## Top 10 Azioni Prioritizzate

| # | Priorità | Azione | Impatto | Effort |
|---|---|---|---|---|
| 1 | 🔴 CRITICAL | **Decidere indirizzo primario GBP** (Aldo Moro vs Isola Bianca) e allineare `carRentalBase` in `src/lib/jsonLd.ts:416` | Alto — risolve NAP dilution su 41 pagine | 1h |
| 2 | 🔴 CRITICAL | **Rimuovere `aggregateRating` hardcoded** in `localBusinessJsonLd` (jsonLd.ts:61-67); usare solo quello dinamico via prop | Alto — evita conflitto schema | 30min |
| 3 | 🔴 HIGH | **Claimare Bing Places** (powers ChatGPT, Copilot, Alexa — 45% utenti AI) | Molto alto su AI search | 2h |
| 4 | 🔴 HIGH | **Claimare Apple Business Connect** (uso raddoppiato 27%) | Alto | 1h |
| 5 | 🟡 HIGH | Eseguire `node scripts/seo-similarity.mjs` e fixare eventuali pagine località con <60% unique content | Alto — protezione da Core Update | 4h |
| 6 | 🟡 HIGH | Implementare automazione **WhatsApp post-noleggio** con link Google Reviews per garantire velocity ≥1/3sett (18-day rule) | Alto — review velocity = ~20% local pack | 4h |
| 7 | 🟡 MEDIUM | Aggiungere 2-3 **categorie secondarie** GBP (Limousine, Motor scooter dealer, ATV rental, Airport shuttle) | Medio | 30min |
| 8 | 🟡 MEDIUM | **Outreach digital PR** locale (La Nuova Sardegna, Olbia.it, blog viaggio) per "best of" inclusion stagione 2026 | Molto alto su AI visibility | 8-16h |
| 9 | 🟡 MEDIUM | Aggiungere **banner stagionale** su pagine principali per copertura nov-mar (intent informativo fuori stagione) | Medio | 2h |
| 10 | 🟢 LOW | Iscrizione **Trustpilot** + invito ai clienti via flusso post-noleggio (multi-platform = 6 sites benchmark) | Medio | 2h setup + ongoing |

---

## Limitazioni di questa analisi

Questa analisi è basata su lettura diretta del repository, della memoria progetto e dello schema JSON-LD. **NON include** dati che richiedono tool esterni o accesso live:

| Cosa NON è stato analizzato | Strumento per farlo |
|---|---|
| **Geo-grid ranking** reale nel raggio Olbia/Costa Smeralda (Share of Local Voice) | DataForSEO MCP → `/seo maps geo-grid` |
| **GBP Insights** reali (calls, direction requests, photo views) | Google Business Profile API direct |
| **NAP consistency esterna** (variazioni del nome/indirizzo su 50+ directory IT) | Moz Local, BrightLocal, Whitespark Citation Tracker |
| **Backlink profile** completo (DA, referring domains, anchor text) | `/seo backlinks` con Moz/Bing API o DataForSEO |
| **Posizione live nel Local Pack** per query target ("noleggio auto Olbia", "car rental Costa Smeralda") | DataForSEO `google_local_pack_serp` |
| **Velocity recensioni reali ultimi 90gg** (gap detection) | Verifica diretta in Admin → SEO Editor → Reviews |
| **Citazioni AI** in ChatGPT/Perplexity/AI Overviews per query brand + non-brand | DataForSEO AI scraper o test manuale |

Per coprire i gap principali esegui in sequenza:
1. `/seo geo https://www.ksrentsardinia.com` — AI search readiness completo
2. `/seo backlinks https://www.ksrentsardinia.com` — link profile
3. `/seo maps audit https://www.ksrentsardinia.com` — geo-grid + competitor radius (richiede DataForSEO MCP)
4. `/seo google` — GSC + GA4 dati reali (config OAuth già attiva da memory)

---

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Built by agricidaniel — Join the AI Marketing Hub community
🆓 Free  → https://www.skool.com/ai-marketing-hub
⚡ Pro   → https://www.skool.com/ai-marketing-hub-pro
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
