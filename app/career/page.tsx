import type { Metadata } from 'next';
import { careerPage } from '@/lib/content/pages';
import { site } from '@/lib/site';
import { telHref } from '@/lib/utils';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Icon } from '@/components/ui/Icons';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { PageHero } from '@/components/sections/PageHero';
import { ContactForm } from '@/components/forms/ContactForm';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join the Connecticut Real Estate Center network — agents, lenders, inspectors, attorneys, contractors, insurance advisors and property managers.',
};

export default function CareerPage() {
  return (
    <>
      <PageHero
        eyebrow={careerPage.eyebrow}
        title={careerPage.title}
        lead={careerPage.lead}
        actions={
          <>
            <Button href="#apply" icon="arrowRight">
              Apply now
            </Button>
            <Button href={telHref(site.recruiter.phone)} variant="outline" icon="phone" iconPosition="left">
              {site.recruiter.phone}
            </Button>
          </>
        }
      />

      <Section eyebrow="Why join" title="What is different inside a coordinated network">
        <RevealGroup className="grid gap-5 sm:grid-cols-2">
          {careerPage.reasons.map((reason) => (
            <RevealItem key={reason.title} className="h-full">
              <Card className="h-full p-6">
                <h3 className="font-display text-lg font-bold text-navy-900">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-500">{reason.description}</p>
              </Card>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Section tone="sand" eyebrow="Roles" title="Who we are looking for">
        <Reveal>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {careerPage.roles.map((role) => (
              <li
                key={role}
                className="flex items-center gap-3 rounded-xl border border-navy-100 bg-white p-4 text-sm font-medium text-navy-800"
              >
                <Icon name="check" className="h-4 w-4 shrink-0 text-bronze-600" strokeWidth={2.2} />
                {role}
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      <Section id="apply">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5">
            <h2 className="h2">{careerPage.cta.title}</h2>
            <p className="lead mt-4">{careerPage.cta.body}</p>

            <div className="mt-8 rounded-2xl border border-navy-100 bg-sand-50 p-6">
              <p className="text-sm font-semibold text-navy-900">{site.recruiter.name}</p>
              <p className="mt-1 text-sm text-navy-500">{site.recruiter.title}</p>
              <a
                href={telHref(site.recruiter.phone)}
                className="mt-3 inline-block font-display text-xl font-bold text-navy-900 transition-colors hover:text-bronze-600"
              >
                {site.recruiter.phone}
              </a>
              {/* CLIENT: replace with the real careers inbox. */}
              <a
                href={`mailto:${site.careersEmail}`}
                className="mt-2 block text-sm text-navy-500 transition-colors hover:text-bronze-600"
              >
                {site.careersEmail}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <ContactForm
              title="Tell us about yourself"
              note="Include your licence status and the towns you work, and our recruiter will follow up."
              defaultInterest="Joining the network"
            />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
