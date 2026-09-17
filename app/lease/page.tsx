import type { Metadata } from 'next';
import { intentPages } from '@/lib/content/pages';
import { IntentPage } from '@/components/sections/IntentPage';

export const metadata: Metadata = {
  title: 'Leasing in Connecticut',
  description:
    'Commercial and residential leasing across Connecticut, with legal review, insurance and property management handled by the same coordinated team.',
};

export default function LeasePage() {
  return <IntentPage config={intentPages.lease} interest="Leasing" />;
}
