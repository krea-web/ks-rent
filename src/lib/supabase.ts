import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Errore di configurazione: VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY devono essere definite nelle variabili d'ambiente.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
