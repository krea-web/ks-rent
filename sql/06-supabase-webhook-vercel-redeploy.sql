-- =====================================================================
-- Setup webhook Supabase -> Vercel Deploy Hook
-- =====================================================================
-- Quando una riga di seo_locations o seo_beaches viene
-- modificata/creata/eliminata, fa POST al Vercel Deploy Hook che
-- triggera un rebuild Astro (la nuova build legge il dato aggiornato
-- via getStaticPaths e rigenera l'HTML statico per quel slug).
--
-- Tempo end-to-end modifica -> live: ~60-90 s.
--
-- PRIMA DI ESEGUIRE:
-- 1. Genera un Vercel Deploy Hook (Settings -> Git -> Deploy Hooks)
-- 2. Sostituisci VERCEL_DEPLOY_HOOK_URL qui sotto con il tuo URL
-- 3. Esegui questo file dal SQL Editor di Supabase Studio
-- =====================================================================

-- 1. Abilita pg_net (estensione per chiamate HTTP da Postgres)
create extension if not exists pg_net with schema extensions;

-- 2. Funzione di trigger: chiama il deploy hook
create or replace function public.trigger_vercel_redeploy()
returns trigger
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  -- ATTENZIONE: incolla qui il tuo Vercel Deploy Hook URL completo
  vercel_url text := 'https://api.vercel.com/v1/integrations/deploy/prj_REPLACE_ME/REPLACE_ME';
  request_id bigint;
begin
  -- Invio richiesta HTTP non bloccante (pg_net e' async, non rallenta la query)
  select net.http_post(
    url := vercel_url,
    headers := '{"Content-Type": "application/json"}'::jsonb,
    body := jsonb_build_object(
      'source', 'supabase-webhook',
      'table', tg_table_name,
      'op', tg_op,
      'slug', case
        when tg_op = 'DELETE' then old.slug
        else new.slug
      end,
      'at', now()
    )
  ) into request_id;

  return case when tg_op = 'DELETE' then old else new end;
end;
$$;

-- 3. Trigger su seo_locations
drop trigger if exists trg_redeploy_seo_locations on public.seo_locations;
create trigger trg_redeploy_seo_locations
  after insert or update or delete on public.seo_locations
  for each row execute function public.trigger_vercel_redeploy();

-- 4. Trigger su seo_beaches
drop trigger if exists trg_redeploy_seo_beaches on public.seo_beaches;
create trigger trg_redeploy_seo_beaches
  after insert or update or delete on public.seo_beaches
  for each row execute function public.trigger_vercel_redeploy();

-- =====================================================================
-- TEST
-- =====================================================================
-- Per testare senza modificare dati reali, esegui:
--
--   update public.seo_locations
--   set updated_at = now()
--   where slug = 'noleggio-auto-porto-cervo';
--
-- Poi controlla:
--   - Vercel Dashboard -> Deployments: nuovo deploy partito
--   - select * from net._http_response order by created desc limit 5;
--     (per vedere lo status della chiamata HTTP del trigger)
-- =====================================================================

-- =====================================================================
-- TEARDOWN (se serve disattivare in futuro)
-- =====================================================================
-- drop trigger if exists trg_redeploy_seo_locations on public.seo_locations;
-- drop trigger if exists trg_redeploy_seo_beaches  on public.seo_beaches;
-- drop function if exists public.trigger_vercel_redeploy();
