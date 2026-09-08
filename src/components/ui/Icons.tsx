import type { SVGProps } from "react";

/**
 * Inline SVG icons. Kept local so the project pulls in no icon library.
 * All are decorative by default (`aria-hidden`) - the accessible name always
 * comes from the surrounding button or link text.
 */
type IconProps = SVGProps<SVGSVGElement>;

function Svg({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...props}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.19-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.23-8.23a8.23 8.23 0 0 1 0 16.47Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.4-.12-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06a6.7 6.7 0 0 1-1.98-1.22 7.44 7.44 0 0 1-1.37-1.71c-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.44.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.77-1.83-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.44.06-.67.31-.23.25-.87.85-.87 2.07s.89 2.4 1.02 2.57c.12.17 1.75 2.79 4.24 3.81 2.07.85 2.5.68 2.95.64.45-.04 1.45-.6 1.66-1.17.2-.58.2-1.07.14-1.17-.06-.11-.23-.17-.48-.29Z" />
    </svg>
  );
}

export const PhoneIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M6.6 3h-.9A2.7 2.7 0 0 0 3 5.7c0 8.4 6.9 15.3 15.3 15.3a2.7 2.7 0 0 0 2.7-2.7v-.9a1.2 1.2 0 0 0-.92-1.17l-3.2-.8a1.2 1.2 0 0 0-1.27.5l-.7 1.05a11.4 11.4 0 0 1-5.1-5.1l1.05-.7a1.2 1.2 0 0 0 .5-1.27l-.8-3.2A1.2 1.2 0 0 0 6.6 3Z" />
  </Svg>
);

export const DownloadIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 3v11.5" />
    <path d="m7.5 10.5 4.5 4.5 4.5-4.5" />
    <path d="M4 17.5v1.5A2 2 0 0 0 6 21h12a2 2 0 0 0 2-2v-1.5" />
  </Svg>
);

export const ArrowRightIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 12h15" />
    <path d="m13 6 6 6-6 6" />
  </Svg>
);

export const ArrowUpRightIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </Svg>
);

export const MenuIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M3.5 7h17" />
    <path d="M3.5 12h17" />
    <path d="M3.5 17h17" />
  </Svg>
);

export const CloseIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M6 6l12 12" />
    <path d="M18 6 6 18" />
  </Svg>
);

export const CheckIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </Svg>
);

export const PinIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 21s7-5.3 7-11a7 7 0 1 0-14 0c0 5.7 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </Svg>
);

export const ClockIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7.5V12l3 2" />
  </Svg>
);

export const MailIcon = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 7 8.5 6 8.5-6" />
  </Svg>
);

export const QuoteIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...p}>
    <path d="M9.5 6C6.9 7.4 5 9.9 5 13.3 5 16 6.6 18 8.9 18c1.9 0 3.3-1.4 3.3-3.2 0-1.8-1.2-3-2.9-3-.3 0-.6 0-.8.1.3-1.7 1.5-3.2 3.2-4.2L9.5 6Zm8.2 0c-2.6 1.4-4.5 3.9-4.5 7.3 0 2.7 1.6 4.7 3.9 4.7 1.9 0 3.3-1.4 3.3-3.2 0-1.8-1.2-3-2.9-3-.3 0-.6 0-.8.1.3-1.7 1.5-3.2 3.2-4.2L17.7 6Z" />
  </svg>
);

export const StarIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...p}>
    <path d="m12 2.6 2.86 5.8 6.4.93-4.63 4.51 1.09 6.37L12 17.2l-5.72 3.01 1.09-6.37L2.74 9.33l6.4-.93L12 2.6Z" />
  </svg>
);

/* -- "Why choose us" icons ------------------------------------------------- */

export const DesignIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 20 20 4" />
    <path d="M4 20h5l11-11-5-5L4 15v5Z" />
    <path d="m13.5 5.5 5 5" />
  </Svg>
);

export const CraftIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M14.5 3.5 20.5 9.5" />
    <path d="m17.5 6.5-11 11H3v-3.5l11-11 3.5 3.5Z" />
    <path d="M14 21h7" />
  </Svg>
);

export const ComfortIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 13V9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
    <path d="M3 13h18v5H3z" />
    <path d="M6 18v2" />
    <path d="M18 18v2" />
  </Svg>
);

export const CustomIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 6h16" />
    <path d="M4 6v3" />
    <path d="M20 6v3" />
    <path d="M9 6v2.5" />
    <path d="M14 6v2.5" />
    <path d="M4 14h16v6H4z" />
  </Svg>
);

export const ConsultIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M20 12.5c0 3.6-3.6 6.5-8 6.5-.9 0-1.8-.1-2.6-.35L5 20l1.1-3A6.3 6.3 0 0 1 4 12.5C4 8.9 7.6 6 12 6s8 2.9 8 6.5Z" />
    <path d="M9 12h.01" />
    <path d="M12 12h.01" />
    <path d="M15 12h.01" />
  </Svg>
);

export const DeliveryIcon = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 3 4 6.5v6c0 4.2 3.3 7.4 8 8.5 4.7-1.1 8-4.3 8-8.5v-6L12 3Z" />
    <path d="m9 12 2.2 2.2L15.5 10" />
  </Svg>
);

export const featureIcons = {
  design: DesignIcon,
  craft: CraftIcon,
  comfort: ComfortIcon,
  custom: CustomIcon,
  consult: ConsultIcon,
  delivery: DeliveryIcon,
} as const;
