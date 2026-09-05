import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

/** Shared shell for the privacy and terms pages. */
export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <article className="pt-[calc(var(--header-h)+3rem)] pb-20 lg:pt-[calc(var(--header-h)+4.5rem)] lg:pb-28">
      <Container size="narrow">
        <p className="eyebrow text-brass-deep">Legal</p>
        <h1 className="mt-4 text-(length:--text-display-md)">{title}</h1>
        <p className="mt-4 text-sm text-stone">Last updated: {updated}</p>

        <div className="mt-10 space-y-6 leading-relaxed text-graphite [&_a]:font-semibold [&_a]:text-ink [&_a]:underline [&_a]:underline-offset-4 [&_h2]:mt-12 [&_h2]:text-2xl [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-2">
          {children}
        </div>
      </Container>
    </article>
  );
}
