import { testimonials, testimonialsAreVerified } from "@/data/testimonials";
import type { Testimonial } from "@/lib/types";
import { waMessages, whatsappHref } from "@/lib/contact";
import { cn } from "@/lib/cn";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { QuoteIcon, StarIcon, WhatsAppIcon } from "@/components/ui/Icons";

/** First letters of the name, unless the entry overrides them. */
function initialsFor(testimonial: Testimonial) {
  if (testimonial.initials) return testimonial.initials;
  return testimonial.name
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");
}

function Stars({ rating, tone }: { rating: number; tone: "dark" | "light" }) {
  return (
    <p
      className={cn(
        "flex items-center gap-1",
        tone === "light" ? "text-brass-soft" : "text-brass",
      )}
      aria-label={`Rated ${rating} out of 5`}
    >
      {Array.from({ length: 5 }, (_, index) => (
        <StarIcon
          key={index}
          className={cn("size-4", index >= rating && "opacity-25")}
        />
      ))}
    </p>
  );
}

function TestimonialCard({
  testimonial,
  featured = false,
}: {
  testimonial: Testimonial;
  /** The first card is inverted to give the grid a focal point. */
  featured?: boolean;
}) {
  const tone = featured ? "light" : "dark";

  return (
    <figure
      className={cn(
        "flex h-full flex-col rounded-(--radius-media) border p-7 transition-[box-shadow,border-color,transform] duration-500 ease-[var(--ease-premium)] hover:-translate-y-1 hover:shadow-lift sm:p-8",
        featured
          ? "border-ink bg-ink text-cream"
          : "border-line bg-white hover:border-line-strong",
      )}
    >
      <div className="flex items-start justify-between gap-4">
        {testimonial.rating ? (
          <Stars rating={testimonial.rating} tone={tone} />
        ) : (
          <span />
        )}
        <QuoteIcon
          aria-hidden="true"
          className={cn(
            "size-7 shrink-0",
            featured ? "text-cream/25" : "text-brass-soft",
          )}
        />
      </div>

      <blockquote className="mt-5 flex-1">
        <p
          className={cn(
            "font-display text-[1.3rem] leading-[1.45] sm:text-[1.4rem]",
            featured ? "text-cream" : "text-ink",
          )}
        >
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </blockquote>

      <figcaption
        className={cn(
          "mt-7 flex items-center gap-4 border-t pt-5",
          featured ? "border-cream/15" : "border-line",
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            "grid size-11 shrink-0 place-items-center rounded-full font-display text-base",
            featured
              ? "bg-cream/12 text-brass-soft"
              : "bg-sand text-brass-deep",
          )}
        >
          {initialsFor(testimonial)}
        </span>
        <span className="min-w-0">
          <span
            className={cn(
              "block text-sm font-semibold",
              featured ? "text-cream" : "text-ink",
            )}
          >
            {testimonial.name}
          </span>
          <span
            className={cn(
              "mt-0.5 block text-xs",
              featured ? "text-cream/55" : "text-stone",
            )}
          >
            {[testimonial.location, testimonial.product]
              .filter(Boolean)
              .join(" · ")}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}

/**
 * Customer feedback.
 *
 * Layout is CSS-only: a snap-scrolling rail on phones (no carousel library, no
 * client component) that becomes a two- then three-column grid on larger
 * screens. The first card is inverted so the block has a focal point rather
 * than reading as three identical boxes.
 *
 * Honesty: while `testimonialsAreVerified` is false the entries in
 * `src/data/testimonials.ts` are sample content, so a short note is rendered
 * under the section and no rating or review structured data is emitted
 * anywhere on the site. Add real quotes, flip the flag, note disappears.
 */
export function Testimonials({ tone = "ivory" }: { tone?: "ivory" | "cream" }) {
  if (testimonials.length === 0) return null;

  return (
    <Section id="feedback" tone={tone} labelledBy="feedback-title">
      <SectionHeading
        id="feedback-title"
        eyebrow="Customer feedback"
        title="In their words."
        lead="A sofa reveals itself after a few months, not a few minutes. This is the kind of feedback that tells us we got it right."
        action={
          <Button
            href={whatsappHref(waMessages.general)}
            variant="outline"
            icon={<WhatsAppIcon className="size-[1.15rem]" />}
          >
            Ask us anything
          </Button>
        }
      />

      {/* Phones: a snap rail so six quotes cost one screen instead of six.
          sm and up: a normal grid. */}
      <ul
        className={cn(
          "no-scrollbar mt-12 -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 lg:mt-14",
          "sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3",
        )}
      >
        {testimonials.map((testimonial, index) => (
          <li
            key={testimonial.id}
            className="w-[82vw] max-w-sm shrink-0 snap-start sm:w-auto sm:max-w-none sm:shrink"
          >
            <Reveal delay={(index % 3) * 90} className="h-full">
              <TestimonialCard
                testimonial={testimonial}
                featured={index === 0}
              />
            </Reveal>
          </li>
        ))}
      </ul>

      {/* Swipe affordance, phones only. */}
      <p className="mt-3 text-center text-xs text-stone sm:hidden">
        Swipe for more &rarr;
      </p>

      {!testimonialsAreVerified ? (
        <p className="mt-8 max-w-3xl text-xs leading-relaxed text-stone-light">
          Sample layout content. These are not real customer reviews and are not
          attributed to any person or review platform. Replace them if we have
          genuine feedback and this note disappears.
        </p>
      ) : null}
    </Section>
  );
}
