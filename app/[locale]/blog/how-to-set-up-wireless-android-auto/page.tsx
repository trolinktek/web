import type { Metadata } from 'next';
import ArticlePage, { metadata as baseMetadata } from '@/app/blog/how-to-set-up-wireless-android-auto/page';
import type { Locale } from '@/i18n/config';
import { localizedMetadata } from '@/i18n/metadata';

export default ArticlePage;
export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return localizedMetadata(baseMetadata, locale, '/blog/how-to-set-up-wireless-android-auto');
}
