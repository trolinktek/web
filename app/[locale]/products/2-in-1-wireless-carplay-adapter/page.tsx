import type { Metadata } from 'next';
import ProductPage, { metadata as baseMetadata } from '@/app/products/2-in-1-wireless-carplay-adapter/page';
import type { Locale } from '@/i18n/config';
import { localizedMetadata } from '@/i18n/metadata';

export default ProductPage;
export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return localizedMetadata(baseMetadata, locale, '/products/2-in-1-wireless-carplay-adapter');
}
