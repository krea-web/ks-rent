import { useEffect, useState } from "react";

/**
 * Barra di lettura fissa in alto — segue lo scroll dell'articolo.
 * Si calcola sull'elemento [data-article-body] presente in GuideArticleLayout.
 */
export default function GuideReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const body = document.querySelector<HTMLElement>("[data-article-body]");
    if (!body) return;

    const onScroll = () => {
      const rect = body.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const total = body.offsetHeight - viewportH;
      const scrolled = -rect.top;
      const pct = Math.max(0, Math.min(100, (scrolled / Math.max(total, 1)) * 100));
      setProgress(pct);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 inset-x-0 h-1 z-50 bg-transparent pointer-events-none"
    >
      <div
        className="h-full bg-gold transition-[width] duration-150 ease-out shadow-[0_0_8px_rgba(204,162,76,0.6)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
