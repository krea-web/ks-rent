import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { getOptimizedImageUrl, getResponsiveSrcSet } from "@/lib/imageUtils";
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  sizes?: string;
  showSkeleton?: boolean;
  skeletonClassName?: string;
  responsive?: boolean;
  priority?: boolean;
}

const OptimizedImage = ({
  src,
  alt,
  width = 800,
  sizes = "(max-width: 640px) 400px, (max-width: 1024px) 800px, 1200px",
  showSkeleton = false,
  skeletonClassName,
  responsive = false,
  priority = false,
  className,
  ...props
}: OptimizedImageProps) => {
  const [loaded, setLoaded] = useState(false);

  const optimizedSrc = getOptimizedImageUrl(src, width);
  const srcSet = responsive ? getResponsiveSrcSet(src) : undefined;

  return (
    <div className="relative w-full h-full">
      {showSkeleton && !loaded && (
        <Skeleton className={cn("absolute inset-0 z-10", skeletonClassName)} />
      )}
      <img
        src={optimizedSrc}
        srcSet={srcSet}
        sizes={srcSet ? sizes : undefined}
        alt={alt}
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
};

export default OptimizedImage;
