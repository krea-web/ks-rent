import fs from "node:fs";
import path from "node:path";

function walk(d, acc = []) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p, acc);
    else if (/\.(tsx|astro)$/.test(e.name)) acc.push(p);
  }
  return acc;
}

function distRoutes() {
  const routes = new Set();
  function w(d) {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, e.name);
      if (e.isDirectory()) w(p);
      else if (e.name === "index.html") {
        let rel = path.relative("dist", p).replace(/\\/g, "/").replace(/index\.html$/, "");
        rel = "/" + rel.replace(/\/$/, "");
        routes.add(rel === "/" ? "/" : rel);
      } else if (e.name.endsWith(".html")) {
        let rel = "/" + path.relative("dist", p).replace(/\\/g, "/").replace(/\.html$/, "");
        routes.add(rel);
      }
    }
  }
  w("dist");
  return routes;
}

const routes = distRoutes();
const srcFiles = walk("src");
const broken = new Map();

const linkRe = /(?:href|to)=["'](\/[^"'{}#?]*)["']/g;
for (const f of srcFiles) {
  const html = fs.readFileSync(f, "utf8");
  let m;
  while ((m = linkRe.exec(html))) {
    let href = m[1].replace(/\/$/, "") || "/";
    if (href.startsWith("/_") || href.startsWith("/api") || href.includes(".")) continue;
    if (!routes.has(href) && !routes.has(href + "/")) {
      if (!broken.has(href)) broken.set(href, new Set());
      broken.get(href).add(f.replace(/\\/g, "/"));
    }
  }
}

console.log("Rotte buildate:", routes.size);
console.log("Link statici interni verso pagine INESISTENTI:", broken.size);
console.log("");
const sorted = [...broken.entries()].sort((a, b) => a[0].localeCompare(b[0]));
for (const [href, fileSet] of sorted) {
  console.log("BROKEN " + href);
  for (const f of fileSet) console.log("     <- " + f);
}
