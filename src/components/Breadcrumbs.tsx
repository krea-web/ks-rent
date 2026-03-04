import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

const routeLabels: Record<string, string> = {
  "/": "Home",
  "/chisiamo": "Chi Siamo",
  "/prenotaora": "Prenota Ora",
};

const Breadcrumbs = () => {
  const { pathname } = useLocation();

  if (pathname === "/") return null;

  const label = routeLabels[pathname] || "Pagina";

  return (
    <nav aria-label="Breadcrumb" className="fixed top-[56px] sm:top-[64px] md:top-[72px] left-0 right-0 z-[90] bg-[#050505]/90 backdrop-blur-md border-b border-white/10">
      <ol
        className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground max-w-7xl mx-auto px-4 md:px-8 py-2"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        <li
          className="flex items-center gap-1"
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
        >
          <Link to="/" className="hover:text-gold transition-colors flex items-center gap-1" itemProp="item">
            <Home size={12} />
            <span itemProp="name">Home</span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>
        <ChevronRight size={10} className="text-white/20" />
        <li
          className="text-gold font-semibold"
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
        >
          <span itemProp="name">{label}</span>
          <meta itemProp="position" content="2" />
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
