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
| `/noleggio-auto-olbia`                            | ✅ | ✅ | ❌ | ⚠️ | ✅ | ✅ | ⚠️ | ✅ |
| `/en/car-hire-olbia` *(redirect a IT)*            | 🚫 | 🚫 | 🚫 | 🚫 | 🚫 | 🚫 | 🚫 | ❌ |
| `/de/autovermietung-olbia` *(redirect a IT)*      | 🚫 | 🚫 | 🚫 | 🚫 | 🚫 | 🚫 | 🚫 | ❌ |
| `/fr/location-voiture-olbia` *(redirect a IT)*    | 🚫 | 🚫 | 🚫 | 🚫 | 🚫 | 🚫 | 🚫 | ❌ |
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
- `/noleggio-auto-olbia` mancano traduzioni EN/DE/FR del body (redirect Vercel a IT come stopgap).
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
1. **Pagina `/noleggio-auto-olbia` da tradurre** in EN/DE/FR (oggi solo redirect Vercel a IT). ⚠️ task pesante: 572 righe IT da tradurre in 3 lingue. Sessione futura.

### 🟡 PRIORITÀ MEDIA
2. **Editorial body completo** nei 4 React service views: hero, spotlight, vantaggi e altre sezioni "informative" — oggi solo la "SEO keyword section" di NoleggioAero + NoleggioCS è migrata. Le hero/spotlight delle 4 views potrebbero beneficiare di tipografia editorial, ma richiede refactor significativo dei className Tailwind.

### 🟢 PRIORITÀ BASSA
3. **i18n delle service top-level**: alcune sezioni dei 4 React views hanno traduzioni parziali (es. variants/varianti, alt-text immagini).
4. **`ChiSiamo` bio fondatori**: aggiungere foto reali Francesco + Salvatore Milo (oggi sono iniziali "FM" "SM" in cerchio). Mantenere cerchi come fallback.

### ⛔️ SKIP MOTIVATI (non da fare)
- **CTA gold dopo form in `PrenotaOra`**: il form è uno stepped wizard 2100 righe; aggiungere un secondo CTA distrarrebbe dal flow del primo (Conferma prenotazione). Skip definitivo.

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
