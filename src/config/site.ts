/**
 * ---------------------------------------------------------------------------
 * SINGLE SOURCE OF TRUTH FOR BUSINESS INFORMATION
 * ---------------------------------------------------------------------------
 * Everything the business owner is likely to change lives in this one file:
 * brand name, domain, phone number, address, catalogue file and social links.
 *
 * Fields typed as `| null` are intentionally empty because the information was
 * not supplied. Nothing is invented anywhere in this codebase: a `null` field
 * is simply not rendered, and it is also left out of the SEO structured data.
 * Fill one in and it appears across the site automatically.
 * ---------------------------------------------------------------------------
 */

export interface PostalAddress {
  /** e.g. "Shop 14, Furniture Market" */
  streetAddress: string;
  /** e.g. "Kirti Nagar" */
  locality: string;
  /** e.g. "New Delhi" */
  region: string;
  /** e.g. "110015" */
  postalCode: string;
  /** ISO country code, e.g. "IN" */
  country: string;
  /** Optional Google Maps link used by the "Get directions" button. */
  mapsUrl?: string;
}

export interface OpeningHours {
  /** e.g. "Mon - Sat" */
  days: string;
  /** e.g. "10:00 AM - 8:00 PM" */
  hours: string;
}

export const siteConfig = {
  // -- Brand -----------------------------------------------------------------
  // TODO(owner): replace with the registered business name.
  name: "Aaram Furniture",
  shortName: "Aaram",
  tagline: "Sofas and beds, crafted for the way you live",

  // TODO(owner): replace with the live domain before launch. Used for canonical
  // URLs, sitemap, Open Graph images and structured data.
  url: "https://www.aaramfurniture.com",

  description:
    "Premium sofas, beds and custom furniture made to order. Explore modern " +
    "sofa designs, upholstered and storage beds, dining sets, wardrobes and " +
    "TV units, then talk to us directly on WhatsApp or call for a quote.",

  // -- Contact ---------------------------------------------------------------
  phone: {
    /** Human readable, used in visible copy. */
    display: "+91 93157 10072",
    /** Used for tel: links. Must be E.164. */
    e164: "+919315710072",
  },
  whatsapp: {
    /** Country code + number, digits only. Used for wa.me links. */
    number: "919315710072",
  },
  email: null as string | null, // TODO(owner): add a business email if you have one.

  // -- Location (optional) ---------------------------------------------------
  // TODO(owner): fill this in to show the showroom address, a "Get directions"
  // button and a full LocalBusiness address in Google's structured data.
  address: null as PostalAddress | null,

  // TODO(owner): fill this in to display business hours.
  openingHours: null as OpeningHours[] | null,

  // TODO(owner): e.g. "Delhi NCR". Shown in the contact section and used in the
  // structured data `areaServed` field. Left empty until confirmed.
  serviceArea: null as string | null,

  // -- Social (optional) -----------------------------------------------------
  social: {
    instagram: null as string | null,
    facebook: null as string | null,
    youtube: null as string | null,
  },

  // -- Product catalogue -----------------------------------------------------
  catalogue: {
    /**
     * HOW TO ENABLE THE CATALOGUE DOWNLOAD
     * 1. Put the PDF at:  public/catalogue/product-catalogue.pdf
     * 2. Set `available` to true below.
     *
     * While `available` is false the site does NOT link to a file that does not
     * exist. Every "Download catalogue" button instead opens WhatsApp with a
     * pre-filled catalogue request, so the CTA still converts.
     */
    available: false,
    path: "/catalogue/product-catalogue.pdf",
    downloadName: "Aaram-Furniture-Catalogue.pdf",
    /** Shown next to the button. Keep it short. */
    note: "Sofas, beds, dining and storage designs in one PDF.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
