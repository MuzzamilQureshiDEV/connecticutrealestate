import type { Metadata } from 'next';
import { commercialPage } from '@/lib/content/pages';
import { properties } from '@/lib/content/properties';
import { site } from '@/lib/site';
import { telHref } from '@/lib/utils';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icons';
import { Reveal, RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { PageHero } from '@/components/sections/PageHero';
import { PropertyCard } from '@/components/cards/PropertyCard';
import { ContactForm } from '@/components/forms/ContactForm';

export const metadata: Metadata = {
  title: 'Commercial Real Estate',
  description:
    'Connecticut commercial brokerage, capital advisory, tenant representation and property management across office, retail, industrial, multi-family and land.',
};

export default function CommercialPage() {
  const commercialListings = properties.filter((property) => property.type === 'Commercial');

  return (
    <>
      <PageHero
        tone="navy"
        eyebrow={commercialPage.eyebrow}
        title={commercialPage.title}
        lead={commercialPage.lead}
        actions={
          <>
            <Button href="#commercial-enquiry" variant="light" icon="arrowRight">
              Discuss a requirement
            </Button>
            <Button
              href={telHref(site.textKeyword.number)}
              variant="outline"
              className="border-white/30 bg-transparent text-white hover:border-white hover:bg-white/10"
              icon="phone"
              iconPosition="left"
            >
              Text &ldquo;{site.textKeyword.keyword}&rdquo; to {site.textKeyword.number}
            </Button>
          </>
        }
      />

      <Section eyebrow="Services" title="What we handle on the commercial side">
        <RevealGroup className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {commercialPage.services.map((service) => (
            <RevealItem key={service.title} className="h-full">
              <Card interactive className="group h-full p-6">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy-50 text-navy-900 transition-colors duration-300 group-hover:bg-navy-900 group-hover:text-bronze-300">
                  <Icon name={service.icon} className="h-6 w-6" strokeWidth={1.6} />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-navy-900">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-500">{service.description}</p>
              </Card>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Section tone="sand" eyebrow="Asset types" title="Property classes we work across">
        <Reveal>
          <ul className="flex flex-wrap gap-2.5">
            {commercialPage.assetTypes.map((type) => (
              <li key={type} className="chip text-sm">
                {type}
              </li>
            ))}
          </ul>
        </Reveal>

        {commercialListings.length > 0 && (
          <RevealGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {commercialListings.map((property) => (
              <RevealItem key={property.id} className="h-full">
                <PropertyCard property={property} />
              </RevealItem>
            ))}
          </RevealGroup>
        )}
      </Section>

      {/* CLIENT: replace the placeholder case studies in lib/content/pages.ts
          with real transactions and measured outcomes. */}
      <Section
        eyebrow="Case studies"
        title="Selected work"
        intro="Representative mandates across the commercial portfolio."
      >
        <RevealGroup className="grid gap-5 lg:grid-cols-3">
          {commercialPage.caseStudies.map((study) => (
            <RevealItem key={study.title} className="h-full">
              <Card className="h-full p-6">
                <p className="eyebrow">{study.location}</p>
                <h3 className="mt-3 font-display text-lg font-bold text-navy-900">{study.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-500">{study.summary}</p>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-bronze-600">{study.metric}</p>
              </Card>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Section id="commercial-enquiry" tone="sand">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5">
            <h2 className="h2">Tell us about the asset or the requirement</h2>
            <p className="lead mt-4">
              Acquisition, disposition, leasing or management — the same coordinated bench handles the legal, financing
              and construction side of it.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <ContactForm defaultInterest="Commercial property" />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
