import type { GalleryItem } from "@/lib/types";

/**
 * Lifestyle gallery. Mixed shapes on purpose: `tall`, `wide` and `square`
 * cells give the grid an editorial rhythm instead of a uniform product grid.
 * Real photography from the workshop floor and completed installs.
 */
export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    image: {
      src: "/images/gallery/dark-green-tufted-bed-in-styled-bedroom.jpg",
      alt: "Bedroom with a dark green fan-tufted upholstered bed and gold-trimmed curtains",
    },
    caption: "Bed in emerald velvet",
    shape: "tall",
  },
  {
    id: "g2",
    image: {
      src: "/images/gallery/coral-bed-with-panelled-headboard-in-bedroom.jpg",
      alt: "Coral upholstered bed with a panelled headboard installed beside a built-in wardrobe",
    },
    caption: "Coral bed, freshly installed",
    shape: "wide",
  },
  {
    id: "g3",
    image: {
      src: "/images/gallery/cream-tufted-headboard-detail.jpg",
      alt: "Close up of a cream channel-tufted bed headboard with brass trim",
    },
    caption: "Upholstery detail",
    shape: "square",
  },
  {
    id: "g4",
    image: {
      src: "/images/gallery/maroon-channel-tufted-bed-with-rug.jpg",
      alt: "Deep red channel-tufted bed dressed on a patterned rug in a furnished bedroom",
    },
    caption: "Channel-tufted bed in maroon",
    shape: "wide",
  },
  {
    id: "g5",
    image: {
      src: "/images/gallery/beige-petal-accent-chairs-pair.jpg",
      alt: "Pair of beige scalloped petal-back accent chairs beside a green upholstered bed",
    },
    caption: "Petal-back chairs, made to pair",
    shape: "tall",
  },
  {
    id: "g6",
    image: {
      src: "/images/gallery/sage-green-sunburst-headboard-bedroom.jpg",
      alt: "Sage green bed with a sunburst channel-tufted headboard in a bright bedroom",
    },
    caption: "Bedroom in sage and light",
    shape: "square",
  },
  {
    id: "g7",
    image: {
      src: "/images/gallery/hotel-style-headboard-bed-with-nightstands.jpg",
      alt: "Grey upholstered bed with a wide headboard and matching nightstands",
    },
    caption: "Hotel-style headboard and nightstands",
    shape: "wide",
  },
  {
    id: "g8",
    image: {
      src: "/images/gallery/olive-headboard-bed-with-matching-nightstands.jpg",
      alt: "Olive and charcoal panelled bed with matching bedside nightstands",
    },
    caption: "Bed and nightstands, matched",
    shape: "square",
  },
  {
    id: "g9",
    image: {
      src: "/images/gallery/craftsmen-upholstering-sectional-sofa-workshop.jpg",
      alt: "Craftsmen finishing a grey L-shaped sectional sofa on the workshop floor",
    },
    caption: "On the workshop floor",
    shape: "tall",
  },
  {
    id: "g10",
    image: {
      src: "/images/gallery/storage-bed-with-lifted-base-workshop.jpg",
      alt: "White upholstered storage bed with its base lifted open, fresh from the workshop",
    },
    caption: "Storage bed, base lifted",
    shape: "wide",
  },
  {
    id: "g11",
    image: {
      src: "/images/gallery/brown-petal-accent-chairs-with-patterned-cushions.jpg",
      alt: "Pair of brown scalloped petal-back accent chairs with patterned cushions",
    },
    caption: "Petal-back chairs in brown",
    shape: "square",
  },
  {
    id: "g12",
    image: {
      src: "/images/gallery/tan-channel-headboard-bed-in-bedroom.jpg",
      alt: "Tan channel-tufted bed installed in a bedroom beside a wood panelled door",
    },
    caption: "Installed and ready",
    shape: "square",
  },
];
