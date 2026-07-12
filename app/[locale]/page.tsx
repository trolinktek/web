import type { Metadata } from 'next';
import HomePage, { metadata as baseMetadata } from '@/app/page';
import type { Locale } from '@/i18n/config';
import { localizedMetadata } from '@/i18n/metadata';

export default HomePage;
export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return localizedMetadata(baseMetadata, locale, '/');
}
