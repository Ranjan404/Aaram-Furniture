import { siteConfig } from "@/config/site";

/** `tel:` href for the business phone number. */
export const telHref = `tel:${siteConfig.phone.e164}`;

/**
 * Builds a wa.me link with an optional pre-filled message so every WhatsApp
 * CTA arrives with the context of what the visitor was looking at.
 */
export function whatsappHref(message?: string): string {
  const base = `https://wa.me/${siteConfig.whatsapp.number}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Pre-written, context-aware WhatsApp openers used across the site. */
export const waMessages = {
  general: "Hi, I'd like to know more about your furniture.",
  sofas: "Hi, I'm interested in your sofa designs.",
  beds: "Hi, I'd like to see your bed designs.",
  dining: "Hi, I'd like to see your dining table designs.",
  custom: "Hi, I'd like to discuss a custom furniture requirement.",
  catalogue: "Hi, I'd like to receive your furniture catalogue.",
  consultation: "Hi, I'd like to book a design consultation.",
  visit: "Hi, I'd like to visit your showroom. Could you share the details?",
  product: (name: string) => `Hi, I'm interested in the ${name}. Could you share the details and price?`,
  category: (label: string) => `Hi, I'd like to see your ${label.toLowerCase()} designs.`,
} as const;

/** True when a real catalogue PDF has been added and enabled in site config. */
export const catalogueReady = siteConfig.catalogue.available;

/**
 * Where a "Download catalogue" button should point. Falls back to a WhatsApp
 * catalogue request while no PDF has been supplied, so the button never links
 * to a missing file.
 */
export const catalogueHref = catalogueReady
  ? siteConfig.catalogue.path
  : whatsappHref(waMessages.catalogue);

/** Compact label, used in the header, footer and inline links. */
export const catalogueLabel = catalogueReady
  ? "Download catalogue"
  : "Get catalogue on WhatsApp";

/** Fuller label for section-level buttons, where there is room for it. */
export const catalogueCtaLabel = catalogueReady
  ? "Download the designs"
  : "Get the designs on WhatsApp";
