import { useState, forwardRef } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { getOriginalImageUrl } from "@/lib/imageUtils";
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  imgWidth?: number;
  imgHeight?: number;
  sizes?: string;
  showSkeleton?: boolean;
  skeletonClassName?: string;
  responsive?: boolean;
  priority?: boolean;
}

/**
 * Build a simple srcset with 400w and 800w variants.
 * If the URL already contains query params or is not a Supabase storage URL we skip srcset.
 */
const buildSrcSet = (url: string): string | undefined => {
  // Only apply srcset to Supabase public storage URLs without existing params
  if (!url.includes("supabase.co/storage/v1/object/public/") || url.includes("?")) return undefined;
  return `${url}?width=400 400w, ${url}?width=800 800w, ${url} 1200w`;
};

const OptimizedImage = forwardRef<HTMLImageElement, OptimizedImageProps>(
  (
    {
      src,
      alt,
      width,
      imgWidth,
      imgHeight,
      sizes = "(max-width: 640px) 400px, 800px",
      showSkeleton = false,
      skeletonClassName,
      responsive = false,
      priority = false,
      className,
      ...props
    },
    ref
  ) => {
    const [loaded, setLoaded] = useState(false);

    // Always use direct public URL
    const directSrc = getOriginalImageUrl(src);
    const srcSet = !priority ? buildSrcSet(directSrc) : undefined;

    return (
      <div className="relative w-full h-full">
        {showSkeleton && !loaded && (
          <Skeleton className={cn("absolute inset-0 z-10", skeletonClassName)} />
        )}
        <img
          ref={ref}
          src={directSrc}
          srcSet={srcSet}
          sizes={srcSet ? sizes : undefined}
          alt={alt}
          width={imgWidth}
          height={imgHeight}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : undefined}
          decoding={priority ? "sync" : "async"}
          onLoad={() => setLoaded(true)}
          className={cn(
            showSkeleton && !loaded ? "opacity-0" : "opacity-100",
            "transition-opacity duration-300",
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

OptimizedImage.displayName = "OptimizedImage";

export default OptimizedImage;
