import type { BlogPost } from "@/lib/types";

/** Care article. Written around the seasons a north Indian home actually has. */
export const furnitureCareSummerAndMonsoon: BlogPost = {
  slug: "furniture-care-summer-and-monsoon",
  title: "Furniture care through the summer and the monsoon",
  seoTitle: "Furniture Care Guide: Summer, Monsoon & Dust",
  description:
    "How to look after sofas, beds and wooden furniture through heat, dust and monsoon humidity: cleaning upholstery and leather, protecting wood, seasonal checks.",
  excerpt:
    "Furniture here has to survive dust for most of the year, then three months of humidity. A short seasonal routine prevents nearly all of the damage.",
  category: "furniture-care",
  tags: ["furniture care", "upholstery", "leather", "wood", "monsoon"],
  publishedAt: "2026-09-07",
  image: {
    src: "/images/about/styled-living-room-with-sectional-sofa.jpg",
    alt: "Cream L-shape sectional sofa with a chaise, kept clean and styled with cushions and a throw",
  },
  takeaways: [
    "Vacuum upholstery weekly with a brush head. It is the single highest-value habit in a dusty climate.",
    "Blot spills, never rub. Rubbing pushes the stain into the weave and lifts the pile.",
    "In the monsoon, air the rooms and leave a gap behind large pieces. Trapped damp air is what causes the damage, not the rain.",
    "Condition leather twice a year, and keep it out of both direct sun and air-conditioner airflow.",
  ],
  blocks: [
    {
      type: "paragraph",
      text: [
        "Furniture rarely fails suddenly. It gets slowly duller, stiffer or looser, and by the time it is obvious the cause is a year in the past. Almost all of it is preventable with a routine that takes about twenty minutes a week and two afternoons a year.",
      ],
    },
    {
      type: "paragraph",
      text: [
        "Here it is, split by material and then by season. If you are still choosing upholstery rather than looking after it, ",
        { text: "fabric or leather in Delhi NCR's climate", href: "/blog/sofa-fabric-vs-leather-delhi-ncr-climate" },
        " covers which materials make this routine easier.",
      ],
    },

    { type: "heading", level: 2, text: "Fabric upholstery" },
    {
      type: "list",
      items: [
        [
          { text: "Vacuum weekly, with the upholstery brush head.", strong: true },
          " Fine dust is abrasive: left in the weave it wears the fibres from the inside every time somebody sits down. This is the habit that matters most.",
        ],
        [
          { text: "Rotate and flip the cushions every couple of months.", strong: true },
          " It evens out both the compression and any fading, and it is why two identical sofas look different after three years.",
        ],
        [
          { text: "Blot spills, do not rub.", strong: true },
          " Press a clean dry cloth straight down, from the outside of the mark inwards. Rubbing spreads the stain sideways and lifts the pile.",
        ],
        [
          { text: "Test any cleaner on the underside first.", strong: true },
          " Every fabric has a cleaning code. If you do not know it, plain water on a barely damp cloth is the safe default; solvent on the wrong fabric leaves a permanent ring.",
        ],
        [
          { text: "Dry it properly.", strong: true },
          " A fan on a damp patch for an hour. A cushion that dries slowly in humid weather is how a small spill becomes a smell.",
        ],
        [
          { text: "Deal with pilling with a fabric shaver, not scissors.", strong: true },
          " Pilling on a woven fabric is loose fibre, not wear, and it stops after the first few passes.",
        ],
      ],
    },
    {
      type: "callout",
      title: "The cleaning code",
      text: [
        "Upholstery is usually coded W (water-based cleaner), S (solvent only), WS (either) or X (vacuum only, no liquid at all). Ask for the code when you order and write it somewhere you will find it, because the wrong choice on an X-coded fabric cannot be undone.",
      ],
    },

    { type: "heading", level: 2, text: "Leather" },
    {
      type: "paragraph",
      text: [
        "Leather is the least demanding surface day to day and the least forgiving about two things: heat and dry air.",
      ],
    },
    {
      type: "list",
      items: [
        [
          { text: "Dust it dry, weekly.", strong: true },
          " A soft dry cloth. That is the whole weekly routine.",
        ],
        [
          { text: "Condition it twice a year.", strong: true },
          " Once before the summer and once after the monsoon, with a conditioner made for finished leather. It replaces the oils that heat and conditioned air pull out, and it is what prevents cracking.",
        ],
        [
          { text: "Keep it out of direct sun.", strong: true },
          " Sunlight both fades and stiffens leather, and the fading is uneven.",
        ],
        [
          { text: "Keep it out of the AC's airflow.", strong: true },
          " Half a metre of offset from where the air lands is enough. Dry air does more damage to leather in this climate than any spill.",
        ],
        [
          { text: "Wipe spills immediately with a dry or barely damp cloth.", strong: true },
          " No soap, no solvent, no alcohol-based wipes.",
        ],
      ],
    },

    { type: "heading", level: 2, text: "Wood and veneer" },
    {
      type: "list",
      items: [
        [
          { text: "Dust with a slightly damp cloth, then dry it.", strong: true },
          " A dry cloth on dusty wood is fine abrasive paper. Always follow the grain.",
        ],
        [
          { text: "Use coasters and mats, without apology.", strong: true },
          " Heat rings and water rings both go through the finish, and both are far harder to repair than they are to prevent.",
        ],
        [
          { text: "Keep polish occasional.", strong: true },
          " Two or three times a year with a wax or a polish suited to the finish. Weekly spray polish builds a film that dulls the surface and attracts dust.",
        ],
        [
          { text: "Check and tighten the hardware once a year.", strong: true },
          " Hinges, handles, bed bolts, drawer runners. Ten minutes with a screwdriver, and it is what keeps a bed silent.",
        ],
        [
          { text: "Expect wood to move.", strong: true },
          " Solid timber expands in the monsoon and contracts in the winter. Drawers that stick in August and slide in December are behaving normally; forcing them is what causes damage.",
        ],
      ],
    },

    { type: "heading", level: 2, text: "The summer, roughly March to June" },
    {
      type: "list",
      items: [
        [
          "Move or shade anything sitting in a west-facing window. Even half a metre helps, and a sheer for the middle of the day helps more.",
        ],
        [
          "Rotate cushions monthly rather than every couple of months, because this is when fading happens fastest.",
        ],
        [
          "Condition leather at the start of the season, not in the middle of it.",
        ],
        [
          "Check that nothing upholstered has ended up directly in front of a split unit after the AC came back on.",
        ],
      ],
    },

    { type: "heading", level: 2, text: "The monsoon, roughly July to September" },
    {
      type: "paragraph",
      text: [
        "Humidity does not damage furniture on its own. Trapped, still, humid air does, and so does anything that stays damp for more than a day.",
      ],
    },
    {
      type: "list",
      items: [
        [
          { text: "Leave 5 to 10 cm behind large pieces.", strong: true },
          " Especially against an external wall. Air movement behind a wardrobe or a sofa back is the most effective precaution there is.",
        ],
        [
          { text: "Air the rooms daily, even briefly.", strong: true },
          " An hour of cross ventilation on a dry morning does more than a dehumidifier running in a closed room.",
        ],
        [
          { text: "Do not shut damp bedding or clothes into a wardrobe.", strong: true },
          " It is the usual cause of both the smell and the mildew people blame on the wardrobe.",
        ],
        [
          { text: "Dry anything that gets wet within the day.", strong: true },
          " A fan, not sunlight, which is harsher on upholstery than the damp is.",
        ],
        [
          { text: "Watch the floor-level edges.", strong: true },
          " Mopping water that sits against the plinth of a unit is a slow, reliable way to swell board from the bottom up.",
        ],
        [
          { text: "Check hinges and metal fittings for early rust.", strong: true },
          " A wipe of light oil at the start of the season prevents it.",
        ],
      ],
    },

    { type: "heading", level: 2, text: "After the monsoon, and into winter" },
    {
      type: "checklist",
      title: "The twice-yearly half hour",
      items: [
        "Condition all leather surfaces",
        "Tighten every visible screw, bolt and hinge",
        "Vacuum inside and behind the sofa, including under the cushions",
        "Check the base of wardrobes and beds for any swelling or discolouration",
        "Wipe metal fittings with a light oil",
        "Rotate seat cushions and swap end cushions with middle ones",
        "Look at the walls behind large pieces for any sign of damp",
      ],
    },
    {
      type: "paragraph",
      text: [
        "None of this is elaborate, and none of it needs a specialist. The reason to bother is straightforward: a sofa or a bed with a sound frame can be re-covered or refinished and given a second life, but only if the frame has been kept dry and tight. Everything above is really just about protecting the part you cannot replace.",
      ],
    },
    {
      type: "cta",
      title: "Something needs repairing or re-covering?",
      text: "Send a photo of the piece and the problem. We will tell you whether it is worth re-covering or refinishing, and what it would involve.",
      whatsappMessage:
        "Hi, I have a question about looking after a piece of furniture. Could I send you a photo?",
      whatsappLabel: "Ask about a repair",
      link: { href: "/furniture", label: "See the current range" },
    },
  ],
  faqs: [
    {
      id: "how-often-clean-fabric-sofa",
      question: "How often should a fabric sofa be cleaned?",
      answer:
        "Vacuum it weekly with an upholstery brush head, which is what prevents fine dust from abrading the fibres, and have it deep cleaned once a year or so depending on use. Rotate and flip the cushions every couple of months so compression and fading stay even.",
    },
    {
      id: "protect-furniture-monsoon",
      question: "How do I protect furniture during the monsoon?",
      answer:
        "Leave 5 to 10 cm of air between large pieces and external walls, air the rooms daily even briefly, never shut damp bedding or clothes into a wardrobe, and dry anything that gets wet within the day using a fan rather than direct sunlight. Trapped humid air causes the damage, not the rain itself.",
    },
    {
      id: "how-often-condition-leather",
      question: "How often should I condition a leather sofa?",
      answer:
        "Twice a year is enough in this climate: once before the summer and once after the monsoon, using a conditioner made for finished leather. Weekly care is just a dry cloth. Keeping the sofa out of direct sunlight and out of an air conditioner's airflow matters more than conditioning it more often.",
    },
    {
      id: "sticking-drawers-humidity",
      question: "Why do my wooden drawers stick in the monsoon?",
      answer:
        "Solid timber takes up moisture in humid weather and expands, then contracts again in the dry winter months. Drawers that stick in August and slide freely in December are behaving normally. Do not force them or plane them down in the monsoon, because the same drawer will be loose by winter.",
    },
  ],
  relatedLinks: [
    {
      href: "/sofas",
      label: "Sofa designs with removable covers",
      description: "Ask which upholstery options can be taken off and washed.",
    },
    {
      href: "/furniture#custom",
      label: "Custom and made-to-measure work",
      description: "Frames built to be re-covered later rather than replaced.",
    },
    {
      href: "/contact",
      label: "Ask about a repair or re-cover",
      description: "Send a photo and we will tell you what is worth doing.",
    },
  ],
  relatedPosts: [
    "sofa-fabric-vs-leather-delhi-ncr-climate",
    "how-to-choose-a-sofa",
    "furnishing-a-builder-floor-in-ghaziabad",
  ],
};
