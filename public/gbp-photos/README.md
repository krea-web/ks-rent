# Foto Google Business Profile — KS Rent Sardinia

18 foto editoriali generate con Gemini (Nano Banana) per arricchire il profilo
Google Business Profile. **45% più direction requests con foto attive** (Agency Jet).

## ⚠️ Disclaimer importante

Queste sono **simulazioni editoriali fotorealistiche**, non foto reali della tua
sede. Vanno usate come **complemento**, non sostituto. Idealmente:
- Carica **prima le foto reali** della sede, veicoli, team, consegne
- Usa queste come **gap-filler** per categorie dove non hai foto reali

Google Vision potrebbe in futuro distinguere foto AI da foto reali — il mix è
sicuro, l'uso solo di AI no.

## Upload su Google Business Profile

1. Vai su [business.google.com](https://business.google.com)
2. Seleziona "KS Rent Sardinia"
3. Tab **Photos** → scegli categoria → **Add Photo**
4. Carica 1 foto per volta (max ~10 MB ognuna, le nostre sono ~700-1000 KB)
5. Aspetta 24-48 ore per moderazione Google

## Categorie GBP raccomandate per ogni foto

| File | Categoria GBP | Note |
|------|---------------|------|
| `01-cover-isola-bianca-sunset.png` | **Cover** | Foto principale del profilo |
| `02-cover-aeroporto-arrivo.png` | Identity / At work | Punto di consegna aeroporto |
| `03-parcheggio-flotta-overview.png` | Identity | Overview parcheggio + flotta |
| `04-ingresso-reception-esterno.png` | **Logo** o Exterior | Facciata sede |
| `05-mappa-accessi-aeroporto.png` | At work | Materiale informativo |
| `06-reception-banco-pulito.png` | **Interior** | Zona reception |
| `07-attesa-clienti-poltrone.png` | Interior | Zona attesa clienti |
| `08-firma-contratto-tablet.png` | At work | Processo firma digitale |
| `09-fiat-panda-hybrid.png` | **Product** | Veicolo flotta |
| `10-jeep-avenger-suv.png` | Product | Veicolo flotta |
| `11-mercedes-classe-a.png` | Product | Veicolo flotta |
| `12-audi-rs3-verde-kyalami.png` | Product | Veicolo flotta sportiva |
| `13-bmw-m2-coupe.png` | Product | Veicolo flotta sportiva |
| `14-honda-sh-scooter.png` | Product | Scooter flotta |
| `15-yamaha-quad-raptor.png` | Product | Quad flotta |
| `16-consegna-aeroporto-parking.png` | At work | Consegna aeroporto |
| `17-consegna-porto-isola-bianca.png` | At work | Consegna porto |
| `18-chiavi-consegna.png` | **Team** o At work | Momento consegna chiavi |

## Strategia ottimale per il primo mese

**Settimana 1**: upload 6 foto (1 cover + 5 prodotto flotta)
**Settimana 2**: upload 6 foto (interior + esterno + parcheggio)
**Settimana 3**: upload 6 foto (consegne + team + at work)

Google premia la **velocity di upload foto** (non solo il count totale). Spalmare
nel tempo è meglio che caricare tutto in un giorno.

## Re-generazione

Se vuoi rigenerare alcune foto (es. cambiando prompt):

```bash
# tutti
node scripts/generate-gbp-photos.mjs

# solo uno specifico
node scripts/generate-gbp-photos.mjs 01-cover-isola-bianca-sunset

# forza rigenerazione (sovrascrive)
node scripts/generate-gbp-photos.mjs --force
```

## Tipi di foto Google Business Profile

- **Cover**: 1 sola, deve rappresentare il brand. Mostrata in alto al profilo.
- **Logo**: 1 sola, quadrata. Usata nelle citazioni Google e map pack.
- **Interior**: foto degli ambienti interni (reception, sala attesa).
- **Exterior**: foto facciata, ingresso, insegna.
- **At work**: foto del processo (consegne, firma, check veicolo).
- **Team**: foto del team. Per privacy + memory `feedback_brand_positioning`,
  preferire silhouette o mani senza volti.
- **Identity**: foto generiche dell'azienda (insegna, parcheggio overview).
- **Product**: per noleggio = foto dei veicoli della flotta. **Categoria più
  importante per car_rental**, riempi questa il più possibile.

## Best practices upload

- **Dimensioni**: 720×720 px minimo, 16:9 raccomandato per cover
- **Peso**: max 10 MB (le nostre PNG sono 700-1000 KB, OK)
- **Formato**: JPG/PNG (le nostre PNG ok)
- **Geo-tag**: aggiungi metadata EXIF GPS con coordinate Isola Bianca
  (40.923018, 9.520169) usando ExifTool o app smartphone prima di upload
  per boost addizionale del 5-10% al weight della foto
