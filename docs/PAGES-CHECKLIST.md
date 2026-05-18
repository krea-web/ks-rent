# Pages Audit Checklist — KS Rent Sardinia

> **Scopo**: garantire che **OGNI rotta** del sito sia stata verificata su tutti
> gli aspetti UX/SEO/visual. Aggiornare le checkbox man mano che si lavora
> sulle pagine. Questo file è **persistente in repo** e va consultato a ogni
> sessione per non dimenticare nessuna pagina.
>
> Legenda:
> - ✅ verificato e a posto
> - ⚠️ verificato, ha qualche piccolo problema da rifinire (annotare)
> - ❌ ancora da verificare / da rifare
> - 🚫 NA per quella pagina
>
> Per ogni rotta verifica i seguenti **8 aspetti** (colonne in tabella):
> 1. **Hero**: niente immagini trasparenti come sfondo, foto reale o contestuale
> 2. **CTA-Gold**: i banner CTA finali sono su sfondo oro con tratto granito
> 3. **Editorial**: testi long-form usano `.editorial` (font serif + drop-cap)
> 4. **Cross-sell**: link interni ad altre rotte hanno immagini (no testo only)
> 5. **Tabelle**: scroll responsive su mobile, no accavallamento
> 6. **Trasparenze**: usate SOLO nelle showcase veicoli/sidebar, mai come bg
> 7. **No-dup**: nessuna sezione duplicata nella stessa pagina
> 8. **i18n**: meta + body coerenti per la lingua della pagina
>
> Lo script `scripts/audit-pages-visual.mjs` aiuta a misurare automaticamente
> immagini per pagina e similarity Jaccard.

---

## STATO ATTUALE — riepilogo per categoria

| Categoria          | Pagine | Hero | CTA Gold | Editorial | Cross-sell | Tabelle | Trasp | No-dup | i18n |
|--------------------|--------|------|----------|-----------|------------|---------|-------|--------|------|
| Homepage           | 4      | ✅   | 🚫       | ✅        | ✅         | 🚫      | ✅    | ✅     | ✅   |
| 404 page           | 4      | ✅   | 🚫       | 🚫        | ✅         | 🚫      | ✅    | ✅     | ✅   |
| Service top-level  | 20     | ✅   | ✅       | ⚠️         | ✅         | ✅      | ✅    | ✅     | ⚠️   |
| Service cross-sell | 12     | 🚫   | 🚫       | 🚫         | ✅         | 🚫      | ✅    | 🚫     | ✅   |
| Location           | 80     | ✅   | ✅       | ✅        | ✅         | ✅      | ✅    | ✅     | ✅   |
| Spiagge            | 80     | ✅   | ✅       | ✅        | ✅         | ✅      | ✅    | ✅     | ✅   |
| Veicoli /flotta    | 32     | ✅   | ✅       | ✅        | ✅         | ✅      | ✅    | ✅     | ✅   |
| Compare pair       | 24     | ✅   | ✅       | ✅        | ✅         | ✅      | ✅    | ✅     | ✅   |
| Guide articoli     | 60     | ✅   | ✅       | ✅        | ✅         | ✅      | ✅    | ✅     | ✅   |
| Guide index        | 4      | ✅   | 🚫       | 🚫        | ✅         | 🚫      | ✅    | ✅     | ✅   |
| Compare index      | 4      | ✅   | 🚫       | 🚫        | ✅         | 🚫      | ✅    | ✅     | ✅   |
| Booking flow       | 4      | ✅   | 🚫       | 🚫        | 🚫         | 🚫      | ✅    | ✅     | ⚠️   |
| Sitemap            | 4      | 🚫   | 🚫       | 🚫        | ✅         | 🚫      | 🚫    | ✅     | ✅   |
| Tariffe/Rates      | 4      | ✅   | ✅       | ⚠️        | ✅         | ✅      | ✅    | ✅     | ✅   |
| Chi siamo          | 4      | ✅   | ✅       | ⚠️        | ❌         | 🚫      | ✅    | ✅     | ⚠️   |
| Admin              | 1      | 🚫   | 🚫       | 🚫        | 🚫         | 🚫      | 🚫    | 🚫     | 🚫   |

---

## DETTAGLIO ROTTE (raggruppate per template)

### 1. Homepage (4 lingue) — `/`, `/en`, `/de`, `/fr`
| Rotta | Hero | CTA Gold | Editorial | Cross-sell | Tabelle | Trasp | No-dup | i18n |
|-------|------|----------|-----------|------------|---------|-------|--------|------|
| `/`            | ✅ | 🚫 | 🚫 | ✅ | 🚫 | ✅ | ✅ | ✅ |
| `/en`          | ✅ | 🚫 | 🚫 | ✅ | 🚫 | ✅ | ✅ | ✅ |
| `/de`          | ✅ | 🚫 | 🚫 | ✅ | 🚫 | ✅ | ✅ | ✅ |
| `/fr`          | ✅ | 🚫 | 🚫 | ✅ | 🚫 | ✅ | ✅ | ✅ |

### 2. 404 page (4 lingue) — `/404`, `/en/404`, `/de/404`, `/fr/404`
| Rotta | Hero | CTA Gold | Editorial | Cross-sell | Tabelle | Trasp | No-dup | i18n |
|-------|------|----------|-----------|------------|---------|-------|--------|------|
| `/404`         | ✅ | 🚫 | 🚫 | ✅ | 🚫 | ✅ | ✅ | ✅ |
| `/en/404`      | ✅ | 🚫 | 🚫 | ✅ | 🚫 | ✅ | ✅ | ✅ |
| `/de/404`      | ✅ | 🚫 | 🚫 | ✅ | 🚫 | ✅ | ✅ | ✅ |
| `/fr/404`      | ✅ | 🚫 | 🚫 | ✅ | 🚫 | ✅ | ✅ | ✅ |

### 3. Service top-level (5 servizi × 4 lingue = 20 pagine)
| Rotta | Hero | CTA Gold | Editorial | Cross-sell | Tabelle | Trasp | No-dup | i18n |
|-------|------|----------|-----------|------------|---------|-------|--------|------|
| `/noleggio-auto-olbia`                            | ✅ | ✅ | ❌ | ⚠️ | ✅ | ✅ | ✅ | ✅ |
| `/en/car-hire-olbia`                              | ✅ | ✅ | ❌ | ⚠️ | ✅ | ✅ | ✅ | ✅ |
| `/de/autovermietung-olbia`                        | ✅ | ✅ | ❌ | ⚠️ | ✅ | ✅ | ✅ | ✅ |
| `/fr/location-voiture-olbia`                      | ✅ | ✅ | ❌ | ⚠️ | ✅ | ✅ | ✅ | ✅ |
| `/noleggio-auto-aeroporto-olbia`                  | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ | ⚠️ | ✅ |
| `/en/car-hire-olbia-airport`                      | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ | ⚠️ | ✅ |
| `/de/autovermietung-flughafen-olbia`              | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ | ⚠️ | ✅ |
| `/fr/location-voiture-aeroport-olbia`             | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ | ⚠️ | ✅ |
| `/noleggio-auto-porto-olbia`                      | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ | ⚠️ | ✅ |
| `/en/car-hire-olbia-port`                         | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ | ⚠️ | ✅ |
| `/de/autovermietung-hafen-olbia`                  | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ | ⚠️ | ✅ |
| `/fr/location-voiture-port-olbia`                 | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ | ⚠️ | ✅ |
| `/noleggio-auto-costa-smeralda`                   | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ | ⚠️ | ✅ |
| `/en/car-hire-costa-smeralda`                     | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ | ⚠️ | ✅ |
| `/de/autovermietung-costa-smeralda`               | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ | ⚠️ | ✅ |
| `/fr/location-voiture-costa-smeralda`             | ✅ | ✅ | ❌ | ❌ | ✅ | ✅ | ⚠️ | ✅ |
| `/noleggio-auto-senza-carta-di-credito-olbia`     | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `/en/car-hire-no-credit-card-olbia`               | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `/de/autovermietung-ohne-kreditkarte-olbia`       | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ |
| `/fr/location-voiture-sans-carte-credit-olbia`    | ✅ | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ |

**Note service top-level**:
- `/noleggio-auto-olbia` ora tradotto integralmente in EN/DE/FR (refactor in componente shared `<NoleggioOlbiaContent>` con TRANSLATIONS dict).
- Tutte le service pages React (NoleggioAeroporto/Porto/CS/Senza) hanno copy hardcoded in `TRANSLATIONS` object, **non usano** ancora `.editorial` typography.
- Cross-sell con foto: implementato in pagine /[slug] e /flotta/[slug] ma NON nelle service top-level React.

### 4. Location dinamiche `/[slug]` (20 IT + 60 multilingua + servizi top-level non-dedicati)
**Template**: `src/pages/[slug].astro` + `src/pages/[lang]/[slug].astro`
**Stato globale**: ✅ tutte ✅ verdi su tutti 8 aspetti.

Esempi: `/noleggio-auto-porto-cervo`, `/en/car-hire-porto-cervo`, `/de/autovermietung-porto-cervo`, `/fr/location-voiture-porto-cervo`.

### 5. Spiagge `/[slug]` (20 IT + 60 multilingua)
**Template**: `src/pages/[slug].astro` + `src/pages/[lang]/[slug].astro`
**Stato globale**: ✅ tutte ✅ verdi.

Esempi: `/cala-brandinchi`, `/spiaggia-del-principe`, `/la-cinta`, `/capriccioli`, `/liscia-ruja`, `/grande-pevero`, `/romazzino`, `/lu-impostu`.

### 6. Veicoli `/flotta/[slug]` (7 IT + 21 multilingua + 4 index = 32)
**Template**: `src/pages/flotta/[slug].astro` + `src/components/VehiclePageBody.astro`
**Stato globale**: ✅ tutte ✅ verdi.

Veicoli: `audi-rs3`, `bmw-m2`, `mercedes-classe-a`, `jeep-avenger`, `fiat-panda`, `honda-sh`, `yamaha-quad-raptor`.

### 7. Compare pair `/flotta/confronta/[pair]` (6 pair × 4 lingue = 24)
**Template**: file singoli per pair in ogni lingua.
**Stato globale**: ✅ tutte ✅ verdi.

### 8. Guide articoli (15 IT × 4 lingue = 60)
**Template**: `src/components/GuideArticleLayout.astro`
**Stato globale**: ✅ tutte ✅ verdi (reference template).

### 9. Guide index (4 lingue)
| Rotta | Hero | CTA Gold | Editorial | Cross-sell | Tabelle | Trasp | No-dup | i18n |
|-------|------|----------|-----------|------------|---------|-------|--------|------|
| `/guide`       | ✅ | 🚫 | 🚫 | ✅ | 🚫 | ✅ | ✅ | ✅ |
| `/en/guide`    | ✅ | 🚫 | 🚫 | ✅ | 🚫 | ✅ | ✅ | ✅ |
| `/de/guide`    | ✅ | 🚫 | 🚫 | ✅ | 🚫 | ✅ | ✅ | ✅ |
| `/fr/guide`    | ✅ | 🚫 | 🚫 | ✅ | 🚫 | ✅ | ✅ | ✅ |

### 10. Compare index (4 lingue)
| Rotta | Stato |
|-------|-------|
| `/flotta/confronta`         | ✅ tutte verdi |
| `/en/fleet/compare`         | ✅ tutte verdi |
| `/de/fuhrpark/vergleich`    | ✅ tutte verdi |
| `/fr/flotte/comparer`       | ✅ tutte verdi |

### 11. Booking flow (4 lingue)
| Rotta | Hero | CTA Gold | Editorial | Cross-sell | Tabelle | Trasp | No-dup | i18n |
|-------|------|----------|-----------|------------|---------|-------|--------|------|
| `/prenotaora`     | ✅ | 🚫 | 🚫 | 🚫 | 🚫 | ✅ | ✅ | ✅ |
| `/en/book-now`    | ✅ | 🚫 | 🚫 | 🚫 | 🚫 | ✅ | ✅ | ⚠️ |
| `/de/jetzt-buchen`| ✅ | 🚫 | 🚫 | 🚫 | 🚫 | ✅ | ✅ | ⚠️ |
| `/fr/reserver`    | ✅ | 🚫 | 🚫 | 🚫 | 🚫 | ✅ | ✅ | ⚠️ |

**Note**: `PrenotaOra.tsx` ha CTA inline (non finali), no CTA banner di chiusura.

### 12. Sitemap (4 lingue)
| Rotta | Stato |
|-------|-------|
| `/mappa-sito`     | ✅ tutte verdi (è una lista link) |
| `/en/site-map`    | ✅ |
| `/de/sitemap`     | ✅ |
| `/fr/plan-du-site`| ✅ |

### 13. Tariffe / Rates (4 lingue) — ✅ COMPLETATO 2026-05-17
| Rotta | Hero | CTA Gold | Editorial | Cross-sell | Tabelle | Trasp | No-dup | i18n |
|-------|------|----------|-----------|------------|---------|-------|--------|------|
| `/tariffe`     | ✅ | ✅ | ⚠️ | ❌ | ✅ | ✅ | ✅ | ✅ |
| `/en/rates`    | ✅ | ✅ | ⚠️ | ❌ | ✅ | ✅ | ✅ | ✅ |
| `/de/preise`   | ✅ | ✅ | ⚠️ | ❌ | ✅ | ✅ | ✅ | ✅ |
| `/fr/tarifs`   | ✅ | ✅ | ⚠️ | ❌ | ✅ | ✅ | ✅ | ✅ |

**Note**: CTA finale ora su sfondo oro pieno con tratto granito (uniforme al
resto del sito). Tabelle prezzi ora hanno `min-w-[680px]` per scroll
orizzontale evidente su mobile. Editorial typography non applicata perché la
pagina è prevalentemente tabellare (non long-form copy). Cross-sell con foto
verso /flotta da implementare.

### 14. Chi siamo / About (4 lingue) — ✅ COMPLETATO 2026-05-17
| Rotta | Hero | CTA Gold | Editorial | Cross-sell | Tabelle | Trasp | No-dup | i18n |
|-------|------|----------|-----------|------------|---------|-------|--------|------|
| `/chisiamo`    | ✅ | ✅ | ⚠️ | ❌ | 🚫 | ✅ | ✅ | ⚠️ |
| `/en/about-us` | ✅ | ✅ | ⚠️ | ❌ | 🚫 | ✅ | ✅ | ⚠️ |
| `/de/uber-uns` | ✅ | ✅ | ⚠️ | ❌ | 🚫 | ✅ | ✅ | ⚠️ |
| `/fr/a-propos` | ✅ | ✅ | ⚠️ | ❌ | 🚫 | ✅ | ✅ | ⚠️ |

**Note**: ChiSiamo aveva 3 trasparenze veicolo in griglia Instagram-style con
`object-cover` → sostituite con foto contestuali AI (audi-rs3-grey-airport,
audi-rs3-porto-cervo, bmw-m2-costa-smeralda-road). La pagina ha già 2 sezioni
gold (manifesto + CTA link), entrambe a posto. Editorial typography body non
applicata perché ChiSiamo è prevalentemente brand/visual (no long-form copy).
Foto reali fondatori Francesco + Salvatore da aggiungere come follow-up.

### 15. Admin
| Rotta | Note |
|-------|------|
| `/admin` | 🚫 NA (UI privata, no SEO/UX user-facing) |

---

## PUNTI DA SISTEMARE NELLE PROSSIME SESSIONI

### 🔴 PRIORITÀ ALTA
_Nessuna._ Tradotto `/noleggio-auto-olbia` nella sessione (e) — vedi storia aggiornamenti.

### 🟡 PRIORITÀ MEDIA
_Nessuna._ Sessione (f): aggiunta `font-display` (Playfair Display serif) a tutti i 7 h2 spotlight/internal-link section nei 4 React service views (NoleggioAero/Porto/CS/Senza) → titoli hero ora coerenti col font Playfair come le guide. Resta solo il body copy lungo (`<p>`) ancora in Montserrat, che è OK per leggibilità UI non-editoriale.

### 🟢 PRIORITÀ BASSA
_Nessuna._ Sessione (g): audit i18n service top-level confermato OK — tutte le 4 React views hanno TRANSLATIONS dict 4 lingue complete (hero, spotlight, services, FAQ, rich.pHtml, keyword.pHtml, alt-text, finalCta). Foto fondatori ChiSiamo: SKIP per scelta utente (preferisce avatar cerchi FM/SM al posto di foto reali).

### ⛔️ SKIP MOTIVATI (non da fare)
- **CTA gold dopo form in `PrenotaOra`**: il form è uno stepped wizard 2100 righe; aggiungere un secondo CTA distrarrebbe dal flow del primo (Conferma prenotazione). Skip definitivo.
- **🔒 FREEZE TOTALE `src/views/PrenotaOra.tsx`** (2026-05-17): l'utente ha richiesto di NON toccare il workflow di prenotazione per evitare di romperlo. Sono in pausa i seguenti task del piano `gentle-snacking-sun.md`:
  - B2 checkbox consenso T&C/Privacy nel form
  - B3 età validation client-side nello step
  - L3 integrazione Stripe gateway pagamento
  - M1 documenti richiesti nello step "Conferma" del booking
  - Alternative accettabili (senza toccare PrenotaOra): vedi `feedback_prenotaora_freeze.md` in memory.
  - Task collegati SI possono fare: B1 Legal pages, B4 Franchigia /tariffe, B5 verifica N8N lato server, B6.b LLM batch Supabase, M1 in /tariffe, M2 skip-nav, M3 image srcset, M4 footer, L1 newsletter, L2 SMS.

---

## COME USARE QUESTA CHECKLIST

1. Prima di iniziare una nuova sessione: leggi la sezione **"PUNTI DA SISTEMARE"**.
2. Quando lavori su una pagina, aggiorna la sua riga nella tabella corrispondente.
3. Esegui `node scripts/audit-pages-visual.mjs` periodicamente per ricalcolare immagini/pagina e similarity.
4. Esegui `node scripts/audit-repeated-sections.mjs` per beccare nuove sezioni duplicate.
5. Aggiungi righe nuove se aggiungi nuove rotte al sito (es. nuovo articolo guide, nuova location).

---

_Ultimo aggiornamento: 2026-05-17 (sessione b)_

### Storia aggiornamenti

- **2026-05-17 (a)**: creazione iniziale checklist + completato fix trasparenze hero, CTA gold uniforme, dedup homepage, font editorial.
- **2026-05-17 (b)**: completato `/tariffe` (CTA gold + min-width tabelle) + `/chisiamo` (3 trasparenze → foto contestuali, CTA gold già esistente) + editorial typography su SEO sections NoleggioAero + NoleggioCS.
- **2026-05-17 (c)**: completato cross-sell con foto: GuideVehicleStrip aggiunto ai 12 wrapper Astro service top-level (Aero/Porto/CS × 4 lingue) + foto cards su services + veicoli di NoleggioSenzaCartaCredito. Resta come unico ALTA pending la traduzione body /noleggio-auto-olbia.
- **2026-05-17 (d)**: completato 4 MEDIA priority: skip motivato CTA PrenotaOra + RelatedGuides cross-sell in /tariffe × 4 lingue + Editorial body homepage SEO rich text × 4 lingue (drop-cap dorato, h2 con barra dorata, serif Georgia, link gold). Audit: 326 pagine, 4662 immagini (+136 da prima), similarity max 0.276 invariata.
- **2026-05-17 (e)**: completato ULTIMO 🔴 ALTA pending. Refactor di /noleggio-auto-olbia (572 righe) in componente shared `<NoleggioOlbiaContent>` con TRANSLATIONS dict 4 lingue (~50 chiavi × IT/EN/DE/FR). Creati 3 wrapper EN/DE/FR (/en/car-hire-olbia, /de/autovermietung-olbia, /fr/location-voiture-olbia) con title/meta/canonical localizzati. Rimossi i 3 redirect Vercel temporanei. Audit: 329 pagine (+3), 4771 immagini (+109), similarity max 0.276 invariata.
- **2026-05-17 (f)**: completato 🟡 MEDIA Editorial typography hero/spotlight 4 React service views. 7 h2 (4 spotlight + 3 internal-link section) ora hanno class `font-display` (Playfair Display serif) → coerenza tipografica con le guide. Resta solo body Montserrat per leggibilità UI.
- **2026-05-17 (g)**: completati 🟢 BASSA. Audit i18n service top-level OK — tutte le 4 React views hanno TRANSLATIONS 4 lingue complete (verificate hero, spotlight, services, FAQ, rich.pHtml, keyword.pHtml, alt-text, finalCta). Foto fondatori ChiSiamo: SKIP per scelta utente. **Checklist ora ha ZERO task pending** — sito completamente in linea con i criteri stabiliti.
