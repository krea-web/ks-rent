import { useEffect, useState, useCallback } from "react";
import { Cookie, X, ShieldCheck, BarChart3, Megaphone } from "lucide-react";
import { getDict } from "@/i18n";
import type { Locale } from "@/lib/i18n";
import { localizePath } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "ksr-cookie-consent-v1";

interface StoredConsent {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  ts: number;
  v: 1;
}

type View = "hidden" | "banner" | "prefs";

/** Aggiorna Google Consent Mode v2 + persiste la scelta. Fire-and-forget. */
function applyConsent(analytics: boolean, marketing: boolean) {
  try {
    const payload: StoredConsent = {
      necessary: true,
      analytics,
      marketing,
      ts: Date.now(),
      v: 1,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch {
    /* storage non disponibile: la scelta vale comunque per la sessione corrente */
  }
  const g = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof g === "function") {
    g("consent", "update", {
      analytics_storage: analytics ? "granted" : "denied",
      ad_storage: marketing ? "granted" : "denied",
      ad_user_data: marketing ? "granted" : "denied",
      ad_personalization: marketing ? "granted" : "denied",
    });
  }
}

const CookieConsent = ({ lang }: { lang: Locale }) => {
  const t = getDict(lang).cookie;
  const [view, setView] = useState<View>("hidden");
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(true);

  // Primo render solo lato client: decide se mostrare il banner.
  useEffect(() => {
    let saved: StoredConsent | null = null;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) saved = JSON.parse(raw);
    } catch {
      /* ignore */
    }
    if (saved && saved.v === 1) {
      setAnalytics(!!saved.analytics);
      setMarketing(!!saved.marketing);
    } else {
      setView("banner");
    }
  }, []);

  // Riapertura preferenze dal footer (footer è statico → event delegation sul document).
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && target.closest("[data-cookie-preferences]")) {
        e.preventDefault();
        // riallinea i toggle allo stato salvato prima di aprire
        try {
          const raw = localStorage.getItem(STORAGE_KEY);
          if (raw) {
            const s: StoredConsent = JSON.parse(raw);
            setAnalytics(!!s.analytics);
            setMarketing(!!s.marketing);
          }
        } catch {
          /* ignore */
        }
        setView("prefs");
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const acceptAll = useCallback(() => {
    applyConsent(true, true);
    setView("hidden");
  }, []);

  const rejectAll = useCallback(() => {
    applyConsent(false, false);
    setView("hidden");
  }, []);

  const savePrefs = useCallback(() => {
    applyConsent(analytics, marketing);
    setView("hidden");
  }, [analytics, marketing]);

  const privacyHref = localizePath("/privacy-policy", lang);
  const cookieHref = localizePath("/cookie-policy", lang);

  if (view === "hidden") return null;

  return (
    <>
      {/* ---------- BANNER ---------- */}
      {view === "banner" && (
        <div
          role="dialog"
          aria-live="polite"
          aria-label={t.bannerTitle}
          className="fixed inset-x-0 z-[90] bottom-[calc(5rem+env(safe-area-inset-bottom))] lg:bottom-0 px-3 lg:px-4 pb-3 lg:pb-4"
        >
          <div className="mx-auto max-w-3xl rounded-2xl border border-gold/30 bg-[#0a0a0a]/95 backdrop-blur-md shadow-[0_8px_40px_rgba(0,0,0,0.5)] p-5">
            <div className="flex items-start gap-3">
              <Cookie className="text-gold shrink-0 mt-0.5" size={22} />
              <div className="min-w-0">
                <p className="font-bold text-white text-sm">{t.bannerTitle}</p>
                <p className="text-xs text-white/70 leading-relaxed mt-1">
                  {t.bannerText}{" "}
                  <a href={privacyHref} className="text-gold underline hover:text-gold/80">
                    {t.morePrivacy}
                  </a>{" "}
                  ·{" "}
                  <a href={cookieHref} className="text-gold underline hover:text-gold/80">
                    {t.moreCookie}
                  </a>
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 mt-4">
              <button
                type="button"
                onClick={acceptAll}
                className="flex-1 px-4 py-2.5 rounded-xl bg-gold text-background font-bold text-sm hover:bg-gold/90 transition-colors"
              >
                {t.acceptAll}
              </button>
              <button
                type="button"
                onClick={rejectAll}
                className="flex-1 px-4 py-2.5 rounded-xl border border-white/15 text-white font-semibold text-sm hover:bg-white/5 transition-colors"
              >
                {t.rejectAll}
              </button>
              <button
                type="button"
                onClick={() => setView("prefs")}
                className="flex-1 px-4 py-2.5 rounded-xl border border-white/15 text-white/80 font-semibold text-sm hover:bg-white/5 transition-colors"
              >
                {t.customize}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ---------- PANNELLO PREFERENZE ---------- */}
      {view === "prefs" && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-3 sm:p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setView(localStorageHasConsent() ? "hidden" : "banner")}
            aria-hidden="true"
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label={t.prefTitle}
            className="relative w-full max-w-lg rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-2xl max-h-[85vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between p-5 border-b border-white/10 sticky top-0 bg-[#0a0a0a]">
              <h2 className="font-bold text-white flex items-center gap-2">
                <Cookie size={18} className="text-gold" /> {t.prefTitle}
              </h2>
              <button
                type="button"
                onClick={() => setView(localStorageHasConsent() ? "hidden" : "banner")}
                className="text-white/50 hover:text-white transition-colors"
                aria-label={t.close}
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-5 space-y-4">
              <p className="text-xs text-white/60 leading-relaxed">{t.prefIntro}</p>

              {/* Necessari (sempre on) */}
              <CategoryRow
                icon={<ShieldCheck size={18} className="text-gold" />}
                title={t.necessaryTitle}
                desc={t.necessaryDesc}
                checked
                disabled
                badge={t.alwaysOn}
              />

              {/* Analitici */}
              <CategoryRow
                icon={<BarChart3 size={18} className="text-gold" />}
                title={t.analyticsTitle}
                desc={t.analyticsDesc}
                checked={analytics}
                onChange={setAnalytics}
              />

              {/* Marketing */}
              <CategoryRow
                icon={<Megaphone size={18} className="text-gold" />}
                title={t.marketingTitle}
                desc={t.marketingDesc}
                checked={marketing}
                onChange={setMarketing}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-2 p-5 border-t border-white/10 sticky bottom-0 bg-[#0a0a0a]">
              <button
                type="button"
                onClick={rejectAll}
                className="flex-1 px-4 py-2.5 rounded-xl border border-white/15 text-white font-semibold text-sm hover:bg-white/5 transition-colors"
              >
                {t.rejectAll}
              </button>
              <button
                type="button"
                onClick={savePrefs}
                className="flex-1 px-4 py-2.5 rounded-xl border border-white/15 text-white/80 font-semibold text-sm hover:bg-white/5 transition-colors"
              >
                {t.save}
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="flex-1 px-4 py-2.5 rounded-xl bg-gold text-background font-bold text-sm hover:bg-gold/90 transition-colors"
              >
                {t.acceptAll}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

function localStorageHasConsent(): boolean {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;
    const s = JSON.parse(raw);
    return s && s.v === 1;
  } catch {
    return false;
  }
}

interface CategoryRowProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  checked: boolean;
  disabled?: boolean;
  badge?: string;
  onChange?: (v: boolean) => void;
}

const CategoryRow = ({ icon, title, desc, checked, disabled, badge, onChange }: CategoryRowProps) => (
  <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-2 min-w-0">
        {icon}
        <span className="font-bold text-white text-sm">{title}</span>
      </div>
      {disabled ? (
        <span className="text-[10px] uppercase tracking-wider text-gold/80 font-bold shrink-0">{badge}</span>
      ) : (
        <button
          type="button"
          role="switch"
          aria-checked={checked}
          aria-label={title}
          onClick={() => onChange?.(!checked)}
          className={cn(
            "relative w-11 h-6 rounded-full transition-colors shrink-0",
            checked ? "bg-gold" : "bg-white/15",
          )}
        >
          <span
            className={cn(
              "absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform",
              checked && "translate-x-5",
            )}
          />
        </button>
      )}
    </div>
    <p className="text-xs text-white/55 leading-relaxed mt-2">{desc}</p>
  </div>
);

export default CookieConsent;
