// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const SITE_URL = "https://www.ksrentsardinia.com";

export default defineConfig({
  site: SITE_URL,
  output: "static",
  trailingSlash: "never",
  i18n: {
    defaultLocale: "it",
    locales: ["it", "en", "de", "fr"],
    routing: {
      prefixDefaultLocale: false, // IT senza prefisso
      redirectToDefaultLocale: false,
    },
  },
  build: {
    inlineStylesheets: "auto",
  },
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
      configFile: "./tailwind.config.ts",
    }),
    sitemap({
      // NB: NESSUN blocco i18n qui. @astrojs/sitemap con i18n genera gli
      // alternate hreflang per sostituzione MECCANICA del prefisso lingua
      // (es. /noleggio-auto-X → /de/noleggio-auto-X), ignorando gli slug
      // localizzati reali (/de/autovermietung-X) e le pagine non tradotte.
      // Risultato: centinaia di alternate verso 404. Gli hreflang CORRETTI
      // sono già emessi in <head> da BaseLayout via getAlternateLinks(),
      // che conosce gli slug veri e le traduzioni effettivamente pubblicate.
      // La sitemap elenca quindi solo i <loc> reali delle pagine buildate.
      filter: (page) =>
        !page.includes("/admin") &&
        !page.includes("/login") &&
        !/\/(en|de|fr)\/404\/?$/.test(page) &&
        !/\/404\/?$/.test(page),
      serialize: (item) => {
        const url = item.url.replace(/\/$/, "") || `${SITE_URL}/`;
        let priority = 0.7;
        let changefreq = "monthly";
        if (url === SITE_URL || url === `${SITE_URL}/`) {
          priority = 1.0;
          changefreq = "weekly";
        } else if (
          url.endsWith("/prenotaora") ||
          url.endsWith("/flotta") ||
          url.endsWith("/tariffe") ||
          url.endsWith("/chisiamo") ||
          url.endsWith("/noleggio-auto-olbia") ||
          url.includes("/noleggio-auto-aeroporto-olbia") ||
          url.includes("/noleggio-auto-porto-olbia") ||
          url.includes("/noleggio-auto-costa-smeralda") ||
          url.includes("/noleggio-auto-senza-carta-di-credito-olbia")
        ) {
          priority = 0.9;
          changefreq = url.endsWith("/prenotaora") || url.endsWith("/flotta") || url.endsWith("/tariffe") ? "weekly" : "monthly";
        } else if (url.includes("/noleggio-auto-")) {
          priority = 0.8;
        } else if (url.includes("/flotta/confronta")) {
          priority = 0.75;
          changefreq = "monthly";
        } else if (url.includes("/flotta/")) {
          priority = 0.85;
          changefreq = "monthly";
        } else if (url.includes("/guide")) {
          priority = 0.7;
          changefreq = "monthly";
        }
        return {
          ...item,
          url,
          changefreq,
          priority,
          lastmod: new Date().toISOString().split("T")[0],
        };
      },
    }),
    compress({
      HTML: true,
      CSS: true,
      JavaScript: true,
      SVG: true,
      Image: false,
    }),
  ],
  vite: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        // Shim framer-motion: drop-in replacement che renderizza
        // <motion.X> come <X> puri, eliminando ~100 KB di JS animation
        // dal bundle. Vedi src/lib/framer-motion-shim.tsx.
        "framer-motion": path.resolve(__dirname, "./src/lib/framer-motion-shim.tsx"),
      },
    },
    ssr: {
      noExternal: ["isomorphic-dompurify"],
    },
  },
});
