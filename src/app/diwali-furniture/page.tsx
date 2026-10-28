import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { activeOffer, festiveActive, festiveConfig } from "@/config/festive";
import { festiveCollection } from "@/data/festive-collection";
import { diwaliFaqs, diwaliPlanning } from "@/data/diwali";
import { shareCard } from "@/data/share-cards";
import { telHref, waMessages, whatsappHref } from "@/lib/contact";
import { breadcrumbJsonLd, buildMetadata, faqJsonLd, productListJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon, PhoneIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { FaqSection } from "@/components/sections/FaqSection";
import { ServiceAreas } from "@/components/sections/ServiceAreas";
import { LeadCTA } from "@/components/sections/LeadCTA";
import { GuidesTeaser } from "@/components/sections/GuidesTeaser";
import { Diya, Rangoli, Sparkle } from "@/components/festive/Decor";
import { OfferPanel } from "@/components/festive/OfferPanel";

/**
 * The festive landing page. An evergreen URL on purpose: it is updated each
 * year (`year` and the dates in `src/config/festive.ts`) rather than replaced,
 * so whatever it earns in search carries over. Outside the campaign it keeps
 * the collection and the planning advice and drops the dated panel.
 *
 * It is the page that targets the festive queries, which is why the homepage
 * title stays evergreen: changing it for three weeks would put the site's main
 * ranking page at risk for a seasonal term.
 */
const { festival, year } = festiveConfig;

const description = activeOffer
  ? `${festival} ${year} at ${siteConfig.name}: ${activeOffer.headline}. Made-to-order sofas, dining sets, guest beds and TV units for homes across ${siteConfig.serviceArea}.`
  : `${festival} ${year} furniture for homes across ${siteConfig.serviceArea}: made-to-order sofas, dining sets, guest beds and TV units, built in ${siteConfig.leadTime ?? "days"}.`;

export const metadata: Metadata = buildMetadata({
  title: `${festival} Furniture ${year}: Sofas, Beds & Dining`,
  description,
  path: "/diwali-furniture",
  image: shareCard("diwali-furniture"),
});

const breadcrumb = [
  { name: "Home", path: "/" },
  { name: `${festival} furniture`, path: "/diwali-furniture" },
];

export default function DiwaliFurniturePage() {
  const faqs = diwaliFaqs();

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumb)} />
      <JsonLd
        data={productListJsonLd({
          name: `${festival} furniture collection`,
          path: "/diwali-furniture",
          products: festiveCollection,
        })}
      />
      <JsonLd data={faqJsonLd(faqs)} />

      <section className="relative isolate overflow-hidden bg-[radial-gradient(ellipse_at_top_right,var(--color-maroon)_0%,var(--color-maroon-deep)_65%)] pt-[calc(var(--header-h)+2.5rem)] pb-14 text-cream sm:pb-16 lg:pt-[calc(var(--header-h)+4.5rem)] lg:pb-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <Rangoli spin className="absolute -top-32 -right-40 size-[30rem] text-gold/15 lg:size-[40rem]" />
          <Sparkle className="absolute top-[38%] right-[12%] size-4 text-gold-soft" />
          <Sparkle className="absolute top-[62%] right-[34%] size-3 text-marigold" delay={1.3} />
          <Sparkle className="absolute top-[30%] left-[48%] hidden size-3 text-gold-soft sm:block" delay={2.1} />
        </div>

        <Container size="wide">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-cream/75">
              {breadcrumb.map((crumb, index) => {
                const last = index === breadcrumb.length - 1;
                return (
                  <li key={crumb.path} className="flex items-center gap-2">
                    {last ? (
                      <span aria-current="page" className="inline-block py-1.5 text-cream">
                        {crumb.name}
                      </span>
                    ) : (
                      <Link href={crumb.path} className="inline-block py-1.5 transition-colors hover:text-white">
                        {crumb.name}
                      </Link>
                    )}
                    {!last ? <span aria-hidden="true">/</span> : null}
                  </li>
                );
              })}
            </ol>
          </nav>

          <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="lg:col-span-7">
              <div aria-hidden="true" className="mb-6 flex items-end gap-3">
                <Diya className="size-9" />
                <Diya className="size-11" delay={350} />
                <Diya className="size-9" delay={700} />
              </div>
              <p className="eyebrow text-gold-soft">
                {festival} {year} &middot; Made to order in {siteConfig.serviceArea}
              </p>
              <h1 className="mt-4 text-(length:--text-display-lg) text-cream">
                Furniture for {festival}, built for your home.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/80 sm:text-[1.0625rem]">
                Sofas for the evening everyone comes over, dining tables for the family meal and
                guest beds with room for the extra bedding. Every design is made in the size,
                fabric and finish you choose.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button
                  href="#collection"
                  variant="light"
                  size="lg"
                  iconAfter={<ArrowRightIcon className="size-[1.15rem]" />}
                >
                  Shop the {festival} collection
                </Button>
                <Button
                  href={whatsappHref(waMessages.festive)}
                  variant="whatsapp"
                  size="lg"
                  icon={<WhatsAppIcon className="size-[1.15rem]" />}
                >
                  Enquire now
                </Button>
                <Button href={telHref} variant="onImage" size="lg" icon={<PhoneIcon className="size-[1.15rem]" />}>
                  Call for enquiry
                </Button>
              </div>
            </div>

            {festiveActive ? (
              <div className="lg:col-span-5">
                <OfferPanel />
              </div>
            ) : null}
          </div>
        </Container>
      </section>

      <ProductShowcase
        id="collection"
        headingId="collection-title"
        tone="ivory"
        eyebrow={`The ${festival} collection`}
        title="Hosting pieces from the range."
        lead="Real designs from the catalogue, chosen for a house full of guests. Each one opens its own page with the specification and what can be changed."
        products={festiveCollection}
        columns={3}
        action={
          <Button href="/furniture" variant="outline" iconAfter={<ArrowRightIcon className="size-4" />}>
            Explore all furniture
          </Button>
        }
      />

      <Section tone="cream" labelledBy="planning-title">
        <SectionHeading
          id="planning-title"
          eyebrow={`Before ${festival}`}
          title="What to sort out first."
          lead="The pieces that make the biggest difference in the week of the festival, in the order they usually matter."
        />
        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14">
          {diwaliPlanning.map((step, index) => (
            <li key={step.title}>
              <Reveal delay={(index % 2) * 80} className="h-full">
                <div className="flex h-full flex-col rounded-(--radius-card) border border-line bg-white p-7 sm:p-8">
                  <p aria-hidden="true" className="font-display text-3xl text-maroon">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 text-xl">{step.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-stone">{step.text}</p>
                  <Link
                    href={step.href}
                    className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink underline-offset-4 hover:underline"
                  >
                    {step.label}
                    <ArrowRightIcon className="size-4 transition-transform duration-500 group-hover:translate-x-1" />
                  </Link>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Section>

      <GuidesTeaser
        tags={["diwali", "dining", "sofas"]}
        eyebrow="Plan it properly"
        title="Guides for the week everyone visits."
        lead="Sizing, timing and the practical side of a festival at home."
        tone="ivory"
      />

      <FaqSection
        items={faqs}
        eyebrow={`${festival} orders`}
        title="Before you order for the festival."
      />

      <ServiceAreas tone="cream" />

      <LeadCTA />
    </>
  );
}
