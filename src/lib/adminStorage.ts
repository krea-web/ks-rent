import { supabase } from "@/lib/supabase";

const SLUG_RE = /[^a-z0-9]+/g;

function slugifyFilename(name: string): string {
  const dot = name.lastIndexOf(".");
  const base = (dot > 0 ? name.slice(0, dot) : name).toLowerCase().replace(SLUG_RE, "-").replace(/^-|-$/g, "");
  const ext = dot > 0 ? name.slice(dot + 1).toLowerCase() : "bin";
  return `${base || "file"}-${Date.now()}.${ext}`;
}

export type Bucket = "vehicles" | "contracts" | "reviews";

export async function uploadToBucket(bucket: Bucket, file: File, prefix = ""): Promise<string> {
  const path = `${prefix ? prefix.replace(/\/+$/, "") + "/" : ""}${slugifyFilename(file.name)}`;
  const { error } = await supabase.storage.from(bucket).upload(path, file, {
    cacheControl: "31536000",
    upsert: false,
    contentType: file.type || undefined,
  });
  if (error) throw error;

  const { data } = supabase.storage.from(bucket).getPublicUrl(path);
  return data.publicUrl;
}

export async function deleteFromBucketByUrl(bucket: Bucket, publicUrl: string): Promise<void> {
  const marker = `/storage/v1/object/public/${bucket}/`;
  const idx = publicUrl.indexOf(marker);
  if (idx === -1) return;
  const path = publicUrl.slice(idx + marker.length);
  await supabase.storage.from(bucket).remove([path]);
}
