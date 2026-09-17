import type { Metadata } from 'next';
import { agents } from '@/lib/content/agents';
import { ctCounties, site } from '@/lib/site';
import { telHref } from '@/lib/utils';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { PageHero } from '@/components/sections/PageHero';
import { AgentCard } from '@/components/cards/AgentCard';

export const metadata: Metadata = {
  title: 'Connecticut Real Estate Agents',
  description:
    'Meet the agents and specialists of the Connecticut Real Estate Center, covering towns across all eight counties.',
};

export default function AgentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Agents"
        title="Connecticut agents, backed by the whole network"
        lead="Every agent here works with the same bench of lenders, attorneys, inspectors and contractors — so your questions get answered by the person who owns them."
        actions={
          <>
            <Button href="/contact" icon="arrowRight">
              Get matched to an agent
            </Button>
            <Button href="/career" variant="outline">
              Join the team
            </Button>
          </>
        }
      />

      <Section>
        {/* CLIENT: add photos and direct contact details in lib/content/agents.ts */}
        <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {agents.map((agent) => (
            <RevealItem key={agent.slug} className="h-full">
              <AgentCard agent={agent} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Section tone="sand" eyebrow="Coverage" title="Working across all eight counties">
        <Reveal>
          <ul className="flex flex-wrap gap-2.5">
            {ctCounties.map((county) => (
              <li key={county} className="chip text-sm">
                {county} County
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="card-surface mt-10 flex flex-col items-start justify-between gap-6 p-7 md:flex-row md:items-center">
            <div>
              <h3 className="font-display text-xl font-bold text-navy-900">
                Not sure who you should be talking to?
              </h3>
              <p className="mt-2 max-w-xl text-sm text-navy-500">
                Call Steve directly and he will point you at the right person — agent, lender, attorney or contractor.
              </p>
            </div>
            <Button href={telHref(site.broker.cell)} icon="phone" iconPosition="left" className="shrink-0">
              {site.broker.cell}
            </Button>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
