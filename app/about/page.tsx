import type { Metadata } from 'next';
import { aboutPage } from '@/lib/content/pages';
import { pillars } from '@/lib/content/home';
import { agents } from '@/lib/content/agents';
import { featuredIn, site } from '@/lib/site';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icons';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { PageHero } from '@/components/sections/PageHero';
import { PillarCard } from '@/components/cards/InfoCards';
import { AgentCard } from '@/components/cards/AgentCard';

export const metadata: Metadata = {
  title: 'About',
  description:
    'The Connecticut Real Estate Center coordinates agents, lenders, attorneys, inspectors and contractors into one accountable team, led by broker Steve Schappert.',
};

export default function AboutPage() {
  const leadership = agents.slice(0, 2);

  return (
    <>
      <PageHero
        eyebrow={aboutPage.eyebrow}
        title={aboutPage.title}
        lead={aboutPage.lead}
        actions={
          <>
            <Button href="/contact" icon="arrowRight">
              Talk to Steve
            </Button>
            <Button href="/agents" variant="outline">
              Meet the network
            </Button>
          </>
        }
      />

      {/* ── Story ────────────────────────────────────────────────────────── */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-7">
            {aboutPage.story.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <p className="prose-brand text-lg">{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1} className="lg:col-span-4 lg:col-start-9">
            <div className="card-surface p-6">
              <p className="eyebrow">Licensed brokerage</p>
              <p className="mt-3 font-display text-lg font-bold text-navy-900">{site.legalName}</p>
              <dl className="mt-5 space-y-4 border-t border-navy-100 pt-5 text-sm">
                <div>
                  <dt className="text-navy-400">Licence</dt>
                  <dd className="mt-1 font-semibold text-navy-900">{site.license}</dd>
                </div>
                <div>
                  <dt className="text-navy-400">Office</dt>
                  <dd className="mt-1 text-navy-700">{site.office.full}</dd>
                </div>
                <div>
                  <dt className="text-navy-400">Coverage</dt>
                  <dd className="mt-1 text-navy-700">All eight Connecticut counties</dd>
                </div>
              </dl>
            </div>

            <div className="mt-5 rounded-2xl border border-navy-100 bg-sand-50 p-6">
              <p className="eyebrow">Featured in</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {featuredIn.map((outlet) => (
                  <li key={outlet} className="chip">
                    {outlet}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ── Pillars ──────────────────────────────────────────────────────── */}
      <Section tone="sand" eyebrow="The Four Pillars" title={aboutPage.values.title} intro={aboutPage.values.body}>
        <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, index) => (
            <RevealItem key={pillar.name} className="h-full">
              <PillarCard pillar={pillar} index={index} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      {/* ── Leadership ───────────────────────────────────────────────────── */}
      <Section
        eyebrow="Leadership"
        title="Who you will be dealing with"
        action={
          <Button href="/agents" variant="outline" icon="arrowRight">
            All agents
          </Button>
        }
      >
        <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {leadership.map((agent) => (
            <RevealItem key={agent.slug} className="h-full">
              <AgentCard agent={agent} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <Section tone="navy" align="center" title={aboutPage.cta.title} intro={aboutPage.cta.body}>
        <Reveal className="flex flex-wrap justify-center gap-3">
          <Button href="/contact" variant="light" icon="arrowRight">
            Start Your Journey
          </Button>
          <Button href="/career" variant="outline" className="border-white/30 bg-transparent text-white hover:border-white hover:bg-white/10">
            Join the network
          </Button>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 flex items-center justify-center gap-2 text-sm text-navy-100/70">
            <Icon name="phone" className="h-4 w-4 text-bronze-300" strokeWidth={1.8} />
            {site.broker.name} · {site.broker.cell}
          </p>
        </Reveal>
      </Section>
    </>
  );
}
