import { siteConfig } from "./site";

/**
 * ---------------------------------------------------------------------------
 * SEASONAL CAMPAIGN (DIWALI)
 * ---------------------------------------------------------------------------
 * Everything festive on the site is switched by this one file: the
 * announcement bar, the hero's festive treatment and decoration, the Diwali
 * band on the homepage, the offer panel and any festive product prices.
 *
 * - `enabled: false` turns all of it off at once.
 * - Outside `startsOn`..`endsOn` it is off as well, with no edit needed.
 *
 * The site is prerendered, so "today" is the day of the build. After
 * `endsOn` the festive layer disappears on the next deploy: trigger one (or
 * set `enabled` to false) once the campaign is over.
 *
 * `/diwali-furniture` is NOT switched off. It is an evergreen URL that keeps
 * its rankings from one year to the next; outside the campaign it simply drops
 * the dated planning panel and any offer. Update `year` and the dates for the
 * next festival rather than creating a new URL.
 *
 * Nothing here invents a discount. `offer` is null until the owner supplies a
 * real one, and while it is null the site talks about planning around the
 * build time (which is owner-confirmed in `siteConfig.leadTime`), not about
 * savings. Festive product prices live on the products themselves
 * (`price` / `festivePrice` in `src/data/products.ts`) and only render while
 * the campaign is active and an `offer` exists to give them dates and terms.
 * ---------------------------------------------------------------------------
 */

export interface FestiveOffer {
  /** Short, factual headline, e.g. "10% off made-to-order sofas". */
  headline: string;
  /** One or two sentences on what is included. */
  details: string;
  /** The conditions, in plain words. Rendered under the offer, never hidden. */
  terms: string[];
  /** ISO dates, inclusive. Shown to visitors and used as `priceValidUntil`. */
  validFrom: string;
  validThrough: string;
}

export const festiveConfig = {
  /** Master switch for the whole festive layer. */
  enabled: true,

  festival: "Diwali",
  year: 2026,

  /** Lakshmi Puja. Dhanteras falls on 6 November 2026. */
  festivalDate: "2026-11-08",

  /** ISO dates, inclusive. The festive layer shows only inside this window. */
  startsOn: "2026-10-20",
  endsOn: "2026-11-15",

  /** Homepage hero copy while the campaign runs. The evergreen copy returns after. */
  hero: {
    eyebrow: "Diwali 2026 · Sofas · Beds · Dining",
    title: "Bring Diwali home with a sofa or bed made for your room.",
    lead: "Made to order in the size, fabric and finish you choose, for homes across",
  },

  /**
   * TODO(owner): add a genuine festive offer here, or leave it null. Every
   * field is shown to visitors exactly as written, so it must be true for the
   * whole of `validFrom`..`validThrough`. Example shape:
   *
   *   offer: {
   *     headline: "Free cushion set with any L-shape sofa",
   *     details: "Two matching scatter cushions in the sofa's own fabric.",
   *     terms: ["Orders confirmed between 25 Oct and 10 Nov 2026", "One set per sofa"],
   *     validFrom: "2026-10-25",
   *     validThrough: "2026-11-10",
   *   },
   */
  offer: null as FestiveOffer | null,

  /**
   * Real products, by `id` from `src/data/products.ts`, picked for hosting:
   * seating for guests, a table for the family meal, a guest bed with storage
   * for the extra bedding, and a media wall for the room everyone gathers in.
   * An unknown id fails the build. The first three appear on the homepage,
   * and are chosen not to repeat a card from the featured sofa and bed rows.
   */
  collectionIds: [
    "sofa-halden",
    "dining-orbit",
    "tv-linea",
    "sofa-meridian",
    "dining-atrium",
    "bed-vault",
  ],
} as const;

/* ---------------------------------------------------------------------------
 * Derived values. Computed once, at build time.
 * ------------------------------------------------------------------------- */

const DAY = 24 * 60 * 60 * 1000;
const IST_OFFSET = 5.5 * 60 * 60 * 1000;
const isoDay = (iso: string) => Date.parse(`${iso}T00:00:00+05:30`);
/* The build's clock, not the visitor's: see `env.BUILD_TIME` in next.config.ts. */
const today = Number(process.env.BUILD_TIME) || Date.now();

/** True while the festive layer should be shown. */
export const festiveActive =
  festiveConfig.enabled &&
  today >= isoDay(festiveConfig.startsOn) &&
  today < isoDay(festiveConfig.endsOn) + DAY;

/** The offer, but only while it is genuinely running. */
export const activeOffer = (() => {
  const offer = festiveConfig.offer;
  if (!festiveActive || !offer) return null;
  const running = today >= isoDay(offer.validFrom) && today < isoDay(offer.validThrough) + DAY;
  return running ? offer : null;
})();

/** "8 November", "1 November 2026" etc., in the site's locale and timezone. */
export function formatFestiveDate(iso: string, withYear = false): string {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    ...(withYear ? { year: "numeric" } : {}),
    timeZone: "Asia/Kolkata",
  }).format(new Date(isoDay(iso)));
}

/**
 * The latest day a design can be confirmed and still be built before the
 * festival, from the upper end of `siteConfig.leadTime` ("4 to 7 days" -> 7).
 * This is arithmetic on an owner-confirmed figure, not a delivery promise:
 * the copy that uses it always says delivery is confirmed separately.
 * Null when there is no lead time, or the date has already passed.
 */
export const confirmByDate = (() => {
  const maxDays = Number(siteConfig.leadTime?.match(/(\d+)\s*days?/)?.[1]);
  if (!Number.isFinite(maxDays)) return null;
  const confirmBy = isoDay(festiveConfig.festivalDate) - maxDays * DAY;
  if (today >= confirmBy + DAY) return null;
  // `confirmBy` is IST midnight; shift it so the UTC date string is the IST day.
  return new Date(confirmBy + IST_OFFSET).toISOString().slice(0, 10);
})();

/** One-line message for the announcement bar, short and long forms. */
export const festiveAnnouncement = (() => {
  if (!festiveActive) return null;
  const { festival, year } = festiveConfig;
  if (activeOffer) {
    return {
      short: `${festival}: ${activeOffer.headline}`,
      long: `${festival} ${year}: ${activeOffer.headline}, until ${formatFestiveDate(activeOffer.validThrough)}.`,
      href: "/diwali-furniture#offer",
      cta: "See terms",
    };
  }
  if (confirmByDate) {
    return {
      short: `Confirm by ${formatFestiveDate(confirmByDate)} for a pre-${festival} build`,
      long: `${festival} ${year}: confirm your design by ${formatFestiveDate(confirmByDate)} to have it built before ${formatFestiveDate(festiveConfig.festivalDate)}.`,
      href: "/diwali-furniture",
      cta: `${festival} collection`,
    };
  }
  return {
    short: `Happy ${festival} from ${siteConfig.name}`,
    long: `Happy ${festival} from ${siteConfig.name}. Made-to-order sofas, beds and dining, built in ${siteConfig.leadTime ?? "days"}.`,
    href: "/diwali-furniture",
    cta: `${festival} collection`,
  };
})();

export type FestiveAnnouncement = NonNullable<typeof festiveAnnouncement>;
