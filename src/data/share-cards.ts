import type { ImageAsset } from "@/lib/types";

/**
 * ---------------------------------------------------------------------------
 * SOCIAL SHARE CARDS FOR THE FIXED ROUTES
 * ---------------------------------------------------------------------------
 * Articles and products carry their own `shareImage`, attached from their slug
 * in `src/data/blog/index.ts` and `src/data/products.ts`. The routes below have
 * no such record, so their cards are listed here.
 *
 * Every entry is a 1200x630 crop produced by
 * `scripts/generate-share-images.mjs`; the `key` is the filename under
 * `public/images/share/pages/`. Change a source photograph in that script and
 * change the alt text here in the same commit - the alt is what a screen reader
 * announces for a shared card, so it has to describe the picture.
 *
 * `/privacy` and `/terms` are deliberately absent: they keep the default cover
 * card, and a dedicated card for either would be wasted work.
 * ---------------------------------------------------------------------------
 */
const cards = {
  sofas: "Beige L-shape sectional sofa with scatter cushions in a bright living room",
  beds: "King size bed with a tall panelled headboard between two bedside lamps",
  furniture:
    "Open-plan living and dining room with a pale sofa, dining table and upholstered chairs",
  collection: "Grey sofa facing a fitted media wall in a contemporary living room",
  blog: "Light living room with a grey sofa, centre table and a floor lamp",
  contact: "Lounge seating and a low table in a brick-walled space",
  about: "Contemporary furniture showroom lounge with sofas and armchairs",
  "custom-furniture":
    "Furniture maker cutting a timber section on a mitre saw in the workshop",
} as const;

export type ShareCardKey = keyof typeof cards;

/** The share card for a fixed route, e.g. `shareCard("sofas")`. */
export function shareCard(key: ShareCardKey): ImageAsset {
  return { src: `/images/share/pages/${key}.jpg`, alt: cards[key] };
}
