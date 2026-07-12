export const locales = ['en', 'fr', 'de', 'ar', 'ko', 'es', 'ru'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  fr: 'Français',
  de: 'Deutsch',
  ar: 'العربية',
  ko: '한국어',
  es: 'Español',
  ru: 'Русский',
};

export const localeDomains: Record<Locale, string> = {
  en: 'www.trolinktek.com',
  fr: 'fr.trolinktek.com',
  de: 'de.trolinktek.com',
  ar: 'ar.trolinktek.com',
  ko: 'ko.trolinktek.com',
  es: 'es.trolinktek.com',
  ru: 'ru.trolinktek.com',
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function stripLocalePrefix(pathname: string) {
  const parts = pathname.split('/').filter(Boolean);
  if (parts[0] && isLocale(parts[0])) parts.shift();
  return `/${parts.join('/')}`.replace(/\/$/, '') || '/';
}

export function localePath(locale: Locale, pathname: string) {
  const clean = stripLocalePrefix(pathname);
  return locale === defaultLocale ? clean : `/${locale}${clean === '/' ? '' : clean}`;
}

export function productionUrl(locale: Locale, pathname: string) {
  return `https://${localeDomains[locale]}${stripLocalePrefix(pathname)}`;
}

export function languageAlternates(pathname: string) {
  return Object.fromEntries([
    ...locales.map((locale) => [locale, productionUrl(locale, pathname)]),
    ['x-default', productionUrl('en', pathname)],
  ]);
}
