/**
 * PAGE COPY for everything outside the home page.
 * Written in the brand's voice; brand marks are preserved exactly.
 * CLIENT: edit any string here — no component changes needed.
 */

export const aboutPage = {
  eyebrow: 'About',
  title: 'One network, built the way a team is built',
  lead: 'The Connecticut Real Estate Center exists because buying, selling and building a property involves eight different professions that rarely talk to each other.',
  story: [
    'Steve Schappert has spent more than forty years on every side of Connecticut property — listing and selling it, financing it, designing it, and building it with his own crews. That range is unusual, and it produced a specific conviction: most of the friction in a transaction is not caused by any one professional doing poor work. It is caused by the spaces between them.',
    'The answer was to stop treating those professions as separate vendors a client has to chase. Agents, lenders, attorneys, inspectors, contractors, insurers and property managers were organised into a single coordinated bench, working from one shared plan for each client.',
    'The model borrows from how teams operate in sport and in the military: every position is a specialist, everyone knows the play, and one person is accountable for the outcome. A client should never be the one relaying a message between their lender and their attorney.',
  ],
  values: {
    title: 'What the pillars mean in practice',
    body: 'Trust, Integrity, Service, and Faith™ are not decoration. They set who we will work with, what we will advise, and how long we stay involved after a closing.',
  },
  cta: {
    title: 'Talk to the team before you commit to anything',
    body: 'A conversation costs nothing and usually saves weeks later in the process.',
  },
};

export const intentPages = {
  buy: {
    eyebrow: 'Buy',
    title: 'Find the right property — with the whole team behind you',
    lead: 'Search live Connecticut inventory, then bring in financing, inspection and legal at the point they actually help rather than after you are already committed.',
    formTitle: 'Schedule a Viewing',
    formNote: 'Tell us what you are looking for and we will line up showings that fit.',
    statuses: ['For Sale', 'Coming Soon'] as const,
  },
  rent: {
    eyebrow: 'Rent',
    title: 'Rentals across Connecticut, without the run-around',
    lead: 'Apartments, condos and single family homes from owners and managers inside the network — screened, listed and shown by people you can reach.',
    formTitle: 'Request a Showing',
    formNote: 'Share your budget, timing and preferred towns.',
    statuses: ['For Rent'] as const,
  },
  sell: {
    eyebrow: 'Sell',
    title: 'Price it properly. Prepare it properly. Then go to market.',
    lead: 'Valuation grounded in town-level comparables, staging and repair coordination through the contractor network, and representation through to the closing table.',
    formTitle: 'Get a Home Valuation',
    formNote: 'Send the address and we will come back with a considered opinion of value.',
    statuses: ['Sold', 'For Sale'] as const,
  },
  lease: {
    eyebrow: 'Lease',
    title: 'Commercial and residential leasing, coordinated end to end',
    lead: 'Space for your business or tenants for your building — with legal review, insurance and management handled by the same coordinated team.',
    formTitle: 'Discuss a Lease',
    formNote: 'Tell us about the space or the building and we will take it from there.',
    statuses: ['For Lease'] as const,
  },
};

export const careerPage = {
  eyebrow: 'Careers',
  title: 'Join a network that actually coordinates',
  lead: 'Most brokerages hand you a desk and a database. This one hands you a bench of specialists who are already working with your clients.',
  reasons: [
    {
      title: 'Leads arrive coordinated',
      description: 'Clients come in through a shared network rather than being chased one at a time.',
    },
    {
      title: 'Specialists on call',
      description: 'Financing, legal, inspection and construction questions get answered by the person who owns them.',
    },
    {
      title: 'Training that is practical',
      description: 'Seminars, forms and direct mentoring from a broker who has built, financed and sold property himself.',
    },
    {
      title: 'Room to specialise',
      description: 'Commercial, waterfront, relocation, investment — build a lane instead of chasing everything.',
    },
  ],
  roles: [
    'Residential agents',
    'Commercial agents',
    'Mortgage professionals',
    'Home inspectors',
    'Real estate attorneys',
    'Contractors & trades',
    'Insurance advisors',
    'Property managers',
  ],
  cta: {
    title: 'Start the conversation',
    body: 'Send your details and our recruiter will get back to you.',
  },
};

export const commercialPage = {
  eyebrow: 'Commercial',
  title: 'Connecticut Commercial Real Estate Center™',
  lead: 'Investment sales, leasing, development and tenant representation across all eight counties — supported by the same coordinated bench that handles the legal, financing and construction side.',
  services: [
    {
      title: 'Brokerage & Investment Sales',
      description: 'Acquisition and disposition of office, retail, industrial, multi-family, mixed-use and land.',
      icon: 'building' as const,
    },
    {
      title: 'Capital Advisory',
      description: 'Financing structure, lender introductions and guidance on exchange and depreciation strategy.',
      icon: 'bank' as const,
    },
    {
      title: 'Tenant Representation',
      description: 'Finding, negotiating and fitting out the right space for how your business actually operates.',
      icon: 'key' as const,
    },
    {
      title: 'Property Management',
      description: 'Day-to-day operations, tenant relations, maintenance and owner reporting.',
      icon: 'shield' as const,
    },
  ],
  assetTypes: [
    'Office space',
    'Retail storefronts',
    'Industrial & warehouse',
    'Multi-family',
    'Mixed-use',
    'Commercial land',
  ],
  caseStudies: [
    // CLIENT: replace with real transactions — address, role, outcome.
    {
      title: 'Mixed-use block repositioning',
      location: 'Litchfield County',
      summary: 'Placeholder case study — describe the asset, the mandate and the measured result.',
      metric: 'Add result',
    },
    {
      title: 'Industrial lease-up',
      location: 'New Haven County',
      summary: 'Placeholder case study — describe the space, the tenant search and the terms achieved.',
      metric: 'Add result',
    },
    {
      title: 'Multi-family acquisition',
      location: 'Hartford County',
      summary: 'Placeholder case study — describe the buyer, the financing route and the hold strategy.',
      metric: 'Add result',
    },
  ],
};

export const relocationPage = {
  eyebrow: 'Relocation',
  title: 'Moving to Connecticut — or out of it',
  lead: 'Whether you are leaving a metro for more space or heading somewhere new, the practical questions come before the property: which town, which schools, what it costs to actually live there.',
  guides: [
    {
      town: 'Fairfield County',
      angle: 'Commuter belt',
      summary: 'Closest to New York, strongest rail links, the state’s highest price points along the shoreline.',
    },
    {
      town: 'Litchfield County',
      angle: 'Space & quiet',
      summary: 'Land, lakes and antique housing stock, with longer drives to the interstate corridors.',
    },
    {
      town: 'Hartford County',
      angle: 'Employment centre',
      summary: 'Insurance and healthcare employment, central location, broad range of price points.',
    },
    {
      town: 'New Haven County',
      angle: 'Coast & campus',
      summary: 'Shoreline towns, university employment, a mix of dense city and suburb.',
    },
  ],
  checklist: [
    'Town-by-town comparison on taxes, schools and commute',
    'School district research before you shortlist properties',
    'Cost-of-living view that includes assessment practice, not just price',
    'Moving, storage and estate sale coordination',
    'Metro exit guidance for buyers leaving NYC or Boston',
  ],
  note: 'CLIENT: neighbourhood, school and cost-of-living figures are deliberately left qualitative here. Add verified numbers before publishing — stale or wrong data in this section damages trust fastest.',
  cta: {
    title: 'Speak to a relocation specialist',
    body: 'Tell us where you are coming from and what you need the move to achieve.',
  },
};

export const contactPage = {
  eyebrow: 'Contact',
  title: 'Talk to Steve',
  lead: 'One call reaches the whole network. Tell us what you are trying to do and the right specialists get pulled in from there.',
};

/** Dropdown options for the contact form's "service interest" field. */
export const serviceInterests = [
  'Buying a home',
  'Selling a home',
  'Renting',
  'Leasing',
  'Commercial property',
  'Building or renovating',
  'Relocation',
  'Joining the network',
  'Something else',
] as const;
