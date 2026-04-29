# CLAUDE.md — KS Rent Sardinia | Progetto SEO/AEO/GEO

> **Prima di fare qualsiasi cosa, leggi questo file intero. Poi esegui il PASSO 0.**

---

## PASSO 0 — LETTURA OBBLIGATORIA DEL REPO PRIMA DI INIZIARE

Prima di scrivere una riga di codice, leggi questi file per capire la struttura reale del progetto:

```
# 1. Leggi il sitemap per avere tutte le 59 route
public/sitemap.xml

# 2. Leggi tutte le route definite nel router
src/App.tsx

# 3. Leggi il componente universale per pagine dinamiche (locality + spiagge)
src/pages/DynamicPage.tsx

# 4. Leggi come vengono iniettati i meta tag (react-helmet-async)
src/components/SEOHead.tsx

# 5. Leggi tutti gli schema JSON-LD esistenti
src/lib/jsonLd.ts

# 6. Leggi la configurazione Vercel (redirect e rewrite)
vercel.json

# 7. Leggi il generatore sitemap
generate-sitemap.js

# 8. Leggi l'index.html per verificare meta tag statici
index.html

# 9. Leggi il componente FAQ esistente
src/components/FAQSection.tsx
```

**Non procedere finché non hai letto tutti questi file.**

---

## IDENTITA DEL PROGETTO

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
| **Anno fondazione** | 2025 |
| **Sede operativa** | Viale Isola Bianca 38, 07026 Olbia (SS) — coord: 40.922967, 9.520115 |
| **Sede legale** | Viale Aldo Moro 367, 07026 Olbia (SS) — coord: 40.944573, 9.497897 |
| **Orari** | 10:00 – 22:30, 7 giorni su 7 |
| **Entita legale distinta da** | KS Rent S.r.l. (Roma) — sito `ksrent.it` — **NON siamo loro** |

### Social e directory
- Instagram: `https://www.instagram.com/ksrentsardinia`
- TikTok: `https://www.tiktok.com/@ksrentsardinia`
- Google Maps: `https://www.google.com/maps/search/?api=1&query=KS+RENT+SRL,+Viale+Aldo+Moro,+367,+Olbia`
- Google Review: `https://g.page/r/CZKdxnQ8w8GFEBM/review`
- Pagine Gialle: `https://www.paginegialle.it/ksrentsardinia-olbia`
- Tripadvisor: 'https://www.tripadvisor.it/Attraction_Review-g187883-d34295915-Reviews-KS_RENT_SARDINIA-Olbia_Province_of_Olbia_Tempio_Sardinia.html'
- Cylex: `https://www.cylex-italia.it/olbia/ks-rent-sardinia-16333738.html`
- HotFrog: `https://www.hotfrog.it/company/015164232099b216397bae94e44fadc7/ks-rent-sardinia/`
- Trova Aperto: `https://trova-aperto.it/olbia/ks-rent-sardinia-2967671`
- Firmania: `https://firmania.it/olbia/ks-rent-sardinia-5234308`

### Asset
- Logo: `https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/asset/KSRENTlogo.png`
- OG Image: `https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/asset/og-image.jpg`
- Favicon: `https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/asset/ksrent-favicon.webp`

### Zona servita
Olbia, Gallura, Costa Smeralda, Porto Cervo, San Teodoro, Palau, Baja Sardinia, Romazzino, Porto Rotondo, Arzachena, La Maddalena, Budoni, Golfo Aranci, Cannigione, Portisco, Marinella, Puntaldia, Poltu Quatu, Capo Coda Cavallo, Murta Maria, Porto San Paolo, Pittulongu, Bados, Agrustos

---

## STACK TECNICO

| Tecnologia | Dettaglio |
|------------|-----------|
| **Framework** | React 18.3 + TypeScript 5.8 |
| **Build** | Vite 5.4 con SWC plugin |
| **Styling** | Tailwind CSS 3.4 |
| **Routing** | React Router v6 — SPA client-side |
| **SEO meta** | react-helmet-async 3.0 via `src/components/SEOHead.tsx` |
| **JSON-LD** | Builder dinamici in `src/lib/jsonLd.ts` |
| **Database** | Supabase (PostgreSQL) — tabelle: `vehicles`, `bookings`, `seo_locations`, `seo_beaches` |
| **Deploy** | Vercel |
| **Prerender** | Prerender.io (per rendering lato server per i bot) |
| **Analytics** | GA4 `G-1JL353W8QW` + Google Ads `AW-18006357660` |
| **Privacy** | iubenda |
| **UI Components** | shadcn/ui (Radix) + Framer Motion |
| **Query** | TanStack React Query 5 |
| **Maps** | @react-google-maps/api |

---

## IL PROBLEMA CRITICO DA RISOLVERE

### Situazione attuale (GRAVE)
Google indicizza **solo 6-7 pagine su 59**. Le restanti 52+ pagine sono invisibili nelle SERP.

### Causa principale
Le pagine dinamiche (locality + spiagge) servite da `src/pages/DynamicPage.tsx` hanno:

1. **Meta description identiche o quasi identiche** nelle tabelle Supabase `seo_locations` e `seo_beaches` — Google le considera contenuto duplicato e indicizza solo la "vincitrice"

2. **4 blocchi di contenuto body identici** in `DynamicPage.tsx` per TUTTE le pagine:
   - "Perche scegliere il noleggio auto KS Rent per [TITLE]?" — stesso testo, stessi link
   - "Noleggio senza carta di credito a [TITLE]" — copia identica
   - "Consegna su misura a [TITLE]" — copia identica
   - "La tua vacanza in Sardegna inizia da [TITLE]" — copia identica

3. **4 "Local Tips" identici** per tutte le pagine (orari, vento, strade, sapori) — cambiano solo il nome della localita

4. **Title tag simili** tra pagine dello stesso tipo

### Cause tecniche secondarie
- Le pagine `/localita/:slug` e `/spiagge/:slug` erano duplicate (risolto con 301 redirect a `/:slug` in `vercel.json`, ma Google deve ancora riassorbire il crawl budget)
- `index.html` contiene meta tag statici hardcoded che possono confliggere con react-helmet-async
- Il `content_html` proveniente da Supabase potrebbe essere insufficiente o troppo generico

### Effetto economico diretto
Perdita di traffico organico → perdita di clienti → perdita di fatturato durante stagione alta (giugno-settembre).

---

## OBIETTIVO

Trasformare ogni pagina del sito in una pagina **unica, autorevole e indicizzabile** per la propria keyword target, ottimizzata per:

1. **SEO tradizionale** — Google organic (title, H1, meta description, structured data, canonical)
2. **AEO** (Answer Engine Optimization) — Google AI Overviews, featured snippet, People Also Ask
3. **GEO** (Generative Engine Optimization) — Perplexity, ChatGPT, Copilot, motori agentici

---

## MAPPA COMPLETA DELLE 59 PAGINE (dal sitemap reale)

### Categoria A — Pagine principali (4) — priorita 1.0/0.9
```
/                                          → Index.tsx (homepage)
/prenotaora                                → PrenotaOra.tsx
/flotta                                    → Flotta.tsx
/chisiamo                                  → ChiSiamo.tsx
```

### Categoria B — Landing page servizi (4) — priorita 0.9
```
/noleggio-auto-aeroporto-olbia             → NoleggioAeroportoOlbia.tsx (statica)
/noleggio-auto-porto-olbia                 → NoleggioPortoOlbia.tsx (statica)
/noleggio-auto-costa-smeralda              → NoleggioCostaSmeralda.tsx (statica)
/noleggio-auto-senza-carta-di-credito-olbia → NoleggioSenzaCartaCredito.tsx (statica)
```

### Categoria C — Pagine Localita (21) — priorita 0.8 — **PRIORITA CRITICA**
Tutte servite da `DynamicPage.tsx` con dati dalla tabella Supabase `seo_locations`:
```
/noleggio-auto-san-teodoro
/noleggio-auto-porto-cervo
/noleggio-auto-baja-sardinia
/noleggio-auto-palau
/noleggio-auto-cannigione
/noleggio-auto-poltu-quatu
/noleggio-auto-puntaldia
/noleggio-auto-porto-rotondo
/noleggio-auto-golfo-aranci
/noleggio-auto-murta-maria
/noleggio-auto-porto-san-paolo
/noleggio-auto-arzachena
/noleggio-auto-santa-teresa-gallura
/noleggio-auto-budoni
/noleggio-auto-agrustos
/noleggio-auto-marinella
/noleggio-auto-pittulongu
/noleggio-auto-bados
/noleggio-auto-portisco
/noleggio-auto-capo-coda-cavallo
```
**Nota:** 21 URL nel sitemap ma la route `/:slug` gestisce qualsiasi slug presente in `seo_locations`.

### Categoria D — Pagine Spiagge (20) — priorita 0.7
Tutte servite da `DynamicPage.tsx` con dati dalla tabella Supabase `seo_beaches`:
```
/spiaggia-del-principe
/liscia-ruja
/cala-brandinchi
/la-cinta
/lu-impostu
/capriccioli
/romazzino
/grande-pevero
/cala-moresca
/cala-sabina
/spiaggia-bianca
/porto-istana
/porto-taverna
/rena-bianca
/cala-del-faro
/la-celvia
/spiaggia-marinella
/spiaggia-bados
/spiaggia-pittulongu
/capo-testa
```
**Nota:** Le URL sono a root level (NON sotto `/spiagge/`). I vecchi URL `/localita/:slug` e `/spiagge/:slug` fanno 301 redirect a `/:slug` via `vercel.json`.

---

## ARCHITETTURA ATTUALE DEI COMPONENTI SEO

### File gia esistenti — NON ricrearli, estenderli

| File | Stato | Da fare |
|------|-------|---------|
| `src/components/SEOHead.tsx` | Funzionante | Eventualmente aggiungere prop `noIndex` |
| `src/components/FAQSection.tsx` | Hardcoded 9 FAQ | Renderlo dinamico per accettare FAQ per-pagina |
| `src/lib/jsonLd.ts` | Completo (496 righe) | Estendere `buildLocationJsonLd` e `buildBeachJsonLd` con FAQ schema |
| `src/pages/DynamicPage.tsx` | Contiene i blocchi duplicati | **Differenziare i 4 blocchi di contenuto per ogni pagina** |
| `generate-sitemap.js` | Funzionante | Aggiungere `<lastmod>` a ogni URL |
| `index.html` | Ha meta tag statici hardcoded | Verificare che react-helmet-async li sovrascriva correttamente |

### Flusso attuale di una pagina dinamica
1. Utente visita `/:slug` (es. `/noleggio-auto-porto-cervo`)
2. `DynamicPage.tsx` cerca lo slug prima in `seo_locations`, poi in `seo_beaches`
3. Riceve da Supabase: `title`, `h1`, `meta_description`, `hero_image_url`, `content_html`, `canonical_url`, `og_image_url` (+ `parking_info` per spiagge)
4. Renderizza `SEOHead` con title/description/canonical/jsonLd dal database
5. Renderizza hero, `content_html`, veicolo consigliato, mappa, tips, e i 4 blocchi SEO identici
6. Se slug non trovato → `NotFound`

---

## STRATEGIA DI OTTIMIZZAZIONE PER CATEGORIA

### CATEGORIA C — PAGINE LOCALITA (azione piu urgente)

Ogni pagina localita deve avere elementi **al 100% unici**. Nessun elemento puo essere condiviso letteralmente con un'altra pagina localita.

#### Per ogni pagina localita servono:

**1. Title tag** (max 60 char) — UNICO — aggiornare in Supabase `seo_locations.title`
```
Noleggio Auto Lusso [Localita] | KS Rent Sardinia
```
Esempi:
- `Noleggio Auto Lusso Porto Cervo | KS Rent Sardinia`
- `Noleggio Auto Baja Sardinia | KS Rent — Costa Smeralda`
- `Noleggio SUV San Teodoro Sardegna | KS Rent`

**2. Meta description** (120-155 char) — UNICA — aggiornare in Supabase `seo_locations.meta_description`
Deve contenere:
- Nome esatto della localita
- Un elemento differenziante specifico (spiaggia vicina, hotel noto, distanza da Olbia)
- Call to action

Esempi:
```
Porto Cervo: noleggio auto lusso con consegna al porto e agli hotel. Ferrari, Range Rover, Mercedes AMG. Senza carta di credito. Prenota online.

Baja Sardinia: SUV e supercar con consegna in 30 min da Olbia. Ideale per Phi Beach e Cala Capra. Senza carta di credito obbligatoria.

San Teodoro: auto a noleggio con consegna a La Cinta e Cala Brandinchi. SUV per sterrati, cabriolet per la costa. Prenota senza carta di credito.
```

**3. H1** — UNICO — aggiornare in Supabase `seo_locations.h1`
```
Noleggio Auto di Lusso a [Localita]: Consegna a Domicilio
```

**4. Contenuto body** (`content_html` in Supabase) — UNICO, minimo 300 parole differenziate
Struttura consigliata:

```
Paragrafo 1: Introduzione specifica a [Localita] — cosa la rende unica,
             a che tipo di turista si rivolge (barca, villa, hotel luxury).

Paragrafo 2: I nostri veicoli piu richiesti a [Localita] — citare modelli reali
             (Audi RS3, BMW M2, Jeep Avenger, Fiat Panda, Honda SH).

Paragrafo 3: Come funziona la consegna a [Localita] — tempo stimato da Olbia,
             punti di consegna (porto, aeroporto, hotel, marina).

Paragrafo 4 (FAQ-style per AEO): 2-3 domande/risposte specifiche per la localita.
```

**5. I 4 blocchi SEO in DynamicPage.tsx** — DIFFERENZIATI per ogni pagina
Attualmente i 4 blocchi in fondo alla pagina sono identici per tutte le localita. Devono essere:
- O rimossi e sostituiti dal `content_html` piu ricco
- O resi dinamici con testo specifico per localita (proveniente da Supabase o da un mapping in codice)

**6. JSON-LD Service** per ogni pagina localita — estendere `buildLocationJsonLd()` in `src/lib/jsonLd.ts`:
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Noleggio Auto di Lusso a [Localita]",
  "provider": {
    "@type": "LocalBusiness",
    "name": "KS Rent Sardinia",
    "url": "https://www.ksrentsardinia.com",
    "telephone": "+393446107071",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Viale Isola Bianca 38",
      "addressLocality": "Olbia",
      "addressRegion": "SS",
      "postalCode": "07026",
      "addressCountry": "IT"
    }
  },
  "areaServed": {
    "@type": "Place",
    "name": "[Localita]"
  },
  "serviceType": "Car Rental",
  "description": "[descrizione unica 150 char]"
}
```

**7. FAQ Schema** — aggiungere FAQPage JSON-LD con domande specifiche per localita

---

### CATEGORIA A — HOMEPAGE (/)

**File:** `src/pages/Index.tsx` (pagina statica, non DynamicPage)

**Title:** `Noleggio Auto Lusso Olbia Costa Smeralda | KS Rent Sardinia`
*(gia impostato correttamente)*

**Meta description:** verificare che sia unica e completa.

**JSON-LD homepage** — gia presente in `jsonLd.ts` come `localBusinessJsonLd` con:
- CarRental + AutoRental + LocalBusiness
- 2 location con coordinate
- 18 areaServed
- 10 sameAs
- paymentAccepted, priceRange, openingHours
- FAQPage con 10+ domande

**Da verificare/aggiungere:**
- `disambiguatingDescription`: "KS Rent Sardinia con sede a Olbia, Sardegna. Distinta da KS Rent S.r.l. con sede a Roma."
- Coerenza `foundingDate`: deve essere `2025` ovunque

---

### CATEGORIA B — LANDING PAGE SERVIZI

Queste 4 pagine sono **componenti statici dedicati** (non usano DynamicPage.tsx):
- `NoleggioAeroportoOlbia.tsx` — ha gia FAQ schema dedicato (`aeroportoFaqJsonLd`)
- `NoleggioPortoOlbia.tsx` — ha gia FAQ schema dedicato (`portoFaqJsonLd`)
- `NoleggioCostaSmeralda.tsx`
- `NoleggioSenzaCartaCredito.tsx`

**Verificare per ognuna:**
- Title e meta description unici
- H1 unico
- Contenuto body differenziato (non copia di altre pagine)
- JSON-LD presente e corretto

---

### CATEGORIA D — PAGINE SPIAGGE

**Obiettivo:** Intercettare ricerche tipo "come raggiungere spiaggia X", "noleggio auto per spiaggia X Sardegna".

**Title:** `Noleggio Auto per [Nome Spiaggia] | Come Arrivarci — KS Rent`

**Meta description:** Unica, con nome spiaggia + caratteristica distintiva + keyword noleggio.

**Contenuto minimo** (in `seo_beaches.content_html`):
- Descrizione della spiaggia (riscritta, non copiata)
- Tipo di auto consigliato (SUV per sterrati, cabriolet per costiere) — gia gestito dalla logica VEHICLES in DynamicPage.tsx
- Distanza/tempo da Olbia
- Informazioni parcheggio (`parking_info` in Supabase)
- CTA: prenota online

**Link interno obbligatorio:** alla pagina localita piu vicina.

**JSON-LD:** gia presente via `buildBeachJsonLd()` in `jsonLd.ts`.

---

## IMPLEMENTAZIONE TECNICA — COME FARLO NEL CODICE

### Step 1 — Aggiornare i dati in Supabase

Per ogni record nelle tabelle `seo_locations` e `seo_beaches`, aggiornare:
- `title` — unico per ogni pagina
- `h1` — unico per ogni pagina
- `meta_description` — unica, 120-155 char, con keyword localita
- `content_html` — contenuto ricco, minimo 300 parole uniche

**IMPORTANTE:** I dati SEO vivono in Supabase, non in file locali. Non creare un file `seo-data.js`. Se serve un mapping locale per i 4 blocchi SEO o le FAQ, creare un file `src/data/locality-content.ts` con solo i dati che NON sono gia in Supabase.

### Step 2 — Differenziare i blocchi in DynamicPage.tsx

I 4 blocchi identici in `DynamicPage.tsx` devono essere differenziati. Opzioni:

**Opzione A (consigliata):** Aggiungere campi a Supabase (`seo_block_1`, `seo_block_2`, ecc.) e renderizzarli dinamicamente.

**Opzione B:** Creare un mapping locale in `src/data/locality-content.ts` che associa ogni slug a testo specifico per i blocchi.

**Opzione C:** Rimuovere i 4 blocchi e fare affidamento solo su `content_html` piu ricco.

### Step 3 — Rendere FAQSection dinamico

Modificare `src/components/FAQSection.tsx` per accettare FAQ via props (oltre alle 9 hardcoded della homepage). Usarlo nelle pagine localita con domande specifiche.

### Step 4 — Estendere JSON-LD

In `src/lib/jsonLd.ts`:
- Aggiungere FAQPage schema a `buildLocationJsonLd()`
- Aggiungere FAQPage schema a `buildBeachJsonLd()`
- Verificare coerenza `foundingDate: "2025"` in tutti gli schema

### Step 5 — Aggiornare il sitemap generator

In `generate-sitemap.js`, aggiungere `<lastmod>` con data odierna a ogni URL:
```xml
<url>
  <loc>https://www.ksrentsardinia.com/noleggio-auto-porto-cervo</loc>
  <lastmod>2025-04-22</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

### Step 6 — Verificare index.html

Assicurarsi che i meta tag statici in `index.html` siano di fallback generico e che react-helmet-async li sovrascriva correttamente su ogni pagina.

### Step 7 — IndexNow ping dopo deploy

Dopo ogni deploy su Vercel con modifiche SEO:
```bash
curl -X POST "https://api.indexnow.org/indexnow" \
  -H "Content-Type: application/json" \
  -d '{
    "host": "www.ksrentsardinia.com",
    "key": "[INDEXNOW_KEY]",
    "urlList": ["https://www.ksrentsardinia.com/noleggio-auto-porto-cervo", ...]
  }'
```

---

## OTTIMIZZAZIONE AEO (Answer Engine Optimization)

Google AI Overviews privilegia contenuti che rispondono direttamente a domande specifiche.

### Template domande per ogni localita
```
"Quanto costa noleggiare un'auto a [Localita]?"
"Serve la carta di credito per noleggiare a [Localita]?"
"Quali auto di lusso posso noleggiare a [Localita]?"
"KS Rent consegna a [Localita]?"
"Come si arriva a [Spiaggia vicina] con un'auto a noleggio?"
"Quanto tempo ci vuole per la consegna a [Localita] da Olbia?"
```

### Risposta diretta in apertura body (snippet bait)
Ogni `content_html` deve aprire con un paragrafo di max 3 righe che risponde alla query principale. Esempio per Porto Cervo:

> "KS Rent Sardinia consegna auto di lusso, SUV e supercar direttamente a Porto Cervo in circa 40 minuti dalla sede di Olbia. Disponibili Audi RS3, BMW M2, Jeep Avenger e altri modelli. Nessuna carta di credito obbligatoria."

Progettato per essere estratto come featured snippet o AI Overview.

### FAQ Schema per ogni pagina
Aggiungere FAQPage JSON-LD con minimo 3 domande specifiche per localita, iniettato via `buildLocationJsonLd()` esteso.

---

## OTTIMIZZAZIONE GEO (Generative Engine Optimization)

I motori generativi (Perplexity, ChatGPT, Google SGE, Copilot) citano le fonti. Il `robots.txt` gia permette tutti i crawler AI.

### 1. Contenuto factual verificabile
In ogni pagina includere dati concreti:
- Distanza esatta in km e minuti da Olbia
- Nomi specifici di hotel, porti, marine dove consegniamo
- Range di prezzo indicativo
- Orari di servizio (10:00-22:30)

### 2. Entita disambiguate nel testo
In ogni pagina, nelle prime 200 parole:
- "KS Rent **Sardinia**" (non solo "KS Rent")
- "con sede a **Olbia**, Sardegna"
- Almeno una volta il nome completo per distinguersi da KS Rent Roma

### 3. Tono autorevole da esperto locale
I modelli linguistici premiano contenuti che dimostrano conoscenza locale diretta:
- "La strada per Cala Capra richiede un SUV in alta stagione"
- "L'accesso alla marina di Porto Cervo richiede il pass — noi lo gestiamo per te"
- "A luglio e agosto consigliamo di prenotare con almeno 72 ore di anticipo"

---

## CONTROLLO QUALITA PRIMA DI OGNI DEPLOY

Per ogni pagina modificata:

```
[ ] Title tag unico e diverso da tutte le altre pagine
[ ] Meta description unica, 120-155 caratteri, con keyword localita/spiaggia
[ ] H1 unico, include nome localita/spiaggia
[ ] Canonical tag punta all'URL canonico senza trailing slash
[ ] JSON-LD Service/Place presente e valido
[ ] FAQ schema presente con minimo 2-3 domande specifiche
[ ] Contenuto body minimo 300 parole uniche (non copiate da altra pagina)
[ ] I 4 blocchi SEO in DynamicPage.tsx sono differenziati (o rimossi)
[ ] Link interno alla homepage e ad almeno 1 pagina correlata
[ ] lastmod nel sitemap aggiornato a oggi
[ ] Prerender.io cache invalidata per questo URL
[ ] Verifica rendering bot:
    curl -A "Googlebot" https://www.ksrentsardinia.com/[slug] | grep "<title>"
    → deve mostrare il title specifico, non quello di fallback
```

---

## PRIORITA DI ESECUZIONE

**Non fare tutto insieme. Segui questo ordine:**

### Sprint 1 (primo intervento)
1. Leggere sitemap e verificare la mappa delle 59 route (gia fatto sopra)
2. Aggiornare in Supabase `title`, `h1`, `meta_description` UNICI per le **top 10 pagine localita** per volume di ricerca (Porto Cervo, San Teodoro, Baja Sardinia, Palau, Costa Smeralda, Porto Rotondo, Arzachena, Santa Teresa, Golfo Aranci, Budoni)
3. Differenziare i 4 blocchi SEO in `DynamicPage.tsx`
4. Verificare `foundingDate: "2025"` in `jsonLd.ts` e `index.html`
5. Deploy e verifica con Google Search Console URL Inspection

### Sprint 2
6. Scrivere `content_html` unico per TUTTE le pagine Categoria C (21 localita)
7. Aggiungere FAQ schema per-pagina via `buildLocationJsonLd()` esteso
8. Aggiornare sitemap con `<lastmod>`
9. Invalida cache Prerender.io
10. Invia ping IndexNow

### Sprint 3
11. Pagine spiagge (Categoria D) — `title`, `h1`, `meta_description`, `content_html` unici
12. Aggiungere FAQ schema alle spiagge via `buildBeachJsonLd()`
13. Ottimizzazione JSON-LD avanzata con `BreadcrumbList` e `ItemList`
14. Verifica copertura in Google Search Console dopo 2 settimane

---

## FILE CRITICI — RIFERIMENTO RAPIDO

| File | Cosa contiene | Righe |
|------|---------------|-------|
| `src/pages/DynamicPage.tsx` | Pagina universale locality/spiagge — **i 4 blocchi duplicati sono qui** | ~645 |
| `src/components/SEOHead.tsx` | Wrapper react-helmet-async per tutti i meta tag | ~71 |
| `src/lib/jsonLd.ts` | Tutti gli schema JSON-LD (10 export) | ~496 |
| `src/components/FAQSection.tsx` | Accordion FAQ hardcoded (9 item) | vedi file |
| `index.html` | Entry point HTML con meta tag statici + JSON-LD statico | ~249 |
| `generate-sitemap.js` | Genera sitemap da Supabase (postbuild) | ~77 |
| `vercel.json` | Redirect 301 + rewrite SPA + cache headers | ~40 |
| `public/robots.txt` | Regole bot (AI crawler permessi, SEO tool bloccati) | ~40 |

---

## NOTE CRITICHE — NON DIMENTICARE

1. **Non usare MAI la stessa meta description in due pagine diverse.** Zero eccezioni.

2. **I dati SEO delle pagine dinamiche vivono in Supabase**, non in file locali. Per modificare title/h1/meta_description/content_html devi aggiornare le tabelle `seo_locations` e `seo_beaches`.

3. **Non ricreare componenti che esistono gia.** `SEOHead.tsx`, `FAQSection.tsx`, `jsonLd.ts` vanno estesi, non riscritti.

4. **I 4 blocchi duplicati in `DynamicPage.tsx` sono la causa principale del contenuto duplicato lato body.** Devono essere differenziati o rimossi.

5. **`index.html` ha meta tag statici** che servono come fallback per la prima renderizzazione. Verificare che react-helmet-async li sovrascriva su ogni pagina.

6. **Prerender.io deve ricevere la versione renderizzata con i meta tag corretti.** Dopo ogni modifica a SEOHead o ai dati Supabase, verificare con:
   ```
   curl -A "Googlebot" https://www.ksrentsardinia.com/noleggio-auto-porto-cervo | grep "<title>"
   ```

7. **KS Rent Sardinia ≠ KS Rent Roma.** In ogni contenuto includere "Sardinia" o "Olbia" per rafforzare la disambiguazione.

8. **Non togliere le 301 redirect** da `/localita/:slug` → `/:slug` e `/spiagge/:slug` → `/:slug` in `vercel.json`. Servono per non perdere link equity.

9. **Veicoli disponibili** (per citazioni nei contenuti): Audi RS3, BMW M2, Jeep Avenger, Fiat Panda Hybrid, Honda SH 125/350, Yamaha Quad Raptor, Mercedes Classe A. I dati aggiornati sono nella tabella `vehicles` in Supabase.

10. **Anno fondazione: 2025.** Verificare coerenza tra `jsonLd.ts` (attualmente dice 2022) e `index.html`.

---

## DEPLOY E PUSH

**Dopo ogni sessione di modifiche confermata dall'utente:**

```bash
git add .
git commit -m "SEO/AEO/GEO: [descrizione delle modifiche]"
git push origin main
```

Il push su GitHub deve avvenire **solo dopo conferma esplicita da parte dell'utente** che le modifiche sono corrette e pronte per il deploy.
