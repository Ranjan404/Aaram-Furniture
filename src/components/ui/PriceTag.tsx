import type { Product } from "@/lib/types";
import { formatInr, productPrice } from "@/lib/pricing";
import { formatFestiveDate } from "@/config/festive";
import { cn } from "@/lib/cn";

/**
 * A product's price, rendered only when a real one has been entered. While a
 * festive price applies, the regular price is struck through beside it and the
 * last valid day is stated, so the saving is never shown without its terms.
 */
export function PriceTag({ product, size = "md" }: { product: Product; size?: "md" | "lg" }) {
  const price = productPrice(product);
  if (!price) return null;

  return (
    <div className={size === "lg" ? "mt-6" : "mt-4"}>
      <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span className={cn("font-display text-ink", size === "lg" ? "text-3xl" : "text-xl")}>
          {price.was ? <span className="sr-only">Festive price </span> : null}
          {formatInr(price.current)}
        </span>
        {price.was ? (
          <s className="text-sm text-stone">
            <span className="sr-only">Regular price </span>
            {formatInr(price.was)}
          </s>
        ) : null}
      </p>
      {price.validThrough ? (
        <p className="mt-1 text-xs font-semibold text-maroon">
          Diwali price until {formatFestiveDate(price.validThrough)}
        </p>
      ) : null}
    </div>
  );
}
