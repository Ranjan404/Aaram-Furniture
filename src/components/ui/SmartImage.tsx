import Image from "next/image";
import { BLUR_DATA_URL } from "@/lib/blur";
import { cn } from "@/lib/cn";
import type { ImageAsset } from "@/lib/types";

const ratios = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  tall: "aspect-[2/3]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/10]",
  cinema: "aspect-[21/9]",
  product: "aspect-[4/3] sm:aspect-[5/4]",
  /** No intrinsic ratio - the frame fills a parent that already has a height. */
  fill: "h-full w-full",
} as const;

export type ImageRatio = keyof typeof ratios;

/**
 * Photograph inside a fixed-ratio frame.
 *
 * The frame owns the aspect ratio so the layout never shifts while images load,
 * and `object-cover` guarantees nothing is ever stretched. Every caller must
 * pass a `sizes` string that matches the real rendered width, otherwise
 * next/image ships a needlessly large file to phones.
 */
export function SmartImage({
  image,
  ratio = "landscape",
  sizes,
  priority = false,
  className,
  imageClassName,
  zoom = true,
  quality = 82,
}: {
  image: ImageAsset;
  ratio?: ImageRatio;
  sizes: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
  /** Slow zoom on hover of the closest `group` ancestor. */
  zoom?: boolean;
  quality?: number;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-cream",
        ratios[ratio],
        className,
      )}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        quality={quality}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL}
        className={cn(
          "object-cover",
          zoom &&
            "transition-transform duration-[1200ms] ease-[var(--ease-premium)] will-change-transform group-hover:scale-[1.045] motion-reduce:transition-none motion-reduce:group-hover:scale-100",
          imageClassName,
        )}
      />
    </div>
  );
}
