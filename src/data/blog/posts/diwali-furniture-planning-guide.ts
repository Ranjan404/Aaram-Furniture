import { siteConfig } from "@/config/site";
import type { BlogPost } from "@/lib/types";

/**
 * Seasonal guide that supports /diwali-furniture. Its subject is the real
 * constraint of buying for a fixed date: working back from the festival with
 * a made-to-order build time, then deciding which room to sort out first.
 * The build time is read from `siteConfig` so the article cannot disagree with
 * the product pages. Revise `seoTitle` and `updatedAt` for each year's festival
 * rather than publishing a near-copy under a new slug.
 */
const leadTime = siteConfig.leadTime ?? "a few days";

export const diwaliFurniturePlanningGuide: BlogPost = {
  slug: "diwali-furniture-planning-guide",
  title: "Furniture to sort out before Diwali: a room-by-room plan",
  seoTitle: "Furniture Before Diwali 2026: A Room-by-Room Plan",
  description:
    "Which furniture to order first before Diwali, how to work back from the festival date with a made-to-order build, and how to keep diyas and upholstery apart.",
  excerpt:
    "Seating, the dining table, the guest bed and the media wall, in the order they matter in festival week, and how to time a made-to-order piece.",
  category: "buying-guides",
  tags: ["buying guide", "diwali", "sofas", "dining", "beds", "delhi ncr"],
  publishedAt: "2026-10-28",
  image: {
    src: "/images/gallery/maroon-channel-tufted-sofa-and-loveseat.jpg",
    alt: "Maroon channel-tufted sofa and loveseat against an exposed brick wall",
  },
  takeaways: [
    `Work back from the festival: a made-to-order piece needs ${leadTime} to build after the design is confirmed, and the deciding takes longer than the building.`,
    "Sort out seating first. It is the piece every guest uses, and the one that is hardest to improvise.",
    "Measure the dining room with the chairs pulled out, not pushed in.",
    "Plan where the diyas and rangoli go before the furniture is placed, and keep open flames well clear of anything upholstered.",
  ],
  blocks: [
    {
      type: "paragraph",
      text: [
        "Diwali is the week a home is used hardest: more people sitting at once, a meal the whole family sits down to, relatives staying over and lamps on every surface. It is also the week most people decide the sofa is too small or the dining table seats two too few, which is usually too late to do much about it.",
      ],
    },
    {
      type: "paragraph",
      text: [
        "This is the order to deal with it in, and how to time it when the furniture is ",
        { text: "made to order", href: "/custom-furniture" },
        " rather than taken off a shelf.",
      ],
    },

    { type: "heading", level: 2, text: "Work back from the festival date" },
    {
      type: "paragraph",
      text: [
        `Our pieces are built in ${leadTime} once the design is confirmed. That is the short part. The part that takes time is everything before it: measuring the room, choosing between two designs, settling the fabric and agreeing the size. Leave room for that, and agree delivery timing for your building when you confirm the order.`,
      ],
    },
    {
      type: "checklist",
      title: "In order, before you confirm a design",
      items: [
        "Measure the room, the doorways and the narrowest turn of the stairs or the lift",
        "Decide how many people the piece has to serve on the busiest day, not a normal one",
        "Shortlist two designs and ask for the sizes they can be built to",
        "Choose the fabric or finish, ideally from a physical sample in daylight",
        "Confirm the design, then agree delivery timing for your building",
      ],
    },

    { type: "heading", level: 2, text: "1. The living room: seating for the busiest evening" },
    {
      type: "paragraph",
      text: [
        "Count the people who sit down at once on the evening everyone visits. If that number is two more than your sofa holds, an extra chair is the obvious fix and rarely the right one: it blocks a walkway and nobody wants to sit on it. A corner sectional like the ",
        { text: "Meridian L-shape", href: "/furniture/meridian-l-shape-sectional" },
        ", or a modular piece like the ",
        { text: "Halden modular sectional", href: "/furniture/halden-modular-sectional" },
        ", seats more people along the same walls.",
      ],
    },
    {
      type: "paragraph",
      text: [
        "Think about what the sofa will go through in festival week: sweets, chai, children in new clothes. A darker or patterned fabric forgives more than a pale plain one, and a design with removable covers can be cleaned without a visit from anyone. The ",
        { text: "fabric or leather guide", href: "/blog/sofa-fabric-vs-leather-delhi-ncr-climate" },
        " covers how each copes with the Delhi NCR climate the rest of the year.",
      ],
    },

    { type: "heading", level: 2, text: "2. The dining table: one more chair than usual" },
    {
      type: "paragraph",
      text: [
        "A festival meal is the one time every chair is taken, so measure for that. Mark the table on the floor, then pull the chairs out to where people actually sit and check there is still room to walk behind them with a plate. A common rule of thumb is around 75 to 90 cm between the table edge and a wall or another piece of furniture.",
      ],
    },
    {
      type: "paragraph",
      text: [
        "In a squarer room, a round top takes an extra chair more easily than a square one; the ",
        { text: "Orbit dining set", href: "/furniture/orbit-dining-set" },
        " is built for exactly that. In a long room, a table built to the length the room allows, like the ",
        { text: "Atrium dining table", href: "/furniture/atrium-dining-table" },
        ", uses the space better than a standard size with a gap at one end.",
      ],
    },

    { type: "heading", level: 2, text: "3. The guest room: a bed that hides the extra bedding" },
    {
      type: "paragraph",
      text: [
        "Visiting family brings quilts, pillows and luggage that has to go somewhere. A storage bed like the ",
        { text: "Vault storage bed", href: "/furniture/vault-storage-bed" },
        " keeps all of it under the mattress, and keeps doing that the other fifty weeks of the year. Check the mattress size you already own before you choose the bed size; the ",
        { text: "bed buying guide", href: "/blog/how-to-choose-a-bed" },
        " goes through the rest.",
      ],
    },

    { type: "heading", level: 2, text: "4. The media wall: plan the sockets for the lights" },
    {
      type: "paragraph",
      text: [
        "The wall with the television is usually the one that gets the strings of lights, and the one with the fewest sockets in the right place. A wall-mounted unit with concealed cable routing, such as the ",
        { text: "Linea wall TV unit", href: "/furniture/linea-wall-tv-unit" },
        ", can be laid out around the sockets you have, so the festival lighting does not mean extension leads across the floor.",
      ],
    },

    { type: "heading", level: 2, text: "Diyas, rangoli and your furniture" },
    {
      type: "callout",
      title: "Keep open flames clear of anything upholstered",
      text: [
        "Place the furniture after you have decided where the diyas and candles go, not before. Keep a clear margin between any open flame and sofas, cushions and curtains, and never leave lamps burning on a shelf directly under fabric.",
      ],
    },
    {
      type: "list",
      items: [
        [
          { text: "Stand diyas on a tray, not on wood.", strong: true },
          " Heat and oil both mark a timber or laminate top. A metal plate or a ceramic tile underneath costs nothing and saves the finish.",
        ],
        [
          { text: "Let wax set before you deal with it.", strong: true },
          " A drip on fabric comes away far more cleanly once it has hardened than while it is still soft.",
        ],
        [
          { text: "Keep the entrance clear.", strong: true },
          " If the rangoli is at the door, move anything that guests would have to step around, and keep furniture legs off the powder.",
        ],
      ],
    },

    { type: "heading", level: 2, text: "Check the way in before festival week" },
    {
      type: "paragraph",
      text: [
        "In a high-rise, the service lift decides what arrives in one piece; in a builder floor it is the turn in the staircase. Both are covered in the guides for ",
        { text: "Noida apartments", href: "/blog/furniture-for-small-apartments-noida" },
        " and ",
        { text: "Ghaziabad builder floors", href: "/blog/furnishing-a-builder-floor-in-ghaziabad" },
        ". Ask your society about delivery hours too, because they are often busiest in the week before the festival.",
      ],
    },

    {
      type: "cta",
      title: "Planning a piece for Diwali?",
      text: "Send us the room measurements and what you have in mind, and we will tell you which designs suit the space and what can be built in time.",
      whatsappMessage: "Hi, I'd like to plan a furniture order before Diwali. Could you share the details?",
      whatsappLabel: "Discuss your Diwali order",
      link: { href: "/diwali-furniture", label: "See the Diwali collection" },
    },
  ],
  faqs: [
    {
      id: "diwali-guide-what-first",
      question: "Which furniture should I buy first before Diwali?",
      answer:
        "Seating. It is what every guest uses, and the hardest thing to improvise. After that, a dining table that seats the whole family, then a guest bed with storage for the extra bedding.",
    },
    {
      id: "diwali-guide-timing",
      question: "How early should I order made-to-order furniture for Diwali?",
      answer: `The build takes ${leadTime} once the design is confirmed, but measuring, choosing and settling the fabric usually takes longer. Start early enough to decide calmly, and agree delivery timing for your building when you confirm.`,
    },
    {
      id: "diwali-guide-diyas",
      question: "How do I keep diyas from damaging furniture?",
      answer:
        "Keep open flames well away from upholstery and curtains, and stand diyas on a metal tray or tile rather than directly on wood, which heat and oil both mark.",
    },
  ],
  relatedLinks: [
    {
      href: "/diwali-furniture",
      label: "The Diwali collection",
      description: "Hosting pieces from the range, and when to confirm a design.",
    },
    {
      href: "/sofas",
      label: "Sofa designs",
      description: "Three-seaters, sectionals and modular sofas, built to your size.",
    },
    {
      href: "/furniture#dining",
      label: "Dining tables",
      description: "Round and built-to-length tables for the family meal.",
    },
  ],
  relatedPosts: ["how-to-choose-a-sofa", "sofa-size-guide-for-your-living-room", "how-to-choose-a-bed"],
};
