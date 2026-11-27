import type { Product } from "@/lib/types";
import { formatInr } from "@/lib/pricing";
import { cn } from "@/lib/cn";

/** A product's price, rendered only when a real one has been entered. */
export function PriceTag({ product, size = "md" }: { product: Product; size?: "md" | "lg" }) {
  if (!product.price) return null;

  return (
    <p
      className={cn(
        "font-display text-ink",
        size === "lg" ? "mt-6 text-3xl" : "mt-4 text-xl",
      )}
    >
      {formatInr(product.price)}
    </p>
  );
}
