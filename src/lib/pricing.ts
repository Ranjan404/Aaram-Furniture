import { siteConfig } from "@/config/site";
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

/**
 * `offers` for the `Product` structured data, built from the same figure the
 * page shows. Omitted entirely while there is no price, which is the case for
 * the whole sample catalogue.
 */
export function productOfferJsonLd(product: Product, url: string) {
  if (!product.price) return {};
  return {
    offers: {
      "@type": "Offer",
      url,
      price: product.price,
      priceCurrency: "INR",
      // Every piece is built once the design is confirmed.
      availability: "https://schema.org/MadeToOrder",
      itemCondition: "https://schema.org/NewCondition",
      seller: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    },
  };
}
