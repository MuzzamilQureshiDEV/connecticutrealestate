import type { Property, PropertyType } from '../types';

/**
 * PLACEHOLDER LISTINGS.
 *
 * CLIENT: replace this array with real inventory — either by editing it
 * directly or by fetching from your MLS/IDX feed and mapping onto the
 * `Property` type in lib/types.ts. Nothing else in the UI needs to change.
 *
 * Images: `image` may be a local path under /public or a remote URL whose host
 * is allowlisted in next.config.mjs. Cards fall back to a branded placeholder
 * when an image is missing, so the grid never shows a broken tile.
 */
export const properties: Property[] = [
  {
    id: 'ct-001',
    title: 'Restored Colonial with Barn',
    town: 'Litchfield',
    county: 'Litchfield',
    price: 789000,
    beds: 4,
    baths: 3,
    sqft: 3120,
    type: 'Single Family',
    status: 'For Sale',
    image: '',
    featured: true,
  },
  {
    id: 'ct-002',
    title: 'Shoreline Cottage, Water Views',
    town: 'Madison',
    county: 'New Haven',
    price: 1150000,
    beds: 3,
    baths: 2,
    sqft: 2180,
    type: 'Single Family',
    status: 'For Sale',
    image: '',
    featured: true,
  },
  {
    id: 'ct-003',
    title: 'Downtown Loft Conversion',
    town: 'Hartford',
    county: 'Hartford',
    price: 2400,
    priceUnit: 'month',
    beds: 2,
    baths: 2,
    sqft: 1340,
    type: 'Condo',
    status: 'For Rent',
    image: '',
    featured: true,
  },
  {
    id: 'ct-004',
    title: 'Three-Family Investment Block',
    town: 'Waterbury',
    county: 'New Haven',
    price: 465000,
    beds: 9,
    baths: 3,
    sqft: 4100,
    type: 'Multi-Family',
    status: 'For Sale',
    image: '',
    featured: true,
  },
  {
    id: 'ct-005',
    title: 'Mixed-Use Storefront + Apartments',
    town: 'Thomaston',
    county: 'Litchfield',
    price: 3800,
    priceUnit: 'month',
    beds: 0,
    baths: 2,
    sqft: 5200,
    type: 'Commercial',
    status: 'For Lease',
    image: '',
  },
  {
    id: 'ct-006',
    title: 'Lakefront Contemporary',
    town: 'Brookfield',
    county: 'Fairfield',
    price: 1395000,
    beds: 5,
    baths: 4,
    sqft: 4260,
    type: 'Single Family',
    status: 'For Sale',
    image: '',
  },
  {
    id: 'ct-007',
    title: 'Village Condo, Walk to Green',
    town: 'Middletown',
    county: 'Middlesex',
    price: 289000,
    beds: 2,
    baths: 2,
    sqft: 1180,
    type: 'Condo',
    status: 'For Sale',
    image: '',
  },
  {
    id: 'ct-008',
    title: 'Renovated Two-Bed Apartment',
    town: 'Watertown',
    county: 'Litchfield',
    price: 1850,
    priceUnit: 'month',
    beds: 2,
    baths: 1,
    sqft: 950,
    type: 'Apartment',
    status: 'For Rent',
    image: '',
  },
  {
    id: 'ct-009',
    title: 'Approved Building Lot, 2.4 Acres',
    town: 'Orange',
    county: 'New Haven',
    price: 219000,
    beds: 0,
    baths: 0,
    sqft: 104544,
    type: 'Land',
    status: 'Coming Soon',
    image: '',
  },
  {
    id: 'ct-010',
    title: 'Warehouse & Yard, Highway Access',
    town: 'New London',
    county: 'New London',
    price: 12500,
    priceUnit: 'month',
    beds: 0,
    baths: 2,
    sqft: 18400,
    type: 'Commercial',
    status: 'For Lease',
    image: '',
  },
  {
    id: 'ct-011',
    title: 'Antique Farmhouse on 6 Acres',
    town: 'Windham',
    county: 'Windham',
    price: 519000,
    beds: 4,
    baths: 2,
    sqft: 2890,
    type: 'Single Family',
    status: 'For Sale',
    image: '',
  },
  {
    id: 'ct-012',
    title: 'Professional Office Suite',
    town: 'Tolland',
    county: 'Tolland',
    price: 2200,
    priceUnit: 'month',
    beds: 0,
    baths: 1,
    sqft: 1600,
    type: 'Commercial',
    status: 'For Lease',
    image: '',
  },
];

export const propertyTypes: PropertyType[] = [
  'Single Family',
  'Multi-Family',
  'Condo',
  'Apartment',
  'Land',
  'Commercial',
];

export const featuredProperties = properties.filter((property) => property.featured);

export function formatPrice(property: Property): string {
  const formatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(property.price);

  if (property.priceUnit === 'month') return `${formatted}/mo`;
  if (property.priceUnit === 'year') return `${formatted}/yr`;
  return formatted;
}
