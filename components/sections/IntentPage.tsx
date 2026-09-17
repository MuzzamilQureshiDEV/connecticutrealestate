import type { ListingStatus } from '@/lib/types';
import { properties } from '@/lib/content/properties';
import { site } from '@/lib/site';
import { telHref } from '@/lib/utils';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { PageHero } from '@/components/sections/PageHero';
import { PropertySearch } from '@/components/property/PropertySearch';
import { ContactForm } from '@/components/forms/ContactForm';

type IntentConfig = {
  eyebrow: string;
  title: string;
  lead: string;
  formTitle: string;
  formNote: string;
  statuses: readonly ListingStatus[];
};

/**
 * Shared layout for Buy / Rent / Sell / Lease. Each route supplies its own
 * copy and the listing statuses it should show, so the four pages stay in sync
 * while reading differently.
 */
export function IntentPage({ config, interest }: { config: IntentConfig; interest: string }) {
  return (
    <>
      <PageHero
        eyebrow={config.eyebrow}
        title={config.title}
        lead={config.lead}
        actions={
          <>
            <Button href="#enquire" icon="arrowRight">
              {config.formTitle}
            </Button>
            <Button href={telHref(site.broker.cell)} variant="outline" icon="phone" iconPosition="left">
              Call / Text Steve
            </Button>
          </>
        }
      />

      {/* CLIENT: listings are placeholders — swap `properties` for your live
          MLS/IDX feed (see the README). This intro is visitor-facing copy, so
          keep build notes out of it. */}
      <Section
        eyebrow="Listings"
        title="Browse what is available"
        intro="Filter by county, property type, beds, baths and budget."
      >
        <PropertySearch properties={properties} statuses={config.statuses} />
      </Section>

      <Section id="enquire" tone="sand">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5">
            <h2 className="h2">{config.formTitle}</h2>
            <p className="lead mt-4">{config.formNote}</p>

            <div className="mt-8 rounded-2xl border border-navy-100 bg-white p-6">
              <p className="text-sm font-semibold text-navy-900">Prefer to talk?</p>
              <a
                href={telHref(site.broker.cell)}
                className="mt-2 inline-block font-display text-2xl font-bold text-navy-900 transition-colors hover:text-bronze-600"
              >
                {site.broker.cell}
              </a>
              <p className="mt-2 text-sm text-navy-500">
                {site.broker.name}, {site.broker.title} — call or text.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <ContactForm defaultInterest={interest} />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
