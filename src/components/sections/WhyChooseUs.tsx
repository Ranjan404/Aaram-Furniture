import { features } from "@/data/features";
import { featureIcons } from "@/components/ui/Icons";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function WhyChooseUs({ limit }: { limit?: number } = {}) {
  const shown = limit ? features.slice(0, limit) : features;

  return (
    <Section id="why-us" tone="cream" labelledBy="why-us-title">
      <SectionHeading
        id="why-us-title"
        eyebrow="Why choose us"
        title="The difference is in how it is made."
        lead="Furniture is a long purchase. Here is how we try to make sure you only make it once."
      />

      <ul className="mt-12 grid gap-px overflow-hidden rounded-(--radius-card) border border-line bg-line sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
        {shown.map((feature, index) => {
          const Icon = featureIcons[feature.icon];
          return (
            <li key={feature.id} className="bg-cream">
              <Reveal delay={(index % 3) * 80} className="block h-full">
                <div className="group h-full bg-ivory p-7 transition-colors duration-500 hover:bg-white sm:p-9">
                  <span className="grid size-12 place-items-center rounded-2xl border border-line bg-cream text-brass-deep transition-colors duration-500 group-hover:border-brass-soft group-hover:bg-brass-soft/40">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-6 text-xl">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone">{feature.description}</p>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
