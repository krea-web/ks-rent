import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { CalendarIcon, Send, User, CreditCard, MapPin, Car, ShieldCheck, CheckCircle2 } from "lucide-react";
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

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="bg-[#050505] min-h-screen text-white pt-24 pb-16 selection:bg-gold selection:text-black">
      {/* Background Decor */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-white/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Header */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-gold"></div>
            <span className="text-gold text-sm uppercase tracking-[0.3em] font-semibold">Fast Booking</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-black tracking-tighter">
            Prenota <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Ora.</span>
          </h1>
        </motion.div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* LEFT COLUMN: FORM SECTIONS */}
            <div className="lg:col-span-7 space-y-8">
              {/* Step 1: Dates */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-8 md:p-10 relative overflow-hidden group hover:border-white/20 transition-colors"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-gold/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 text-sm border border-white/10 text-gold">
                    1
                  </span>
                  Periodo di Noleggio
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Start Date */}
                  <div className="space-y-3">
                    <Label className="text-xs uppercase tracking-widest text-white/50">Ritiro</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left bg-[#111] border-white/10 hover:border-gold/50 hover:bg-[#151515] h-14 rounded-xl text-base transition-all",
                            !startDate && "text-white/40",
                          )}
                        >
                          <CalendarIcon className="mr-3 h-5 w-5 text-gold" />
                          {startDate ? format(startDate, "dd MMM yyyy", { locale: it }) : "Seleziona Data"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent
                        className="w-auto p-0 bg-[#111] border-white/10 text-white rounded-2xl overflow-hidden"
                        align="start"
                      >
                        <Calendar
                          mode="single"
                          selected={startDate}
                          onSelect={setStartDate}
                          disabled={(d) => d < new Date()}
                          className="p-4"
                          classNames={{
                            day_selected: "bg-gold text-black hover:bg-gold/80",
                            day_today: "bg-white/10 text-white",
                          }}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* End Date */}
                  <div className="space-y-3">
                    <Label className="text-xs uppercase tracking-widest text-white/50">Riconsegna</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left bg-[#111] border-white/10 hover:border-gold/50 hover:bg-[#151515] h-14 rounded-xl text-base transition-all",
                            !endDate && "text-white/40",
                          )}
                        >
                          <CalendarIcon className="mr-3 h-5 w-5 text-gold" />
                          {endDate ? format(endDate, "dd MMM yyyy", { locale: it }) : "Seleziona Data"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent
                        className="w-auto p-0 bg-[#111] border-white/10 text-white rounded-2xl overflow-hidden"
                        align="start"
                      >
                        <Calendar
                          mode="single"
                          selected={endDate}
                          onSelect={setEndDate}
                          disabled={(d) => d < (startDate || new Date())}
                          className="p-4"
                          classNames={{
                            day_selected: "bg-gold text-black hover:bg-gold/80",
                            day_today: "bg-white/10 text-white",
                          }}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
              </motion.div>

              {/* Step 2: Customer Details */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="bg-[#0a0a0a] border border-white/10 rounded-[2rem] p-8 md:p-10 relative overflow-hidden group hover:border-white/20 transition-colors"
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-gold/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 text-sm border border-white/10 text-gold">
                    2
                  </span>
                  I Tuoi Dati
                </h2>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Nome */}
                    <div className="space-y-3">
                      <Label className="text-xs uppercase tracking-widest text-white/50">Nome Completo</Label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/30" />
                        <Input
                          required
                          maxLength={100}
                          value={form.fullname}
                          onChange={(e) => setForm({ ...form, fullname: e.target.value })}
                          placeholder="Mario Rossi"
                          className="pl-12 h-14 bg-[#111] border-white/10 focus:border-gold focus:ring-1 focus:ring-gold rounded-xl text-white placeholder:text-white/20"
                        />
                      </div>
                    </div>
                    {/* CF */}
                    <div className="space-y-3">
                      <Label className="text-xs uppercase tracking-widest text-white/50">Codice Fiscale</Label>
                      <div className="relative">
                        <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/30" />
                        <Input
                          required
                          maxLength={16}
                          value={form.cf}
                          onChange={(e) => setForm({ ...form, cf: e.target.value.toUpperCase() })}
                          placeholder="RSSMRA80A01H501Z"
                          className="pl-12 h-14 bg-[#111] border-white/10 focus:border-gold focus:ring-1 focus:ring-gold rounded-xl text-white placeholder:text-white/20"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Patente */}
                    <div className="space-y-3">
                      <Label className="text-xs uppercase tracking-widest text-white/50">N. Patente</Label>
                      <div className="relative">
                        <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/30" />
                        <Input
                          required
                          maxLength={20}
                          value={form.license}
                          onChange={(e) => setForm({ ...form, license: e.target.value })}
                          placeholder="AB1234567"
                          className="pl-12 h-14 bg-[#111] border-white/10 focus:border-gold focus:ring-1 focus:ring-gold rounded-xl text-white placeholder:text-white/20"
                        />
                      </div>
                    </div>
                    {/* Residenza */}
                    <div className="space-y-3">
                      <Label className="text-xs uppercase tracking-widest text-white/50">Residenza</Label>
                      <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/30" />
                        <Input
                          required
                          maxLength={200}
                          value={form.residence}
                          onChange={(e) => setForm({ ...form, residence: e.target.value })}
                          placeholder="Via Roma 1, 00100 Roma"
                          className="pl-12 h-14 bg-[#111] border-white/10 focus:border-gold focus:ring-1 focus:ring-gold rounded-xl text-white placeholder:text-white/20"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT COLUMN: STICKY LIVE SUMMARY WIDGET */}
            <div className="lg:col-span-5 relative">
              <div className="sticky top-28 w-full bg-gradient-to-b from-[#111] to-[#0a0a0a] border border-gold/20 shadow-[0_0_40px_rgba(212,175,55,0.05)] rounded-[2rem] overflow-hidden">
                {/* Header Widget */}
                <div className="p-8 border-b border-white/5 bg-white/5">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white/50 text-sm font-semibold uppercase tracking-wider">Riepilogo Live</span>
                    <Car className="text-gold" size={24} />
                  </div>
                  <h3 className="text-2xl font-display font-bold">La tua selezione</h3>
                </div>

                {/* Body Widget */}
                <div className="p-8 space-y-6">
                  {/* Dynamic Pricing Info */}
                  <div className="flex justify-between items-end pb-6 border-b border-white/5">
                    <div>
                      <p className="text-white/50 text-sm mb-1">Tariffa Base</p>
                      <p className="text-white text-lg">
                        €{DAILY_RATE} <span className="text-white/40 text-sm">/giorno</span>
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-white/50 text-sm mb-1">Durata</p>
                      <p className="text-gold font-bold text-xl">
                        {days} Giorn{days !== 1 ? "i" : "o"}
                      </p>
                    </div>
                  </div>

                  {/* Trust Badges */}
                  <div className="space-y-3 py-2">
                    <div className="flex items-center gap-3 text-sm text-white/70">
                      <CheckCircle2 className="text-gold/80" size={16} /> Nessuna carta di credito richiesta
                    </div>
                    <div className="flex items-center gap-3 text-sm text-white/70">
                      <CheckCircle2 className="text-gold/80" size={16} /> Cancellazione flessibile
                    </div>
                    <div className="flex items-center gap-3 text-sm text-white/70">
                      <CheckCircle2 className="text-gold/80" size={16} /> Assistenza H24 inclusa
                    </div>
                  </div>

                  {/* Total Container with animation */}
                  <div className="pt-6 border-t border-white/5 flex justify-between items-center">
                    <span className="text-lg text-white/70">Totale stimato</span>
                    <motion.span
                      key={total}
                      initial={{ scale: 1.5, opacity: 0, color: "#fff" }}
                      animate={{ scale: 1, opacity: 1, color: "#D4AF37" }}
                      className="text-4xl font-black font-display text-gold"
                    >
                      €{total}
                    </motion.span>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full h-16 mt-4 bg-white text-black hover:bg-gold font-black uppercase tracking-[0.2em] rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] group"
                  >
                    {loading ? (
                      "Invio in corso..."
                    ) : (
                      <>
                        Conferma Prenotazione
                        <ArrowRight size={20} className="ml-3 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>

                  <p className="text-center text-xs text-white/30 mt-4">
                    Premendo conferma accetti i termini e le condizioni. Nessun pagamento verrà addebitato ora.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PrenotaOra;
