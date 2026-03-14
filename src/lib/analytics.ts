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

    // Google Ads Conversion Tracking: Lead
    window.gtag("event", "conversion", {
      send_to: "AW-18006357660/TZlJCIfnwIgcEJztjIpD",
    });
  }
};

export const trackBookingSuccess = (
  bookingId: string,
  vehicle: { id: string; make: string; model: string; category: string },
  totalValue: number,
  days: number
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "purchase", {
      transaction_id: bookingId,
      value: totalValue,
      currency: "EUR",
      items: [
        {
          item_id: vehicle.id,
          item_name: `${vehicle.make} ${vehicle.model}`,
          item_category: vehicle.category,
          price: totalValue,
          quantity: 1,
        },
      ],
    });
  }
};
