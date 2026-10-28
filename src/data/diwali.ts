import { siteConfig } from "@/config/site";
import { activeOffer, confirmByDate, festiveConfig, formatFestiveDate } from "@/config/festive";
import type { FaqItem } from "@/lib/types";

/**
 * ---------------------------------------------------------------------------
 * WHAT /diwali-furniture RENDERS
 * ---------------------------------------------------------------------------
 * The page is evergreen: it stays live and indexable after the festival, so it
 * keeps whatever it has earned in search for next year. Only the offer panel
 * and the dated answers below depend on the campaign being active.
 *
 * Every statement here rests on something already in the repo: the build time
 * (`siteConfig.leadTime`), the made-to-order process, the places in
 * `siteConfig.serviceAreas` and the product highlights. No discount, delivery
 * date, stock level or price is stated unless `src/config/festive.ts` holds it.
 * ---------------------------------------------------------------------------
 */

const { festival } = festiveConfig;

/** Hosting priorities, in the order they usually matter in the week of Diwali. */
export const diwaliPlanning: { title: string; text: string; href: string; label: string }[] = [
  {
    title: "Seating comes first",
    text: "The living room is where the evening happens. Count how many people sit at once on the busiest night, not on a normal one, and size the sofa or sectional for that. A chaise or a modular piece stretches further than a third armchair.",
    href: "/sofas",
    label: "Explore sofa designs",
  },
  {
    title: "A table the family fits around",
    text: "A festival meal is the one time every chair is taken. Measure the room with the chairs pulled out, and leave walking space behind them; a round top takes an extra chair more easily than a square one.",
    href: "/furniture#dining",
    label: "See dining tables",
  },
  {
    title: "A guest bed that hides the extra bedding",
    text: "Visiting family means quilts, pillows and festival clothes that need somewhere to go. A storage bed keeps all of it under the mattress rather than stacked on a chair in the corner.",
    href: "/beds",
    label: "View bed designs",
  },
  {
    title: "Keep diyas and upholstery apart",
    text: "Plan the layout around where the lamps and the rangoli will be. Leave a clear margin between open flames and any sofa, curtain or cushion, and keep the entrance and walkways free for guests carrying plates.",
    href: "/blog/diwali-furniture-planning-guide",
    label: "Read the planning guide",
  },
];

/**
 * Rendered on the page and emitted as `FAQPage` from the same array, so the
 * structured data can never contain a question the page does not show.
 */
export function diwaliFaqs(): FaqItem[] {
  const leadTime = siteConfig.leadTime;
  const areas = (siteConfig.serviceAreas ?? []).filter((area) => area !== "New Delhi");

  return [
    {
      id: "diwali-offer",
      question: `Is there a ${festival} offer?`,
      answer: activeOffer
        ? `Yes: ${activeOffer.headline}, from ${formatFestiveDate(activeOffer.validFrom)} to ${formatFestiveDate(activeOffer.validThrough, true)}. ${activeOffer.terms.join(". ")}.`
        : `Any festive offer we run is published on this page with its dates and terms. Every design is priced per piece for the size and materials you choose, so message us for the current price of the one you like.`,
    },
    ...(leadTime
      ? [
          {
            id: "diwali-timing",
            question: `Can my furniture be ready before ${festival}?`,
            answer: confirmByDate
              ? `Each piece is built in ${leadTime} once the design is confirmed, so a design confirmed by ${formatFestiveDate(confirmByDate)} is due to be built before ${formatFestiveDate(festiveConfig.festivalDate)}. Ask us about delivery timing for your area when you confirm.`
              : `Each piece is built in ${leadTime} once the design is confirmed. Message us with the design you like and we will tell you honestly what can be ready, and when.`,
          },
        ]
      : []),
    {
      id: "diwali-areas",
      question: "Which areas do you deliver to?",
      answer: `Homes across ${siteConfig.serviceArea}, including ${areas.slice(0, -1).join(", ")} and ${areas.at(-1)}. If your area is not listed, message us and ask.`,
    },
    {
      id: "diwali-custom",
      question: "Can I change the size or fabric of a design in the collection?",
      answer:
        "Yes. Every design is made to order, so the length, depth, upholstery and finish can be set to your room. Send us the room measurements and a photo of the space.",
    },
  ];
}
