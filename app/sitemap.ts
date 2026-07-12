import type { MetadataRoute } from 'next';
import { languageAlternates, locales, productionUrl } from '@/i18n/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const pages = [
    { pathname: '/', changeFrequency: 'weekly', priority: 1 },
    { pathname: '/products', changeFrequency: 'weekly', priority: 1 },
    { pathname: '/products/2-in-1-wireless-carplay-adapter', changeFrequency: 'monthly', priority: 0.9 },
    { pathname: '/blog', changeFrequency: 'weekly', priority: 0.8 },
    { pathname: '/blog/how-to-set-up-wireless-android-auto', changeFrequency: 'monthly', priority: 0.75 },
    { pathname: '/about', changeFrequency: 'monthly', priority: 0.6 },
    { pathname: '/contact', changeFrequency: 'monthly', priority: 0.7 },
    { pathname: '/inquiry', changeFrequency: 'monthly', priority: 0.8 },
  ] as const;

  return pages.flatMap((page) => locales.map((locale) => ({
    url: productionUrl(locale, page.pathname),
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
    alternates: { languages: languageAlternates(page.pathname) },
  })));
}
