import { defineRouting } from 'next-intl/routing';
import { defaultLocale, locales } from './config';

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: 'as-needed',
  localeDetection: false,
  localeCookie: { name: 'TROLINK_LOCALE', maxAge: 60 * 60 * 24 * 365, sameSite: 'lax' },
  domains: [
    { domain: 'www.trolinktek.com', defaultLocale: 'en', locales: ['en'] },
    { domain: 'fr.trolinktek.com', defaultLocale: 'fr', locales: ['fr'] },
    { domain: 'de.trolinktek.com', defaultLocale: 'de', locales: ['de'] },
    { domain: 'ar.trolinktek.com', defaultLocale: 'ar', locales: ['ar'] },
    { domain: 'ko.trolinktek.com', defaultLocale: 'ko', locales: ['ko'] },
    { domain: 'es.trolinktek.com', defaultLocale: 'es', locales: ['es'] },
    { domain: 'ru.trolinktek.com', defaultLocale: 'ru', locales: ['ru'] },
  ],
});

