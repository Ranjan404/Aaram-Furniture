import type { Metadata } from "next";
import { galleryItems } from "@/data/gallery";
import { featuredBeds, featuredSofas } from "@/data/products";
import { telHref, waMessages, whatsappHref } from "@/lib/contact";
import { breadcrumbJsonLd, buildMetadata, productListJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon, PhoneIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { PageHero } from "@/components/sections/PageHero";
import { LifestyleGallery } from "@/components/sections/LifestyleGallery";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { CatalogueCTA } from "@/components/sections/CatalogueCTA";
import { LeadCTA } from "@/components/sections/LeadCTA";

const description =
  "A visual collection of our furniture in real rooms: sofas, beds, dining spaces and craftsmanship details, to help you picture the pieces in your own home.";

export const metadata: Metadata = buildMetadata({
  title: "Collection - Furniture Gallery & Room Inspiration",
  description,
  path: "/collection",
});

const breadcrumb = [
  { name: "Home", path: "/" },
  { name: "Collection", path: "/collection" },
];

export default function CollectionPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumb)} />
      <JsonLd
        data={productListJsonLd({
          name: "Featured furniture collection",
          path: "/collection",
          products: [...featuredSofas, ...featuredBeds],
        })}
      />

      <PageHero
        eyebrow="Collection"
        title="The collection, room by room."
        lead="Furniture only makes sense in context. Browse the pieces as they sit in real spaces, then tell us which look closest to what you have in mind."
        breadcrumb={breadcrumb}
        actions={
          <>
            <Button
              href={whatsappHref(waMessages.general)}
              variant="whatsapp"
              icon={<WhatsAppIcon className="size-[1.15rem]" />}
            >
              Send us a reference
            </Button>
            <Button href={telHref} variant="outline" icon={<PhoneIcon className="size-[1.15rem]" />}>
              Call now
            </Button>
          </>
        }
      />

      <LifestyleGallery
        items={galleryItems}
        eyebrow="Gallery"
        title="Rooms we would happily live in."
        lead="Living rooms, bedrooms, dining spaces and the details that make the difference up close."
      />

      <ProductShowcase
        headingId="collection-sofas-title"
        tone="cream"
        eyebrow="Sofas"
        title="Signature sofa designs."
        products={featuredSofas}
        action={
          <Button href="/sofas" variant="outline" iconAfter={<ArrowRightIcon className="size-4" />}>
            All sofa designs
          </Button>
        }
      />

      <ProductShowcase
        headingId="collection-beds-title"
        tone="ivory"
        eyebrow="Beds"
        title="Signature bed designs."
        products={featuredBeds}
        action={
          <Button href="/beds" variant="outline" iconAfter={<ArrowRightIcon className="size-4" />}>
            All bed designs
          </Button>
        }
      />

      <CatalogueCTA />

      <LeadCTA />
    </>
  );
}
