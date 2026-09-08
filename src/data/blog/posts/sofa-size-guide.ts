import type { BlogPost } from "@/lib/types";

/**
 * Long-tail sizing article. Narrower and more numerical than the pillar guide,
 * which is what makes it worth a separate page rather than a section.
 */
export const sofaSizeGuide: BlogPost = {
  slug: "sofa-size-guide-for-your-living-room",
  title: "Sofa size guide: working out what actually fits your living room",
  seoTitle: "Sofa Size Guide: What Fits Your Living Room",
  description:
    "Sofa dimensions explained: standard two, three and four-seater sizes, how to size an L-shape, walkway clearances and the measurements to take first.",
  excerpt:
    "Standard sofa dimensions, the clearances a room needs around them, and how to work out the two leg lengths of an L-shape before you order it.",
  category: "sofas-living-room",
  tags: ["sofas", "measuring", "living room", "L-shape"],
  publishedAt: "2026-09-07",
  image: {
    src: "/images/gallery/twin-grey-sofas-living-room.jpg",
    alt: "Two grey sofas set at right angles around a white centre table, with a fireplace and shuttered windows",
  },
  featured: true,
  takeaways: [
    "Sofa length is the easy number. Overall depth and the walkway around it are the ones that decide whether the room still works.",
    "Keep 75 cm of clear walkway on the main route, and 40 to 45 cm between the sofa and the centre table.",
    "For an L-shape, set the long leg from the wall it sits on and the return from the walkway it must not block.",
    "Sofa dimensions vary by design. Always ask for the exact figures for the piece you are ordering.",
  ],
  blocks: [
    {
      type: "paragraph",
      text: [
        "Furniture shopping goes wrong at the tape measure, not at the till. A sofa that is 15 cm deeper than you planned does not just take 15 cm: it takes the walkway, then the door swing, then the reason you liked the room. This is the numbers article. Keep it open while you measure.",
      ],
    },
    {
      type: "paragraph",
      text: [
        "For the wider decisions, frames, foam, upholstery and access, start with ",
        { text: "how to choose a sofa", href: "/blog/how-to-choose-a-sofa" },
        ". This piece only deals with dimensions.",
      ],
    },

    { type: "heading", level: 2, text: "The four measurements to take first" },
    {
      type: "list",
      ordered: true,
      items: [
        [
          { text: "The sofa wall.", strong: true },
          " Its full length, minus anything you cannot move: a switchboard, a radiator, the swing of a door.",
        ],
        [
          { text: "Wall to facing object.", strong: true },
          " From the sofa wall to the TV unit, the opposite sofa or the dining table. This is the number that limits depth.",
        ],
        [
          { text: "The walkway.", strong: true },
          " The route people take across the room. Measure the narrowest point of it now, before furniture reduces it further.",
        ],
        [
          { text: "The access route.", strong: true },
          " Building entrance, lift depth and door, landing turn, and your own door frame including the diagonal.",
        ],
      ],
    },
    {
      type: "callout",
      title: "Overall depth is not seat depth",
      text: [
        "Overall depth is the whole footprint, back cushion to front edge, usually 85 to 100 cm. Seat depth is only the sitting surface, usually 55 to 65 cm. Quoted specifications mix the two constantly. Ask which number you are being given.",
      ],
    },

    { type: "heading", level: 2, text: "Standard sofa dimensions" },
    {
      type: "paragraph",
      text: [
        "There is no single standard, but designs cluster. Use the table to plan, then confirm the exact figures for the piece you order, because arm width alone can move the overall length by 20 cm.",
      ],
    },
    {
      type: "table",
      caption: "Typical sofa dimensions by size, in centimetres",
      columns: ["Size", "Overall length", "Overall depth", "Seats comfortably"],
      rows: [
        ["Loveseat / compact two-seater", "130 to 150", "80 to 90", "2"],
        ["Two-seater", "150 to 175", "85 to 95", "2"],
        ["Three-seater", "180 to 210", "85 to 100", "3"],
        ["Large three-seater / four-seater", "215 to 250", "90 to 105", "3 to 4"],
        ["L-shape, long leg", "240 to 300", "90 to 100", "4 to 6 across both legs"],
        ["L-shape, return leg", "150 to 200", "90 to 100", "included above"],
      ],
    },
    {
      type: "paragraph",
      text: [
        "Seat height is the quiet one. Most sofas sit between 42 and 48 cm from the floor to the top of the seat cushion. Lower than that looks contemporary and is harder to stand up from; higher suits anyone with stiff knees. If a sofa and a dining chair are in the same open-plan space, a big difference in seat height is very visible.",
      ],
    },

    { type: "heading", level: 2, text: "The clearances a living room needs" },
    {
      type: "definitions",
      items: [
        {
          term: "Main walkway: 75 to 90 cm",
          text: [
            "The route people actually walk. Below 75 cm two people cannot pass, and the room starts to feel like a corridor.",
          ],
        },
        {
          term: "Sofa to centre table: 40 to 45 cm",
          text: [
            "Close enough to reach a cup without leaning forward, far enough to get your legs past. This is the clearance people most often get wrong.",
          ],
        },
        {
          term: "Sofa to TV: 2 to 3 m for a 55 inch screen",
          text: [
            "Roughly 1.5 to 2.5 times the screen's diagonal. Fix the seating distance first and choose the screen to suit, not the other way round.",
          ],
        },
        {
          term: "Behind a floating sofa: 60 cm minimum",
          text: [
            "If the sofa does not sit against a wall, you need a real walkway behind it, otherwise the gap just collects dust.",
          ],
        },
      ],
    },

    { type: "heading", level: 2, text: "How to size an L-shape" },
    {
      type: "paragraph",
      text: [
        "An L-shape is two decisions, and people usually only make one. The long leg is set by the wall it sits against: aim for about two thirds of that wall's length. The return leg is set by what it points into, and this is where rooms get spoiled.",
      ],
    },
    {
      type: "paragraph",
      text: [
        "Stand at the room's entrance and look at where the return would land. If it reaches into the main walkway, shorten it, even if that means a return that looks a little modest on paper. A 180 cm return that leaves a clear path is a better sofa than a 220 cm one you have to walk around.",
      ],
    },
    {
      type: "list",
      items: [
        [
          { text: "Which side?", strong: true },
          " Face the sofa as you would sit on it. A right-hand-facing chaise has the return on your right. Decide by which side has the wall or the window, not by the photograph.",
        ],
        [
          { text: "Corner or chaise?", strong: true },
          " A full corner section seats an extra person and squares off the room. An open chaise is lighter, easier to move around and better in a narrow space.",
        ],
        [
          { text: "Can you swap it later?", strong: true },
          " On a fixed sectional, no. On a modular design, yes, which is worth paying for if you expect to move house.",
        ],
      ],
    },
    {
      type: "paragraph",
      text: [
        "The ",
        { text: "Meridian L-shape sectional", href: "/furniture/meridian-l-shape-sectional" },
        " is the fixed-corner version of this decision and the ",
        { text: "Halden modular sectional", href: "/furniture/halden-modular-sectional" },
        " the rearrangeable one. Both can be built with the leg lengths your room needs rather than the ones in the photograph.",
      ],
    },
    {
      type: "cta",
      title: "Send the room measurements and skip the guesswork",
      text: "Give us the wall length, the wall-to-facing distance and a photo of the room, and we will come back with the sofa dimensions that fit, including which way an L-shape should face.",
      whatsappMessage:
        "Hi, I have my living room measurements and I'd like help working out the sofa size that fits.",
      whatsappLabel: "Get a size recommendation",
      link: { href: "/sofas", label: "See sofa designs and sizes" },
    },

    { type: "heading", level: 2, text: "Small rooms: where to find the centimetres" },
    {
      type: "paragraph",
      text: [
        "When the numbers do not work, these are the levers, roughly in order of how much space they return for how little you give up.",
      ],
    },
    {
      type: "list",
      items: [
        [
          { text: "Slim arms.", strong: true },
          " A 10 cm arm instead of a 25 cm one gives back 30 cm of length without losing a single seat.",
        ],
        [
          { text: "Exposed legs.", strong: true },
          " Seeing the floor under the sofa makes a room read larger. A skirted base to the floor does the opposite.",
        ],
        [
          { text: "A shallower seat.", strong: true },
          " Dropping from 65 cm to 57 cm of seat depth takes 8 cm off the footprint and makes the sofa easier to get out of.",
        ],
        [
          { text: "A lower back.", strong: true },
          " Under about 80 cm of total height, the sofa stops interrupting the sightline across the room.",
        ],
        [
          { text: "Two smaller pieces.", strong: true },
          " A two-seater plus an armchair often seats the same number as a three-seater and can be arranged around an awkward corner.",
        ],
      ],
    },
    {
      type: "paragraph",
      text: [
        "If the room is genuinely tight rather than just modest, the layout matters more than the sofa. ",
        { text: "Furnishing a small apartment", href: "/blog/furniture-for-small-apartments-noida" },
        " works through a full 2BHK, room by room.",
      ],
    },

    { type: "heading", level: 2, text: "Before you confirm the order" },
    {
      type: "checklist",
      title: "Final dimension check",
      items: [
        "Overall length, overall depth and overall height, in writing",
        "Seat depth and seat height, quoted separately from the above",
        "Arm width, so you know how much of the length is actually seat",
        "For an L-shape: which leg is which length, and which side it faces",
        "The narrowest point on the delivery route, compared against the sofa's depth and height",
        "Whether the legs, arms or back detach for the journey in",
      ],
    },
    {
      type: "paragraph",
      text: [
        "Six numbers and one photograph of your room is enough for anyone competent to tell you whether a sofa will work. If a seller cannot give you those six numbers, that is the answer to a different question.",
      ],
    },
  ],
  faqs: [
    {
      id: "three-seater-length",
      question: "How long is a standard three-seater sofa?",
      answer:
        "Most three-seater sofas are between 180 and 210 cm long overall, with an overall depth of 85 to 100 cm. Arm width accounts for much of the variation, so a slim-armed 180 cm sofa can offer as much sitting space as a wide-armed 205 cm one.",
    },
    {
      id: "space-between-sofa-and-table",
      question: "How much space should there be between a sofa and a centre table?",
      answer:
        "Between 40 and 45 cm. That is close enough to reach the table without standing up and wide enough to walk past. Less than 35 cm and people knock the table with their shins; more than 50 cm and the seating stops feeling like a group.",
    },
    {
      id: "l-shape-small-room",
      question: "Will an L-shape sofa fit in a small living room?",
      answer:
        "Often yes, if the return leg is kept short and points away from the main walkway. An L-shape in a corner can use space that a straight sofa wastes. The risk is a return leg long enough to cut the room in half, so measure from the room's entrance to where the return would end before ordering.",
    },
  ],
  relatedLinks: [
    {
      href: "/sofas",
      label: "Sofa designs in every shape",
      description: "Three-seaters, L-shapes, modular and compact designs, made to your dimensions.",
    },
    {
      href: "/furniture/petite-loveseat",
      label: "Petite loveseat",
      description: "The compact option when a three-seater is 30 cm too much for the wall.",
    },
    {
      href: "/furniture#living-room",
      label: "Centre and side tables",
      description: "Sized to leave the 40 cm of clearance the room needs.",
    },
  ],
  relatedPosts: [
    "how-to-choose-a-sofa",
    "furniture-for-small-apartments-noida",
    "sofa-fabric-vs-leather-delhi-ncr-climate",
  ],
};
