import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Errore di configurazione: PUBLIC_SUPABASE_URL e PUBLIC_SUPABASE_ANON_KEY devono essere definite nelle variabili d'ambiente.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
