import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  jsonLd?: Record<string, any> | Record<string, any>[];
}

const SEOHead = ({
  title,
  description,
  canonical,
  ogImage = "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/asset/og-image.jpg",
  jsonLd,
}: SEOHeadProps) => {
  // Always force https://www. to avoid canonical issues with http:// or non-www variants
  let canonicalUrl = canonical || (typeof window !== 'undefined' ? `https://www.ksrentsardinia.com${window.location.pathname}` : 'https://www.ksrentsardinia.com/');
  // Normalize: ensure canonical always starts with https://www.ksrentsardinia.com
  if (canonicalUrl && !canonicalUrl.startsWith('https://www.ksrentsardinia.com')) {
    try {
      const parsed = new URL(canonicalUrl);
      canonicalUrl = `https://www.ksrentsardinia.com${parsed.pathname}`;
    } catch {
      // fallback: keep as-is
    }
  }
  // Remove trailing slash except for homepage
  if (canonicalUrl.endsWith('/') && canonicalUrl !== 'https://www.ksrentsardinia.com/') {
    canonicalUrl = canonicalUrl.slice(0, -1);
  }

  return (
    <Helmet>
      {/* 1. Meta Tag Principali e Tecnici */}
      <title>{title}</title>
      <meta name="description" content={description} />
      
      <meta name="author" content="KS Rent S.R.L." />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

      {/* Formattazione e Device */}
      <meta name="format-detection" content="telephone=yes, date=no, email=no, address=no" />

      {/* 2. Tag Tecnici: Canonical, Hreflang e Alternate */}
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hrefLang="it-IT" href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

      {/* 3. Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="it_IT" />
      <meta property="og:site_name" content="KS Rent Sardinia" />

      {/* 4. Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ksrent_srl" />
      <meta name="twitter:creator" content="@ksrent_srl" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(
            Array.isArray(jsonLd)
              ? {
                  "@context": "https://schema.org",
                  "@graph": jsonLd.flatMap((item) => {
                    const { "@context": _, ...rest } = item;
                    // Flatten nested @graph arrays into the top-level graph
                    if (rest["@graph"] && Array.isArray(rest["@graph"])) {
                      return rest["@graph"];
                    }
                    return [rest];
                  }),
                }
              : jsonLd
          )}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
