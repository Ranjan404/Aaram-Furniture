import { siteConfig } from "@/config/site";

/**
 * ---------------------------------------------------------------------------
 * THE PLACES WE SERVE, AS A VISITOR SEES THEM
 * ---------------------------------------------------------------------------
 * `siteConfig.serviceAreas` is the machine list: it feeds `areaServed` in the
 * `FurnitureStore` structured data and nothing else. It contains both "Delhi"
 * and "New Delhi", which is right for structured data and reads like a mistake
 * in a rendered list, so the visible list is authored here instead.
 *
 * Two rules hold this together:
 *
 * 1. Every entry below must also be in `siteConfig.serviceAreas`. That is
 *    checked at module load, so the site can never *show* a place it does not
 *    *claim*. To add a place, add it to the config first.
 * 2. `guide` may only point at an article genuinely written about that place.
 *    An article about the NCR as a whole belongs to Delhi, not to Faridabad,
 *    and no place gets a link invented for the sake of symmetry.
 *
 * Nothing here states a delivery charge, a delivery time or a minimum order,
 * because none has been supplied.
 * Okhla and Khoda were added at the owner's request (October 2026).
 * TODO(owner): confirm this is where you genuinely deliver and install, and in
 * particular whether Faridabad belongs on the list. Every line is a claim.
 * ---------------------------------------------------------------------------
 */

export interface ServiceArea {
  /** Must match an entry in `siteConfig.serviceAreas`. */
  name: string;
  /**
   * The other name people search the place by, when it has one. Shown beside
   * the name and emitted as `alternateName` in `areaServed`.
   */
  alias?: string;
  /** One line on what furnishing a home there actually involves. */
  note: string;
  /** An article really written about this place, when one exists. */
  guide?: { slug: string; label: string };
}

export const serviceAreas: ServiceArea[] = [
  {
    name: "Noida",
    note: "Sector-grid high-rise flats, where the service lift decides what can be delivered in one piece.",
    guide: {
      slug: "furniture-for-small-apartments-noida",
      label: "Furnishing a Noida 2BHK, room by room",
    },
  },
  {
    name: "Greater Noida",
    note: "Newer towers and larger layouts, usually with proper lift access and society delivery windows.",
  },
  {
    name: "Ghaziabad",
    note: "Builder floors and high-rise pockets, where the layout you inherit sets what the furniture has to do.",
    guide: {
      slug: "furnishing-a-builder-floor-in-ghaziabad",
      label: "Furnishing a Ghaziabad builder floor",
    },
  },
  {
    name: "Gurugram",
    alias: "Gurgaon",
    note: "Condominium apartments with large rooms and high ceilings, where standard sizes read as under-scaled.",
    guide: {
      slug: "furnishing-a-gurgaon-apartment",
      label: "Planning a Gurgaon apartment before you order",
    },
  },
  {
    name: "Delhi",
    note: "Everything from older society flats to builder floors, and rarely a standard-sized room among them.",
    guide: {
      slug: "sofa-fabric-vs-leather-delhi-ncr-climate",
      label: "Fabric or leather in the Delhi NCR climate",
    },
  },
  {
    name: "Okhla",
    note: "Walk-up buildings off narrow lanes, where the stair turn and the lane width decide what can be carried in.",
  },
  {
    name: "Khoda",
    alias: "Khora",
    note: "Dense, multi-storey homes on the Noida border, often with stairs rather than a lift, so pieces are planned to come in sections.",
  },
  {
    name: "Faridabad",
    note: "Apartments and independent houses, measured on site the same way as anywhere else.",
  },
];

/* Checked once at module load, so a visible claim that outruns the declared
   coverage fails the build rather than shipping. */
{
  const declared = new Set(siteConfig.serviceAreas ?? []);
  for (const area of serviceAreas) {
    if (!declared.has(area.name)) {
      throw new Error(
        `"${area.name}" is rendered as a service area but is not in siteConfig.serviceAreas`,
      );
    }
  }
}
