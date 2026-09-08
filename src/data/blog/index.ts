import type { BlogCategorySlug, BlogPost } from "@/lib/types";
import { blogCategories, blogCategory } from "./categories";
import { howToChooseASofa } from "./posts/how-to-choose-a-sofa";
import { sofaSizeGuide } from "./posts/sofa-size-guide";
import { sofaFabricVsLeatherDelhiNcr } from "./posts/sofa-fabric-vs-leather-delhi-ncr";
import { howToChooseABed } from "./posts/how-to-choose-a-bed";
import { furnitureForSmallApartmentsNoida } from "./posts/furniture-for-small-apartments-noida";
import { furnishingAGurgaonApartment } from "./posts/furnishing-a-gurgaon-apartment";
import { furnishingABuilderFloorInGhaziabad } from "./posts/furnishing-a-builder-floor-in-ghaziabad";
import { furnitureCareSummerAndMonsoon } from "./posts/furniture-care-summer-and-monsoon";
import { madeToMeasureVsReadyMade } from "./posts/made-to-measure-vs-ready-made";

export { blogCategories, blogCategory };

/**
 * ---------------------------------------------------------------------------
 * ARTICLE REGISTRY
 * ---------------------------------------------------------------------------
 * Add an article by writing `./posts/<slug>.ts` and listing it here. Its page,
 * its card, its category archive entry and its sitemap entry all follow
 * automatically, exactly as adding a product does in `src/data/products.ts`.
 *
 * `publishedAt` on every launch article is the date the blog went live.
 * TODO(owner): as you publish new pieces, set each one's real date, and set
 * `updatedAt` whenever you meaningfully revise an existing article. Google
 * compares those dates against the visible ones, so they should be true.
 * ---------------------------------------------------------------------------
 */
const registry: BlogPost[] = [
  howToChooseASofa,
  sofaSizeGuide,
  sofaFabricVsLeatherDelhiNcr,
  howToChooseABed,
  furnitureForSmallApartmentsNoida,
  furnishingAGurgaonApartment,
  furnishingABuilderFloorInGhaziabad,
  furnitureCareSummerAndMonsoon,
  madeToMeasureVsReadyMade,
];

/** `/blog/category` is a real route, so it can never also be an article slug. */
const RESERVED_SLUGS = new Set(["category"]);

/* Data integrity, checked once at module load so a mistake fails the build
   rather than shipping a broken page or a duplicate URL. */
{
  const seen = new Set<string>();
  for (const post of registry) {
    if (seen.has(post.slug)) throw new Error(`Duplicate blog post slug: ${post.slug}`);
    if (RESERVED_SLUGS.has(post.slug)) throw new Error(`Reserved blog post slug: ${post.slug}`);
    seen.add(post.slug);
  }
  for (const post of registry) {
    for (const related of post.relatedPosts ?? []) {
      if (!seen.has(related)) {
        throw new Error(`"${post.slug}" lists an unknown related post: ${related}`);
      }
    }
  }
}

/**
 * Attaches each article's 1200x630 social share card, whose filename is the
 * article slug. The alt text is the hero photograph's own, because the card is
 * a crop of that same picture.
 *
 * The cards are produced by `scripts/generate-share-images.mjs`. Add or rename
 * an article and the slug changes, so re-run that script (`npm run
 * share-images`) or the card will 404.
 */
const withShareCard = (post: BlogPost): BlogPost => ({
  ...post,
  shareImage: { src: `/images/share/blog/${post.slug}.jpg`, alt: post.image.alt },
});

/** Newest first. Ties keep registry order, which is the intended reading order. */
export const blogPosts: BlogPost[] = [...registry]
  .sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt))
  .map(withShareCard);

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function postsInCategory(category: BlogCategorySlug): BlogPost[] {
  return blogPosts.filter((post) => post.category === category);
}

/** Categories that actually have articles, with their counts, for the chip row. */
export const categoriesWithCounts = blogCategories.map((category) => ({
  category,
  count: postsInCategory(category.slug).length,
}));

export const featuredPosts = blogPosts.filter((post) => post.featured);

/**
 * Curated related articles first, then others from the same category, then the
 * most recent, so a reader always has three onward links.
 */
export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  const picked = new Map<string, BlogPost>();

  const add = (candidate: BlogPost | undefined) => {
    if (!candidate || candidate.slug === post.slug || picked.size >= limit) return;
    picked.set(candidate.slug, candidate);
  };

  for (const slug of post.relatedPosts ?? []) add(getPostBySlug(slug));
  for (const candidate of postsInCategory(post.category)) add(candidate);
  for (const candidate of blogPosts) add(candidate);

  return [...picked.values()];
}

/**
 * Articles relevant to a range page, matched on tags.
 *
 * This is the product-to-blog half of the internal linking: `/sofas` asks for
 * "sofas", a product page asks for its own group. Matching on tags rather than
 * hard-coding slugs means a new article joins the right pages by itself.
 */
export function getPostsByTags(tags: string[], limit = 3): BlogPost[] {
  const wanted = tags.map((tag) => tag.toLowerCase());

  const scored = blogPosts
    .map((post) => {
      const postTags = post.tags.map((tag) => tag.toLowerCase());
      return { post, score: wanted.filter((tag) => postTags.includes(tag)).length };
    })
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, limit).map((entry) => entry.post);
}
