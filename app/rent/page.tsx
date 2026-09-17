import type { Metadata } from 'next';
import { intentPages } from '@/lib/content/pages';
import { IntentPage } from '@/components/sections/IntentPage';

export const metadata: Metadata = {
  title: 'Rentals in Connecticut',
  description:
    'Apartments, condos and single family rentals across Connecticut, listed and shown by agents inside a coordinated network.',
};

export default function RentPage() {
  return <IntentPage config={intentPages.rent} interest="Renting" />;
}
