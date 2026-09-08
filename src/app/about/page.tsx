import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { shareCard } from "@/data/share-cards";
import { JsonLd } from "@/components/JsonLd";
import { telHref, waMessages, whatsappHref } from "@/lib/contact";
import { Button } from "@/components/ui/Button";
import { PhoneIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { PageHero } from "@/components/sections/PageHero";
import { AboutSection } from "@/components/sections/AboutSection";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { LifestyleGallery } from "@/components/sections/LifestyleGallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { FaqSection } from "@/components/sections/FaqSection";
import { ServiceAreas } from "@/components/sections/ServiceAreas";
import { LeadCTA } from "@/components/sections/LeadCTA";
import { galleryItems } from "@/data/gallery";

const description = `${siteConfig.name} makes sofas, beds and custom furniture to order for homes across ${siteConfig.serviceArea}. How we approach design, comfort, materials and customisation, and how to talk to us before you buy.`;

export const metadata: Metadata = buildMetadata({
  title: "About Us - How We Make Furniture",
  description,
  path: "/about",
  image: shareCard("about"),
});

const breadcrumb = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumb)} />

      <PageHero
        eyebrow="About us"
        title="Furniture is a long purchase. We treat it that way."
        lead="We build sofas and beds first, and everything else in the home to the same standard. Made to order, in your size, with an honest conversation before anything is committed."
        breadcrumb={breadcrumb}
        actions={
          <>
            <Button
              href={whatsappHref(waMessages.consultation)}
              variant="whatsapp"
              icon={<WhatsAppIcon className="size-[1.15rem]" />}
            >
              Book a consultation
            </Button>
            <Button href={telHref} variant="outline" icon={<PhoneIcon className="size-[1.15rem]" />}>
              Call now
            </Button>
          </>
        }
      />

      <AboutSection tone="ivory" />

      <WhyChooseUs />

      <LifestyleGallery
        items={galleryItems.slice(0, 6)}
        eyebrow="Our work"
        title="A look at what we make."
        lead="Sofas, beds and the rooms they sit in."
      />

      <Testimonials tone="cream" />

      <ServiceAreas tone="ivory" eyebrow="Where we work" />

      <FaqSection tone="cream" />

      <LeadCTA />
    </>
  );
}
