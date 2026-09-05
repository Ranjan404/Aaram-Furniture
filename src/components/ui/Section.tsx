import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

/**
 * Standard vertical rhythm for a page section. `id` doubles as the anchor
 * target used by the header navigation and in-page links.
 */
export function Section({
  children,
  id,
  className,
  tone = "ivory",
  size = "default",
  containerSize = "default",
  labelledBy,
}: {
  children: ReactNode;
  id?: string;
  className?: string;
  tone?: "ivory" | "cream" | "wash" | "ink" | "none";
  size?: "sm" | "default" | "lg";
  containerSize?: "narrow" | "default" | "wide";
  labelledBy?: string;
}) {
  const tones = {
    ivory: "bg-ivory",
    cream: "bg-cream",
    wash: "surface-wash",
    ink: "bg-ink text-cream",
    none: "",
  } as const;

  /* One vertical rhythm for the whole site. Mobile steps are deliberately
     tighter: the same desktop padding turns a long page into an endless one. */
  const padding = {
    sm: "py-12 sm:py-14 lg:py-20",
    default: "py-14 sm:py-18 lg:py-26",
    lg: "py-16 sm:py-22 lg:py-32",
  } as const;

  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(tones[tone], padding[size], className)}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}

/**
 * Section heading block: eyebrow, title, optional lead paragraph and an
 * optional action slot that sits to the right on large screens.
 */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  id,
  action,
  align = "left",
  tone = "dark",
  className,
  level = 2,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  id?: string;
  action?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
  level?: 1 | 2 | 3;
}) {
  const Heading = `h${level}` as "h1" | "h2" | "h3";
  const centered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        action && "lg:flex-row lg:items-end lg:justify-between lg:gap-12",
        className,
      )}
    >
      <Reveal className={cn("max-w-2xl", centered && "mx-auto text-center")}>
        {eyebrow ? (
          <p className={cn("eyebrow mb-4", tone === "light" ? "text-brass-soft" : "text-brass-deep")}>{eyebrow}</p>
        ) : null}
        <Heading
          id={id}
          className={cn(
            "text-(length:--text-display-md)",
            tone === "light" && "text-cream",
          )}
        >
          {title}
        </Heading>
        {lead ? (
          <p
            className={cn(
              "mt-5 text-base leading-relaxed sm:text-[1.0625rem]",
              tone === "light" ? "text-cream/70" : "text-stone",
            )}
          >
            {lead}
          </p>
        ) : null}
      </Reveal>
      {action ? <Reveal delay={100} className="shrink-0">{action}</Reveal> : null}
    </div>
  );
}
