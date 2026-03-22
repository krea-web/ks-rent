export const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || 'AIzaSyDmRMu8fRnGMBH3Nu8MWxMLaz-f6ykRfG8';

export const LIBRARIES: ("places")[] = ["places"];

export const OLBIA_CENTER = { lat: 40.9336, lng: 9.5094 };

export const SEDE_OPERATIVA = {
  lat: 40.922966745196916,
  lng: 9.52011508303891,
  address: "Viale Isola Bianca 38, 07026 Olbia (SS)",
  label: "Sede Operativa (Porto)",
};

export const SEDE_LEGALE = {
  lat: 40.94454753561456,
  lng: 9.497963852259709,
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
