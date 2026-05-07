/**
 * Router-shim: sostituisce le API minime di react-router-dom usate dai
 * componenti React (Link, NavLink, useLocation, useNavigate) con primitive
 * native del browser. Su Astro ogni pagina è un documento HTML statico
 * indipendente, non c'è un BrowserRouter globale: i link generano una
 * navigazione full-page (corretta per SEO, evitano JS extra).
 *
 * Why: rende riutilizzabili 1:1 i componenti React esistenti come isole
 *      Astro senza dover riscrivere ogni `<Link to="/x" />`.
 */
import {
  forwardRef,
  useEffect,
  useState,
  type AnchorHTMLAttributes,
  type ReactNode,
} from "react";

type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  to: string;
  children?: ReactNode;
  replace?: boolean;
  state?: unknown;
  reloadDocument?: boolean;
};

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { to, children, replace, state, reloadDocument, ...rest },
  ref,
) {
  return (
    <a ref={ref} href={to} {...rest}>
      {children}
    </a>
  );
});

type NavLinkRenderProps = { isActive: boolean; isPending: boolean };

type NavLinkProps = Omit<LinkProps, "className" | "style"> & {
  end?: boolean;
  caseSensitive?: boolean;
  className?: string | ((props: NavLinkRenderProps) => string);
  style?:
    | React.CSSProperties
    | ((props: NavLinkRenderProps) => React.CSSProperties | undefined);
  children?: ReactNode | ((props: NavLinkRenderProps) => ReactNode);
};

function getCurrentPath(): string {
  if (typeof window === "undefined") return "/";
  return window.location.pathname || "/";
}

export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  function NavLink(
    { to, children, end, caseSensitive, className, style, ...rest },
    ref,
  ) {
    const [path, setPath] = useState<string>(getCurrentPath());
    useEffect(() => {
      setPath(getCurrentPath());
      const onPop = () => setPath(getCurrentPath());
      window.addEventListener("popstate", onPop);
      return () => window.removeEventListener("popstate", onPop);
    }, []);

    const a = caseSensitive ? path : path.toLowerCase();
    const b = caseSensitive ? to : to.toLowerCase();
    const isActive = end ? a === b : a === b || a.startsWith(b + "/");
    const renderProps: NavLinkRenderProps = { isActive, isPending: false };
    const cls =
      typeof className === "function" ? className(renderProps) : className;
    const sty =
      typeof style === "function" ? style(renderProps) : style;
    const rendered =
      typeof children === "function" ? children(renderProps) : children;

    return (
      <a ref={ref} href={to} className={cls} style={sty} {...rest}>
        {rendered}
      </a>
    );
  },
);

export function useLocation() {
  const [pathname, setPathname] = useState<string>(getCurrentPath());
  const [search, setSearch] = useState<string>(
    typeof window === "undefined" ? "" : window.location.search,
  );
  const [hash, setHash] = useState<string>(
    typeof window === "undefined" ? "" : window.location.hash,
  );
  useEffect(() => {
    const update = () => {
      setPathname(getCurrentPath());
      setSearch(window.location.search);
      setHash(window.location.hash);
    };
    update();
    window.addEventListener("popstate", update);
    return () => window.removeEventListener("popstate", update);
  }, []);
  return { pathname, search, hash, state: null, key: "default" } as const;
}

export function useNavigate() {
  return (to: string | number, options?: { replace?: boolean }) => {
    if (typeof window === "undefined") return;
    if (typeof to === "number") {
      window.history.go(to);
      return;
    }
    if (options?.replace) {
      window.location.replace(to);
    } else {
      window.location.href = to;
    }
  };
}

export function useParams<
  T extends Record<string, string | undefined> = Record<string, string | undefined>,
>(): T {
  if (typeof window === "undefined") return {} as T;
  // Le params sono iniettate dalle pagine .astro come prop al componente,
  // questo hook è usato come fallback. Non lo usiamo nelle isole Astro.
  return {} as T;
}
