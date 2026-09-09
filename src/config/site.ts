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
  name: "Furniture Future",
  shortName: "Future",
  tagline: "Sofas and beds, crafted for the way you live",

  /**
   * The live domain. Canonical URLs, the sitemap, Open Graph images and the
   * structured data are all built from it.
   *
   * Confirmed by the owner as the `www` form. That choice has to be enforced at
   * the hosting layer as well: non-`www` and plain `http` must 301 here, not
   * answer with a 200 of their own, or the site's link equity is split across
   * hostnames. Check with `curl -I` after deploying.
   */
  url: "https://www.furniturefuture.in",

  /**
   * Meta description for the homepage, and the `description` on the
   * `FurnitureStore` and `WebSite` structured data. It names the market because
   * `serviceArea` below is owner-confirmed, and it is kept near 155 characters
   * so Google does not truncate it in a result.
   */
  description:
    "Premium sofas, beds and custom furniture made to order for homes across " +
    "Delhi NCR. Browse the designs, then call or WhatsApp for sizes and a quote.",

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

  /**
   * How long a made-to-order piece takes to build, once the design is
   * confirmed. Confirmed by the owner as a four-to-seven-day range.
   *
   * It is a range on purpose: it is the only delivery figure the site states,
   * and a single number would be a promise the business has not made. Rendered
   * on `/custom-furniture` and on every product page.
   * TODO(owner): if the range differs by piece - a wardrobe against a
   * two-seater, say - tell us and it can be stated per category instead.
   */
  leadTime: "4 to 7 days" as string | null,

  // The phrase shown to visitors in the contact section and the footer.
  // Confirmed by the owner: the business sells into the Delhi NCR market.
  serviceArea: "Delhi NCR" as string | null,

  /**
   * The individual places behind that phrase, used for the `areaServed` field
   * in the LocalBusiness structured data so Google is given the actual towns
   * rather than only the umbrella term. It is also the list that
   * `src/data/service-areas.ts` is checked against, so the rendered
   * "Where we deliver" section can never show a place this list does not claim.
   * TODO(owner): trim or extend it to match where you genuinely deliver. Every
   * entry here is a claim that you serve that place.
   */
  serviceAreas: [
    "Delhi",
    "New Delhi",
    "Gurugram",
    "Noida",
    "Greater Noida",
    "Ghaziabad",
    "Faridabad",
  ] as string[] | null,

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
    downloadName: "Furniture-Future-Catalogue.pdf",
    /** Shown next to the button. Keep it short. */
    note: "Sofas, beds, dining and storage designs in one PDF.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
