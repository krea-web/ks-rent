import { useState } from "react";
import { Mail, Check, Loader2 } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { getDict } from "@/i18n";
import type { Locale } from "@/lib/i18n";

interface Props {
  lang?: Locale;
}

const NewsletterSignup = ({ lang = "it" }: Props) => {
  const t = getDict(lang);
  const T = t.newsletter;

  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "submitting" || status === "success") return;

    const trimmed = email.trim().toLowerCase();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setStatus("error");
      setErrorMsg(T.errorInvalid);
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    const { error } = await supabase
      .from("leads")
      .insert({
        email: trimmed,
        language: lang,
        source: typeof window !== "undefined" ? window.location.pathname : null,
      });

    if (error) {
      // 23505 = unique_violation → email già iscritta → trattata come successo
      if (error.code === "23505") {
        setStatus("success");
        return;
      }
      setStatus("error");
      setErrorMsg(T.errorGeneric);
      return;
    }

    setStatus("success");
    setEmail("");
  }

  return (
    <div className="bg-gradient-to-br from-gold/10 via-transparent to-gold/5 border border-gold/20 rounded-2xl p-5 md:p-6 relative z-20">
      <div className="flex items-start gap-3 mb-3">
        <Mail size={18} className="text-gold mt-0.5 shrink-0" />
        <div>
          <h3 className="font-bold text-foreground text-sm tracking-wider uppercase">{T.heading}</h3>
          <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{T.subtitle}</p>
        </div>
      </div>

      {status === "success" ? (
        <div className="flex items-center gap-2 mt-4 text-sm text-gold font-semibold">
          <Check size={16} />
          <span>{T.success}</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 mt-3">
          <label htmlFor="newsletter-email" className="sr-only">
            {T.emailLabel}
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === "error") setStatus("idle");
            }}
            placeholder={T.placeholder}
            disabled={status === "submitting"}
            className="flex-1 px-3 py-2.5 rounded-lg bg-background border border-gray-200 dark:border-white/10 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex items-center justify-center gap-2 bg-gold text-black font-semibold tracking-wide text-xs uppercase px-4 py-2.5 rounded-lg hover:bg-gold/90 transition-colors disabled:opacity-60 shrink-0"
          >
            {status === "submitting" ? <Loader2 size={14} className="animate-spin" /> : null}
            {status === "submitting" ? T.submitting : T.submit}
          </button>
        </form>
      )}

      {status === "error" && errorMsg && (
        <p className="text-xs text-red-500 mt-2" role="alert">
          {errorMsg}
        </p>
      )}

      <p className="text-[10px] text-muted-foreground/60 mt-3 leading-relaxed">{T.privacy}</p>
    </div>
  );
};

export default NewsletterSignup;
