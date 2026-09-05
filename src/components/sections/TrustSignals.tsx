import { catalogueHref, catalogueLabel, catalogueReady, telHref, waMessages, whatsappHref } from "@/lib/contact";
import { siteConfig } from "@/config/site";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import {
  ArrowUpRightIcon,
  ConsultIcon,
  CustomIcon,
  DownloadIcon,
  WhatsAppIcon,
} from "@/components/ui/Icons";

/**
 * Trust band shown in place of testimonials until real, permission-given
 * customer feedback exists (see `src/data/testimonials.ts`).
 *
 * Every point here describes a service the business actually offers, so none of
 * it needs verification - unlike a rating, a review count or a named quote.
 * Each card also carries a different call to action, which keeps the page from
 * repeating one button six times.
 */
const signals = [
  {
    id: "consultation",
    icon: ConsultIcon,
    title: "Design consultation",
    body: "Talk through size, layout, fabric and finish before anything is ordered. Send a photo of the room and we will tell you what works.",
    cta: { label: "Book a consultation", href: whatsappHref(waMessages.consultation), external: true },
  },
  {
    id: "custom",
    icon: CustomIcon,
    title: "Made to your measurements",
    body: "Sofas, beds and wardrobes built to your dimensions rather than a standard size. Share a reference design and we will price it.",
    cta: { label: "Discuss your requirement", href: whatsappHref(waMessages.custom), external: true },
  },
  {
    id: "whatsapp",
    icon: WhatsAppIcon,
    title: "One number, straight to us",
    body: `Call or message ${siteConfig.phone.display} and speak to someone who knows the pieces. No call centre, no form that goes nowhere.`,
    cta: { label: "Call for enquiry", href: telHref, external: false },
  },
  {
    id: "catalogue",
    icon: DownloadIcon,
    title: "See the full range first",
    body: "Browse every current design at your own pace, shortlist what suits your room, then send us the ones you want priced.",
    cta: { label: catalogueLabel, href: catalogueHref, external: !catalogueReady },
  },
] as const;

export function TrustSignals({ tone = "cream" }: { tone?: "ivory" | "cream" }) {
  return (
    <Section id="how-we-work" tone={tone} labelledBy="trust-title">
      <SectionHeading
        id="trust-title"
        eyebrow="How we work with you"
        title="Buying furniture should not be a guess."
        lead="Four ways to get what you need before you commit to anything, from a quick question on WhatsApp to a full made-to-measure design."
      />

      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
        {signals.map((signal, index) => {
          const Icon = signal.icon;
          return (
            <li key={signal.id} className="h-full">
              <Reveal delay={index * 80} className="h-full">
                <div className="group flex h-full flex-col rounded-(--radius-card) border border-line bg-white p-7 transition-[border-color,box-shadow,transform] duration-500 ease-[var(--ease-premium)] hover:-translate-y-1 hover:border-line-strong hover:shadow-lift">
                  <span className="grid size-12 place-items-center rounded-2xl border border-line bg-cream text-brass-deep transition-colors duration-500 group-hover:border-brass-soft group-hover:bg-brass-soft/40">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-6 text-xl">{signal.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-stone">{signal.body}</p>
                  <a
                    href={signal.cta.href}
                    {...(signal.cta.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    {...(catalogueReady && signal.id === "catalogue"
                      ? { download: siteConfig.catalogue.downloadName }
                      : {})}
                    className="mt-6 inline-flex items-center gap-1.5 py-1.5 text-sm font-semibold text-ink underline-offset-4 hover:underline"
                  >
                    {signal.cta.label}
                    <ArrowUpRightIcon className="size-4 transition-transform duration-300 ease-[var(--ease-premium)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
