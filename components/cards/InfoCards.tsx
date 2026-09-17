import type { Pillar, ProcessStep, ResourceGroup } from '@/lib/types';
import { Card } from '@/components/ui/Card';
import { Icon } from '@/components/ui/Icons';

/** One of the Four Pillars of Success. */
export function PillarCard({ pillar, index }: { pillar: Pillar; index: number }) {
  return (
    <Card as="article" interactive className="group h-full p-6">
      <div className="flex items-start justify-between">
        <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-50 text-navy-900 transition-colors duration-300 group-hover:bg-navy-900 group-hover:text-bronze-300">
          <Icon name={pillar.icon} className="h-6 w-6" strokeWidth={1.6} />
        </span>
        <span className="font-display text-sm font-bold text-navy-200">0{index + 1}</span>
      </div>
      <h3 className="mt-5 font-display text-xl font-bold text-navy-900">{pillar.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-navy-500">{pillar.description}</p>
    </Card>
  );
}

/** One step of the Coordinated Execution Model. */
export function StepCard({ step, isLast }: { step: ProcessStep; isLast?: boolean }) {
  return (
    <div className="relative h-full">
      {!isLast && (
        <span
          aria-hidden="true"
          className="absolute left-[calc(100%+0.5rem)] top-8 hidden h-px w-6 bg-gradient-to-r from-bronze-300 to-transparent lg:block"
        />
      )}
      <Card className="h-full p-6">
        <div className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-bronze-100 text-bronze-700">
            <Icon name={step.icon} className="h-5 w-5" strokeWidth={1.7} />
          </span>
          <span className="font-display text-2xl font-bold text-navy-200">{step.step}</span>
        </div>
        <h3 className="mt-5 font-display text-lg font-bold text-navy-900">{step.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-navy-500">{step.description}</p>
      </Card>
    </div>
  );
}

/** A group of external resource links. */
export function ResourceLinkCard({ group }: { group: ResourceGroup }) {
  return (
    <Card as="article" className="h-full p-6">
      <div className="flex items-center gap-3">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy-50 text-navy-900">
          <Icon name={group.icon} className="h-5 w-5" strokeWidth={1.7} />
        </span>
        <h3 className="font-display text-lg font-bold text-navy-900">{group.title}</h3>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-navy-500">{group.description}</p>

      <ul className="mt-5 space-y-1 border-t border-navy-100 pt-4">
        {group.links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link flex items-start justify-between gap-3 rounded-lg px-2 py-2 text-sm text-navy-600 transition-colors hover:bg-navy-50 hover:text-navy-900"
            >
              <span>{link.label}</span>
              <Icon
                name="arrowUpRight"
                className="mt-0.5 h-4 w-4 shrink-0 text-navy-300 transition-colors group-hover/link:text-bronze-600"
                strokeWidth={1.8}
              />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </li>
        ))}
      </ul>
    </Card>
  );
}
