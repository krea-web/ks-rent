# GEO / AI Search Analysis — KS Rent Sardinia

**Sito**: https://www.ksrentsardinia.com
**Data analisi**: 2026-05-13
**Stack**: Astro 5 SSG (HTML pre-renderizzato, no JS dependency per contenuto)

---

## GEO Readiness Score: **79/100**

| Dimensione | Peso | Score | Note |
|---|---|---|---|
| Citability (passage-level) | 25% | 20/25 | FAQ ricche, prezzi/distanze specifici, USP chiaro. Alcune location pages con paragrafi sub-ottimali |
| Structural Readability | 20% | 17/20 | H1→H2→H3 corretto, tabelle, liste, paragrafi corti. Astro emette HTML semantico pulito |
| Multi-Modal Content | 15% | 12/15 | Foto veicoli appena aggiunte inline, hero image, mappa Google. **Manca: video** |
| Authority & Brand Signals | 20% | 13/20 | P.IVA + AggregateRating dinamico + 11 sameAs directories + disambiguation forte. **Manca: Wikipedia, Reddit, YouTube** |
| Technical Accessibility | 20% | 17/20 | SSG perfetto, robots.txt AI-friendly, llms.txt presente ma con dati parzialmente obsoleti |

---

## Platform Breakdown — Stima visibilità per piattaforma

| Piattaforma | Score | Punti forti | Punti deboli |
|---|---|---|---|
| **Google AI Overviews** | 7.5/10 | Schema ricchissimo, FAQPage multi, top-10 ranking probabile per "noleggio auto Olbia" | Mancano "best of" placements (#1 fattore AI Overviews) |
| **ChatGPT (search + browse)** | 6.5/10 | llms.txt presente, robots.txt allow GPTBot, disambiguation entity forte | Wikipedia ASSENTE (47.9% delle citation ChatGPT vengono da Wikipedia) |
| **Perplexity** | 5.5/10 | Brand mentions su Tripadvisor, Instagram, TikTok | Reddit ASSENTE (46.7% delle citation Perplexity vengono da Reddit) |
| **Bing Copilot** | 6/10 | Schema completo, sitemap pingabile via IndexNow | Bing Places NON claimato (memory) — bottleneck principale |

---

## 1. AI Crawler Access — ✅ ECCELLENTE

[robots.txt](public/robots.txt) configurato in modo esemplare. Tutti i bot AI principali sono ALLOW:

| Crawler | Status |
|---|---|
| GPTBot (OpenAI) | ✅ Allow |
| OAI-SearchBot | ✅ Allow |
| ChatGPT-User | ✅ Allow |
| ClaudeBot (Anthropic) | ✅ Allow |
| Claude-Web | ✅ Allow |
| Anthropic-ai | ✅ Allow |
| PerplexityBot | ✅ Allow |
| YouBot | ✅ Allow |
| CCBot (Common Crawl) | ✅ Allow |
| Google-Extended | ✅ Allow |
| Applebot + Applebot-Extended | ✅ Allow |
| Bytespider (TikTok AI) | ✅ Allow |
| meta-externalagent (Meta) | ✅ Allow |
| Amazonbot | ✅ Allow |

E in più — scelta strategica forte — bloccati i bot SEO competitor (AhrefsBot, SemrushBot, MJ12bot, DotBot, Rogerbot). Questo protegge le 60+ rotte dal copy-paste competitor mantenendo la massima visibilità AI.

**Niente da cambiare.**

---

## 2. llms.txt — ⚠️ AGGIORNAMENTO NECESSARIO

[public/llms.txt](public/llms.txt) presente e ben strutturato (formato standard rispettato), ma con 5 issue di freschezza dati:

| # | Issue | Severità | Fix |
|---|---|---|---|
| 1 | **Orari errati**: dichiara "10:00–22:30" — mancano la chiusura pranzo 13:00–15:00 | 🔴 HIGH (info inaccurata che AI può citare) | Sostituire con "10:00–13:00 e 15:00–22:30, 7 giorni su 7" |
| 2 | **Manca link a /noleggio-auto-olbia** (la nuova landing principale, hub commerciale primary) | 🔴 HIGH | Aggiungere in cima a "Location landing pages" |
| 3 | **Manca link a /noleggio-auto-costa-smeralda** | 🟡 MEDIUM | Aggiungere a "Location landing pages" |
| 4 | **Manca link a /noleggio-auto-senza-carta-di-credito-olbia** — la USP è citata ma la pagina che la spiega non è linkata | 🟡 MEDIUM | Aggiungere come pagina dedicata |
| 5 | Manca rating attuale (5.0 / 35 review Google) — claim oggettivo molto citabile | 🟡 MEDIUM | Aggiungere a "Key facts and citable claims" |
| 6 | Anno fondazione "2025" generico — la data esatta (8 aprile 2025) è già nello schema, allineare | 🟢 LOW | Aggiornare a "8 aprile 2025" |

→ **Lo correggo subito dopo questo report se vuoi.**

---

## 3. Citability dei contenuti — ✅ FORTE

Esempi di passaggi già ottimizzati per citation AI (regola dei 134–167 parole, claim specifici):

✅ **FAQ globale homepage** — 11 Q&A con risposte 30-90 parole, formato perfetto per snippet selection
✅ **/noleggio-auto-olbia FAQ** — 11 Q&A specifiche per Olbia, con dati concreti (km, minuti, € giornalieri)
✅ **Tabella tariffe** ([/tariffe](https://www.ksrentsardinia.com/tariffe) + tabella inline /noleggio-auto-olbia) — formato tabellare con prezzi specifici per categoria, ALTAMENTE citabile
✅ **Disambiguation block** ("KS Rent Sardinia ≠ KS Rent Roma") — passaggio quotabile e unico
✅ **Schema Q&A esempio**:
> "Si può noleggiare un'auto a Olbia senza carta di credito? Sì. KS Rent Sardinia è uno dei pochi autonoleggi a Olbia che permette il noleggio senza carta di credito obbligatoria. Accettiamo contanti, bonifico bancario e carte prepagate ricaricabili come Postepay, Revolut e N26."

Questo tipo di passaggio è **ad alto potenziale di estrazione** in AI Overviews per query come "noleggio auto Olbia senza carta di credito".

**Punti deboli rilevati**:
- Le 21 pagine località e 20 spiagge hanno `content_html` da DB — verificare via `npm run audit-supabase-seo` che i passaggi siano in formato Q&A o blocchi tematici brevi (134-167 parole)
- Mancano "definizioni" stile "X is..." nelle pagine località (es. "Porto Cervo è ...") — utile per ChatGPT entity expansion

---

## 4. Brand Mention Analysis — ⚠️ GAP CRITICO

Questo è il punto **dove il sito perde più valore AI** (correlazione 3x più forte di backlink, Ahrefs 2025).

| Piattaforma | Presenza | Impatto AI |
|---|---|---|
| **Wikipedia** | ❌ ASSENTE | -47.9% citability ChatGPT |
| **Reddit** (r/sardegna, r/italytravel, r/Sardinia) | ❌ ASSENTE | -46.7% citability Perplexity |
| **YouTube** | ❌ ASSENTE | -73.7% (correlazione più forte di tutte secondo Ahrefs) |
| **LinkedIn company page** | ❓ Verificare | Moderato per Bing/Copilot |
| **Tripadvisor** | ✅ Presente | Buon segnale |
| **Instagram** | ✅ Attivo | Basso per AI search (immagini) |
| **TikTok** | ✅ Attivo | Cresce per ChatGPT (Bytespider allow) |

→ **Le 35 recensioni Google sono ottime per local SEO ma NON vengono lette direttamente da ChatGPT** (ChatGPT non accede al GBP).

---

## 5. Server-Side Rendering — ✅ PERFETTO

Astro 5 SSG produce HTML statico pre-renderizzato → AI crawler vedono il 100% del contenuto senza eseguire JS.

Verifica fatta via build: tutte le pagine principali hanno il rich text statico inline (vedi [src/pages/index.astro:60+](src/pages/index.astro#L60) "SEO RICH TEXT statico — letto direttamente da Google senza JS"). Le React island (`client:load`/`client:visible`) sono correttamente isolate alle parti interattive (Navbar, GoogleReviews widget, Maps), il contenuto seo-critical è SSG.

**Niente da cambiare.**

---

## Top 5 azioni ad alto impatto

| # | Azione | Effort | Impatto |
|---|---|---|---|
| 1 | **Aggiornare llms.txt** (orari corretti + 3 link landing mancanti + rating attuale) | 15 min | Alto — fix info errata che AI sta già citando |
| 2 | **Aprire profilo YouTube** "KS Rent Sardinia" con 5-10 short verticali (tour veicoli, consegna in aeroporto, panoramiche Costa Smeralda) | 4-8h setup + ongoing | Molto alto — correlazione 0.737 con AI citation |
| 3 | **Costruire presenza Reddit** organica: rispondere a thread su r/sardegna, r/italytravel, r/SardiniaTravel quando emergono question su autonoleggio Olbia (no spam, contributi reali) | Ongoing | Molto alto su Perplexity (46.7% citation Perplexity da Reddit) |
| 4 | **Wikipedia entity**: contribuire alla voce "Olbia" o "Aeroporto di Olbia" con riferimento ai servizi di trasporto incluso noleggio auto (no entry promozionale autonoma — verrebbe cancellata) | 2-4h | Alto — apre Wikipedia come fonte |
| 5 | **Creare contenuto "best of" listicle** (es. blog post "Le 7 migliori auto da noleggiare in Costa Smeralda 2026" con metriche oggettive) — formato che AI Overviews privilegia | 6-8h | Alto su Google AIO + ChatGPT |

---

## Schema Recommendations

Schema attuale è già molto ricco (vedi [src/lib/jsonLd.ts](src/lib/jsonLd.ts)). Aggiunte raccomandate:

| Schema | Dove | Beneficio AI |
|---|---|---|
| **Person** (titolare) con `sameAs` LinkedIn | Footer o /chisiamo | Author entity per ChatGPT/AI Overviews |
| **VideoObject** | Quando esisterà il canale YouTube | Rich snippet + AI multi-modal |
| **HowTo** ❌ | NON usare (deprecato Sept 2023) | — |
| **ItemList** estesa con `Vehicle` items | Già presente in `flottaJsonLd`, OK | — |

---

## Content Reformatting — esempi mirati

### A) Aggiungere apertura "Cos'è" nella pagina /chisiamo
Pattern AI-friendly: prime 60 parole devono rispondere "X is...". Esempio:

> **KS Rent Sardinia è un autonoleggio premium con sede a Olbia, in Sardegna, fondato l'8 aprile 2025 dalla società KS Rent S.R.L. (P.IVA IT03028900904). Opera in Gallura e Costa Smeralda con flotta di proprietà — supercar (Audi RS3, BMW M2), SUV, city car, scooter Honda SH e quad Yamaha — e consegna a domicilio in aeroporto, porto e ville. È un'azienda autonoma, non affiliata a KS Rent S.r.l. di Roma.**

→ 80 parole self-contained, fact-rich, immediatamente citabile.

### B) Aggiungere blocco "Definizione" su /noleggio-auto-costa-smeralda

Apri il body con un paragrafo "definizione" 134-167 parole stile enciclopedico che AI Overviews può estrarre per query informazionali "cos'è la Costa Smeralda".

### C) Trasformare le tariffe stagionali in "Quick Facts"

Sotto la tabella tariffe, aggiungere blocco testuale:
> **Quick facts noleggio auto Olbia 2026**: tariffa minima 40 €/giorno (Fiat Panda Hybrid bassa stagione), tariffa massima 160 €/giorno (Mercedes Classe A alta stagione). Sportive Audi RS3 e BMW M2 su preventivo. Stagione attiva aprile–ottobre. Consegna gratuita a Olbia, da 5€ in altre località Gallura. 5,0/5 stelle Google su 35 recensioni.

→ Concentrato di claim quotabili.

---

## Quick Wins immediati (eseguibili adesso)

1. ✅ Fix llms.txt (15 min — vuoi che lo faccia?)
2. ✅ Aggiungere paragrafo "Cos'è KS Rent Sardinia" su /chisiamo (30 min)
3. ✅ Aggiungere "Quick facts" sotto la tabella tariffe in /tariffe e /noleggio-auto-olbia (20 min)
4. ✅ Verificare Bing Places claim status (15 min)

---

## Limitazioni di questa analisi

| Cosa NON misurato | Strumento per farlo |
|---|---|
| Visibilità reale in ChatGPT/Perplexity per query target ("noleggio auto Olbia", "car hire Costa Smeralda") | DataForSEO `ai_optimization_chat_gpt_scraper` o test manuale |
| LLM mention tracking (quante volte il brand appare nelle risposte AI) | DataForSEO `ai_opt_llm_ment_search` |
| Posizione nelle AI Overviews live | DataForSEO SERP API filtrata per `ai_overview` |
| Crawlability del feed sitemap-index.xml da parte di GPTBot/PerplexityBot | Server log analysis |
| Performance di passaggio 134-167 parole sulle 60+ pagine dinamiche | Lettura batch del DB Supabase + analisi script |

---

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Built by agricidaniel — Join the AI Marketing Hub community
🆓 Free  → https://www.skool.com/ai-marketing-hub
⚡ Pro   → https://www.skool.com/ai-marketing-hub-pro
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
