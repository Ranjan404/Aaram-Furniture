import type { FaqItem } from "@/lib/types";

/**
 * Article FAQ block. Native `<details>`, exactly as `FaqSection` does it:
 * keyboard accessible, works without JavaScript, adds nothing to the bundle.
 *
 * The visible questions here are the same list the `FAQPage` structured data
 * is generated from, so the markup and the schema can never drift apart.
 */
export function ArticleFaqs({ faqs }: { faqs: FaqItem[] }) {
  return (
    <section aria-labelledby="article-faq-title" className="mt-16">
      <h2 id="article-faq-title" className="text-(length:--text-display-sm)">
        Frequently asked
      </h2>
      <div className="mt-6 divide-y divide-line border-y border-line">
        {faqs.map((faq) => (
          <details key={faq.id} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left">
              <span className="font-display text-lg text-ink sm:text-xl">{faq.question}</span>
              <span
                aria-hidden="true"
                className="relative grid size-8 shrink-0 place-items-center rounded-full border border-line-strong text-ink transition-transform duration-300 ease-[var(--ease-premium)] group-open:rotate-45"
              >
                <span className="absolute h-px w-3 bg-current" />
                <span className="absolute h-3 w-px bg-current" />
              </span>
            </summary>
            <p className="mt-3 pr-12 text-[0.9375rem] leading-relaxed text-stone">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
