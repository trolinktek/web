'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Search, SlidersHorizontal } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { catalogProducts, productCategories } from '@/data/product-catalog';

export function ProductCatalog() {
  const [category, setCategory] = useState('all');
  const [query, setQuery] = useState('');
  const products = useMemo(() => catalogProducts.filter((product) =>
    (category === 'all' || product.category === category)
    && `${product.model} ${product.name}`.toLowerCase().includes(query.toLowerCase())), [category, query]);

  return <>
    <section id="catalog" className="scroll-mt-24 border-b border-line bg-white">
      <div className="container-page py-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-2 text-sm font-semibold text-ink"><SlidersHorizontal className="text-brand" size={18} aria-hidden="true" />Filter by product category</div>
          <label className="relative block w-full lg:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-body" size={18} aria-hidden="true" />
            <span className="sr-only">Search products</span>
            <input className="w-full rounded-lg border border-line py-3 pl-10 pr-4" placeholder="Search by model" value={query} onChange={(event) => setQuery(event.target.value)} />
          </label>
        </div>
        <div className="mt-6 flex gap-2 overflow-x-auto pb-2">
          <button onClick={() => setCategory('all')} className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold ${category === 'all' ? 'border-brand bg-brand text-white' : 'border-line bg-white text-ink'}`}>All Products</button>
          {productCategories.map((item) => <button onClick={() => setCategory(item.id)} className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold ${category === item.id ? 'border-brand bg-brand text-white' : 'border-line bg-white text-ink'}`} key={item.id}>{item.name}</button>)}
        </div>
      </div>
    </section>

    <section className="section-pad bg-soft">
      <div className="container-page">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => <motion.article initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .25, delay: index * .04 }} className="group overflow-hidden rounded-xl border border-line bg-white shadow-soft" key={product.model}>
            <div className="relative aspect-square overflow-hidden bg-white"><Image src={product.image} alt={`${product.model} ${product.name}`} fill className="object-contain p-8 transition duration-300 group-hover:scale-105" sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,400px" /></div>
            <div className="border-t border-line p-6">
              <div className="flex items-center justify-between gap-3"><span className="text-xs font-bold tracking-wide text-brand">MODEL {product.model}</span><span className="rounded-full bg-soft px-3 py-1 text-xs">{product.status}</span></div>
              <h2 className="mt-3 text-xl font-bold text-ink">{product.name}</h2>
              <p className="mt-3 min-h-16 text-sm leading-6">{product.description}</p>
              {product.href ? <Link className="mt-5 inline-flex items-center gap-2 font-semibold text-brand" href={product.href}>View product details<ArrowRight size={17} aria-hidden="true" /></Link> : <span className="mt-5 inline-flex font-semibold text-body">Product page — To Be Confirmed</span>}
            </div>
          </motion.article>)}
        </div>
        {products.length === 0 ? <div className="rounded-xl border border-dashed border-line bg-white p-12 text-center"><h2 className="text-xl font-bold text-ink">No confirmed product data in this category</h2><p className="mt-3">The category is reserved. Product models, images and specifications are pending confirmation.</p></div> : null}
      </div>
    </section>
  </>;
}
