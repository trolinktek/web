'use client';

import { motion } from 'framer-motion';
import { BookOpen, Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { blogArticles, blogCategories } from '@/data/blog';

export function BlogIndex() {
  const [category, setCategory] = useState('All Topics');
  const [query, setQuery] = useState('');
  const articles = useMemo(() => blogArticles.filter((article) => {
    const matchesCategory = category === 'All Topics' || article.category === category;
    const matchesQuery = `${article.title} ${article.summary}`.toLowerCase().includes(query.trim().toLowerCase());
    return matchesCategory && matchesQuery && !article.featured;
  }), [category, query]);

  return <section id="articles" className="scroll-mt-24 bg-[#F7F9FC] py-16">
    <div className="container-page">
      <div className="flex flex-col gap-5 border-b border-[#E4E7EC] pb-7 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-[#101828] sm:text-4xl">Explore the knowledge library</h2>
          <p className="mt-3 max-w-2xl leading-7">Practical topics for product planning, supplier evaluation and global channel development.</p>
        </div>
        <label className="relative block w-full lg:w-80">
          <span className="sr-only">Search blog articles</span>
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#667085]" size={18} aria-hidden="true" />
          <input className="w-full rounded-lg border border-[#D0D5DD] bg-white py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#0877F9] focus:ring-4 focus:ring-[#0877F9]/10" placeholder="Search insights" value={query} onChange={(event) => setQuery(event.target.value)} />
        </label>
      </div>

      <div className="mt-7 flex gap-2 overflow-x-auto pb-2" aria-label="Blog categories">
        {['All Topics', ...blogCategories].map((item) => <button key={item} type="button" aria-pressed={category === item} onClick={() => setCategory(item)} className={`shrink-0 rounded-lg border px-4 py-2.5 text-sm font-semibold transition ${category === item ? 'border-[#0877F9] bg-[#0877F9] text-white' : 'border-[#D0D5DD] bg-white text-[#344054] hover:border-[#0877F9]'}`}>{item}</button>)}
      </div>

      <div className="mt-9 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, index) => <motion.article key={article.slug} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .25, delay: index * .035 }} className="group overflow-hidden rounded-xl border border-[#E4E7EC] bg-white shadow-[0_8px_24px_rgba(16,24,40,.05)]">
          <div className="relative aspect-[16/10] overflow-hidden bg-white">
            <Image src={article.image} alt={article.imageAlt} fill className="object-contain p-4 transition duration-500 group-hover:scale-[1.035]" sizes="(max-width:768px) 100vw,(max-width:1024px) 50vw,400px" />
          </div>
          <div className="border-t border-[#E4E7EC] p-6">
            <p className="text-xs font-bold uppercase tracking-[.08em] text-[#0877F9]">{article.category}</p>
            <h3 className="mt-3 text-xl font-bold leading-7 text-[#101828]">{article.title}</h3>
            <p className="mt-3 text-sm leading-6 text-[#475467]">{article.summary}</p>
            {article.href ? <Link href={article.href} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0877F9]"><BookOpen size={16} aria-hidden="true" />Read guide</Link> : <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#667085]"><BookOpen size={16} aria-hidden="true" />Article page — Planned</span>}
          </div>
        </motion.article>)}
      </div>

      {articles.length === 0 ? <div className="mt-9 rounded-xl border border-dashed border-[#D0D5DD] bg-white px-6 py-14 text-center"><h3 className="text-xl font-bold text-[#101828]">No matching article topics</h3><p className="mt-2">Try another topic or remove the search term.</p></div> : null}
    </div>
  </section>;
}
