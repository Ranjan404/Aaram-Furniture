import Link from "next/link";
import { cn } from "@/lib/cn";

/**
 * Breadcrumb trail. Matches the markup already used by `PageHero` and the
 * product pages, extracted so the blog's three route levels stay consistent
 * and so the visible trail always mirrors the `BreadcrumbList` JSON-LD.
 */
export function Breadcrumbs({
  trail,
  className,
}: {
  trail: { name: string; path: string }[];
  className?: string;
}) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-2 text-xs text-stone">
        {trail.map((crumb, index) => {
          const last = index === trail.length - 1;
          return (
            <li key={crumb.path} className="flex items-center gap-2">
              {last ? (
                <span aria-current="page" className="inline-block py-1.5 text-graphite">
                  {crumb.name}
                </span>
              ) : (
                <Link
                  href={crumb.path}
                  className={cn("inline-block py-1.5 transition-colors hover:text-ink")}
                >
                  {crumb.name}
                </Link>
              )}
              {!last ? <span aria-hidden="true">/</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
