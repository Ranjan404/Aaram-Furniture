import type { BlogPost } from "@/lib/types";

/**
 * Commercially important guide: it explains the made-to-order model the
 * business actually runs on, and it is the article the other guides point at
 * whenever a room, an alcove or a staircase makes a standard size impossible.
 */
export const madeToMeasureVsReadyMade: BlogPost = {
  slug: "made-to-measure-vs-ready-made-furniture",
  title: "Made to measure or ready made? How to decide, piece by piece",
  seoTitle: "Made to Measure vs Ready Made Furniture",
  description:
    "When custom furniture is worth it and when a standard size is the better buy, judged piece by piece: sofas, beds, wardrobes, dining tables and media units.",
  excerpt:
    "Custom is not automatically better. It is better for specific reasons. Here is which pieces genuinely benefit and which are fine bought as standard.",
  category: "buying-guides",
  tags: ["buying guide", "made to measure", "custom furniture", "wardrobes"],
  publishedAt: "2026-09-07",
  image: {
    src: "/images/categories/wooden-two-door-wardrobe.jpg",
    alt: "Tall wooden two-door wardrobe built to fit the corner of a room, above a herringbone floor",
  },
  takeaways: [
    "Made to measure earns its keep where a dimension is fixed by the room: alcoves, wardrobes, awkward corners and tight access.",
    "Standard sizes are usually fine for chairs, side tables and anything that stands in the middle of a room.",
    "The real advantage of made to order is not the size. It is being able to specify the frame, the foam and the finish.",
    "Ask what is genuinely being made for you and what is a catalogue piece with a different fabric on it.",
  ],
  blocks: [
    {
      type: "paragraph",
      text: [
        "Custom furniture is often sold as straightforwardly better, which is not true, and dismissed as an expensive indulgence, which is also not true. It is better for a specific list of reasons, and outside that list a well-made standard piece is the sensible buy.",
      ],
    },
    {
      type: "paragraph",
      text: [
        "This is that list, and then the same question answered piece by piece.",
      ],
    },

    { type: "heading", level: 2, text: "When made to measure is clearly worth it" },
    {
      type: "definitions",
      items: [
        {
          term: "A dimension is fixed by the room",
          text: [
            "An alcove, a wall between two pillars, a space under a beam, a corner that is not square. Standard sizes leave gaps in these places, and the gap is what makes a room look unfinished.",
          ],
        },
        {
          term: "The access will not take a standard piece",
          text: [
            "A lift that is too shallow, a staircase with a tight turn, a doorway with a narrow diagonal. A piece built to come apart, or built in sections, is often the only way in.",
          ],
        },
        {
          term: "Nobody makes it in your proportion",
          text: [
            "A 195 cm sofa when the market offers 180 or 215. A 210 cm bed for someone over six feet. A dining table for a long narrow room. Off-the-shelf ranges cluster around the average.",
          ],
        },
        {
          term: "You care about the specification",
          text: [
            "Seat depth, foam density, back angle, a specific timber or finish. This is the reason people underrate, and it is often the strongest one: made to order means you choose what goes inside, not just what goes on top.",
          ],
        },
        {
          term: "It has to match something existing",
          text: [
            "A new wardrobe beside one that stays, or a media unit that has to align with existing joinery. Matching is a made-to-measure job by definition.",
          ],
        },
      ],
    },

    { type: "heading", level: 2, text: "When ready made is the better buy" },
    {
      type: "list",
      items: [
        [
          { text: "You need it now.", strong: true },
          " Anything made for you has a production time. If the flat is empty and you are sleeping on the floor, buy the bed that exists.",
        ],
        [
          { text: "The piece stands free in the middle of a room.", strong: true },
          " Dining chairs, accent chairs, side tables, stools, poufs. Nothing about the room constrains them, so the only question is whether you like them.",
        ],
        [
          { text: "You want to sit on it before deciding.", strong: true },
          " Recliners and armchairs are personal enough that trying the exact piece is worth more than adjusting a dimension.",
        ],
        [
          { text: "It is a short-term flat.", strong: true },
          " Furniture built to one room's alcove does not move house well.",
        ],
        [
          { text: "The standard size genuinely fits.", strong: true },
          " If a 180 cm sofa is right for the wall, having a 180 cm sofa made adds cost and lead time and nothing else.",
        ],
      ],
    },
    {
      type: "callout",
      title: "Made to order is not the same as bespoke design",
      text: [
        "Most made-to-order furniture is an existing design built in your dimensions and your materials. That is different from designing a piece from scratch, and it costs and takes far less. When you ask about custom work, be clear which one you want: usually the first is what you actually need.",
      ],
    },

    { type: "heading", level: 2, text: "Piece by piece" },
    {
      type: "table",
      caption: "Where custom work pays for itself",
      columns: ["Piece", "Worth making?", "Why"],
      rows: [
        [
          "Wardrobe",
          "Almost always",
          "Height, depth and internal layout are all set by your wall and what you store. Standard wardrobes waste both floor and ceiling.",
        ],
        [
          "Sofa",
          "Often",
          "Length, seat depth and access all matter, and the frame and foam specification is where the real difference lies.",
        ],
        [
          "Bed",
          "Sometimes",
          "Standard sizes suit most people. Worth making for a custom length, a full-wall headboard, or a specific storage arrangement.",
        ],
        [
          "TV or media unit",
          "Often",
          "It has to relate to a screen size, the sockets and the wall. A standard unit rarely lines up with all three.",
        ],
        [
          "Dining table",
          "Sometimes",
          "Worth it for a long narrow room or an unusual seat count. Otherwise standard sizes are well judged.",
        ],
        [
          "Dining and accent chairs",
          "Rarely",
          "Nothing constrains them, and trying them beats specifying them.",
        ],
        [
          "Side and centre tables",
          "Rarely",
          "Easy to find in the size you need, and easy to change your mind about.",
        ],
        [
          "Study desk in an alcove",
          "Almost always",
          "A desk built into a recess uses depth that would otherwise be dead space.",
        ],
      ],
    },
    {
      type: "paragraph",
      text: [
        "If you are furnishing a whole flat, that table is also a budget strategy: put the money into the pieces in the top half, and buy the bottom half well but conventionally. The ",
        { text: "furniture categories", href: "/furniture" },
        " page is arranged along roughly the same lines, with ",
        { text: "wardrobes", href: "/furniture#wardrobes" },
        " and ",
        { text: "custom work", href: "/furniture#custom" },
        " kept separate from the standing pieces.",
      ],
    },

    { type: "heading", level: 2, text: "What to ask a maker" },
    {
      type: "paragraph",
      text: [
        "Not every seller offering custom furniture is making it. Some are ordering a catalogue piece in a different fabric, which is a perfectly reasonable service but a different one, priced differently. These questions separate the two.",
      ],
    },
    {
      type: "list",
      ordered: true,
      items: [
        [
          "Which dimensions can actually change, and which are fixed by the design?",
        ],
        [
          "Does changing the length change the proportions, the number of cushions or the leg positions?",
        ],
        [
          "What is the frame material and the foam density, and can I have those in writing?",
        ],
        [
          "Will someone measure the room and the access, or am I responsible for the measurements?",
        ],
        [
          "Can it be delivered knocked down and assembled inside?",
        ],
        [
          "What happens if the finished piece does not match the agreed dimensions?",
        ],
        [
          "Can I see the fabric or finish as a physical sample before it is cut?",
        ],
      ],
    },
    {
      type: "paragraph",
      text: [
        "The answer to question four matters more than people expect. A made-to-measure piece is only as good as the measurements it was built from, and a maker who wants to check the room themselves is telling you something useful about how often that goes wrong.",
      ],
    },
    {
      type: "cta",
      title: "Not sure which pieces are worth making?",
      text: "Send the room dimensions, or the builder's floor plan, and a note on what you need to store. We will tell you which pieces should be made to measure and which you are better off buying as standard.",
      whatsappMessage:
        "Hi, I'd like to know which pieces in my home are worth making to measure. Could I share my room dimensions?",
      whatsappLabel: "Discuss your requirement",
      link: { href: "/furniture#custom", label: "See custom furniture" },
    },

    { type: "heading", level: 2, text: "Two mistakes to avoid" },
    {
      type: "paragraph",
      text: [
        "The first is customising the wrong thing: paying for a bespoke centre table while buying a standard wardrobe that leaves 40 cm of dead space above it. Spend the customisation where the room is forcing your hand.",
      ],
    },
    {
      type: "paragraph",
      text: [
        "The second is over-fitting a rented flat. Built-in work that fills an alcove exactly is excellent and completely unmovable. If you expect to move within a couple of years, keep the large pieces freestanding and use made-to-measure only where it changes whether something fits at all, such as getting a sofa up a staircase.",
      ],
    },
    {
      type: "paragraph",
      text: [
        "For the access side of that decision, ",
        { text: "furnishing a builder floor", href: "/blog/furnishing-a-builder-floor-in-ghaziabad" },
        " goes through measuring a staircase properly, and ",
        { text: "how to choose a sofa", href: "/blog/how-to-choose-a-sofa" },
        " covers the specification questions in more detail.",
      ],
    },
  ],
  faqs: [
    {
      id: "is-custom-furniture-worth-it",
      question: "Is custom furniture worth the extra cost?",
      answer:
        "It is worth it where the room fixes a dimension: alcoves, wardrobes, awkward corners, tight delivery access, or an unusual length. It is also worth it when you want to specify the frame, the foam density or a particular finish. For freestanding pieces such as dining chairs, accent chairs and side tables, a well-made standard piece is usually the better buy.",
    },
    {
      id: "which-furniture-should-be-custom",
      question: "Which furniture is most worth making to measure?",
      answer:
        "Wardrobes first, because their height, depth and internal layout are all dictated by your wall and what you store. Then sofas, where length, seat depth, access and specification all matter, and media units, which have to relate to a screen, the sockets and the wall at once. Chairs and small tables rarely justify it.",
    },
    {
      id: "made-to-order-vs-bespoke",
      question: "What is the difference between made to order and bespoke?",
      answer:
        "Made to order usually means an existing design built in your dimensions, upholstery and finish. Bespoke means a piece designed from scratch for you. Made to order costs and takes considerably less, and for most homes it is what is actually needed.",
    },
  ],
  relatedLinks: [
    {
      href: "/furniture#custom",
      label: "Custom furniture",
      description: "Share a reference design or a measurement and we will build to it.",
    },
    {
      href: "/furniture#wardrobes",
      label: "Wardrobes made to your wall",
      description: "The piece that most reliably justifies made-to-measure work.",
    },
    {
      href: "/sofas",
      label: "Sofas built to your dimensions",
      description: "Length, depth, arm height and upholstery specified per piece.",
    },
  ],
  relatedPosts: [
    "how-to-choose-a-sofa",
    "furnishing-a-builder-floor-in-ghaziabad",
    "how-to-choose-a-bed",
  ],
};
