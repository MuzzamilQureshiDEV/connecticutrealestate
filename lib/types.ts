/** Shared content types. Keeping them in one place makes the data files
 *  self-documenting and stops typos reaching the UI. */

export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export type Pillar = {
  name: string;
  icon: IconName;
  description: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
  icon: IconName;
};

export type Discipline = {
  name: string;
  description: string;
  href?: string;
};

export type ServicePath = {
  id: string;
  title: string;
  tagline: string;
  icon: IconName;
  disciplines: Discipline[];
};

export type ListingStatus = 'For Sale' | 'For Rent' | 'For Lease' | 'Sold' | 'Coming Soon';

export type Property = {
  id: string;
  title: string;
  town: string;
  county: string;
  price: number;
  /** Monthly for rentals/leases, total for sales. */
  priceUnit?: 'month' | 'year';
  beds: number;
  baths: number;
  sqft: number;
  type: PropertyType;
  status: ListingStatus;
  image: string;
  featured?: boolean;
};

export type PropertyType =
  | 'Single Family'
  | 'Multi-Family'
  | 'Condo'
  | 'Land'
  | 'Commercial'
  | 'Apartment';

export type Agent = {
  slug: string;
  name: string;
  title: string;
  region: string;
  phone?: string;
  email?: string;
  photo?: string;
  bio?: string;
};

export type ResourceLink = {
  label: string;
  href: string;
  description?: string;
};

export type ResourceGroup = {
  title: string;
  description: string;
  icon: IconName;
  links: ResourceLink[];
};

export type IconName =
  | 'shield'
  | 'scales'
  | 'handshake'
  | 'compass'
  | 'target'
  | 'users'
  | 'blueprint'
  | 'home'
  | 'key'
  | 'building'
  | 'hammer'
  | 'bank'
  | 'gavel'
  | 'search'
  | 'truck'
  | 'sparkle'
  | 'phone'
  | 'mail'
  | 'pin'
  | 'arrowRight'
  | 'arrowUpRight'
  | 'check'
  | 'chevronDown'
  | 'chevronLeft'
  | 'chevronRight'
  | 'menu'
  | 'close'
  | 'bed'
  | 'bath'
  | 'ruler';
