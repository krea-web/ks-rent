import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarIcon, Send } from "lucide-react";
import { format, differenceInDays } from "date-fns";
import { it } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";

const DAILY_RATE = 45;

const PrenotaOra = () => {
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [form, setForm] = useState({
    fullname: "",
    cf: "",
    license: "",
    residence: "",
  });
  const [loading, setLoading] = useState(false);

  const days = startDate && endDate ? Math.max(differenceInDays(endDate, startDate), 1) : 0;
  const total = days * DAILY_RATE;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!startDate || !endDate) {
      toast.error("Seleziona le date di inizio e fine noleggio.");
      return;
    }

    setLoading(true);
    const { error } = await supabase.from("bookings").insert({
      start_date: format(startDate, "yyyy-MM-dd"),
      end_date: format(endDate, "yyyy-MM-dd"),
      customer_fullname: form.fullname.trim(),
      customer_cf: form.cf.trim(),
      customer_license: form.license.trim(),
      customer_residence: form.residence.trim(),
    });
    setLoading(false);

    if (error) {
      toast.error("Errore durante la prenotazione. Riprova.");
      console.error(error);
    } else {
      toast.success("Prenotazione confermata! Ti contatteremo presto.");
      setForm({ fullname: "", cf: "", license: "", residence: "" });
      setStartDate(undefined);
      setEndDate(undefined);
    }
  };

  return (
    <div className="pt-16">
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-gold text-sm uppercase tracking-[0.3em] font-semibold mb-3 text-center">
              Booking Engine
            </p>
            <h1 className="text-4xl md:text-5xl font-display font-black text-center mb-10">
              Prenota il tuo <span className="text-gradient-gold">veicolo</span>
            </h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Dates */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                    Data Inizio
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn("w-full justify-start text-left", !startDate && "text-muted-foreground")}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {startDate ? format(startDate, "dd MMM yyyy", { locale: it }) : "Seleziona"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={startDate}
                        onSelect={setStartDate}
                        disabled={(d) => d < new Date()}
                        className="p-3 pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div>
                  <Label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                    Data Fine
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn("w-full justify-start text-left", !endDate && "text-muted-foreground")}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {endDate ? format(endDate, "dd MMM yyyy", { locale: it }) : "Seleziona"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={endDate}
                        onSelect={setEndDate}
                        disabled={(d) => d < (startDate || new Date())}
                        className="p-3 pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              {/* Quote */}
              {days > 0 && (
                <div className="p-4 rounded-lg border border-gold/30 bg-gold/5 text-center">
                  <p className="text-sm text-muted-foreground">{days} giorn{days > 1 ? "i" : "o"} × €{DAILY_RATE}/giorno</p>
                  <p className="text-3xl font-black text-gold mt-1">€{total}</p>
                </div>
              )}

              {/* Fields */}
              <div className="space-y-4">
                <div>
                  <Label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Nome Completo</Label>
                  <Input
                    required
                    maxLength={100}
                    value={form.fullname}
                    onChange={(e) => setForm({ ...form, fullname: e.target.value })}
                    placeholder="Mario Rossi"
                  />
                </div>
                <div>
                  <Label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Codice Fiscale</Label>
                  <Input
                    required
                    maxLength={16}
                    value={form.cf}
                    onChange={(e) => setForm({ ...form, cf: e.target.value.toUpperCase() })}
                    placeholder="RSSMRA80A01H501Z"
                  />
                </div>
                <div>
                  <Label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">N. Patente</Label>
                  <Input
                    required
                    maxLength={20}
                    value={form.license}
                    onChange={(e) => setForm({ ...form, license: e.target.value })}
                    placeholder="AB1234567"
                  />
                </div>
                <div>
                  <Label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Residenza</Label>
                  <Input
                    required
                    maxLength={200}
                    value={form.residence}
                    onChange={(e) => setForm({ ...form, residence: e.target.value })}
                    placeholder="Via Roma 1, 00100 Roma"
                  />
                </div>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full gradient-gold text-primary-foreground font-bold uppercase tracking-wider py-6 glow-gold hover:opacity-90"
              >
                <Send size={16} className="mr-2" />
                {loading ? "Invio in corso..." : "Conferma Prenotazione"}
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrenotaOra;
