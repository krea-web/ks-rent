import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import MobileStickyCTA from "@/components/MobileStickyCTA";

const FAVICON_URL = "https://zgytnkimjpoosvshfopz.supabase.co/storage/v1/object/public/asset/ksrent-favicon.webp";

const GlobalLoader = () => (
  <div className="min-h-screen bg-black flex items-center justify-center">
    <motion.img
      src={FAVICON_URL}
      alt="Caricamento KS Rent..."
      className="w-14 h-14 object-contain"
      animate={{ opacity: [0.3, 1, 0.3], scale: [0.9, 1.1, 0.9] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
);

// Eager: homepage
import Index from "./pages/Index";

// Lazy: secondary routes
const ChiSiamo = lazy(() => import("./pages/ChiSiamo"));
const PrenotaOra = lazy(() => import("./pages/PrenotaOra"));
const NoleggioPortoOlbia = lazy(() => import("./pages/NoleggioPortoOlbia"));
const NoleggioAeroportoOlbia = lazy(() => import("./pages/NoleggioAeroportoOlbia"));
const NoleggioCostaSmeralda = lazy(() => import("./pages/NoleggioCostaSmeralda"));
const Admin = lazy(() => import("./pages/Admin"));
const Login = lazy(() => import("./pages/Login"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const ISOLATED_ROUTES = ["/admin", "/login"];
const HIDE_STICKY_CTA_ROUTES = ["/prenotaora"];

const AppLayout = () => {
  const { pathname } = useLocation();
  const isIsolated = ISOLATED_ROUTES.includes(pathname);
  const hideStickyCTA = HIDE_STICKY_CTA_ROUTES.includes(pathname);

  return (
    <>
      <ScrollToTop />
      {!isIsolated && <Navbar />}
      
      <main>
        <Suspense fallback={<GlobalLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/chisiamo" element={<ChiSiamo />} />
            <Route path="/prenotaora" element={<PrenotaOra />} />
            <Route path="/noleggio-auto-porto-olbia" element={<NoleggioPortoOlbia />} />
            <Route path="/noleggio-auto-aeroporto-olbia" element={<NoleggioAeroportoOlbia />} />
            <Route path="/noleggio-auto-costa-smeralda" element={<NoleggioCostaSmeralda />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      {!isIsolated && <Footer />}
      {!isIsolated && <WhatsAppCTA />}
      {!isIsolated && !hideStickyCTA && <MobileStickyCTA />}
    </>
  );
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppLayout />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
