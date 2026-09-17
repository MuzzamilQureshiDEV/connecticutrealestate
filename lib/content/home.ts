import type { Pillar, ProcessStep, ServicePath } from '../types';

/**
 * HOME PAGE CONTENT.
 * Brand phrases marked "verbatim" are kept exactly as they appear on the live
 * site. Supporting prose is written in the same voice — edit freely.
 */

export const hero = {
  // verbatim
  headline: "The Power of Connecticut's Real Estate Network. In Your Corner.",
  subheadline:
    'Agents, lenders, attorneys, inspectors and contractors working as one coordinated team — from your first phone call through to the final walkthrough.',
  primaryCta: { label: 'Start Your Journey', href: '/contact' },
  secondaryCta: { label: 'Explore Featured Homes', href: '/buy' },
  stats: [
    { value: '8', label: 'Coordinated disciplines' },
    { value: '8', label: 'Connecticut counties' },
    { value: '40+', label: 'Years in the market' },
  ],
};

/** The Four Pillars — names are the registered brand mark. */
export const pillars: Pillar[] = [
  {
    name: 'Trust',
    icon: 'shield',
    description:
      'Straight answers and full visibility at every stage. You always know where your transaction stands and who is handling it.',
  },
  {
    name: 'Integrity',
    icon: 'scales',
    description:
      'Advice that serves your objective rather than the fastest commission. If a deal is wrong for you, we will say so.',
  },
  {
    name: 'Service',
    icon: 'handshake',
    description:
      'One point of contact who stays with you, coordinating every specialist so nothing is dropped between hand-offs.',
  },
  {
    name: 'Faith',
    icon: 'compass',
    description:
      'A long-term commitment to the people and towns we serve — relationships that outlast any single closing.',
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Define the objective',
    description:
      'We start with the outcome you actually want — the move, the build, the investment — and the timeline and budget around it.',
    icon: 'target',
  },
  {
    step: '02',
    title: 'Assemble the team',
    description:
      'The specialists your objective calls for are brought in together: brokerage, financing, legal, inspection, construction, insurance.',
    icon: 'users',
  },
  {
    step: '03',
    title: 'Execute from one blueprint',
    description:
      'Everyone works from a single shared plan, so hand-offs stop becoming delays and you are never the one relaying messages.',
    icon: 'blueprint',
  },
];

/** "Select Your Path" — the eight disciplines grouped into three tracks. */
export const servicePaths: ServicePath[] = [
  {
    id: 'acquire-finance',
    title: 'Acquire & Finance',
    tagline: 'Find the property and fund it without the gaps between parties.',
    icon: 'key',
    disciplines: [
      {
        name: 'Brokerage',
        description: 'Residential and commercial representation across all eight counties.',
        href: '/buy',
      },
      {
        name: 'Mortgage',
        description: 'Lender introductions and financing structure matched to the deal.',
      },
      {
        name: 'Title & Settlement',
        description: 'Title search, settlement coordination and a clean closing table.',
      },
      {
        name: 'Legal',
        description: 'Connecticut real estate attorneys engaged early, not at the eleventh hour.',
      },
    ],
  },
  {
    id: 'design-build',
    title: 'Design & Build',
    tagline: 'Turn a property into the one you actually wanted.',
    icon: 'hammer',
    disciplines: [
      {
        name: 'Construction',
        description: 'New builds, additions and full renovations managed end to end.',
      },
      {
        name: 'Inspection',
        description: 'Independent inspections scheduled early enough to shape negotiation.',
      },
      {
        name: 'Architecture & Design',
        description: 'Architects, interior designers and staging brought in at the right stage.',
      },
    ],
  },
  {
    id: 'protect-manage',
    title: 'Protect & Manage',
    tagline: 'Keep the asset performing long after closing.',
    icon: 'shield',
    disciplines: [
      {
        name: 'Insurance',
        description: 'Coverage reviewed against the property, not sold from a template.',
      },
      {
        name: 'Property Management',
        description: 'Tenanting, maintenance and reporting for owners and investors.',
      },
      {
        name: 'Post-Closing Legal',
        description: 'Title questions, disputes and estate matters handled after the sale.',
      },
    ],
  },
];

export const evolution = {
  // verbatim
  title: 'From Screen to Steel: Our Physical Evolution',
  body: [
    'The network runs digital-first today. That is deliberate: it lets a client in any Connecticut town reach the same coordinated bench of specialists without waiting on an office visit.',
    'The next stage is physical. Brick-and-mortar centers will put brokers, attorneys, lenders and builders under one roof — shared working space where a file can be moved forward in a single conversation rather than a week of emails.',
  ],
  milestones: [
    { phase: 'Now', title: 'Digital-first network', description: 'One coordinated team, reachable from anywhere in the state.' },
    { phase: 'Next', title: 'Regional hubs', description: 'Shared workspace for the disciplines that close your deal.' },
    { phase: 'Then', title: 'Full service centers', description: 'Every discipline co-located, from first meeting to keys.' },
  ],
};

export const localExpertise = {
  title: 'Built for Connecticut. Driven by Expertise.',
  body: 'Town lines matter here. Assessment practices, wetlands rules, septic and well requirements, shoreline flood maps and school district boundaries all change within a few miles — and they change what a property is worth and how long it takes to close.',
  points: [
    'Coverage across all eight Connecticut counties',
    'Town-level knowledge of zoning, assessment and permitting',
    'Shoreline, lake and rural property experience',
    'Metro exit guidance for buyers arriving from NYC and Boston',
  ],
};
