import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { logAdminAction } from "@/lib/audit";
import { Loader2, Search, Globe, Save, RefreshCw, Languages } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type SeoTable = "seo_locations" | "seo_beaches" | "seo_vehicles";
type Lang = "it" | "en" | "de" | "fr";

const TABLES: { value: SeoTable; label: string; idField: string }[] = [
  { value: "seo_locations", label: "Localita", idField: "slug" },
  { value: "seo_beaches", label: "Spiagge", idField: "slug" },
  { value: "seo_vehicles", label: "Veicoli", idField: "group_slug" },
];

const LANGS: { code: Lang; label: string; flag: string }[] = [
  { code: "it", label: "Italiano", flag: "🇮🇹" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "fr", label: "Francais", flag: "🇫🇷" },
];

function fieldFor(base: string, lang: Lang): string {
  return lang === "it" ? base : `${base}_${lang}`;
}

const SEOEditorSection = () => {
  const [table, setTable] = useState<SeoTable>("seo_locations");
  const [lang, setLang] = useState<Lang>("it");
  const [records, setRecords] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [draft, setDraft] = useState<Record<string, any>>({});
  const [dirty, setDirty] = useState(false);

  const tableConfig = TABLES.find((t) => t.value === table)!;

  const fetchRecords = async () => {
    setLoading(true);
    const { data, error } = await supabase.from(table).select("*").order(tableConfig.idField);
    if (error) toast.error("Errore caricamento: " + error.message);
    else setRecords(data || []);
    setLoading(false);
  };

  useEffect(() => {
    setSelectedId(null);
    setDraft({});
    setDirty(false);
    fetchRecords();
  }, [table]);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    if (!q) return records;
    return records.filter((r) =>
      [r[tableConfig.idField], r.title, r.h1].filter(Boolean).some((v) => String(v).toLowerCase().includes(q)),
    );
  }, [records, search, tableConfig.idField]);

  const selected = records.find((r) => r.id === selectedId) || null;

  useEffect(() => {
    if (selected) {
      setDraft({ ...selected });
      setDirty(false);
    } else {
      setDraft({});
    }
  }, [selectedId]);

  const updateField = (key: string, value: string) => {
    setDraft((d) => ({ ...d, [key]: value }));
    setDirty(true);
  };

  const handleSave = async () => {
    if (!selected) return;
    setSaving(true);
    const titleField = fieldFor("title", lang);
    const h1Field = fieldFor("h1", lang);
    const metaField = fieldFor("meta_description", lang);
    const contentField = fieldFor("content_html", lang);
    const slugField = lang === "it" ? null : `slug_${lang}`;

    const payload: any = {
      [titleField]: draft[titleField] || null,
      [h1Field]: draft[h1Field] || null,
      [metaField]: draft[metaField] || null,
      [contentField]: draft[contentField] || null,
    };
    if (slugField) payload[slugField] = draft[slugField] || null;

    // Campi extra solo per IT (slug primary) o sempre (asset)
    if (lang === "it") {
      if (draft[tableConfig.idField] !== undefined) payload[tableConfig.idField] = draft[tableConfig.idField];
    }
    if (draft.hero_image_url !== undefined) payload.hero_image_url = draft.hero_image_url || null;
    if (draft.og_image_url !== undefined) payload.og_image_url = draft.og_image_url || null;
    if (draft.canonical_url !== undefined) payload.canonical_url = draft.canonical_url || null;

    const { error } = await supabase.from(table).update(payload).eq("id", selected.id);
    setSaving(false);
    if (error) return toast.error("Errore: " + error.message);
    await logAdminAction({ action: "update", table, recordId: selected.id, diff: payload });
    toast.success(`Salvato ${LANGS.find((l) => l.code === lang)?.label}`);
    setDirty(false);
    fetchRecords();
  };

  const copyFromItalian = () => {
    if (!selected || lang === "it") return;
    setDraft((d) => ({
      ...d,
      [fieldFor("title", lang)]: selected.title || "",
      [fieldFor("h1", lang)]: selected.h1 || "",
      [fieldFor("meta_description", lang)]: selected.meta_description || "",
      [fieldFor("content_html", lang)]: selected.content_html || "",
    }));
    setDirty(true);
    toast.info("Contenuto IT copiato come bozza " + lang.toUpperCase());
  };

  const titleField = fieldFor("title", lang);
  const h1Field = fieldFor("h1", lang);
  const metaField = fieldFor("meta_description", lang);
  const contentField = fieldFor("content_html", lang);
  const slugField = lang === "it" ? tableConfig.idField : `slug_${lang}`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6 h-[calc(100vh-200px)]">
      {/* Sidebar lista */}
      <aside className="bg-[#0a0a0a] border border-white/10 rounded-xl flex flex-col overflow-hidden">
        <div className="p-3 border-b border-white/10 space-y-3">
          <div className="flex gap-1 bg-white/5 rounded-lg p-1">
            {TABLES.map((t) => (
              <button
                key={t.value}
                onClick={() => setTable(t.value)}
                className={cn(
                  "flex-1 px-2 py-1.5 text-xs font-bold uppercase tracking-wider rounded-md transition",
                  table === t.value ? "bg-[#C8A135] text-black" : "text-white/60 hover:text-white",
                )}
              >
                {t.label}
              </button>
            ))}
          </div>
          <div className="relative">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cerca slug o titolo..."
              className="bg-white/5 border-white/10 text-white pl-9 text-sm"
            />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto p-2 custom-scrollbar">
          {loading ? (
            <div className="flex justify-center py-8">
              <Loader2 className="animate-spin text-[#C8A135]" />
            </div>
          ) : filtered.length === 0 ? (
            <p className="text-center text-white/40 text-sm py-8">Nessun record</p>
          ) : (
            filtered.map((r) => {
              const hasEn = !!r.title_en;
              const hasDe = !!r.title_de;
              const hasFr = !!r.title_fr;
              return (
                <button
                  key={r.id}
                  onClick={() => setSelectedId(r.id)}
                  className={cn(
                    "w-full text-left px-3 py-2 rounded-lg transition mb-1 group",
                    selectedId === r.id ? "bg-[#C8A135]/15 border border-[#C8A135]/30" : "hover:bg-white/5",
                  )}
                >
                  <p className="text-sm font-bold text-white truncate">{r[tableConfig.idField]}</p>
                  <p className="text-xs text-white/40 truncate">{r.title || "(senza titolo)"}</p>
                  <div className="flex gap-1 mt-1 text-[9px]">
                    <LangBadge label="IT" filled />
                    <LangBadge label="EN" filled={hasEn} />
                    <LangBadge label="DE" filled={hasDe} />
                    <LangBadge label="FR" filled={hasFr} />
                  </div>
                </button>
              );
            })
          )}
        </div>
        <div className="p-2 border-t border-white/10">
          <button
            onClick={fetchRecords}
            className="w-full flex items-center justify-center gap-2 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-xs uppercase tracking-wider"
          >
            <RefreshCw size={12} /> Ricarica
          </button>
        </div>
      </aside>

      {/* Editor */}
      <main className="bg-[#0a0a0a] border border-white/10 rounded-xl flex flex-col overflow-hidden">
        {!selected ? (
          <div className="flex-1 flex items-center justify-center text-white/40 p-8 text-center">
            <div>
              <Globe size={48} className="mx-auto mb-3 text-white/20" />
              <p>Seleziona un record dalla lista per modificarlo.</p>
            </div>
          </div>
        ) : (
          <>
            {/* Tabs lingua */}
            <div className="border-b border-white/10 bg-[#050505]">
              <div className="flex overflow-x-auto">
                {LANGS.map((l) => {
                  const hasContent = !!selected[fieldFor("title", l.code)];
                  return (
                    <button
                      key={l.code}
                      onClick={() => setLang(l.code)}
                      className={cn(
                        "px-4 py-3 text-sm font-bold uppercase tracking-wider border-b-2 transition flex items-center gap-2 whitespace-nowrap",
                        lang === l.code
                          ? "border-[#C8A135] text-[#C8A135] bg-[#C8A135]/5"
                          : "border-transparent text-white/40 hover:text-white",
                      )}
                    >
                      <span>{l.flag}</span>
                      <span>{l.label}</span>
                      {hasContent && <span className="w-1.5 h-1.5 rounded-full bg-green-500" />}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar">
              <div className="flex items-center justify-between">
                <p className="text-xs text-white/40 uppercase tracking-wider">
                  ID: <span className="text-white/70">{selected[tableConfig.idField]}</span>
                </p>
                {lang !== "it" && (
                  <button
                    onClick={copyFromItalian}
                    className="flex items-center gap-2 px-3 py-1.5 text-xs font-bold uppercase tracking-wider border border-white/10 rounded-lg hover:border-[#C8A135] hover:text-[#C8A135]"
                  >
                    <Languages size={12} /> Copia da IT
                  </button>
                )}
              </div>

              {lang !== "it" && (
                <div className="space-y-2">
                  <Label className="text-white/60">Slug ({lang.toUpperCase()})</Label>
                  <Input
                    value={draft[slugField] || ""}
                    onChange={(e) => updateField(slugField, e.target.value)}
                    className="bg-white/5 border-white/10 text-white font-mono text-sm"
                    placeholder={`es. car-rental-porto-cervo (EN)`}
                  />
                  <p className="text-xs text-white/40">
                    URL: /{lang}/{draft[slugField] || `[${lang}-slug]`}
                  </p>
                </div>
              )}

              {lang === "it" && (
                <div className="space-y-2">
                  <Label className="text-white/60">Slug (IT)</Label>
                  <Input
                    value={draft[tableConfig.idField] || ""}
                    onChange={(e) => updateField(tableConfig.idField, e.target.value)}
                    className="bg-white/5 border-white/10 text-white font-mono text-sm"
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label className="text-white/60">Title (max 60 char)</Label>
                <Input
                  value={draft[titleField] || ""}
                  onChange={(e) => updateField(titleField, e.target.value)}
                  className="bg-white/5 border-white/10 text-white"
                  maxLength={70}
                />
                <CharCounter text={draft[titleField] || ""} max={60} />
              </div>

              <div className="space-y-2">
                <Label className="text-white/60">H1</Label>
                <Input
                  value={draft[h1Field] || ""}
                  onChange={(e) => updateField(h1Field, e.target.value)}
                  className="bg-white/5 border-white/10 text-white"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-white/60">Meta description (120-155 char)</Label>
                <Textarea
                  rows={3}
                  value={draft[metaField] || ""}
                  onChange={(e) => updateField(metaField, e.target.value)}
                  className="bg-white/5 border-white/10 text-white"
                  maxLength={170}
                />
                <CharCounter text={draft[metaField] || ""} min={120} max={155} />
              </div>

              <div className="space-y-2">
                <Label className="text-white/60">Content HTML</Label>
                <Textarea
                  rows={12}
                  value={draft[contentField] || ""}
                  onChange={(e) => updateField(contentField, e.target.value)}
                  className="bg-white/5 border-white/10 text-white font-mono text-xs"
                  placeholder="<h2>...</h2><p>...</p>"
                />
                <p className="text-xs text-white/40">
                  Parole: {(draft[contentField] || "").replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length}
                </p>
              </div>

              {lang === "it" && (
                <>
                  <div className="border-t border-white/10 pt-4 space-y-3">
                    <h4 className="text-[#C8A135] font-bold text-sm uppercase tracking-wider">Asset (comuni a tutte le lingue)</h4>
                    <div className="space-y-2">
                      <Label className="text-white/60">Hero image URL</Label>
                      <Input value={draft.hero_image_url || ""} onChange={(e) => updateField("hero_image_url", e.target.value)}
                        className="bg-white/5 border-white/10 text-white text-sm" placeholder="https://..." />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-white/60">OG image URL</Label>
                      <Input value={draft.og_image_url || ""} onChange={(e) => updateField("og_image_url", e.target.value)}
                        className="bg-white/5 border-white/10 text-white text-sm" placeholder="https://..." />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-white/60">Canonical URL</Label>
                      <Input value={draft.canonical_url || ""} onChange={(e) => updateField("canonical_url", e.target.value)}
                        className="bg-white/5 border-white/10 text-white text-sm" placeholder="https://www.ksrentsardinia.com/..." />
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Footer azioni */}
            <div className="border-t border-white/10 p-4 flex items-center justify-between gap-3 bg-[#050505]">
              <div className="text-xs text-white/40">
                {dirty ? <span className="text-yellow-500">● Modifiche non salvate</span> : "Tutto salvato"}
              </div>
              <button
                onClick={handleSave}
                disabled={saving || !dirty}
                className="flex items-center gap-2 bg-[#C8A135] text-black px-5 py-2 rounded-full font-bold text-sm uppercase tracking-wider hover:scale-105 transition disabled:opacity-30 disabled:cursor-not-allowed"
              >
                {saving ? <Loader2 size={14} className="animate-spin" /> : <Save size={14} />}
                Salva {LANGS.find((l) => l.code === lang)?.label}
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

const LangBadge = ({ label, filled }: { label: string; filled: boolean }) => (
  <span className={cn(
    "px-1 py-0.5 rounded font-bold tracking-wider",
    filled ? "bg-[#C8A135]/20 text-[#C8A135]" : "bg-white/5 text-white/30",
  )}>{label}</span>
);

const CharCounter = ({ text, min, max }: { text: string; min?: number; max: number }) => {
  const len = text.length;
  const ok = (min === undefined || len >= min) && len <= max;
  return (
    <p className={cn("text-xs", ok ? "text-white/40" : "text-yellow-500")}>
      {len} / {max} char{min !== undefined && ` (min ${min})`}
    </p>
  );
};

export default SEOEditorSection;
