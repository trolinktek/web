import type { Metadata } from 'next';
import Image from 'next/image';
import { Factory, Globe2, PackageCheck, Settings2 } from 'lucide-react';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { TopBar } from '@/components/layout/TopBar';
import { ProductCatalog } from '@/components/product-center/ProductCatalog';
import { productCategories } from '@/data/product-catalog';

export const metadata: Metadata = {
  title: 'CarPlay Products for Wholesale & OEM | TrolinkTek',
  description: 'Explore confirmed TrolinkTek wireless CarPlay adapters, 4-in-1 adapters and CarPlay AI Box models for wholesale and OEM/ODM cooperation.',
  alternates: { canonical: 'https://www.trolinktek.com/products' },
  openGraph: {
    title: 'TrolinkTek CarPlay Product Center',
    description: 'CarPlay product models for distributors, importers and private-label partners.',
    url: 'https://www.trolinktek.com/products',
    type: 'website',
  },
};

const benefits = [
  [Factory, 'Factory-Direct Cooperation'],
  [Settings2, 'OEM/ODM Support'],
  [PackageCheck, 'Channel-Ready Customization'],
  [Globe2, 'Global B2B Service'],
] as const;

export default function ProductsPage() {
  return <>
    <TopBar />
    <Header />
    <main>
      <section className="relative isolate min-h-[360px] overflow-hidden bg-[#101828] text-white">
        <Image src="/images/products/tk-cp01/banner.webp" alt="" fill priority className="-z-10 object-cover opacity-20" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#101828] via-[#101828]/90 to-[#0877F9]/45" />
        <div className="container-page flex min-h-[360px] flex-col justify-center">
          <p className="text-sm font-bold text-[#F5C400]">TROLINKTEK PRODUCT CENTER</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">CarPlay products built for global B2B channels.</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">Browse confirmed product models for wholesale, distribution and OEM/ODM cooperation. Unconfirmed product information is clearly marked.</p>
        </div>
      </section>

      <section className="bg-white py-14" aria-label="Product categories">
        <div className="container-page grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((category) => <a className="rounded-xl border border-line p-6 transition hover:-translate-y-1 hover:border-brand hover:shadow-soft" href="#catalog" key={category.id}>
            <span className="text-xs font-bold text-brand">PRODUCT CATEGORY</span>
            <h2 className="mt-3 text-xl font-bold text-ink">{category.name}</h2>
            <p className="mt-3 text-sm leading-6">{category.description}</p>
          </a>)}
        </div>
      </section>

      <ProductCatalog />

      <section className="section-pad bg-[#102A56] text-white">
        <div className="container-page">
          <div className="grid gap-5 md:grid-cols-4">
            {benefits.map(([Icon, label]) => <div className="rounded-xl border border-white/15 bg-white/5 p-6" key={label}>
              <Icon className="text-[#F5C400]" aria-hidden="true" />
              <h2 className="mt-5 font-bold">{label}</h2>
            </div>)}
          </div>
          <div className="mt-10 flex flex-col gap-5 border-t border-white/15 pt-8 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-bold">Need a product for your market?</h2>
              <p className="mt-3 text-blue-100">OEM requirements, target models and confirmed specifications can be discussed after product data review.</p>
            </div>
            <a href="/inquiry" className="shrink-0 rounded-lg bg-[#F5C400] px-6 py-3 font-bold text-[#080909]">Get a Quote</a>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>;
}
