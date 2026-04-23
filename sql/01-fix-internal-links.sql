-- ============================================================
-- 01 - FIX LINK INTERNI: rimuovi prefissi /localita/ e /spiagge/
-- I redirect 301 funzionano ma Google preferisce link diretti.
-- Eseguire PRIMA degli altri update.
-- ============================================================

-- seo_locations: fix /localita/ e /spiagge/ nei content_html
UPDATE public.seo_locations
SET content_html = REPLACE(content_html, 'href="/localita/', 'href="/')
WHERE content_html LIKE '%href="/localita/%';

UPDATE public.seo_locations
SET content_html = REPLACE(content_html, 'href="/spiagge/', 'href="/')
WHERE content_html LIKE '%href="/spiagge/%';

-- seo_beaches: fix /localita/ e /spiagge/ nei content_html
UPDATE public.seo_beaches
SET content_html = REPLACE(content_html, 'href="/localita/', 'href="/')
WHERE content_html LIKE '%href="/localita/%';

UPDATE public.seo_beaches
SET content_html = REPLACE(content_html, 'href="/spiagge/', 'href="/')
WHERE content_html LIKE '%href="/spiagge/%';
