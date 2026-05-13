#!/usr/bin/env node
/**
 * Reddit Thread Monitor — KS Rent Sardinia
 *
 * Cerca nuovi thread Reddit con keyword target relative a noleggio auto
 * Olbia/Sardegna/Costa Smeralda, e produce un report con i thread da
 * considerare per partecipazione organica.
 *
 * IMPORTANTE: NON pubblica nulla. Solo discovery + alert.
 * La partecipazione deve essere SEMPRE manuale (vedi docs/reddit-playbook.md).
 *
 * Uso:
 *   node scripts/reddit-monitor.mjs                  # report a stdout
 *   node scripts/reddit-monitor.mjs --json           # output JSON
 *   node scripts/reddit-monitor.mjs --markdown       # output Markdown
 *   node scripts/reddit-monitor.mjs --since 7d       # ultimi 7 giorni (default: 24h)
 *   node scripts/reddit-monitor.mjs --webhook URL    # POST risultato a webhook (Discord/Slack)
 *
 * Reddit search API e' pubblica e gratuita (limite 60 req/min, no auth).
 * Endpoint: https://www.reddit.com/search.json?q=QUERY&restrict_sr=on&sort=new&t=week
 */

import fs from "node:fs/promises";
import path from "node:path";

/* ─── Configurazione ricerche ─── */

// Subreddit target (priorità Tier 1 + Tier 2 dal playbook)
const SUBREDDITS = [
  "sardegna",
  "italytravel",
  "Sardinia",
  "italy",
  "europe",
  "solotravel",
  "yachting",
  "germany",
  "france",
];

// Query per subreddit. Ogni query genera una ricerca separata.
// Pattern: parole chiave concrete + business intent.
const QUERIES = [
  // IT
  "noleggio auto Olbia",
  "noleggio auto Sardegna",
  "noleggio auto Costa Smeralda",
  "noleggio auto senza carta credito",
  "rent a car Olbia",
  // EN
  "car rental Olbia",
  "car hire Olbia",
  "car rental Sardinia",
  "car hire Sardinia",
  "rent a car Costa Smeralda",
  "Olbia airport car",
  "Sardinia trip car",
  "Costa Smeralda car",
  "Sardinia without car",
  "Sardinia road trip",
  // DE / FR (per intercettare turisti europei)
  "Autovermietung Olbia",
  "Autovermietung Sardinien",
  "location voiture Olbia",
  "location voiture Sardaigne",
];

// Filtri opzionali per evitare rumore
const EXCLUDE_TITLE_KEYWORDS = [
  // thread di vendita auto (non noleggio)
  "selling my", "for sale", "vendo",
];

/* ─── Argomenti CLI ─── */

const args = process.argv.slice(2);
const arg = (k) => {
  const i = args.indexOf(k);
  return i >= 0 ? args[i + 1] : null;
};
const has = (k) => args.includes(k);

const FORMAT = has("--json") ? "json" : has("--markdown") ? "markdown" : "text";
const WEBHOOK = arg("--webhook");
const SINCE = arg("--since") || "1d"; // 1d | 7d | 30d
const VERBOSE = has("--verbose") || has("-v");

const SINCE_TO_REDDIT_T = {
  "1d": "day",
  "7d": "week",
  "30d": "month",
};
const TIME_FILTER = SINCE_TO_REDDIT_T[SINCE] || "day";

/* ─── Storage stato seen-threads ─── */

const STATE_DIR = path.join(process.cwd(), ".cache");
const STATE_FILE = path.join(STATE_DIR, "reddit-monitor-seen.json");

async function loadSeen() {
  try {
    const txt = await fs.readFile(STATE_FILE, "utf8");
    return new Set(JSON.parse(txt));
  } catch {
    return new Set();
  }
}

async function saveSeen(set) {
  await fs.mkdir(STATE_DIR, { recursive: true });
  await fs.writeFile(STATE_FILE, JSON.stringify([...set], null, 2));
}

/* ─── Reddit search ─── */

const USER_AGENT = "ksrent-monitor/1.0 (no-posting reddit thread alert script)";

async function searchReddit(query, subreddit) {
  // Cerca dentro UN subreddit specifico
  const url = new URL(`https://www.reddit.com/r/${subreddit}/search.json`);
  url.searchParams.set("q", query);
  url.searchParams.set("restrict_sr", "on");
  url.searchParams.set("sort", "new");
  url.searchParams.set("t", TIME_FILTER);
  url.searchParams.set("limit", "25");

  try {
    const res = await fetch(url, {
      headers: { "User-Agent": USER_AGENT },
    });
    if (!res.ok) {
      if (VERBOSE) console.error(`[reddit] ${subreddit} "${query}" → HTTP ${res.status}`);
      return [];
    }
    const data = await res.json();
    return (data?.data?.children || []).map((c) => c.data);
  } catch (err) {
    if (VERBOSE) console.error(`[reddit] error for ${subreddit} "${query}":`, err.message);
    return [];
  }
}

/* ─── Scoring di rilevanza ─── */

const HIGH_INTENT_KEYWORDS = [
  // domande dirette = alto intent
  "where", "best", "recommend", "any good", "looking for", "need", "should i",
  "dove", "qualcuno consiglia", "consigliate", "esperienza",
  "wo", "wer kennt", "empfehlung",
  "où", "quelqu'un", "conseillez",
  // signal di intent commerciale
  "without credit card", "senza carta", "no deposit",
  "olbia airport", "porto cervo", "costa smeralda",
];

const SUPER_HIGH_INTENT = [
  "olbia airport car", "rent in olbia", "noleggio olbia",
  "car for costa smeralda", "without credit card sardinia",
];

function scoreThread(thread) {
  let score = 0;
  const title = (thread.title || "").toLowerCase();
  const body = (thread.selftext || "").toLowerCase();
  const text = `${title} ${body}`;

  // Punteggio base = freshness
  const ageHours = (Date.now() / 1000 - thread.created_utc) / 3600;
  if (ageHours < 24) score += 30;
  else if (ageHours < 72) score += 15;
  else if (ageHours < 168) score += 5;

  // Engagement
  if (thread.num_comments < 5) score += 20; // pochi commenti = chance di essere notati
  if (thread.num_comments > 50) score -= 5; // saturo

  // Question marks nel titolo = intent forte
  if (title.includes("?")) score += 15;

  // High intent keywords
  for (const kw of HIGH_INTENT_KEYWORDS) {
    if (text.includes(kw)) {
      score += 5;
      break;
    }
  }
  for (const kw of SUPER_HIGH_INTENT) {
    if (text.includes(kw)) {
      score += 25;
      break;
    }
  }

  // Score upvote ratio
  if (thread.upvote_ratio >= 0.9) score += 5;

  return Math.max(0, score);
}

function shouldExclude(thread) {
  const title = (thread.title || "").toLowerCase();
  return EXCLUDE_TITLE_KEYWORDS.some((kw) => title.includes(kw));
}

/* ─── Main ─── */

async function main() {
  const seen = await loadSeen();
  const found = new Map(); // id → enriched thread

  // Per ogni combinazione subreddit × query
  for (const sub of SUBREDDITS) {
    for (const q of QUERIES) {
      const results = await searchReddit(q, sub);
      for (const r of results) {
        if (!r?.id || found.has(r.id) || shouldExclude(r)) continue;
        const score = scoreThread(r);
        found.set(r.id, {
          id: r.id,
          subreddit: r.subreddit,
          title: r.title,
          author: r.author,
          url: `https://www.reddit.com${r.permalink}`,
          createdAt: new Date(r.created_utc * 1000).toISOString(),
          ageHours: Math.round((Date.now() / 1000 - r.created_utc) / 3600),
          numComments: r.num_comments,
          upvoteRatio: r.upvote_ratio,
          score,
          isNew: !seen.has(r.id),
          excerpt: (r.selftext || "").slice(0, 220),
          matchedQuery: q,
        });
      }
      // Rate limiting: ~0.5s tra query (sotto i 60/min limit)
      await new Promise((r) => setTimeout(r, 500));
    }
  }

  // Ordina per score desc, poi per freshness
  const sorted = [...found.values()].sort((a, b) => b.score - a.score || a.ageHours - b.ageHours);

  // Filtra: minimo score 20 per essere segnalato
  const relevant = sorted.filter((t) => t.score >= 20);

  // Aggiorna seen
  for (const t of relevant) seen.add(t.id);
  await saveSeen(seen);

  // Output
  if (FORMAT === "json") {
    console.log(JSON.stringify({ generated: new Date().toISOString(), count: relevant.length, threads: relevant }, null, 2));
  } else if (FORMAT === "markdown") {
    console.log(renderMarkdown(relevant));
  } else {
    console.log(renderText(relevant));
  }

  // Webhook (opzionale)
  if (WEBHOOK && relevant.length > 0) {
    const newOnly = relevant.filter((t) => t.isNew);
    if (newOnly.length > 0) {
      try {
        await fetch(WEBHOOK, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            content: renderWebhook(newOnly),
          }),
        });
        if (VERBOSE) console.error(`[webhook] sent ${newOnly.length} new threads`);
      } catch (err) {
        console.error("[webhook] error:", err.message);
      }
    }
  }
}

function renderText(threads) {
  if (threads.length === 0) return "Nessun thread Reddit rilevante trovato nelle ultime " + SINCE + ".";
  let out = `\n=== REDDIT MONITOR — ${threads.length} thread rilevanti (ultime ${SINCE}) ===\n\n`;
  for (const t of threads.slice(0, 30)) {
    const tag = t.isNew ? "🆕" : "  ";
    out += `${tag} [${t.score}] r/${t.subreddit} — ${t.title}\n`;
    out += `   ${t.url}\n`;
    out += `   ${t.ageHours}h fa, ${t.numComments} commenti, query: "${t.matchedQuery}"\n`;
    if (t.excerpt) out += `   "${t.excerpt.replace(/\n/g, " ")}..."\n`;
    out += "\n";
  }
  return out;
}

function renderMarkdown(threads) {
  if (threads.length === 0) return `# Reddit Monitor\n\nNessun thread rilevante trovato (${SINCE}).\n`;
  let out = `# Reddit Monitor — ${new Date().toISOString().split("T")[0]}\n\n`;
  out += `Trovati **${threads.length}** thread rilevanti (ultime ${SINCE}). 🆕 = mai visti prima.\n\n`;
  out += `| | Score | Subreddit | Titolo | Età | Commenti |\n`;
  out += `|---|---|---|---|---|---|\n`;
  for (const t of threads.slice(0, 30)) {
    const tag = t.isNew ? "🆕" : "";
    out += `| ${tag} | ${t.score} | r/${t.subreddit} | [${t.title.replace(/\|/g, "\\|")}](${t.url}) | ${t.ageHours}h | ${t.numComments} |\n`;
  }
  out += `\n---\n\n## Consigliato approccio\n\nLeggi [docs/reddit-playbook.md](./reddit-playbook.md) prima di intervenire. Mai auto-post.\n`;
  return out;
}

function renderWebhook(threads) {
  // Formato Discord-friendly (anche Slack lo accetta)
  let msg = `**🔍 Reddit Monitor — ${threads.length} nuovi thread rilevanti**\n\n`;
  for (const t of threads.slice(0, 5)) {
    msg += `**[${t.score}]** r/${t.subreddit} — *${t.ageHours}h fa, ${t.numComments} commenti*\n`;
    msg += `${t.title}\n`;
    msg += `<${t.url}>\n\n`;
  }
  if (threads.length > 5) {
    msg += `_+${threads.length - 5} altri. Esegui \`npm run reddit-monitor\` per la lista completa._`;
  }
  return msg;
}

main().catch((err) => {
  console.error("[reddit-monitor] FATAL:", err);
  process.exit(1);
});
