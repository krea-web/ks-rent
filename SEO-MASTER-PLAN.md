# SEO MASTER PLAN — KS Rent Sardinia

> **Piano SEO definitivo e unico.** Sostituisce e consolida tutti i piani precedenti
> (ACTION-PLAN, FULL-AUDIT, GEO-ANALYSIS, GBP-CONTENT-TODO, SEO-STRATEGY, BRIEF,
> LOCAL-SEO-ANALYSIS — rimossi perché completati/superati).
>
> **Data:** 2026-05-26 · **Basato su:** 3 analisi specialistiche (backlinks, maps/local, GEO/AI)
> + audit on-page/SXO + audit cluster keyword ([docs/seo-cluster-noleggio-auto-olbia.md](docs/seo-cluster-noleggio-auto-olbia.md)).
>
> **Obiettivo:** aumentare i backlink esterni, perfezionare la SEO, intercettare keyword
> non sfruttate, e portare la struttura tecnica al 100% di leggibilità per i crawler.

---

## 0. STATO ATTUALE — punteggi sintesi

| Area | Score | Giudizio |
|------|-------|----------|
| **Schema / Structured Data** | 88/100 | Eccellente (tra i migliori del settore locale IT) |
| **GEO / AI Search** | 74/100 | Buono, gap su crawlability JS + presenza off-site |
| **Local / Maps** | 61/100 | Profilo GBP giovane e incompleto |
| **Backlinks** | Tier 0 | ~5-9 referring domain, **tutti nofollow** — profilo molto sottile |
| **On-page / contenuti** | Forte | Guide e service page ottime; pagine dinamiche da arricchire |

**Contesto chiave:** dominio attivo da **aprile 2025** (~13 mesi → coda del "sandbox" Google,
9-18 mesi per query commerciali locali). La SEO ora **composta nel tempo**: ogni link e ogni
fix di oggi rende molto di più tra 3-6 mesi.

**3 problemi trasversali segnalati da PIÙ analisi (massima priorità):**
1. 🔴 **Incoerenza NAP/indirizzo** (codice vs GBP) — frena tutto il local.
2. 🔴 **Pagine `client:only` invisibili ai crawler senza JS** (/prenotaora vuota, /flotta EN/DE/FR, /chisiamo a rischio cloaking).
3. 🟠 **Profilo backlink quasi inesistente** — è il vero collo di bottiglia della visibilità organica.

**Legenda owner:** 🤖 = lo faccio io in codice · 👤 = azione manuale tua (account/outreach) · 🤝 = misto.

---

## 1. 🔴 FONDAMENTA — da fare PRIMA di tutto (P0)  ✅ **COMPLETATA (2026-05-26)**

Senza queste, ogni altra attività rende meno o crea confusione agli algoritmi.

### F1. DECISIONE: quale indirizzo è "il principale"? ✅ **DECISO → Viale Aldo Moro 367**
**Decisione utente (2026-05-26): indirizzo principale = Viale Aldo Moro 367** (sede legale, già coincidente col GBP verificato → scelta a minor rischio: allineato il codice al GBP, non viceversa).
Contesto storico dell'incoerenza risolta:
- GBP → Aldo Moro 367 (sede legale) ✅
- `carRentalBase` in jsonLd.ts → era Isola Bianca 38 → **ora Aldo Moro 367**
- `geo.position` meta in BaseLayout → era coord. Isola Bianca → **ora coord. Aldo Moro**

### F2. Allineare il NAP ovunque 🤝
- 🤖 **FATTO in codice**: `carRentalBase` (address + geo) + provider in `buildLocationJsonLd` + `geo.position`/`ICBM` meta in `BaseLayout.astro` → tutti su **Aldo Moro 367 / 40.944573, 9.497897**. `localBusinessJsonLd` era già allineato. Il punto porto Isola Bianca resta come **punto di consegna secondario** (array `location[1]` + contenuti pagina porto), corretto e non dannoso per il NAP.
- 👤 **DA FARE (manuale)**: allineare le directory — GBP, PagineGialle, Cylex, Hotfrog, Tripadvisor, carmappa, empresite, aziendeeasy → **nome esatto "KS Rent Sardinia", indirizzo identico (Aldo Moro 367), tel +39 344 6107071**. Una sola incoerenza crea attrito.

### F3. priceRange coerente ✅ **FATTO**
`localBusinessJsonLd` diceva `€€€` → standardizzato a **`€€`** (coerente con `carRentalBase`; la Panda parte da 40€/giorno). Verificato: zero `€€€` residui nel dist.

### F4. Crawlability: contenuto statico sulle pagine `client:only` ✅ **FATTO**
Creati 2 componenti Astro condivisi (4 lingue ciascuno) + 1 per il chi siamo:
- **`BookingIntro.astro`** → su `/prenotaora` + /en/book-now + /de/jetzt-buchen + /fr/reserver: come prenotare (4 step), pagamenti senza carta, link interni a flotta/tariffe/hub. (Prima: ZERO testo per i crawler.)
- **`FleetIntro.astro`** → su `/flotta` (+ EN/DE/FR): ~180 parole introduttive localizzate + link agli hub di servizio.
- **`AboutCrawlerText.astro`** → contenuto "chi siamo" enciclopedico ora presente su **tutte e 4 le lingue** (EN/DE/FR erano completamente vuote server-side; IT migrato al componente condiviso).
- ⚖️ **Decisione su `sr-only` (chisiamo)**: mantenuto `sr-only` invece di renderlo visibile. Il contenuto è **coerente** con quello che la view React mostra visivamente (trascrizione accessibile/indicizzabile, non testo divergente → rischio cloaking basso) e questo evita la duplicazione visibile. La versione "tutto visibile" richiederebbe un refactor della view React `ChiSiamo` — rinviata come scelta di prodotto.

---

## 2. 🔴 BACKLINK — aumentare i link esterni (priorità #1 dell'utente)

**Diagnosi:** ~5-9 referring domain, tutti nofollow (directory + social). **Zero link editoriali dofollow.**
I primi 3-5 link editoriali reali (hotel, portale turistico, stampa) valgono più di 50 directory.

> **Nota tecnica** 🤖: il `robots.txt` attuale **blocca AhrefsBot e SemrushBot** → non puoi monitorare i tuoi backlink con quei tool. Decisione: **lasciare bloccato** (stealth competitor) e monitorare via **Bing Webmaster Tools + GSC "Link"** (gratis). Se vuoi usare Ahrefs/Semrush per te, si possono sbloccare — dimmelo.

### 2A. Quick win — 0-60 giorni (facili, alta certezza) 👤
| # | Azione | Tipo | Valore |
|---|--------|------|--------|
| B1 | **GBP** completo + verificato (vedi §3) | citazione local | Critico |
| B2 | **Camera di Commercio Sassari / registroimprese.it** — verifica/aggiungi campo sito web (KS Rent S.R.L. esiste già come società) | istituzionale dofollow | Alto |
| B3 | **Tripadvisor** — completa listing, campo "Sito web", 10+ foto, rispondi a tutte le recensioni | tourism trust | Alto |
| B4 | **Bing Places for Business** (bingplaces.com) — feed Copilot/ChatGPT/Alexa | local citation | Medio-Alto |
| B5 | **Apple Business Connect** (businessconnect.apple.com) — Apple Maps/Siri, turisti iPhone | local citation | Medio-Alto |
| B6 | **Audit NAP** sulle 7 directory esistenti (nome/indirizzo/tel identici a GBP) | igiene citazioni | Alto |
| B7 | **Waze + HERE** business pin (utile per traffico aeroporto) | navigazione | Basso-Medio |

### 2B. Medio termine — 60-180 giorni (outreach/contenuti) 👤
| # | Azione | Tipo | Valore |
|---|--------|------|--------|
| B8 | **ANIASA** (associazione naz. autonoleggio) — domanda di adesione → link in directory soci | settore dofollow | **Molto Alto** (unico link di categoria) |
| B9 | **sardegnaturismo.it** (portale Regione Sardegna) — sezione operatori/mobilità | governo, geo dofollow | **Molto Alto** |
| B10 | **Confindustria / CNA Sardegna** — directory soci | istituzionale | Alto |
| B11 | **matrimonio.com** (DR ~60) supplier "Noleggio Auto/Trasporti" Sardegna + sardinia-wedding.com | verticale | Alto |
| B12 | **Hotel concierge** (Pitrizza, Cala di Volpe, Romazzino, Colonna, resort Gallura) — pagine "partner/servizi" | **editoriale dofollow** | **Molto Alto** (miglior link per il lusso) |
| B13 | **Yacht charter** Porto Cervo/Portisco — link incrociati referral | editoriale dofollow | Alto (audience HNW) |
| B14 | **Portali turistici EN** ilikesardinia.com, sunnysardinia.com, sardinia.com — pitch sezione "car hire" | editoriale | Alto |
| B15 | **Guide link-bait** già pubblicate (/guide) → outreach a 10-15 travel blogger che le citino come risorsa | contenuto+PR | Alto, composto |

### 2C. Lungo termine — 6-18 mesi (investimento, valore composto) 👤
| # | Azione | Tipo | Valore |
|---|--------|------|--------|
| B16 | **Stampa locale** (La Nuova Sardegna, Olbia24, Gallura Oggi) — angolo "startup sarda sfida Hertz con supercar" / report turismo lusso | press dofollow | Molto Alto |
| B17 | **Stampa nazionale auto/lifestyle** (AutoMoto, HDmotori, Grazia/Vogue viaggi) — "guida una supercar in Sardegna" (pitch gen-feb pre-stagione) | press DR 55-75 | Molto Alto |
| B18 | **Guest post** su blog viaggi IT (itinerari in supercar/moto Gallura) — link contestuale | editoriale dofollow | Alto |
| B19 | **OTA aggregatori** (Rentcars.com, CarJet) — canale prenotazione + link DR alto | commerce | Molto Alto |
| B20 | **Profili brand** Trustpilot, Foursquare, GetYourGuide/Viator supplier | brand entity | Medio |

---

## 3. 🟠 LOCAL / MAPS (Google Maps + local pack)

**Maps Health 61/100.** Geo-grid stimato: forti su **scooter/moto** (#1-3, nicchia poco presidiata),
deboli su **aeroporto** (GBP a 6,8 km) e **Porto Cervo** (45 km).

### 3A. GBP — profilo al 100% 👤 (alcuni testi li preparo io 🤖)
| # | Azione | Priorità |
|---|--------|----------|
| L1 | **Categorie secondarie** mancanti: "Motorcycle rental agency", "Scooter rental service", "Luxury car rental" → cattura query verticali oggi invisibili | **Critico** |
| L2 | **Prodotti/Servizi GBP**: ogni categoria veicolo con prezzo-range + foto (rich card su Maps) | Alto |
| L3 | **Foto 25+**: flotta, consegna aeroporto OLB (con logo), punto porto, team Milo, interni, firma contratto | Alto |
| L4 | **Q&A seeded 6-8** (le preparo io dai FAQ esistenti): senza carta, aeroporto, scooter, età, Porto Cervo | Medio |
| L5 | **Post settimanali** giu-set (veicolo in evidenza + CTA Prenota → /prenotaora) | Medio |
| L6 | **Link prenotazione** GBP → /prenotaora (bottone "Prenota") | Medio |
| L7 | **Descrizione 750 char** ottimizzata (keyword naturali: scooter, moto, quad, aeroporto, senza carta) — la scrivo io | Medio |
| L8 | **Area di servizio** Olbia + Gallura + Costa Smeralda | Medio |

### 3B. Recensioni — obiettivo 100 entro dic 2026 👤
A 41 recensioni / 3,1 al mese siamo lontani dai competitor (200-500). Leve:
- **WhatsApp automatico** post-restituzione con link diretto recensione (il sistema booking è già digitale → trigger fattibile)
- **QR code** su busta chiavi / cruscotto
- **Email D+2** post-noleggio
- **Rispondere a tutte** entro 24h (segnale "business attivo")
- Target stagione: da 3 → **8-10/mese** (giu-set = +40 recensioni)

### 3C. Citazioni mappa mancanti 👤
Bing Places (B4), Apple Maps (B5), **OpenStreetMap** (nodo `amenity=car_rental` → alimenta Apple/HERE/TomTom/Waze a cascata), Foursquare.

### 3D. Geo-grid aeroporto 👤 (lungo termine)
La debolezza strutturale è l'indirizzo lontano dall'aeroporto OLB (vale ~30% del traffico stagionale ad alto intento). Valutare un **secondo profilo GBP all'aeroporto** (richiede presenza fisica verificabile — accordo parcheggio/handling).

---

## 4. 🟠 GEO / AI SEARCH (citabilità su ChatGPT, Perplexity, AI Overviews)

**GEO Health 74/100.** robots.txt AI eccellente, schema ottimo. Gap principali off-site + crawlability.

### 4A. Codice 🤖
| # | Azione | Stato |
|---|--------|-------|
| G1 | **llms.txt**: aggiungere le **18 guide** (contenuto più citabile: tabelle prezzi, itinerari), la pagina **/chisiamo**, e una **sezione "English summary"** (150-200 parole) per i LLM anglofoni | ✅ FATTO (21 guide + /chisiamo + English summary) |
| G2 | **Schema `HowTo`** sulle guide durata (weekend/5/7/10/14/30 giorni — struttura a step perfetta) | ✅ FATTO su **tutte e 4 le lingue** (24 guide). IT inline; EN/DE/FR via `src/data/guide-schema.ts` (`buildDurationHowTo`) |
| G3 | **Schema `Event`** sulla guida sagre/eventi Gallura 2026 | ✅ FATTO su **tutte e 4 le lingue** (6 eventi con data esplicita). IT inline; EN/DE/FR via `buildGalluraEvents` |
| G4 | **Tipo `MotorcycleRental`** aggiunto al `@graph` per query moto/scooter | ✅ FATTO (⚠️ MotorcycleRental non esiste su schema.org → `makesOffer` con item tipati `Motorcycle`) |
| G5 | **robots.txt**: aggiungere `DuckAssistBot` (DuckDuckGo AI) | ✅ FATTO |
| G6 | **Passaggi pagine dinamiche** (località/spiagge): da 60-90 → **134-167 parole** auto-conclusive (+1 dato specifico ciascuno) | ✅ **FATTO** — tutte le **39 pagine** (19 località + 20 spiagge) in `src/data/locality-content.ts`: 4 blocchi ciascuna (whyUs/noCreditCard/delivery/vacation) espansi a ~135-160 parole auto-conclusive con dato concreto, fatti accurati, niente prezzi franchigia. (~156 passaggi.) |
| G7 | **`inLanguage` array** nel WebSite schema + `speakable` su pagine hub (olbia/aeroporto/porto) | 🟡 inLanguage ✅ · speakable hub ⬜ (bassa priorità) |
| G8 | **llms.txt auto-generato** da `.astro` (legge il review count da Supabase → niente drift) | ✅ FATTO (endpoint `src/pages/llms.txt.ts`, review count da `getAggregateRating()`; rimosso `public/llms.txt`) |

### 4B. Presenza off-site (i 3 segnali AI più forti, oggi ASSENTI) 👤
| # | Azione | Perché |
|---|--------|--------|
| G9 | **Wikidata item** per KS Rent S.R.L. (P.IVA, founding, founders, location) + URL in `sameAs` | Alternativa praticabile a Wikipedia → anchor nel Knowledge Graph |
| G10 | **Canale YouTube** @ksrentsardinia (1 video: ritiro aeroporto + tour flotta) + URL in sameAs | YouTube = correlazione più alta (~0.74) per citazioni AI |
| G11 | **LinkedIn Company Page** + LinkedIn personali dei fondatori | 2° segnale brand più forte |

---

## 5. 🟡 KEYWORD NON SFRUTTATE (keyword gap)

Dall'audit cluster ([docs/seo-cluster-noleggio-auto-olbia.md](docs/seo-cluster-noleggio-auto-olbia.md)) e dall'analisi.

| # | Gap | Azione | Stato |
|---|-----|--------|-------|
| K1 | ~~Auto di lusso / supercar~~ → **Auto sportive** | ⚖️ **RIVALUTATA (utente, 2026-05-26)**: la flotta NON ha lusso/supercar esotiche (solo RS3/M2 sportive + Classe A premium) → landing "lusso" sarebbe intent-mismatch. **FATTO** invece: landing **`/noleggio-auto-sportive-olbia`** (4 lingue) onesta su RS3+M2+Classe A — `SportiveContent.astro` + 4 wrapper + `sportiveRentalJsonLd`/`sportiveFaqJsonLd` (item tipati `Car`) + hreflang + link da FleetIntro + mappe-sito. |
| K2 | **Scooter / moto / quad** | Landing `/noleggio-moto-scooter-olbia` | ✅ **FATTO** |
| K3 | **Noleggio lungo termine / mensile** | Esistono le *guide* durata; manca una **service landing** "noleggio lungo termine Olbia" (intento commerciale B2B/residenti). Valutare | 🤖 da valutare |
| K4 | **Deposito cauzionale / franchigia** | Guida informazionale (converte indecisi, **no prezzi** → CTA WhatsApp) | 🤖 da fare |
| K5 | **Località mancanti**: Gallura (hub), Santa Teresa (esclusa per scelta) | Record Supabase via SEO Editor | 👤 admin |
| K6 | **Under 25 / neopatentati** | Guida dedicata | 🤖 da valutare |
| K7 | **Espansione EN/DE/FR** | Più keyword localizzate sulle pagine già tradotte | 🤝 |

---

## 6. 🟡 ON-PAGE / SXO / CRAWLABILITÀ STRUTTURALE

### S1. Pagina `/noleggio-auto-olbia` (analisi SXO) 🤖
Il **page-type è corretto** (service page), ma in SERP compete con broker/OTA (Rentalcars, Auto Europe, DiscoverCars) e con il **local pack** (Maps). Per vincere:
- **Prova sociale above-the-fold** (rating 5,0/41 + trust badge) più evidente
- **CTA prezzo/preventivo** più chiara (senza pubblicare franchigia)
- **Freschezza** (data aggiornamento visibile)
- Già forte: USP senza-carta, consegna gratuita, FAQ, schema.

### S2. Link interni nell'HTML statico 🤖
L'audit segnala **362 pagine "orphan"** nel link-graph statico: Navbar e Footer sono isole React → molti link di navigazione compaiono solo dopo il JS. Il **Footer è server-rendered** (i crawler lo vedono) e la sitemap copre la scoperta, ma per massimizzare:
- Verificare che il Footer (con tutti i link service/località/guide) sia sempre nell'HTML statico ✅ (confermato)
- Valutare un blocco di **link contestuali statici** in fondo alle pagine dinamiche (related località/spiagge/veicoli) — molti già presenti via cross-sell.

### S3. Schema veicolo `model` separato 🤖
`buildVehiclePageJsonLd` usa `name` composto invece di `model` come proprietà a sé → ridotta leggibilità entity. Aggiungere `model`, `brand`, `vehicleEngine`.

---

## 7. ROADMAP — ordine di esecuzione consigliato

| Fase | Cosa | Owner | Tempi |
|------|------|-------|-------|
| ✅ **Fase A — Fondamenta** | F1 (deciso: Aldo Moro 367) → F2 NAP codice, F3 priceRange, F4 crawlability client:only — **FATTA 2026-05-26**. Resta solo F2-manuale (allineamento directory) | 🤝 | ~~settimana 1~~ |
| **Fase B — Keyword + AI on-page** | K1 landing lusso, G1-G8 (llms.txt, HowTo, Event, passaggi) | 🤖 | settimana 1-2 |
| **Fase C — Local foundation** | B1-B7 quick-win backlink + L1-L8 GBP + 3C citazioni mappa | 👤 (testi 🤖) | settimana 1-4 |
| **Fase D — Recensioni + off-site AI** | 3B sistema recensioni, G9-G11 (Wikidata/YouTube/LinkedIn) | 👤 | mese 1-2 |
| **Fase E — Backlink editoriali** | B8-B15 (ANIASA, sardegnaturismo, hotel, yacht, portali) | 👤 | mese 2-6 |
| **Fase F — Digital PR + scala** | B16-B20 (stampa, guest post, OTA) | 👤 | mese 6-18 |

---

## 8. COSA FACCIO IO (codice) vs COSA FAI TU (manuale)

**🤖 Posso eseguire io subito in codice (nessuna dipendenza esterna):**
F2 (dopo tua decisione F1), F3, F4, K1 landing lusso, K4/K6 guide, G1-G8 (llms.txt + schema + passaggi), L4/L7 (testi GBP/Q&A pronti da incollare), S1-S3.

**👤 Richiedono accesso ai tuoi account / outreach (non posso farli io):**
F1 (decisione), tutte le rivendicazioni profilo (GBP, Bing, Apple, Wikidata, YouTube, LinkedIn, OSM), l'audit NAP nelle directory, il sistema recensioni, e tutto l'outreach backlink (B2-B20).

---

## 9. MONITORAGGIO

- **GSC**: indicizzazione (Copertura), query/click, sezione **Link** (backlink visti da Google), reinvio sitemap dopo ogni batch di pagine nuove.
- **Bing Webmaster Tools**: backlink + indicizzazione (gratis, Bingbot già ammesso).
- **GA4** `G-1JL353W8QW`: traffico organico, conversioni booking.
- **Script repo**: `audit-internal-links.mjs`, `audit-pages-visual.mjs`, `seo-similarity.mjs`, `indexnow-ping.mjs`.
- **KPI 6 mesi**: referring domain dofollow da 0 → 8-12 · recensioni da 41 → 100 · click organici in crescita costante · top-3 local pack su "noleggio scooter/moto olbia".

---

## 10. DECISIONI APERTE (servono a te)

1. ~~**Indirizzo principale** (F1)~~ → ✅ **DECISO: Viale Aldo Moro 367** (2026-05-26). Codice allineato. Resta da allineare le directory manualmente (F2-manuale).
2. **Sbloccare Ahrefs/Semrush** nel robots.txt per auto-monitoraggio? (oggi bloccati)
3. **Secondo GBP all'aeroporto** (3D): perseguibile un punto fisico/accordo?
4. **Budget Ads** (fuori da questo piano ma collegato): per traffico immediato mentre la SEO matura.

---

_Stato: **Fase A completata** (F1-F4 in codice, 2026-05-26). Prossimo passo consigliato: **Fase B → K1 (landing auto di lusso `/noleggio-auto-lusso-olbia` in 4 lingue)** — gap critico — poi G1-G8 (llms.txt + schema HowTo/Event + passaggi pagine dinamiche)._
