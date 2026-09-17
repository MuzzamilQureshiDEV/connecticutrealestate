import type { IconName } from '@/lib/types';

/** Line icons (24×24, stroke = currentColor). Add new ones to `paths`. */
const paths: Record<IconName, React.ReactNode> = {
  shield: (
    <>
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
      <path d="M8.5 12l2.5 2.5 4.5-5" />
    </>
  ),
  scales: (
    <>
      <path d="M12 3.5v17M8 20.5h8M5 7h14" />
      <path d="M2 14l3-7 3 7a3 3 0 0 1-6 0z" />
      <path d="M16 14l3-7 3 7a3 3 0 0 1-6 0z" />
    </>
  ),
  handshake: (
    <>
      <path d="M12 6.5L9.5 4.8a2 2 0 0 0-2.3 0L3 8v7l3 2" />
      <path d="M12 6.5l2.5-1.7a2 2 0 0 1 2.3 0L21 8v7l-3 2" />
      <path d="M8 13.5l2.2 2.2a1.6 1.6 0 0 0 2.3 0l3.2-3.2" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5l-2 5-5 2 2-5z" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 19.5a5.5 5.5 0 0 1 11 0" />
      <path d="M16 5.5a3.2 3.2 0 0 1 0 6" />
      <path d="M17.5 14.5a5.5 5.5 0 0 1 3 5" />
    </>
  ),
  blueprint: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M9 9v11M15 9v5M15 14h6" />
    </>
  ),
  home: (
    <>
      <path d="M3.5 10.5L12 4l8.5 6.5" />
      <path d="M5.5 9.5V20h13V9.5" />
      <path d="M10 20v-5h4v5" />
    </>
  ),
  key: (
    <>
      <circle cx="8" cy="8" r="4.5" />
      <path d="M11.2 11.2L20 20M17 17l-2 2M14 14l-2 2" />
    </>
  ),
  building: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="1.5" />
      <path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2" />
      <path d="M10 21v-3h4v3" />
    </>
  ),
  hammer: (
    <>
      <path d="M14.5 6.5l3-3 3 3-3 3z" />
      <path d="M13 8L4 17l3 3 9-9" />
      <path d="M11 6l4-1.5M9.5 9.5L6 8" />
    </>
  ),
  bank: (
    <>
      <path d="M3 9.5L12 4l9 5.5" />
      <path d="M5 10v8M10 10v8M14 10v8M19 10v8" />
      <path d="M3 20.5h18" />
    </>
  ),
  gavel: (
    <>
      <path d="M13.5 3.5l7 7-3 3-7-7z" />
      <path d="M12 9l-8 8 3 3 8-8" />
      <path d="M13 21h8" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M16.5 16.5L21 21" />
    </>
  ),
  truck: (
    <>
      <path d="M3 7h11v9H3z" />
      <path d="M14 10h4l3 3v3h-7" />
      <circle cx="7" cy="18" r="1.8" />
      <circle cx="17" cy="18" r="1.8" />
    </>
  ),
  sparkle: (
    <>
      <path d="M12 3.5l1.9 5.1 5.1 1.9-5.1 1.9L12 17.5l-1.9-5.1L5 10.5l5.1-1.9z" />
      <path d="M18.5 16.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z" />
    </>
  ),
  phone: (
    <path d="M6.5 3h3l1.5 4-2 1.5a12 12 0 0 0 5.5 5.5L16 12l4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 3.5 5.2 2 2 0 0 1 5.5 3z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 7.5l8.5 5.5 8.5-5.5" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  arrowRight: (
    <>
      <path d="M4.5 12h15" />
      <path d="M13.5 6l6 6-6 6" />
    </>
  ),
  arrowUpRight: (
    <>
      <path d="M7 17L17 7" />
      <path d="M8 7h9v9" />
    </>
  ),
  check: <path d="M4.5 12.5l5 5 10-11" />,
  chevronDown: <path d="M6 9.5l6 6 6-6" />,
  chevronLeft: <path d="M14.5 6l-6 6 6 6" />,
  chevronRight: <path d="M9.5 6l6 6-6 6" />,
  menu: <path d="M4 7.5h16M4 12h16M4 16.5h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  bed: (
    <>
      <path d="M3 18v-8M3 13h18v5" />
      <path d="M21 18v-3.5a2.5 2.5 0 0 0-2.5-2.5H10v1.5" />
      <circle cx="6.5" cy="10" r="1.8" />
    </>
  ),
  bath: (
    <>
      <path d="M4 12h16v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z" />
      <path d="M6 12V6.5A2.5 2.5 0 0 1 8.5 4c1 0 1.7.5 2.1 1.2" />
      <path d="M6 19.5L5 21M18 19.5l1 1.5" />
    </>
  ),
  ruler: (
    <>
      <path d="M3.5 14.5l11-11 5 5-11 11z" />
      <path d="M7 11l1.8 1.8M10 8l1.8 1.8M13 5l1.8 1.8" />
    </>
  ),
};

type IconProps = {
  name: IconName;
  className?: string;
  strokeWidth?: number;
};

export function Icon({ name, className = 'h-6 w-6', strokeWidth = 1.6 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  );
}

/** Wordmark: "CT" monogram plus the centre name. */
export function Logo({ className = '', compact = false }: { className?: string; compact?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        aria-hidden="true"
        className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-navy-900 font-display text-sm font-bold tracking-tight text-bronze-300"
      >
        CT
      </span>
      {!compact && (
        <span className="font-display text-base font-bold leading-tight tracking-tight text-navy-900">
          Connecticut
          <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-bronze-600">
            Real Estate Center
          </span>
        </span>
      )}
    </span>
  );
}
