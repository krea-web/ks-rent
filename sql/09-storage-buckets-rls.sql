-- ============================================================
-- 09 - STORAGE BUCKETS + RLS POLICIES
-- ============================================================
-- Crea i 3 bucket richiesti dall'admin e applica policy granulari:
--   * vehicles (public read, admin write)   - immagini veicoli
--   * contracts (private)                   - PDF contratti firmati
--   * reviews (public read, admin write)    - foto autori Google Reviews
--
-- Esegui DOPO sql/08-phase-0-admin-redesign-schema.sql.
-- Idempotente (usa ON CONFLICT e DROP POLICY IF EXISTS).
--
-- IMPORTANTE — Supabase Cloud:
-- L'utente Dashboard NON e' owner di storage.objects (lo e' il ruolo
-- interno supabase_storage_admin). Per questo lo script NON include
-- "ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY" — RLS e'
-- gia' attivo by default su storage.objects in Supabase Cloud.
-- INSERT su storage.buckets e CREATE POLICY su storage.objects sono
-- pero' permessi via Dashboard SQL editor.
--
-- Se anche INSERT INTO storage.buckets fallisce con "must be owner",
-- crea i 3 bucket via UI Dashboard (Storage > New bucket) e poi
-- esegui SOLO le sezioni 3 (funzione helper) e 4-6 (policy).
-- ============================================================


-- ============================================================
-- 1) CREAZIONE BUCKET (puo' richiedere UI Dashboard se SQL fallisce)
-- ============================================================
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES
  ('vehicles', 'vehicles', true, 10485760,
    ARRAY['image/jpeg','image/png','image/webp','image/avif','image/svg+xml']),
  ('reviews', 'reviews', true, 5242880,
    ARRAY['image/jpeg','image/png','image/webp','image/avif']),
  ('contracts', 'contracts', false, 20971520,
    ARRAY['application/pdf'])
ON CONFLICT (id) DO UPDATE
  SET public = EXCLUDED.public,
      file_size_limit = EXCLUDED.file_size_limit,
      allowed_mime_types = EXCLUDED.allowed_mime_types;


-- ============================================================
-- 2) HELPER: funzione is_admin_user() (idempotente)
-- ------------------------------------------------------------
-- Centralizza la logica "utente e' admin" usata dalle policy.
-- Vive in schema public (l'utente Dashboard ne e' owner).
-- ============================================================
CREATE OR REPLACE FUNCTION public.is_admin_user()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.profiles
    WHERE profiles.id = auth.uid()
      AND profiles.is_admin = true
  );
$$;

-- Concedi execute alle role che possono valutare la policy
GRANT EXECUTE ON FUNCTION public.is_admin_user() TO anon, authenticated, service_role;


-- ============================================================
-- 3) BUCKET `vehicles` - public read, admin write
-- ============================================================
DROP POLICY IF EXISTS "vehicles: public read"   ON storage.objects;
DROP POLICY IF EXISTS "vehicles: admin insert"  ON storage.objects;
DROP POLICY IF EXISTS "vehicles: admin update"  ON storage.objects;
DROP POLICY IF EXISTS "vehicles: admin delete"  ON storage.objects;

CREATE POLICY "vehicles: public read"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'vehicles');

CREATE POLICY "vehicles: admin insert"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'vehicles' AND public.is_admin_user());

CREATE POLICY "vehicles: admin update"
  ON storage.objects FOR UPDATE
  USING (bucket_id = 'vehicles' AND public.is_admin_user())
  WITH CHECK (bucket_id = 'vehicles' AND public.is_admin_user());

CREATE POLICY "vehicles: admin delete"
  ON storage.objects FOR DELETE
  USING (bucket_id = 'vehicles' AND public.is_admin_user());


-- ============================================================
-- 4) BUCKET `reviews` - public read, admin write
-- (foto autori Google Reviews cached)
-- ============================================================
DROP POLICY IF EXISTS "reviews: public read"  ON storage.objects;
DROP POLICY IF EXISTS "reviews: admin insert" ON storage.objects;
DROP POLICY IF EXISTS "reviews: admin update" ON storage.objects;
DROP POLICY IF EXISTS "reviews: admin delete" ON storage.objects;

CREATE POLICY "reviews: public read"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'reviews');

CREATE POLICY "reviews: admin insert"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'reviews' AND public.is_admin_user());

CREATE POLICY "reviews: admin update"
  ON storage.objects FOR UPDATE
  USING (bucket_id = 'reviews' AND public.is_admin_user())
  WITH CHECK (bucket_id = 'reviews' AND public.is_admin_user());

CREATE POLICY "reviews: admin delete"
  ON storage.objects FOR DELETE
  USING (bucket_id = 'reviews' AND public.is_admin_user());


-- ============================================================
-- 5) BUCKET `contracts` - admin only (private)
-- ------------------------------------------------------------
-- I PDF contratti firmati contengono dati personali (patente, CF).
-- Solo admin possono leggere/scrivere/eliminare.
-- I link al PDF (signed_pdf_url) generati con bucket privato richiedono
-- signed URL temporanei (scadenza configurabile lato client).
-- ============================================================
DROP POLICY IF EXISTS "contracts: admin select" ON storage.objects;
DROP POLICY IF EXISTS "contracts: admin insert" ON storage.objects;
DROP POLICY IF EXISTS "contracts: admin update" ON storage.objects;
DROP POLICY IF EXISTS "contracts: admin delete" ON storage.objects;

CREATE POLICY "contracts: admin select"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'contracts' AND public.is_admin_user());

CREATE POLICY "contracts: admin insert"
  ON storage.objects FOR INSERT
  WITH CHECK (bucket_id = 'contracts' AND public.is_admin_user());

CREATE POLICY "contracts: admin update"
  ON storage.objects FOR UPDATE
  USING (bucket_id = 'contracts' AND public.is_admin_user())
  WITH CHECK (bucket_id = 'contracts' AND public.is_admin_user());

CREATE POLICY "contracts: admin delete"
  ON storage.objects FOR DELETE
  USING (bucket_id = 'contracts' AND public.is_admin_user());


-- ============================================================
-- VERIFICA POST-MIGRAZIONE
-- ============================================================
-- Esegui dopo lo script:
--
-- SELECT id, public FROM storage.buckets WHERE id IN ('vehicles','contracts','reviews');
-- -- atteso: 3 righe (vehicles=true, contracts=false, reviews=true)
--
-- SELECT policyname, cmd FROM pg_policies
-- WHERE tablename='objects' AND schemaname='storage'
--   AND (policyname LIKE 'vehicles:%' OR policyname LIKE 'contracts:%' OR policyname LIKE 'reviews:%');
-- -- atteso: 12 policy (4 per bucket × 3 bucket)
--
-- Test funzionali:
--  - Admin: prova upload immagine veicolo dall'admin UI. Deve funzionare.
--  - Anonymous fetch: GET /storage/v1/object/public/vehicles/test.jpg deve servire
--    il file (bucket vehicles e' public).
--  - Anonymous fetch su contracts: deve restituire 401/403 (bucket privato).
-- ============================================================
