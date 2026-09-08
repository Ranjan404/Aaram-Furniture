import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import type { BlogCategory, BlogPost, ImageAsset, Product } from "@/lib/types";
import { postTimestamp, readingMinutes, wordCount } from "@/lib/blog";

/**
 * Share images live under this directory and are all cropped to exactly
 * SHARE_W x SHARE_H, which is why their dimensions can be declared. A content
 * photograph passed straight through is a different shape every time, so its
 * dimensions are deliberately left unstated rather than guessed at - telling a
 * platform a portrait photograph is 1200x630 makes it crop the card wrongly.
 */
const SHARE_DIR = "/images/share/";
const SHARE_W = 1200;
const SHARE_H = 630;

/** The default share card: the one image whose dimensions were always known. */
const OG_COVER: ImageAsset = {
  src: "/images/og-cover.jpg",
  alt: `${siteConfig.name} - premium sofas, beds and custom furniture`,
};

const mimeTypes: Record<string, string> = {
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png",
  webp: "image/webp",
  avif: "image/avif",
};

/**
 * One share-image descriptor, used for `og:image*` and `twitter:image*` alike
 * so the two surfaces cannot describe the same picture differently.
 *
 * `alt` comes from the `ImageAsset`, which means it describes the photograph
 * rather than the business. Every asset in `src/data` already carries real alt
 * text; passing only a `src` here used to throw it away.
 */
function shareImage(image: ImageAsset) {
  const sized = image.src === OG_COVER.src || image.src.startsWith(SHARE_DIR);
  const type = mimeTypes[image.src.split(".").pop()?.toLowerCase() ?? ""];

  return {
    url: image.src,
    ...(sized ? { width: SHARE_W, height: SHARE_H } : {}),
    alt: image.alt,
    ...(type ? { type } : {}),
  };
}

/**
 * Canonical URL for a route. The site root is emitted without a trailing slash
 * so that canonical tags and the sitemap agree on a single form.
 */
export function canonicalUrl(path: string): string {
  return path === "/" ? siteConfig.url : new URL(path, siteConfig.url).toString();
}

/**
 * Builds page metadata from the shared site configuration so titles,
 * canonicals and social cards stay consistent across every route.
 */
export function buildMetadata({
  title,
  description,
  path,
  image = OG_COVER,
  noIndex = false,
  article,
}: {
  title: string;
  description: string;
  /** Route path beginning with "/" - used for the canonical URL. */
  path: string;
  /**
   * The share card. Pass the whole `ImageAsset` so its alt text travels with
   * it: `og:image:alt` and `twitter:image:alt` are both taken from `alt`.
   * Prefer a 1200x630 crop from `src/data/share-cards.ts` or a `shareImage`
   * field over the full-resolution content photograph.
   */
  image?: ImageAsset;
  noIndex?: boolean;
  /**
   * Present only for editorial pages. Switches the Open Graph type from
   * `website` to `article` and adds the publication metadata that social
   * platforms and Google Discover read.
   */
  article?: {
    publishedTime: string;
    modifiedTime?: string;
    section?: string;
    tags?: string[];
  };
}): Metadata {
  const url = canonicalUrl(path);
  // The homepage passes a title that already carries the brand; only append it
  // when it is missing, so social cards never read "Brand | ... | Brand".
  const socialTitle = title.includes(siteConfig.name)
    ? title
    : `${title} | ${siteConfig.name}`;

  const card = shareImage(image);

  const shared = {
    url,
    siteName: siteConfig.name,
    title: socialTitle,
    description,
    locale: "en_IN",
    images: [card],
  };

  const openGraph: Metadata["openGraph"] = article
    ? {
        ...shared,
        type: "article",
        publishedTime: article.publishedTime,
        ...(article.modifiedTime ? { modifiedTime: article.modifiedTime } : {}),
        authors: [siteConfig.name],
        ...(article.section ? { section: article.section } : {}),
        ...(article.tags?.length ? { tags: article.tags } : {}),
      }
    : { ...shared, type: "website" };

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph,
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      /* An object, not a bare string: a string carries no alt, which is why
         `twitter:image:alt` was previously absent from every page. */
      images: [card],
    },
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
  };
}

/** Absolute URL helper for structured data. */
function abs(path: string) {
  return new URL(path, siteConfig.url).toString();
}

/**
 * LocalBusiness (FurnitureStore) structured data.
 *
 * Only facts present in `siteConfig` are emitted. Address, opening hours and
 * service area are omitted while unset, and no rating, review count, price
 * range or award is included anywhere because none has been verified.
 */
export function furnitureStoreJsonLd() {
  const { address, serviceArea, serviceAreas, social } = siteConfig;
  const sameAs = Object.values(social).filter((v): v is string => Boolean(v));

  return {
    "@context": "https://schema.org",
    "@type": "FurnitureStore",
    "@id": `${siteConfig.url}#business`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    telephone: siteConfig.phone.e164,
    image: abs(OG_COVER.src),
    ...(siteConfig.email ? { email: siteConfig.email } : {}),
    ...(address
      ? {
          address: {
            "@type": "PostalAddress",
            streetAddress: address.streetAddress,
            addressLocality: address.locality,
            addressRegion: address.region,
            postalCode: address.postalCode,
            addressCountry: address.country,
          },
        }
      : {}),
    /* Prefer the itemised list so the individual towns are stated; fall back to
       the single display phrase. Omitted entirely when neither is set. */
    ...(serviceAreas?.length
      ? { areaServed: serviceAreas.map((name) => ({ "@type": "Place", name })) }
      : serviceArea
        ? { areaServed: { "@type": "Place", name: serviceArea } }
        : {}),
    ...(sameAs.length ? { sameAs } : {}),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: siteConfig.phone.e164,
      availableLanguage: ["en", "hi"],
    },
    /* An `OfferCatalog` whose leaves are `Offer`, which is the shape
       schema.org defines - the leaves used to be nested `OfferCatalog` nodes,
       which reads as eight empty sub-catalogues. No `price` or
       `priceSpecification` appears on any offer: every piece is quoted per
       piece, so there is no price to publish. */
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Furniture categories",
      itemListElement: [
        "Sofas",
        "Beds",
        "Dining tables and dining sets",
        "Centre and side tables",
        "TV units",
        "Wardrobes",
        "Chairs and recliners",
        "Custom furniture",
      ].map((name, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: { "@type": "Service", name, serviceType: "Made-to-order furniture" },
      })),
    },
  };
}

/** WebSite node, emitted once on the homepage. */
export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: "en-IN",
    publisher: { "@id": `${siteConfig.url}#business` },
  };
}

export function breadcrumbJsonLd(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: abs(crumb.path),
    })),
  };
}

/**
 * ItemList of products for a collection page. No `offers` block is emitted:
 * prices are quoted per piece, so publishing one would be inaccurate.
 */
export function productListJsonLd({
  name,
  path,
  products,
}: {
  name: string;
  path: string;
  products: Product[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    url: abs(path),
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.name,
        description: product.description,
        category: product.category,
        image: abs(product.image.src),
        brand: { "@type": "Brand", name: siteConfig.name },
      },
    })),
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

/* ---------------------------------------------------------------------------
 * Blog structured data
 *
 * Every node below is derived from what the page actually renders. The author
 * and publisher are the business itself, which is true by construction: no
 * fictional writer is invented for a byline, and no rating or review appears
 * on an article any more than it does anywhere else on the site.
 * ------------------------------------------------------------------------- */

const publisher = {
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
} as const;

/** `BlogPosting` for a single article. */
export function blogPostingJsonLd(post: BlogPost, category: BlogCategory) {
  const path = `/blog/${post.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${abs(path)}#article`,
    mainEntityOfPage: { "@type": "WebPage", "@id": abs(path) },
    isPartOf: { "@type": "Blog", "@id": `${abs("/blog")}#blog` },
    url: abs(path),
    headline: post.title,
    description: post.description,
    image: [abs(post.image.src)],
    datePublished: postTimestamp(post.publishedAt),
    dateModified: postTimestamp(post.updatedAt ?? post.publishedAt),
    author: publisher,
    publisher,
    articleSection: category.title,
    keywords: post.tags.join(", "),
    wordCount: wordCount(post.blocks),
    timeRequired: `PT${readingMinutes(post)}M`,
    inLanguage: "en-IN",
    // Only on articles genuinely written for one place, and only ever a place
    // the article really discusses.
    ...(post.location
      ? { spatialCoverage: { "@type": "Place", name: post.location } }
      : {}),
  };
}

/** `Blog` node for /blog, listing the articles the page links to. */
export function blogJsonLd(posts: BlogPost[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${abs("/blog")}#blog`,
    url: abs("/blog"),
    name: `${siteConfig.name} furniture guides`,
    description:
      "Buying guides, sizing advice and care instructions for sofas, beds and made-to-order furniture.",
    inLanguage: "en-IN",
    publisher,
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      "@id": `${abs(`/blog/${post.slug}`)}#article`,
      url: abs(`/blog/${post.slug}`),
      headline: post.title,
      description: post.excerpt,
      image: abs(post.image.src),
      datePublished: postTimestamp(post.publishedAt),
      dateModified: postTimestamp(post.updatedAt ?? post.publishedAt),
      author: publisher,
    })),
  };
}

/** `CollectionPage` with an ordered `ItemList` for a category archive. */
export function articleListJsonLd({
  name,
  description,
  path,
  posts,
}: {
  name: string;
  description: string;
  path: string;
  posts: BlogPost[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": abs(path),
    url: abs(path),
    name,
    description,
    inLanguage: "en-IN",
    isPartOf: { "@type": "Blog", "@id": `${abs("/blog")}#blog` },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: posts.length,
      itemListElement: posts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: abs(`/blog/${post.slug}`),
        name: post.title,
      })),
    },
  };
}
