# ACTION PLAN — ksrentsardinia.com

**Data:** 2026-05-12 — vedi `FULL-AUDIT-REPORT.md` per le evidenze.

---

## 🚨 CRITICAL — Fix entro 24-48 ore

### C-1. Re-deploy con tutte le pagine dinamiche

**Problema:** 60+ pagine in `dist/` locale (veicoli `/flotta/*`, 25+ location IT, 20 spiagge) restituiscono 404 in produzione. Almeno 5 erano già indicizzate in GSC.

**Cause likely:**
- Env vars Supabase mancanti / sbagliate nel build environment di Vercel (`SUPABASE_URL`, `SUPABASE_ANON_KEY`)
- RLS Supabase blocca la lettura anon di `seo_locations`, `seo_beaches`, `seo_vehicles` durante build
- Branch deploy disallineato

**Azioni:**
1. Vercel dashboard → Settings → Environment Variables: verificare `SUPABASE_URL` e `SUPABASE_ANON_KEY` su Production + Preview + Development
2. Eseguire localmente `npm run build` e confermare `dist/` ha 200+ HTML
3. Confrontare log build Vercel con build locale (cercare warning "no paths generated", "supabase auth error")
4. Verificare policy RLS:
   ```sql
   -- in Supabase SQL editor
   SELECT * FROM pg_policies WHERE tablename IN ('seo_locations','seo_beaches','seo_vehicles');
   ```
   Le tabelle SEO devono permettere `SELECT` ad `anon` o `authenticated` per il build SSG.
5. Push commit di trigger (anche solo cambio data lastmod) per forzare nuovo deploy
6. Dopo deploy: verifica con `curl -I` su 10 URL campione (porto-cervo, audi-rs3, cala-brandinchi, etc.)
7. Submit nuova sitemap a GSC + esegui `npm run indexnow`

**Stima:** 30-60 min. **Impact:** ripristina 60+ pagine indicizzabili + 200+ URL nel sitemap.

---

### C-2. Cambia apex redirect da 307 a 301

**Problema:** `https://ksrentsardinia.com/` → `https://www.ksrentsardinia.com/` con HTTP 307 (Temporary). Google sta indicizzando entrambe le varianti (1210 vs 85 impressions): split signal.

**Fix in `vercel.json`:**

Verificare che la sezione redirects abbia (oppure aggiungere):
```json
{
  "redirects": [
    {
      "source": "/(.*)",
      "has": [{ "type": "host", "value": "ksrentsardinia.com" }],
      "destination": "https://www.ksrentsardinia.com/$1",
      "permanent": true
    }
  ]
}
```

Con `"permanent": true` Vercel emette 308 (equivalente moderno di 301 che preserva method). Se preferisci 301 esatto:
```json
{
  "source": "/(.*)",
  "has": [{ "type": "host", "value": "ksrentsardinia.com" }],
  "destination": "https://www.ksrentsardinia.com/$1",
  "statusCode": 301
}
```

**Verifica post-fix:** `curl -I https://ksrentsardinia.com/` → deve riportare `HTTP/1.1 301` (o 308).

**Stima:** 10 min. **Impact:** consolida link equity, Google deindicizza variante apex e unifica i segnali su www.

---

### C-3. Rimuovi sitemap legacy da Google Search Console

**Problema:** GSC ha 3 sitemap sottomessi, 2 legacy (`sitemap.xml` su apex e su www) con 48 URL ciascuno, **0 indicizzati**.

**Azione:**
1. GSC → property `sc-domain:ksrentsardinia.com` → Sitemaps
2. Rimuovere `sitemap.xml` (sia su apex che www)
3. Mantenere solo `https://www.ksrentsardinia.com/sitemap-index.xml`

**Stima:** 5 min. **Impact:** elimina confusione del crawler, GSC riporta dato pulito.

---

### C-4. Aggiorna llms.txt con URL reali

**Problema:** `/llms.txt` elenca come "best pages to cite" 9 URL che ora restituiscono 404 (audi-rs3, bmw-m2, jeep-avenger, honda-sh, yamaha-quad-raptor, porto-cervo, porto-rotondo, san-teodoro, baja-sardinia). Quando ChatGPT/Claude/Perplexity tentano il fetch, ricevono 404 → degrada l'affidabilità della fonte.

**Azione (TEMPORANEA, in attesa di C-1):**

Mantenere solo URL live nella sezione "Best pages to cite":
- `/tariffe`, `/flotta`, `/chisiamo`
- 5 location IT live: `/noleggio-auto-olbia`, `/noleggio-auto-aeroporto-olbia`, `/noleggio-auto-porto-olbia`, `/noleggio-auto-costa-smeralda`, `/noleggio-auto-senza-carta-di-credito-olbia`
- Multilingual entry points (omologhi EN/DE/FR di location live)

**Azione (FINALE, dopo C-1):**

Ripristinare elenco completo dopo aver verificato che le pagine sono 200 OK.

**Fix anche orari:**
- Riga 14 `llms.txt`: `**Orari**: 10:00–22:30, 7 giorni su 7`
- → corretto: `**Orari**: 10:00–13:00 e 15:00–22:30 (chiusura pranzo), 7 giorni su 7`

**Stima:** 15 min. **Impact:** LLM ricevono fonte affidabile per citazioni, info orari corrette in AI Overviews.

---

### C-5. Allinea coordinate geo nel JSON-LD

**Problema:** Mismatch:
- `<meta name="geo.position" content="40.923018;9.520169">` ← Isola Bianca 38 (operativa)
- JSON-LD `geo: {latitude: 40.944573, longitude: 9.497897}` ← Aldo Moro 367 (legale)

**Decisione preliminare richiesta:** quale è l'indirizzo "ufficiale" SEO?
- Se **sede operativa Isola Bianca 38** (5 min da aeroporto/porto, dove i clienti vengono): allineare `address` JSON-LD a "Viale Isola Bianca 38" e `geo` rimane Isola Bianca.
- Se **sede legale Aldo Moro 367** (GBP attuale): aggiornare `<meta geo.position>` a `40.944573;9.497897`.

**Raccomandazione SEO:** usare la **sede operativa** (Isola Bianca) ovunque — è dove il servizio viene erogato, ha più senso geografico per chi cerca "noleggio auto vicino aeroporto Olbia" e per Maps. Tradeoff: bisogna spostare anche GBP.

**Fix in [src/lib/jsonLd.ts](src/lib/jsonLd.ts)** sezione `buildLocalBusinessJsonLd` o equivalente che emette il blocco `geo` + `address`:
```js
geo: { '@type': 'GeoCoordinates', latitude: 40.923018, longitude: 9.520169 },
address: { '@type': 'PostalAddress', streetAddress: 'Viale Isola Bianca 38', addressLocality: 'Olbia', postalCode: '07026', addressRegion: 'SS', addressCountry: 'IT' },
```

**Stima:** 10 min code + decisione utente. **Impact:** segnale geo coerente, miglior posizionamento map pack.

---

## 🟧 HIGH — Fix entro 1 settimana

### H-1. Rimuovi `noleggio-auto-santa-teresa-gallura` dal DB

**Per memory:** Santa Teresa non è in copertura, era SEO bait controproducente. È ancora nel `dist/` locale → significa che il record è ancora nel DB Supabase.

**Azione (Supabase SQL editor):**
```sql
DELETE FROM seo_locations WHERE slug = 'noleggio-auto-santa-teresa-gallura';
-- verifica
SELECT slug FROM seo_locations WHERE slug ILIKE '%santa-teresa%';
```

Add anche redirect 410 (Gone) o 301 verso `/noleggio-auto-costa-smeralda` in `vercel.json` per evitare 404 sui link esterni.

**Stima:** 10 min. **Impact:** rimuove segnale spam controproducente.

---

### H-2. Cambia `priceRange` da "€€€" a "€€"

**Problema:** "€€€" implica fascia alta/luxury. Brand positioning è "premium accessibile". 3 simboli su 4 sono interpretati come "expensive".

**Fix in `src/lib/jsonLd.ts`:** trovare `priceRange: '€€€'` e cambiarlo in `priceRange: '€€'`.

**Stima:** 5 min. **Impact:** allineamento brand positioning, evita filtraggio per "low budget" su Maps.

---

### H-3. Aggiungi H1 visibile a `/flotta`

**Problema:** Pagina `/flotta` non ha `<h1>` nell'HTML (verificato in `C:/tmp/ks-flotta.html`).

**Fix:** in [src/pages/flotta/index.astro](src/pages/flotta/index.astro), aggiungere subito sopra la griglia veicoli:
```astro
<h1 class="text-3xl md:text-5xl font-bold mb-6">Flotta Noleggio Auto Olbia</h1>
```

Stesso per `/en/fleet`, `/de/fuhrpark`, `/fr/flotte`.

**Stima:** 15 min. **Impact:** semantica HTML completa, segnale on-page principale per "flotta noleggio" / "fleet car rental".

---

### H-4. Performance: rimuovi font Google duplicato

**Problema:** In `<head>` di tutte le pagine ci sono **3 link** verso lo stesso Google Fonts URL:
```html
<link href="...Montserrat...Playfair+Display..." rel=preload as=style>
<link href="...Montserrat...Playfair+Display..." rel=stylesheet media=print onload="this.media='all'">
<link href="...Montserrat...Playfair+Display..." rel=stylesheet>
```

Il terzo è ridondante (duplicato del secondo senza media-trick). Mantenere solo:
```html
<link href="...stesso URL..." rel="preload" as="style" crossorigin>
<link href="...stesso URL..." rel="stylesheet" media="print" onload="this.media='all'">
<noscript><link href="...stesso URL..." rel="stylesheet"></noscript>
```

**File:** [src/layouts/BaseLayout.astro](src/layouts/BaseLayout.astro).

**Stima:** 10 min. **Impact:** -1 request render-blocking, miglior FCP/LCP.

---

### H-5. Ottimizza JS bundle (unused-javascript 150 KiB)

**Problema:** Lighthouse riporta `unused-javascript` con saving 150 KiB + 750ms.

**Azioni:**
1. Verificare quali island React sono caricate su homepage e se sono tutte necessarie above-the-fold
2. Cambiare `client:load` → `client:visible` o `client:idle` dove possibile (Navbar è OK con `client:load`, Booking/Maps possono essere `client:visible`)
3. Astro Inspector: `npm run build -- --analyze` per breakdown bundle
4. Verificare se `framer-motion` shim è davvero usato everywhere o solo in Navbar — può essere lazy

**Stima:** 1-2 ore investigative. **Impact:** -150 KiB, LCP da 6.2s a ~4.5s.

---

### H-6. Risolvi forced reflow + console errors

**Problema:** Lighthouse failed audits:
- `forced-reflow-insight` score 0
- `errors-in-console` score 0
- `inspector-issues` score 0

**Azione:** aprire homepage in Chrome DevTools → Performance tab → identificare JS che causa reflow (es. `offsetWidth` letto dopo mutazione DOM). Console tab → catturare errori.

**Stima:** 1-2 ore. **Impact:** -200-400ms LCP/TBT, no errori visibili a Googlebot.

---

### H-7. Indexing API push per pagine ripristinate

**Dopo C-1**, una volta tornate live le 60+ pagine, notificare Google via Indexing API per accelerare recrawl:

```bash
node scripts/indexnow-ping.mjs
```

Oltre a IndexNow, considerare push a Google Indexing API per le URL critiche:
- Tutte le `/flotta/*` (7 URL)
- Le 5+ location prima indicizzate (marinella, palau, cala-del-faro, capo-testa, capriccioli)
- Le multilingual root `/en/`, `/de/`, `/fr/`

**Stima:** 30 min. **Impact:** recrawl in 24-72h vs 1-4 settimane naturali.

---

## 🟨 MEDIUM — Fix entro 1 mese

### M-1. Push "autonoleggio olbia" da pos 10 a top 5

**GSC:** 114 impressions, posizione 10.1, CTR 1.75% (basso perché pos 10). Salire a pos 3-5 raddoppia il traffico.

**Azione:**
1. Verificare quale pagina rankia per "autonoleggio olbia" (URL inspector): è la homepage o `/noleggio-auto-olbia`?
2. Se è homepage: aggiungere sezione dedicata "Autonoleggio a Olbia" + interlinking dalle 5 location verso questa keyword
3. Se è `/noleggio-auto-olbia`: rinforzare con +200 parole, +1 FAQ "Qual è il miglior autonoleggio a Olbia?", +link interni
4. Acquisire 2-3 citazioni locali (PagineGialle profilo dettagliato, Tuttocittà, MisterImprese)

**Stima:** 2-4 ore. **Impact:** +50-100 visite/mese stimati.

---

### M-2. Pagina dedicata "Senza carta di credito" boost

Pagina `/noleggio-auto-senza-carta-di-credito-olbia` è già live ed è un USP critico (per memory: differenziante in Sardegna). Verificare:
- Title attualmente?
- È linkata dalla homepage hero/USP?
- Ha FAQ schema dedicate ("Posso noleggiare senza carta di credito?")?
- È citata in llms.txt? ✅ Sì

**Stima:** 1 ora. **Impact:** prima posizione per query niche ad alta intent.

---

### M-3. EN/DE/FR react component body translation

Per CLAUDE.md (Fase 4 limitation): i componenti React island (`Flotta.tsx`, `ChiSiamo.tsx`, `PrenotaOra.tsx`, `NotFound.tsx`) hanno meta/title localizzati ma body in italiano sulle pagine `/en|de|fr/`. Refactorare per leggere da `getDict(lang)`.

**Stima:** 4-8 ore. **Impact:** parità contenuto multilingua → meno "soft 404" perception sui mercati EN/DE/FR.

---

### M-4. Internal linking depth

GSC URL Inspection homepage trova solo 2 referring URL interni (/en/ + /de/). Quando le 60+ pagine torneranno live:
- Aggiungere "Pagine correlate" / "Località vicine" in fondo a ogni location page (3-5 link)
- Aggiungere link da `/tariffe` verso ogni `/flotta/{vehicle}` di esempio
- Footer mappa breve con top 10 location

**Stima:** 2 ore. **Impact:** distribuzione link equity uniforme, +crawl frequency.

---

### M-5. CMP/Cookie consent verifica

`iubenda` presente in CSP. Verificare:
- Consent prima di firing GA4 / Google Ads (Consent Mode v2)
- "Reject all" button rispetta GDPR (Italia)
- No tracking pre-consenso

**Stima:** 30 min. **Impact:** compliance + qualità dati GA4.

---

### M-6. Schema `Vehicle` su listing /flotta

Quando torneranno live le pagine veicolo, aggiungere su `/flotta` un `ItemList` con `Vehicle` items:
```js
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "item": { "@type": "Vehicle", "name": "Audi RS3", "url": "..." } },
    ...
  ]
}
```

**Stima:** 1 ora. **Impact:** rich result ItemList su SERP, possibili carousel veicoli.

---

## 🟦 LOW — Backlog

### L-1. CrUX eligibility — aumentare traffico

Sotto soglia CrUX. Non actionable direttamente — risultato di tutto il resto.

### L-2. Considera hreflang `en` invece di `en-gb`

Mercato anglofono internazionale (UK + US + AU per turisti) — `en-gb` filtra UK. Valutare cambio a `en` generic.

**File:** [src/lib/i18n.ts](src/lib/i18n.ts) `getAlternateLinks()`.

### L-3. Lazy load below-fold images

Verificare presenza `loading="lazy"` su immagini dopo il viewport (gallery flotta, cards località). Astro ha helper per questo.

### L-4. AggregateRating decimale

Se realmente 28 review hanno tutte 5 stelle, ok. Altrimenti ricalcolare media reale con 2 decimali (es. 4.93). Aiuta credibilità.

### L-5. Footer: NAP completo

Verificare presenza Nome / Address / Phone visibili in footer (non solo JSON-LD). Aiuta E-E-A-T e GBP NAP citation parity.

### L-6. Sitemap: aggiungi `<image:image>` per veicoli

In `astro-sitemap` config, includere image sitemap per le pagine veicolo (hero image). Aumenta visibilità in Google Images.

### L-7. Block bots SEO competitor — valutare anche owner access

Robots.txt blocca Ahrefs/Semrush/Moz/MJ12. Bene per non far vedere strategia ai concorrenti, MA significa che **tu owner** non puoi usare quei tool per analizzare il tuo dominio. Considerare bypass via subdomain monitoring oppure usare DataForSEO API che non rispetta robots.txt (è API-based, non crawler).

---

## ROADMAP CONSIGLIATA

| Settimana | Focus | Effort | Impact |
|-----------|-------|--------|--------|
| **W1 (oggi-24h)** | C-1, C-2, C-3, C-4, C-5 | 2-3h | 🚀 Sblocca tutto |
| **W2** | H-1, H-2, H-3, H-7 (re-indexing) | 1-2h | Ranking recovery |
| **W3** | H-4, H-5, H-6 (performance push) | 4-6h | LCP 6.2s → 3.5s |
| **Mese 2** | M-1, M-2, M-4 | 6-8h | +100-200 visite/mese |
| **Mese 3** | M-3, M-5, M-6 | 6-10h | Parità multilingua, schema |
| **Backlog** | L-1..L-7 | — | Continuo |

---

## VERIFICA POST-FIX (smoke test)

Dopo aver applicato C-1 ÷ C-5, eseguire:

```bash
# 1. Verifica 10 URL critici
for url in \
  https://www.ksrentsardinia.com/flotta/audi-rs3 \
  https://www.ksrentsardinia.com/flotta/bmw-m2 \
  https://www.ksrentsardinia.com/flotta/honda-sh \
  https://www.ksrentsardinia.com/noleggio-auto-porto-cervo \
  https://www.ksrentsardinia.com/noleggio-auto-baja-sardinia \
  https://www.ksrentsardinia.com/noleggio-auto-marinella \
  https://www.ksrentsardinia.com/cala-del-faro \
  https://ksrentsardinia.com/ \
  https://www.ksrentsardinia.com/sitemap-0.xml \
  https://www.ksrentsardinia.com/llms.txt
do
  echo -n "$url -> "
  curl -sI -o /dev/null -w "%{http_code}\n" -A "Mozilla/5.0" "$url"
done

# 2. Verifica sitemap conta URL
curl -s https://www.ksrentsardinia.com/sitemap-0.xml | grep -c "<loc>"
# Atteso: 200+

# 3. Re-run audit script SEO
node scripts/seo-similarity.mjs
node scripts/audit-supabase-seo.mjs
npm run indexnow

# 4. GSC: submit sitemap-index.xml + URL inspect homepage
```

Atteso: tutti i 10 URL → 200 OK (eccetto apex che deve essere 301). Sitemap → 200+ `<loc>`.

---

## PROMEMORIA

- **Non pushare a GitHub senza conferma utente** (preferenza confermata in memory)
- **Verificare brand positioning "premium accessibile"** prima di toccare wording — niente "lusso/luxury"
- **Delivery NON sempre gratuita** — solo a Olbia, fuori 5-200€ — verificare wording su tutte le pagine location
- **Santa Teresa NON in copertura** — rimuovere dal DB
- **Supabase MCP pending** — alcune task possono essere automatizzate quando PAT configurato (vedi memory `project_supabase_mcp_pending`)
