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
-- ============================================================


-- ============================================================
-- 1) CREAZIONE BUCKET
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
-- 2) RLS GLOBALE su storage.objects
-- (gia' attivo di default su Supabase, ma garantiamo)
-- ============================================================
ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY;


-- ============================================================
-- 3) HELPER: funzione is_admin() (idempotente)
-- ------------------------------------------------------------
-- Centralizza la logica "utente e' admin" usata dalle policy.
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


-- ============================================================
-- 4) BUCKET `vehicles` - public read, admin write
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
-- 5) BUCKET `reviews` - public read, admin write
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
-- 6) BUCKET `contracts` - admin only (private)
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
-- SELECT policyname, cmd FROM pg_policies WHERE tablename='objects' AND schemaname='storage'
-- AND policyname LIKE '%vehicles%' OR policyname LIKE '%contracts%' OR policyname LIKE '%reviews%';
-- -- atteso: 12 policy (4 per bucket × 3 bucket)
--
-- Test: nell'admin, prova upload immagine veicolo. Deve funzionare.
-- Test: da utente NON admin, prova upload via fetch. Deve fallire 403.
-- ============================================================
