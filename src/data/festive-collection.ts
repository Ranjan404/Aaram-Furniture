import { festiveConfig } from "@/config/festive";
import type { Product } from "@/lib/types";
import { allProducts } from "./products";

/**
 * The Diwali collection: real designs from the catalogue, picked by id in
 * `src/config/festive.ts`. Nothing is added to the range for the festival; the
 * same product pages and URLs serve it all year. An unknown id fails the build
 * rather than silently shrinking the collection.
 */
export const festiveCollection: Product[] = festiveConfig.collectionIds.map((id) => {
  const product = allProducts.find((item) => item.id === id);
  if (!product) throw new Error(`festiveConfig.collectionIds lists an unknown product: ${id}`);
  return product;
});
