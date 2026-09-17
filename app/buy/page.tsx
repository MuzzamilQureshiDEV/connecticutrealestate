import type { Metadata } from 'next';
import { intentPages } from '@/lib/content/pages';
import { IntentPage } from '@/components/sections/IntentPage';

export const metadata: Metadata = {
  title: 'Buy a Home in Connecticut',
  description:
    'Search Connecticut homes for sale across all eight counties, with financing, inspection and legal coordinated by one team from offer through closing.',
};

export default function BuyPage() {
  return <IntentPage config={intentPages.buy} interest="Buying a home" />;
}
