import type { Metadata } from 'next';
import ProductsPage, { metadata as baseMetadata } from '@/app/products/page';
import type { Locale } from '@/i18n/config';
import { localizedMetadata } from '@/i18n/metadata';

export default ProductsPage;
export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return localizedMetadata(baseMetadata, locale, '/products');
}
