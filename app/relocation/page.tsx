import type { Metadata } from 'next';
import { relocationPage } from '@/lib/content/pages';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icons';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { PageHero } from '@/components/sections/PageHero';
import { ContactForm } from '@/components/forms/ContactForm';

export const metadata: Metadata = {
  title: 'Relocating to Connecticut',
  description:
    'Moving to or from Connecticut: town-by-town comparison, school research, cost-of-living guidance and coordinated moving support.',
};

export default function RelocationPage() {
  return (
    <>
      <PageHero
        eyebrow={relocationPage.eyebrow}
        title={relocationPage.title}
        lead={relocationPage.lead}
        actions={
          <Button href="#relocation-enquiry" icon="arrowRight">
            Speak to a relocation specialist
          </Button>
        }
      />

      <Section eyebrow="Where to look" title="Starting points by region">
        <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {relocationPage.guides.map((guide) => (
            <RevealItem key={guide.town} className="h-full">
              <Card interactive className="h-full p-6">
                <p className="eyebrow">{guide.angle}</p>
                <h3 className="mt-3 font-display text-lg font-bold text-navy-900">{guide.town}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-500">{guide.summary}</p>
              </Card>
            </RevealItem>
          ))}
        </RevealGroup>

        {/*
          CLIENT: school, tax and cost-of-living figures are deliberately absent
          rather than estimated — see the note in lib/content/pages.ts. Add
          verified numbers before publishing; stale data here costs trust
          faster than having none. Keep this reminder out of the visible page.
        */}
        <Reveal delay={0.15}>
          <p className="mt-8 rounded-xl border border-navy-100 bg-sand-50 p-5 text-sm text-navy-500">
            Every town in Connecticut assesses, taxes and zones differently. We will walk you through the specific
            numbers for your shortlist rather than quoting statewide averages that rarely match the street you are
            buying on.
          </p>
        </Reveal>
      </Section>

      <Section tone="sand" eyebrow="What we handle" title="Relocation support, coordinated">
        <Reveal>
          <ul className="grid gap-3 sm:grid-cols-2">
            {relocationPage.checklist.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-navy-100 bg-white p-4 text-sm text-navy-700"
              >
                <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-bronze-600" strokeWidth={2.2} />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      <Section id="relocation-enquiry">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5">
            <h2 className="h2">{relocationPage.cta.title}</h2>
            <p className="lead mt-4">{relocationPage.cta.body}</p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <ContactForm defaultInterest="Relocation" />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
