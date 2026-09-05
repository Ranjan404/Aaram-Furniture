import type { ReactNode } from "react";
import { galleryItems } from "@/data/gallery";
import type { GalleryItem } from "@/lib/types";
import { cn } from "@/lib/cn";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SmartImage } from "@/components/ui/SmartImage";

/**
 * Footprint per shape, measured in grid cells. Row spans (rather than aspect
 * ratios on the image) keep every cell completely filled, whatever height the
 * row ends up being.
 */
const shapeClasses: Record<GalleryItem["shape"], string> = {
  tall: "col-span-1 row-span-3",
  wide: "col-span-2 row-span-2",
  square: "col-span-1 row-span-2",
};

export function LifestyleGallery({
  items = galleryItems,
  eyebrow = "Lifestyle",
  title = "Picture it in your own rooms.",
  lead = "Real furniture only makes sense in context. Sofas that anchor a living room, beds that quiet a bedroom, tables that gather people.",
  action,
  tone = "ivory",
}: {
  items?: GalleryItem[];
  eyebrow?: string;
  title?: string;
  lead?: string;
  action?: ReactNode;
  tone?: "ivory" | "cream";
}) {
  return (
    <Section id="gallery" tone={tone} labelledBy="gallery-title" containerSize="wide">
      <SectionHeading
        id="gallery-title"
        eyebrow={eyebrow}
        title={title}
        lead={lead}
        action={action}
      />

      <div className="mt-12 grid auto-rows-[7rem] grid-flow-dense grid-cols-2 gap-3 sm:auto-rows-[9rem] sm:gap-4 lg:mt-14 lg:grid-cols-4 xl:auto-rows-[10rem]">
        {items.map((item, index) => (
          <Reveal
            key={item.id}
            delay={(index % 4) * 70}
            className={cn("h-full", shapeClasses[item.shape])}
          >
            <figure className="group relative h-full overflow-hidden rounded-(--radius-card) border border-line bg-white">
              <SmartImage
                image={item.image}
                ratio="fill"
                sizes={
                  item.shape === "wide"
                    ? "(max-width: 1023px) 96vw, 48vw"
                    : "(max-width: 1023px) 48vw, 24vw"
                }
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(20,17,13,0.55),transparent_45%)] opacity-0 transition-opacity duration-500 ease-[var(--ease-premium)] group-hover:opacity-100"
              />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 p-4 text-sm font-medium text-white opacity-0 transition-all duration-500 ease-[var(--ease-premium)] group-hover:translate-y-0 group-hover:opacity-100 sm:p-5">
                {item.caption}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
