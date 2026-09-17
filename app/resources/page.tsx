import type { Metadata } from 'next';
import { resourceGroups } from '@/lib/content/resources';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { RevealGroup, RevealItem } from '@/components/ui/Reveal';
import { PageHero } from '@/components/sections/PageHero';
import { ResourceLinkCard } from '@/components/cards/InfoCards';

export const metadata: Metadata = {
  title: 'Connecticut Real Estate Resources',
  description:
    'A directory of Connecticut real estate tools: property search by type, financing and rebates, relocation and town guides, market education and official state resources.',
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Real estate resources & hyperlinked tools"
        lead="Everything in one place — inventory by property type, financing routes, relocation guidance, market education and the official state sources worth trusting."
        actions={
          <Button href="/contact" icon="arrowRight">
            Ask us directly
          </Button>
        }
      />

      <Section>
        {/* CLIENT: add a link by appending to any `links` array in
            lib/content/resources.ts — no component changes needed. */}
        <RevealGroup className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {resourceGroups.map((group) => (
            <RevealItem key={group.title} className="h-full">
              <ResourceLinkCard group={group} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <Section tone="sand" align="center" title="Cannot find what you need?" intro="Ask and we will point you at the right source — or the right person.">
        <div className="flex justify-center">
          <Button href="/contact" icon="arrowRight">
            Contact the team
          </Button>
        </div>
      </Section>
    </>
  );
}
