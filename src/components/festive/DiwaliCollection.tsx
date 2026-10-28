import { festiveActive, festiveConfig } from "@/config/festive";
import { festiveCollection } from "@/data/festive-collection";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/ui/Icons";
import { ProductCard } from "@/components/sections/ProductCard";
import { Diya, Rangoli, Sparkle } from "./Decor";
import { OfferPanel } from "./OfferPanel";

/**
 * The homepage's Diwali band: a deep maroon section with the offer (or the
 * planning panel) and the hosting pieces from the real catalogue. Sits
 * directly under the hero while the campaign runs and disappears after it,
 * leaving the evergreen section order exactly as it was.
 */
export function DiwaliCollection() {
  if (!festiveActive) return null;

  const { festival, year } = festiveConfig;
  const products = festiveCollection.slice(0, 3);

  return (
    <Section
      id="diwali-collection"
      tone="none"
      labelledBy="diwali-collection-title"
      className="relative isolate overflow-hidden bg-[radial-gradient(ellipse_at_top,var(--color-maroon)_0%,var(--color-maroon-deep)_70%)] text-cream"
    >
      {/* Decoration: two faint rangoli medallions and a scatter of sparkles. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <Rangoli spin className="absolute -top-40 -right-40 size-[28rem] text-gold/15 sm:size-[36rem]" />
        <Rangoli className="absolute -bottom-48 -left-48 size-[26rem] text-marigold/10" />
        <Sparkle className="absolute top-16 left-[12%] size-3 text-gold-soft" />
        <Sparkle className="absolute top-28 right-[30%] size-4 text-gold-soft" delay={1.1} />
        <Sparkle className="absolute bottom-24 right-[8%] size-3 text-marigold" delay={2} />
      </div>

      <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-14">
        <div className="lg:col-span-7">
          <div aria-hidden="true" className="mb-6 flex items-end gap-3">
            <Diya className="size-10" />
            <Diya className="size-12" delay={400} />
            <Diya className="size-10" delay={800} />
          </div>
          <SectionHeading
            id="diwali-collection-title"
            tone="light"
            eyebrow={`The ${festival} ${year} collection`}
            title="Pieces for a house full of guests."
            lead={`Seating for the evening everyone comes over, a table for the family meal and a guest bed with room for the extra bedding. Every design is made to order, so it is built for your room rather than picked off a shelf before ${festival}.`}
          />
        </div>
        <Reveal delay={120} className="lg:col-span-5">
          <OfferPanel />
        </Reveal>
      </div>

      <div className="mt-12 grid gap-5 text-graphite sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
        {products.map((product, index) => (
          <Reveal key={product.id} delay={(index % 3) * 80} className="h-full">
            <ProductCard
              product={product}
              sizes="(max-width: 639px) 92vw, (max-width: 1023px) 46vw, 31vw"
            />
          </Reveal>
        ))}
      </div>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button
          href="/diwali-furniture"
          variant="light"
          size="lg"
          iconAfter={<ArrowRightIcon className="size-[1.15rem]" />}
        >
          Shop the {festival} collection
        </Button>
        <Button href="/furniture" variant="onImage" size="lg">
          Explore all furniture
        </Button>
      </div>
    </Section>
  );
}
