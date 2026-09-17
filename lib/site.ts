import type { NavItem } from './types';

/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SITE CONFIG — Connecticut Real Estate Center
 * ─────────────────────────────────────────────────────────────────────────────
 *  Phone numbers, address and licence are taken from the live site.
 *  Email addresses are bot-masked there, so the values below are PLACEHOLDERS —
 *  CLIENT: replace them with the real inboxes before launch.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const site = {
  name: 'Connecticut Real Estate Center',
  legalName: 'Connecticut Real Estate Brokerage LLC',
  shortName: 'CT Real Estate Center',
  url: 'https://connecticutrealestate.online',
  trademark: 'Trust, Integrity, Service, and Faith™',
  promise: 'One network. Eight vital disciplines. Zero friction.',
  description:
    'A coordinated Connecticut real estate network — agents, lenders, attorneys, inspectors and contractors working from one blueprint, from first call to final walkthrough.',
  broker: {
    name: 'Steve Schappert',
    title: 'Broker / Founder',
    cell: '203-994-3950',
  },
  recruiter: {
    name: 'Alizandria Rodriguez Greene',
    title: 'Recruiter',
    phone: '203-565-2110',
  },
  office: {
    phone: '(860) 880-0597',
    street: '29 Broadview Heights',
    city: 'Thomaston',
    state: 'CT',
    zip: '06787',
    full: '29 Broadview Heights, Thomaston, CT 06787',
  },
  license: 'REB.0791416',
  // CLIENT: replace these placeholder inboxes.
  email: 'info@connecticutrealestate.online',
  brokerEmail: 'steve@connecticutrealestate.online',
  careersEmail: 'careers@connecticutrealestate.online',
  /** Text shortcut promoted on the live site for fastest response. */
  textKeyword: { keyword: 'com', number: '203-994-3950' },
} as const;

/** Primary navigation. Mirrors the four service verticals on the live site. */
export const mainNav: NavItem[] = [
  { label: 'Buy', href: '/buy' },
  { label: 'Rent', href: '/rent' },
  { label: 'Sell', href: '/sell' },
  { label: 'Lease', href: '/lease' },
  { label: 'Commercial', href: '/commercial' },
  { label: 'Agents', href: '/agents' },
  { label: 'Resources', href: '/resources' },
  { label: 'About', href: '/about' },
];

export const footerNav: { title: string; links: NavItem[] }[] = [
  {
    title: 'Explore',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Buy', href: '/buy' },
      { label: 'Rent', href: '/rent' },
      { label: 'Sell', href: '/sell' },
      { label: 'Lease', href: '/lease' },
    ],
  },
  {
    title: 'Network',
    links: [
      { label: 'Agents', href: '/agents' },
      { label: 'Careers', href: '/career' },
      { label: 'Commercial', href: '/commercial' },
      { label: 'Relocation', href: '/relocation' },
      { label: 'Resources', href: '/resources' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy Policy', href: '/contact#privacy' },
      { label: 'Terms of Use', href: '/contact#terms' },
    ],
  },
];

/** CLIENT: swap in the real profile URLs. Entries left as '#' are hidden. */
export const socialLinks = [
  { label: 'Facebook', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'YouTube', href: '#' },
];

/** Outlets the brokerage has been featured in, per the live site. */
export const featuredIn = [
  'The Washington Post',
  'ABC News',
  "Woman's Day",
  'The Learning Channel',
  'Connecticut Magazine',
  'The New York Times',
  'BBC',
  'Home & Art Magazine',
];

export const ctCounties = [
  'Fairfield',
  'Hartford',
  'Litchfield',
  'Middlesex',
  'New Haven',
  'New London',
  'Tolland',
  'Windham',
];
