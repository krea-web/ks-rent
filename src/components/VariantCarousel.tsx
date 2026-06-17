import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import OptimizedImage from "@/components/OptimizedImage";
import { cn } from "@/lib/utils";
import type { VehicleLike } from "@/lib/vehicleVariants";

interface VariantCarouselProps<T extends VehicleLike = VehicleLike> {
  variants: T[];
  /** id della variante selezionata (controllato dall'esterno) */
  selectedId?: string;
  /** chiamata quando cambia la variante (click bottone o swipe/auto-scroll) */
  onVariantChange?: (variant: T) => void;
  getImage: (v: T) => string;
  getAlt: (v: T) => string;
  getLabel: (v: T) => string;
  /** label accessibile del gruppo di bottoni, es. "Cambia colore" */
  switchLabel?: string;
  /** scorrimento automatico delle immagini (default true) */
  autoPlay?: boolean;
  autoPlayDelayMs?: number;
  /** mostra i bottoni di switch variante (default true) */
  showButtons?: boolean;
  /** classe aspect-ratio applicata a ogni slide (default aspect-[16/10]) */
  aspectClassName?: string;
  imgClassName?: string;
  imgWidth?: number;
  imgHeight?: number;
  priority?: boolean;
  className?: string;
}

/**
 * Carosello immagini delle varianti di un veicolo + bottoni per switchare colore/variante.
 * Le immagini scorrono in automatico (pausa su hover/focus, rispetta prefers-reduced-motion);
 * cliccando un bottone variante si scorre alla relativa immagine e si notifica il parent.
 * Riusa il primitivo Embla (ui/carousel.tsx) e OptimizedImage (srcset Supabase).
 */
function VariantCarousel<T extends VehicleLike = VehicleLike>({
  variants,
  selectedId,
  onVariantChange,
  getImage,
  getAlt,
  getLabel,
  switchLabel = "Varianti",
  autoPlay = true,
  autoPlayDelayMs = 3800,
  showButtons = true,
  aspectClassName = "aspect-[16/10]",
  imgClassName,
  imgWidth = 800,
  imgHeight = 500,
  priority = false,
  className,
}: VariantCarouselProps<T>) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useRef(false);
  // Tiene il valore live di selectedId per l'handler Embla (evita stale closure)
  const selectedIdRef = useRef(selectedId);
  selectedIdRef.current = selectedId;

  const multi = variants.length > 1;

  const selectedIndex = useMemo(() => {
    if (!selectedId) return -1;
    return variants.findIndex((v) => v.id === selectedId);
  }, [selectedId, variants]);

  // Sync: quando cambia la selezione esterna, scorri all'immagine corrispondente.
  useEffect(() => {
    if (!api || selectedIndex < 0) return;
    if (api.selectedScrollSnap() !== selectedIndex) api.scrollTo(selectedIndex);
  }, [api, selectedIndex]);

  // Su select di Embla (swipe o auto-scroll) aggiorna l'indice e notifica il parent.
  useEffect(() => {
    if (!api) return;
    const onSelect = () => {
      const idx = api.selectedScrollSnap();
      setCurrent(idx);
      const v = variants[idx];
      if (v && v.id !== selectedIdRef.current) onVariantChange?.(v);
    };
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [api, variants]);

  // prefers-reduced-motion (letto lato client per evitare mismatch di hydration).
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  // Auto-scroll leggero, in pausa su hover/focus/interazione.
  useEffect(() => {
    if (!api || !multi || !autoPlay || paused || reducedMotion.current) return;
    const id = window.setInterval(() => {
      if (!api) return;
      if (api.canScrollNext()) api.scrollNext();
      else api.scrollTo(0);
    }, autoPlayDelayMs);
    return () => window.clearInterval(id);
  }, [api, multi, autoPlay, paused, autoPlayDelayMs]);

  const handleButton = useCallback(
    (v: T, idx: number) => {
      onVariantChange?.(v);
      if (api) api.scrollTo(idx);
      else setCurrent(idx);
    },
    [api, onVariantChange],
  );

  return (
    <div
      className={cn("relative", className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <Carousel opts={{ loop: multi, align: "start" }} setApi={setApi} className="w-full">
        <CarouselContent className="ml-0">
          {variants.map((v) => (
            <CarouselItem key={v.id} className={cn("pl-0 basis-full", aspectClassName)}>
              <OptimizedImage
                src={getImage(v)}
                alt={getAlt(v)}
                width={imgWidth}
                imgWidth={imgWidth}
                imgHeight={imgHeight}
                responsive
                showSkeleton
                priority={priority}
                skeletonClassName="rounded-none"
                className={cn("w-full h-full", imgClassName ?? "object-cover")}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Bottoni switch variante / colore */}
      {showButtons && multi && (
        <div
          className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex flex-wrap items-center justify-center gap-2 max-w-[90%]"
          role="group"
          aria-label={switchLabel}
        >
          {variants.map((v, idx) => {
            const active = selectedIndex >= 0 ? v.id === selectedId : idx === current;
            const unavailable = !v.available;
            return (
              <button
                key={v.id}
                type="button"
                onClick={() => handleButton(v, idx)}
                aria-pressed={active}
                aria-label={`${switchLabel}: ${getLabel(v)}`}
                className={cn(
                  "px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all duration-300 backdrop-blur-md border min-h-[32px]",
                  active
                    ? "bg-gold text-black border-gold shadow-md"
                    : "bg-black/55 text-white/90 border-white/15 hover:bg-black/75",
                  unavailable && "opacity-60",
                )}
              >
                {getLabel(v)}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default VariantCarousel;
