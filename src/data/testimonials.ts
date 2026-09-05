import type { Testimonial } from "@/lib/types";

/**
 * ---------------------------------------------------------------------------
 * SAMPLE CONTENT - REPLACE BEFORE LAUNCH
 * ---------------------------------------------------------------------------
 * These entries exist so the section can be designed and reviewed with
 * realistic content. They are NOT real customer reviews, are not attributed to
 * any real person, and are not taken from any review platform.
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
      "We had an awkward corner that every showroom told us to just live with. They took the measurements, changed the chaise to the other side and it fits like it was built for the room. Which, I suppose, it was.",
    name: "Sample review",
    location: "Replace with a real customer",
    product: "L-shape sectional",
    rating: 5,
    initials: "01",
  },
  {
    id: "t2",
    quote:
      "I wanted storage under the bed without the heavy, boxy look. They walked me through headboard heights on WhatsApp with photos before I committed to anything. The lift mechanism still feels solid.",
    name: "Sample review",
    location: "Replace with a real customer",
    product: "Hydraulic storage bed",
    rating: 5,
    initials: "02",
  },
  {
    id: "t3",
    quote:
      "Honest advice on fabric, which I did not expect. I was set on a light linen and they told me plainly it would not survive a house with a dog. Went with the recommended weave instead and they were right.",
    name: "Sample review",
    location: "Replace with a real customer",
    product: "Three-seater sofa",
    rating: 5,
    initials: "03",
  },
  {
    id: "t4",
    quote:
      "The dining table was made to the exact length we asked for, so there is finally room to walk behind the chairs. Small thing, but it changed how we use the room.",
    name: "Sample review",
    location: "Replace with a real customer",
    product: "Solid wood dining table",
    rating: 5,
    initials: "04",
  },
  {
    id: "t5",
    quote:
      "Sent a reference photo I found online and asked if it could be made. Got a straight answer about what would need to change and why, then a price. No back and forth for weeks.",
    name: "Sample review",
    location: "Replace with a real customer",
    product: "Custom wardrobe",
    rating: 5,
    initials: "05",
  },
  {
    id: "t6",
    quote:
      "Two years in and the seat cushions have held their shape, which is more than I can say for the sofa this one replaced. The seat depth is what sold us and it is still the reason we like it.",
    name: "Sample review",
    location: "Replace with a real customer",
    product: "Leather three-seater",
    rating: 5,
    initials: "06",
  },
];
