'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { servicePaths } from '@/lib/content/home';
import { cn } from '@/lib/utils';
import { Icon } from '@/components/ui/Icons';
import { Button } from '@/components/ui/Button';
import { ease } from '@/components/ui/Reveal';

/**
 * "Select Your Path" — three tracks, each expanding to its disciplines.
 * Implemented as a proper tablist so arrow keys and screen readers work.
 */
export function PathSelector() {
  const [active, setActive] = useState(0);
  const path = servicePaths[active];

  return (
    <div>
      <div role="tablist" aria-label="Select your path" className="grid gap-3 sm:grid-cols-3">
        {servicePaths.map((item, index) => {
          const selected = index === active;
          return (
            <button
              key={item.id}
              role="tab"
              id={`path-tab-${item.id}`}
              aria-selected={selected}
              aria-controls={`path-panel-${item.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(index)}
              onKeyDown={(event) => {
                if (event.key === 'ArrowRight') setActive((index + 1) % servicePaths.length);
                if (event.key === 'ArrowLeft') setActive((index - 1 + servicePaths.length) % servicePaths.length);
              }}
              className={cn(
                'group rounded-2xl border p-5 text-left transition-all duration-300 ease-smooth',
                selected
                  ? 'border-navy-900 bg-navy-900 text-white shadow-lift'
                  : 'border-navy-100 bg-white text-navy-900 hover:-translate-y-1 hover:border-bronze-300 hover:shadow-card',
              )}
            >
              <span
                className={cn(
                  'grid h-11 w-11 place-items-center rounded-xl transition-colors',
                  selected ? 'bg-white/10 text-bronze-300' : 'bg-navy-50 text-navy-900',
                )}
              >
                <Icon name={item.icon} className="h-5 w-5" strokeWidth={1.7} />
              </span>
              <span className="mt-4 block font-display text-lg font-bold">{item.title}</span>
              <span className={cn('mt-1.5 block text-sm', selected ? 'text-navy-100/80' : 'text-navy-500')}>
                {item.tagline}
              </span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={path.id}
          role="tabpanel"
          id={`path-panel-${path.id}`}
          aria-labelledby={`path-tab-${path.id}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease }}
          className="card-surface mt-5 p-6 sm:p-8"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h3 className="font-display text-xl font-bold text-navy-900">{path.title}</h3>
            <Button href="/contact" variant="outline" size="sm" icon="arrowRight">
              Start here
            </Button>
          </div>

          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {path.disciplines.map((discipline) => (
              <li key={discipline.name} className="rounded-xl border border-navy-100 bg-sand-50 p-4">
                <p className="flex items-center gap-2 font-semibold text-navy-900">
                  <Icon name="check" className="h-4 w-4 text-bronze-600" strokeWidth={2.2} />
                  {discipline.name}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-navy-500">{discipline.description}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
