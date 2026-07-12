import type { Metadata } from 'next';
import InquiryPage, { metadata as baseMetadata } from '@/app/inquiry/page';
import type { Locale } from '@/i18n/config';
import { localizedMetadata } from '@/i18n/metadata';

export default InquiryPage;
export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return localizedMetadata(baseMetadata, locale, '/inquiry');
}
