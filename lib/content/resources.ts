import type { ResourceGroup } from '../types';

/**
 * RESOURCE DIRECTORY.
 * Groups and destinations mirror the live site's directory. Descriptions are
 * written here for scannability — edit or extend freely.
 *
 * CLIENT: add a link by dropping another entry into any `links` array.
 */
export const resourceGroups: ResourceGroup[] = [
  {
    title: 'Real Estate & Housing',
    description: 'Search inventory by property type across every Connecticut county.',
    icon: 'home',
    links: [
      { label: 'Single Family Homes', href: 'https://connecticutrealestate.online/connecticuthomesearch/' },
      { label: 'Multi-Family Homes', href: 'https://connecticutrealestate.online/connecticut-multi-family-homes/' },
      { label: 'Condos & Co-Ops', href: 'https://connecticutrealestate.online/connecticut-condos/' },
      { label: 'Luxury & Waterfront', href: 'https://connecticutrealestate.online/luxury-waterfront/' },
      { label: 'Land & Lots', href: 'https://connecticutrealestate.online/land/' },
      { label: 'Commercial & Industrial', href: 'https://connecticutrealestate.online/connecticutcommercialrealestate/' },
    ],
  },
  {
    title: 'Financing & Mortgage',
    description: 'Lending, rebates and investment routes into the market.',
    icon: 'bank',
    links: [
      { label: 'Mortgage & Financing', href: 'https://connecticutrealestate.online/connecticut-mortgage-professionals/' },
      { label: 'Buyer Rebates & Discount Listings', href: 'https://connecticutrealestate.online/connecticut-home-buyer-rebates/' },
      { label: 'Foreclosures & Short Sales', href: 'https://connecticutrealestate.online/foreclosures' },
      { label: 'Vacation & BnB Co-Listing', href: 'https://connecticutrealestate.online/bnb-co-listing-services' },
      { label: 'For Sale By Owner', href: 'https://connecticutrealestate.online/for-sale-by-owner/' },
      { label: 'Mergers & Acquisitions', href: 'https://connecticutrealestate.online/mergers/' },
    ],
  },
  {
    title: 'Relocation & Community',
    description: 'Town guides, moving help and services for settling in.',
    icon: 'truck',
    links: [
      { label: 'Connecticut Towns Guide', href: 'https://connecticutrealestate.online/connecticuttowns/' },
      { label: 'Moving & Relocation', href: 'https://connecticutrealestate.online/moving-to-or-from-connecticut/' },
      { label: 'Immigration Assistance', href: 'https://connecticutrealestate.online/connecticut-immigration/' },
      { label: 'Go Green & Eco-Living', href: 'https://connecticutrealestate.online/sustainability/' },
      { label: 'Contractor Network', href: 'https://connecticutrealestate.online/contractornetwork/' },
      { label: 'Magazine & TV Show', href: 'https://connecticutrealestate.online/tv-magazine/' },
    ],
  },
  {
    title: 'Business Growth & Knowledge',
    description: 'Market education, training and joining the network.',
    icon: 'sparkle',
    links: [
      { label: 'The Market Simplified', href: 'https://connecticutrealestate.online/connecticut-real-estate-market-simplified/' },
      { label: 'Seminars, Books & Forms', href: 'https://connecticutrealestate.online/connecticut-real-estate-seminars/' },
      { label: 'About Us & Teammates', href: 'https://connecticutrealestate.online/connecticut-real-estate-brokerage/' },
      { label: 'Careers', href: 'https://connecticutrealestate.online/connecticutrealestatecareers/' },
    ],
  },
  {
    title: 'Official State Resources',
    description: 'Primary sources for regulation, licensing and assistance programs.',
    icon: 'gavel',
    links: [
      { label: 'CT Department of Housing', href: 'https://portal.ct.gov/doh' },
      { label: 'CT Department of Consumer Protection — Real Estate', href: 'https://portal.ct.gov/dcp/license-services-division/all-license-applications/real-estate-licenses' },
      { label: 'CT Housing Finance Authority (CHFA)', href: 'https://www.chfa.org/' },
      { label: 'CT Department of Energy & Environmental Protection', href: 'https://portal.ct.gov/deep' },
      { label: 'CT State Department of Education', href: 'https://portal.ct.gov/sde' },
      { label: 'Connecticut Open Data Portal', href: 'https://data.ct.gov/' },
    ],
  },
];
