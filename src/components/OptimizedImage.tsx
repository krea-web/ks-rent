import { useState, forwardRef } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { getOptimizedImageUrl, getOriginalImageUrl, getResponsiveSrcSet } from "@/lib/imageUtils";
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

const OptimizedImage = forwardRef<HTMLImageElement, OptimizedImageProps>(
  (
    {
      src,
      alt,
      width = 800,
      imgWidth,
      imgHeight,
      sizes = "(max-width: 640px) 400px, (max-width: 1024px) 800px, 1200px",
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
    const [useFallback, setUseFallback] = useState(false);

    const optimizedSrc = useFallback ? getOriginalImageUrl(src) : getOptimizedImageUrl(src, width);
    const srcSet = !useFallback && responsive ? getResponsiveSrcSet(src) : undefined;

    const handleError = () => {
      if (!useFallback) {
        setUseFallback(true);
      }
    };

    return (
      <div className="relative w-full h-full">
        {showSkeleton && !loaded && (
          <Skeleton className={cn("absolute inset-0 z-10", skeletonClassName)} />
        )}
        <img
          ref={ref}
          src={optimizedSrc}
          srcSet={srcSet}
          sizes={srcSet ? sizes : undefined}
          alt={alt}
          width={imgWidth}
          height={imgHeight}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : undefined}
          decoding={priority ? "sync" : "async"}
          onLoad={() => setLoaded(true)}
          onError={handleError}
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
