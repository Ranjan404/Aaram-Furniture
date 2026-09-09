import { slugify } from "@/lib/slug";
import type { Product } from "@/lib/types";

/** Product entries are authored without a slug; it is derived from the name. */
type ProductInput = Omit<Product, "slug">;

/**
 * ---------------------------------------------------------------------------
 * SAMPLE CATALOGUE DATA
 * ---------------------------------------------------------------------------
 * These entries exist so the layout can be reviewed with realistic content.
 * They are placeholders for the real range: replace `name`, `style`,
 * `description`, `highlights` and `image` with actual pieces before launch.
 *
 * No `price` is set on any item on purpose. Add one only where a real, current
 * price exists; the UI hides the price row entirely when it is undefined.
 * ---------------------------------------------------------------------------
 */

const sofaEntries: ProductInput[] = [
  {
    id: "sofa-aspen",
    name: "Aspen Leather Three-Seater",
    style: "Three-seater · Full grain leather",
    category: "Sofas",
    group: "sofas",
    description:
      "A low, wide-armed leather sofa on solid wood legs. Deep seat cushions that hold their shape and soften as the leather ages.",
    image: {
      src: "/images/products/sofas/aspen-leather-three-seater-sofa.jpg",
      alt: "Tan leather three-seater sofa with tapered wooden legs against a pale wall",
    },
    highlights: ["Solid wood frame", "Tan leather upholstery", "Seats 3"],
    tags: ["Three-seater", "Leather"],
    badge: "Made to order",
    featured: true,
  },
  {
    id: "sofa-verde",
    name: "Verde Velvet Sofa",
    style: "Three-seater · Velvet",
    category: "Sofas",
    group: "sofas",
    description:
      "Clean lines and a slim profile in a deep velvet finish, built for apartments where every centimetre counts.",
    image: {
      src: "/images/products/sofas/verde-velvet-sofa.jpg",
      alt: "Olive green channel-tufted velvet three-seater sofa with two matching armchairs, photographed in the workshop",
    },
    highlights: ["Slim arm profile", "Velvet upholstery", "Fabric of your choice"],
    tags: ["Three-seater", "Fabric"],
    featured: true,
  },
  {
    id: "sofa-meridian",
    name: "Meridian L-Shape Sectional",
    style: "L-shape · Fabric",
    category: "Sofas",
    group: "sofas",
    description:
      "A generous corner sectional with a chaise that can be built left or right handed to suit your room.",
    image: {
      src: "/images/products/sofas/meridian-l-shape-sectional-sofa.jpg",
      alt: "Charcoal grey modular channel-tufted L-shaped sectional sofa with a chaise, photographed in the yard",
    },
    highlights: ["Left or right chaise", "Seats 5 to 6", "Removable covers"],
    tags: ["L-shape", "Fabric"],
    badge: "Made to order",
    featured: true,
  },
  {
    id: "sofa-terra",
    name: "Terra Two-Seater",
    style: "Loveseat · Fabric",
    category: "Sofas",
    group: "sofas",
    description:
      "A compact two-seater with rounded arms and a buttoned back. Ideal for a balcony room, study or second seating zone.",
    image: {
      src: "/images/products/sofas/terra-two-seater-sofa.jpg",
      alt: "Terracotta and ivory two-tone two-seater sofa in the showroom",
    },
    highlights: ["Compact footprint", "Rounded arms", "Seats 2"],
    tags: ["Two-seater", "Fabric"],
    featured: true,
  },
  {
    id: "sofa-hearth",
    name: "Hearth Leather Sofa",
    style: "Three-seater · Leather",
    category: "Sofas",
    group: "sofas",
    description:
      "A softer, more relaxed leather sofa with a lower back, designed to sit comfortably against a feature wall.",
    image: {
      src: "/images/products/sofas/hearth-leather-sofa.jpg",
      alt: "Tan leather sofa styled beneath a gallery wall in a living room",
    },
    highlights: ["Low back", "Leather upholstery", "Seats 3"],
    tags: ["Three-seater", "Leather"],
  },
  {
    id: "sofa-halden",
    name: "Halden Modular Sectional",
    style: "Modular · Fabric",
    category: "Sofas",
    group: "sofas",
    description:
      "Built from individual modules so the layout can be rearranged, extended or split between two rooms later.",
    image: {
      src: "/images/products/sofas/halden-modular-sectional-sofa.jpg",
      alt: "Charcoal grey modular channel-tufted sectional sofa, built from individual seat modules, fresh from the workshop",
    },
    highlights: ["Rearrangeable modules", "Add units later", "Seats 4 to 7"],
    tags: ["Modular", "Fabric"],
    badge: "Modular",
  },
  {
    id: "sofa-luma",
    name: "Luma Lounge Sofa",
    style: "Deep seat · Fabric",
    category: "Sofas",
    group: "sofas",
    description:
      "An extra deep seat and feather-blend back cushions for households that treat the sofa as the main event.",
    image: {
      src: "/images/products/sofas/luma-lounge-sofa.jpg",
      alt: "Deep-seated cream U-shaped lounge sectional with matching ottomans in the showroom",
    },
    highlights: ["Extra deep seat", "Soft back cushions", "Seats 4"],
    tags: ["Modular", "Fabric"],
  },
  {
    id: "sofa-olive",
    name: "Olive Classic Sofa",
    style: "Three-seater · Leather",
    category: "Sofas",
    group: "sofas",
    description:
      "A traditional silhouette with rolled arms and a tailored base, finished in a warm, hard-wearing leather.",
    image: {
      src: "/images/products/sofas/olive-classic-leather-sofa.jpg",
      alt: "Dark brown leather sofa with cushions in a plant-filled living room",
    },
    highlights: ["Rolled arms", "Hard-wearing leather", "Seats 3"],
    tags: ["Three-seater", "Leather"],
  },
];

const bedEntries: ProductInput[] = [
  {
    id: "bed-serene",
    name: "Serene Upholstered Bed",
    style: "King · Upholstered headboard",
    category: "Beds",
    group: "beds",
    description:
      "A tall channel-tufted headboard in soft upholstery, with a low platform base that keeps the room feeling open.",
    image: {
      src: "/images/products/beds/serene-upholstered-king-bed.jpg",
      alt: "King size bed with a tall channel tufted upholstered headboard",
    },
    highlights: ["Channel tufted headboard", "King & queen", "Fabric of your choice"],
    tags: ["Upholstered", "King"],
    badge: "Made to order",
    featured: true,
  },
  {
    id: "bed-nova",
    name: "Nova Wooden Platform Bed",
    style: "Queen · Solid wood",
    category: "Beds",
    group: "beds",
    description:
      "A mid-century inspired frame in solid wood with a slim slatted headboard and a clean, low platform.",
    image: {
      src: "/images/products/beds/nova-wooden-platform-bed.jpg",
      alt: "Mid century wooden platform bed with white bedding in a bright bedroom",
    },
    highlights: ["Solid wood frame", "Slatted base", "Queen & king"],
    tags: ["Platform", "Wood"],
    featured: true,
  },
  {
    id: "bed-vault",
    name: "Vault Storage Bed",
    style: "King · Hydraulic storage",
    category: "Beds",
    group: "beds",
    description:
      "Full-width storage under a hydraulic lift base, sized to swallow bedding, luggage and off-season clothes.",
    image: {
      src: "/images/products/beds/vault-hydraulic-storage-bed.jpg",
      alt: "Charcoal grey channel-tufted storage bed with its base lifted open on hydraulic arms, showing the full-width storage beneath",
    },
    highlights: ["Hydraulic lift base", "Full-width storage", "King & queen"],
    tags: ["Storage", "King"],
    badge: "Storage",
    featured: true,
  },
  {
    id: "bed-linen",
    name: "Linen Wingback Bed",
    style: "Queen · Upholstered",
    category: "Beds",
    group: "beds",
    description:
      "A softly winged headboard that wraps the corners of the bed, upholstered in a textured, easy-clean fabric.",
    image: {
      src: "/images/products/beds/linen-wingback-bed.jpg",
      alt: "Upholstered wingback bed with side tables and lamps in a blue bedroom",
    },
    highlights: ["Wrapped wing headboard", "Textured fabric", "Queen & king"],
    tags: ["Upholstered", "Queen"],
    featured: true,
  },
  {
    id: "bed-atrium",
    name: "Atrium Low Platform Bed",
    style: "King · Solid wood",
    category: "Beds",
    group: "beds",
    description:
      "A wide, low-slung platform with a broad timber surround that doubles as a ledge for books and a lamp.",
    image: {
      src: "/images/products/beds/atrium-low-platform-bed.jpg",
      alt: "Low wooden platform bed with a wide surround ledge in a minimal bedroom",
    },
    highlights: ["Wide timber surround", "Low platform", "King"],
    tags: ["Platform", "Wood"],
  },
  {
    id: "bed-belmont",
    name: "Belmont Classic Bed",
    style: "King · Button tufted",
    category: "Beds",
    group: "beds",
    description:
      "A tall button-tufted headboard with a curved top edge, for bedrooms that lean classic rather than minimal.",
    image: {
      src: "/images/products/beds/belmont-button-tufted-bed.jpg",
      alt: "Classic button tufted cream headboard bed dressed with layered bedding",
    },
    highlights: ["Button tufted", "Curved headboard", "King & queen"],
    tags: ["Upholstered", "King"],
  },
  {
    id: "bed-suite",
    name: "Suite Panel Bed",
    style: "Queen · Panelled headboard",
    category: "Beds",
    group: "beds",
    description:
      "A hotel-style panelled headboard with a slim frame, finished in fabric or leatherette to match the room.",
    image: {
      src: "/images/products/beds/suite-panel-bed.jpg",
      alt: "Hotel style bed with a wide panelled grey headboard and bedside table",
    },
    highlights: ["Panelled headboard", "Fabric or leatherette", "Queen & king"],
    tags: ["Upholstered", "Queen"],
  },
  {
    id: "bed-cane",
    name: "Cane Weave Bed",
    style: "Queen · Wood & cane",
    category: "Beds",
    group: "beds",
    description:
      "A woven cane headboard set into a solid wood frame, a lighter option for smaller and warmer bedrooms.",
    image: {
      src: "/images/products/beds/cane-weave-bed.jpg",
      alt: "Bed with a woven cane and wood headboard in a light, textured bedroom",
    },
    highlights: ["Woven cane panel", "Solid wood frame", "Queen"],
    tags: ["Wood", "Queen"],
  },
];

const moreEntries: ProductInput[] = [
  {
    id: "dining-orbit",
    name: "Orbit Dining Set",
    style: "4 seater · Wood & upholstery",
    category: "Dining",
    group: "more",
    description:
      "A round dining table with upholstered chairs, sized for apartments where a rectangular table would crowd the room.",
    image: {
      src: "/images/products/more/orbit-round-dining-set.jpg",
      alt: "Round dining table with four upholstered chairs under a pendant light",
    },
    highlights: ["Round top", "Seats 4", "Chairs included"],
    tags: ["Dining", "Seats 4"],
  },
  {
    id: "dining-atrium",
    name: "Atrium Dining Table",
    style: "4 to 6 seater · Solid wood",
    category: "Dining",
    group: "more",
    description:
      "A pared-back dining table in solid wood, built to the length your room allows and finished to match your floor.",
    image: {
      src: "/images/products/more/atrium-solid-wood-dining-table.jpg",
      alt: "Minimal round dining table and chairs in a bright white room",
    },
    highlights: ["Built to length", "Solid wood", "Seats 4 to 6"],
    tags: ["Dining", "Wood"],
  },
  {
    id: "tv-linea",
    name: "Linea Wall TV Unit",
    style: "Wall mounted · Wood & laminate",
    category: "TV units",
    group: "more",
    description:
      "A floating media unit with concealed cable routing and open shelving arranged around your screen size.",
    image: {
      src: "/images/products/more/linea-wall-mounted-tv-unit.jpg",
      alt: "Wall mounted wooden TV unit with open shelving and concealed storage",
    },
    highlights: ["Concealed cable routing", "Built to your wall", "Open + closed storage"],
    tags: ["TV units", "Wall mounted"],
  },
  {
    id: "tv-base",
    name: "Base Floor TV Unit",
    style: "Floor standing · Wood",
    category: "TV units",
    group: "more",
    description:
      "A long, low console with soft-close drawers, deep enough for a console, a set-top box and everything else.",
    image: {
      src: "/images/products/more/base-floor-standing-tv-console.jpg",
      alt: "Long white floor standing TV console unit on a herringbone wood floor",
    },
    highlights: ["Soft-close drawers", "Long low profile", "Custom lengths"],
    tags: ["TV units", "Floor standing"],
  },
  {
    id: "wardrobe-atlas",
    name: "Atlas Wardrobe",
    style: "Hinged or sliding · Custom",
    category: "Wardrobes",
    group: "more",
    description:
      "Built to your wall height with an internal layout planned around what you actually hang, fold and store.",
    image: {
      src: "/images/products/more/atlas-custom-wardrobe.jpg",
      alt: "Tall wooden wardrobe and shelving unit built into a bedroom wall",
    },
    highlights: ["Floor to ceiling", "Planned internals", "Hinged or sliding"],
    tags: ["Wardrobes", "Made to measure"],
    badge: "Made to measure",
  },
  {
    id: "chair-petal",
    name: "Petal Accent Chair",
    style: "Accent chair · Upholstered",
    category: "Chairs",
    group: "more",
    description:
      "A small upholstered chair with a curved back, for a bedroom corner or beside a window.",
    image: {
      src: "/images/products/more/petal-upholstered-accent-chair.jpg",
      alt: "Pink scalloped petal-back accent chairs with a matching loveseat, photographed outside the workshop",
    },
    highlights: ["Curved back", "Compact", "Fabric of your choice"],
    tags: ["Chairs", "Upholstered"],
  },
  {
    id: "recliner-quill",
    name: "Quill Lounge Recliner",
    style: "Recliner · Leather",
    category: "Recliners",
    group: "more",
    description:
      "A leather lounge chair with a reclining back and a wide seat, made for long evenings and short naps.",
    image: {
      src: "/images/products/more/quill-leather-lounge-recliner.jpg",
      alt: "Tan leather lounge recliner chair beside a styled shelving unit",
    },
    highlights: ["Reclining back", "Leather upholstery", "Swivel base"],
    tags: ["Recliners", "Leather"],
  },
  {
    id: "sofa-petite",
    name: "Petite Loveseat",
    style: "Two-seater · Leather",
    category: "Living room",
    group: "more",
    description:
      "A compact leather two-seater that works as a second sofa, a hallway bench or study seating.",
    image: {
      src: "/images/products/more/petite-leather-loveseat.jpg",
      alt: "Cream leather two-seater loveseat against a plain wall",
    },
    highlights: ["Compact two-seater", "Leather upholstery", "Multi-room"],
    tags: ["Two-seater", "Leather"],
  },
];

/**
 * Attaches a URL slug to every entry so links stay in sync with the names, and
 * with it the 1200x630 social share card, whose filename is the same slug.
 *
 * The alt text is the photograph's own: the card is a crop of that same
 * picture, so nothing new is being asserted about it.
 *
 * The cards are produced by `scripts/generate-share-images.mjs`. Rename or add
 * a product and the slug changes, so re-run that script (`npm run
 * share-images`) or the card will 404.
 */
const withSlug = (entries: ProductInput[]): Product[] =>
  entries.map((entry) => {
    const slug = slugify(entry.name);
    return {
      ...entry,
      slug,
      shareImage: { src: `/images/share/products/${slug}.jpg`, alt: entry.image.alt },
    };
  });

export const sofas = withSlug(sofaEntries);
export const beds = withSlug(bedEntries);
export const moreFurniture = withSlug(moreEntries);

export const allProducts: Product[] = [...sofas, ...beds, ...moreFurniture];

/** Lookup used by the product detail route. */
export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((product) => product.slug === slug);
}

/** Other pieces from the same group, used for the "you may also like" row. */
export function getRelatedProducts(product: Product, limit = 3): Product[] {
  return allProducts
    .filter((item) => item.group === product.group && item.id !== product.id)
    .slice(0, limit);
}

export const featuredSofas = sofas.filter((p) => p.featured);
export const featuredBeds = beds.filter((p) => p.featured);
