import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Page gutter. One place to change horizontal rhythm site-wide.
 * `wide` is used for full-bleed-ish editorial grids, `narrow` for prose.
 */
export function Container({
  children,
  className,
  as: Tag = "div",
  size = "default",
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  size?: "narrow" | "default" | "wide";
}) {
  const max =
    size === "narrow" ? "max-w-3xl" : size === "wide" ? "max-w-[96rem]" : "max-w-[84rem]";

  return (
    <Tag className={cn("mx-auto w-full px-5 sm:px-8 lg:px-12", max, className)}>{children}</Tag>
  );
}
