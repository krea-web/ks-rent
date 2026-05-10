#!/usr/bin/env node
/**
 * Esporta tutti i contenuti SEO italiani da Supabase in 3 file JSON,
 * uno per tabella. I file sono il payload che gli agenti di traduzione
 * useranno come fonte unica per generare gli SQL UPDATE multilingua.
 *
 * Output:
 *   sql/exports/seo_locations-it.json
 *   sql/exports/seo_beaches-it.json
 *   sql/exports/seo_vehicles-it.json
 *
 * Uso:
 *   node scripts/export-seo-content.mjs
 *
 * Variabili ambiente richieste (anche nel .env locale):
 *   PUBLIC_SUPABASE_URL
 *   PUBLIC_SUPABASE_ANON_KEY (o SUPABASE_SERVICE_ROLE_KEY per leggere bypass RLS)
 */

import { createClient } from "@supabase/supabase-js";
import { mkdir, writeFile } from "node:fs/promises";
import { dirname } from "node:path";

const SUPABASE_URL = process.env.PUBLIC_SUPABASE_URL;
const SUPABASE_KEY =
  process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.PUBLIC_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error("[export-seo-content] PUBLIC_SUPABASE_URL e una chiave Supabase sono richieste.");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: { persistSession: false },
});

const OUT_DIR = "sql/exports";

const TABLES = [
  {
    name: "seo_locations",
    fields: ["slug", "title", "h1", "meta_description", "content_html"],
  },
  {
    name: "seo_beaches",
    fields: ["slug", "title", "h1", "meta_description", "content_html", "parking_info"],
  },
  {
    name: "seo_vehicles",
    fields: ["group_slug", "title", "h1", "meta_description", "content_html", "faqs"],
  },
];

async function exportTable(table) {
  const { data, error } = await supabase
    .from(table.name)
    .select(table.fields.join(", "))
    .order(table.fields[0]);

  if (error) {
    console.error(`[${table.name}] ${error.message}`);
    return [];
  }
  return data || [];
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  for (const t of TABLES) {
    const rows = await exportTable(t);
    const path = `${OUT_DIR}/${t.name}-it.json`;
    await writeFile(path, JSON.stringify(rows, null, 2), "utf8");
    console.log(`[${t.name}] ${rows.length} record esportati → ${path}`);
  }

  console.log("\nDone. Passa questi file agli agenti di traduzione.");
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
