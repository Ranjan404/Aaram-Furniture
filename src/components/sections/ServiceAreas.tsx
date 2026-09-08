import Link from "next/link";
import { siteConfig } from "@/config/site";
import { serviceAreas } from "@/data/service-areas";
import { waMessages, whatsappHref } from "@/lib/contact";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon, WhatsAppIcon } from "@/components/ui/Icons";

/**
 * Where we deliver, rendered rather than implied.
 *
 * Before this existed, the towns the business serves appeared only inside the
 * `areaServed` JSON-LD: not one of them was in a heading, a paragraph or a link
 * anywhere on the site, which made the site a poor candidate for any query of
 * the form "[furniture] in [city]" no matter how good the rest of it was.
 *
 * Each place carries one honest line about what furnishing a home there
 * involves, and a link to the guide written about it where one exists. It is
 * deliberately not four near-identical city landing pages: those need a real
 * local project behind them, and a page whose only local content is the city
 * name repeated is the pattern Google's doorway-page guidance targets.
 */
export function ServiceAreas({
  tone = "ivory",
  eyebrow = "Where we deliver",
}: {
  tone?: "ivory" | "cream" | "wash";
  eyebrow?: string;
}) {
  return (
    <Section id="service-areas" tone={tone} labelledBy="service-areas-title">
      <SectionHeading
        id="service-areas-title"
        eyebrow={eyebrow}
        title={`Made to order across ${siteConfig.serviceArea}.`}
        lead="Every piece is measured against the room it is going into, so where you are matters as much as what you order. These are the places we deliver and install."
        action={
          <Button
            href={whatsappHref(waMessages.general)}
            variant="whatsapp"
            icon={<WhatsAppIcon className="size-[1.15rem]" />}
          >
            Check your area
          </Button>
        }
      />

      <ul className="mt-12 grid gap-px overflow-hidden rounded-(--radius-card) border border-line bg-line sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
        {serviceAreas.map((area, index) => (
          <li key={area.name} className="bg-ivory">
            <Reveal delay={(index % 3) * 70} className="block h-full">
              <div className="flex h-full flex-col bg-ivory p-7 sm:p-8">
                <h3 className="text-xl">{area.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-stone">{area.note}</p>
                {area.guide ? (
                  <Link
                    href={`/blog/${area.guide.slug}`}
                    className="group mt-5 inline-flex items-start gap-2 text-sm font-semibold text-ink underline-offset-4 hover:underline"
                  >
                    {area.guide.label}
                    <ArrowRightIcon className="mt-1 size-4 shrink-0 transition-transform duration-500 group-hover:translate-x-1" />
                  </Link>
                ) : null}
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
