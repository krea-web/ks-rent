import { createClient } from "@supabase/supabase-js";

// Recupero delle variabili d'ambiente con FALLBACK diretto per l'editor di Lovable
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://zgytnkimjpoosvshfopz.supabase.co";
const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpneXRua2ltanBvb3N2c2hmb3B6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIxMzgxNjIsImV4cCI6MjA4NzcxNDE2Mn0.aXADl6M5aQlZGEDDI3-5qXgE7gbVAds8hSH8qTFfPTk";

// Controllo di sicurezza: se per qualche motivo assurdo mancano sia le env che i fallback
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Errore di configurazione: VITE_SUPABASE_URL o VITE_SUPABASE_ANON_KEY non sono definite.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
