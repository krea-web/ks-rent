/**
 * No-op SEOHead per compatibilità con i view legacy (Index.tsx, Flotta.tsx,
 * ecc.) che lo importano. Su Astro i meta tag vengono iniettati dal
 * frontmatter della pagina .astro tramite BaseLayout: questo componente
 * resta come stub per non dover toccare i view originali.
 */
interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  jsonLd?: Record<string, any> | Record<string, any>[];
  noIndex?: boolean;
}

export default function SEOHead(_props: SEOHeadProps) {
  return null;
}
