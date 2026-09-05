import { siteConfig } from "@/config/site";
import {
  catalogueHref,
  catalogueLabel,
  catalogueReady,
  telHref,
  waMessages,
  whatsappHref,
} from "@/lib/contact";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { EnquiryForm } from "./EnquiryForm";
import {
  ClockIcon,
  DownloadIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  WhatsAppIcon,
} from "@/components/ui/Icons";

/**
 * Contact block. Address, hours and email only appear once they exist in
 * `siteConfig`; nothing is filled in with plausible-looking placeholder data.
 */
export function ContactSection({ withForm = true }: { withForm?: boolean }) {
  const { address, openingHours, email, serviceArea } = siteConfig;

  return (
    <Section id="contact" tone="cream" labelledBy="contact-title">
      <SectionHeading
        id="contact-title"
        eyebrow="Contact"
        title="Talk to us about your furniture."
        lead="Call for a quick answer, or send photos and measurements on WhatsApp and we will come back with options."
      />

      <div className="mt-12 grid gap-8 lg:mt-14 lg:grid-cols-12 lg:gap-10">
        <div className="flex flex-col gap-4 lg:col-span-7">
          <div className="grid gap-4 sm:grid-cols-2">
            <Reveal>
              <a
                href={telHref}
                className="group flex h-full flex-col justify-between rounded-(--radius-card) border border-line bg-white p-7 transition-[border-color,box-shadow,transform] duration-500 ease-[var(--ease-premium)] hover:-translate-y-1 hover:border-line-strong hover:shadow-lift"
              >
                <span className="grid size-12 place-items-center rounded-2xl border border-line bg-cream text-brass-deep">
                  <PhoneIcon className="size-6" />
                </span>
                <span className="mt-6 block">
                  <span className="eyebrow text-stone-light">Call us</span>
                  <span className="mt-2 block font-display text-2xl text-ink group-hover:underline group-hover:underline-offset-4">
                    {siteConfig.phone.display}
                  </span>
                  <span className="mt-2 block text-sm text-stone">
                    Straight through to us, no call centre.
                  </span>
                </span>
              </a>
            </Reveal>

            <Reveal delay={80}>
              <a
                href={whatsappHref(waMessages.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col justify-between rounded-(--radius-card) border border-line bg-white p-7 transition-[border-color,box-shadow,transform] duration-500 ease-[var(--ease-premium)] hover:-translate-y-1 hover:border-line-strong hover:shadow-lift"
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-whatsapp/10 text-whatsapp-deep">
                  <WhatsAppIcon className="size-6" />
                </span>
                <span className="mt-6 block">
                  <span className="eyebrow text-stone-light">WhatsApp</span>
                  <span className="mt-2 block font-display text-2xl text-ink group-hover:underline group-hover:underline-offset-4">
                    Send us a message
                  </span>
                  <span className="mt-2 block text-sm text-stone">
                    Share photos, references and measurements.
                  </span>
                </span>
              </a>
            </Reveal>

            {email ? (
              <Reveal delay={120}>
                <a
                  href={`mailto:${email}`}
                  className="group flex h-full flex-col justify-between rounded-(--radius-card) border border-line bg-white p-7 transition-[border-color,box-shadow] duration-500 hover:border-line-strong"
                >
                  <span className="grid size-12 place-items-center rounded-2xl border border-line bg-cream text-brass-deep">
                    <MailIcon className="size-6" />
                  </span>
                  <span className="mt-6 block">
                    <span className="eyebrow text-stone-light">Email</span>
                    <span className="mt-2 block font-display text-2xl break-words text-ink">
                      {email}
                    </span>
                  </span>
                </a>
              </Reveal>
            ) : null}

            {address ? (
              <Reveal delay={160}>
                <div className="flex h-full flex-col justify-between rounded-(--radius-card) border border-line bg-white p-7">
                  <span className="grid size-12 place-items-center rounded-2xl border border-line bg-cream text-brass-deep">
                    <PinIcon className="size-6" />
                  </span>
                  <div className="mt-6">
                    <p className="eyebrow text-stone-light">Showroom</p>
                    <address className="mt-2 text-base leading-relaxed text-ink not-italic">
                      {address.streetAddress}
                      <br />
                      {address.locality}, {address.region} {address.postalCode}
                    </address>
                    {address.mapsUrl ? (
                      <a
                        href={address.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-block text-sm font-semibold text-ink underline underline-offset-4"
                      >
                        Get directions
                      </a>
                    ) : null}
                  </div>
                </div>
              </Reveal>
            ) : null}

            {openingHours?.length ? (
              <Reveal delay={200}>
                <div className="flex h-full flex-col justify-between rounded-(--radius-card) border border-line bg-white p-7">
                  <span className="grid size-12 place-items-center rounded-2xl border border-line bg-cream text-brass-deep">
                    <ClockIcon className="size-6" />
                  </span>
                  <div className="mt-6">
                    <p className="eyebrow text-stone-light">Business hours</p>
                    <ul className="mt-2 space-y-1 text-base text-ink">
                      {openingHours.map((slot) => (
                        <li key={slot.days}>
                          <span className="text-stone">{slot.days}</span> &middot; {slot.hours}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ) : null}
          </div>

          <Reveal delay={140} className="flex-1">
            <div className="flex h-full flex-col justify-center gap-4 rounded-(--radius-card) border border-line bg-ivory p-7 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="eyebrow text-stone-light">Product designs</p>
                <p className="mt-2 text-lg text-ink">Want to see the full range first?</p>
              </div>
              <a
                href={catalogueHref}
                {...(catalogueReady
                  ? { download: siteConfig.catalogue.downloadName }
                  : { target: "_blank", rel: "noopener noreferrer" })}
                className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-ink px-6 text-sm font-semibold text-ivory transition-colors hover:bg-graphite"
              >
                <DownloadIcon className="size-[1.15rem]" />
                {catalogueLabel}
              </a>
            </div>
          </Reveal>

          {serviceArea ? <p className="text-sm text-stone">We serve {serviceArea}.</p> : null}
        </div>

        {withForm ? (
          <div className="lg:col-span-5">
            <Reveal delay={100}>
              <EnquiryForm />
            </Reveal>
          </div>
        ) : null}
      </div>
    </Section>
  );
}
