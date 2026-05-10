import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { logAdminAction } from "@/lib/audit";
import { Star, Pin, Eye, EyeOff, Plus, Trash2, Loader2, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";

interface Review {
  id: string;
  source: "google" | "manual";
  google_review_id: string | null;
  author_name: string;
  author_photo_url: string | null;
  rating: number;
  text: string;
  text_en: string | null;
  text_de: string | null;
  text_fr: string | null;
  language: string | null;
  published_at: string;
  is_published: boolean;
  is_featured: boolean;
  created_at: string;
}

const ReviewsSection = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Review | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [filter, setFilter] = useState<"all" | "google" | "manual" | "unpublished">("all");

  const fetchReviews = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("reviews")
      .select("*")
      .order("published_at", { ascending: false });
    if (error) toast.error("Errore caricamento recensioni: " + error.message);
    else setReviews(data || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const togglePublished = async (r: Review) => {
    const { error } = await supabase.from("reviews").update({ is_published: !r.is_published }).eq("id", r.id);
    if (error) return toast.error(error.message);
    await logAdminAction({ action: "update", table: "reviews", recordId: r.id, diff: { is_published: !r.is_published } });
    fetchReviews();
  };

  const toggleFeatured = async (r: Review) => {
    const { error } = await supabase.from("reviews").update({ is_featured: !r.is_featured }).eq("id", r.id);
    if (error) return toast.error(error.message);
    await logAdminAction({ action: "update", table: "reviews", recordId: r.id, diff: { is_featured: !r.is_featured } });
    fetchReviews();
  };

  const deleteReview = async (r: Review) => {
    if (!confirm(`Eliminare recensione di ${r.author_name}?`)) return;
    const { error } = await supabase.from("reviews").delete().eq("id", r.id);
    if (error) return toast.error(error.message);
    await logAdminAction({ action: "delete", table: "reviews", recordId: r.id });
    toast.success("Recensione eliminata");
    fetchReviews();
  };

  const filtered = reviews.filter((r) => {
    if (filter === "all") return true;
    if (filter === "unpublished") return !r.is_published;
    return r.source === filter;
  });

  const stats = {
    total: reviews.length,
    google: reviews.filter((r) => r.source === "google").length,
    manual: reviews.filter((r) => r.source === "manual").length,
    avgRating: reviews.length ? reviews.reduce((s, r) => s + r.rating, 0) / reviews.length : 0,
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="animate-spin text-[#C8A135]" size={32} />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <StatCard label="Totale" value={stats.total} />
        <StatCard label="Google" value={stats.google} />
        <StatCard label="Manuali" value={stats.manual} />
        <StatCard label="Media stelle" value={stats.avgRating.toFixed(1)} accent />
      </div>

      {/* Toolbar */}
      <div className="flex flex-wrap gap-2 items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {(["all", "google", "manual", "unpublished"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border transition-colors",
                filter === f
                  ? "bg-[#C8A135] text-black border-[#C8A135]"
                  : "bg-white/5 text-white/60 border-white/10 hover:bg-white/10",
              )}
            >
              {f === "all" ? "Tutte" : f === "unpublished" ? "Nascoste" : f}
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={fetchReviews}
            className="p-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 min-h-[40px] min-w-[40px] flex items-center justify-center"
            title="Aggiorna"
          >
            <RefreshCw size={16} className="text-[#C8A135]" />
          </button>
          <button
            onClick={() => { setEditing(null); setModalOpen(true); }}
            className="flex items-center gap-2 bg-[#C8A135] text-black px-3 py-2 rounded-full font-bold text-xs uppercase tracking-wider hover:scale-105 transition"
          >
            <Plus size={14} /> Aggiungi
          </button>
        </div>
      </div>

      {/* List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((r) => (
          <div
            key={r.id}
            className={cn(
              "bg-[#0a0a0a] border rounded-xl p-4 flex flex-col gap-3 transition",
              r.is_published ? "border-white/10" : "border-red-500/20 opacity-60",
            )}
          >
            <div className="flex items-start gap-3">
              {r.author_photo_url ? (
                <img src={r.author_photo_url} alt="" className="w-10 h-10 rounded-full object-cover" />
              ) : (
                <div className="w-10 h-10 rounded-full bg-[#C8A135]/20 text-[#C8A135] flex items-center justify-center font-bold">
                  {r.author_name.charAt(0)}
                </div>
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="font-bold text-sm truncate">{r.author_name}</p>
                  <span className={cn(
                    "px-2 py-0.5 text-[10px] font-bold uppercase rounded-full border",
                    r.source === "google"
                      ? "bg-blue-500/10 text-blue-400 border-blue-500/20"
                      : "bg-white/5 text-white/60 border-white/10",
                  )}>{r.source}</span>
                </div>
                <div className="flex items-center gap-1 mt-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={12} className={i < r.rating ? "fill-[#C8A135] text-[#C8A135]" : "text-white/20"} />
                  ))}
                  <span className="text-xs text-white/40 ml-2">
                    {new Date(r.published_at).toLocaleDateString("it-IT")}
                  </span>
                </div>
              </div>
            </div>
            <p className="text-sm text-white/80 line-clamp-4">{r.text}</p>
            <div className="flex items-center gap-2 pt-2 border-t border-white/5">
              <button
                onClick={() => togglePublished(r)}
                className={cn(
                  "p-2 rounded-lg border transition",
                  r.is_published
                    ? "bg-green-500/10 text-green-500 border-green-500/20"
                    : "bg-red-500/10 text-red-500 border-red-500/20",
                )}
                title={r.is_published ? "Nascondi" : "Pubblica"}
              >
                {r.is_published ? <Eye size={14} /> : <EyeOff size={14} />}
              </button>
              <button
                onClick={() => toggleFeatured(r)}
                className={cn(
                  "p-2 rounded-lg border transition",
                  r.is_featured
                    ? "bg-[#C8A135]/20 text-[#C8A135] border-[#C8A135]/30"
                    : "bg-white/5 text-white/40 border-white/10 hover:text-white",
                )}
                title={r.is_featured ? "Togli evidenza" : "Metti in evidenza"}
              >
                <Pin size={14} />
              </button>
              <button
                onClick={() => { setEditing(r); setModalOpen(true); }}
                className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider border border-white/10 rounded-lg hover:border-[#C8A135] hover:text-[#C8A135] ml-auto"
              >
                Modifica
              </button>
              <button
                onClick={() => deleteReview(r)}
                className="p-2 text-white/40 hover:text-red-500"
                title="Elimina"
              >
                <Trash2 size={14} />
              </button>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full text-center py-12 text-white/40">
            Nessuna recensione {filter !== "all" ? `(filtro: ${filter})` : ""}
          </div>
        )}
      </div>

      <ReviewModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        review={editing}
        onSaved={fetchReviews}
      />
    </div>
  );
};

const StatCard = ({ label, value, accent }: { label: string; value: string | number; accent?: boolean }) => (
  <div className="bg-[#0a0a0a] border border-white/10 rounded-xl p-4">
    <p className="text-xs uppercase tracking-wider text-white/40">{label}</p>
    <p className={cn("text-2xl font-black mt-1", accent ? "text-[#C8A135]" : "text-white")}>{value}</p>
  </div>
);

interface ReviewModalProps {
  open: boolean;
  onClose: () => void;
  review: Review | null;
  onSaved: () => void;
}

function ReviewModal({ open, onClose, review, onSaved }: ReviewModalProps) {
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    author_name: "",
    author_photo_url: "",
    rating: 5,
    text: "",
    text_en: "",
    text_de: "",
    text_fr: "",
    published_at: new Date().toISOString().slice(0, 10),
    is_published: true,
    is_featured: false,
  });

  useEffect(() => {
    if (review) {
      setForm({
        author_name: review.author_name,
        author_photo_url: review.author_photo_url || "",
        rating: review.rating,
        text: review.text,
        text_en: review.text_en || "",
        text_de: review.text_de || "",
        text_fr: review.text_fr || "",
        published_at: review.published_at.slice(0, 10),
        is_published: review.is_published,
        is_featured: review.is_featured,
      });
    } else {
      setForm({
        author_name: "", author_photo_url: "", rating: 5, text: "",
        text_en: "", text_de: "", text_fr: "",
        published_at: new Date().toISOString().slice(0, 10),
        is_published: true, is_featured: false,
      });
    }
  }, [review, open]);

  const handleSubmit = async () => {
    if (!form.author_name || !form.text) {
      toast.error("Nome autore e testo sono obbligatori");
      return;
    }
    setSaving(true);
    const payload = {
      source: review?.source || "manual",
      author_name: form.author_name,
      author_photo_url: form.author_photo_url || null,
      rating: form.rating,
      text: form.text,
      text_en: form.text_en || null,
      text_de: form.text_de || null,
      text_fr: form.text_fr || null,
      language: "it",
      published_at: new Date(form.published_at).toISOString(),
      is_published: form.is_published,
      is_featured: form.is_featured,
    };
    let error: any;
    let recordId = review?.id ?? null;
    if (review?.id) {
      ({ error } = await supabase.from("reviews").update(payload).eq("id", review.id));
    } else {
      const { data, error: insErr } = await supabase.from("reviews").insert(payload).select("id").single();
      error = insErr;
      recordId = data?.id ?? null;
    }
    setSaving(false);
    if (error) return toast.error("Errore: " + error.message);
    await logAdminAction({ action: review ? "update" : "create", table: "reviews", recordId, diff: payload });
    toast.success(review ? "Recensione aggiornata" : "Recensione aggiunta");
    onSaved();
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="bg-[#0a0a0a] border-white/10 text-white max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-[#C8A135] font-display text-xl">
            {review ? "Modifica Recensione" : "Aggiungi Recensione"}
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
          <div className="space-y-2">
            <Label className="text-white/60">Nome autore</Label>
            <Input value={form.author_name} onChange={(e) => setForm({ ...form, author_name: e.target.value })}
              className="bg-white/5 border-white/10 text-white" />
          </div>
          <div className="space-y-2">
            <Label className="text-white/60">URL foto autore</Label>
            <Input value={form.author_photo_url} onChange={(e) => setForm({ ...form, author_photo_url: e.target.value })}
              className="bg-white/5 border-white/10 text-white" placeholder="https://..." />
          </div>
          <div className="space-y-2">
            <Label className="text-white/60">Stelle (1-5)</Label>
            <Input type="number" min={1} max={5} value={form.rating}
              onChange={(e) => setForm({ ...form, rating: Math.max(1, Math.min(5, Number(e.target.value))) })}
              className="bg-white/5 border-white/10 text-white" />
          </div>
          <div className="space-y-2">
            <Label className="text-white/60">Data pubblicazione</Label>
            <Input type="date" value={form.published_at}
              onChange={(e) => setForm({ ...form, published_at: e.target.value })}
              className="bg-white/5 border-white/10 text-white" />
          </div>
        </div>

        <div className="space-y-2">
          <Label className="text-white/60">Testo (italiano)</Label>
          <Textarea rows={4} value={form.text} onChange={(e) => setForm({ ...form, text: e.target.value })}
            className="bg-white/5 border-white/10 text-white" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-3">
          <div className="space-y-1">
            <Label className="text-white/40 text-xs">EN</Label>
            <Textarea rows={3} value={form.text_en} onChange={(e) => setForm({ ...form, text_en: e.target.value })}
              className="bg-white/5 border-white/10 text-white text-sm" />
          </div>
          <div className="space-y-1">
            <Label className="text-white/40 text-xs">DE</Label>
            <Textarea rows={3} value={form.text_de} onChange={(e) => setForm({ ...form, text_de: e.target.value })}
              className="bg-white/5 border-white/10 text-white text-sm" />
          </div>
          <div className="space-y-1">
            <Label className="text-white/40 text-xs">FR</Label>
            <Textarea rows={3} value={form.text_fr} onChange={(e) => setForm({ ...form, text_fr: e.target.value })}
              className="bg-white/5 border-white/10 text-white text-sm" />
          </div>
        </div>

        <div className="flex items-center gap-6 pt-3">
          <div className="flex items-center gap-3">
            <Switch checked={form.is_published} onCheckedChange={(v) => setForm({ ...form, is_published: v })}
              className="data-[state=checked]:bg-green-500" />
            <Label className="text-white/60">Pubblicata</Label>
          </div>
          <div className="flex items-center gap-3">
            <Switch checked={form.is_featured} onCheckedChange={(v) => setForm({ ...form, is_featured: v })}
              className="data-[state=checked]:bg-[#C8A135]" />
            <Label className="text-white/60">In evidenza</Label>
          </div>
        </div>

        <DialogFooter>
          <button onClick={onClose} className="px-4 py-2 text-sm text-white/50 hover:text-white">Annulla</button>
          <button onClick={handleSubmit} disabled={saving}
            className="flex items-center gap-2 bg-[#C8A135] text-black px-5 py-2 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-yellow-400 disabled:opacity-50">
            {saving && <Loader2 size={14} className="animate-spin" />}
            Salva
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ReviewsSection;
