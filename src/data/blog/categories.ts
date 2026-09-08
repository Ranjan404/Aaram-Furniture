import type { BlogCategory, BlogCategorySlug } from "@/lib/types";

/**
 * Blog categories.
 *
 * Deliberately few. A category exists because there is real content to put in
 * it and a reader would want it separated out - not because the name contains
 * a keyword. Adding one with no articles behind it produces a thin archive
 * page, which costs more than it earns.
 */
export const blogCategories: BlogCategory[] = [
  {
    slug: "buying-guides",
    title: "Furniture buying guides",
    description:
      "How to judge a piece before you commit: frames, foam, joinery, finishes and the questions worth asking.",
    metaDescription:
      "Practical furniture buying guides: how to judge a sofa frame, choose between made-to-measure and ready-made, and know what you are paying for.",
  },
  {
    slug: "sofas-living-room",
    title: "Sofas & living rooms",
    description:
      "Sizing, layout, upholstery and seat comfort for the piece a living room is planned around.",
    metaDescription:
      "Sofa and living room guides: sizing a sofa to your room, choosing between L-shape and three-seater layouts, upholstery and seat comfort explained.",
  },
  {
    slug: "beds-bedroom",
    title: "Beds & bedrooms",
    description:
      "Bed sizes, headboard heights, storage mechanisms and how to plan a bedroom around the bed.",
    metaDescription:
      "Bed and bedroom guides: Indian bed sizes, storage versus platform beds, headboard heights and how to lay out a bedroom around the bed you choose.",
  },
  {
    slug: "small-spaces",
    title: "Small spaces & apartments",
    description:
      "Furnishing 2BHK flats, builder floors and compact rooms without making them feel smaller.",
    metaDescription:
      "Furnishing small apartments and 2BHK flats: scaling furniture to compact rooms, dual-purpose pieces and getting large items through narrow access.",
  },
  {
    slug: "furniture-care",
    title: "Furniture care",
    description:
      "Keeping upholstery, leather and wood in good condition through heat, dust and monsoon humidity.",
    metaDescription:
      "How to care for sofas, beds and wooden furniture: cleaning upholstery and leather, protecting wood in humidity, and what to do seasonally.",
  },
  {
    slug: "delhi-ncr",
    title: "Delhi NCR home guides",
    description:
      "Furniture decisions shaped by how homes here are actually built, and by the weather they sit in.",
    metaDescription:
      "Furniture guides written for Delhi NCR homes: choosing materials for the climate, planning a high-rise flat and working around delivery access.",
  },
];

/**
 * Category lookup. Throws rather than returning `undefined`: every slug comes
 * from the `BlogCategorySlug` union, so a miss is a data error that should fail
 * the build loudly instead of rendering a page with a blank heading.
 */
export function blogCategory(slug: BlogCategorySlug): BlogCategory {
  const found = blogCategories.find((category) => category.slug === slug);
  if (!found) throw new Error(`Unknown blog category: ${slug}`);
  return found;
}
