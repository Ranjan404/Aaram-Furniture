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
import { SmartImage } from "@/components/ui/SmartImage";
import { DownloadIcon, PhoneIcon, WhatsAppIcon } from "@/components/ui/Icons";

const includes = [
  "Sofa designs, including L-shapes and modular layouts",
  "Bed designs in upholstered, storage and platform styles",
  "Dining, TV units, wardrobes and storage",
  "Size, fabric and finish options for each design",
];

/**
 * Catalogue / product design download.
 *
 * While `siteConfig.catalogue.available` is false there is no PDF in the repo,
 * so the button opens a pre-filled WhatsApp catalogue request instead of
 * linking to a file that would 404. Drop the PDF into
 * `public/catalogue/product-catalogue.pdf`, flip the flag, and this becomes a
 * real download with no other change.
 */
export function CatalogueCTA() {
  return (
    <section id="catalogue" aria-labelledby="catalogue-title" className="bg-ivory py-16 sm:py-20 lg:py-28">
      <Container size="wide">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-line bg-ink text-cream">
            <div className="grid lg:grid-cols-2">
              <div className="relative order-2 min-h-[18rem] lg:order-1 lg:min-h-[32rem]">
                <SmartImage
                  image={{
                    src: "/images/about/styled-living-room-with-sectional-sofa.jpg",
                    alt: "Teal channel-tufted L-shaped sofa with a matching ottoman and open-shelf armrest, in the showroom",
                  }}
                  ratio="fill"
                  className="absolute inset-0"
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  zoom={false}
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(20,17,13,0.45),transparent_55%)] lg:bg-[linear-gradient(to_right,transparent_55%,rgba(20,17,13,0.5))]"
                />
              </div>

              <div className="order-1 p-8 sm:p-12 lg:order-2 lg:p-16">
                <p className="eyebrow text-brass-soft">Product designs</p>
                <h2 id="catalogue-title" className="mt-4 text-(length:--text-display-md) text-cream">
                  Take the whole range home with you.
                </h2>
                <p className="mt-5 max-w-md leading-relaxed text-cream/70">
                  {siteConfig.catalogue.note} Browse the designs at your own pace, shortlist what
                  suits your room, and send us the ones you want priced.
                </p>

                <ul className="mt-8 space-y-3">
                  {includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-cream/80">
                      <span
                        aria-hidden="true"
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-brass-soft"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Button
                    href={catalogueHref}
                    variant="light"
                    size="lg"
                    icon={<DownloadIcon className="size-[1.15rem]" />}
                    {...(catalogueReady ? { download: siteConfig.catalogue.downloadName } : {})}
                  >
                    {catalogueCtaLabel}
                  </Button>
                  {catalogueReady ? (
                    <Button
                      href={whatsappHref(waMessages.catalogue)}
                      variant="onImage"
                      size="lg"
                      icon={<WhatsAppIcon className="size-[1.15rem]" />}
                    >
                      Ask a question on WhatsApp
                    </Button>
                  ) : (
                    <Button
                      href={telHref}
                      variant="onImage"
                      size="lg"
                      icon={<PhoneIcon className="size-[1.15rem]" />}
                    >
                      Call {siteConfig.phone.display}
                    </Button>
                  )}
                </div>

                <p className="mt-5 text-xs text-cream/50">
                  {catalogueReady
                    ? "PDF, opens in a new tab."
                    : "We send the latest designs directly on WhatsApp."}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
