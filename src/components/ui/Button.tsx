import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "light" | "outline" | "whatsapp" | "ghost" | "onImage";
type Size = "sm" | "md" | "lg";

const base =
  "group/btn inline-flex select-none items-center justify-center gap-2 rounded-full font-semibold " +
  "transition-[background-color,color,border-color,box-shadow,transform] duration-300 " +
  "ease-[var(--ease-premium)] active:translate-y-px disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-ivory shadow-soft hover:bg-graphite hover:shadow-lift",
  // For use on dark backgrounds and over photography.
  light: "bg-white text-ink shadow-soft hover:bg-cream hover:shadow-lift",
  outline:
    "border border-line-strong bg-white/70 text-ink hover:border-ink hover:bg-white",
  whatsapp:
    "bg-whatsapp text-white shadow-soft hover:bg-whatsapp-deep hover:shadow-lift",
  ghost: "text-ink hover:bg-sand/70",
  onImage:
    "border border-white/45 bg-white/15 text-white backdrop-blur-md hover:border-white/80 hover:bg-white/25",
};

const sizes: Record<Size, string> = {
  sm: "min-h-10 px-4 text-[0.8125rem]",
  md: "min-h-12 px-6 text-sm",
  lg: "min-h-13 px-7 text-[0.9375rem]",
};

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  /** Rendered before the label. Decorative; the label carries the meaning. */
  icon?: ReactNode;
  /** Rendered after the label. */
  iconAfter?: ReactNode;
  /** Extra context for screen readers when the label alone is ambiguous. */
  srSuffix?: string;
}

type ButtonAsButton = BaseProps &
  Omit<ComponentPropsWithoutRef<"button">, keyof BaseProps> & { href?: undefined };

type ButtonAsLink = BaseProps &
  Omit<ComponentPropsWithoutRef<"a">, keyof BaseProps> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

/** True for anything that leaves the app: absolute URLs, tel:, mailto:. */
function isExternal(href: string) {
  return /^(https?:|tel:|mailto:)/.test(href);
}

export function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    size = "md",
    className,
    icon,
    iconAfter,
    srSuffix,
    ...rest
  } = props;

  const classes = cn(base, variants[variant], sizes[size], className);
  const content = (
    <>
      {icon}
      <span>
        {children}
        {srSuffix ? <span className="sr-only"> {srSuffix}</span> : null}
      </span>
      {iconAfter}
    </>
  );

  if (typeof rest.href === "string") {
    const { href, ...anchorRest } = rest as ComponentPropsWithoutRef<"a"> & { href: string };

    if (isExternal(href)) {
      const isHttp = href.startsWith("http");
      return (
        <a
          href={href}
          className={classes}
          {...(isHttp ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          {...anchorRest}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...anchorRest}>
        {content}
      </Link>
    );
  }

  const { type = "button", ...buttonRest } = rest as ComponentPropsWithoutRef<"button">;
  return (
    <button type={type} className={classes} {...buttonRest}>
      {content}
    </button>
  );
}
