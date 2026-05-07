#!/usr/bin/env node
/**
 * IndexNow ping per ksrentsardinia.com
 *
 * Notifica Bing/Yandex (e i motori IndexNow-compatibili) che le URL
 * pubblicate sono state aggiornate. Da eseguire dopo ogni deploy
 * con modifiche SEO (es. da Supabase webhook → Vercel rebuild → questo script).
 *
 * Usage:
 *   node scripts/indexnow-ping.mjs                 # ping di tutte le URL del sitemap
 *   node scripts/indexnow-ping.mjs <url> [<url>]   # ping di URL specifiche
 *
 * Env vars opzionali:
 *   INDEXNOW_KEY  — override della chiave (default: 3d54f7d4a9984f0fbc03ae52be22516c)
 *   SITE_URL      — override del dominio (default: https://www.ksrentsardinia.com)
 */

import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const SITE_URL = (process.env.SITE_URL || "https://www.ksrentsardinia.com").replace(/\/$/, "");
const HOST = new URL(SITE_URL).host;
const INDEXNOW_KEY = process.env.INDEXNOW_KEY || "3d54f7d4a9984f0fbc03ae52be22516c";
const KEY_LOCATION = `${SITE_URL}/${INDEXNOW_KEY}.txt`;

function fail(msg, code = 1) {
  console.error(`❌ ${msg}`);
  process.exit(code);
}

async function readSitemapUrls() {
  const sitemapPath = resolve("dist", "sitemap-0.xml");
  let xml;
  try {
    xml = readFileSync(sitemapPath, "utf-8");
  } catch (e) {
    fail(`sitemap non trovata in ${sitemapPath}. Esegui prima 'astro build'.`);
  }
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  if (urls.length === 0) {
    fail("Nessuna URL trovata nel sitemap.");
  }
  return urls;
}

async function pingIndexNow(urlList) {
  const body = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  };

  console.log(`🔔 IndexNow ping a https://api.indexnow.org per ${urlList.length} URL`);
  console.log(`   host: ${HOST}`);
  console.log(`   key:  ${INDEXNOW_KEY}`);

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });

  const text = await res.text().catch(() => "");
  if (res.status === 200 || res.status === 202) {
    console.log(`✅ IndexNow ${res.status}: notifica accettata.`);
  } else {
    fail(`IndexNow ${res.status}: ${text || res.statusText}`);
  }
}

async function main() {
  const argUrls = process.argv.slice(2).filter(Boolean);
  const urls = argUrls.length > 0 ? argUrls : await readSitemapUrls();
  await pingIndexNow(urls);
}

main().catch((e) => fail(e?.message ?? String(e)));
