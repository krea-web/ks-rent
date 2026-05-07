# Deploy KS Rent Sardinia (Astro)

## Architettura

- **Build**: Astro `output: "static"` → 50+ HTML pre-renderizzati in `dist/`.
- **Hosting**: Vercel (framework `Astro`, output dir `dist/`).
- **Contenuto dinamico**: tabelle Supabase `seo_locations` / `seo_beaches` lette a build time da `getStaticPaths()` in `src/pages/[slug].astro`.

## Aggiornamento contenuti SEO Supabase → live

Pure SSG: ogni modifica a `seo_locations` / `seo_beaches` richiede un rebuild. Pipeline consigliata:

1. **Vercel Deploy Hook** — generare un URL `https://api.vercel.com/v1/integrations/deploy/...` dal Project Settings → Git → Deploy Hooks.
2. **Supabase Database Webhook** su `seo_locations` e `seo_beaches`:
   - Eventi: `INSERT`, `UPDATE`, `DELETE`
   - Method: `POST`
   - URL: il deploy hook Vercel
3. Vercel ricompila e deploya (~60-90 s).
4. Dopo il deploy, **IndexNow ping** notifica i motori (Bing / Yandex / SearchGPT):
   ```bash
   node scripts/indexnow-ping.mjs
   ```
   o per URL specifiche:
   ```bash
   node scripts/indexnow-ping.mjs https://www.ksrentsardinia.com/noleggio-auto-porto-cervo
   ```
5. Per Google: `gcloud beta indexing url-notifications publish` o invio manuale tramite Search Console URL Inspection.

## Trigger manuale dal pannello admin

Lo stesso deploy hook può essere chiamato dal bottone "Pubblica" in `/admin`: basta un `fetch(VERCEL_DEPLOY_HOOK_URL, { method: "POST" })`. Il bottone va aggiunto in `src/views/Admin.tsx`.

## Variabili d'ambiente

| Nome | Dove serve | Note |
|------|-----------|------|
| `PUBLIC_SUPABASE_URL` | build + client | Letta da `getStaticPaths` per generare le 41 pagine dinamiche. |
| `PUBLIC_SUPABASE_ANON_KEY` | build + client | Solo chiave `anon` (RLS protegge gli endpoint sensibili). |
| `PUBLIC_GOOGLE_MAPS_API_KEY` | client | Caricata dall'isola `<CompanyMap />`. |
| `PUBLIC_SITE_URL` | build | Default `https://www.ksrentsardinia.com`. |

Configurare le stesse variabili sia in locale (`.env`) sia in Vercel → Project Settings → Environment Variables.

## Comandi locali

```bash
npm run dev        # Astro dev server (localhost:4321)
npm run build      # Build statico in dist/ (~12-21 s)
npm run preview    # Serve dist/ in locale per QA
```

## Verifiche post-deploy

1. **Lighthouse**: Performance / SEO / Best Practices / Accessibility ≥ 95 su `/`, `/noleggio-auto-porto-cervo`, `/spiaggia-del-principe`.
2. **Rich Results Test** (Google) → JSON-LD validi.
3. `curl -A "Googlebot" https://www.ksrentsardinia.com/noleggio-auto-porto-cervo | grep "<title>"` → titolo specifico, niente Prerender.io.
4. **Search Console** → "Pages indexed": atteso da 6-7 → 50+ entro 4-6 settimane.
