# SEO / GEO / AEO — Piano di crescita (giugno 2026)

> Sintesi dell'audit live (skill `seo-cluster`, `seo-local` + esplorazione codice/GEO).
> Deliverable **strategico**: nessuna pagina creata in questa sessione — questo file è il
> piano da eseguire in sessioni dedicate. Fonti grezze: `C:\tmp\seo-cluster.md`, `C:\tmp\seo-local.md`.
>
> ⚠️ **Già esistenti** (NON ricreare — alcuni doc cluster datati li segnalavano come gap):
> landing **moto/scooter** 4 lingue (`/noleggio-moto-scooter-olbia` + EN/DE/FR), landing
> **sportive** (`/noleggio-auto-sportive-olbia`), guida **sagre/eventi Gallura 2026** (4 lingue),
> guida **deposito/franchigia in tutte e 4 le lingue** (IT+EN+DE+FR complete, registrate in
> `guide-articles.ts` con hreflang `itEquivalent` — verificato giu 2026, **nessun lavoro residuo**).
>
> 🧭 **Decisioni owner (giu 2026)** — vincolanti su questo piano:
> 1. **Nessuna etichetta "lusso"** da nessuna parte (no landing "lusso Olbia"/"lusso Porto Cervo").
> 2. **Nuovi contenuti = Guide (blog)** per intenti long-tail.
> 3. **Pagine non-guida** (località, service landing) **solo dopo approvazione esplicita**, una alla volta.
> Niente è in produzione: le voci sotto sono analisi/shortlist da approvare, non lavoro avviato.

---

## 0. Stato attuale (sintesi)

- **Local SEO score: 65,5/100.** Tecnica eccellente (schema 88/100, 4 lingue, ~386 pagine, 24 `sameAs`,
  `aggregateRating` dinamico), recensioni 5,0/58. **Colli di bottiglia**: GBP incompleto, **0 backlink
  editoriali dofollow** (autorità link 18/100), prossimità aeroporto OLB (−6,8 km), velocity recensioni bassa.
- **AEO forte**: llms.txt con 31 citable facts, robots.txt con 25+ crawler AI, FAQ/HowTo/Speakable,
  disambiguazione vs KS Rent Roma. **Da estendere**: vedi §3.
- Dominio giovane (apr 2025): la crescita organica è **maturazione + autorità**, non un bug di codice.

---

## 1. Gap keyword / intenti → nuove pagine (lavoro di CODICE)

Priorità su impatto × fattibilità. Per ogni pagina: aggiornare `PATH_MAP_FULL` in [src/lib/i18n.ts](../src/lib/i18n.ts)
(4 lingue), riusare i layout esistenti (service landing `.astro`, `GuideArticleLayout`, o record Supabase),
schema dedicato, link interni dal pillar `/noleggio-auto-olbia` e verso flotta/tariffe.
**Regola #1**: meta_description unica. **Regola #13**: mai prezzi franchigia.

> ❌ **Rimosse per decisione owner**: `/noleggio-auto-lusso-olbia` e qualsiasi pagina con
> etichetta "lusso" (incl. "lusso Porto Cervo"); `/noleggio-auto-matrimonio-sardegna` (nicchia +
> vicina al tema lusso). Non verranno create.

| # | Pagina | Keyword / intento | Vol. stimato | Tipo | Priorità |
|---|--------|-------------------|--------------|------|----------|
| G3 | `noleggio-auto-gallura` (record Supabase `seo_locations`) | keyword ombrello geografica — **0 codice**, solo Admin SEO Editor | 500–1.000/m | Location dinamica | **ALTA** |
| G4 | `/guide/noleggio-auto-olbia-under-25-neopatentati` (4 lingue) | requisiti età — alta conversione, USP se nessuna restrizione young-driver | 300–600/m IT + 400–900 EN | Guida (Article+FAQ) | **ALTA** |
| G5 | `/transfer-aeroporto-olbia-costa-smeralda` (focus EN/DE) | consegna auto a hotel/villa (NON NCC) — **conferma operativa owner** | 700–1.500/m EN | Service landing | **ALTA** |
| G6 | `/guide/road-trip-sardegna-nord-itinerario` (4 lingue) | road trip Sardegna nord — funnel-top, cross-sell flotta | 600–1.200/m IT + 900–2.000 EN | Guida | MEDIA |
| G7 | Location Supabase: La Maddalena, Palau, Santa Teresa, Tempio Pausania | long-tail geografico estivo (traghetti) — **0 codice** | 200–450/m cad. | Location dinamica | MEDIA |
| G8 | `/noleggio-auto-lungo-termine-olbia` | mensilità / residenti / B2B | — | Service landing | MEDIA |
| G9 | Sezione "alta stagione/prezzi" nelle guide durata esistenti | noleggio Olbia luglio/agosto/ferragosto — **evitare pagina standalone** (cannibalizzazione) | 600–1.400/m estivo | Update guide | BASSA |
| G10 | Potenziare USP/recensioni nel pillar `/noleggio-auto-olbia` | "migliore autonoleggio Olbia" (KD alta) — non standalone | 700–1.400/m | Update pillar | BASSA |

> G3/G7 = **quick win senza codice** (solo inserimento dati in Admin → SEO Editor; slug localizzati
> auto via pattern esistente). Prima di crearle: verificare in Supabase se gli slug esistono già.

---

## 2. GEO / AEO — citabilità AI (CODICE + off-site)

Estensioni in [src/lib/jsonLd.ts](../src/lib/jsonLd.ts) (estendere, non riscrivere — Nota #3) + [src/pages/llms.txt.ts](../src/pages/llms.txt.ts).

**Schema (quick win, alto valore entity):**
1. Nodo `@graph[0]` di `localBusinessJsonLd`: aggiungere **`email`**, **`hasMap`** (`https://maps.google.com/?cid=9638199341974199698`),
   **`contactPoint`** (telefono + `availableLanguage` IT/EN), e **`makesOffer`** (consegna aeroporto/porto, senza-carta).
2. `serviceArea` con `GeoCircle` (raggio km da Olbia) nel Service di consegna → rafforza "consegna a domicilio Gallura".
3. Estendere **`HowTo`** ad altre guide pratiche (oggi solo 2); valutare **`Trip`** (itinerari) e **`Event`** (sagre/eventi Gallura già a calendario).
4. `FAQPage` anche sulle **location dinamiche** (oggi FAQ solo su alcune service page).
5. `buildVehiclePageJsonLd`: preferire `name` corto + `brand`/`model` espliciti (entity matching più pulito).

**llms.txt**: aggiungere le rotte **moto/scooter** e (quando create) lusso/matrimonio; mantenere i citable facts aggiornati (no drift, già build-time).

**Entity / off-site (no codice, alto impatto su Knowledge Graph + citazioni LLM):**
- **LinkedIn Company Page** + profili fondatori → aggiungere a `SAME_AS`.
- **YouTube** (1 video "ritiro aeroporto + tour flotta") — correlazione alta con citazioni AI.
- **Wikidata**: rivalutare tra 6–12 mesi (serve notabilità/backlink); rimuovere il tag `wikidata=Q138824571` orfano dal nodo OSM.

---

## 3. Local SEO — GBP / recensioni / NAP / autorità (off-site / manuale)

Quasi tutto **fuori dal repo** (pannello GBP, directory). Costo ~0, impatto immediato sul local pack.

**CRITICA (entro 7 giorni):**
1. **Categorie secondarie GBP**: "Motorcycle rental agency", "Scooter rental service", "Luxury/Sports car rental".
   Senza, le query verticali (moto/scooter/sportive) **non generano impressioni** nel local pack.
2. **25+ foto GBP** (5/veicolo + team Milo + aeroporto + porto), con GPS EXIF; poi 3–5/settimana.
3. **Sollecito recensioni sistematico** a D+2 dalla riconsegna (manuale ora, poi workflow N8N + Gmail —
   Nota #14): messaggio WhatsApp con link diretto recensione Google. Target 100 recensioni entro dic 2026.

**ALTA (entro 14 giorni):**
4. **Audit NAP manuale directory**: nome esatto "KS Rent Sardinia" (non solo "KS Rent S.R.L."),
   indirizzo "Viale Aldo Moro 367" (non Isola Bianca 38), tel "+39 344 6107071". Priorità: GBP > PagineGialle > Cylex > Tripadvisor.
5. **Post GBP settimanali** (giu–set): veicolo in evidenza + CTA `/prenotaora`.
6. **Q&A GBP seeded** (8 domande, incl. disambiguazione KS Rent Roma).
7. **Link "Prenota" GBP → `/prenotaora`** + sezioni Servizi/Prodotti.

**MEDIA (entro 30 giorni):**
8. Schema `email`/`hasMap`/`contactPoint` (vedi §2.1) — unico item di codice in questo blocco.
9. **Backlink editoriali dofollow** (il vero collo di bottiglia): outreach hotel partner + portali turistici Gallura.
   Foursquare/Yelp (ritentare), ANIASA (categoria), Kompass, Yandex Business.
10. **Tripadvisor** completato + risposta a tutte le recensioni.

**Correzioni NAP minori (codice)**: standardizzare il telefono visibile a `+39 344 6107071`; `meta author`
da "KS Rent S.R.L." → "KS Rent Sardinia" in [BaseLayout.astro](../src/layouts/BaseLayout.astro).

---

## 4. Roadmap consigliata (rivista — owner giu 2026)

Nessuna pagina parte senza ok esplicito; le guide si fanno **una alla volta**.
- **Schema GEO/AEO §2.1** (`email`/`hasMap`/`contactPoint`/`makesOffer`): solo codice, nessuna nuova pagina, alto valore entity → candidato n°1.
- **Guide (blog)**, se approvate: G4 under-25 → G5 "come arrivare in Costa Smeralda" (in formato **guida**, non service landing) → G6 itinerario Nord.
- **Cluster località** (G3/G7) via Admin/Supabase: solo se sblocchi il "decidiamo dopo".
- **Parallelo (owner, no codice)**: blocco Local SEO §3 — categorie GBP, foto, recensioni, NAP, backlink. ROI più rapido.

> ✅ **Già fatto**: traduzioni EN/DE/FR della guida deposito/franchigia (esistenti, verificate giu 2026 — nessun lavoro residuo).

## 5. Limitazioni dati
Senza tool a pagamento (DataForSEO/BrightLocal/GSC live) i volumi keyword sono ordini di grandezza e il
ranking GBP/competitor non è misurato in tempo reale. I numeri servono a prioritizzare, non come previsioni.
