import { faqs } from "@/data/faqs";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

/**
 * FAQ built on native <details> elements: keyboard accessible, works without
 * JavaScript, and adds no client bundle.
 */
export function FaqSection() {
  return (
    <Section id="faq" tone="ivory" labelledBy="faq-title" containerSize="default">
      <SectionHeading
        id="faq-title"
        eyebrow="Good to know"
        title="Questions we get asked most."
      />

      <div className="mt-10 divide-y divide-line border-y border-line">
        {faqs.map((faq, index) => (
          <Reveal key={faq.id} delay={index * 60}>
            <details className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left">
                <span className="font-display text-xl text-ink sm:text-2xl">{faq.question}</span>
                <span
                  aria-hidden="true"
                  className="relative grid size-9 shrink-0 place-items-center rounded-full border border-line-strong text-ink transition-transform duration-300 ease-[var(--ease-premium)] group-open:rotate-45"
                >
                  <span className="absolute h-px w-3.5 bg-current" />
                  <span className="absolute h-3.5 w-px bg-current" />
                </span>
              </summary>
              <p className="mt-3 max-w-3xl pr-16 text-sm leading-relaxed text-stone sm:text-base">
                {faq.answer}
              </p>
            </details>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
