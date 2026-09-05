import type { Metadata } from "next";
import { beds } from "@/data/products";
import { galleryItems } from "@/data/gallery";
import { telHref, waMessages, whatsappHref } from "@/lib/contact";
import { breadcrumbJsonLd, buildMetadata, productListJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Button } from "@/components/ui/Button";
import { PhoneIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { PageHero } from "@/components/sections/PageHero";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { LifestyleGallery } from "@/components/sections/LifestyleGallery";
import { CatalogueCTA } from "@/components/sections/CatalogueCTA";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { LeadCTA } from "@/components/sections/LeadCTA";

const description =
  "Modern bed designs made to order: upholstered beds, hydraulic storage beds and solid wood platform beds in king, queen and custom sizes. Call or WhatsApp for designs and a quote.";

export const metadata: Metadata = buildMetadata({
  title: "Bed Designs - Upholstered, Storage & Platform Beds",
  description,
  path: "/beds",
});

const breadcrumb = [
  { name: "Home", path: "/" },
  { name: "Beds", path: "/beds" },
];

export default function BedsPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumb)} />
      <JsonLd data={productListJsonLd({ name: "Bed designs", path: "/beds", products: beds })} />

      <PageHero
        eyebrow="Beds"
        title="Beds designed for the room they go in."
        lead="Upholstered headboards, hydraulic storage bases and low platform frames, in king, queen and sizes built to your measurements."
        breadcrumb={breadcrumb}
        actions={
          <>
            <Button
              href={whatsappHref(waMessages.beds)}
              variant="whatsapp"
              icon={<WhatsAppIcon className="size-[1.15rem]" />}
            >
              Ask about beds
            </Button>
            <Button href={telHref} variant="outline" icon={<PhoneIcon className="size-[1.15rem]" />}>
              Call now
            </Button>
          </>
        }
      />

      <ProductShowcase
        headingId="bed-range-title"
        eyebrow="The range"
        title="From minimal platforms to full upholstered headboards."
        lead="Storage, headboard height and finish are all specified per order. Tell us the room size and we will suggest what works."
        products={beds}
        filterable
        filterLabel="bed"
        prioritiseFirst
        tone="ivory"
      />

      <CatalogueCTA />

      <LifestyleGallery
        items={galleryItems.slice(2, 8)}
        eyebrow="In context"
        title="Bedrooms we would happily sleep in."
        lead="Headboard height, bedside proportions and the space you leave to walk around all change how a bedroom feels."
        tone="cream"
      />

      <WhyChooseUs />

      <LeadCTA />
    </>
  );
}
