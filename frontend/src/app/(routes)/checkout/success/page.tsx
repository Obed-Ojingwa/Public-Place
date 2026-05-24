import { Metadata } from 'next';
import CheckoutSuccessPageClient from '@/components/pages/CheckoutSuccessPageClient';

export const metadata: Metadata = {
  title: 'Payment Successful | NerdPace',
  description: 'Your payment has been processed successfully',
};

export default function CheckoutSuccessPage() {
  return <CheckoutSuccessPageClient />;
}
