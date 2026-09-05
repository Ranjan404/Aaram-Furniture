import type { Category, PrimaryFeature } from "@/lib/types";

/**
 * Furniture categories shown on the homepage and the /furniture page.
 * Swap `image.src` for your own photography in `public/images/categories/`.
 */
export const categories: Category[] = [
  {
    slug: "sofas",
    title: "Sofas",
    description:
      "Three-seaters, L-shaped sectionals, loveseats and modular sofas in fabric and leather.",
    image: {
      src: "/images/categories/beige-l-shape-sectional-sofa.jpg",
      alt: "Beige L-shaped sectional sofa in a bright, contemporary living room",
    },
    href: "/sofas",
    emphasis: "primary",
    pieces: ["Three-seater", "L-shape", "Loveseat", "Modular"],
  },
  {
    slug: "beds",
    title: "Beds",
    description:
      "Upholstered, storage and platform beds in king, queen and custom sizes.",
    image: {
      src: "/images/categories/modern-king-bed-with-panelled-headboard.jpg",
      alt: "Modern king size bed with a slatted wood panel headboard wall",
    },
    href: "/beds",
    emphasis: "primary",
    pieces: ["Upholstered", "Storage", "Platform", "King & queen"],
  },
  {
    slug: "dining",
    title: "Dining",
    description: "Dining tables, dining sets and chairs sized to your room.",
    image: {
      src: "/images/categories/dining-table-with-upholstered-chairs.jpg",
      alt: "Dining table surrounded by upholstered chairs in a warm dining room",
    },
    href: "/furniture#dining",
    emphasis: "secondary",
    pieces: ["4 & 6 seater", "Dining sets"],
  },
  {
    slug: "living-room",
    title: "Living room",
    description: "Centre tables, side tables and accent seating that pulls a room together.",
    image: {
      src: "/images/categories/light-living-room-with-grey-sofa.jpg",
      alt: "Light living room with a grey sofa, round centre table and floor cushions",
    },
    href: "/furniture#living-room",
    emphasis: "secondary",
    pieces: ["Centre tables", "Side tables"],
  },
  {
    slug: "tv-units",
    title: "TV units",
    description: "Wall-mounted and floor-standing media units with concealed storage.",
    image: {
      src: "/images/categories/wall-mounted-wooden-tv-unit.jpg",
      alt: "Wall mounted wooden TV unit with floating shelves in a living room",
    },
    href: "/furniture#tv-units",
    emphasis: "secondary",
    pieces: ["Wall mounted", "Floor standing"],
  },
  {
    slug: "wardrobes",
    title: "Wardrobes",
    description: "Hinged and sliding wardrobes built to the wall you have.",
    image: {
      src: "/images/categories/wooden-two-door-wardrobe.jpg",
      alt: "Tall wooden two-door wardrobe against a white bedroom wall",
    },
    href: "/furniture#wardrobes",
    emphasis: "secondary",
    pieces: ["Hinged", "Sliding"],
  },
  {
    slug: "chairs",
    title: "Chairs & recliners",
    description: "Accent chairs, lounge chairs and recliners for reading corners.",
    image: {
      src: "/images/categories/contemporary-moulded-accent-chair.jpg",
      alt: "Contemporary moulded accent chair with tapered wooden legs",
    },
    href: "/furniture#chairs",
    emphasis: "secondary",
    pieces: ["Accent", "Lounge", "Recliner"],
  },
  {
    slug: "custom",
    title: "Custom furniture",
    description: "Have a design in mind? Share a reference and we build to your measurements.",
    image: {
      src: "/images/categories/bespoke-joinery-with-accent-chair.jpg",
      alt: "Bespoke joinery and a mustard accent chair in a modern interior",
    },
    href: "/furniture#custom",
    emphasis: "secondary",
    pieces: ["Made to measure", "Your design"],
  },
];

/** Extra pieces listed as text chips where a dedicated card is not warranted. */
export const additionalPieces = [
  "Dining sets",
  "Centre tables",
  "Side tables",
  "Bar units",
  "Shoe racks",
  "Study tables",
  "Crockery units",
  "Bed side tables",
  "Ottomans & poufs",
  "Office seating",
];

export const primaryCategories = categories.filter((c) => c.emphasis === "primary");
export const secondaryCategories = categories.filter((c) => c.emphasis === "secondary");

/**
 * The sofa / bed split feature on the homepage.
 *
 * Sofas and beds are the business, not two categories among eight, so they get
 * their own full-bleed band rather than a cell in the category grid. Keep this
 * to exactly two entries: the moment a third appears, the hierarchy the whole
 * homepage is built on stops reading.
 */
export const primaryFeatures: PrimaryFeature[] = [
  {
    slug: "sofas",
    title: "Sofas",
    promise: "Designed for living.",
    description:
      "The piece a living room is planned around. Built to the length, depth and firmness your room and your family actually need.",
    href: "/sofas",
    /* Not the category-card photograph and not a gallery frame: the split
       feature sits on the same page as both, and a repeated room reads as a
       thin catalogue. */
    image: {
      src: "/images/products/sofas/halden-modular-sectional-sofa.jpg",
      alt: "Grey modular sectional sofa with cushions in a naturally lit living room",
    },
    points: ["Three-seaters & loveseats", "L-shape & modular", "Fabric or leather"],
    ctaLabel: "Explore sofa designs",
    enquiryLabel: "sofas",
  },
  {
    slug: "beds",
    title: "Beds",
    promise: "Designed for rest.",
    description:
      "Headboards built to the height of your wall, storage that opens without a fight, and frames that stay silent for years.",
    href: "/beds",
    image: {
      src: "/images/categories/modern-king-bed-with-panelled-headboard.jpg",
      alt: "Modern king size bed with a slatted wood panel headboard wall",
    },
    points: ["King, queen & custom", "Upholstered & platform", "Hydraulic storage"],
    ctaLabel: "View bed designs",
    enquiryLabel: "beds",
  },
];
