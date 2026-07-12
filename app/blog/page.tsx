import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { BlogIndex } from '@/components/blog/BlogIndex';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { TopBar } from '@/components/layout/TopBar';
import { blogArticles } from '@/data/blog';

export const metadata: Metadata = {
  title: 'CarPlay Insights for Distributors & OEM Buyers | TrolinkTek',
  description: 'Explore practical CarPlay product knowledge, OEM/ODM guidance, supplier sourcing topics and compatibility planning for global B2B buyers.',
  keywords: ['CarPlay adapter blog', 'wireless CarPlay adapter sourcing', 'CarPlay adapter OEM', 'CarPlay distributor guide', 'private label CarPlay adapter'],
  alternates: { canonical: 'https://www.trolinktek.com/blog' },
  openGraph: {
    title: 'TrolinkTek CarPlay Insights',
    description: 'Practical CarPlay product and sourcing knowledge for distributors, importers and private-label partners.',
    url: 'https://www.trolinktek.com/blog',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'TrolinkTek CarPlay Insights', description: 'B2B CarPlay product, sourcing and OEM/ODM knowledge.' },
};

const featured = blogArticles.find((article) => article.featured)!;
const buyerChecks = ['Product and vehicle scope', 'Customization requirements', 'Sample review process', 'Documentation and support'];

export default function BlogPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'TrolinkTek CarPlay Insights',
    url: 'https://www.trolinktek.com/blog',
    description: 'B2B knowledge center for CarPlay product planning, sourcing and OEM/ODM cooperation.',
    hasPart: blogArticles.map((article) => ({ '@type': 'CreativeWork', name: article.title, description: article.summary })),
  };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <TopBar />
    <Header />
    <main>
      <section className="relative isolate overflow-hidden bg-[#071426] text-white">
        <Image src="/images/products/tk-cp01/banner.webp" alt="" fill priority className="-z-20 object-cover opacity-25" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071426] via-[#071426]/95 to-[#0B4C98]/60" />
        <div className="container-page flex min-h-[390px] items-center py-16">
          <div className="max-w-3xl">
            <h1 className="max-w-2xl text-4xl font-bold leading-[1.08] tracking-[-.04em] sm:text-5xl lg:text-[58px]">CarPlay insights for global B2B growth.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">Practical product, sourcing and OEM/ODM knowledge for wholesalers, importers, distributors and marketplace sellers.</p>
            <a href="#articles" className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#F5C400] px-6 py-3 font-bold text-[#080909]">Explore insights<ArrowRight size={18} aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-page overflow-hidden rounded-xl border border-[#E4E7EC] bg-white shadow-[0_12px_36px_rgba(16,24,40,.07)] lg:grid lg:grid-cols-[1.05fr_.95fr]">
          <div className="relative min-h-[320px] bg-[#F7F9FC] lg:min-h-[440px]"><Image src={featured.image} alt={featured.imageAlt} fill priority className="object-cover" sizes="(max-width:1024px) 100vw,630px" /></div>
          <div className="flex flex-col justify-center p-8 sm:p-12">
            <p className="text-xs font-bold uppercase tracking-[.1em] text-[#0877F9]">Featured guide</p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-[-.03em] text-[#101828] sm:text-4xl">{featured.title}</h2>
            <p className="mt-5 leading-7 text-[#475467]">{featured.summary}</p>
            <span className="mt-7 inline-flex w-fit items-center gap-2 rounded-lg border border-[#D0D5DD] px-5 py-3 font-semibold text-[#667085]">Article page — Planned</span>
          </div>
        </div>
      </section>

      <BlogIndex />

      <section className="overflow-hidden bg-white py-16">
        <div className="container-page grid items-center gap-10 rounded-xl border border-[#DCE6F2] bg-gradient-to-br from-[#F7F9FC] to-[#EAF3FF] p-8 sm:p-12 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[#101828] sm:text-4xl">B2B buyer guide: choosing the right CarPlay partner</h2>
            <p className="mt-5 max-w-2xl leading-7">Use a structured review before discussing product selection, samples or a private-label project. Specific supplier claims and product data should always be verified.</p>
            <span className="mt-7 inline-flex rounded-lg bg-[#101828] px-6 py-3 font-semibold text-white">Buyer guide — Planned</span>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1" aria-label="Buyer guide topics">
            {buyerChecks.map((item) => <li className="flex items-center gap-3 rounded-lg border border-white bg-white/80 p-4 font-semibold text-[#344054] shadow-sm" key={item}><CheckCircle2 className="text-[#0877F9]" size={20} aria-hidden="true" />{item}</li>)}
          </ul>
        </div>
      </section>

      <section className="bg-[#102A56] py-12 text-white">
        <div className="container-page flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
          <div><h2 className="text-3xl font-bold">Planning a CarPlay product line?</h2><p className="mt-3 max-w-2xl text-blue-100">Share your target market and confirmed requirements when you are ready to discuss wholesale or OEM/ODM cooperation.</p></div>
          <a href="/inquiry" className="shrink-0 rounded-lg bg-[#F5C400] px-6 py-3 font-bold text-[#080909]">Get a Quote</a>
        </div>
      </section>
    </main>
    <Footer />
  </>;
}
