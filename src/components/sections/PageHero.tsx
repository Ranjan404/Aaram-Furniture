import type { ReactNode } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

/**
 * Compact hero for inner pages. Includes a breadcrumb trail, which doubles as
 * orientation for visitors and a crawl path for search engines.
 */
export function PageHero({
  eyebrow,
  title,
  lead,
  actions,
  breadcrumb,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  actions?: ReactNode;
  breadcrumb: { name: string; path: string }[];
}) {
  return (
    <section className="surface-wash relative overflow-hidden border-b border-line pt-[calc(var(--header-h)+2.5rem)] pb-14 sm:pb-16 lg:pt-[calc(var(--header-h)+4.5rem)] lg:pb-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-32 -z-10 size-[34rem] rounded-full bg-[radial-gradient(circle,rgba(214,186,148,0.28),transparent_65%)] blur-2xl"
      />
      <Container size="wide">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-xs text-stone">
            {breadcrumb.map((crumb, index) => {
              const last = index === breadcrumb.length - 1;
              return (
                <li key={crumb.path} className="flex items-center gap-2">
                  {last ? (
                    <span aria-current="page" className="inline-block py-1.5 text-graphite">
                      {crumb.name}
                    </span>
                  ) : (
                    <Link href={crumb.path} className="inline-block py-1.5 transition-colors hover:text-ink">
                      {crumb.name}
                    </Link>
                  )}
                  {!last ? <span aria-hidden="true">/</span> : null}
                </li>
              );
            })}
          </ol>
        </nav>

        <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="lg:col-span-7">
            <p className="eyebrow text-brass-deep">{eyebrow}</p>
            <h1 className="mt-4 text-(length:--text-display-lg)">{title}</h1>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base leading-relaxed text-stone sm:text-[1.0625rem]">{lead}</p>
            {actions ? <div className="mt-7 flex flex-wrap gap-3">{actions}</div> : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
