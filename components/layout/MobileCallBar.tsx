'use client';

import Link from 'next/link';
import { site } from '@/lib/site';
import { telHref } from '@/lib/utils';
import { Icon } from '@/components/ui/Icons';

/**
 * Sticky thumb-reachable CTA on small screens. Lead capture is the point of
 * this site, so the two highest-value actions stay permanently in reach on
 * mobile without covering body copy (the layout adds matching bottom padding).
 */
export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-navy-100 bg-white/95 backdrop-blur-lg sm:hidden">
      <div className="grid grid-cols-2 gap-2 px-3 py-2.5">
        <a
          href={telHref(site.broker.cell)}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-4 py-3 text-sm font-semibold text-white"
        >
          <Icon name="phone" className="h-4 w-4" strokeWidth={1.9} />
          Call Steve
        </a>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-navy-200 px-4 py-3 text-sm font-semibold text-navy-900"
        >
          <Icon name="mail" className="h-4 w-4" strokeWidth={1.9} />
          Enquire
        </Link>
      </div>
    </div>
  );
}
