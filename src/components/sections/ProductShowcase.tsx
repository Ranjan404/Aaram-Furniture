import type { ReactNode } from "react";
import type { Product } from "@/lib/types";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ProductCard } from "./ProductCard";
import { FilterableProductGrid } from "./FilterableProductGrid";

/**
 * Reusable product grid. Used for the featured sofa and bed rows on the
 * homepage and for the full listings on the category pages.
 */
export function ProductShowcase({
  id,
  eyebrow,
  title,
  lead,
  products,
  action,
  tone = "ivory",
  columns = 4,
  headingId,
  preloadFirst = false,
  filterable = false,
  filterLabel = "furniture",
}: {
  id?: string;
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  products: Product[];
  action?: ReactNode;
  tone?: "ivory" | "cream" | "wash";
  columns?: 3 | 4;
  headingId: string;
  /** Preloads the first image - only for an above-the-fold grid. */
  preloadFirst?: boolean;
  /** Adds client-side category chips above the grid. */
  filterable?: boolean;
  filterLabel?: string;
}) {
  const gridClass =
    columns === 3
      ? "grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      : "grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";

  const sizes =
    columns === 3
      ? "(max-width: 639px) 92vw, (max-width: 1023px) 46vw, 31vw"
      : "(max-width: 639px) 92vw, (max-width: 1023px) 46vw, (max-width: 1279px) 31vw, 23vw";

  return (
    <Section id={id} tone={tone} labelledBy={headingId}>
      <SectionHeading id={headingId} eyebrow={eyebrow} title={title} lead={lead} action={action} />

      {filterable ? (
        <FilterableProductGrid
          products={products}
          sizes={sizes}
          columns={columns}
          label={filterLabel}
        />
      ) : (
        <div className={`mt-12 lg:mt-14 ${gridClass}`}>
          {products.map((product, index) => (
            <Reveal key={product.id} delay={(index % 4) * 80} className="h-full">
              <ProductCard
                product={product}
                sizes={sizes}
                preload={preloadFirst && index === 0}
              />
            </Reveal>
          ))}
        </div>
      )}
    </Section>
  );
}
