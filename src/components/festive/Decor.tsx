import { useId, type CSSProperties } from "react";
import { cn } from "@/lib/cn";

/**
 * Diwali decoration. Inline SVG and CSS only: no images to download, no
 * animation library, no client JavaScript. Every piece is `aria-hidden` and
 * carries no meaning, so a screen reader hears nothing and the page reads the
 * same with all of it removed. Motion is defined in `globals.css` (the
 * `festive-*` classes) and is cut by the reduced-motion rule there.
 *
 * Rendered only while `festiveActive` is true; callers check, not these.
 */

/** A clay diya with a flickering flame. `size` is the rendered width. */
export function Diya({ className, delay = 0 }: { className?: string; delay?: number }) {
  // Gradient ids must be unique per instance: several diyas share a page.
  const id = useId();
  const glow = `${id}-glow`;
  const bowl = `${id}-bowl`;
  return (
    <svg
      viewBox="0 0 64 56"
      aria-hidden="true"
      focusable="false"
      className={cn("overflow-visible", className)}
    >
      {/* Glow behind the flame. */}
      <circle cx="32" cy="20" r="16" fill={`url(#${glow})`} />
      <defs>
        <radialGradient id={glow}>
          <stop offset="0" stopColor="#f3d27a" stopOpacity="0.75" />
          <stop offset="1" stopColor="#f3d27a" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={bowl} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#e8771e" />
          <stop offset="1" stopColor="#7a1d2b" />
        </linearGradient>
      </defs>
      <path
        className="festive-flame"
        style={{ animationDelay: `${delay}ms` }}
        d="M32 6c4 6 6 10 6 14a6 6 0 0 1-12 0c0-4 2-8 6-14Z"
        fill="#f3d27a"
        stroke="#e8771e"
        strokeWidth="1.2"
      />
      {/* Bowl, with the spout drawn as a lip on the right. */}
      <path
        d="M6 30h46c3 0 7-2 9-4-1 9-9 22-29 22S4 40 6 30Z"
        fill={`url(#${bowl})`}
      />
      <path d="M10 34c6 2 30 2 42 0" stroke="#d4a437" strokeWidth="1.4" fill="none" />
      <circle cx="20" cy="40" r="1.4" fill="#f3d27a" />
      <circle cx="32" cy="42" r="1.4" fill="#f3d27a" />
      <circle cx="44" cy="40" r="1.4" fill="#f3d27a" />
    </svg>
  );
}

/** Four-point sparkle. */
export function Sparkle({
  className,
  delay = 0,
}: {
  className?: string;
  /** Seconds. Staggers the twinkle so a group never pulses in unison. */
  delay?: number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className={cn("festive-twinkle", className)}
      style={{ "--twinkle-delay": `${delay}s` } as CSSProperties}
    >
      <path
        d="M12 0c.8 6.4 4.8 10.4 12 12-7.2 1.6-11.2 5.6-12 12-.8-6.4-4.8-10.4-12-12 7.2-1.6 11.2-5.6 12-12Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** A single firework: rays from a centre, scaled up and faded out on a loop. */
export function Firework({
  className,
  delay = 0,
  rays = 12,
}: {
  className?: string;
  delay?: number;
  rays?: number;
}) {
  return (
    <svg
      viewBox="-50 -50 100 100"
      aria-hidden="true"
      focusable="false"
      className={cn("festive-burst", className)}
      style={{ "--burst-delay": `${delay}s` } as CSSProperties}
    >
      {Array.from({ length: rays }, (_, i) => {
        const angle = (i / rays) * Math.PI * 2;
        const x1 = Math.cos(angle) * 14;
        const y1 = Math.sin(angle) * 14;
        const x2 = Math.cos(angle) * 44;
        const y2 = Math.sin(angle) * 44;
        return (
          <g key={i}>
            <line
              x1={x1.toFixed(2)}
              y1={y1.toFixed(2)}
              x2={x2.toFixed(2)}
              y2={y2.toFixed(2)}
              stroke={i % 2 ? "#f3d27a" : "#e8771e"}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <circle cx={x2.toFixed(2)} cy={y2.toFixed(2)} r="2.2" fill="#f3d27a" />
          </g>
        );
      })}
    </svg>
  );
}

/**
 * A rangoli medallion: concentric petals and dots. Used large and faint behind
 * festive sections, where it turns very slowly.
 */
export function Rangoli({ className, spin = false }: { className?: string; spin?: boolean }) {
  const petals = 12;
  return (
    <svg
      viewBox="-100 -100 200 200"
      aria-hidden="true"
      focusable="false"
      className={cn(spin && "festive-spin", className)}
    >
      <circle r="96" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="2 6" />
      <circle r="78" fill="none" stroke="currentColor" strokeWidth="1.2" />
      {Array.from({ length: petals }, (_, i) => (
        <g key={i} transform={`rotate(${(360 / petals) * i})`}>
          <path d="M0-74C14-60 14-40 0-28-14-40-14-60 0-74Z" fill="currentColor" fillOpacity="0.55" />
          <path d="M0-26C7-20 7-12 0-8-7-12-7-20 0-26Z" fill="currentColor" />
          <circle cy="-86" r="3" fill="currentColor" />
        </g>
      ))}
      <circle r="6" fill="currentColor" />
    </svg>
  );
}

/**
 * A string of festive lights hung in a shallow curve. Bulbs are spans offset
 * along a sine sag rather than an SVG stretched to fit, so they stay round at
 * every width. Fewer bulbs on phones.
 */
export function StringLights({ className }: { className?: string }) {
  const bulbs = 18;
  return (
    <div aria-hidden="true" className={cn("pointer-events-none flex justify-between px-4", className)}>
      {Array.from({ length: bulbs }, (_, i) => {
        const sag = Math.sin((i / (bulbs - 1)) * Math.PI) * 18;
        return (
          /* The sag lives on the wrapper: the twinkle animates `transform` on
             the bulb, and would otherwise reset the offset every frame. */
          <span
            key={i}
            className={cn("block", i % 2 === 1 && "max-sm:hidden")}
            style={{ transform: `translateY(${sag.toFixed(1)}px)` }}
          >
            <span
              className={cn(
                "festive-twinkle block size-2 rounded-full sm:size-2.5",
                i % 3 === 0 ? "bg-marigold" : "bg-gold-soft",
              )}
              style={
                {
                  boxShadow: "0 0 10px 2px rgba(243, 210, 122, 0.55)",
                  "--twinkle-delay": `${(i % 6) * 0.45}s`,
                } as CSSProperties
              }
            />
          </span>
        );
      })}
    </div>
  );
}

/**
 * The hero's festive layer: lights along the top, two fireworks and a scatter
 * of sparkles over the bright right-hand side of the photograph, away from the
 * headline. Fireworks are left off phones, where they would sit on the copy.
 */
export function HeroDecor() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <StringLights className="absolute inset-x-0 top-[calc(var(--header-h)+0.5rem)]" />

      <Firework className="absolute top-[22%] right-[8%] hidden size-40 sm:block lg:size-52" />
      <Firework className="absolute top-[38%] right-[30%] hidden size-28 lg:block" delay={2.4} rays={10} />
      <Firework className="absolute top-[16%] right-[44%] hidden size-24 xl:block" delay={4.6} rays={8} />

      <Sparkle className="absolute top-[30%] right-[18%] size-4 text-gold-soft" />
      <Sparkle className="absolute top-[48%] right-[10%] size-3 text-gold-soft" delay={0.9} />
      <Sparkle className="absolute top-[24%] right-[38%] size-3 text-marigold" delay={1.6} />
      <Sparkle className="absolute top-[58%] right-[24%] hidden size-5 text-gold-soft sm:block" delay={2.2} />

      {/* Warm marigold glow from the lower right, so the photograph reads as lit
          for the festival without the copy losing contrast. */}
      <div className="absolute -right-24 -bottom-24 size-[32rem] rounded-full bg-[radial-gradient(circle,rgba(232,119,30,0.28),transparent_65%)]" />
    </div>
  );
}
