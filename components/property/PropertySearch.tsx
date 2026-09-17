'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import type { ListingStatus, Property } from '@/lib/types';
import { propertyTypes } from '@/lib/content/properties';
import { ctCounties } from '@/lib/site';
import { PropertyCard } from '@/components/cards/PropertyCard';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icons';
import { ease } from '@/components/ui/Reveal';

const PAGE_SIZE = 6;

type Filters = {
  query: string;
  county: string;
  type: string;
  beds: string;
  baths: string;
  maxPrice: string;
};

const EMPTY: Filters = { query: '', county: 'Any', type: 'Any', beds: 'Any', baths: 'Any', maxPrice: '' };

/**
 * Search + filter + paginated grid.
 * Filtering runs client-side over the in-memory list. When the client wires up
 * an MLS/IDX feed, swap `properties` for the fetched array — the UI is unchanged.
 */
export function PropertySearch({
  properties,
  statuses,
}: {
  properties: Property[];
  statuses?: readonly ListingStatus[];
}) {
  const [filters, setFilters] = useState<Filters>(EMPTY);
  const [visible, setVisible] = useState(PAGE_SIZE);

  const scoped = useMemo(
    () => (statuses ? properties.filter((p) => statuses.includes(p.status)) : properties),
    [properties, statuses],
  );

  const results = useMemo(() => {
    const query = filters.query.trim().toLowerCase();
    return scoped.filter((property) => {
      if (query && !`${property.title} ${property.town} ${property.county}`.toLowerCase().includes(query)) return false;
      if (filters.county !== 'Any' && property.county !== filters.county) return false;
      if (filters.type !== 'Any' && property.type !== filters.type) return false;
      if (filters.beds !== 'Any' && property.beds < Number(filters.beds)) return false;
      if (filters.baths !== 'Any' && property.baths < Number(filters.baths)) return false;
      if (filters.maxPrice && property.price > Number(filters.maxPrice)) return false;
      return true;
    });
  }, [scoped, filters]);

  const update = (key: keyof Filters, value: string) => {
    setFilters((current) => ({ ...current, [key]: value }));
    setVisible(PAGE_SIZE);
  };

  const shown = results.slice(0, visible);
  const isFiltered = JSON.stringify(filters) !== JSON.stringify(EMPTY);

  return (
    <div>
      {/* Filter bar */}
      <div className="card-surface mb-8 p-4 sm:p-5">
        <div className="grid gap-3 md:grid-cols-12">
          <div className="relative md:col-span-4">
            <label htmlFor="property-search" className="sr-only">
              Search by town or keyword
            </label>
            <Icon
              name="search"
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-300"
              strokeWidth={1.8}
            />
            <input
              id="property-search"
              type="search"
              value={filters.query}
              onChange={(event) => update('query', event.target.value)}
              placeholder="Town, county or keyword"
              className="field pl-10"
            />
          </div>

          <Select
            id="filter-county"
            label="County"
            value={filters.county}
            onChange={(value) => update('county', value)}
            options={['Any', ...ctCounties]}
            className="md:col-span-2"
          />
          <Select
            id="filter-type"
            label="Property type"
            value={filters.type}
            onChange={(value) => update('type', value)}
            options={['Any', ...propertyTypes]}
            className="md:col-span-2"
          />
          <Select
            id="filter-beds"
            label="Beds"
            value={filters.beds}
            onChange={(value) => update('beds', value)}
            options={['Any', '1', '2', '3', '4', '5']}
            format={(value) => (value === 'Any' ? 'Beds: any' : `${value}+ beds`)}
            className="md:col-span-2"
          />
          <Select
            id="filter-baths"
            label="Baths"
            value={filters.baths}
            onChange={(value) => update('baths', value)}
            options={['Any', '1', '2', '3', '4']}
            format={(value) => (value === 'Any' ? 'Baths: any' : `${value}+ baths`)}
            className="md:col-span-2"
          />
        </div>

        <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
          <p className="text-sm text-navy-500" aria-live="polite">
            <span className="font-semibold text-navy-900">{results.length}</span>{' '}
            {results.length === 1 ? 'property' : 'properties'}
          </p>
          {isFiltered && (
            <button
              type="button"
              onClick={() => {
                setFilters(EMPTY);
                setVisible(PAGE_SIZE);
              }}
              className="text-sm font-semibold text-bronze-600 hover:text-bronze-700"
            >
              Clear filters
            </button>
          )}
        </div>
      </div>

      {/* Results */}
      {shown.length > 0 ? (
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((property, i) => (
            <motion.li
              key={property.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease, delay: Math.min(i, 5) * 0.05 }}
              className="h-full"
            >
              <PropertyCard property={property} />
            </motion.li>
          ))}
        </ul>
      ) : (
        <div className="card-surface p-10 text-center">
          <p className="font-display text-lg font-bold text-navy-900">No properties match those filters</p>
          <p className="mt-2 text-sm text-navy-500">
            Widen the search, or tell us what you are looking for and we will hunt it down.
          </p>
          <Button href="/contact" className="mt-6" icon="arrowRight">
            Tell us what you need
          </Button>
        </div>
      )}

      {visible < results.length && (
        <div className="mt-10 text-center">
          <Button variant="outline" onClick={() => setVisible((value) => value + PAGE_SIZE)}>
            Load more properties
          </Button>
        </div>
      )}
    </div>
  );
}

function Select({
  id,
  label,
  value,
  onChange,
  options,
  format,
  className,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  format?: (value: string) => string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <select id={id} value={value} onChange={(event) => onChange(event.target.value)} className="field">
        {options.map((option) => (
          <option key={option} value={option}>
            {format ? format(option) : option === 'Any' ? `${label}: any` : option}
          </option>
        ))}
      </select>
    </div>
  );
}
