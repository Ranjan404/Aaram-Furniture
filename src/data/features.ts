import type { Feature } from "@/lib/types";

/**
 * "Why choose us" points. These describe how the business works rather than
 * making measurable claims, so nothing here needs external verification.
 * Rewrite freely in the owner's own words.
 */
export const features: Feature[] = [
  {
    id: "f1",
    title: "Designs worth living with",
    description:
      "Every piece is chosen for proportion and line first, so it still looks right in your room five years from now.",
    icon: "design",
  },
  {
    id: "f2",
    title: "Comfort you can feel",
    description:
      "Seat depth, back angle and foam density are specified per design, because a sofa that photographs well but sits badly is a wasted room.",
    icon: "comfort",
  },
  {
    id: "f3",
    title: "Built to your measurements",
    description:
      "Sofas, beds and wardrobes can be made to the dimensions of your space rather than the other way around.",
    icon: "custom",
  },
  {
    id: "f4",
    title: "Attention to the details",
    description:
      "Frames, joinery, stitching and finish are checked at each stage. The parts you never see are the parts that decide how long it lasts.",
    icon: "craft",
  },
  {
    id: "f5",
    title: "Talk to a person, directly",
    description:
      "Send a photo of your room on WhatsApp and get honest guidance on size, fabric and layout before you commit to anything.",
    icon: "consult",
  },
  {
    id: "f6",
    title: "Fabric and finish, your call",
    description:
      "Choose the upholstery, wood finish and hardware. We will tell you which combinations wear well and which do not.",
    icon: "delivery",
  },
];

/** Short proof points shown under the hero headline. */
export const heroTrustPoints = [
  "Premium designs",
  "Custom sizes",
  "Quality craftsmanship",
  "Direct consultation",
];
