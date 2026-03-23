import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  keywords?: string;
  jsonLd?: Record<string, any> | Record<string, any>[];
}

const SEOHead = ({
  title,
  description,
  canonical,
  ogImage = "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/asset/og-image.jpg",
  keywords,
  jsonLd,
}: SEOHeadProps) => {
  const canonicalUrl = canonical || (typeof window !== 'undefined' ? window.location.href : 'https://www.ksrentsardinia.com/');

  return (
    <Helmet>
      {/* 1. Meta Tag Principali e Tecnici */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
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
        Array.isArray(jsonLd) ? (
          jsonLd.map((item, i) => (
            <script key={i} type="application/ld+json">
              {JSON.stringify(item)}
            </script>
          ))
        ) : (
          <script type="application/ld+json">
            {JSON.stringify(jsonLd)}
          </script>
        )
      )}
    </Helmet>
  );
};

export default SEOHead;
