import type { GalleryItem } from "@/lib/types";

/**
 * Lifestyle gallery. Mixed shapes on purpose: `tall`, `wide` and `square`
 * cells give the grid an editorial rhythm instead of a uniform product grid.
 * Real photography from the workshop floor and completed installs.
 *
 * `room` drives the "In context" filter on `/sofas` and `/beds` (see those
 * pages) so each only shows its own furniture. Keep it interleaved here too:
 * the homepage and `/about` take a plain `slice(0, 6)` of this array for a
 * general "sofas and beds" preview, so the front of the list should mix both.
 */
export const galleryItems: GalleryItem[] = [
  {
    id: "g9",
    image: {
      src: "/images/gallery/craftsmen-upholstering-sectional-sofa-workshop.jpg",
      alt: "Mocha brown L-shaped sectional sofa staged on the workshop floor, upholstery materials wrapped behind it",
    },
    caption: "On the workshop floor",
    shape: "tall",
    room: "living-room",
  },
  {
    id: "g2",
    image: {
      src: "/images/gallery/coral-bed-with-panelled-headboard-in-bedroom.jpg",
      alt: "Coral upholstered bed with a panelled headboard installed beside a built-in wardrobe",
    },
    caption: "Coral bed, freshly installed",
    shape: "wide",
    room: "bedroom",
  },
  {
    id: "g5",
    image: {
      src: "/images/gallery/beige-petal-accent-chairs-pair.jpg",
      alt: "Pair of burnt-orange scalloped petal-back accent chairs, photographed outside the workshop",
    },
    caption: "Petal-back chairs in burnt orange",
    shape: "tall",
    room: "living-room",
  },
  {
    id: "g4",
    image: {
      src: "/images/gallery/maroon-channel-tufted-bed-with-rug.jpg",
      alt: "Deep red channel-tufted bed dressed on a patterned rug in a furnished bedroom",
    },
    caption: "Channel-tufted bed in maroon",
    shape: "wide",
    room: "bedroom",
  },
  {
    id: "g13",
    image: {
      src: "/images/gallery/royal-blue-scalloped-sofa-set.jpg",
      alt: "Royal blue scalloped sofa and armchair set on a wooden floor",
    },
    caption: "Scalloped sofa set in royal blue",
    shape: "wide",
    room: "living-room",
  },
  {
    id: "g6",
    image: {
      src: "/images/gallery/sage-green-sunburst-headboard-bedroom.jpg",
      alt: "Sage green bed with a sunburst channel-tufted headboard in a bright bedroom",
    },
    caption: "Bedroom in sage and light",
    shape: "square",
    room: "bedroom",
  },
  {
    id: "g11",
    image: {
      src: "/images/gallery/brown-petal-accent-chairs-with-patterned-cushions.jpg",
      alt: "Pair of hunter green channel-tufted barrel chairs in the showroom",
    },
    caption: "Channel-tufted chairs in hunter green",
    shape: "square",
    room: "living-room",
  },
  {
    id: "g7",
    image: {
      src: "/images/gallery/hotel-style-headboard-bed-with-nightstands.jpg",
      alt: "Grey upholstered bed with a wide headboard and matching nightstands",
    },
    caption: "Hotel-style headboard and nightstands",
    shape: "wide",
    room: "bedroom",
  },
  {
    id: "g14",
    image: {
      src: "/images/gallery/maroon-channel-tufted-sofa-and-loveseat.jpg",
      alt: "Maroon channel-tufted sofa and loveseat against an exposed brick wall",
    },
    caption: "Channel-tufted set in maroon",
    shape: "wide",
    room: "living-room",
  },
  {
    id: "g10",
    image: {
      src: "/images/gallery/storage-bed-with-lifted-base-workshop.jpg",
      alt: "Ivory upholstered storage bed with its base lifted open, fresh from the workshop",
    },
    caption: "Storage bed, base lifted",
    shape: "wide",
    room: "bedroom",
  },
  {
    id: "g15",
    image: {
      src: "/images/gallery/camel-l-shape-sectional-showroom.jpg",
      alt: "Camel-coloured L-shaped sectional sofa with patterned cushions in the showroom",
    },
    caption: "L-shape sectional in camel",
    shape: "square",
    room: "living-room",
  },
  {
    id: "g8",
    image: {
      src: "/images/gallery/olive-headboard-bed-with-matching-nightstands.jpg",
      alt: "Olive and charcoal panelled bed with matching bedside nightstands",
    },
    caption: "Bed and nightstands, matched",
    shape: "square",
    room: "bedroom",
  },
  {
    id: "g3",
    image: {
      src: "/images/gallery/cream-tufted-headboard-detail.jpg",
      alt: "Close up of a cream channel-tufted bed headboard with brass trim",
    },
    caption: "Upholstery detail",
    shape: "square",
    room: "bedroom",
  },
  {
    id: "g12",
    image: {
      src: "/images/gallery/tan-channel-headboard-bed-in-bedroom.jpg",
      alt: "Tan channel-tufted bed installed in a bedroom beside a wood panelled door",
    },
    caption: "Installed and ready",
    shape: "square",
    room: "bedroom",
  },
  {
    id: "g1",
    image: {
      src: "/images/gallery/dark-green-tufted-bed-in-styled-bedroom.jpg",
      alt: "Bedroom with a dark green fan-tufted upholstered bed and gold-trimmed curtains",
    },
    caption: "Bed in emerald velvet",
    shape: "tall",
    room: "bedroom",
  },
];
