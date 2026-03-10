import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { Skeleton } from "@/components/ui/skeleton";

// Eager: homepage
import Index from "./pages/Index";

// Lazy: secondary routes
const ChiSiamo = lazy(() => import("./pages/ChiSiamo"));
const PrenotaOra = lazy(() => import("./pages/PrenotaOra"));
const Admin = lazy(() => import("./pages/Admin"));
const Login = lazy(() => import("./pages/Login"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const ISOLATED_ROUTES = ["/admin", "/login"];

const AppLayout = () => {
  const { pathname } = useLocation();
  const isIsolated = ISOLATED_ROUTES.includes(pathname);

  return (
    <>
      <ScrollToTop />
      {!isIsolated && <Navbar />}
      
      <main>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/chisiamo" element={<ChiSiamo />} />
          <Route path="/prenotaora" element={<PrenotaOra />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {!isIsolated && <Footer />}
      {!isIsolated && <WhatsAppCTA />}
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
