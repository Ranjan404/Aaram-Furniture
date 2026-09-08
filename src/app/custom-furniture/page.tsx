import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  customBuilds,
  customFurnitureFaqs,
  customOptions,
  customProcess,
} from "@/data/custom-furniture";
import { shareCard } from "@/data/share-cards";
import { telHref, waMessages, whatsappHref } from "@/lib/contact";
import { breadcrumbJsonLd, buildMetadata, canonicalUrl, faqJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon, CheckIcon, PhoneIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { PageHero } from "@/components/sections/PageHero";
import { GuidesTeaser } from "@/components/sections/GuidesTeaser";
import { FaqSection } from "@/components/sections/FaqSection";
import { CatalogueCTA } from "@/components/sections/CatalogueCTA";
import { ServiceAreas } from "@/components/sections/ServiceAreas";
import { LeadCTA } from "@/components/sections/LeadCTA";

/**
 * Made to order is stated in passing on almost every page and had no URL of its
 * own, which meant the site's strongest and most defensible proposition was not
 * the target of any page. This route is that page.
 */
const description = `Sofas, beds, wardrobes and TV units built to your measurements, in the fabric and finish you choose, across ${siteConfig.serviceArea}. Send your room dimensions for a quote.`;

export const metadata: Metadata = buildMetadata({
  title: "Custom Furniture Made to Order - Your Size, Your Finish",
  description,
  path: "/custom-furniture",
  image: shareCard("custom-furniture"),
});

const breadcrumb = [
  { name: "Home", path: "/" },
  { name: "Custom furniture", path: "/custom-furniture" },
];

export default function CustomFurniturePage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumb)} />
      {/* An ItemList of what the page actually lists, with no `offers` block:
          a custom piece is quoted per piece, so it has no publishable price. */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Furniture made to order",
          url: canonicalUrl("/custom-furniture"),
          numberOfItems: customBuilds.length,
          itemListElement: customBuilds.map((build, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: build.title,
            description: build.description,
            url: canonicalUrl(build.href),
          })),
        }}
      />
      <JsonLd data={faqJsonLd(customFurnitureFaqs)} />

      <PageHero
        eyebrow="Custom furniture"
        title="Built to your room, not to a standard size."
        lead={`Most rooms are not the shape a catalogue assumes. Sofas, beds, wardrobes, TV units and dining tables are made to order here: your dimensions, your upholstery, your finish, for homes across ${siteConfig.serviceArea}.`}
        breadcrumb={breadcrumb}
        actions={
          <>
            <Button
              href={whatsappHref(waMessages.custom)}
              variant="whatsapp"
              icon={<WhatsAppIcon className="size-[1.15rem]" />}
            >
              Discuss your requirement
            </Button>
            <Button href={telHref} variant="outline" icon={<PhoneIcon className="size-[1.15rem]" />}>
              Call for enquiry
            </Button>
          </>
        }
      />

      <Section tone="ivory" labelledBy="builds-title">
        <SectionHeading
          id="builds-title"
          eyebrow="What we build to order"
          title="The pieces where the size is the whole problem."
          lead="These are the pieces that go wrong most often when they are bought off a shelf, because a few centimetres in the wrong direction changes how a room works."
        />

        <ul className="mt-12 grid gap-px overflow-hidden rounded-(--radius-card) border border-line bg-line sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {customBuilds.map((build, index) => (
            <li key={build.id} className="bg-ivory">
              <Reveal delay={(index % 3) * 80} className="block h-full">
                <Link
                  href={build.href}
                  className="group flex h-full flex-col bg-ivory p-7 transition-colors duration-500 hover:bg-white sm:p-9"
                >
                  <h3 className="text-xl text-ink group-hover:underline group-hover:underline-offset-4">
                    {build.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-stone">
                    {build.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink">
                    See the designs
                    <ArrowRightIcon className="size-4 transition-transform duration-500 group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="cream" labelledBy="process-title">
        <SectionHeading
          id="process-title"
          eyebrow="How it works"
          title="Four conversations, in this order."
          lead="No design brief, no showroom appointment and no deposit before you know what will fit. It starts as a WhatsApp message."
        />

        <ol className="mt-12 grid gap-5 lg:mt-14 lg:grid-cols-2">
          {customProcess.map((step, index) => (
            <li key={step.id}>
              <Reveal delay={(index % 2) * 80} className="block h-full">
                <div className="flex h-full gap-5 rounded-(--radius-card) border border-line bg-ivory p-7 sm:p-8">
                  <span
                    aria-hidden="true"
                    className="grid size-11 shrink-0 place-items-center rounded-full border border-line bg-cream font-display text-lg text-brass-deep"
                  >
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl">{step.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-stone">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal delay={200}>
          <div className="mt-10 grid gap-8 rounded-(--radius-card) border border-line bg-ivory p-7 sm:p-9 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <h3 className="text-2xl">What is yours to decide</h3>
              <p className="mt-4 text-sm leading-relaxed text-stone">
                Everything on this list is specified per order. Prices move with the size, the
                upholstery and the finish, which is why a custom piece is quoted per piece rather
                than read off a list.
              </p>
              <Button
                href={whatsappHref(waMessages.consultation)}
                variant="whatsapp"
                className="mt-7"
                icon={<WhatsAppIcon className="size-[1.15rem]" />}
              >
                Start with your measurements
              </Button>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
              {customOptions.map((option) => (
                <li key={option} className="flex gap-3 text-sm leading-relaxed text-graphite">
                  <CheckIcon className="mt-0.5 size-[1.15rem] shrink-0 text-brass-deep" />
                  {option}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Section>

      <GuidesTeaser
        tags={["made to measure", "custom furniture", "measuring"]}
        eyebrow="Before you commit"
        title="When made to measure is worth it, and when it is not."
        lead="The honest version, including the cases where a standard size is the better buy."
        tone="ivory"
        ctaLabel="All furniture guides"
      />

      <ServiceAreas tone="cream" />

      <CatalogueCTA />

      <FaqSection
        items={customFurnitureFaqs}
        eyebrow="Custom orders"
        title="What people ask before ordering a custom piece."
        tone="ivory"
      />

      <LeadCTA />
    </>
  );
}
