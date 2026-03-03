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
}: SEOHeadProps) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={canonical || window.location.href} />

    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={ogImage} />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="it_IT" />
    <meta property="og:site_name" content="KS Rent S.R.L." />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={ogImage} />

    {jsonLd && (
      <script type="application/ld+json">
        {JSON.stringify(Array.isArray(jsonLd) ? jsonLd : jsonLd)}
      </script>
    )}
  </Helmet>
);

export default SEOHead;
