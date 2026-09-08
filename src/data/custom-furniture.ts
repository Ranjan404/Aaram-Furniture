import { siteConfig } from "@/config/site";
import type { FaqItem } from "@/lib/types";

/**
 * ---------------------------------------------------------------------------
 * CONTENT FOR /custom-furniture
 * ---------------------------------------------------------------------------
 * Made to order is the proposition the business leads with everywhere else on
 * the site, and it is the one thing a volume retailer cannot match. This page
 * gives it a URL of its own.
 *
 * Everything below restates how the business already works, as recorded in
 * `src/data/faqs.ts`, `src/data/features.ts` and the product copy. The one
 * figure it does state is the build time, and that comes from
 * `siteConfig.leadTime` rather than being written out here, so it can never
 * disagree with the same figure on a product page. No price, minimum order,
 * warranty or delivery charge is stated, because none has been supplied.
 * ---------------------------------------------------------------------------
 */

/** What can be built to order, and the range page each one links to. */
export const customBuilds: {
  id: string;
  title: string;
  href: string;
  /** What is usually adjusted on this piece, in plain terms. */
  description: string;
}[] = [
  {
    id: "sofas",
    title: "Sofas and sectionals",
    href: "/sofas",
    description:
      "Overall length, seat depth, arm height and the side the chaise sits on. The three measurements that decide how a sofa feels are all adjustable.",
  },
  {
    id: "beds",
    title: "Beds and headboards",
    href: "/beds",
    description:
      "Mattress size, headboard height against your wall, and storage underneath where the room needs it.",
  },
  {
    id: "wardrobes",
    title: "Wardrobes and storage",
    href: "/furniture",
    description:
      "Built to the height and width of the wall it stands against, with the internal layout set by what you actually keep in it.",
  },
  {
    id: "tv-units",
    title: "TV units and media walls",
    href: "/furniture",
    description:
      "Sized to the screen and the wall, wall-hung or floor-standing, with the cabling planned before anything is fixed.",
  },
  {
    id: "dining",
    title: "Dining tables",
    href: "/furniture",
    description:
      "Length and width set by the room and the number of seats, in a finish chosen to sit with the rest of the space.",
  },
  {
    id: "seating",
    title: "Armchairs and recliners",
    href: "/furniture",
    description:
      "Scaled to sit with the sofa rather than fight it, at a width and seat height that suits the person actually using it.",
  },
];

/** The order the decisions get made in. Four steps, no invented timings. */
export const customProcess: { id: string; title: string; description: string }[] = [
  {
    id: "step-1",
    title: "Send the room, not just the piece",
    description:
      "Message us the dimensions of the space, where the piece has to sit and a photograph or two. A photograph of the room tells us more than a list of numbers.",
  },
  {
    id: "step-2",
    title: "We tell you what fits",
    description:
      "You get an honest answer on what will work in that space and what needs to change - including when a standard size is the better buy.",
  },
  {
    id: "step-3",
    title: "Choose the materials",
    description:
      "Upholstery, wood finish and hardware are your call. We will say which combinations wear well in daily use and which do not.",
  },
  {
    id: "step-4",
    title: "Confirm, then we build",
    description: `The final design, dimensions and finish are confirmed with you before any work starts. Building then takes ${siteConfig.leadTime} for most pieces, and we will tell you where yours sits in that range before you commit.`,
  },
];

/** What is adjustable on a made-to-order piece. */
export const customOptions: string[] = [
  "Dimensions set from your room measurements",
  "Fabric, leather or wood finish of your choice",
  "Left or right orientation where the design allows",
  "Headboard, back and arm heights",
  "Internal layout on storage pieces",
  "Hardware and leg finish",
];

/**
 * Questions specific to ordering a custom piece. Deliberately different from
 * the general set in `src/data/faqs.ts`, so the two pages do not publish the
 * same `FAQPage` content twice.
 */
export const customFurnitureFaqs: FaqItem[] = [
  {
    id: "cf1",
    question: "What can you make to order?",
    answer:
      "Sofas, beds, wardrobes, TV units, dining tables and armchairs. If a design in the range on this site is close to what you want, it can normally be built in a different size, fabric or finish - tell us the design you like and the room it has to go into.",
  },
  {
    id: "cf2",
    question: "I have a reference photograph rather than a design from your range.",
    answer:
      "That is a normal place to start. Send the photograph on WhatsApp. We will tell you whether it can be built as shown, where the construction needs to change and what those changes do to the look, and nothing begins until you have confirmed the final design.",
  },
  {
    id: "cf3",
    question: "What do you need from me before you can quote?",
    answer:
      "The room dimensions, where the piece will stand and how it will be used day to day. Photographs of the space help more than anything else. A custom piece is quoted per piece rather than off a list, because the size, upholstery and finish all move the price.",
  },
  {
    id: "cf4",
    question: "How much can actually be changed?",
    answer:
      "Dimensions, upholstery, wood finish, hardware, and the side a corner or chaise sits on where the design allows it. On storage pieces the internal layout is set by what you keep in them rather than by a standard configuration.",
  },
  {
    id: "cf5",
    question: "How long does a custom piece take?",
    answer: `Most pieces take ${siteConfig.leadTime} to build, counted from the day the design, dimensions and finish are confirmed rather than from the first message. Where a piece sits in that range depends on what it is and on the upholstery, and we will tell you which end to expect before you commit.`,
  },
  {
    id: "cf6",
    question: "Is made to measure always the right answer?",
    answer:
      "No, and we will say so. If a standard size fits your room and suits how you live, there is no reason to pay for a custom build. It earns its keep when the room is an awkward shape, when the route in restricts what can be delivered, or when nothing off the shelf sits at the right depth or height.",
  },
];
