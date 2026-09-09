import type { Metadata } from "next";
import { sofas } from "@/data/products";
import { galleryItems } from "@/data/gallery";
import { waMessages, whatsappHref, telHref } from "@/lib/contact";
import { breadcrumbJsonLd, buildMetadata, productListJsonLd } from "@/lib/seo";
import { shareCard } from "@/data/share-cards";
import { JsonLd } from "@/components/JsonLd";
import { Button } from "@/components/ui/Button";
import { PhoneIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { PageHero } from "@/components/sections/PageHero";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { LifestyleGallery } from "@/components/sections/LifestyleGallery";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { CatalogueCTA } from "@/components/sections/CatalogueCTA";
import { LeadCTA } from "@/components/sections/LeadCTA";
import { GuidesTeaser } from "@/components/sections/GuidesTeaser";

const description =
  "Modern sofa designs made to order: three-seaters, L-shaped sectionals, modular sofas and loveseats in the fabric, leather and size you choose. Call or WhatsApp for designs and a quote.";

export const metadata: Metadata = buildMetadata({
  title: "Sofa Designs - Modern, L-Shape & Custom Sofas",
  description,
  path: "/sofas",
  image: shareCard("sofas"),
});

const breadcrumb = [
  { name: "Home", path: "/" },
  { name: "Sofas", path: "/sofas" },
];

export default function SofasPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumb)} />
      <JsonLd
        data={productListJsonLd({ name: "Sofa designs", path: "/sofas", products: sofas })}
      />

      <PageHero
        eyebrow="Sofas"
        title="Sofa designs, made to your room."
        lead="Three-seaters, corner sectionals, modular layouts and compact loveseats. Every design can be built to a different length, depth or fabric, so it fits the room you actually have."
        breadcrumb={breadcrumb}
        actions={
          <>
            <Button
              href={whatsappHref(waMessages.sofas)}
              variant="whatsapp"
              icon={<WhatsAppIcon className="size-[1.15rem]" />}
            >
              Ask about sofas
            </Button>
            <Button href={telHref} variant="outline" icon={<PhoneIcon className="size-[1.15rem]" />}>
              Call now
            </Button>
          </>
        }
      />

      <ProductShowcase
        headingId="sofa-range-title"
        eyebrow="The range"
        title="Sofas in every shape a living room needs."
        lead="Sizes shown are the standard build. Tell us your room dimensions and we will adjust the design to suit."
        products={sofas}
        filterable
        filterLabel="sofa"
        preloadFirst
        tone="ivory"
      />

      <CatalogueCTA />

      <LifestyleGallery
        items={galleryItems.filter((item) => item.room === "living-room").slice(0, 6)}
        eyebrow="In context"
        title="Sofas in real rooms."
        lead="How the same shapes read in different spaces, materials and light."
        tone="cream"
      />

      <GuidesTeaser
        tags={["sofas", "measuring", "upholstery"]}
        title="Read this before you order a sofa."
        lead="Sizing, seat depth, frames and upholstery, explained the way we would explain it in person."
        tone="ivory"
        ctaLabel="All sofa guides"
      />

      <WhyChooseUs />

      <LeadCTA />
    </>
  );
}
