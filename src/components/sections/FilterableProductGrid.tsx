"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/lib/types";
import { cn } from "@/lib/cn";
import { ProductCard } from "./ProductCard";

/**
 * Category chips over a static product grid.
 *
 * Purely client-side filtering of data that is already on the page: no request,
 * no router state, no URL rewriting. The full grid is rendered on the server
 * first, so every design is present in the HTML for search engines and for
 * anyone browsing without JavaScript; the chips only hide cards afterwards.
 */
export function FilterableProductGrid({
  products,
  sizes,
  columns = 4,
  label,
}: {
  products: Product[];
  sizes: string;
  columns?: 3 | 4;
  /** Used in the screen-reader description of the chip group, e.g. "sofa". */
  label: string;
}) {
  const [active, setActive] = useState<string | null>(null);

  const facets = useMemo(() => {
    const counts = new Map<string, number>();
    for (const product of products) {
      for (const tag of product.tags) counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
    // Only offer a chip that actually narrows the list.
    return [...counts.entries()]
      .filter(([, count]) => count > 0 && count < products.length)
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
  }, [products]);

  const visible = active ? products.filter((p) => p.tags.includes(active)) : products;

  const gridClass =
    columns === 3
      ? "grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      : "grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";

  const chip =
    "inline-flex min-h-11 items-center gap-2 rounded-full border px-5 text-sm font-medium " +
    "transition-[background-color,border-color,color] duration-300 ease-[var(--ease-premium)]";

  if (facets.length === 0) {
    return (
      <div className={cn("mt-12 lg:mt-14", gridClass)}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} sizes={sizes} />
        ))}
      </div>
    );
  }

  return (
    <div className="mt-10 lg:mt-12">
      <div
        role="group"
        aria-label={`Filter ${label} designs`}
        className="flex flex-wrap items-center gap-2"
      >
        <button
          type="button"
          onClick={() => setActive(null)}
          aria-pressed={active === null}
          className={cn(
            chip,
            active === null
              ? "border-ink bg-ink text-ivory"
              : "border-line-strong bg-white text-graphite hover:border-ink hover:text-ink",
          )}
        >
          All designs
          <span className="text-xs opacity-60">{products.length}</span>
        </button>

        {facets.map(([tag, count]) => {
          const isActive = active === tag;
          return (
            <button
              key={tag}
              type="button"
              onClick={() => setActive(isActive ? null : tag)}
              aria-pressed={isActive}
              className={cn(
                chip,
                isActive
                  ? "border-ink bg-ink text-ivory"
                  : "border-line-strong bg-white text-graphite hover:border-ink hover:text-ink",
              )}
            >
              {tag}
              <span className="text-xs opacity-60">{count}</span>
            </button>
          );
        })}
      </div>

      {/* Announced to screen readers whenever the chip selection changes. */}
      <p aria-live="polite" className="sr-only">
        Showing {visible.length} of {products.length} {label} designs
        {active ? `, filtered by ${active}` : ""}.
      </p>

      <div className={cn("mt-8", gridClass)}>
        {visible.map((product) => (
          <ProductCard key={product.id} product={product} sizes={sizes} />
        ))}
      </div>
    </div>
  );
}
