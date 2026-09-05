import Link from "next/link";
import { additionalPieces, primaryCategories, secondaryCategories } from "@/data/categories";
import type { Category } from "@/lib/types";
import { cn } from "@/lib/cn";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SmartImage } from "@/components/ui/SmartImage";
import { Button } from "@/components/ui/Button";
import { ArrowUpRightIcon } from "@/components/ui/Icons";

function CategoryCard({
  category,
  featured,
  priority,
}: {
  category: Category;
  featured?: boolean;
  priority?: boolean;
}) {
  return (
    <Link
      href={category.href}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-(--radius-media) border border-line bg-white",
        "transition-[box-shadow,border-color,transform] duration-500 ease-[var(--ease-premium)]",
        "hover:-translate-y-1 hover:border-line-strong hover:shadow-lift",
      )}
    >
      <SmartImage
        image={category.image}
        ratio={featured ? "wide" : "square"}
        className={featured ? undefined : "sm:aspect-[4/3]"}
        priority={priority}
        /* Secondary cards are a two-up grid at every width, so they are never
           full-bleed - claiming 92vw on phones would ship a needlessly large
           file. Featured cards do go full width below the md breakpoint. */
        sizes={
          featured
            ? "(max-width: 767px) 92vw, (max-width: 1279px) 46vw, 44vw"
            : "(max-width: 1023px) 46vw, 30vw"
        }
      />

      {/* Scrim keeps the overlaid title legible on light photographs. The
          secondary cards carry a taller wash because their titles can run to
          two lines in the two-up mobile grid. */}
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0",
          featured
            ? "h-40 bg-[linear-gradient(to_bottom,rgba(20,17,13,0.58),transparent)]"
            : "h-1/2 bg-[linear-gradient(to_bottom,rgba(20,17,13,0.66),rgba(20,17,13,0.22)_60%,transparent)]",
        )}
      />

      <span className="absolute top-5 left-6 flex items-center gap-3 pr-6">
        <span
          className={cn(
            "font-display text-white",
            featured ? "text-3xl sm:text-4xl" : "text-xl sm:text-2xl",
          )}
        >
          {category.title}
        </span>
      </span>

      <span
        aria-hidden="true"
        className={cn(
          "absolute top-4 right-4 size-9 place-items-center rounded-full border border-white/40 bg-white/15 text-white backdrop-blur-md transition-colors duration-300 group-hover:bg-white group-hover:text-ink sm:top-5 sm:right-5 sm:grid",
          featured ? "grid" : "hidden",
        )}
      >
        <ArrowUpRightIcon className="size-4" />
      </span>

      <span
        className={cn(
          "flex flex-1 flex-col gap-4 p-6",
          /* On phones the secondary cards are scan-only: the photograph and the
             title carry the meaning, so the supporting copy is dropped to keep
             the grid to a couple of screens instead of six. */
          !featured && "hidden sm:flex",
        )}
      >
        <span className={cn("text-sm leading-relaxed text-stone", featured && "sm:text-base")}>
          {category.description}
        </span>
        <span className="mt-auto flex flex-wrap gap-2">
          {category.pieces.map((piece) => (
            <span
              key={piece}
              className="rounded-full border border-line bg-cream px-3 py-1 text-xs font-medium text-graphite"
            >
              {piece}
            </span>
          ))}
        </span>
      </span>
    </Link>
  );
}

export function CategoryGrid({
  heading = "Browse by what you are looking for",
  eyebrow = "Categories",
  lead = "Sofas and beds are what we are known for. Everything else in the home is made to the same standard.",
  showAction = true,
  scope = "all",
  id = "categories",
}: {
  heading?: string;
  eyebrow?: string;
  lead?: string;
  showAction?: boolean;
  /**
   * `"secondary"` drops the sofa and bed cells. Used on the homepage, where
   * both already have a full showcase and the split feature above this point -
   * repeating them here would flatten the hierarchy the page is built on.
   */
  scope?: "all" | "secondary";
  id?: string;
}) {
  const showPrimary = scope === "all";

  return (
    <Section id={id} tone="ivory" labelledBy="categories-title">
      <SectionHeading
        id="categories-title"
        eyebrow={eyebrow}
        title={heading}
        lead={lead}
        action={
          showAction ? (
            <Button href="/furniture" variant="outline" iconAfter={<ArrowUpRightIcon className="size-4" />}>
              Browse all furniture
            </Button>
          ) : undefined
        }
      />

      {/* Sofas and beds get the largest cells. */}
      {showPrimary ? (
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:mt-14">
          {primaryCategories.map((category, index) => (
            <Reveal key={category.slug} delay={index * 90}>
              <CategoryCard category={category} featured />
            </Reveal>
          ))}
        </div>
      ) : null}

      <div
        className={cn(
          "grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3",
          showPrimary ? "mt-4 sm:mt-5" : "mt-12 lg:mt-14",
        )}
      >
        {secondaryCategories.map((category, index) => (
          <Reveal key={category.slug} delay={index * 70}>
            <CategoryCard category={category} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12">
        <div className="rounded-(--radius-card) border border-line bg-cream p-6 sm:p-8">
          <h3 className="text-xl">Also made to order</h3>
          <ul className="mt-5 flex flex-wrap gap-2">
            {additionalPieces.map((piece) => (
              <li
                key={piece}
                className="rounded-full border border-line-strong bg-white px-4 py-2 text-sm text-graphite"
              >
                {piece}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
