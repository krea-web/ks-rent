export const GOOGLE_MAPS_API_KEY = import.meta.env.PUBLIC_GOOGLE_MAPS_API_KEY || '';

export const LIBRARIES: ("places")[] = ["places"];

/**
 * Singleton loader del Google Maps JS SDK. Evita il double-load che, in React
 * 18 + StrictMode, rompe `useJsApiLoader` di @react-google-maps/api con
 * l'errore "Element with name 'gmp-internal-*' already defined" e il crash
 * "Cannot read properties of undefined (reading 'gK')".
 *
 * Riusabile da qualsiasi componente: la promise viene cached al primo invocazione.
 */
let mapsPromise: Promise<void> | null = null;

export function loadGoogleMaps(): Promise<void> {
  if (mapsPromise) return mapsPromise;
  if (typeof window === "undefined") {
    return Promise.reject(new Error("loadGoogleMaps: window non disponibile (SSR)"));
  }
  // Gia' presente sulla pagina (caricato fuori dal nostro flow)
  if ((window as any).google?.maps?.places) {
    mapsPromise = Promise.resolve();
    return mapsPromise;
  }

  mapsPromise = new Promise<void>((resolve, reject) => {
    const SCRIPT_ID = "google-maps-js-sdk";
    const existing = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", reject, { once: true });
      return;
    }
    const libs = LIBRARIES.join(",");
    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(
      GOOGLE_MAPS_API_KEY,
    )}&libraries=${libs}&v=weekly&loading=async`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => {
      mapsPromise = null; // permetti un retry futuro su crash
      reject(new Error("Failed to load Google Maps JS SDK"));
    };
    document.head.appendChild(script);
  });

  return mapsPromise;
}

export const OLBIA_CENTER = { lat: 40.9336, lng: 9.5094 };

export const SEDE_OPERATIVA = {
  lat: 40.922966745196916,
  lng: 9.52011508303891,
  address: "Viale Isola Bianca 38, 07026 Olbia (SS)",
  label: "Sede Operativa (Porto)",
};

export const SEDE_LEGALE = {
  lat: 40.944573313362326,
  lng: 9.49789720326003,
  address: "Viale Aldo Moro 367, 07026 Olbia (SS)",
  label: "Sede Legale",
};

export const SEDE_LEGALE_MAPS_URL = "https://www.google.com/maps/search/?api=1&query=KS+RENT+SRL,+Viale+Aldo+Moro,+367,+Olbia";
export const SEDE_LEGALE_EMBED_URL = "https://maps.google.com/maps?q=KS%20RENT%20SRL%20Viale%20Aldo%20Moro%20367%20Olbia&t=&z=15&ie=UTF8&iwloc=&output=embed";

export const DARK_MAP_STYLE = [
  { elementType: "geometry", stylers: [{ color: "#1a1a2e" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#1a1a2e" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#8a8a8a" }] },
  { featureType: "administrative", elementType: "geometry", stylers: [{ visibility: "off" }] },
  { featureType: "administrative.locality", elementType: "labels.text.fill", stylers: [{ color: "#d4af37" }] },
  { featureType: "poi", stylers: [{ visibility: "off" }] },
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#2a2a3e" }] },
  { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#1a1a2e" }] },
  { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#3a3a4e" }] },
  { featureType: "road.highway", elementType: "geometry.stroke", stylers: [{ color: "#1a1a2e" }] },
  { featureType: "road.arterial", elementType: "geometry", stylers: [{ color: "#2e2e42" }] },
  { featureType: "road.local", elementType: "geometry", stylers: [{ color: "#252538" }] },
  { featureType: "transit", stylers: [{ visibility: "off" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#0e0e1a" }] },
  { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#4a4a6a" }] },
];

export const TIME_SLOTS = Array.from({ length: 31 }, (_, i) => {
  const hour = Math.floor(i / 2) + 7;
  const min = i % 2 === 0 ? "00" : "30";
  return `${String(hour).padStart(2, "0")}:${min}`;
});
