import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { featuredBeds, featuredSofas } from "@/data/products";
import { galleryItems } from "@/data/gallery";
import { homeFaqs } from "@/data/faqs";
import { buildMetadata, faqJsonLd, furnitureStoreJsonLd, websiteJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { Hero } from "@/components/sections/Hero";
import { CategoryGrid } from "@/components/sections/CategoryGrid";
import { SofaBedSplit } from "@/components/sections/SofaBedSplit";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { CatalogueCTA } from "@/components/sections/CatalogueCTA";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { LifestyleGallery } from "@/components/sections/LifestyleGallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { AboutSection } from "@/components/sections/AboutSection";
import { LeadCTA } from "@/components/sections/LeadCTA";
import { GuidesTeaser } from "@/components/sections/GuidesTeaser";
import { ServiceAreas } from "@/components/sections/ServiceAreas";
import { ContactSection } from "@/components/sections/ContactSection";
import { FaqSection } from "@/components/sections/FaqSection";

/* Names the differentiator and the market rather than only the brand. The
   individual cities are targeted in the body copy and in the "Where we deliver"
   section below, not crammed into the title. */
const title = `Custom Sofas & Beds in ${siteConfig.serviceArea} | ${siteConfig.name}`;

export const metadata: Metadata = {
  ...buildMetadata({
    title,
    description: siteConfig.description,
    path: "/",
  }),
  // Keep the homepage title exactly as written rather than running it through
  // the "%s | Brand" template defined in the root layout.
  title: { absolute: title },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={furnitureStoreJsonLd()} />
      <JsonLd data={websiteJsonLd()} />
      <JsonLd data={faqJsonLd(homeFaqs)} />

      <Hero />

      {/* Section order is the business hierarchy, deliberately: sofas, then
          beds, then the split feature that states both at once, and only after
          all three does any other furniture appear. */}

      <ProductShowcase
        id="sofas"
        headingId="sofas-title"
        tone="ivory"
        eyebrow="Featured sofas"
        title="Sofas built around how you actually sit."
        lead="Seat depth, back angle and arm height change how a sofa feels far more than the fabric does. Every design here can be made in your size."
        products={featuredSofas.slice(0, 3)}
        columns={3}
        action={
          <Button href="/sofas" variant="outline" iconAfter={<ArrowRightIcon className="size-4" />}>
            Explore sofa designs
          </Button>
        }
      />

      <ProductShowcase
        id="beds"
        headingId="beds-title"
        tone="cream"
        eyebrow="Featured beds"
        title="Beds that make a bedroom feel finished."
        lead="Upholstered, storage and platform beds in king, queen and custom sizes, with headboards built to the height of your wall."
        products={featuredBeds.slice(0, 3)}
        columns={3}
        action={
          <Button href="/beds" variant="outline" iconAfter={<ArrowRightIcon className="size-4" />}>
            View bed designs
          </Button>
        }
      />

      <SofaBedSplit />

      {/* Everything that is not a sofa or a bed. Smaller cells, one band, and
          it sits below the split feature on purpose. */}
      <CategoryGrid
        scope="secondary"
        eyebrow="Complete your home"
        heading="The rest of the house, made to match."
        lead="Dining, wardrobes, media units and seating, built to the same standard and in finishes that sit with the sofa or bed you choose."
      />

      <WhyChooseUs limit={3} />

      <LifestyleGallery
        items={galleryItems.slice(0, 6)}
        action={
          <Button
            href="/collection"
            variant="outline"
            iconAfter={<ArrowRightIcon className="size-4" />}
          >
            See the full collection
          </Button>
        }
      />

      <Testimonials tone="cream" />

      <GuidesTeaser
        tags={["buying guide", "sofas", "beds"]}
        eyebrow="Furniture guides"
        title="Decide well before you decide quickly."
        lead="Sizing, seat comfort, materials and care, written for real rooms rather than showroom floors."
        tone="ivory"
      />

      <CatalogueCTA />

      <AboutSection compact tone="cream" />

      <LeadCTA />

      <ServiceAreas tone="ivory" />

      <ContactSection />

      {/* An excerpt, not the whole accordion: the full set is on /contact. */}
      <FaqSection
        items={homeFaqs}
        title="Three questions we answer most often."
        action={
          <Button
            href="/contact#faq"
            variant="outline"
            iconAfter={<ArrowRightIcon className="size-4" />}
          >
            All questions answered
          </Button>
        }
      />
    </>
  );
}
