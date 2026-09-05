import { siteConfig } from "@/config/site";
import {
  catalogueCtaLabel,
  catalogueHref,
  catalogueReady,
  telHref,
  waMessages,
  whatsappHref,
} from "@/lib/contact";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { DownloadIcon, PhoneIcon, WhatsAppIcon } from "@/components/ui/Icons";

/**
 * Primary conversion band. Repeats the three actions that matter - message,
 * call, get the designs - at the point where a visitor has seen enough.
 */
export function LeadCTA() {
  return (
    <section aria-labelledby="lead-title" className="bg-ivory pb-16 sm:pb-20 lg:pb-28">
      <Container size="wide">
        <Reveal>
          <div className="surface-wash relative overflow-hidden rounded-[2rem] border border-line px-6 py-14 text-center sm:px-12 sm:py-16 lg:py-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-28 left-1/2 size-[32rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(214,186,148,0.3),transparent_65%)] blur-2xl"
            />

            <p className="eyebrow text-brass-deep">Let&rsquo;s talk</p>
            <h2 id="lead-title" className="mx-auto mt-4 max-w-3xl text-(length:--text-display-md)">
              Have a furniture design in mind?
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-stone">
              Send us a photo of your room, a reference design or just the measurements. We will
              tell you what will fit, what it will cost and how long it will take, before you
              commit to anything.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
              <Button
                href={whatsappHref(waMessages.general)}
                variant="whatsapp"
                size="lg"
                icon={<WhatsAppIcon className="size-[1.15rem]" />}
              >
                Discuss your requirement
              </Button>
              <Button
                href={telHref}
                size="lg"
                icon={<PhoneIcon className="size-[1.15rem]" />}
              >
                Call for enquiry
              </Button>
              <Button
                href={catalogueHref}
                variant="outline"
                size="lg"
                icon={<DownloadIcon className="size-[1.15rem]" />}
                {...(catalogueReady ? { download: siteConfig.catalogue.downloadName } : {})}
              >
                {catalogueCtaLabel}
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
