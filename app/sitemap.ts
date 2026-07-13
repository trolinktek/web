import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: 'https://www.trolinktek.com/', lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: 'https://www.trolinktek.com/products', lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: 'https://www.trolinktek.com/blog', lastModified, changeFrequency: 'weekly', priority: 0.8 },
    { url: 'https://www.trolinktek.com/blog/how-to-set-up-wireless-android-auto', lastModified, changeFrequency: 'monthly', priority: 0.75 },
    { url: 'https://www.trolinktek.com/products/2-in-1-wireless-carplay-adapter', lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://www.trolinktek.com/about', lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: 'https://www.trolinktek.com/contact', lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://www.trolinktek.com/inquiry', lastModified, changeFrequency: 'monthly', priority: 0.8 },
  ];
}
