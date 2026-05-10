import { useState, useEffect, useMemo, useRef, useCallback, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CalendarIcon,
  X,
  User,
  CreditCard,
  MapPin,
  Car,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Zap,
  Bike,
  Settings2,
  Mail,
  Phone,
  Map,
  CalendarDays,
  UploadCloud,
  Users,
  Loader2,
  AlertCircle,
  Check,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { format, differenceInDays, eachDayOfInterval, getMonth } from "date-fns";
import { it as itLocale, enGB as enLocale, de as deLocale, fr as frLocale } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";
import SEOHead from "@/components/SEOHead";
import SuccessModal from "@/components/SuccessModal";
import { trackBookingLead, trackBookingSuccess } from "@/lib/analytics";
import { buildVehicleJsonLd, buildBreadcrumb } from "@/lib/jsonLd";
import OptimizedImage from "@/components/OptimizedImage";
import { getVehicleAlt } from "@/lib/imageUtils";
import { Skeleton } from "@/components/ui/skeleton";
import LocationStep from "@/components/LocationStep";
import { useJsApiLoader } from "@react-google-maps/api";
import { GOOGLE_MAPS_API_KEY, LIBRARIES } from "@/lib/googleMaps";
import type { Locale } from "@/lib/i18n";

// Code splitting: lazy load heavy components
const Calendar = lazy(() => import("@/components/ui/calendar").then((m) => ({ default: m.Calendar })));
const SignatureModal = lazy(() => import("@/components/SignatureModal"));

const N8N_BASE = "https://n8n.kreareweb.com/webhook/ksrent";

const TRANSPARENT_IMAGES: Record<string, string> = {
  "Audi__RS3 (Verde)":
    "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/Trasparenza/ksrent-audirs3supercar-verde.png",
  "Audi__RS3 (Grigio)":
    "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/Trasparenza/ksrent-audirs3supercar-grigia.png",
  Audi__RS3:
    "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/Trasparenza/ksrent-audirs3supercar-verde.png",
  BMW__M2:
    "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/Trasparenza/ksrent-bmwm2-maschera.png",
  Jeep__Avenger:
    "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/Trasparenza/ksrent-jeepsuvavenger.webp",
  "Mercedes__Classe A180d":
    "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/MERCEDES/ksrent-mercedessupercarclassea180d.png",
  Fiat__Panda:
    "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/FIAT/ksrent-fiatpandacitycar.webp",
  "Honda__SH 350":
    "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/Trasparenza/ksrent-hondascooter350.png",
  "Honda__SH 125":
    "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/Trasparenza/ksrent-hondascooter125.png",
  Yamaha__Quad:
    "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/Trasparenza/ksrent-yamahaquadraptor.png",
  Yamaha__Raptor:
    "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/vehicle_images/Trasparenza/ksrent-yamahaquadraptor.png",
};

const getTransparentImage = (make?: string, model?: string): string | null => {
  if (!make || !model) return null;
  const key = `${make}__${model}`;
  if (TRANSPARENT_IMAGES[key]) return TRANSPARENT_IMAGES[key];
  // Fuzzy match by model substring
  for (const [k, url] of Object.entries(TRANSPARENT_IMAGES)) {
    const kModel = k.split("__")[1];
    if (model.includes(kModel) || kModel.includes(model)) return url;
  }
  return null;
};

const initialDriverState = {
  name: "",
  surname: "",
  email: "",
  phone: "",
  cf: "",
  birthDate: "",
  licenseFront: null as File | null,
  licenseBack: null as File | null,
};

// ---------------------------------------------------------------------------
// Translations
// ---------------------------------------------------------------------------
const TRANSLATIONS = {
  it: {
    seo: {
      titleDefault: "Prenota Noleggio Auto Olbia Aeroporto | KS Rent Costa Smeralda",
      titleVehicle: (make: string, model: string) => `Noleggia ${make} ${model} a Olbia — KS Rent`,
      descDefault:
        "Prenota in 2 minuti il tuo veicolo luxury a Olbia. Consegna in aeroporto o hotel. Deposito cauzionale trasparente e copertura assicurativa completa.",
      descVehicle: (make: string, model: string, rate: number) =>
        `Noleggia ${make} ${model} in Costa Smeralda con protezione completa. Da €${rate}/giorno con KS Rent Olbia.`,
      breadcrumb: "Prenota Ora",
    },
    header: {
      eyebrow: "Fast Booking",
      titlePart1: "Prenota",
      titlePart2: "Ora.",
      back: "Indietro",
    },
    stepLabels: ["Veicolo", "Date", "Guidatore", "Secondo Guidatore", "Ritiro & Consegna"],
    step1: {
      heading: "Scegli il Veicolo",
      categoryAll: "Tutti",
      soldOut: "Esaurito",
      pricePrefix: "A partire da",
      pricePerDay: "/giorno",
      seats: (n: number) => `${n} Posti`,
      selectButton: "Seleziona questo veicolo",
      notAvailable: "Non disponibile",
      prevAria: "Veicolo precedente",
      nextAria: "Veicolo successivo",
      goToVehicle: (i: number) => `Vai al veicolo ${i}`,
    },
    step2: {
      heading: "Periodo di Noleggio",
      pickupLabel: "Ritiro",
      returnLabel: "Riconsegna",
      selectDate: "Seleziona Data",
      verifyButton: "Verifica Disponibilità",
      checking: "Verifica disponibilità in tempo reale...",
      unavailableMsg: "Questa vettura è già impegnata per queste date, ma abbiamo altre soluzioni per te.",
      changeCar: "Cambia Auto",
      changeDates: "Cambia Date",
      availableTitle: "Disponibile!",
      realTimeRate: "Tariffa calcolata in tempo reale",
      totalPrice: "Prezzo totale",
      days: (n: number) => `${n} giorn${n !== 1 ? "i" : "o"} · Tariffa dinamica`,
      continue: "Continua",
    },
    step3: {
      heading: "Dati Guidatore Principale",
      continue: "Continua",
    },
    step4: {
      askTitle: "Viaggerai con un secondo guidatore?",
      askDesc: "Se prevedi di condividere la guida, aggiungi i dati del secondo guidatore.",
      yes: "Sì, Aggiungi",
      no: "No, Procedi",
      heading: "Dati Secondo Guidatore",
      cancel: "Annulla",
      continue: "Continua",
    },
    step5: {
      heading: "Ritiro & Consegna",
      mainIncomplete: "Dati del guidatore principale incompleti",
      secondIncomplete: "Dati del secondo guidatore incompleti",
      completeData: "Completa Dati",
      summaryTitle: "Riepilogo Finale",
      summaryVehicle: "Veicolo",
      summaryPeriod: "Periodo",
      summaryPickup: "Ritiro",
      summaryTotal: "Totale",
      toBeSet: "Da impostare",
      loading: "Caricamento dati...",
      confirmBooking: "Conferma Prenotazione",
    },
    driver: {
      taxCode: "Codice Fiscale",
      optional: "(opzionale)",
      email: "Email *",
      phone: "Telefono *",
      documentsTitle: "Documenti (Patente)",
      ocrHint: "📷 La tua data e luogo di nascita verranno estratti automaticamente dalla foto della patente tramite OCR.",
      photoFront: "Foto Fronte",
      photoBack: "Foto Retro",
      uploadFront: "Carica Fronte",
      uploadBack: "Carica Retro",
    },
    summary: {
      categoryNone: "Nessun veicolo",
      live: "Riepilogo Live",
      noVehicle: "Nessun veicolo",
      rate: "Tariffa",
      seasonalRate: "Tariffa dinamica stagionale",
      duration: "Durata",
      days: (n: number) => `${n} Giorn${n !== 1 ? "i" : "o"}`,
      updatingPrice: "Aggiornamento prezzo...",
      realTimeRate: "Tariffa calcolata in tempo reale",
      mainDriver: "Guidatore principale",
      secondIncluded: "Secondo guidatore incluso",
      totalEstimated: "Totale stimato",
      depositNote: "Il deposito cauzionale e la franchigia verranno definiti in fase contrattuale in base al veicolo scelto.",
      stepOf: (current: number, total: number) => `Step ${current} di ${total}`,
    },
    mobileBar: {
      noVehicle: "Nessun veicolo",
      selectDates: "Seleziona date",
      perDays: (n: number) => `per ${n} giorn${n !== 1 ? "i" : "o"}`,
      actionPickVehicle: "Scegli Auto",
      actionContinue: "Continua",
      actionVerify: "Verifica",
      actionPickDates: "Scegli Date",
      actionChoose: "Scegli",
      actionConfirm: "Conferma",
    },
    validation: {
      selectBothDates: "Seleziona entrambe le date.",
      vehicleNotAvailable: "Veicolo non disponibile per queste date.",
      mainLicenseMissing: "Inserisci le foto della patente del guidatore principale.",
      secondLicenseMissing: "Inserisci le foto della patente del secondo guidatore.",
      fillFields: (fields: string) => `Compila tutti i campi: ${fields}`,
      fillFieldsSecond: (fields: string) => `Compila tutti i campi del secondo guidatore: ${fields}`,
      fieldEmail: "Email",
      fieldPhone: "Telefono",
      fieldLicenseFront: "Foto Patente Fronte",
      fieldLicenseBack: "Foto Patente Retro",
    },
    errors: {
      availabilityCheck: "Errore verifica disponibilità",
      availabilityFallback: "Impossibile verificare la disponibilità. Calcolo locale attivo.",
      bookingCreate: "Errore creazione prenotazione",
      bookingGeneric: "Errore durante la prenotazione. Riprova.",
    },
  },
  en: {
    seo: {
      titleDefault: "Book Car Hire Olbia Airport | KS Rent Costa Smeralda",
      titleVehicle: (make: string, model: string) => `Hire ${make} ${model} in Olbia — KS Rent`,
      descDefault:
        "Book your luxury vehicle in Olbia in 2 minutes. Delivery to airport or hotel. Transparent security deposit and full insurance cover.",
      descVehicle: (make: string, model: string, rate: number) =>
        `Hire ${make} ${model} in Costa Smeralda with full protection. From €${rate}/day with KS Rent Olbia.`,
      breadcrumb: "Book Now",
    },
    header: {
      eyebrow: "Fast Booking",
      titlePart1: "Book",
      titlePart2: "Now.",
      back: "Back",
    },
    stepLabels: ["Vehicle", "Dates", "Driver", "Second Driver", "Pickup & Drop-off"],
    step1: {
      heading: "Choose your vehicle",
      categoryAll: "All",
      soldOut: "Sold out",
      pricePrefix: "From",
      pricePerDay: "/day",
      seats: (n: number) => `${n} Seats`,
      selectButton: "Select this vehicle",
      notAvailable: "Not available",
      prevAria: "Previous vehicle",
      nextAria: "Next vehicle",
      goToVehicle: (i: number) => `Go to vehicle ${i}`,
    },
    step2: {
      heading: "Hire period",
      pickupLabel: "Pickup",
      returnLabel: "Return",
      selectDate: "Select date",
      verifyButton: "Check availability",
      checking: "Checking availability in real time...",
      unavailableMsg: "This vehicle is already booked for these dates, but we have other options for you.",
      changeCar: "Change car",
      changeDates: "Change dates",
      availableTitle: "Available!",
      realTimeRate: "Rate calculated in real time",
      totalPrice: "Total price",
      days: (n: number) => `${n} day${n !== 1 ? "s" : ""} · Dynamic rate`,
      continue: "Continue",
    },
    step3: {
      heading: "Main driver details",
      continue: "Continue",
    },
    step4: {
      askTitle: "Will you travel with a second driver?",
      askDesc: "If you plan to share the driving, add the second driver's details.",
      yes: "Yes, add",
      no: "No, continue",
      heading: "Second driver details",
      cancel: "Cancel",
      continue: "Continue",
    },
    step5: {
      heading: "Pickup & drop-off",
      mainIncomplete: "Main driver details incomplete",
      secondIncomplete: "Second driver details incomplete",
      completeData: "Complete details",
      summaryTitle: "Final summary",
      summaryVehicle: "Vehicle",
      summaryPeriod: "Period",
      summaryPickup: "Pickup",
      summaryTotal: "Total",
      toBeSet: "To be set",
      loading: "Loading data...",
      confirmBooking: "Confirm booking",
    },
    driver: {
      taxCode: "Tax code",
      optional: "(optional)",
      email: "Email *",
      phone: "Phone *",
      documentsTitle: "Documents (Driving licence)",
      ocrHint: "📷 Your date and place of birth will be extracted automatically from your driving licence photo via OCR.",
      photoFront: "Front photo",
      photoBack: "Back photo",
      uploadFront: "Upload front",
      uploadBack: "Upload back",
    },
    summary: {
      categoryNone: "No vehicle",
      live: "Live summary",
      noVehicle: "No vehicle",
      rate: "Rate",
      seasonalRate: "Dynamic seasonal rate",
      duration: "Duration",
      days: (n: number) => `${n} Day${n !== 1 ? "s" : ""}`,
      updatingPrice: "Updating price...",
      realTimeRate: "Rate calculated in real time",
      mainDriver: "Main driver",
      secondIncluded: "Second driver included",
      totalEstimated: "Estimated total",
      depositNote: "The security deposit and excess will be defined at contract stage based on the chosen vehicle.",
      stepOf: (current: number, total: number) => `Step ${current} of ${total}`,
    },
    mobileBar: {
      noVehicle: "No vehicle",
      selectDates: "Select dates",
      perDays: (n: number) => `for ${n} day${n !== 1 ? "s" : ""}`,
      actionPickVehicle: "Choose car",
      actionContinue: "Continue",
      actionVerify: "Check",
      actionPickDates: "Choose dates",
      actionChoose: "Choose",
      actionConfirm: "Confirm",
    },
    validation: {
      selectBothDates: "Please select both dates.",
      vehicleNotAvailable: "Vehicle not available for these dates.",
      mainLicenseMissing: "Please upload the main driver's licence photos.",
      secondLicenseMissing: "Please upload the second driver's licence photos.",
      fillFields: (fields: string) => `Please complete all fields: ${fields}`,
      fillFieldsSecond: (fields: string) => `Please complete all second driver fields: ${fields}`,
      fieldEmail: "Email",
      fieldPhone: "Phone",
      fieldLicenseFront: "Licence photo (front)",
      fieldLicenseBack: "Licence photo (back)",
    },
    errors: {
      availabilityCheck: "Availability check error",
      availabilityFallback: "Unable to check availability. Local calculation active.",
      bookingCreate: "Booking creation error",
      bookingGeneric: "An error occurred during booking. Please try again.",
    },
  },
  de: {
    seo: {
      titleDefault: "Autovermietung Olbia Flughafen buchen | KS Rent Costa Smeralda",
      titleVehicle: (make: string, model: string) => `${make} ${model} in Olbia mieten — KS Rent`,
      descDefault:
        "Buchen Sie Ihr Premium-Fahrzeug in Olbia in 2 Minuten. Lieferung zum Flughafen oder Hotel. Transparente Kaution und umfassender Versicherungsschutz.",
      descVehicle: (make: string, model: string, rate: number) =>
        `Mieten Sie ${make} ${model} an der Costa Smeralda mit vollem Schutz. Ab €${rate}/Tag bei KS Rent Olbia.`,
      breadcrumb: "Jetzt buchen",
    },
    header: {
      eyebrow: "Schnellbuchung",
      titlePart1: "Jetzt",
      titlePart2: "buchen.",
      back: "Zurück",
    },
    stepLabels: ["Fahrzeug", "Daten", "Fahrer", "Zweiter Fahrer", "Abholung & Rückgabe"],
    step1: {
      heading: "Wählen Sie Ihr Fahrzeug",
      categoryAll: "Alle",
      soldOut: "Ausverkauft",
      pricePrefix: "Ab",
      pricePerDay: "/Tag",
      seats: (n: number) => `${n} Sitze`,
      selectButton: "Dieses Fahrzeug wählen",
      notAvailable: "Nicht verfügbar",
      prevAria: "Vorheriges Fahrzeug",
      nextAria: "Nächstes Fahrzeug",
      goToVehicle: (i: number) => `Zu Fahrzeug ${i}`,
    },
    step2: {
      heading: "Mietzeitraum",
      pickupLabel: "Abholung",
      returnLabel: "Rückgabe",
      selectDate: "Datum auswählen",
      verifyButton: "Verfügbarkeit prüfen",
      checking: "Verfügbarkeit wird in Echtzeit geprüft...",
      unavailableMsg: "Dieses Fahrzeug ist für diese Daten bereits gebucht, wir haben aber andere Lösungen für Sie.",
      changeCar: "Auto ändern",
      changeDates: "Daten ändern",
      availableTitle: "Verfügbar!",
      realTimeRate: "Tarif in Echtzeit berechnet",
      totalPrice: "Gesamtpreis",
      days: (n: number) => `${n} Tag${n !== 1 ? "e" : ""} · Dynamischer Tarif`,
      continue: "Weiter",
    },
    step3: {
      heading: "Daten des Hauptfahrers",
      continue: "Weiter",
    },
    step4: {
      askTitle: "Reisen Sie mit einem zweiten Fahrer?",
      askDesc: "Wenn Sie das Fahren teilen möchten, fügen Sie bitte die Daten des zweiten Fahrers hinzu.",
      yes: "Ja, hinzufügen",
      no: "Nein, weiter",
      heading: "Daten des zweiten Fahrers",
      cancel: "Abbrechen",
      continue: "Weiter",
    },
    step5: {
      heading: "Abholung & Rückgabe",
      mainIncomplete: "Daten des Hauptfahrers unvollständig",
      secondIncomplete: "Daten des zweiten Fahrers unvollständig",
      completeData: "Daten vervollständigen",
      summaryTitle: "Endgültige Zusammenfassung",
      summaryVehicle: "Fahrzeug",
      summaryPeriod: "Zeitraum",
      summaryPickup: "Abholung",
      summaryTotal: "Gesamt",
      toBeSet: "Festzulegen",
      loading: "Daten werden geladen...",
      confirmBooking: "Buchung bestätigen",
    },
    driver: {
      taxCode: "Steuernummer",
      optional: "(optional)",
      email: "E-Mail *",
      phone: "Telefon *",
      documentsTitle: "Dokumente (Führerschein)",
      ocrHint: "📷 Ihr Geburtsdatum und Geburtsort werden automatisch per OCR aus dem Foto Ihres Führerscheins extrahiert.",
      photoFront: "Vorderseite-Foto",
      photoBack: "Rückseite-Foto",
      uploadFront: "Vorderseite hochladen",
      uploadBack: "Rückseite hochladen",
    },
    summary: {
      categoryNone: "Kein Fahrzeug",
      live: "Live-Zusammenfassung",
      noVehicle: "Kein Fahrzeug",
      rate: "Tarif",
      seasonalRate: "Dynamischer Saisontarif",
      duration: "Dauer",
      days: (n: number) => `${n} Tag${n !== 1 ? "e" : ""}`,
      updatingPrice: "Preis wird aktualisiert...",
      realTimeRate: "Tarif in Echtzeit berechnet",
      mainDriver: "Hauptfahrer",
      secondIncluded: "Zweiter Fahrer enthalten",
      totalEstimated: "Geschätzte Gesamtsumme",
      depositNote: "Kaution und Selbstbeteiligung werden bei Vertragsabschluss je nach gewähltem Fahrzeug festgelegt.",
      stepOf: (current: number, total: number) => `Schritt ${current} von ${total}`,
    },
    mobileBar: {
      noVehicle: "Kein Fahrzeug",
      selectDates: "Daten wählen",
      perDays: (n: number) => `für ${n} Tag${n !== 1 ? "e" : ""}`,
      actionPickVehicle: "Auto wählen",
      actionContinue: "Weiter",
      actionVerify: "Prüfen",
      actionPickDates: "Daten wählen",
      actionChoose: "Wählen",
      actionConfirm: "Bestätigen",
    },
    validation: {
      selectBothDates: "Bitte wählen Sie beide Daten aus.",
      vehicleNotAvailable: "Fahrzeug für diese Daten nicht verfügbar.",
      mainLicenseMissing: "Bitte laden Sie die Führerscheinfotos des Hauptfahrers hoch.",
      secondLicenseMissing: "Bitte laden Sie die Führerscheinfotos des zweiten Fahrers hoch.",
      fillFields: (fields: string) => `Bitte alle Felder ausfüllen: ${fields}`,
      fillFieldsSecond: (fields: string) => `Bitte alle Felder des zweiten Fahrers ausfüllen: ${fields}`,
      fieldEmail: "E-Mail",
      fieldPhone: "Telefon",
      fieldLicenseFront: "Führerschein-Foto (Vorderseite)",
      fieldLicenseBack: "Führerschein-Foto (Rückseite)",
    },
    errors: {
      availabilityCheck: "Fehler bei der Verfügbarkeitsprüfung",
      availabilityFallback: "Verfügbarkeit kann nicht geprüft werden. Lokale Berechnung aktiv.",
      bookingCreate: "Fehler beim Erstellen der Buchung",
      bookingGeneric: "Fehler bei der Buchung. Bitte erneut versuchen.",
    },
  },
  fr: {
    seo: {
      titleDefault: "Réserver Location Voiture Aéroport Olbia | KS Rent Costa Smeralda",
      titleVehicle: (make: string, model: string) => `Louer ${make} ${model} à Olbia — KS Rent`,
      descDefault:
        "Réservez votre véhicule de luxe à Olbia en 2 minutes. Livraison à l'aéroport ou à l'hôtel. Caution transparente et couverture d'assurance complète.",
      descVehicle: (make: string, model: string, rate: number) =>
        `Louez ${make} ${model} en Costa Smeralda avec protection complète. À partir de €${rate}/jour chez KS Rent Olbia.`,
      breadcrumb: "Réserver",
    },
    header: {
      eyebrow: "Réservation rapide",
      titlePart1: "Réserver",
      titlePart2: "maintenant.",
      back: "Retour",
    },
    stepLabels: ["Véhicule", "Dates", "Conducteur", "Second conducteur", "Prise & Restitution"],
    step1: {
      heading: "Choisissez votre véhicule",
      categoryAll: "Tous",
      soldOut: "Épuisé",
      pricePrefix: "À partir de",
      pricePerDay: "/jour",
      seats: (n: number) => `${n} Places`,
      selectButton: "Sélectionner ce véhicule",
      notAvailable: "Non disponible",
      prevAria: "Véhicule précédent",
      nextAria: "Véhicule suivant",
      goToVehicle: (i: number) => `Aller au véhicule ${i}`,
    },
    step2: {
      heading: "Période de location",
      pickupLabel: "Prise en charge",
      returnLabel: "Restitution",
      selectDate: "Sélectionner la date",
      verifyButton: "Vérifier la disponibilité",
      checking: "Vérification de la disponibilité en temps réel...",
      unavailableMsg: "Ce véhicule est déjà réservé pour ces dates, mais nous avons d'autres solutions pour vous.",
      changeCar: "Changer de voiture",
      changeDates: "Changer les dates",
      availableTitle: "Disponible !",
      realTimeRate: "Tarif calculé en temps réel",
      totalPrice: "Prix total",
      days: (n: number) => `${n} jour${n !== 1 ? "s" : ""} · Tarif dynamique`,
      continue: "Continuer",
    },
    step3: {
      heading: "Coordonnées du conducteur principal",
      continue: "Continuer",
    },
    step4: {
      askTitle: "Voyagerez-vous avec un second conducteur ?",
      askDesc: "Si vous prévoyez de partager la conduite, ajoutez les coordonnées du second conducteur.",
      yes: "Oui, ajouter",
      no: "Non, continuer",
      heading: "Coordonnées du second conducteur",
      cancel: "Annuler",
      continue: "Continuer",
    },
    step5: {
      heading: "Prise en charge & restitution",
      mainIncomplete: "Coordonnées du conducteur principal incomplètes",
      secondIncomplete: "Coordonnées du second conducteur incomplètes",
      completeData: "Compléter les coordonnées",
      summaryTitle: "Récapitulatif final",
      summaryVehicle: "Véhicule",
      summaryPeriod: "Période",
      summaryPickup: "Prise",
      summaryTotal: "Total",
      toBeSet: "À définir",
      loading: "Chargement des données...",
      confirmBooking: "Confirmer la réservation",
    },
    driver: {
      taxCode: "Code fiscal",
      optional: "(facultatif)",
      email: "E-mail *",
      phone: "Téléphone *",
      documentsTitle: "Documents (Permis de conduire)",
      ocrHint: "📷 Votre date et lieu de naissance seront extraits automatiquement de la photo de votre permis via OCR.",
      photoFront: "Photo recto",
      photoBack: "Photo verso",
      uploadFront: "Charger recto",
      uploadBack: "Charger verso",
    },
    summary: {
      categoryNone: "Aucun véhicule",
      live: "Récapitulatif en direct",
      noVehicle: "Aucun véhicule",
      rate: "Tarif",
      seasonalRate: "Tarif dynamique saisonnier",
      duration: "Durée",
      days: (n: number) => `${n} Jour${n !== 1 ? "s" : ""}`,
      updatingPrice: "Mise à jour du prix...",
      realTimeRate: "Tarif calculé en temps réel",
      mainDriver: "Conducteur principal",
      secondIncluded: "Second conducteur inclus",
      totalEstimated: "Total estimé",
      depositNote: "La caution et la franchise seront définies au moment du contrat selon le véhicule choisi.",
      stepOf: (current: number, total: number) => `Étape ${current} sur ${total}`,
    },
    mobileBar: {
      noVehicle: "Aucun véhicule",
      selectDates: "Choisir les dates",
      perDays: (n: number) => `pour ${n} jour${n !== 1 ? "s" : ""}`,
      actionPickVehicle: "Choisir voiture",
      actionContinue: "Continuer",
      actionVerify: "Vérifier",
      actionPickDates: "Choisir dates",
      actionChoose: "Choisir",
      actionConfirm: "Confirmer",
    },
    validation: {
      selectBothDates: "Veuillez sélectionner les deux dates.",
      vehicleNotAvailable: "Véhicule non disponible pour ces dates.",
      mainLicenseMissing: "Veuillez télécharger les photos du permis du conducteur principal.",
      secondLicenseMissing: "Veuillez télécharger les photos du permis du second conducteur.",
      fillFields: (fields: string) => `Veuillez remplir tous les champs : ${fields}`,
      fillFieldsSecond: (fields: string) => `Veuillez remplir tous les champs du second conducteur : ${fields}`,
      fieldEmail: "E-mail",
      fieldPhone: "Téléphone",
      fieldLicenseFront: "Photo permis (recto)",
      fieldLicenseBack: "Photo permis (verso)",
    },
    errors: {
      availabilityCheck: "Erreur de vérification de disponibilité",
      availabilityFallback: "Impossible de vérifier la disponibilité. Calcul local actif.",
      bookingCreate: "Erreur de création de la réservation",
      bookingGeneric: "Erreur lors de la réservation. Veuillez réessayer.",
    },
  },
} as const;

const DATE_FNS_LOCALES = {
  it: itLocale,
  en: enLocale,
  de: deLocale,
  fr: frLocale,
} as const;

const NUMBER_LOCALES = {
  it: "it-IT",
  en: "en-GB",
  de: "de-DE",
  fr: "fr-FR",
} as const;

interface Props {
  lang?: Locale;
}

// Animated check mark for validated fields
const FieldCheck = ({ show }: { show: boolean }) => (
  <AnimatePresence>
    {show && (
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center"
      >
        <Check size={12} className="text-white" />
      </motion.div>
    )}
  </AnimatePresence>
);

// Step transition variants
const stepVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
  }),
};

const PrenotaOra = ({ lang = "it" }: Props) => {
  const t = TRANSLATIONS[lang];
  const dateLocale = DATE_FNS_LOCALES[lang];
  const numberLocale = NUMBER_LOCALES[lang];
  const STEP_LABELS = t.stepLabels;

  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [vehicles, setVehicles] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>(t.step1.categoryAll);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [selectedVehicle, setSelectedVehicle] = useState<any>(null);
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [startDateOpen, setStartDateOpen] = useState(false);
  const [endDateOpen, setEndDateOpen] = useState(false);

  const [mainDriver, setMainDriver] = useState({ ...initialDriverState });
  const [hasSecondDriver, setHasSecondDriver] = useState<boolean | null>(null);
  const [secondDriver, setSecondDriver] = useState({ ...initialDriverState });
  const [loading, setLoading] = useState(false);

  const [checkingAvailability, setCheckingAvailability] = useState(false);
  const [availabilityResult, setAvailabilityResult] = useState<{
    available: boolean;
    estimated_price?: number;
    days?: number;
    price_per_day?: number;
  } | null>(null);

  const [signatureOpen, setSignatureOpen] = useState(false);
  const [bookingId, setBookingId] = useState<string>("");
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  const [pickupType, setPickupType] = useState<"sede" | "custom" | null>(null);
  const [pickupLocation, setPickupLocation] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [dropoffType, setDropoffType] = useState<"sede" | "custom" | null>(null);
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [dropoffTime, setDropoffTime] = useState("");

  const summaryRef = useRef<HTMLDivElement>(null);
  const [showStickyBar, setShowStickyBar] = useState(true);

  // Load Google Maps API at top level to prevent mount/unmount crashes
  const { isLoaded: isMapLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries: LIBRARIES,
  });

  useEffect(() => {
    const el = summaryRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setShowStickyBar(!entry.isIntersecting), { threshold: 0.1 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const fetchVehicles = async () => {
      const { data, error } = await supabase.from("vehicles").select("*").order("category", { ascending: true });
      if (data) setVehicles(data);
    };
    fetchVehicles();
  }, []);

  // Pre-seleziona il veicolo se l'URL contiene ?vehicle=group_slug
  // (link in arrivo dalle pagine /flotta/[slug])
  useEffect(() => {
    if (vehicles.length === 0 || selectedVehicle) return;
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const groupSlug = params.get("vehicle");
    if (!groupSlug) return;
    // Trova il primary variant del gruppo, oppure il primo disponibile
    const match =
      vehicles.find((v) => v.group_slug === groupSlug && v.is_primary_variant && v.available) ||
      vehicles.find((v) => v.group_slug === groupSlug && v.available) ||
      vehicles.find((v) => v.group_slug === groupSlug);
    if (match) setSelectedVehicle(match);
  }, [vehicles, selectedVehicle]);

  // Group vehicles by make+model for display (1 card per model)
  const groupedVehicles = useMemo(() => {
    const groups: Record<string, { representative: any; allVehicles: any[]; isAvailable: boolean }> = {};
    for (const v of vehicles) {
      const key = `${v.make}__${v.model}`;
      if (!groups[key]) {
        groups[key] = { representative: v, allVehicles: [], isAvailable: false };
      }
      groups[key].allVehicles.push(v);
      if (v.available) {
        groups[key].isAvailable = true;
        // Prefer an available vehicle as representative (for pricing)
        if (!groups[key].representative.available) {
          groups[key].representative = v;
        }
      }
    }
    return Object.values(groups);
  }, [vehicles]);

  // Reset availability when dates change so user must re-verify
  useEffect(() => {
    setAvailabilityResult(null);
  }, [startDate, endDate]);

  // Check availability when dates are confirmed
  const checkAvailability = useCallback(async () => {
    if (!selectedVehicle || !startDate || !endDate) {
      setAvailabilityResult(null);
      return;
    }
    setCheckingAvailability(true);
    try {
      const params = new URLSearchParams({
        vehicle_id: selectedVehicle.id,
        start_date: format(startDate, "yyyy-MM-dd"),
        end_date: format(endDate, "yyyy-MM-dd"),
      });
      const res = await fetch(`${N8N_BASE}/check-availability?${params}`);
      if (!res.ok) throw new Error(t.errors.availabilityCheck);
      const data = await res.json();
      setAvailabilityResult(data);
      if (!data.available) {
        toast.error(t.validation.vehicleNotAvailable);
      }
    } catch {
      setAvailabilityResult(null);
      toast.error(t.errors.availabilityFallback);
    } finally {
      setCheckingAvailability(false);
    }
  }, [selectedVehicle, startDate, endDate, t]);

  const categories = useMemo(() => {
    const cats = new Set(groupedVehicles.map((g) => g.representative.category));
    return [t.step1.categoryAll, ...Array.from(cats)];
  }, [groupedVehicles, t.step1.categoryAll]);

  const filteredGrouped = useMemo(() => {
    if (selectedCategory === t.step1.categoryAll) return groupedVehicles;
    return groupedVehicles.filter((g) => g.representative.category === selectedCategory);
  }, [groupedVehicles, selectedCategory, t.step1.categoryAll]);

  // Dynamic pricing engine
  const calculateDynamicPrice = useCallback((vehicle: any, start: Date, end: Date): number => {
    const monthRateMap: Record<number, string> = {
      3: "rate_april",
      4: "rate_may",
      5: "rate_june",
      6: "rate_july",
      7: "rate_august",
      8: "rate_september",
      9: "rate_october",
    };
    const interval = eachDayOfInterval({ start, end: new Date(end.getTime() - 86400000) }); // exclude last day (return day)
    let sum = 0;
    for (const day of interval) {
      const m = getMonth(day);
      const rateKey = monthRateMap[m];
      const monthRate = rateKey ? vehicle[rateKey] : null;
      sum += monthRate && monthRate > 0 ? monthRate : vehicle.daily_rate || 0;
    }
    return Math.max(sum, 0);
  }, []);

  const days =
    availabilityResult?.days ?? (startDate && endDate ? Math.max(differenceInDays(endDate, startDate), 1) : 0);
  const total =
    availabilityResult?.estimated_price ??
    (selectedVehicle && startDate && endDate ? calculateDynamicPrice(selectedVehicle, startDate, endDate) : 0);
  const isAvailable = availabilityResult === null ? true : availabilityResult.available;

  const uploadFile = async (file: File | null, path: string) => {
    if (!file) return null;
    const fileExt = file.name.split(".").pop();
    const fileName = `${path}-${Math.random()}.${fileExt}`;
    const { error } = await supabase.storage.from("licenses").upload(fileName, file);
    if (error) throw error;
    const { data: publicUrl } = supabase.storage.from("licenses").getPublicUrl(fileName);
    return publicUrl.publicUrl;
  };

  const goToStep = (step: number) => {
    setDirection(step > currentStep ? 1 : -1);
    setCurrentStep(step);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleVehicleSelect = (group: { representative: any; allVehicles: any[]; isAvailable: boolean }) => {
    if (!group.isAvailable) return;
    // Pick the first available physical vehicle from the group
    const physicalVehicle = group.allVehicles.find((v) => v.available) || group.representative;
    setSelectedVehicle(physicalVehicle);
    setTimeout(() => goToStep(2), 300);
  };

  const handleDatesConfirm = async () => {
    if (!startDate || !endDate) {
      toast.error(t.validation.selectBothDates);
      return;
    }
    await checkAvailability();
  };

  // After availability check, allow user to continue
  useEffect(() => {
    // This effect handles the UI state after availability check completes
  }, [availabilityResult]);

  const handleSubmit = async () => {
    if (!selectedVehicle || !startDate || !endDate) return;
    if (!isAvailable) {
      toast.error(t.validation.vehicleNotAvailable);
      return;
    }
    if (!mainDriver.licenseFront || !mainDriver.licenseBack) {
      toast.error(t.validation.mainLicenseMissing);
      return;
    }
    if (hasSecondDriver && (!secondDriver.licenseFront || !secondDriver.licenseBack)) {
      toast.error(t.validation.secondLicenseMissing);
      return;
    }

    setLoading(true);
    try {
      const uid = mainDriver.cf || mainDriver.email.replace(/[^a-zA-Z0-9]/g, '');
      const mainFrontUrl = await uploadFile(mainDriver.licenseFront, `front-${uid}`);
      const mainBackUrl = await uploadFile(mainDriver.licenseBack, `back-${uid}`);

      let secondFrontUrl = null;
      let secondBackUrl = null;
      if (hasSecondDriver) {
        const uid2 = secondDriver.cf || secondDriver.email.replace(/[^a-zA-Z0-9]/g, '');
        secondFrontUrl = await uploadFile(secondDriver.licenseFront, `front-${uid2}`);
        secondBackUrl = await uploadFile(secondDriver.licenseBack, `back-${uid2}`);
      }

      const bookingPayload = {
        customer: {
          email: mainDriver.email,
          phone: mainDriver.phone,
          tax_code: mainDriver.cf || undefined,
        },
        vehicle_id: selectedVehicle.id,
        dates: {
          start_date: format(startDate, "yyyy-MM-dd"),
          end_date: format(endDate, "yyyy-MM-dd"),
        },
        license_urls: { front: mainFrontUrl, back: mainBackUrl },
        total_price: total,
        pickup_location: pickupLocation,
        pickup_time: pickupTime,
        dropoff_location: dropoffLocation,
        dropoff_time: dropoffTime,
        has_second_driver: !!hasSecondDriver,
        second_driver: hasSecondDriver
          ? {
              email: secondDriver.email,
              phone: secondDriver.phone,
              tax_code: secondDriver.cf || undefined,
              license_urls: { front: secondFrontUrl, back: secondBackUrl },
            }
          : null,
      };

      const res = await fetch(`${N8N_BASE}/create-booking`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingPayload),
      });

      if (!res.ok) throw new Error(t.errors.bookingCreate);
      const result = await res.json();
      const newBookingId = result.booking_id;

      if (newBookingId) {
        setBookingId(newBookingId);
        setSignatureOpen(true);
      } else {
        setIsSuccessOpen(true);
        trackBookingLead();
        trackBookingSuccess(result.booking_id || "", selectedVehicle, total, days);
        resetForm();
      }
    } catch {
      toast.error(t.errors.bookingGeneric);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setMainDriver({ ...initialDriverState });
    setSecondDriver({ ...initialDriverState });
    setHasSecondDriver(null);
    setStartDate(undefined);
    setEndDate(undefined);
    setSelectedVehicle(null);
    setAvailabilityResult(null);
    setBookingId("");
    setPickupType(null);
    setPickupLocation("");
    setPickupTime("");
    setDropoffType(null);
    setDropoffLocation("");
    setDropoffTime("");
    setCurrentStep(1);
  };

  const handleSignatureSuccess = () => {
    setSignatureOpen(false);
    setIsSuccessOpen(true);
    trackBookingLead();
    trackBookingSuccess(bookingId, selectedVehicle, total, days);
    resetForm();
  };

  const getCategoryIcon = (category: string) => {
    if (category === "Scooter/Moto") return <Bike className="w-4 h-4" />;
    if (category === "Quad") return <Settings2 className="w-4 h-4" />;
    if (category === "Supercar/Premium") return <Zap className="w-4 h-4" />;
    return <Car className="w-4 h-4" />;
  };

  // Progress percentage
  const progress =
    currentStep === 1
      ? 0
      : currentStep === 2
        ? 20
        : currentStep === 3
          ? 40
          : currentStep === 4
            ? 60
            : currentStep === 5
              ? 100
              : 0;

  // Driver validation helper
  const getDriverMissingFields = (driver: typeof initialDriverState): string[] => {
    const missing: string[] = [];
    if (!driver.email.includes("@") || !driver.email.includes(".")) missing.push(t.validation.fieldEmail);
    if (driver.phone.length < 8) missing.push(t.validation.fieldPhone);
    if (!driver.licenseFront) missing.push(t.validation.fieldLicenseFront);
    if (!driver.licenseBack) missing.push(t.validation.fieldLicenseBack);
    return missing;
  };

  const isDriverComplete = (driver: typeof initialDriverState): boolean => {
    return getDriverMissingFields(driver).length === 0;
  };

  // Driver form fields helper
  const renderDriverFormFields = (
    driver: typeof initialDriverState,
    setDriver: (d: typeof initialDriverState) => void,
  ) => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        <div className="space-y-2">
          <Label className="text-xs uppercase tracking-widest text-gray-500 dark:text-white/50">{t.driver.taxCode} <span className="text-gray-400 dark:text-white/30 normal-case tracking-normal">{t.driver.optional}</span></Label>
          <div className="relative">
            <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-white/30" />
            <Input
              maxLength={16}
              value={driver.cf}
              onChange={(e) => setDriver({ ...driver, cf: e.target.value.toUpperCase() })}
              className="pl-12 pr-12 h-14 bg-white dark:bg-[#111] border-gray-200 dark:border-white/10 focus:border-gold focus:ring-1 focus:ring-gold rounded-xl text-gray-900 dark:text-white uppercase"
            />
            <FieldCheck show={driver.cf.length === 16} />
          </div>
        </div>
        <div className="space-y-2">
          <Label className="text-xs uppercase tracking-widest text-gray-500 dark:text-white/50">{t.driver.email}</Label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-white/30" />
            <Input
              required
              type="email"
              value={driver.email}
              onChange={(e) => setDriver({ ...driver, email: e.target.value })}
              className="pl-12 pr-12 h-14 bg-white dark:bg-[#111] border-gray-200 dark:border-white/10 focus:border-gold focus:ring-1 focus:ring-gold rounded-xl text-gray-900 dark:text-white"
            />
            <FieldCheck show={driver.email.includes("@") && driver.email.includes(".")} />
          </div>
        </div>
        <div className="space-y-2">
          <Label className="text-xs uppercase tracking-widest text-gray-500 dark:text-white/50">{t.driver.phone}</Label>
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-white/30" />
            <Input
              required
              type="tel"
              value={driver.phone}
              onChange={(e) => setDriver({ ...driver, phone: e.target.value })}
              className="pl-12 pr-12 h-14 bg-white dark:bg-[#111] border-gray-200 dark:border-white/10 focus:border-gold focus:ring-1 focus:ring-gold rounded-xl text-gray-900 dark:text-white"
            />
            <FieldCheck show={driver.phone.length >= 8} />
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-gray-200 dark:border-white/5">
        <h3 className="text-sm font-bold text-gold mb-2 flex items-center gap-2">
          <ShieldCheck size={16} /> {t.driver.documentsTitle}
        </h3>
        <p className="text-gray-500 dark:text-white/40 text-xs mb-4 italic">
          {t.driver.ocrHint}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label className="text-xs uppercase tracking-widest text-gray-500 dark:text-white/50 mb-2 block">{t.driver.photoFront}</Label>
            <label
              className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 dark:border-white/20 hover:border-gold hover:bg-gold/5 rounded-xl cursor-pointer transition-colors relative overflow-hidden"
              onDragOver={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              onDrop={(e) => {
                e.preventDefault();
                e.stopPropagation();
                const file = e.dataTransfer.files?.[0];
                if (file) setDriver({ ...driver, licenseFront: file });
              }}
            >
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => setDriver({ ...driver, licenseFront: e.target.files?.[0] || null })}
              />
              {driver.licenseFront ? (
                <div className="text-center text-gold">
                  <CheckCircle2 className="mx-auto mb-2" size={24} />
                  <span className="text-xs font-bold">{driver.licenseFront.name}</span>
                </div>
              ) : (
                <div className="text-center text-gray-400 dark:text-white/40">
                  <UploadCloud className="mx-auto mb-2" size={24} />
                  <span className="text-xs uppercase font-semibold tracking-wider">{t.driver.uploadFront}</span>
                </div>
              )}
            </label>
          </div>
          <div>
            <Label className="text-xs uppercase tracking-widest text-gray-500 dark:text-white/50 mb-2 block">{t.driver.photoBack}</Label>
            <label
              className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 dark:border-white/20 hover:border-gold hover:bg-gold/5 rounded-xl cursor-pointer transition-colors relative overflow-hidden"
              onDragOver={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              onDrop={(e) => {
                e.preventDefault();
                e.stopPropagation();
                const file = e.dataTransfer.files?.[0];
                if (file) setDriver({ ...driver, licenseBack: file });
              }}
            >
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => setDriver({ ...driver, licenseBack: e.target.files?.[0] || null })}
              />
              {driver.licenseBack ? (
                <div className="text-center text-gold">
                  <CheckCircle2 className="mx-auto mb-2" size={24} />
                  <span className="text-xs font-bold">{driver.licenseBack.name}</span>
                </div>
              ) : (
                <div className="text-center text-gray-400 dark:text-white/40">
                  <UploadCloud className="mx-auto mb-2" size={24} />
                  <span className="text-xs uppercase font-semibold tracking-wider">{t.driver.uploadBack}</span>
                </div>
              )}
            </label>
          </div>
        </div>
      </div>
    </div>
  );

  // Mobile sticky bar action text
  const mobileActionLabel = () => {
    if (currentStep === 1) return t.mobileBar.actionPickVehicle;
    if (currentStep === 2)
      return startDate && endDate
        ? availabilityResult?.available
          ? t.mobileBar.actionContinue
          : t.mobileBar.actionVerify
        : t.mobileBar.actionPickDates;
    if (currentStep === 3) return t.mobileBar.actionContinue;
    if (currentStep === 4 && hasSecondDriver === null) return t.mobileBar.actionChoose;
    if (currentStep === 4) return t.mobileBar.actionContinue;
    if (currentStep === 5) return t.mobileBar.actionConfirm;
    return t.mobileBar.actionConfirm;
  };

  const handleMobileAction = () => {
    if (currentStep === 2 && startDate && endDate && !availabilityResult) {
      handleDatesConfirm();
    } else if (currentStep === 2 && availabilityResult?.available) {
      goToStep(3);
    } else if (currentStep === 3) {
      const missing = getDriverMissingFields(mainDriver);
      if (missing.length > 0) {
        toast.error(t.validation.fillFields(missing.join(", ")));
        return;
      }
      goToStep(4);
    } else if (currentStep === 4) {
      if (hasSecondDriver === false) {
        goToStep(5);
      } else if (hasSecondDriver === true) {
        const missing = getDriverMissingFields(secondDriver);
        if (missing.length > 0) {
          toast.error(t.validation.fillFieldsSecond(missing.join(", ")));
          return;
        }
        goToStep(5);
      }
    } else if (currentStep === 5) {
      handleSubmit();
    }
  };

  // SEO canonical (always points to canonical IT URL — Astro handles alternates)
  const canonical =
    lang === "it"
      ? "https://www.ksrentsardinia.com/prenotaora"
      : lang === "en"
        ? "https://www.ksrentsardinia.com/en/book-now"
        : lang === "de"
          ? "https://www.ksrentsardinia.com/de/jetzt-buchen"
          : "https://www.ksrentsardinia.com/fr/reserver";
  const breadcrumbPath =
    lang === "it" ? "/prenotaora" : lang === "en" ? "/en/book-now" : lang === "de" ? "/de/jetzt-buchen" : "/fr/reserver";

  return (
    <div className="bg-gray-50 dark:bg-[#050505] min-h-screen text-gray-900 dark:text-white pt-24 pb-40 lg:pb-16 selection:bg-gold selection:text-black overflow-x-hidden">
      <SEOHead
        title={
          selectedVehicle
            ? t.seo.titleVehicle(selectedVehicle.make, selectedVehicle.model)
            : t.seo.titleDefault
        }
        description={
          selectedVehicle
            ? t.seo.descVehicle(selectedVehicle.make, selectedVehicle.model, selectedVehicle.daily_rate)
            : t.seo.descDefault
        }
        canonical={canonical}

        jsonLd={selectedVehicle ? [buildVehicleJsonLd(selectedVehicle), buildBreadcrumb(t.seo.breadcrumb, breadcrumbPath)] : buildBreadcrumb(t.seo.breadcrumb, breadcrumbPath)}
      />

      {/* PROGRESS BAR */}
      <div className="fixed top-0 left-0 w-full z-[9998] h-1 bg-gray-200 dark:bg-white/5">
        <motion.div
          className="h-full bg-gradient-to-r from-gold via-yellow-300 to-gold"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>

      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gold/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gray-200/50 dark:bg-white/5 rounded-full blur-[150px]" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 relative z-10">
        {/* HEADER */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6 md:mb-10">
          <div className="flex items-center gap-3 md:gap-4 mb-4">
            <div className="w-6 md:w-8 h-[2px] bg-gold" />
            <span className="text-gold text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] font-semibold">
              {t.header.eyebrow}
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-display font-black leading-tight break-words">
            {t.header.titlePart1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 dark:from-white to-gray-400 dark:to-white/40">{t.header.titlePart2}</span>
          </h1>

          {/* Step indicator */}
          <div className="flex items-center gap-2 mt-6">
            {STEP_LABELS.map((label, i) => {
              const stepNum = i + 1;
              const isActive = currentStep === stepNum;
              const isDone = currentStep > stepNum;
              return (
                <div key={label} className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => isDone && goToStep(stepNum)}
                    className={cn(
                      "flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all",
                      isActive
                        ? "bg-gold text-white"
                        : isDone
                          ? "bg-gold/20 text-gold cursor-pointer hover:bg-gold/30"
                          : "bg-gray-100 dark:bg-white/5 text-gray-400 dark:text-white/30 cursor-default",
                    )}
                  >
                    {isDone ? <Check size={12} /> : <span>{stepNum}</span>}
                    <span className="hidden sm:inline">{label}</span>
                  </button>
                  {i < STEP_LABELS.length - 1 && (
                    <div className={cn("w-6 h-px", isDone ? "bg-gold/40" : "bg-gray-200 dark:bg-white/10")} />
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* BACK BUTTON */}
        {currentStep > 1 && (
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            type="button"
            onClick={() => goToStep(currentStep - 1)}
            className="flex items-center gap-2 text-gray-500 dark:text-white/50 hover:text-gold text-sm mb-6 transition-colors"
          >
            <ArrowLeft size={16} /> {t.header.back}
          </motion.button>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* LEFT COLUMN: STEP CONTENT */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait" custom={direction}>
              {/* STEP 1: VEICOLO */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  custom={direction}
                  variants={stepVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="relative overflow-hidden"
                >
                  <h2 className="text-xl md:text-2xl font-display font-bold mb-4 md:mb-6 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gold/10 text-sm border border-gold/30 text-gold">
                      1
                    </span>
                    {t.step1.heading}
                  </h2>

                  {/* Category filter pills */}
                  {vehicles.length > 0 && (
                    <div className="relative mb-6">
                      <div className="flex overflow-x-auto gap-2.5 pb-3 snap-x scrollbar-hide">
                        {categories.map((cat) => (
                          <button
                            key={cat}
                            type="button"
                            onClick={() => {
                              setSelectedCategory(cat);
                              setCarouselIndex(0);
                            }}
                            className={cn(
                              "flex-shrink-0 snap-start px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all duration-300 min-h-[44px] whitespace-nowrap",
                              selectedCategory === cat
                                ? "bg-gold text-white"
                                : "bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-white/50 hover:bg-gray-200 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-white/10",
                            )}
                          >
                            {cat !== t.step1.categoryAll && getCategoryIcon(cat)} {cat}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Centered carousel showcase */}
                  {filteredGrouped.length > 0 &&
                    (() => {
                      const safeIdx = Math.min(carouselIndex, filteredGrouped.length - 1);
                      const currentGroup = filteredGrouped[safeIdx];
                      const v = currentGroup.representative;
                      const soldOut = !currentGroup.isAvailable;
                      const imgSrc = getTransparentImage(v.make, v.model) || v.image_url;

                      return (
                        <div className="relative">
                          {/* Navigation arrows */}
                          {filteredGrouped.length > 1 && (
                            <>
                              <button
                                type="button"
                                onClick={() =>
                                  setCarouselIndex((p) => (p - 1 + filteredGrouped.length) % filteredGrouped.length)
                                }
                                className="absolute left-0 top-[30%] -translate-y-1/2 z-20 w-11 h-11 md:w-14 md:h-14 rounded-full border border-gray-300 dark:border-white/20 bg-white/60 dark:bg-black/60 backdrop-blur-sm flex items-center justify-center text-gray-600 dark:text-white/70 hover:text-gold hover:border-gold/50 transition-all"
                                aria-label={t.step1.prevAria}
                              >
                                <ChevronLeft size={24} />
                              </button>
                              <button
                                type="button"
                                onClick={() => setCarouselIndex((p) => (p + 1) % filteredGrouped.length)}
                                className="absolute right-0 top-[30%] -translate-y-1/2 z-20 w-11 h-11 md:w-14 md:h-14 rounded-full border border-gray-300 dark:border-white/20 bg-white/60 dark:bg-black/60 backdrop-blur-sm flex items-center justify-center text-gray-600 dark:text-white/70 hover:text-gold hover:border-gold/50 transition-all"
                                aria-label={t.step1.nextAria}
                              >
                                <ChevronRight size={24} />
                              </button>
                            </>
                          )}

                          {/* Floating vehicle image */}
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={`car-${safeIdx}`}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.9 }}
                              transition={{ duration: 0.4, ease: "easeOut" }}
                              className="relative mx-auto w-full max-w-sm md:max-w-lg aspect-[16/10] flex items-center justify-center px-14"
                            >
                              <OptimizedImage
                                src={imgSrc}
                                alt={getVehicleAlt(v.make, v.model)}
                                width={700}
                                className="w-full h-full object-contain drop-shadow-[0_10px_40px_rgba(212,175,55,0.12)]"
                              />
                              {soldOut && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <span className="bg-destructive text-destructive-foreground text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
                                    {t.step1.soldOut}
                                  </span>
                                </div>
                              )}
                            </motion.div>
                          </AnimatePresence>

                          {/* Pagination dots */}
                          {filteredGrouped.length > 1 && (
                            <div className="flex justify-center gap-2 mt-2 mb-4">
                              {filteredGrouped.map((_, i) => (
                                <button
                                  key={i}
                                  type="button"
                                  onClick={() => setCarouselIndex(i)}
                                  className={cn(
                                    "rounded-full transition-all duration-300",
                                    i === safeIdx ? "w-6 h-2 bg-gold" : "w-2 h-2 bg-gray-300 dark:bg-white/20 hover:bg-gray-400 dark:hover:bg-white/40",
                                  )}
                                  aria-label={t.step1.goToVehicle(i + 1)}
                                />
                              ))}
                            </div>
                          )}

                          {/* Vehicle details centered below */}
                          <AnimatePresence mode="wait">
                            <motion.div
                              key={`info-${safeIdx}`}
                              initial={{ opacity: 0, y: 15 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.3 }}
                              className="text-center mt-2"
                            >
                              <h3 className="text-2xl md:text-3xl font-black text-foreground">
                                {v.make} <span className="text-gold">{v.model}</span>
                              </h3>
                              <div className="flex items-center justify-center gap-4 mt-2 text-sm text-muted-foreground">
                                {v.category && (
                                  <span className="flex items-center gap-1">
                                    {getCategoryIcon(v.category)} {v.category}
                                  </span>
                                )}
                                {v.seats && <span>{t.step1.seats(v.seats)}</span>}
                                {v.transmission && <span>{v.transmission}</span>}
                              </div>
                              <p className="text-gold font-bold text-lg mt-3">
                                {t.step1.pricePrefix} €{v.daily_rate}
                                <span className="text-sm text-muted-foreground font-normal">{t.step1.pricePerDay}</span>
                              </p>
                              <Button
                                onClick={() => handleVehicleSelect(currentGroup)}
                                disabled={soldOut}
                                className="mt-5 bg-gold hover:bg-yellow-500 text-white font-bold text-sm uppercase tracking-widest px-8 py-3 h-auto rounded-full transition-all"
                              >
                                {soldOut ? t.step1.notAvailable : t.step1.selectButton}{" "}
                                <ArrowRight size={16} className="ml-2" />
                              </Button>
                            </motion.div>
                          </AnimatePresence>
                        </div>
                      );
                    })()}
                </motion.div>
              )}

              {/* STEP 2: DATE */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  custom={direction}
                  variants={stepVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 border-b-[3px] border-b-gold/40 dark:border-b-transparent rounded-2xl md:rounded-[2rem] p-5 sm:p-6 md:p-10 relative overflow-hidden shadow-md dark:shadow-none"
                >
                  <h2 className="text-xl md:text-2xl font-display font-bold mb-5 md:mb-6 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gold/10 text-sm border border-gold/30 text-gold">
                      2
                    </span>
                    {t.step2.heading}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-3">
                      <Label className="text-xs uppercase tracking-widest text-gray-500 dark:text-white/50">{t.step2.pickupLabel}</Label>
                      <Popover open={startDateOpen} onOpenChange={setStartDateOpen}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left bg-white dark:bg-[#111] border-gray-200 dark:border-white/10 hover:border-gold/50 hover:bg-gray-50 dark:hover:bg-[#151515] h-14 rounded-xl text-base",
                              !startDate && "text-gray-400 dark:text-white/40",
                            )}
                          >
                            <CalendarIcon className="mr-3 h-5 w-5 text-gold" />
                            {startDate ? format(startDate, "dd MMM yyyy", { locale: dateLocale }) : t.step2.selectDate}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-white dark:bg-[#111] border-gray-200 dark:border-white/10 text-gray-900 dark:text-white rounded-2xl z-50">
                          <Suspense
                            fallback={
                              <div className="p-4">
                                <Skeleton className="w-[280px] h-[280px]" />
                              </div>
                            }
                          >
                            <Calendar
                              mode="single"
                              selected={startDate}
                              onSelect={(date) => {
                                setStartDate(date);
                                if (date) {
                                  // Reset end date if it's before the new start date
                                  if (endDate && date > endDate) setEndDate(undefined);
                                  setStartDateOpen(false);
                                  setTimeout(() => setEndDateOpen(true), 200);
                                }
                              }}
                              disabled={(d) => d < new Date()}
                              className="p-4 pointer-events-auto"
                              classNames={{ day_selected: "bg-gold text-white hover:bg-gold/80" }}
                            />
                          </Suspense>
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="space-y-3">
                      <Label className="text-xs uppercase tracking-widest text-gray-500 dark:text-white/50">{t.step2.returnLabel}</Label>
                      <Popover open={endDateOpen} onOpenChange={setEndDateOpen}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left bg-white dark:bg-[#111] border-gray-200 dark:border-white/10 hover:border-gold/50 hover:bg-gray-50 dark:hover:bg-[#151515] h-14 rounded-xl text-base",
                              !endDate && "text-gray-400 dark:text-white/40",
                            )}
                          >
                            <CalendarIcon className="mr-3 h-5 w-5 text-gold" />
                            {endDate ? format(endDate, "dd MMM yyyy", { locale: dateLocale }) : t.step2.selectDate}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-white dark:bg-[#111] border-gray-200 dark:border-white/10 text-gray-900 dark:text-white rounded-2xl z-50">
                          <Suspense
                            fallback={
                              <div className="p-4">
                                <Skeleton className="w-[280px] h-[280px]" />
                              </div>
                            }
                          >
                            <Calendar
                              mode="single"
                              selected={endDate}
                              onSelect={(date) => {
                                setEndDate(date);
                                if (date) setEndDateOpen(false);
                              }}
                              defaultMonth={startDate || new Date()}
                              disabled={(d) => d < (startDate || new Date())}
                              className="p-4 pointer-events-auto"
                              classNames={{ day_selected: "bg-gold text-white hover:bg-gold/80" }}
                            />
                          </Suspense>
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>

                  {/* Availability result */}
                  {startDate && endDate && (
                    <div className="mt-6 space-y-4">
                      {!availabilityResult && !checkingAvailability && (
                        <Button
                          type="button"
                          onClick={handleDatesConfirm}
                          className="w-full h-14 bg-gold text-white hover:bg-yellow-500 font-bold uppercase tracking-wider rounded-xl"
                        >
                          {t.step2.verifyButton} <ArrowRight size={16} className="ml-2" />
                        </Button>
                      )}

                      {checkingAvailability && (
                        <div className="flex items-center justify-center gap-3 py-6 text-gray-500 dark:text-white/50">
                          <Loader2 size={20} className="animate-spin text-gold" />
                          <span>{t.step2.checking}</span>
                        </div>
                      )}

                      {availabilityResult && !availabilityResult.available && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6 text-center space-y-4"
                        >
                          <AlertCircle size={32} className="text-red-400 mx-auto" />
                          <p className="text-gray-700 dark:text-white/80">
                            {t.step2.unavailableMsg}
                          </p>
                          <div className="flex gap-3 justify-center">
                            <Button
                              type="button"
                              variant="outline"
                              onClick={() => {
                                setAvailabilityResult(null);
                                goToStep(1);
                              }}
                              className="border-gray-200 dark:border-white/10 text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 rounded-xl"
                            >
                              <Car size={14} className="mr-2" /> {t.step2.changeCar}
                            </Button>
                            <Button
                              type="button"
                              variant="outline"
                              onClick={() => {
                                setAvailabilityResult(null);
                                setStartDate(undefined);
                                setEndDate(undefined);
                              }}
                              className="border-gray-200 dark:border-white/10 text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 rounded-xl"
                            >
                              <CalendarIcon size={14} className="mr-2" /> {t.step2.changeDates}
                            </Button>
                          </div>
                        </motion.div>
                      )}

                      {availabilityResult?.available && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="bg-green-500/5 border border-green-500/20 rounded-2xl p-6 space-y-4"
                        >
                          <div className="flex items-center gap-3">
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: "spring", stiffness: 400, damping: 15 }}
                              className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center"
                            >
                              <CheckCircle2 size={20} className="text-green-400" />
                            </motion.div>
                            <div>
                              <p className="text-green-400 font-bold">{t.step2.availableTitle}</p>
                              <p className="text-gray-500 dark:text-white/50 text-xs">{t.step2.realTimeRate}</p>
                            </div>
                          </div>
                          <div className="flex items-end justify-between pt-2 border-t border-gray-200 dark:border-white/5">
                            <div>
                              <p className="text-gray-500 dark:text-white/50 text-xs">{t.step2.totalPrice}</p>
                              <p className="text-3xl font-black font-display text-gold">€{total}</p>
                            </div>
                            <p className="text-gray-500 dark:text-white/40 text-sm">
                              {t.step2.days(days)}
                            </p>
                          </div>
                          <Button
                            type="button"
                            onClick={() => goToStep(3)}
                            className="w-full h-14 bg-gold text-white hover:bg-yellow-500 font-bold uppercase tracking-wider rounded-xl"
                          >
                            {t.step2.continue} <ArrowRight size={16} className="ml-2" />
                          </Button>
                        </motion.div>
                      )}
                    </div>
                  )}
                </motion.div>
              )}

              {/* STEP 3: GUIDATORE PRINCIPALE */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  custom={direction}
                  variants={stepVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 border-b-[3px] border-b-gold/40 dark:border-b-transparent rounded-2xl md:rounded-[2rem] p-5 sm:p-6 md:p-10 relative overflow-hidden shadow-md dark:shadow-none"
                >
                  <h2 className="text-xl md:text-2xl font-display font-bold mb-5 md:mb-6 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gold/10 text-sm border border-gold/30 text-gold">
                      3
                    </span>
                    {t.step3.heading}
                  </h2>
                  {renderDriverFormFields(mainDriver, setMainDriver)}

                  <div className="mt-8">
                    <Button
                      type="button"
                      onClick={() => {
                        const missing = getDriverMissingFields(mainDriver);
                        if (missing.length > 0) {
                          toast.error(t.validation.fillFields(missing.join(", ")));
                          return;
                        }
                        goToStep(4);
                      }}
                      className="w-full h-14 bg-gold text-white hover:bg-yellow-500 font-bold uppercase tracking-wider rounded-xl"
                    >
                      {t.step3.continue} <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </div>
                </motion.div>
              )}

              {/* STEP 4: SECONDO GUIDATORE + CONFERMA */}
              {currentStep === 4 && (
                <motion.div
                  key="step4"
                  custom={direction}
                  variants={stepVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="space-y-6"
                >
                  {/* Ask about second driver */}
                  {(hasSecondDriver === null || hasSecondDriver === false) && (
                    <div className="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 border-b-[3px] border-b-gold/40 dark:border-b-transparent rounded-2xl md:rounded-[2rem] p-5 sm:p-6 md:p-10 text-center space-y-6 shadow-md dark:shadow-none">
                      <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto">
                        <Users size={28} className="text-gold" />
                      </div>
                      <h2 className="text-xl md:text-2xl font-display font-bold">
                        {t.step4.askTitle}
                      </h2>
                      <p className="text-gray-500 dark:text-white/50 max-w-md mx-auto">
                        {t.step4.askDesc}
                      </p>
                      <div className="flex gap-4 justify-center">
                        <Button
                          type="button"
                          onClick={() => setHasSecondDriver(true)}
                          className="h-14 px-8 bg-gold text-white hover:bg-yellow-500 font-bold uppercase tracking-wider rounded-xl"
                        >
                          {t.step4.yes}
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => {
                            setHasSecondDriver(false);
                            goToStep(5);
                          }}
                          className="h-14 px-8 border-gray-300 dark:border-white/10 text-gray-600 dark:text-white/70 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 rounded-xl font-bold uppercase tracking-wider"
                        >
                          {t.step4.no}
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Second driver form */}
                  {hasSecondDriver === true && (
                    <div className="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 border-b-[3px] border-b-gold/40 dark:border-b-transparent rounded-2xl md:rounded-[2rem] p-5 sm:p-6 md:p-10 shadow-md dark:shadow-none">
                      <div className="flex items-center justify-between mb-5 md:mb-6">
                        <h2 className="text-xl md:text-2xl font-display font-bold flex items-center gap-3">
                          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gold/10 text-sm border border-gold/30 text-gold">
                            4
                          </span>
                          {t.step4.heading}
                        </h2>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="text-gray-500 dark:text-white/50 hover:text-red-400 hover:bg-red-400/10 gap-1.5"
                          onClick={() => {
                            setHasSecondDriver(null);
                            setSecondDriver({ ...initialDriverState });
                          }}
                        >
                          <X className="w-4 h-4" />
                          {t.step4.cancel}
                        </Button>
                      </div>
                      {renderDriverFormFields(secondDriver, setSecondDriver)}

                      <div className="mt-8">
                        <Button
                          type="button"
                          onClick={() => {
                            const missing = getDriverMissingFields(secondDriver);
                            if (missing.length > 0) {
                              toast.error(t.validation.fillFieldsSecond(missing.join(", ")));
                              return;
                            }
                            goToStep(5);
                          }}
                          className="w-full h-14 bg-gold text-white hover:bg-yellow-500 font-bold uppercase tracking-wider rounded-xl"
                        >
                          {t.step4.continue} <ArrowRight size={16} className="ml-2" />
                        </Button>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}

              {/* STEP 5: RITIRO & CONSEGNA */}
              {currentStep === 5 && (
                <motion.div
                  key="step5"
                  custom={direction}
                  variants={stepVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 border-b-[3px] border-b-gold/40 dark:border-b-transparent rounded-2xl md:rounded-[2rem] p-5 sm:p-6 md:p-10 relative overflow-hidden shadow-md dark:shadow-none"
                >
                  <h2 className="text-xl md:text-2xl font-display font-bold mb-5 md:mb-6 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gold/10 text-sm border border-gold/30 text-gold">
                      5
                    </span>
                    {t.step5.heading}
                  </h2>

                  <LocationStep
                    pickupType={pickupType}
                    setPickupType={setPickupType}
                    pickupLocation={pickupLocation}
                    setPickupLocation={setPickupLocation}
                    pickupTime={pickupTime}
                    setPickupTime={setPickupTime}
                    dropoffType={dropoffType}
                    setDropoffType={setDropoffType}
                    dropoffLocation={dropoffLocation}
                    setDropoffLocation={setDropoffLocation}
                    dropoffTime={dropoffTime}
                    setDropoffTime={setDropoffTime}
                    isMapLoaded={isMapLoaded}
                    dropoffSedeOnly
                  />

                  {/* Validation warnings for incomplete driver data */}
                  {!isDriverComplete(mainDriver) && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-6 bg-red-500/5 border border-red-500/20 rounded-2xl p-5 flex items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-3">
                        <AlertCircle size={20} className="text-red-400 shrink-0" />
                        <p className="text-sm text-gray-600 dark:text-white/70">{t.step5.mainIncomplete}</p>
                      </div>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => goToStep(3)}
                        className="border-red-500/30 text-red-400 hover:bg-red-500/10 rounded-xl shrink-0"
                      >
                        {t.step5.completeData}
                      </Button>
                    </motion.div>
                  )}
                  {hasSecondDriver && !isDriverComplete(secondDriver) && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 bg-red-500/5 border border-red-500/20 rounded-2xl p-5 flex items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-3">
                        <AlertCircle size={20} className="text-red-400 shrink-0" />
                        <p className="text-sm text-gray-600 dark:text-white/70">{t.step5.secondIncomplete}</p>
                      </div>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => goToStep(4)}
                        className="border-red-500/30 text-red-400 hover:bg-red-500/10 rounded-xl shrink-0"
                      >
                        {t.step5.completeData}
                      </Button>
                    </motion.div>
                  )}

                  {/* Riepilogo Finale */}
                  <div className="mt-8 bg-gray-50 dark:bg-white/5 border border-gold/20 rounded-2xl p-5 sm:p-6 md:p-8 space-y-4">
                    <h3 className="text-lg font-display font-bold flex items-center gap-3">
                      <CheckCircle2 className="text-gold" size={20} />
                      {t.step5.summaryTitle}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                       <div className="bg-gray-100 dark:bg-white/5 rounded-xl p-4 min-w-0">
                        <p className="text-gray-500 dark:text-white/50 text-xs uppercase tracking-wider mb-1">{t.step5.summaryVehicle}</p>
                        <p className="font-bold truncate">
                          {selectedVehicle?.make} {selectedVehicle?.model}
                        </p>
                      </div>
                       <div className="bg-gray-100 dark:bg-white/5 rounded-xl p-4 min-w-0">
                        <p className="text-gray-500 dark:text-white/50 text-xs uppercase tracking-wider mb-1">{t.step5.summaryPeriod}</p>
                        <p className="font-bold truncate">
                          {startDate && format(startDate, "dd/MM")} — {endDate && format(endDate, "dd/MM/yyyy")}
                        </p>
                      </div>
                       <div className="bg-gray-100 dark:bg-white/5 rounded-xl p-4 min-w-0">
                        <p className="text-gray-500 dark:text-white/50 text-xs uppercase tracking-wider mb-1">{t.step5.summaryPickup}</p>
                        <p className="font-bold truncate">
                          {pickupLocation || <span className="text-gray-400 dark:text-white/30 italic">{t.step5.toBeSet}</span>}
                        </p>
                      </div>
                       <div className="bg-gray-100 dark:bg-white/5 rounded-xl p-4 min-w-0">
                        <p className="text-gray-500 dark:text-white/50 text-xs uppercase tracking-wider mb-1">{t.step5.summaryTotal}</p>
                        <p className="font-bold text-gold text-lg sm:text-xl">€{total}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button
                      type="button"
                      onClick={handleSubmit}
                      disabled={
                        loading ||
                        !pickupLocation ||
                        !pickupTime ||
                        !dropoffLocation ||
                        !dropoffTime ||
                        !isDriverComplete(mainDriver) ||
                        (hasSecondDriver === true && !isDriverComplete(secondDriver))
                      }
                      className="w-full h-16 bg-gold text-white hover:bg-yellow-500 font-black uppercase tracking-widest rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <Loader2 size={16} className="animate-spin" /> {t.step5.loading}
                        </span>
                      ) : (
                        <span className="flex items-center">
                          {t.step5.confirmBooking} <ArrowRight size={18} className="ml-3" />
                        </span>
                      )}
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT COLUMN: RIEPILOGO STICKY */}
          <div className="hidden lg:block lg:col-span-4" ref={summaryRef}>
            <div className="lg:sticky lg:top-28">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full bg-white dark:bg-[#0a0a0a] border border-gold/20 shadow-[0_8px_30px_rgba(212,175,55,0.08)] dark:shadow-[0_0_40px_rgba(212,175,55,0.05)] rounded-2xl md:rounded-[2rem] overflow-hidden"
              >
                <div className="p-6 md:p-8 border-b border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-[#111] relative min-h-[140px] flex flex-col justify-end">
                  {selectedVehicle ? (
                    <>
                      <div className="absolute inset-0 z-0 pointer-events-none">
                        <img
                          src={selectedVehicle.image_url}
                          alt="Selected"
                          className="w-full h-full object-cover opacity-40"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-50 dark:from-[#111] via-gray-50/80 dark:via-[#111]/80 to-transparent" />
                      </div>
                      <div className="relative z-10">
                        <span className="text-gold text-xs font-semibold uppercase tracking-wider">
                          {selectedVehicle.category}
                        </span>
                        <h3 className="text-2xl font-display font-bold text-gray-900 dark:text-white">
                          {selectedVehicle.make} {selectedVehicle.model}
                        </h3>
                      </div>
                    </>
                  ) : (
                    <div className="relative z-10 flex flex-col justify-center h-full">
                      <span className="text-gray-500 dark:text-white/50 text-sm font-semibold uppercase tracking-wider mb-2">
                        {t.summary.live}
                      </span>
                      <h3 className="text-xl font-display font-bold text-gray-300 dark:text-white/30">{t.summary.noVehicle}</h3>
                    </div>
                  )}
                </div>

                <div className="p-6 md:p-8 space-y-6">
                  <div className="flex justify-between items-end pb-6 border-b border-gray-200 dark:border-white/5">
                    <div>
                      <p className="text-gray-500 dark:text-white/50 text-sm mb-1">{t.summary.rate}</p>
                      <span className="text-gray-700 dark:text-white text-sm">{t.summary.seasonalRate}</span>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-500 dark:text-white/50 text-sm mb-1">{t.summary.duration}</p>
                      <p className="text-gold font-bold text-xl">
                        {t.summary.days(days)}
                      </p>
                    </div>
                  </div>

                  {checkingAvailability && (
                    <div className="flex items-center justify-center gap-2 py-2 text-gray-500 dark:text-white/40 text-sm">
                      <Loader2 size={14} className="animate-spin" /> {t.summary.updatingPrice}
                    </div>
                  )}

                  {availabilityResult?.available && (
                    <div className="flex items-center gap-2 text-xs text-green-400/70 bg-green-500/5 rounded-lg px-3 py-2">
                      <Zap size={12} /> {t.summary.realTimeRate}
                    </div>
                  )}

                  <div className="space-y-3 py-2">
                    <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-white/70">
                      <CheckCircle2 className="text-gold shrink-0" size={16} /> {t.summary.mainDriver}
                      {mainDriver.name && (
                        <span className="text-gray-400 dark:text-white/40 text-xs ml-auto">
                          {mainDriver.name} {mainDriver.surname}
                        </span>
                      )}
                    </div>
                    {hasSecondDriver && (
                      <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-white/70">
                        <Users className="text-gold shrink-0" size={16} /> {t.summary.secondIncluded}
                      </div>
                    )}
                  </div>

                  <div className="pt-6 border-t border-gray-200 dark:border-white/5 flex flex-wrap justify-between items-center gap-2">
                    <span className="text-lg text-gray-600 dark:text-white/70">{t.summary.totalEstimated}</span>
                    <span className="text-2xl sm:text-3xl md:text-4xl font-black font-display text-gold min-w-0 break-words">
                      €{total}
                    </span>
                  </div>

                  {/* Step indicator in summary */}
                  <div className="pt-4 border-t border-gray-200 dark:border-white/5">
                    <p className="text-xs text-gray-500 dark:text-white/50 leading-relaxed mb-3">
                      {t.summary.depositNote}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-400 dark:text-white/40">
                      <span>{t.summary.stepOf(currentStep, 5)}</span>
                      <span className="text-gold">{STEP_LABELS[currentStep - 1]}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* MOBILE BOOKING SUMMARY BAR */}
        <AnimatePresence>
          {showStickyBar && (
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed bottom-0 left-0 w-full z-[100] bg-white/90 dark:bg-black/90 backdrop-blur-xl border-t border-gray-200 dark:border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_-10px_40px_rgba(0,0,0,0.6)] lg:hidden"
            >
              <div className="flex items-center justify-between gap-3 px-4 py-3 pb-[max(12px,env(safe-area-inset-bottom))]">
                {/* LEFT: Vehicle + Price */}
                <div className="flex flex-col min-w-0">
                  <span className="text-xs text-gray-500 dark:text-white/50 truncate">
                    {selectedVehicle ? `${selectedVehicle.make} ${selectedVehicle.model}` : t.mobileBar.noVehicle}
                  </span>
                  {total > 0 ? (
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xl font-black font-display text-gold">
                        €{total.toLocaleString(numberLocale, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </span>
                      {days > 0 && (
                        <span className="text-[10px] text-gray-500 dark:text-white/40">
                          {t.mobileBar.perDays(days)}
                        </span>
                      )}
                    </div>
                  ) : (
                    <span className="text-sm text-gray-400 dark:text-white/30 italic">{t.mobileBar.selectDates}</span>
                  )}
                </div>

                {/* RIGHT: Dynamic action button */}
                <Button
                  type="button"
                  onClick={handleMobileAction}
                  disabled={loading || (currentStep === 2 && checkingAvailability)}
                  className="h-11 px-6 bg-gold text-white hover:bg-yellow-500 font-bold uppercase tracking-wider rounded-full transition-all duration-300 text-xs shrink-0 shadow-[0_0_20px_hsl(var(--gold)/0.3)]"
                >
                  {loading || (currentStep === 2 && checkingAvailability) ? (
                    <Loader2 size={14} className="animate-spin" />
                  ) : (
                    <span className="flex items-center gap-2">
                      {mobileActionLabel()} <ArrowRight size={14} />
                    </span>
                  )}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* SIGNATURE MODAL */}
      <Suspense fallback={null}>
        <SignatureModal
          open={signatureOpen}
          bookingId={bookingId}
          onClose={() => setSignatureOpen(false)}
          onSuccess={handleSignatureSuccess}
        />
      </Suspense>

      <SuccessModal open={isSuccessOpen} onClose={() => setIsSuccessOpen(false)} />
    </div>
  );
};

export default PrenotaOra;
