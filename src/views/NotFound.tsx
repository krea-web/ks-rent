import { getDict } from "@/i18n";
import type { Locale } from "@/lib/i18n";

interface Props {
  lang?: Locale;
}

const NotFound = ({ lang = "it" }: Props) => {
  const t = getDict(lang);
  const homePath = lang === "it" ? "/" : `/${lang}`;
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-foreground">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">{t.errors.pageNotFound}</p>
        <p className="mb-6 text-base text-muted-foreground/80">{t.errors.notFoundDesc}</p>
        <a href={homePath} className="text-gold underline hover:text-gold/80">
          {t.errors.backHome}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
