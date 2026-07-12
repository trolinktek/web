import type { Metadata } from 'next';
import type { Locale } from './config';
import { languageAlternates, productionUrl } from './config';

export function localizedMetadata(base: Metadata, locale: Locale, pathname: string): Metadata {
  const canonical = productionUrl(locale, pathname);
  return {
    ...base,
    alternates: {
      ...base.alternates,
      canonical,
      languages: languageAlternates(pathname),
    },
    openGraph: base.openGraph ? { ...base.openGraph, url: canonical } : undefined,
  };
}
