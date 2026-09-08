import type { BlogPost } from "@/lib/types";

/** Pillar article for the bed cluster. */
export const howToChooseABed: BlogPost = {
  slug: "how-to-choose-a-bed",
  title: "How to choose a bed: sizes, storage and what a good frame is made of",
  seoTitle: "How to Choose a Bed: Sizes, Storage & Frames",
  description:
    "Indian bed sizes explained, storage versus platform beds, hydraulic and drawer mechanisms, headboard heights and how to plan a bedroom around the bed.",
  excerpt:
    "Indian bed sizes in one table, the real difference between hydraulic and drawer storage, and the frame details that decide whether a bed stays silent.",
  category: "beds-bedroom",
  tags: ["beds", "buying guide", "bedroom", "storage"],
  publishedAt: "2026-09-07",
  image: {
    src: "/images/products/beds/serene-upholstered-king-bed.jpg",
    alt: "Channel-tufted upholstered king bed in pale grey, with a bedside table and lamp on each side",
  },
  featured: true,
  takeaways: [
    "In India a queen is usually 60 by 78 inches and a king 72 by 78. Confirm the frame's internal dimensions before buying a mattress.",
    "Leave 60 cm of walking space on at least one long side, and 75 cm if a wardrobe door opens into it.",
    "Hydraulic storage holds far more; drawers are easier to use daily. Pick by what you will actually store.",
    "A silent bed is a matter of joinery and the centre support, not of price.",
  ],
  blocks: [
    {
      type: "paragraph",
      text: [
        "A bed has to do three things at once: fit the room, fit the mattress, and stay quiet for a decade. The first is a measuring problem, the second is a specification problem that catches a surprising number of people, and the third comes down to details you cannot see once the bed is made.",
      ],
    },
    {
      type: "paragraph",
      text: [
        "This guide takes them in that order. The ",
        { text: "bed designs", href: "/beds" },
        " page shows the shapes; this explains how to choose between them.",
      ],
    },

    { type: "heading", level: 2, text: "Bed sizes in India" },
    {
      type: "paragraph",
      text: [
        "Bed sizes are not internationally consistent, and Indian sizes differ from American and European ones. An Indian king is narrower than a US king and slightly shorter. This matters when you buy a mattress or bedding online from a listing that assumes a different standard.",
      ],
    },
    {
      type: "table",
      caption: "Bed and mattress sizes commonly sold in India",
      columns: ["Size", "Mattress, inches", "Mattress, cm", "Room it suits"],
      rows: [
        ["Single", "36 x 75", "91 x 190", "Child's room, study, guest nook"],
        ["Double", "48 x 75", "122 x 190", "Compact second bedroom"],
        ["Queen", "60 x 78", "152 x 198", "Most master bedrooms in a 2BHK"],
        ["King", "72 x 78", "183 x 198", "Master bedroom of about 12 x 12 ft or larger"],
        ["Custom", "Made to order", "Made to order", "Awkward rooms, or anyone over 6 ft 2 in"],
      ],
    },
    {
      type: "callout",
      title: "The frame is bigger than the mattress",
      text: [
        "A king mattress is 183 cm wide, but the bed itself will be 195 to 215 cm wide once the frame and any upholstery are added, and 15 to 30 cm longer than the mattress with a headboard. Always plan the room around the frame's external dimensions, and buy the mattress to the frame's internal ones.",
      ],
    },
    {
      type: "paragraph",
      text: [
        "If you are over about 6 ft 1 in, a 78 inch mattress is short. A made-to-order frame can be built 84 inches long without changing anything else about the design, which is one of the more genuinely useful reasons to have a bed made rather than bought off the floor.",
      ],
    },

    { type: "heading", level: 2, text: "Clearances: how much room the bed needs around it" },
    {
      type: "list",
      items: [
        [
          { text: "60 cm minimum on one long side", strong: true },
          ", so the bed can be made and walked past. 75 cm is comfortable.",
        ],
        [
          { text: "75 to 90 cm where a wardrobe opens", strong: true },
          ". Measure the door's swing, not the wardrobe's face. Sliding doors need none of this, which is often the reason to choose them.",
        ],
        [
          { text: "90 cm at the foot", strong: true },
          " if there is a walkway there, or 30 cm if the wall is simply the end of the room.",
        ],
        [
          { text: "Both sides, in a shared bedroom.", strong: true },
          " A bed pushed against one wall means one person climbs over the other every night. It is the fastest way to regret an extra 20 cm of mattress.",
        ],
      ],
    },
    {
      type: "paragraph",
      text: [
        "The common trap in a builder-built bedroom is choosing a king because the room technically takes one, then discovering there is no room left for side tables or for the wardrobe door. In a 10 by 11 ft bedroom a queen with two side tables usually lives better than a king with neither.",
      ],
    },

    { type: "heading", level: 2, text: "Storage, platform or upholstered" },
    {
      type: "paragraph",
      text: [
        "This is the real decision, and it is about how the room is used rather than about how the bed looks.",
      ],
    },
    { type: "heading", level: 3, text: "Hydraulic lift-up storage" },
    {
      type: "paragraph",
      text: [
        "The whole mattress platform lifts on gas pistons to reveal one large box underneath. It offers by far the most storage of any bed, and it is the right answer for bulky, seasonal things: quilts, suitcases, winter bedding.",
      ],
    },
    {
      type: "paragraph",
      text: [
        "What to check: that the pistons are rated for the mattress weight you intend to use, that the platform can be lifted one-handed, and that there is space in front of the bed for the platform's arc. You cannot open it with a rug or a bench in the way, and you will not open it daily, so do not put things you need every morning in there. The ",
        { text: "Vault storage bed", href: "/furniture/vault-storage-bed" },
        " is the hydraulic version of this design.",
      ],
    },
    { type: "heading", level: 3, text: "Drawer storage" },
    {
      type: "paragraph",
      text: [
        "Two to four drawers in the base. Much less total volume than hydraulic, but you can open one without stripping the bed, which means it actually gets used. Check the runners: proper telescopic channel runners will still work in five years, and drawers that slide on bare wood will not.",
      ],
    },
    {
      type: "paragraph",
      text: [
        "Drawers need clearance to pull out. If the bed sits close to a wardrobe, side-opening drawers on that side are useless, so specify which side they open on before the bed is built.",
      ],
    },
    { type: "heading", level: 3, text: "Platform, with no storage" },
    {
      type: "paragraph",
      text: [
        "The lightest option visually and usually the quietest, because there is less structure to work loose. A low platform makes a small bedroom look larger, and an open base lets air move under the mattress, which matters more in a humid month than most people expect. Choose it if you have wardrobe space and want the room to feel calm. The ",
        { text: "Nova wooden platform bed", href: "/furniture/nova-wooden-platform-bed" },
        " and the ",
        { text: "Atrium low platform bed", href: "/furniture/atrium-low-platform-bed" },
        " sit at two different heights of the same idea.",
      ],
    },
    { type: "heading", level: 3, text: "Upholstered" },
    {
      type: "paragraph",
      text: [
        "An upholstered headboard is a comfort decision as much as an aesthetic one: it is the difference between reading in bed against padding and against wood. It can be combined with any of the three bases above. Fabric on a headboard collects dust in the buttoning and the seams, so a smooth or lightly channelled panel is easier to live with than deep tufting.",
      ],
    },
    {
      type: "cta",
      title: "Send us the bedroom dimensions",
      text: "Give us the room size, where the door and the wardrobe are, and what you need to store. We will tell you which size fits, which storage type suits the layout, and which side the drawers should open on.",
      whatsappMessage:
        "Hi, I read your bed buying guide. I'd like help choosing a bed size and storage type for my bedroom.",
      whatsappLabel: "Ask about bed sizes",
      link: { href: "/beds", label: "Browse bed designs" },
    },

    { type: "heading", level: 2, text: "Headboard height" },
    {
      type: "paragraph",
      text: [
        "Headboards run from about 60 cm above the mattress to full-height panels that reach most of the way up the wall. Height changes the room more than any other single feature of a bed.",
      ],
    },
    {
      type: "list",
      items: [
        [
          { text: "Low, 60 to 80 cm above the mattress.", strong: true },
          " Keeps a small or low-ceilinged room open. Not much to lean against.",
        ],
        [
          { text: "Mid, 80 to 110 cm.", strong: true },
          " The comfortable default, and high enough to read against.",
        ],
        [
          { text: "Tall or full wall.", strong: true },
          " Gives the room a clear focal point and works well under a high ceiling. It needs to be built to your wall height, and it will cover a socket or a switch if you do not plan for it.",
        ],
      ],
    },
    {
      type: "paragraph",
      text: [
        "Check where your bedside sockets and switches are before choosing a tall headboard. Moving a headboard is easy; moving a switchboard is not.",
      ],
    },

    { type: "heading", level: 2, text: "What makes a bed silent" },
    {
      type: "paragraph",
      text: [
        "Creaking is not a mattress problem. It is almost always one of four things, and all four are questions you can ask.",
      ],
    },
    {
      type: "list",
      ordered: true,
      items: [
        [
          { text: "The joinery.", strong: true },
          " Bolted or dowelled joints into solid timber stay tight. Joints held with screws into engineered board work loose as the board compresses.",
        ],
        [
          { text: "The centre support.", strong: true },
          " A queen or king base needs a central rail with its own legs to the floor. Without it the slats flex in the middle, and that flex is what you hear.",
        ],
        [
          { text: "Slat spacing.", strong: true },
          " Slats should sit no more than about 7 cm apart, both to stay quiet and because most foam and pocket-spring mattress warranties require it.",
        ],
        [
          { text: "Contact points.", strong: true },
          " Wood resting directly on wood squeaks. Felt or rubber pads where the slats meet the rails cost almost nothing and remove most of the noise.",
        ],
      ],
    },

    { type: "heading", level: 2, text: "Before you order" },
    {
      type: "checklist",
      title: "Bed order checklist",
      items: [
        "Room dimensions, and the position of the door, window and wardrobe",
        "External frame dimensions, and internal dimensions for the mattress",
        "Mattress thickness, so the bed's finished height is what you expect",
        "Storage type, and which side any drawer opens on",
        "Headboard height, checked against sockets and switches",
        "Centre support and slat spacing confirmed",
        "Whether the frame comes apart for the journey up the stairs or the lift",
      ],
    },
    {
      type: "paragraph",
      text: [
        "For the layout of the whole bedroom rather than just the bed, and for what to do when the room is genuinely small, ",
        { text: "furnishing a small apartment", href: "/blog/furniture-for-small-apartments-noida" },
        " works through a compact 2BHK room by room.",
      ],
    },
  ],
  faqs: [
    {
      id: "queen-vs-king-india",
      question: "What is the difference between a queen and a king bed in India?",
      answer:
        "A queen mattress in India is usually 60 by 78 inches and a king 72 by 78 inches, so a king is a foot wider at the same length. Indian sizes differ from American ones, where a king is 76 by 80 inches, so check the frame's internal dimensions before ordering a mattress or bedding.",
    },
    {
      id: "bed-size-for-12x12-room",
      question: "Will a king bed fit in a 12 by 12 ft bedroom?",
      answer:
        "Usually yes. A king frame is about 195 to 215 cm wide overall, which leaves roughly 60 to 70 cm on each side of a 12 ft wall for walking and side tables. It gets tight if a wardrobe with hinged doors opens onto one of those sides, in which case a queen or sliding wardrobe doors is the better combination.",
    },
    {
      id: "hydraulic-vs-drawer-storage",
      question: "Is hydraulic storage better than drawers in a bed?",
      answer:
        "Hydraulic storage holds far more and suits bulky seasonal items like quilts and suitcases. Drawers hold less but open without disturbing the bedding, so they get used daily. Many people are best served by drawers on the accessible side and no storage at all on the side that faces a wardrobe.",
    },
    {
      id: "why-does-my-bed-creak",
      question: "Why does a bed creak, and can it be prevented?",
      answer:
        "Creaking usually comes from joints working loose in engineered board, a missing central support under a queen or king base, slats spaced too far apart, or bare wood resting on bare wood. Bolted joints into solid timber, a centre rail with its own legs, slats no more than about 7 cm apart and felt pads at the contact points prevent nearly all of it.",
    },
  ],
  relatedLinks: [
    {
      href: "/beds",
      label: "All bed designs",
      description: "Upholstered, storage and platform beds in king, queen and custom sizes.",
    },
    {
      href: "/furniture/vault-storage-bed",
      label: "Vault storage bed",
      description: "Hydraulic lift-up storage, for when the wardrobe has run out of room.",
    },
    {
      href: "/furniture#wardrobes",
      label: "Wardrobes and bedroom storage",
      description: "Built to the wall you have, with the door type your layout allows.",
    },
  ],
  relatedPosts: [
    "furniture-for-small-apartments-noida",
    "made-to-measure-vs-ready-made-furniture",
    "furniture-care-summer-and-monsoon",
  ],
};
