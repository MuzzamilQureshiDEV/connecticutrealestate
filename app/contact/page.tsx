import type { Metadata } from 'next';
import { contactPage } from '@/lib/content/pages';
import { site } from '@/lib/site';
import { telHref } from '@/lib/utils';
import { Section } from '@/components/ui/Section';
import { Icon } from '@/components/ui/Icons';
import { Reveal } from '@/components/ui/Reveal';
import { PageHero } from '@/components/sections/PageHero';
import { ContactForm } from '@/components/forms/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Reach the Connecticut Real Estate Center: call or text ${site.broker.name} on ${site.broker.cell}, or send an enquiry and the right specialists will be brought in.`,
};

const contactMethods = [
  {
    icon: 'phone' as const,
    label: "Steve's cell — call or text",
    value: site.broker.cell,
    href: telHref(site.broker.cell),
    note: `For fastest service, text "${site.textKeyword.keyword}".`,
  },
  {
    icon: 'phone' as const,
    label: 'Office',
    value: site.office.phone,
    href: telHref(site.office.phone),
  },
  {
    icon: 'mail' as const,
    label: 'Email',
    value: site.email,
    href: `mailto:${site.email}`,
    note: 'CLIENT: replace with the real inbox.',
  },
  {
    icon: 'pin' as const,
    label: 'Office address',
    value: site.office.full,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow={contactPage.eyebrow} title={contactPage.title} lead={contactPage.lead} />

      <Section>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Contact details */}
          <div className="lg:col-span-5">
            <ul className="space-y-5">
              {contactMethods.map((method) => (
                <li key={method.label}>
                  <Reveal delay={0.04} className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy-50 text-navy-900">
                      <Icon name={method.icon} className="h-5 w-5" strokeWidth={1.7} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-navy-900">{method.label}</p>
                      {method.href ? (
                        <a
                          href={method.href}
                          className="mt-1 inline-block text-navy-600 transition-colors hover:text-bronze-600"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-navy-600">{method.value}</p>
                      )}
                      {method.note && <p className="mt-1 text-xs text-navy-400">{method.note}</p>}
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>

            <Reveal delay={0.15}>
              <div className="mt-8 rounded-2xl border border-navy-100 bg-sand-50 p-6">
                <p className="text-sm font-semibold text-navy-900">What happens next</p>
                <p className="mt-2 text-sm leading-relaxed text-navy-500">
                  Your enquiry reaches one person, not a queue. Steve routes it to whichever specialists it needs —
                  brokerage, financing, legal, inspection or construction — and stays involved until it is closed out.
                </p>
              </div>
            </Reveal>

            {/*
              CLIENT: when the first physical center opens, drop the embed here:
              <iframe title="Office location" src="https://www.google.com/maps/embed?pb=..."
                      className="mt-5 h-64 w-full rounded-2xl border border-navy-100" loading="lazy" />
            */}
            <Reveal delay={0.2}>
              <div className="mt-5 grid h-56 place-items-center rounded-2xl border border-dashed border-navy-200 bg-white text-center">
                <div className="px-6">
                  <Icon name="pin" className="mx-auto h-7 w-7 text-navy-300" strokeWidth={1.4} />
                  <p className="mt-3 text-sm font-semibold text-navy-700">Physical centers coming</p>
                  <p className="mt-1 text-xs text-navy-400">Map embed placeholder — see the comment in this file.</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <ContactForm
              title="Send an enquiry"
              note="Tell us what you are trying to do and we will come back quickly."
            />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
