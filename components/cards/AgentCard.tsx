import Image from 'next/image';
import type { Agent } from '@/lib/types';
import { telHref } from '@/lib/utils';
import { Card } from '@/components/ui/Card';
import { Icon } from '@/components/ui/Icons';

/** Agent tile. Falls back to a monogram when no headshot is supplied. */
export function AgentCard({ agent }: { agent: Agent }) {
  const initials = agent.name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('');

  return (
    <Card as="article" interactive className="group flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-navy-50">
        {agent.photo ? (
          <Image
            src={agent.photo}
            alt={`${agent.name}, ${agent.title}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 ease-smooth group-hover:scale-[1.03]"
          />
        ) : (
          // CLIENT: add /public/images/agents/<slug>.jpg and set `photo`.
          <div className="grid h-full w-full place-items-center bg-gradient-to-br from-navy-100 via-sand-100 to-bronze-100">
            <span className="font-display text-4xl font-bold text-navy-400">{initials}</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-bold text-navy-900">{agent.name}</h3>
        <p className="mt-0.5 text-sm font-medium text-bronze-600">{agent.title}</p>
        <p className="mt-2 flex items-center gap-1.5 text-sm text-navy-500">
          <Icon name="pin" className="h-3.5 w-3.5 text-navy-400" strokeWidth={1.8} />
          {agent.region}
        </p>

        {agent.bio && <p className="mt-3 text-sm leading-relaxed text-navy-500">{agent.bio}</p>}

        <div className="mt-auto flex flex-wrap gap-3 pt-5 text-sm">
          {agent.phone ? (
            <a
              href={telHref(agent.phone)}
              className="inline-flex items-center gap-1.5 font-semibold text-navy-900 transition-colors hover:text-bronze-600"
            >
              <Icon name="phone" className="h-4 w-4" strokeWidth={1.8} />
              {agent.phone}
            </a>
          ) : (
            <a
              href="/contact"
              className="inline-flex items-center gap-1.5 font-semibold text-navy-900 transition-colors hover:text-bronze-600"
            >
              <Icon name="mail" className="h-4 w-4" strokeWidth={1.8} />
              Contact
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}
