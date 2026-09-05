import type { FaqItem } from "@/lib/types";

/**
 * FAQ content. Kept to questions that can be answered from how the business
 * already works - no delivery timelines, warranty terms, pricing or coverage
 * areas are stated, because those were not supplied.
 * TODO(owner): review each answer and add specifics where you can commit to them.
 */
export const faqs: FaqItem[] = [
  {
    id: "q1",
    question: "Can I get a sofa or bed made in a custom size?",
    answer:
      "Yes. Sofas, beds, wardrobes and TV units can be built to your measurements. Share the room dimensions on WhatsApp and we will tell you what fits and what to change.",
  },
  {
    id: "q2",
    question: "Can I choose my own fabric, leather or wood finish?",
    answer:
      "You can. Most designs are offered in a range of upholstery and finishes. Tell us how the piece will be used day to day and we will point you towards the options that hold up.",
  },
  {
    id: "q3",
    question: "I have a reference photo of a design. Can you make it?",
    answer:
      "Send it over on WhatsApp. We will look at whether it can be built as shown, suggest changes where the construction needs it, and confirm before anything starts.",
  },
  {
    id: "q4",
    question: "How do I see more designs?",
    answer:
      "Browse the sofa and bed collections on this site, then message us for the full catalogue. We will send across current designs in the category you are interested in.",
  },
  {
    id: "q5",
    question: "How do I get a price?",
    answer:
      "Prices depend on size, upholstery and finish, so they are quoted per piece. Call or message us with the design you like and the size you need for an exact quote.",
  },
];
