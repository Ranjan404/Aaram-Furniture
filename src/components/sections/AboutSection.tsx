import { siteConfig } from "@/config/site";
import { waMessages, whatsappHref } from "@/lib/contact";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SmartImage } from "@/components/ui/SmartImage";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon, WhatsAppIcon } from "@/components/ui/Icons";

const principles = [
  {
    title: "Start with the room",
    body: "Measurements, doorways, light and how the space is actually used. The design follows from that, not the other way around.",
  },
  {
    title: "Build it properly",
    body: "Frames, joinery and upholstery are specified for daily use, because the parts nobody sees decide how long the piece lasts.",
  },
  {
    title: "Stay reachable",
    body: "One number, one conversation. Ask a question on WhatsApp and get a straight answer from someone who knows the piece.",
  },
];

export function AboutSection({
  compact = false,
  tone = "cream",
}: {
  compact?: boolean;
  tone?: "ivory" | "cream";
}) {
  return (
    <Section id="about" tone={tone} labelledBy="about-title" size={compact ? "default" : "lg"}>
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <Reveal>
            <p className="eyebrow text-brass-deep">About us</p>
            <h2 id="about-title" className="mt-4 text-(length:--text-display-md)">
              A furniture business built around sofas, beds and getting the details right.
            </h2>
            <p className="mt-6 leading-relaxed text-stone">
              {siteConfig.name} makes furniture for real homes: sofas that a family actually sits
              on, beds that hold up to years of use, and storage that fits the wall you have rather
              than the wall a catalogue assumed.{" "}
              <Link
                href="/sofas"
                className="font-semibold text-ink underline decoration-brass-soft underline-offset-4 transition-colors hover:decoration-brass"
              >
                Sofas
              </Link>{" "}
              and{" "}
              <Link
                href="/beds"
                className="font-semibold text-ink underline decoration-brass-soft underline-offset-4 transition-colors hover:decoration-brass"
              >
                beds
              </Link>{" "}
              are our focus, and dining, storage and living room pieces are made to the same
              standard.
            </p>
            <p className="mt-4 leading-relaxed text-stone">
              Most of what we build is made to order. That means you choose the size, the
              upholstery and the finish, and we tell you honestly which combinations will work in
              your room and which will not.
            </p>
          </Reveal>

          <ul className="mt-10 space-y-6">
            {(compact ? principles.slice(0, 2) : principles).map((principle, index) => (
              <li key={principle.title}>
                <Reveal delay={index * 80}>
                  <div className="flex gap-5">
                    <span
                      aria-hidden="true"
                      className="mt-1 font-display text-lg text-brass tabular-nums"
                    >
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="text-lg">{principle.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-stone">{principle.body}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal delay={140} className="mt-10 flex flex-wrap gap-3">
            <Button
              href={whatsappHref(waMessages.consultation)}
              variant="whatsapp"
              icon={<WhatsAppIcon className="size-[1.15rem]" />}
            >
              Book a consultation
            </Button>
            {compact ? (
              <Button
                href="/about"
                variant="outline"
                iconAfter={<ArrowRightIcon className="size-4" />}
              >
                More about us
              </Button>
            ) : null}
          </Reveal>
        </div>

        <div className="lg:col-span-6">
          <Reveal delay={80}>
            <div className="grid grid-cols-2 gap-4">
              <div className="group col-span-2">
                <SmartImage
                  image={{
                    src: "/images/about/contemporary-furniture-showroom-lounge.jpg",
                    alt: "Teal and ivory two-tone L-shaped sectional sofa with a round tufted ottoman, in the showroom",
                  }}
                  ratio="wide"
                  sizes="(max-width: 1023px) 92vw, 46vw"
                  className="rounded-(--radius-media) border border-line"
                />
              </div>
              <div className="group">
                <SmartImage
                  image={{
                    src: "/images/about/furniture-workshop-craftsmanship.jpg",
                    alt: "Slate blue two-seater sofa finished and staged in the workshop, upholstery rolls in the background",
                  }}
                  ratio="square"
                  sizes="(max-width: 1023px) 46vw, 23vw"
                  className="rounded-(--radius-media) border border-line"
                />
              </div>
              <div className="group">
                <SmartImage
                  image={{
                    src: "/images/hero/upholstered-bed-linen-detail.jpg",
                    alt: "Close up of striped and plain linen bedding on an upholstered bed, showing the stitching",
                  }}
                  ratio="square"
                  sizes="(max-width: 1023px) 46vw, 23vw"
                  className="rounded-(--radius-media) border border-line"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
