import Link from "next/link";
import { primaryFeatures } from "@/data/categories";
import { beds, sofas } from "@/data/products";
import type { PrimaryFeature } from "@/lib/types";
import { waMessages, whatsappHref } from "@/lib/contact";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SmartImage } from "@/components/ui/SmartImage";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon, WhatsAppIcon } from "@/components/ui/Icons";

/** Design counts, read from the catalogue so they can never drift out of date. */
const counts: Record<PrimaryFeature["slug"], number> = {
  sofas: sofas.length,
  beds: beds.length,
};

/**
 * The two halves are deliberately NOT one big link each. A whole-card link
 * would have to swallow the WhatsApp button inside it, and nesting interactive
 * elements breaks both keyboard order and screen reader output. Instead the
 * photograph is a quiet link, the panel is the hover `group`, and the two real
 * actions sit below the copy as buttons.
 */
function FeaturePanel({ feature }: { feature: PrimaryFeature }) {
  const count = counts[feature.slug];

  return (
    <article className="group relative isolate flex min-h-[30rem] flex-col justify-end overflow-hidden sm:min-h-[34rem] lg:min-h-[42rem]">
      <Link href={feature.href} tabIndex={-1} aria-hidden="true" className="absolute inset-0 -z-10">
        <SmartImage
          image={feature.image}
          ratio="fill"
          sizes="(max-width: 767px) 100vw, 50vw"
          quality={84}
        />
      </Link>

      {/* Warm scrim from the bottom: the copy sits over the lower third, which
          is the quietest part of both photographs. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgba(20,17,13,0.92)_0%,rgba(20,17,13,0.72)_32%,rgba(20,17,13,0.28)_62%,rgba(20,17,13,0.10)_100%)]"
      />

      <div className="p-7 sm:p-10 lg:p-12">
        <p className="eyebrow text-brass-soft">{count} designs</p>

        <h3 className="mt-3 font-display text-(length:--text-display-md) leading-[1.04] text-white">
          {feature.title}
          <span className="mt-1 block text-white/60">{feature.promise}</span>
        </h3>

        <p className="mt-5 max-w-md text-sm leading-relaxed text-white/80 sm:text-base">
          {feature.description}
        </p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {feature.points.map((point) => (
            <li
              key={point}
              className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium text-white/85 backdrop-blur-sm"
            >
              {point}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <Button
            href={feature.href}
            variant="light"
            iconAfter={
              <ArrowRightIcon className="size-4 transition-transform duration-300 ease-[var(--ease-premium)] group-hover/btn:translate-x-1" />
            }
          >
            {feature.ctaLabel}
          </Button>
          {/* The two halves never share a label: "Ask on WhatsApp" twice on one
              screen tells the visitor nothing about where either one lands. */}
          <Button
            href={whatsappHref(waMessages[feature.slug])}
            variant="onImage"
            icon={<WhatsAppIcon className="size-[1.15rem]" />}
          >
            Ask about {feature.enquiryLabel}
          </Button>
        </div>
      </div>
    </article>
  );
}

/**
 * Full-bleed split feature: sofas on the left, beds on the right.
 *
 * This is the section that states the business in one screen. It sits directly
 * after the two product showcases and before any other furniture, so the
 * hierarchy a visitor reads is sofas and beds first, everything else after.
 */
export function SofaBedSplit() {
  return (
    <section aria-labelledby="specialities-title" className="bg-ink">
      <Container size="wide" className="pt-16 pb-12 text-center sm:pt-20 lg:pt-26 lg:pb-14">
        <Reveal>
          <p className="eyebrow text-brass-soft">What we are known for</p>
          <h2
            id="specialities-title"
            className="mx-auto mt-4 max-w-2xl text-(length:--text-display-md) text-cream"
          >
            Two rooms. Two things we do properly.
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-cream/70">
            Everything else we make is genuinely good. These two are why people call us.
          </p>
        </Reveal>
      </Container>

      {/* Edge to edge: no container, no gap. The seam between the two
          photographs is the point of the section. */}
      <div className="grid md:grid-cols-2">
        {primaryFeatures.map((feature) => (
          <FeaturePanel key={feature.slug} feature={feature} />
        ))}
      </div>
    </section>
  );
}
