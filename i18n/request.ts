import { hasLocale } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

const messageLoaders = {
  en: () => import('../locales/en.json'),
  fr: () => import('../locales/fr.json'),
  de: () => import('../locales/de.json'),
} as const;

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;
  const loadMessages = messageLoaders[locale as keyof typeof messageLoaders] ?? messageLoaders.en;
  return { locale, messages: (await loadMessages()).default };
});
