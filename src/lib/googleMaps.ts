export const GOOGLE_MAPS_API_KEY = "AIzaSyDmRMu8fRnGMBH3Nu8MWxMLaz-f6ykRfG8";

export const LIBRARIES: ("places")[] = ["places"];

export const OLBIA_CENTER = { lat: 40.9230, lng: 9.4980 };

export const SEDE_OPERATIVA = {
  lat: 40.9243,
  lng: 9.5015,
  address: "Viale Isola Bianca 38, 07026 Olbia (SS)",
  label: "Sede Operativa",
};

export const SEDE_LEGALE = {
  lat: 40.9178,
  lng: 9.5042,
  address: "Viale Aldo Moro 367, 07026 Olbia (SS)",
  label: "Sede Legale",
};

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
