-- ============================================================
-- 08 - FASE 0: Schema per redesign admin + foundation i18n + reviews
-- ============================================================
-- Esegui questo script su Supabase SQL Editor. E' idempotente:
-- usa IF NOT EXISTS / IF NOT EXISTS COLUMN ovunque possibile.
-- Riferimento piano: ~/.claude/plans/basandomi-su-tutto-quello-starry-hearth.md
-- ============================================================


-- ============================================================
-- 1) TABELLA `reviews`
-- ------------------------------------------------------------
-- Recensioni Google (sync via Places API al build) + manuali.
-- Sostituisce GoogleReviews.tsx hardcoded.
-- ============================================================

CREATE TABLE IF NOT EXISTS public.reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  source text NOT NULL CHECK (source IN ('google', 'manual')),
  google_review_id text UNIQUE,
  author_name text NOT NULL,
  author_photo_url text,
  rating int NOT NULL CHECK (rating BETWEEN 1 AND 5),
  text text NOT NULL,
  text_en text,
  text_de text,
  text_fr text,
  language text DEFAULT 'it',
  published_at timestamptz NOT NULL,
  is_published boolean DEFAULT true,
  is_featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_reviews_published_featured
  ON public.reviews (is_published, is_featured, published_at DESC);

CREATE INDEX IF NOT EXISTS idx_reviews_source
  ON public.reviews (source);

ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public read published reviews" ON public.reviews;
CREATE POLICY "Public read published reviews"
  ON public.reviews FOR SELECT
  USING (is_published = true);

DROP POLICY IF EXISTS "Admin full access reviews" ON public.reviews;
CREATE POLICY "Admin full access reviews"
  ON public.reviews FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE profiles.id = auth.uid() AND profiles.is_admin = true
    )
  );


-- ============================================================
-- 2) ESTENSIONE `vehicles` per grouping + galleria
-- ------------------------------------------------------------
-- group_slug: una pagina per gruppo (es. 'audi-rs3' raggruppa
--             grigia + verde, 'honda-sh' raggruppa 125 + 350).
-- is_primary_variant: il veicolo principale del gruppo (immagine hero).
-- gallery_urls: array immagini varianti colore.
-- transparent_image_url: PNG trasparente per hero pagine veicolo.
-- ============================================================

ALTER TABLE public.vehicles
  ADD COLUMN IF NOT EXISTS group_slug text,
  ADD COLUMN IF NOT EXISTS is_primary_variant boolean DEFAULT false,
  ADD COLUMN IF NOT EXISTS gallery_urls jsonb DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS transparent_image_url text,
  ADD COLUMN IF NOT EXISTS is_archived boolean DEFAULT false;

CREATE INDEX IF NOT EXISTS idx_vehicles_group_slug
  ON public.vehicles (group_slug)
  WHERE group_slug IS NOT NULL;

CREATE INDEX IF NOT EXISTS idx_vehicles_archived
  ON public.vehicles (is_archived);


-- ============================================================
-- 3) TABELLA `seo_vehicles`
-- ------------------------------------------------------------
-- SEO per pagina /flotta/[group_slug]. Separato da vehicles
-- perche' una pagina aggrega N veicoli (varianti).
-- Multilingua nativo: campi *_en, *_de, *_fr.
-- ============================================================

CREATE TABLE IF NOT EXISTS public.seo_vehicles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  group_slug text UNIQUE NOT NULL,

  -- IT (default)
  title text,
  h1 text,
  meta_description text,
  content_html text,

  -- EN
  title_en text,
  h1_en text,
  meta_description_en text,
  content_html_en text,
  slug_en text UNIQUE,

  -- DE
  title_de text,
  h1_de text,
  meta_description_de text,
  content_html_de text,
  slug_de text UNIQUE,

  -- FR
  title_fr text,
  h1_fr text,
  meta_description_fr text,
  content_html_fr text,
  slug_fr text UNIQUE,

  -- Asset
  hero_image_url text,
  og_image_url text,
  canonical_url text,

  -- FAQ multilingua: array di {q_it, a_it, q_en, a_en, q_de, a_de, q_fr, a_fr}
  faqs jsonb DEFAULT '[]'::jsonb,

  -- Linking interno: localita/spiagge dove questo veicolo e' ideale
  recommended_locations text[] DEFAULT '{}',

  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE public.seo_vehicles ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public read seo_vehicles" ON public.seo_vehicles;
CREATE POLICY "Public read seo_vehicles"
  ON public.seo_vehicles FOR SELECT
  USING (true);

DROP POLICY IF EXISTS "Admin full access seo_vehicles" ON public.seo_vehicles;
CREATE POLICY "Admin full access seo_vehicles"
  ON public.seo_vehicles FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE profiles.id = auth.uid() AND profiles.is_admin = true
    )
  );


-- ============================================================
-- 4) ESTENSIONE `seo_locations` per 3 lingue extra
-- ------------------------------------------------------------
-- IT resta sui campi originali. EN/DE/FR aggiunti per Fase 4.
-- slug_xx UNIQUE ma nullable (pagina pubblicata in EN solo se slug_en NOT NULL).
-- ============================================================

ALTER TABLE public.seo_locations
  ADD COLUMN IF NOT EXISTS slug_en text UNIQUE,
  ADD COLUMN IF NOT EXISTS title_en text,
  ADD COLUMN IF NOT EXISTS h1_en text,
  ADD COLUMN IF NOT EXISTS meta_description_en text,
  ADD COLUMN IF NOT EXISTS content_html_en text,
  ADD COLUMN IF NOT EXISTS slug_de text UNIQUE,
  ADD COLUMN IF NOT EXISTS title_de text,
  ADD COLUMN IF NOT EXISTS h1_de text,
  ADD COLUMN IF NOT EXISTS meta_description_de text,
  ADD COLUMN IF NOT EXISTS content_html_de text,
  ADD COLUMN IF NOT EXISTS slug_fr text UNIQUE,
  ADD COLUMN IF NOT EXISTS title_fr text,
  ADD COLUMN IF NOT EXISTS h1_fr text,
  ADD COLUMN IF NOT EXISTS meta_description_fr text,
  ADD COLUMN IF NOT EXISTS content_html_fr text;


-- ============================================================
-- 5) ESTENSIONE `seo_beaches` per 3 lingue extra
-- ============================================================

ALTER TABLE public.seo_beaches
  ADD COLUMN IF NOT EXISTS slug_en text UNIQUE,
  ADD COLUMN IF NOT EXISTS title_en text,
  ADD COLUMN IF NOT EXISTS h1_en text,
  ADD COLUMN IF NOT EXISTS meta_description_en text,
  ADD COLUMN IF NOT EXISTS content_html_en text,
  ADD COLUMN IF NOT EXISTS slug_de text UNIQUE,
  ADD COLUMN IF NOT EXISTS title_de text,
  ADD COLUMN IF NOT EXISTS h1_de text,
  ADD COLUMN IF NOT EXISTS meta_description_de text,
  ADD COLUMN IF NOT EXISTS content_html_de text,
  ADD COLUMN IF NOT EXISTS slug_fr text UNIQUE,
  ADD COLUMN IF NOT EXISTS title_fr text,
  ADD COLUMN IF NOT EXISTS h1_fr text,
  ADD COLUMN IF NOT EXISTS meta_description_fr text,
  ADD COLUMN IF NOT EXISTS content_html_fr text;


-- ============================================================
-- 6) TABELLA `admin_audit_log`
-- ------------------------------------------------------------
-- Tracciamento azioni admin (chi, quando, cosa). Utile per
-- debugging e accountability.
-- ============================================================

CREATE TABLE IF NOT EXISTS public.admin_audit_log (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  user_email text,
  action text NOT NULL CHECK (action IN ('create', 'update', 'delete', 'upload', 'sync')),
  table_name text NOT NULL,
  record_id text,
  diff jsonb,
  created_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_audit_log_user
  ON public.admin_audit_log (user_id, created_at DESC);

CREATE INDEX IF NOT EXISTS idx_audit_log_table
  ON public.admin_audit_log (table_name, created_at DESC);

ALTER TABLE public.admin_audit_log ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Admin read audit_log" ON public.admin_audit_log;
CREATE POLICY "Admin read audit_log"
  ON public.admin_audit_log FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE profiles.id = auth.uid() AND profiles.is_admin = true
    )
  );

DROP POLICY IF EXISTS "Admin insert audit_log" ON public.admin_audit_log;
CREATE POLICY "Admin insert audit_log"
  ON public.admin_audit_log FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE profiles.id = auth.uid() AND profiles.is_admin = true
    )
  );


-- ============================================================
-- 7) TABELLA `vehicle_maintenance_log`
-- ------------------------------------------------------------
-- Storico KM e revisioni per veicolo. Oggi vehicles ha solo
-- km_current + next_revision_date senza storia.
-- ============================================================

CREATE TABLE IF NOT EXISTS public.vehicle_maintenance_log (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  vehicle_id uuid NOT NULL REFERENCES public.vehicles(id) ON DELETE CASCADE,
  km int NOT NULL,
  revision_date date,
  notes text,
  created_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_maintenance_vehicle
  ON public.vehicle_maintenance_log (vehicle_id, created_at DESC);

ALTER TABLE public.vehicle_maintenance_log ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Admin full access maintenance_log" ON public.vehicle_maintenance_log;
CREATE POLICY "Admin full access maintenance_log"
  ON public.vehicle_maintenance_log FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE profiles.id = auth.uid() AND profiles.is_admin = true
    )
  );


-- ============================================================
-- 8) TRIGGER updated_at automatico
-- ============================================================

CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS trigger AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_reviews_updated_at ON public.reviews;
CREATE TRIGGER trg_reviews_updated_at
  BEFORE UPDATE ON public.reviews
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

DROP TRIGGER IF EXISTS trg_seo_vehicles_updated_at ON public.seo_vehicles;
CREATE TRIGGER trg_seo_vehicles_updated_at
  BEFORE UPDATE ON public.seo_vehicles
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();


-- ============================================================
-- 9) BUCKETS STORAGE (creare manualmente da Supabase UI)
-- ------------------------------------------------------------
-- I bucket vanno creati dalla UI Supabase Storage:
--   1. `vehicles` (public) — immagini veicoli e gallerie
--   2. `contracts` (private) — PDF contratti firmati
--   3. `reviews` (public) — foto autori recensioni (cache da Google)
--
-- Policy `vehicles` (public): SELECT public, INSERT/UPDATE/DELETE solo admin
-- Policy `contracts` (private): solo admin
-- Policy `reviews` (public): SELECT public, INSERT/UPDATE/DELETE solo admin
-- ============================================================


-- ============================================================
-- VERIFICA POST-MIGRAZIONE
-- ============================================================
-- Esegui dopo lo script:
--
-- SELECT table_name FROM information_schema.tables
-- WHERE table_schema = 'public'
-- AND table_name IN ('reviews', 'seo_vehicles', 'admin_audit_log', 'vehicle_maintenance_log');
-- -- atteso: 4 righe
--
-- SELECT column_name FROM information_schema.columns
-- WHERE table_name = 'vehicles'
-- AND column_name IN ('group_slug', 'is_primary_variant', 'gallery_urls', 'transparent_image_url', 'is_archived');
-- -- atteso: 5 righe
--
-- SELECT column_name FROM information_schema.columns
-- WHERE table_name = 'seo_locations' AND column_name LIKE '%_en';
-- -- atteso: 5 righe (slug_en, title_en, h1_en, meta_description_en, content_html_en)
-- ============================================================
