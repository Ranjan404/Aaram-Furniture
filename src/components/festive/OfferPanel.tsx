import { siteConfig } from "@/config/site";
import {
  activeOffer,
  confirmByDate,
  festiveActive,
  festiveConfig,
  formatFestiveDate,
} from "@/config/festive";
import { waMessages, whatsappHref } from "@/lib/contact";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { Sparkle } from "./Decor";

/**
 * The festive offer, or, while no offer has been supplied, the honest
 * alternative: when to confirm a design so it is built before Diwali, worked
 * out from the owner-confirmed build time. It never states a discount, a
 * delivery date or a stock level that is not in `src/config/festive.ts`.
 *
 * Renders nothing outside the campaign.
 */
export function OfferPanel({ tone = "dark", className }: { tone?: "dark" | "light"; className?: string }) {
  if (!festiveActive) return null;

  const { festival, festivalDate } = festiveConfig;
  const onDark = tone === "dark";

  return (
    <div
      id="offer"
      className={cn(
        "relative overflow-hidden rounded-(--radius-card) border p-6 sm:p-8",
        onDark
          ? "border-gold/40 bg-maroon-deep/60 text-cream backdrop-blur-sm"
          : "border-gold/50 bg-white text-graphite shadow-soft",
        className,
      )}
    >
      <Sparkle className="absolute top-5 right-5 size-4 text-gold" />

      {activeOffer ? (
        <>
          <p className={cn("eyebrow", onDark ? "text-gold-soft" : "text-maroon")}>
            {festival} offer &middot; {formatFestiveDate(activeOffer.validFrom)} to{" "}
            {formatFestiveDate(activeOffer.validThrough, true)}
          </p>
          <h3 className={cn("mt-3 text-(length:--text-display-xs)", onDark && "text-cream")}>
            {activeOffer.headline}
          </h3>
          <p className={cn("mt-3 text-sm leading-relaxed", onDark ? "text-cream/80" : "text-stone")}>
            {activeOffer.details}
          </p>
          {activeOffer.terms.length ? (
            <ul className={cn("mt-4 space-y-1.5 text-xs", onDark ? "text-cream/75" : "text-stone")}>
              {activeOffer.terms.map((term) => (
                <li key={term} className="flex gap-2">
                  <span aria-hidden="true" className="mt-1.5 size-1 shrink-0 rounded-full bg-gold" />
                  {term}
                </li>
              ))}
            </ul>
          ) : null}
        </>
      ) : (
        <>
          <p className={cn("eyebrow", onDark ? "text-gold-soft" : "text-maroon")}>
            Planning for {festival}, {formatFestiveDate(festivalDate)}
          </p>
          <h3 className={cn("mt-3 text-(length:--text-display-xs)", onDark && "text-cream")}>
            {confirmByDate
              ? `Confirm your design by ${formatFestiveDate(confirmByDate)}.`
              : `Ask what can still be built before ${festival}.`}
          </h3>
          <p className={cn("mt-3 text-sm leading-relaxed", onDark ? "text-cream/80" : "text-stone")}>
            {siteConfig.leadTime
              ? `Every piece is built in ${siteConfig.leadTime} once the design is confirmed. `
              : null}
            {confirmByDate
              ? `A design confirmed by ${formatFestiveDate(confirmByDate)} is due to be built before ${formatFestiveDate(festivalDate)}. `
              : null}
            Ask us about delivery and installation timing for your area before you order.
          </p>
        </>
      )}

      <Button
        href={whatsappHref(waMessages.festive)}
        variant="whatsapp"
        className="mt-6"
        icon={<WhatsAppIcon className="size-[1.15rem]" />}
      >
        Discuss your {festival} order
      </Button>
    </div>
  );
}
