import Link from "next/link";
import { categoriesWithCounts } from "@/data/blog";
import { cn } from "@/lib/cn";
import type { BlogCategorySlug } from "@/lib/types";

/**
 * Category row.
 *
 * Real links to real archive pages rather than a client-side filter: each
 * category is a crawlable URL with its own metadata, which is the whole point
 * of having categories for search. Empty categories are never shown.
 */
export function CategoryNav({
  active,
  className,
}: {
  /** Omit on /blog, where "All guides" is the current page. */
  active?: BlogCategorySlug;
  className?: string;
}) {
  const chip =
    "inline-flex min-h-10 items-center rounded-full border px-4 text-sm font-medium transition-colors duration-300";

  return (
    <nav aria-label="Article categories" className={className}>
      <ul className="flex flex-wrap gap-2.5">
        <li>
          <Link
            href="/blog"
            aria-current={active ? undefined : "page"}
            className={cn(
              chip,
              active
                ? "border-line-strong bg-white text-graphite hover:border-ink hover:text-ink"
                : "border-ink bg-ink text-ivory",
            )}
          >
            All guides
          </Link>
        </li>
        {categoriesWithCounts
          .filter(({ count }) => count > 0)
          .map(({ category, count }) => {
            const current = category.slug === active;
            return (
              <li key={category.slug}>
                <Link
                  href={`/blog/category/${category.slug}`}
                  aria-current={current ? "page" : undefined}
                  className={cn(
                    chip,
                    current
                      ? "border-ink bg-ink text-ivory"
                      : "border-line-strong bg-white text-graphite hover:border-ink hover:text-ink",
                  )}
                >
                  {category.title}
                  <span className="ml-2 text-xs text-current opacity-60">{count}</span>
                </Link>
              </li>
            );
          })}
      </ul>
    </nav>
  );
}
