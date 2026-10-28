import { siteConfig } from "@/config/site";
import { activeOffer } from "@/config/festive";
import type { Product } from "@/lib/types";

const inr = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

/** "₹48,500" */
export function formatInr(amount: number): string {
  return inr.format(amount);
}

export interface PriceDisplay {
  /** The price to charge today. */
  current: number;
  /** The regular price, present only while a genuine festive price applies. */
  was?: number;
  /** ISO date the festive price ends, when there is one. */
  validThrough?: string;
}

/**
 * What a product costs right now, or null when no real price has been entered.
 * A festive price applies only while `activeOffer` is running and is genuinely
 * lower than the regular one, so a stale or mistyped figure can never render
 * as a discount.
 */
export function productPrice(product: Product): PriceDisplay | null {
  if (!product.price) return null;
  const { price, festivePrice } = product;
  if (activeOffer && festivePrice && festivePrice < price) {
    return { current: festivePrice, was: price, validThrough: activeOffer.validThrough };
  }
  return { current: price };
}

/**
 * `offers` for the `Product` structured data, built from the same figure the
 * page shows. Omitted entirely while there is no price, which is the case for
 * the whole sample catalogue.
 */
export function productOfferJsonLd(product: Product, url: string) {
  const price = productPrice(product);
  if (!price) return {};
  return {
    offers: {
      "@type": "Offer",
      url,
      price: price.current,
      priceCurrency: "INR",
      // Every piece is built once the design is confirmed.
      availability: "https://schema.org/MadeToOrder",
      itemCondition: "https://schema.org/NewCondition",
      ...(price.validThrough ? { priceValidUntil: price.validThrough } : {}),
      seller: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    },
  };
}
