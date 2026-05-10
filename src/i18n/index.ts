import { it, type TranslationDictionary } from "./it";
import { en } from "./en";
import { de } from "./de";
import { fr } from "./fr";
import type { Locale } from "@/lib/i18n";

const dictionaries: Record<Locale, TranslationDictionary> = {
  it,
  en: en as TranslationDictionary,
  de: de as TranslationDictionary,
  fr: fr as TranslationDictionary,
};

export function getDict(locale: Locale): TranslationDictionary {
  return dictionaries[locale] || dictionaries.it;
}

export type { TranslationDictionary };
