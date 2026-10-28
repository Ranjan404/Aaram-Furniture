import type { Testimonial } from "@/lib/types";

/**
 * ---------------------------------------------------------------------------
 * SAMPLE CONTENT - REPLACE BEFORE LAUNCH
 * ---------------------------------------------------------------------------
 * These entries exist so the section can be designed and reviewed with
 * realistic content. They are NOT real customer reviews: the names are
 * fictional placeholders, not real people, and nothing is taken from any
 * review platform.
 *
 * TO GO LIVE
 *   1. Replace every entry below with genuine feedback you have permission to
 *      publish. Keep whatever the customer actually wrote - do not tidy it into
 *      marketing copy.
 *   2. Set `testimonialsAreVerified` to true.
 *
 * Until step 2 is done, a small "sample" note is shown under the section so
 * nobody is misled while the site is being reviewed. Flipping the flag removes
 * the note. Publishing fabricated reviews as genuine is prohibited under the
 * Consumer Protection Act 2019 and the BIS review guidelines (IS 19000:2022),
 * so this is worth doing properly.
 *
 * `rating` is optional and only renders stars when present. Set it only from a
 * rating a customer actually gave. No aggregate rating or review structured
 * data is emitted anywhere on the site while `testimonialsAreVerified` is
 * false - see `src/lib/seo.ts`.
 * ---------------------------------------------------------------------------
 */

export const testimonialsAreVerified = false;

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "We had an awkward corner in the drawing room that every showroom told us to just live with. They came, took proper measurements, shifted the chaise to the other side and now it fits like it was made for the room. Which, I suppose, it was.",
    name: "Ritu Malhotra",
    location: "Gurugram",
    product: "L-shape sectional",
    rating: 5,
  },
  {
    id: "t2",
    quote:
      "I wanted storage under the bed for razais and winter blankets, but without that heavy, boxy look. They sent photos of headboard options on WhatsApp before I committed to anything. The lift mechanism still feels solid.",
    name: "Ankit Sharma",
    location: "Noida",
    product: "Hydraulic storage bed",
    rating: 5,
  },
  {
    id: "t3",
    quote:
      "Honest advice on fabric, which I did not expect. I was set on a light linen and they told me plainly it would not survive a house with a Labrador and two kids. Went with the weave they suggested and they were right.",
    name: "Neha Kapoor",
    location: "Greater Noida",
    product: "Three-seater sofa",
    rating: 5,
  },
  {
    id: "t4",
    quote:
      "The dining table was made to the exact length we asked for, so there is finally space to walk behind the chairs when the whole family sits together. Small thing, but it changed how we use the room.",
    name: "Mohammed Faizan",
    location: "Okhla",
    product: "Solid wood dining table",
    rating: 4,
  },
  {
    id: "t5",
    quote:
      "Sent a Pinterest photo and asked if it could be made. Got a straight answer about what would need to change for our wall and why, then a price. No running around for weeks.",
    name: "Sunita Verma",
    location: "Ghaziabad",
    product: "Custom wardrobe",
    rating: 5,
  },
  {
    id: "t6",
    quote:
      "Two years in and the seat cushions have held their shape, which is more than I can say for the sofa this one replaced. Delivery took a few days longer than we hoped, but the seat depth is what sold us and it is still why we like it.",
    name: "Rajesh Aggarwal",
    location: "Faridabad",
    product: "Leather three-seater",
    rating: 4,
  },
];
