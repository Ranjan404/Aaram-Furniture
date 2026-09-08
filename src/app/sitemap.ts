import type { MetadataRoute } from "next";
import { allProducts } from "@/data/products";
import { blogPosts } from "@/data/blog";
import { blogCategories } from "@/data/blog/categories";
import { canonicalUrl } from "@/lib/seo";

/**
 * Static sitemap covering every prerendered route, including one entry per
 * product design. Next serves this at /sitemap.xml.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  // Shared with the canonical tags so both agree on the root URL form.
  const url = canonicalUrl;

  const staticRoutes: MetadataRoute.Sitemap = (
    [
      { url: url("/"), changeFrequency: "monthly", priority: 1 },
      { url: url("/sofas"), changeFrequency: "monthly", priority: 0.9 },
      { url: url("/beds"), changeFrequency: "monthly", priority: 0.9 },
      { url: url("/custom-furniture"), changeFrequency: "monthly", priority: 0.9 },
      { url: url("/furniture"), changeFrequency: "monthly", priority: 0.8 },
      { url: url("/collection"), changeFrequency: "monthly", priority: 0.7 },
      { url: url("/blog"), changeFrequency: "weekly", priority: 0.8 },
      { url: url("/about"), changeFrequency: "yearly", priority: 0.6 },
      { url: url("/contact"), changeFrequency: "yearly", priority: 0.8 },
      { url: url("/privacy"), changeFrequency: "yearly", priority: 0.2 },
      { url: url("/terms"), changeFrequency: "yearly", priority: 0.2 },
    ] satisfies MetadataRoute.Sitemap
  ).map((entry) => ({ ...entry, lastModified }));

  const productRoutes: MetadataRoute.Sitemap = allProducts.map((product) => ({
    url: url(`/furniture/${product.slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const blogCategoryRoutes: MetadataRoute.Sitemap = blogCategories.map((category) => ({
    url: url(`/blog/category/${category.slug}`),
    lastModified,
    changeFrequency: "weekly",
    priority: 0.5,
  }));

  /* Articles carry their own dates rather than the build date, so a crawler is
     not told that every guide changed the last time the site was deployed. */
  const blogPostRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: url(`/blog/${post.slug}`),
    lastModified: new Date(`${post.updatedAt ?? post.publishedAt}T00:00:00Z`),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...productRoutes,
    ...blogCategoryRoutes,
    ...blogPostRoutes,
  ];
}
