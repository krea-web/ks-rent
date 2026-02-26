export interface Vehicle {
  id: string;
  category: string;
  model: string;
  km_current: number;
  next_revision_date: string;
  is_available: boolean;
}

export interface Booking {
  id: string;
  vehicle_id: string;
  start_date: string;
  end_date: string;
  customer_fullname: string;
  customer_cf: string;
  customer_license: string;
  customer_residence: string;
}

export interface PricingPeriod {
  id: string;
  season: string;
  start_date: string;
  end_date: string;
}
