import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { faqs } from "@/data/faqs";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd, furnitureStoreJsonLd } from "@/lib/seo";
import { shareCard } from "@/data/share-cards";
import { JsonLd } from "@/components/JsonLd";
import { telHref, waMessages, whatsappHref } from "@/lib/contact";
import { Button } from "@/components/ui/Button";
import { PhoneIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { PageHero } from "@/components/sections/PageHero";
import { ContactSection } from "@/components/sections/ContactSection";
import { TrustSignals } from "@/components/sections/TrustSignals";
import { FaqSection } from "@/components/sections/FaqSection";
import { CatalogueCTA } from "@/components/sections/CatalogueCTA";
import { ServiceAreas } from "@/components/sections/ServiceAreas";

const description = `Call ${siteConfig.phone.display} or message us on WhatsApp for sofa, bed and custom furniture designs, sizes and quotes. Send your room measurements and we will come back with options.`;

export const metadata: Metadata = buildMetadata({
  title: "Contact - Call or WhatsApp for Furniture Designs",
  description,
  path: "/contact",
  image: shareCard("contact"),
});

const breadcrumb = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumb)} />
      <JsonLd data={furnitureStoreJsonLd()} />
      {/* The full accordion now lives here rather than on the homepage, so the
          FAQPage node follows it. Emitted from exactly what is rendered. */}
      <JsonLd data={faqJsonLd(faqs)} />

      <PageHero
        eyebrow="Contact"
        title="One number. A straight answer."
        lead="Tell us what you are looking for and the size of the room. We will tell you what fits, what it costs and how long it takes, without a sales script."
        breadcrumb={breadcrumb}
        actions={
          <>
            <Button
              href={whatsappHref(waMessages.general)}
              variant="whatsapp"
              icon={<WhatsAppIcon className="size-[1.15rem]" />}
            >
              WhatsApp us
            </Button>
            <Button href={telHref} icon={<PhoneIcon className="size-[1.15rem]" />}>
              Call {siteConfig.phone.display}
            </Button>
          </>
        }
      />

      <ContactSection />

      <ServiceAreas tone="ivory" />

      <TrustSignals tone="cream" />

      <CatalogueCTA />

      <FaqSection />
    </>
  );
}
