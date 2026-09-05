import type { GalleryItem } from "@/lib/types";

/**
 * Lifestyle gallery. Mixed shapes on purpose: `tall`, `wide` and `square`
 * cells give the grid an editorial rhythm instead of a uniform product grid.
 * Replace with real room photography from completed orders when available.
 */
export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    image: {
      src: "/images/gallery/ivory-boucle-sofa-living-room.jpg",
      alt: "Cream boucle sofa and armchair arranged around a round centre table",
    },
    caption: "Living room in ivory and boucle",
    shape: "tall",
  },
  {
    id: "g2",
    image: {
      src: "/images/gallery/twin-grey-sofas-living-room.jpg",
      alt: "Pair of grey sofas facing each other across a marble centre table",
    },
    caption: "Twin sofa layout",
    shape: "wide",
  },
  {
    id: "g3",
    image: {
      src: "/images/gallery/upholstered-bed-cushion-detail.jpg",
      alt: "Close up of layered bedding and cushions on an upholstered bed",
    },
    caption: "Upholstery detail",
    shape: "square",
  },
  {
    id: "g4",
    image: {
      src: "/images/gallery/bedroom-with-foot-of-bed-ottomans.jpg",
      alt: "Bedroom with a low bed, two ottomans at the foot and framed artwork",
    },
    caption: "Bedroom with foot-of-bed ottomans",
    shape: "wide",
  },
  {
    id: "g5",
    image: {
      src: "/images/gallery/minimal-interior-with-black-bench.jpg",
      alt: "Minimal white interior with a slim black bench in an arched alcove",
    },
    caption: "Quiet, minimal lines",
    shape: "tall",
  },
  {
    id: "g6",
    image: {
      src: "/images/gallery/wooden-bed-with-green-bedding.jpg",
      alt: "Bedroom with a wooden bed, green bedding and hanging plants",
    },
    caption: "Bedroom in green and timber",
    shape: "square",
  },
  {
    id: "g7",
    image: {
      src: "/images/gallery/open-plan-living-and-dining-room.jpg",
      alt: "Open plan living and dining space with beige armchairs and a sofa",
    },
    caption: "Open plan living and dining",
    shape: "wide",
  },
  {
    id: "g8",
    image: {
      src: "/images/gallery/light-filled-white-bedroom.jpg",
      alt: "Bright white bedroom with a dressed bed and a bench at its foot",
    },
    caption: "Light-filled bedroom",
    shape: "square",
  },
  {
    id: "g9",
    image: {
      src: "/images/gallery/sculptural-seating-living-room.jpg",
      alt: "Living room with sculptural seating, textured cushions and tall windows",
    },
    caption: "Sculptural seating",
    shape: "tall",
  },
  {
    id: "g10",
    image: {
      src: "/images/gallery/lounge-seating-in-brick-walled-space.jpg",
      alt: "Lounge seating and low tables in a brick-walled social space",
    },
    caption: "Lounge and low tables",
    shape: "wide",
  },
  {
    id: "g11",
    image: {
      src: "/images/gallery/grey-sofa-and-media-wall-living-room.jpg",
      alt: "Grey living room with a sofa, centre table and a wall mounted TV unit",
    },
    caption: "Sofa and media wall",
    shape: "square",
  },
  {
    id: "g12",
    image: {
      src: "/images/gallery/side-table-and-lamp-detail.jpg",
      alt: "Detail of a side table with a lamp and a plant against a white wall",
    },
    caption: "Side table detail",
    shape: "square",
  },
];
