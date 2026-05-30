import type { Locale } from "@/lib/i18n";

/**
 * Numero WhatsApp del noleggio (formato internazionale senza +).
 * Unico punto di verità — riusato da ogni CTA che apre WhatsApp.
 */
export const WHATSAPP_NUMBER = "393446107071";

export interface WhatsAppRequestParams {
  /** Es. "Audi RS3 (Verde)" */
  vehicleName: string;
  /** Data ritiro già formattata nella lingua corrente (es. "12/07/2026") */
  startLabel: string;
  /** Data riconsegna già formattata (es. "19/07/2026") */
  endLabel: string;
  /** Numero di giorni di noleggio */
  days: number;
  /** Stima prezzo in euro (intero o decimale). 0/undefined → riga omessa */
  priceEstimate?: number;
  /** Es. "Ritiro in sede (Porto Isola Bianca)" oppure "Consegna a: Hotel Cala di Volpe" */
  pickupLabel?: string;
}

type Template = (p: WhatsAppRequestParams) => string;

// Template messaggio per lingua. La stima è etichettata "indicativa, da confermare":
// si mostra solo la tariffa di noleggio (già pubblica su /tariffe), MAI franchigia/deposito.
const TEMPLATES: Record<Locale, Template> = {
  it: (p) =>
    `Ciao KS Rent! 👋 Vorrei richiedere un veicolo:\n` +
    `🚗 ${p.vehicleName}\n` +
    `📅 ${p.startLabel} → ${p.endLabel} (${p.days} ${p.days === 1 ? "giorno" : "giorni"})\n` +
    (p.priceEstimate ? `💰 Stima indicativa: ~€${p.priceEstimate} (da confermare)\n` : "") +
    (p.pickupLabel ? `📍 ${p.pickupLabel}\n` : "") +
    `\nPotete confermarmi disponibilità, kasko/franchigia ed eventuale costo di consegna? Grazie!`,
  en: (p) =>
    `Hello KS Rent! 👋 I'd like to request a vehicle:\n` +
    `🚗 ${p.vehicleName}\n` +
    `📅 ${p.startLabel} → ${p.endLabel} (${p.days} ${p.days === 1 ? "day" : "days"})\n` +
    (p.priceEstimate ? `💰 Rough estimate: ~€${p.priceEstimate} (to be confirmed)\n` : "") +
    (p.pickupLabel ? `📍 ${p.pickupLabel}\n` : "") +
    `\nCould you confirm availability, insurance/excess and any delivery cost? Thank you!`,
  de: (p) =>
    `Hallo KS Rent! 👋 Ich möchte ein Fahrzeug anfragen:\n` +
    `🚗 ${p.vehicleName}\n` +
    `📅 ${p.startLabel} → ${p.endLabel} (${p.days} ${p.days === 1 ? "Tag" : "Tage"})\n` +
    (p.priceEstimate ? `💰 Ungefähre Schätzung: ~€${p.priceEstimate} (zu bestätigen)\n` : "") +
    (p.pickupLabel ? `📍 ${p.pickupLabel}\n` : "") +
    `\nKönnen Sie Verfügbarkeit, Kasko/Selbstbeteiligung und mögliche Lieferkosten bestätigen? Danke!`,
  fr: (p) =>
    `Bonjour KS Rent ! 👋 Je souhaiterais demander un véhicule :\n` +
    `🚗 ${p.vehicleName}\n` +
    `📅 ${p.startLabel} → ${p.endLabel} (${p.days} ${p.days === 1 ? "jour" : "jours"})\n` +
    (p.priceEstimate ? `💰 Estimation indicative : ~€${p.priceEstimate} (à confirmer)\n` : "") +
    (p.pickupLabel ? `📍 ${p.pickupLabel}\n` : "") +
    `\nPouvez-vous confirmer la disponibilité, l'assurance/franchise et un éventuel coût de livraison ? Merci !`,
};

/**
 * Costruisce l'URL wa.me con messaggio precompilato per la richiesta di un veicolo.
 * Le date vanno passate GIÀ formattate nella lingua corrente (il chiamante ha date-fns).
 */
export function buildWhatsAppRequest(lang: Locale, params: WhatsAppRequestParams): string {
  const template = TEMPLATES[lang] || TEMPLATES.it;
  const text = template(params);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
