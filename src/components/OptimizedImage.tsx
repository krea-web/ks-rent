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

const OptimizedImage = forwardRef<HTMLImageElement, OptimizedImageProps>(
  (
    {
      src,
      alt,
      width,
      imgWidth,
      imgHeight,
      sizes,
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

    // Always use direct public URL — no transformation endpoint
    const directSrc = getOriginalImageUrl(src);

    return (
      <div className="relative w-full h-full">
        {showSkeleton && !loaded && (
          <Skeleton className={cn("absolute inset-0 z-10", skeletonClassName)} />
        )}
        <img
          ref={ref}
          src={directSrc}
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
