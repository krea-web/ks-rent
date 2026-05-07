-- =====================================================================
-- Cache-Control per Supabase Storage public assets
-- =====================================================================
-- Imposta `Cache-Control: max-age=31536000` (1 anno) su tutti i file
-- nei bucket pubblici. Senza questa modifica, Supabase serve di default
-- con max-age=3600 (1h), penalizzando il punteggio Lighthouse e
-- forzando il browser a ri-scaricare immagini/video immutabili a ogni
-- visita.
--
-- IMPORTANTE: la UI Supabase Storage non espone un campo cache control
-- a livello di bucket (verificato 2026-05-07). L'unica via per
-- impostarlo retroattivamente sui file gia caricati e' aggiornare
-- direttamente la colonna metadata di storage.objects.
--
-- Per i NUOVI upload, passare l'opzione cacheControl: '31536000' al
-- client JS (oppure 'max-age=31536000, immutable' lato server-side).
-- =====================================================================

update storage.objects
set metadata = jsonb_set(
  coalesce(metadata, '{}'::jsonb),
  '{cacheControl}',
  '"31536000"'::jsonb
)
where bucket_id in (
  select id from storage.buckets where public = true
);

-- =====================================================================
-- VERIFICA
-- =====================================================================
select
  bucket_id,
  count(*) as files,
  metadata->>'cacheControl' as cache_control_seconds
from storage.objects
where bucket_id in (select id from storage.buckets where public = true)
group by bucket_id, metadata->>'cacheControl'
order by bucket_id;
