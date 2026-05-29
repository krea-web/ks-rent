import { supabase } from "@/lib/supabase";

const SLUG_RE = /[^a-z0-9]+/g;

function slugifyFilename(name: string): string {
  const dot = name.lastIndexOf(".");
  const base = (dot > 0 ? name.slice(0, dot) : name).toLowerCase().replace(SLUG_RE, "-").replace(/^-|-$/g, "");
  const ext = dot > 0 ? name.slice(dot + 1).toLowerCase() : "bin";
  return `${base || "file"}-${Date.now()}.${ext}`;
}

export type Bucket = "vehicles" | "contracts" | "reviews";

// Bucket privati: salviamo il path puro nel DB; per download/visualizzazione
// generiamo signed URL temporanei via getSignedUrlForPrivateBucket().
const PRIVATE_BUCKETS: ReadonlySet<Bucket> = new Set<Bucket>(["contracts"]);

const PUBLIC_MARKERS: ReadonlyArray<string> = [
  "/storage/v1/object/public/",
  "/storage/v1/object/sign/",
];

/**
 * Carica un file. Per bucket pubblici ritorna il publicUrl. Per bucket
 * privati ritorna SOLO il path (es. "<booking-id>/contract-123.pdf").
 * Salvare il path nel DB e generare signed URL on-demand quando si vuole
 * aprire/scaricare il file.
 */
export async function uploadToBucket(bucket: Bucket, file: File, prefix = ""): Promise<string> {
  const path = `${prefix ? prefix.replace(/\/+$/, "") + "/" : ""}${slugifyFilename(file.name)}`;
  const { error } = await supabase.storage.from(bucket).upload(path, file, {
    cacheControl: "31536000",
    upsert: false,
    contentType: file.type || undefined,
  });
  if (error) throw error;

  if (PRIVATE_BUCKETS.has(bucket)) return path;

  const { data } = supabase.storage.from(bucket).getPublicUrl(path);
  return data.publicUrl;
}

/**
 * Estrae il path dello storage da un valore salvato che può essere:
 *  - un URL pubblico legacy `https://.../storage/v1/object/public/<bucket>/<path>`
 *  - un URL signed `https://.../storage/v1/object/sign/<bucket>/<path>?token=...`
 *  - già un path puro (nuovo formato)
 */
function extractStoragePath(bucket: Bucket, stored: string): string {
  for (const marker of PUBLIC_MARKERS) {
    const full = `${marker}${bucket}/`;
    const idx = stored.indexOf(full);
    if (idx !== -1) return stored.slice(idx + full.length).split("?")[0];
  }
  return stored;
}

/**
 * Genera un signed URL temporaneo (default 1h) per scaricare/aprire un file
 * da un bucket privato. Accetta sia path puri (nuovo formato) sia URL pubblici
 * legacy salvati nel DB.
 */
export async function getSignedUrlForPrivateBucket(
  bucket: Bucket,
  stored: string,
  expiresInSec = 3600,
): Promise<string | null> {
  const path = extractStoragePath(bucket, stored);
  const { data, error } = await supabase.storage.from(bucket).createSignedUrl(path, expiresInSec);
  if (error || !data) return null;
  return data.signedUrl;
}

export async function deleteFromBucketByUrl(bucket: Bucket, stored: string): Promise<void> {
  const path = extractStoragePath(bucket, stored);
  if (!path) return;
  await supabase.storage.from(bucket).remove([path]);
}
