import type { Metadata } from 'next';
import { intentPages } from '@/lib/content/pages';
import { IntentPage } from '@/components/sections/IntentPage';

export const metadata: Metadata = {
  title: 'Sell Your Connecticut Home',
  description:
    'Town-level valuation, staging and repair coordination through the contractor network, and full representation to the closing table.',
};

export default function SellPage() {
  return <IntentPage config={intentPages.sell} interest="Selling a home" />;
}
