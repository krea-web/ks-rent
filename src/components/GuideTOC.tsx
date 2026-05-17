import { useEffect, useState } from "react";

interface TocItem {
  id: string;
  text: string;
  level: 2 | 3;
}

interface Props {
  label: string;
}

/**
 * Table of Contents sticky a sinistra. Estrae h2/h3 dal body articolo
 * (data-article-body) e applica scrollspy per evidenziare la sezione corrente.
 */
export default function GuideTOC({ label }: Props) {
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const body = document.querySelector<HTMLElement>("[data-article-body]");
    if (!body) return;

    const headings = Array.from(body.querySelectorAll<HTMLHeadingElement>("h2, h3"));
    const toc: TocItem[] = headings.map((h, i) => {
      if (!h.id) {
        const slug = (h.textContent || `section-${i}`)
          .toLowerCase()
          .normalize("NFD")
          .replace(/[̀-ͯ]/g, "")
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-+|-+$/g, "")
          .slice(0, 80) || `section-${i}`;
        h.id = slug;
      }
      return {
        id: h.id,
        text: h.textContent || "",
        level: (h.tagName === "H2" ? 2 : 3) as 2 | 3,
      };
    });
    setItems(toc);

    if (toc.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-100px 0px -65% 0px", threshold: 0 },
    );

    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, []);

  if (items.length < 2) return null;

  return (
    <nav aria-label={label} className="hidden lg:block">
      <div className="sticky top-28">
        <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-gold mb-4">{label}</p>
        <ul className="space-y-2 border-l border-border pl-4 text-sm">
          {items.map((item) => (
            <li key={item.id} className={item.level === 3 ? "pl-3" : ""}>
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById(item.id);
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                    history.replaceState(null, "", `#${item.id}`);
                  }
                }}
                className={`block leading-snug transition-colors ${
                  activeId === item.id
                    ? "text-gold font-semibold"
                    : "text-foreground/55 hover:text-foreground"
                } ${item.level === 3 ? "text-[13px]" : ""}`}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
