import type { Metadata } from 'next';
import { evolution, hero, localExpertise, pillars, processSteps } from '@/lib/content/home';
import { featuredProperties } from '@/lib/content/properties';
import { featuredIn, site } from '@/lib/site';
import { telHref } from '@/lib/utils';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icons';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { PillarCard, StepCard } from '@/components/cards/InfoCards';
import { PropertyCard } from '@/components/cards/PropertyCard';
import { PathSelector } from '@/components/sections/PathSelector';

export const metadata: Metadata = {
  title: 'Coordinated Connecticut Real Estate',
  description: site.description,
};

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-hero-wash" aria-labelledby="hero-heading">
        <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-bronze-200/30 blur-3xl" />
        <Container>
          <div className="relative grid gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-10 lg:py-28">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="eyebrow mb-5">{site.trademark}</p>
                <h1 id="hero-heading" className="h1">
                  {hero.headline}
                </h1>
                <p className="lead mt-6 max-w-xl">{hero.subheadline}</p>
              </Reveal>

              <Reveal delay={0.12}>
                <p className="mt-6 font-display text-lg font-semibold text-navy-900">{site.promise}</p>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="mt-9 flex flex-wrap gap-3">
                  <Button href={hero.primaryCta.href} size="lg" icon="arrowRight">
                    {hero.primaryCta.label}
                  </Button>
                  <Button href={hero.secondaryCta.href} variant="outline" size="lg">
                    {hero.secondaryCta.label}
                  </Button>
                </div>
              </Reveal>

              <Reveal delay={0.28}>
                <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-navy-100 pt-8">
                  {hero.stats.map((stat) => (
                    <div key={stat.label}>
                      <dt className="sr-only">{stat.label}</dt>
                      <dd>
                        <span className="block font-display text-3xl font-bold text-navy-900">{stat.value}</span>
                        <span className="mt-1 block text-sm text-navy-500">{stat.label}</span>
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>

            {/* Contact card — the fastest route to a human, kept above the fold. */}
            <Reveal delay={0.15} className="lg:col-span-5">
              <div className="card-surface overflow-hidden">
                <div className="bg-navy-mesh p-7">
                  <p className="eyebrow text-bronze-300">Direct line</p>
                  <p className="mt-3 font-display text-2xl font-bold text-white">{site.broker.name}</p>
                  <p className="mt-1 text-sm text-navy-100/80">{site.broker.title}</p>

                  <a
                    href={telHref(site.broker.cell)}
                    className="mt-6 inline-flex items-center gap-3 font-display text-2xl font-bold text-bronze-300 transition-colors hover:text-white"
                  >
                    <Icon name="phone" className="h-5 w-5" strokeWidth={1.9} />
                    {site.broker.cell}
                  </a>
                  <p className="mt-3 text-sm text-navy-100/70">
                    For fastest service, text{' '}
                    <span className="font-semibold text-white">&ldquo;{site.textKeyword.keyword}&rdquo;</span> to this number.
                  </p>
                </div>

                <div className="space-y-3 p-7">
                  {[
                    'One point of contact for every discipline',
                    'Coverage across all eight counties',
                    'Licensed brokerage — ' + site.license,
                  ].map((item) => (
                    <p key={item} className="flex items-start gap-3 text-sm text-navy-600">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-bronze-600" strokeWidth={2.2} />
                      {item}
                    </p>
                  ))}
                  <Button href="/contact" className="mt-4 w-full" variant="outline" icon="arrowRight">
                    Start Your Journey
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>

        {/* Featured-in marquee */}
        <div className="border-t border-navy-100 bg-white/60 py-5">
          <div className="flex overflow-hidden" aria-label="Featured in">
            <ul className="flex shrink-0 animate-marquee items-center gap-10 pr-10">
              {[...featuredIn, ...featuredIn].map((outlet, i) => (
                <li
                  key={`${outlet}-${i}`}
                  className="whitespace-nowrap font-display text-sm font-semibold uppercase tracking-[0.16em] text-navy-300"
                  aria-hidden={i >= featuredIn.length}
                >
                  {outlet}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Four Pillars ─────────────────────────────────────────────────── */}
      <Section
        id="pillars"
        eyebrow="Our 4 Pillars of Success"
        title={site.trademark}
        intro="Four commitments that decide how every file in this network is handled."
      >
        <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, index) => (
            <RevealItem key={pillar.name} className="h-full">
              <PillarCard pillar={pillar} index={index} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      {/* ── Coordinated Execution Model ──────────────────────────────────── */}
      <Section
        id="how-it-works"
        tone="sand"
        eyebrow="How It Works"
        title="The Coordinated Execution Model"
        intro="Three steps that replace a chain of disconnected vendors with one accountable team."
      >
        <RevealGroup className="grid gap-5 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <RevealItem key={step.step} className="h-full">
              <StepCard step={step} isLast={index === processSteps.length - 1} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      {/* ── Featured Homes ───────────────────────────────────────────────── */}
      <Section
        id="featured"
        eyebrow="Featured Homes"
        title="Currently on the market"
        intro="A sample of live inventory across the state."
        action={
          <Button href="/buy" variant="outline" icon="arrowRight">
            View all properties
          </Button>
        }
      >
        <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProperties.map((property) => (
            <RevealItem key={property.id} className="h-full">
              <PropertyCard property={property} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      {/* ── Select Your Path ─────────────────────────────────────────────── */}
      <Section
        id="paths"
        tone="sand"
        eyebrow="Select Your Path"
        title="Eight disciplines, three ways in"
        intro="Choose the track that matches where you are. The specialists behind it are already coordinated."
      >
        <PathSelector />
      </Section>

      {/* ── From Screen to Steel ─────────────────────────────────────────── */}
      <Section id="evolution" tone="navy" eyebrow="Our Physical Evolution" title={evolution.title}>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-6">
            {evolution.body.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="leading-relaxed text-navy-100/80">{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <ol className="relative space-y-6 border-l border-white/15 pl-6">
              {evolution.milestones.map((milestone, i) => (
                <li key={milestone.phase} className="relative">
                  <Reveal delay={0.1 + i * 0.08}>
                    <span
                      aria-hidden="true"
                      className="absolute -left-[30px] top-1.5 h-3.5 w-3.5 rounded-full bg-bronze-400"
                    />
                    <p className="eyebrow text-bronze-300">{milestone.phase}</p>
                    <p className="mt-1.5 font-display text-lg font-bold text-white">{milestone.title}</p>
                    <p className="mt-1 text-sm text-navy-100/70">{milestone.description}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      {/* ── Local expertise ──────────────────────────────────────────────── */}
      <Section id="expertise" eyebrow="Local Knowledge" title={localExpertise.title}>
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <p className="lead">{localExpertise.body}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact" icon="arrowRight">
                Talk to Steve
              </Button>
              <Button href="/resources" variant="outline">
                Browse resources
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
            <ul className="space-y-3">
              {localExpertise.points.map((point) => (
                <li key={point} className="flex items-start gap-3 rounded-xl border border-navy-100 bg-sand-50 p-4 text-sm text-navy-700">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-bronze-600" strokeWidth={2.2} />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
