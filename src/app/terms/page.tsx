import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { telHref } from "@/lib/contact";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata: Metadata = buildMetadata({
  title: "Terms of Use",
  description: `The terms that apply to using the ${siteConfig.name} website.`,
  path: "/terms",
});

/**
 * TODO(owner): these terms cover the website only. Add your order, payment,
 * delivery, warranty, cancellation and return terms here (or link to them) and
 * have the result reviewed before launch.
 */
export default function TermsPage() {
  return (
    <LegalPage title="Terms of use" updated="Draft - pending review">
      <p>
        These terms apply to your use of the {siteConfig.name} website. They do not cover the sale
        of furniture: order, payment, delivery and warranty terms are confirmed with you directly
        before an order is placed.
      </p>

      <h2>Product information</h2>
      <p>
        Designs shown on this site are examples of what we make. Sizes, fabrics, finishes and
        availability vary per order, and photographs are indicative rather than an exact
        representation of the piece you will receive. Confirm the specification with us before
        ordering.
      </p>

      <h2>Pricing</h2>
      <p>
        Prices are not published on this site because they depend on size, materials and finish.
        Any figure quoted to you by phone or on WhatsApp is valid only as described at the time it
        is given.
      </p>

      <h2>Enquiries</h2>
      <p>
        The enquiry helper on this site opens WhatsApp with a message you have composed. Sending it
        starts a conversation; it does not place an order or reserve any item.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The text and layout of this site belong to {siteConfig.name}. Photographs are used to
        illustrate styles and materials and remain the property of their respective owners.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms: call{" "}
        <a href={telHref}>{siteConfig.phone.display}</a>.
      </p>
    </LegalPage>
  );
}
