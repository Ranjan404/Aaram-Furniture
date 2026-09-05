import type { Metadata } from "next";
import { moreFurniture, sofas, beds } from "@/data/products";
import { telHref, waMessages, whatsappHref } from "@/lib/contact";
import { breadcrumbJsonLd, buildMetadata, productListJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { Button } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRightIcon, PhoneIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { PageHero } from "@/components/sections/PageHero";
import { CategoryGrid } from "@/components/sections/CategoryGrid";
import { ProductCard } from "@/components/sections/ProductCard";
import { CatalogueCTA } from "@/components/sections/CatalogueCTA";
import { LeadCTA } from "@/components/sections/LeadCTA";

const description =
  "Every furniture category we make: sofas, beds, dining tables and sets, centre and side tables, TV units, wardrobes, chairs, recliners and fully custom pieces built to your measurements.";

export const metadata: Metadata = buildMetadata({
  title: "All Furniture - Sofas, Beds, Dining, Storage & Custom",
  description,
  path: "/furniture",
});

const breadcrumb = [
  { name: "Home", path: "/" },
  { name: "Furniture", path: "/furniture" },
];

const byCategory = (...names: string[]) =>
  moreFurniture.filter((product) => names.includes(product.category));

/** Anchor targets referenced by the category cards and the footer links. */
const groups = [
  {
    id: "dining",
    eyebrow: "Dining",
    title: "Dining tables and dining sets.",
    lead: "Round or rectangular, four to eight seats, built to the length your room can take without crowding the walkway.",
    items: byCategory("Dining"),
  },
  {
    id: "living-room",
    eyebrow: "Living room",
    title: "Centre tables, side tables and extra seating.",
    lead: "The pieces that finish a living room once the sofa is in place.",
    items: byCategory("Living room"),
  },
  {
    id: "tv-units",
    eyebrow: "TV units",
    title: "Media units, wall mounted or free standing.",
    lead: "Planned around your screen size, your devices and where the sockets actually are.",
    items: byCategory("TV units"),
  },
  {
    id: "wardrobes",
    eyebrow: "Wardrobes",
    title: "Wardrobes and bedroom storage.",
    lead: "Built to the wall you have, with an internal layout planned around what you store.",
    items: byCategory("Wardrobes"),
  },
  {
    id: "chairs",
    eyebrow: "Chairs & recliners",
    title: "Accent chairs, lounge chairs and recliners.",
    lead: "For reading corners, bedroom corners and the spot by the window.",
    items: byCategory("Chairs", "Recliners"),
  },
];

export default function FurniturePage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumb)} />
      <JsonLd
        data={productListJsonLd({
          name: "Furniture designs",
          path: "/furniture",
          products: [...sofas, ...beds, ...moreFurniture],
        })}
      />

      <PageHero
        eyebrow="All furniture"
        title="Everything we make, in one place."
        lead="Sofas and beds are our focus, but the same workshop and the same standards go into dining, storage, media units and one-off custom pieces."
        breadcrumb={breadcrumb}
        actions={
          <>
            <Button
              href={whatsappHref(waMessages.general)}
              variant="whatsapp"
              icon={<WhatsAppIcon className="size-[1.15rem]" />}
            >
              Ask what else we make
            </Button>
            <Button href={telHref} variant="outline" icon={<PhoneIcon className="size-[1.15rem]" />}>
              Call now
            </Button>
          </>
        }
      />

      <CategoryGrid
        eyebrow="Categories"
        heading="Start with a category."
        lead="Sofas and beds have their own pages. Everything else is listed below."
        showAction={false}
      />

      {/* Quick links so the headline categories are one tap away. */}
      <Section tone="cream" size="sm">
        <div className="grid gap-5 sm:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col justify-between gap-6 rounded-(--radius-card) border border-line bg-white p-7">
              <div>
                <p className="eyebrow text-stone-light">{sofas.length} designs</p>
                <h2 className="mt-2 text-2xl">Sofas</h2>
                <p className="mt-2 text-sm leading-relaxed text-stone">
                  Three-seaters, L-shapes, modular layouts and loveseats.
                </p>
              </div>
              <Button href="/sofas" iconAfter={<ArrowRightIcon className="size-4" />}>
                Browse sofas
              </Button>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="flex h-full flex-col justify-between gap-6 rounded-(--radius-card) border border-line bg-white p-7">
              <div>
                <p className="eyebrow text-stone-light">{beds.length} designs</p>
                <h2 className="mt-2 text-2xl">Beds</h2>
                <p className="mt-2 text-sm leading-relaxed text-stone">
                  Upholstered, storage and platform beds in every size.
                </p>
              </div>
              <Button href="/beds" iconAfter={<ArrowRightIcon className="size-4" />}>
                Browse beds
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>

      {groups.map((group, index) => (
        <Section
          key={group.id}
          id={group.id}
          tone={index % 2 === 0 ? "ivory" : "cream"}
          labelledBy={`${group.id}-title`}
          size="sm"
        >
          <SectionHeading
            id={`${group.id}-title`}
            eyebrow={group.eyebrow}
            title={group.title}
            lead={group.lead}
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {group.items.map((product, cardIndex) => (
              <Reveal key={product.id} delay={cardIndex * 80} className="h-full">
                <ProductCard
                  product={product}
                  sizes="(max-width: 639px) 92vw, (max-width: 1023px) 46vw, 31vw"
                />
              </Reveal>
            ))}
          </div>
        </Section>
      ))}

      <Section id="custom" tone="ivory" labelledBy="custom-title">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] border border-line bg-ink px-6 py-14 text-center sm:px-12 lg:py-20">
            <p className="eyebrow text-brass-soft">Custom furniture</p>
            <h2 id="custom-title" className="mx-auto mt-4 max-w-3xl text-(length:--text-display-md) text-cream">
              If you can measure it, we can usually build it.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-cream/70">
              Bar units, shoe racks, study tables, crockery units, ottomans, office seating. Send a
              reference photo and the dimensions of the space, and we will tell you what is
              possible, what needs changing and what it will cost.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                href={whatsappHref(waMessages.custom)}
                variant="whatsapp"
                size="lg"
                icon={<WhatsAppIcon className="size-[1.15rem]" />}
              >
                Discuss a custom piece
              </Button>
              <Button
                href={telHref}
                variant="onImage"
                size="lg"
                icon={<PhoneIcon className="size-[1.15rem]" />}
              >
                Call now
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>

      <CatalogueCTA />

      <LeadCTA />
    </>
  );
}
