import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import './globals.css';
import './mobile-fixes.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.trolinktek.com'),
  title: 'TrolinkTek',
  description: 'CarPlay adapter manufacturer and OEM/ODM supplier.',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const [locale, messages] = await Promise.all([getLocale(), getMessages()]);
  return <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} suppressHydrationWarning><body><NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider></body></html>;
}

