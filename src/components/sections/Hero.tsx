import Image from "next/image";
import Link from "next/link";
import { heroTrustPoints } from "@/data/features";
import { beds, sofas } from "@/data/products";
import { telHref, waMessages, whatsappHref } from "@/lib/contact";
import { BLUR_DATA_URL } from "@/lib/blur";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ArrowRightIcon, ArrowUpRightIcon, PhoneIcon, WhatsAppIcon } from "@/components/ui/Icons";

/** The two headline categories, surfaced visually inside the hero itself. */
const heroShortcuts = [
  {
    href: "/sofas",
    label: "Sofas",
    meta: `${sofas.length} designs`,
    image: {
      src: "/images/products/sofas/aspen-leather-three-seater-sofa.jpg",
      alt: "Tan leather three-seater sofa on tapered wooden legs",
    },
  },
  {
    href: "/beds",
    label: "Beds",
    meta: `${beds.length} designs`,
    image: {
      src: "/images/products/beds/serene-upholstered-king-bed.jpg",
      alt: "King size bed with a tall channel-tufted upholstered headboard",
    },
  },
];

type HeroShortcut = (typeof heroShortcuts)[number];

/**
 * One category shortcut. `compact` is the phone and tablet treatment: a smaller
 * thumbnail, no arrow and a stacked label, so two of them sit side by side at
 * 320px without either wrapping.
 */
function ShortcutCard({ shortcut, compact }: { shortcut: HeroShortcut; compact?: boolean }) {
  return (
    <Link
      href={shortcut.href}
      className={cn(
        /* Ink-tinted glass, not white: these cards sit at the bright end of the
           photograph at `xl`, where a white wash leaves them unreadable. */
        "group flex items-center rounded-2xl border border-white/25 bg-ink/60 backdrop-blur-md",
        "transition-colors duration-500 ease-[var(--ease-premium)] hover:border-white/55 hover:bg-ink/75",
        compact ? "gap-3 p-2.5" : "gap-4 p-3",
      )}
    >
      <span
        className={cn(
          "relative shrink-0 overflow-hidden rounded-xl",
          compact ? "size-14" : "size-16",
        )}
      >
        <Image
          src={shortcut.image.src}
          alt={shortcut.image.alt}
          fill
          sizes="64px"
          quality={70}
          className="object-cover transition-transform duration-700 ease-[var(--ease-premium)] group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      </span>
      <span className="min-w-0 flex-1">
        <span className={cn("block font-display text-white", compact ? "text-lg" : "text-xl")}>
          {shortcut.label}
        </span>
        <span className="mt-0.5 block text-[0.6875rem] tracking-[0.14em] whitespace-nowrap text-white/75 uppercase">
          {shortcut.meta}
        </span>
      </span>
      {compact ? null : (
        <ArrowUpRightIcon className="size-4 shrink-0 text-white/70 transition-transform duration-300 ease-[var(--ease-premium)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </Link>
  );
}

/**
 * Above-the-fold hero.
 *
 * Kept deliberately light on words: one headline, one supporting line and three
 * actions. The two category shortcuts do the rest of the work visually, so a
 * first-time visitor sees "sofas and beds" rather than reading it.
 *
 * The header renders transparently over this section, so a warm scrim runs from
 * the top-left to keep both the navigation and the headline legible without
 * turning the page dark. The photograph is the only `priority` image on the
 * site; everything below the fold lazy-loads.
 */
export function Hero() {
  return (
    <section className="relative isolate flex min-h-[86svh] items-end overflow-hidden bg-ink lg:min-h-[92svh]">
      <Image
        src="/images/hero/modern-living-room-with-light-sectional-sofa.jpg"
        alt="Contemporary living room with a large light sectional sofa, a low centre table and a timber feature wall"
        fill
        priority
        fetchPriority="high"
        quality={85}
        sizes="100vw"
        placeholder="blur"
        blurDataURL={BLUR_DATA_URL}
        className="-z-10 object-cover object-center"
      />

      {/* Warm scrim: heavier on the left where the copy sits. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(20,17,13,0.90)_0%,rgba(20,17,13,0.76)_38%,rgba(20,17,13,0.44)_66%,rgba(20,17,13,0.14)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-44 bg-[linear-gradient(to_bottom,rgba(20,17,13,0.6),transparent)]"
      />

      <Container size="wide" className="pt-32 pb-12 sm:pb-16 lg:pt-40 lg:pb-20">
        <div className="flex items-end justify-between gap-12">
          <div className="max-w-2xl lg:max-w-[46rem]">
            <p className="eyebrow animate-fade text-brass-soft">
              Sofas &middot; Beds &middot; Custom furniture
            </p>

            <h1 className="animate-rise mt-5 text-(length:--text-display-lg) text-white [animation-delay:80ms]">
              Sofas and beds designed to make your space feel like home.
            </h1>

            <p className="animate-rise mt-5 max-w-lg text-base leading-relaxed text-white/80 [animation-delay:200ms] sm:text-lg">
              Made to order in the size, fabric and finish you choose.
            </p>

            <div className="animate-rise mt-8 flex flex-col gap-3 [animation-delay:300ms] sm:flex-row sm:flex-wrap sm:items-center">
              <Button
                href="/collection"
                variant="light"
                size="lg"
                iconAfter={
                  <ArrowRightIcon className="size-[1.15rem] transition-transform duration-300 ease-[var(--ease-premium)] group-hover/btn:translate-x-1" />
                }
              >
                Explore the collection
              </Button>
              <Button
                href={whatsappHref(waMessages.general)}
                variant="whatsapp"
                size="lg"
                icon={<WhatsAppIcon className="size-[1.15rem]" />}
              >
                Ask on WhatsApp
              </Button>
              <Button
                href={telHref}
                variant="onImage"
                size="lg"
                icon={<PhoneIcon className="size-[1.15rem]" />}
              >
                Call for enquiry
              </Button>
            </div>

            {/* Below `sm` the two category shortcuts earn this space instead:
                showing what the business makes beats listing adjectives. */}
            <ul className="animate-fade mt-9 hidden max-w-xl flex-wrap gap-x-6 gap-y-2.5 [animation-delay:500ms] sm:flex">
              {heroTrustPoints.map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm text-white/85">
                  <span aria-hidden="true" className="size-1.5 rounded-full bg-brass-soft" />
                  {point}
                </li>
              ))}
            </ul>

            {/* Phones and tablets: the same two shortcuts, side by side. The
                xl layout moves them into the panel on the right instead. */}
            <ul className="animate-fade mt-7 grid max-w-md grid-cols-2 gap-3 [animation-delay:500ms] sm:mt-8 xl:hidden">
              {heroShortcuts.map((shortcut) => (
                <li key={shortcut.href}>
                  <ShortcutCard shortcut={shortcut} compact />
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop only: the two lead categories, shown rather than described.
              On smaller screens the category grid sits immediately below. */}
          <ul className="animate-fade hidden w-64 shrink-0 flex-col gap-3 [animation-delay:650ms] xl:flex">
            {heroShortcuts.map((shortcut) => (
              <li key={shortcut.href}>
                <ShortcutCard shortcut={shortcut} />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
