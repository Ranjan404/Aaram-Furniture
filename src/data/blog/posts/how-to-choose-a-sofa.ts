import type { BlogPost } from "@/lib/types";

/**
 * Pillar article for the sofa cluster. Every other sofa guide links back to
 * this one, and this one links out to the range pages and to the narrower
 * pieces (sizing, upholstery in the local climate, small-space layouts).
 */
export const howToChooseASofa: BlogPost = {
  slug: "how-to-choose-a-sofa",
  title: "How to choose a sofa: a buying guide that starts with your room",
  seoTitle: "How to Choose a Sofa: Complete Buying Guide",
  description:
    "A practical sofa buying guide: how to size a sofa to your room, judge the frame, foam and suspension, pick a shape, and choose upholstery that lasts.",
  excerpt:
    "Most sofa regret is a sizing or a seat-depth problem, not a taste problem. Here is the order to make the decisions in, and what to check before you pay.",
  category: "buying-guides",
  tags: ["sofas", "buying guide", "upholstery", "measuring"],
  publishedAt: "2026-09-07",
  image: {
    src: "/images/gallery/ivory-boucle-sofa-living-room.jpg",
    alt: "Cream three-seater sofa and a boucle armchair around a round marble centre table in a pale living room",
  },
  featured: true,
  takeaways: [
    "Measure the room and the route into it before you look at a single design.",
    "Seat depth and back angle decide how a sofa feels. Fabric decides how it looks.",
    "Ask what the frame, the suspension and the seat foam are made of. Those three answers predict how the sofa will be in five years.",
    "A sofa that is 20 cm too long ruins a room. One that is 20 cm too short just looks a little lost. When in doubt, go smaller.",
  ],
  blocks: [
    {
      type: "paragraph",
      text: [
        "A sofa is the piece a living room is planned around, and it is usually the piece people choose last and fastest. That order is backwards. Almost every complaint about a sofa a year later comes down to one of three things: it is too big for the room, it is too deep for the people sitting on it, or the parts nobody can see were not built for daily use.",
      ],
    },
    {
      type: "paragraph",
      text: [
        "None of those are matters of taste, and all three can be settled before you order. This guide runs through the decisions in the order that actually works, from the room to the frame to the fabric. If you already know the shape you want, the ",
        { text: "sofa designs", href: "/sofas" },
        " page shows what each one looks like at full size.",
      ],
    },

    { type: "heading", level: 2, text: "Start with the room, not the sofa" },
    {
      type: "paragraph",
      text: [
        "Take four measurements before you shortlist anything: the length of the wall the sofa will sit against, the distance from that wall to whatever faces it, the width of the walkway you need to keep clear, and the size of the window or balcony door you must not block.",
      ],
    },
    {
      type: "paragraph",
      text: [
        "Then work to two rules of thumb. Leave a walkway of at least 75 cm through the main route across the room, and keep the sofa to roughly two thirds of the length of its wall so the wall still reads as a wall rather than as a shelf for furniture. A three-seater is commonly somewhere between 180 and 210 cm long, which means a 210 cm sofa wants about 3 m of wall behind it to look settled.",
      ],
    },
    {
      type: "callout",
      title: "Mark it out on the floor",
      text: [
        "Before you commit, put masking tape on the floor at the exact length and depth of the sofa you are considering, then live around it for a day. It takes ten minutes and it catches the mistake that no photograph will.",
      ],
    },

    { type: "heading", level: 2, text: "Seat depth is the measurement that decides comfort" },
    {
      type: "paragraph",
      text: [
        "Length is what people measure. Depth is what they feel. Seat depth is the distance from the front edge of the seat to the base of the back cushion, and a difference of 5 cm changes the sofa completely.",
      ],
    },
    {
      type: "definitions",
      items: [
        {
          term: "Around 55 cm",
          text: [
            "An upright seat. Easy to get out of, kind to shorter legs and to anyone with a bad back, and the right choice for a room where the sofa doubles as the dining-side seating.",
          ],
        },
        {
          term: "Around 60 cm",
          text: [
            "The middle ground, and the safest single answer for a family sofa where everybody is a different height.",
          ],
        },
        {
          term: "65 cm and over",
          text: [
            "A lounging seat. Excellent for a film on a Sunday, awkward for anyone under about 5 ft 4 in, whose feet will not reach the floor without perching on the front edge.",
          ],
        },
      ],
    },
    {
      type: "paragraph",
      text: [
        "Back angle works with it. A reclined back and a deep seat is a sofa you sink into; an upright back with a deep seat is the worst of both, because you end up sitting forward on an expensive cushion. If you can, sit on the design for five full minutes rather than five seconds. The first impression of a sofa and the fifth minute of it are often different sofas.",
      ],
    },

    { type: "heading", level: 2, text: "What is inside matters more than what is on top" },
    {
      type: "paragraph",
      text: [
        "Upholstery is what you choose from a photograph. The frame, the suspension and the foam are what you are actually buying. Ask about all three, in these words, and note the answers.",
      ],
    },
    { type: "heading", level: 3, text: "The frame" },
    {
      type: "paragraph",
      text: [
        "Solid kiln-dried hardwood is the benchmark, because kiln drying takes the moisture out before the timber is cut, so the frame does not twist as it settles. Good quality plywood in the right thickness is a legitimate choice too, particularly for straight sections. What you want to avoid is particle board anywhere structural, and joints held together only by staples. Corner blocks, dowels or screws at the joints are the sign of a frame built to be sat on hard.",
      ],
    },
    { type: "heading", level: 3, text: "The suspension" },
    {
      type: "paragraph",
      text: [
        "This is the layer between the frame and the cushion, and it is why two sofas with identical foam feel different. Sinuous (S-shaped) springs are the common, reliable option. Elasticated webbing is lighter and works well on low, slim designs. Eight-way hand-tied springs are the traditional top of the range and cost accordingly. Any of them is fine. Nothing at all, or thin webbing stretched too far apart, is not.",
      ],
    },
    { type: "heading", level: 3, text: "The seat foam" },
    {
      type: "paragraph",
      text: [
        "Foam is specified by density, in kg per cubic metre, and density is what determines whether the seat still has its shape in three years. Seat foam is commonly specified somewhere around 32 to 40 kg/m3; back cushions are softer on purpose. A soft, low-density seat feels wonderful in a showroom and develops a dip exactly where the person who always sits there sits. If a seat is described only as ",
        { text: "soft", strong: true },
        " or ",
        { text: "high density", strong: true },
        " with no number, ask for the number.",
      ],
    },
    {
      type: "cta",
      title: "Not sure which specification suits how you sit?",
      text: "Tell us how the sofa will be used, who sits on it and how long for, and we will tell you which seat depth and foam specification to ask for, whether or not you order from us.",
      whatsappMessage:
        "Hi, I read your sofa buying guide. I'd like help choosing the right seat depth and foam for my sofa.",
      whatsappLabel: "Ask about seat comfort",
      link: { href: "/sofas", label: "Browse sofa designs" },
    },

    { type: "heading", level: 2, text: "Choosing a shape" },
    {
      type: "paragraph",
      text: [
        "Shape follows the room's geometry more than it follows fashion. The table below is the short version of a decision most people take too long over.",
      ],
    },
    {
      type: "table",
      caption: "Which sofa shape suits which room",
      columns: ["Shape", "Works when", "Watch out for"],
      rows: [
        [
          "Three-seater",
          "One long clear wall; you want an armchair or a second sofa facing it",
          "Looks stranded on a wall much longer than the sofa",
        ],
        [
          "L-shape sectional",
          "A corner you want to use properly; seating for five or more without a second piece",
          "Fixes the layout in place, and the return leg blocks a walkway if it is too long",
        ],
        [
          "Modular",
          "An open-plan living and dining space, or a room you expect to rearrange",
          "Sections can drift apart in daily use unless they connect",
        ],
        [
          "Two-seater or loveseat",
          "A compact living room, a study, or as the second piece opposite a larger sofa",
          "Seats two adults comfortably and three not at all",
        ],
      ],
    },
    {
      type: "paragraph",
      text: [
        "If a corner is the obvious answer, read the ",
        { text: "sofa size guide", href: "/blog/sofa-size-guide-for-your-living-room" },
        " next: it covers how to work out the two leg lengths of an L-shape and which side the return should be on. The ",
        { text: "Meridian L-shape sectional", href: "/furniture/meridian-l-shape-sectional" },
        " and the ",
        { text: "Halden modular sectional", href: "/furniture/halden-modular-sectional" },
        " are the two designs worth comparing if you are weighing a fixed corner against sections you can move.",
      ],
    },

    { type: "heading", level: 2, text: "Upholstery: what each material asks of you" },
    {
      type: "paragraph",
      text: [
        "Every upholstery is a trade between how it looks, how it wears and how much attention it wants. Pick for the household you actually have, not the one in the catalogue photograph.",
      ],
    },
    {
      type: "list",
      items: [
        [
          { text: "Woven synthetics and blends.", strong: true },
          " The practical default. Tight weaves resist snagging, and a mid-tone with some texture hides dust and marks far better than either a flat pale colour or a dark solid.",
        ],
        [
          { text: "Linen and cotton.", strong: true },
          " Beautiful, breathable, and honest about every spill. Best in a room that is not the family's main landing spot.",
        ],
        [
          { text: "Velvet.", strong: true },
          " Deeper colour than any other fabric and surprisingly hard-wearing when the pile is short and dense. It does show the direction it was last brushed in.",
        ],
        [
          { text: "Leather.", strong: true },
          " The longest-lived option and the easiest to wipe clean, which is why it suits homes with children. Full grain develops a patina; corrected or bonded leather does not, and does not last as long either.",
        ],
        [
          { text: "Boucle and loop piles.", strong: true },
          " Lovely texture, but loops catch on claws and rings. Avoid it if you have a cat.",
        ],
      ],
    },
    {
      type: "paragraph",
      text: [
        "Climate matters as much as the household. If you are buying in Delhi, Gurgaon, Noida or Ghaziabad, the dust and the monsoon humidity change which of these is the sensible answer. That comparison is its own article: ",
        { text: "fabric or leather in Delhi NCR's climate", href: "/blog/sofa-fabric-vs-leather-delhi-ncr-climate" },
        ".",
      ],
    },
    {
      type: "callout",
      title: "Ask for a swatch, in your own light",
      text: [
        "Upholstery changes colour under showroom lighting. Get a physical swatch, put it in the room at the time of day you use the room most, and look at it against your floor and curtains before you decide.",
      ],
    },

    { type: "heading", level: 2, text: "Check the access before you order" },
    {
      type: "paragraph",
      text: [
        "A sofa that will not go up the stairwell is a very expensive lesson. Before you confirm, measure the narrowest point on the route: the building entrance, the lift's internal depth and door width, the turn on the landing, your own doorway, and the diagonal of the door frame. Compare that to the sofa's depth and height, not its length, because that is the dimension it travels on.",
      ],
    },
    {
      type: "paragraph",
      text: [
        "If the numbers are tight, the answer is usually a knock-down design, where the legs and sometimes the arms detach, or a modular sofa that arrives in sections. Made-to-measure work has an advantage here: the piece can be built to the access you have. There is more on that trade-off in ",
        { text: "made to measure versus ready made", href: "/blog/made-to-measure-vs-ready-made-furniture" },
        ".",
      ],
    },

    { type: "heading", level: 2, text: "The questions to ask before you pay" },
    {
      type: "checklist",
      title: "Take this list to the shop",
      items: [
        "What is the frame made of, and is the timber kiln dried?",
        "What is the suspension: springs, webbing, or hand-tied?",
        "What is the seat foam density in kg/m3, and what is in the back cushions?",
        "What is the exact seat depth, seat height and overall depth?",
        "Can it be built in my size, and does that change the proportions of the design?",
        "Are the covers removable, and can a single panel be re-covered later?",
        "What is the rub-test rating or the durability grade of this fabric?",
        "Will it come through a 90 cm door and a lift 1.2 m deep?",
        "What exactly is covered if the frame or the mechanism fails?",
      ],
    },
    {
      type: "paragraph",
      text: [
        "A seller who answers all nine plainly is a seller who knows what they are selling. If the answers get vague around the frame and the foam, that is useful information too.",
      ],
    },

    { type: "heading", level: 2, text: "The order to decide in" },
    {
      type: "list",
      ordered: true,
      items: [
        ["Measure the room, the walkway and the access route."],
        ["Fix the maximum length and depth you can live with."],
        ["Choose the shape those numbers allow."],
        ["Choose the seat depth and back angle for the people using it."],
        ["Specify the frame, suspension and foam."],
        ["Only then choose the fabric or leather."],
      ],
    },
    {
      type: "paragraph",
      text: [
        "Done in that order, the fabric decision is the fun one instead of the one that has to compensate for everything else. If you would rather talk it through than work through it alone, send the room measurements and a photo of the space: that is usually a ten-minute conversation that saves a year of regret.",
      ],
    },
  ],
  faqs: [
    {
      id: "sofa-size-room",
      question: "What size sofa should I buy for a small living room?",
      answer:
        "Keep the sofa to roughly two thirds of the length of the wall it sits on, and leave at least 75 cm of clear walkway on the main route through the room. In a compact room that usually means a two-seater or a slim-armed three-seater at around 180 cm rather than 210 cm, and a seat depth nearer 55 cm than 65 cm.",
    },
    {
      id: "sofa-fabric-or-leather",
      question: "Is fabric or leather better for a sofa?",
      answer:
        "Leather lasts longer and wipes clean, which suits homes with children and homes in dusty areas. Fabric is warmer to sit on, offers far more colour and texture, and costs less to re-cover. The deciding factors are usually how easily you need to clean it and how much direct sunlight the sofa sits in.",
    },
    {
      id: "sofa-foam-density",
      question: "What foam density should a sofa seat have?",
      answer:
        "Seat foam is commonly specified around 32 to 40 kg per cubic metre, with softer foam or a fibre and foam mix in the back cushions. Density is what keeps the seat's shape over years of use, so ask for the actual number rather than a description like soft or firm.",
    },
    {
      id: "sofa-custom-size",
      question: "Can a sofa be made in a custom size?",
      answer:
        "Yes. A made-to-order sofa can be built to a specific length, depth or arm height, which is the usual answer when a room is an awkward shape or when access to the flat is tight. Share the room dimensions and the narrowest point on the delivery route and the design can be adjusted around both.",
    },
  ],
  relatedLinks: [
    {
      href: "/sofas",
      label: "All sofa designs",
      description: "Three-seaters, L-shapes, modular layouts and loveseats, each made to order.",
    },
    {
      href: "/furniture/aspen-leather-three-seater",
      label: "Aspen leather three-seater",
      description: "A full-grain leather sofa on a solid wood frame, if leather is the direction.",
    },
    {
      href: "/collection",
      label: "The collection in real rooms",
      description: "How the same shapes read in different spaces, materials and light.",
    },
  ],
  relatedPosts: [
    "sofa-size-guide-for-your-living-room",
    "sofa-fabric-vs-leather-delhi-ncr-climate",
    "made-to-measure-vs-ready-made-furniture",
  ],
};
