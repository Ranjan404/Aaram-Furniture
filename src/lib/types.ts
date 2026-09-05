/** Shared content types. All page content is data-driven from `src/data`. */

export interface ImageAsset {
  src: string;
  /** Descriptive alt text. Never leave this empty for content imagery. */
  alt: string;
}

export type CategorySlug =
  | "sofas"
  | "beds"
  | "dining"
  | "living-room"
  | "bedroom"
  | "wardrobes"
  | "tv-units"
  | "chairs"
  | "custom";

export interface Category {
  slug: CategorySlug;
  title: string;
  /** Short line shown on the category card. */
  description: string;
  image: ImageAsset;
  href: string;
  /** Sofas and beds are the hero categories and get a larger cell. */
  emphasis: "primary" | "secondary";
  /** Example pieces listed under the card title. */
  pieces: string[];
}

export type ProductGroup = "sofas" | "beds" | "more";

export interface Product {
  id: string;
  /** URL segment, derived from `name`. See `src/lib/slug.ts`. */
  slug: string;
  name: string;
  /** e.g. "Three-seater · Fabric" */
  style: string;
  /** Visible category label. */
  category: string;
  group: ProductGroup;
  description: string;
  image: ImageAsset;
  /** Two to four short specification-style bullets. */
  highlights: string[];
  /**
   * Short facets used by the category chips on the listing pages, e.g.
   * "L-shape", "Leather", "Storage". Keep them consistent within a group -
   * the chip row is built from the union of the tags actually present.
   */
  tags: string[];
  /**
   * Optional, only rendered when present. Deliberately left undefined for the
   * sample catalogue: no prices are invented anywhere in this project.
   */
  price?: string;
  /** Small badge, e.g. "Made to order". */
  badge?: string;
  featured?: boolean;
}

export interface GalleryItem {
  id: string;
  image: ImageAsset;
  caption: string;
  /** Controls the cell footprint in the masonry-style gallery grid. */
  shape: "tall" | "wide" | "square";
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  location?: string;
  /** The piece they bought, e.g. "L-shape sectional". */
  product?: string;
  /**
   * Whole stars out of 5. Only set this from a rating the customer actually
   * gave you - it is rendered as a visible claim.
   */
  rating?: 1 | 2 | 3 | 4 | 5;
  /** Overrides the initials shown in the avatar. Defaults to the name. */
  initials?: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: "design" | "craft" | "comfort" | "custom" | "consult" | "delivery";
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

/**
 * One half of the sofa / bed split feature. These are the two categories the
 * business leads with, so they get their own richer shape rather than reusing
 * `Category`: a promise line, supporting points and their own WhatsApp opener.
 */
export interface PrimaryFeature {
  slug: "sofas" | "beds";
  /** Card title, e.g. "Sofas". */
  title: string;
  /** Four or five words that sum the category up, e.g. "Designed for living." */
  promise: string;
  description: string;
  href: string;
  image: ImageAsset;
  /** Three short facets listed under the copy. */
  points: string[];
  /** Context-varied CTA label - never the same wording on both halves. */
  ctaLabel: string;
  /** Completes "Ask about ..." on the WhatsApp button. Lower case. */
  enquiryLabel: string;
}
