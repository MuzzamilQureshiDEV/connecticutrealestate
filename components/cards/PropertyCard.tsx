import Image from 'next/image';
import Link from 'next/link';
import type { Property } from '@/lib/types';
import { formatPrice } from '@/lib/content/properties';
import { Icon } from '@/components/ui/Icons';
import { Card } from '@/components/ui/Card';

const statusTone: Record<string, string> = {
  'For Sale': 'bg-navy-900 text-white',
  'For Rent': 'bg-bronze-600 text-white',
  'For Lease': 'bg-bronze-600 text-white',
  'Coming Soon': 'bg-white text-navy-900',
  Sold: 'bg-navy-200 text-navy-800',
};

/**
 * Listing card. Server-rendered: when `image` is empty we render a branded
 * placeholder rather than attempting a load, so no client-side error handling
 * is needed and the grid never shows a broken tile.
 */
export function PropertyCard({ property }: { property: Property }) {
  const area = property.sqft >= 43560 ? `${(property.sqft / 43560).toFixed(2)} ac` : `${property.sqft.toLocaleString()} sqft`;

  return (
    <Card as="article" interactive className="group flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-navy-50">
        {property.image ? (
          <Image
            src={property.image}
            alt={`${property.title}, ${property.town}, CT`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 ease-smooth group-hover:scale-[1.04]"
          />
        ) : (
          // CLIENT: add a photo URL to this listing in lib/content/properties.ts
          <div className="grid h-full w-full place-items-center bg-gradient-to-br from-navy-50 via-sand-100 to-bronze-100">
            <Icon name="home" className="h-9 w-9 text-navy-300" strokeWidth={1.2} />
          </div>
        )}

        <span
          className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold shadow-sm ${
            statusTone[property.status] ?? 'bg-white text-navy-900'
          }`}
        >
          {property.status}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="font-display text-xl font-bold text-navy-900">{formatPrice(property)}</p>

        <h3 className="mt-1.5 text-base font-semibold leading-snug text-navy-800">
          <Link href="/contact" className="transition-colors hover:text-bronze-600">
            {property.title}
          </Link>
        </h3>

        <p className="mt-1 flex items-center gap-1.5 text-sm text-navy-500">
          <Icon name="pin" className="h-3.5 w-3.5 text-bronze-600" strokeWidth={1.8} />
          {property.town}, CT · {property.county} County
        </p>

        <ul className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-navy-100 pt-4 text-sm text-navy-600">
          {property.beds > 0 && (
            <li className="flex items-center gap-1.5">
              <Icon name="bed" className="h-4 w-4 text-navy-400" strokeWidth={1.7} />
              {property.beds} <span className="sr-only">bedrooms</span>
            </li>
          )}
          {property.baths > 0 && (
            <li className="flex items-center gap-1.5">
              <Icon name="bath" className="h-4 w-4 text-navy-400" strokeWidth={1.7} />
              {property.baths} <span className="sr-only">bathrooms</span>
            </li>
          )}
          <li className="flex items-center gap-1.5">
            <Icon name="ruler" className="h-4 w-4 text-navy-400" strokeWidth={1.7} />
            {area}
          </li>
        </ul>

        <Link
          href="/contact"
          className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-bronze-600 transition-all duration-300 hover:gap-3"
        >
          Schedule a viewing
          <Icon name="arrowRight" className="h-4 w-4" strokeWidth={2} />
          <span className="sr-only"> for {property.title}</span>
        </Link>
      </div>
    </Card>
  );
}
