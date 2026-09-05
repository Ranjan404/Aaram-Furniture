import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import type { Product } from "@/lib/types";

const OG_IMAGE = "/images/og-cover.jpg";
const OG_ALT = `${siteConfig.name} - premium sofas, beds and custom furniture`;

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
  image = OG_IMAGE,
  noIndex = false,
}: {
  title: string;
  description: string;
  /** Route path beginning with "/" - used for the canonical URL. */
  path: string;
  image?: string;
  noIndex?: boolean;
}): Metadata {
  const url = canonicalUrl(path);
  // The homepage passes a title that already carries the brand; only append it
  // when it is missing, so social cards never read "Brand | ... | Brand".
  const socialTitle = title.includes(siteConfig.name)
    ? title
    : `${title} | ${siteConfig.name}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url,
      siteName: siteConfig.name,
      title: socialTitle,
      description,
      locale: "en_IN",
      images: [{ url: image, width: 1200, height: 630, alt: OG_ALT }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [image],
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
  const { address, serviceArea, social } = siteConfig;
  const sameAs = Object.values(social).filter((v): v is string => Boolean(v));

  return {
    "@context": "https://schema.org",
    "@type": "FurnitureStore",
    "@id": `${siteConfig.url}#business`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    telephone: siteConfig.phone.e164,
    image: abs(OG_IMAGE),
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
    ...(serviceArea ? { areaServed: { "@type": "Place", name: serviceArea } } : {}),
    ...(sameAs.length ? { sameAs } : {}),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: siteConfig.phone.e164,
      availableLanguage: ["en", "hi"],
    },
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
      ].map((name) => ({ "@type": "OfferCatalog", name })),
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
