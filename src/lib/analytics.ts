export const trackWhatsAppClick = () => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "generate_lead", {
      method: "WhatsApp",
      event_category: "Contact",
      event_label: "Chat WhatsApp Aperta",
    });
  }
};

export const trackBookingLead = () => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "generate_lead", {
      currency: "EUR",
      value: 100.0,
      event_label: "Prenotazione Veicolo Completata",
      event_category: "Leads",
      form_name: "Modulo Principale",
    });
  }
};
