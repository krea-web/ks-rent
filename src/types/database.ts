export interface Vehicle {
  id: string;
  make: string;
  model: string;
  category: string;
  daily_rate: number;
  km_current: number;
  next_revision_date: string;
  available: boolean;
  license_plate: string;
  image_url?: string;
  rate_april?: number;
  rate_may?: number;
  rate_june?: number;
  rate_july?: number;
  rate_august?: number;
  rate_september?: number;
  rate_october?: number;
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
  total_price?: number;
  created_at?: string;
  pickup_location?: string;
  pickup_time?: string;
  dropoff_location?: string;
  dropoff_time?: string;
}

export interface PricingPeriod {
  id: string;
  season: string;
  start_date: string;
  end_date: string;
}
