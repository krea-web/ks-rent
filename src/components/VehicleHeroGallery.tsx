import { useState } from "react";
import VariantCarousel from "@/components/VariantCarousel";
import { getVehicleAlt } from "@/lib/imageUtils";
import { variantImage, variantLabel, type VehicleLike } from "@/lib/vehicleVariants";

interface HeroVariant {
  id: string;
  make?: string | null;
  model?: string | null;
  color?: string | null;
  available?: boolean | null;
  transparent_image_url?: string | null;
  image_url?: string | null;
}

interface Props {
  variants: HeroVariant[];
  switchLabel?: string;
  altBase?: string;
}

/**
 * Hero interattivo per le pagine veicolo (/flotta/[slug]).
 * Isola montata da Astro: riceve SOLO dati serializzabili (no funzioni) e gestisce
 * internamente immagine/etichette. Lo switch variante/colore aggiorna la foto.
 * Usato solo quando il gruppo ha piu di una variante (progressive enhancement;
 * le stesse immagini restano comunque presenti SSR nella sezione galleria).
 */
export default function VehicleHeroGallery({ variants, switchLabel, altBase }: Props) {
  const [selectedId, setSelectedId] = useState<string>(
    variants.find((v) => v.available)?.id ?? variants[0]?.id ?? "",
  );

  if (!variants || variants.length === 0) return null;

  return (
    <div className="relative">
      <VariantCarousel<HeroVariant>
        variants={variants}
        selectedId={selectedId}
        onVariantChange={(v) => setSelectedId(v.id)}
        getImage={(v) => variantImage(v as VehicleLike) || String(v.image_url ?? "")}
        getAlt={(v) => altBase || getVehicleAlt(String(v.make ?? ""), String(v.model ?? ""))}
        getLabel={(v) => variantLabel(v as VehicleLike, variants as VehicleLike[])}
        switchLabel={switchLabel}
        aspectClassName="aspect-[4/3]"
        imgClassName="object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)]"
        priority
      />
    </div>
  );
}
