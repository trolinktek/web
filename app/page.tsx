import type { Metadata } from 'next';
import { ArrowRight, Check, Factory, FileText, Headphones, PackageCheck, Settings2, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { TopBar } from '@/components/layout/TopBar';

export const metadata: Metadata = {
  title: 'Wireless CarPlay Adapter Manufacturer & OEM/ODM | TrolinkTek',
  description: 'TrolinkTek supplies wireless CarPlay adapters, 4-in-1 adapters and CarPlay AI Box products for distributors, importers and private-label partners.',
  alternates: { canonical: 'https://www.trolinktek.com/' },
  openGraph: {
    title: 'TrolinkTek | CarPlay Adapter Manufacturer & OEM/ODM Supplier',
    description: 'Factory-direct CarPlay product supply and OEM/ODM support for global B2B partners.',
    url: 'https://www.trolinktek.com/',
    type: 'website',
    images: ['/images/home/hero-carplay.png'],
  },
  twitter: { card: 'summary_large_image', title: 'TrolinkTek CarPlay Solutions', description: 'CarPlay products and OEM/ODM support for global B2B channels.' },
};

const capabilities = [
  ['Factory Direct', 'B2B product supply'],
  ['OEM & ODM', 'Flexible customization'],
  ['CarPlay Range', 'Multiple product formats'],
  ['Global Service', 'Distributor and brand support'],
] as const;

const categories = [
  ['B42', 'Wireless CarPlay Adapter', 'A compact adapter category for supported factory wired vehicle systems.', '/images/products/tk-cp01/main-01.webp'],
  ['B424', '4-in-1 CarPlay Adapter', 'A multi-function adapter format for selected channel requirements.', '/images/catalog/product-b424.webp'],
  ['W32', 'CarPlay Android AI Box', 'An Android-powered in-car product category for qualified B2B projects.', '/images/catalog/product-w32.webp'],
] as const;

const models = [
  ['B42', '2-in-1 Wireless CarPlay Adapter', '/images/products/tk-cp01/main-01.webp', '/products/2-in-1-wireless-carplay-adapter'],
  ['B424 4-in-1', '4-in-1 CarPlay Adapter', '/images/catalog/product-b424.webp', '/products#catalog'],
  ['B432', 'Wireless CarPlay Adapter', '/images/catalog/product-b432.webp', '/products#catalog'],
  ['W32', 'CarPlay Android AI Box', '/images/catalog/product-w32.webp', '/products#catalog'],
] as const;

const faqs = [
  ['Which product categories are currently shown on the website?', 'The current product center includes confirmed image and model references for B42, B424, B432 and W32. Detailed specifications are published only when verified.'],
  ['Can TrolinkTek support OEM and ODM projects?', 'Company materials confirm support for logo, packaging, user manual and appearance customization. Model-specific MOQ, lead time and technical scope require sales confirmation.'],
  ['How can I request a sample or wholesale quotation?', 'Use the inquiry page and provide your company, destination market, product category and estimated quantity.'],
  ['How should vehicle compatibility be checked?', 'Provide the vehicle brand, model, year, sales region and original wired system information. Compatibility must be confirmed for the selected product.'],
  ['Are certificate documents available?', 'Certificate names, numbers and applicable product scope are shared only after document verification and qualified buyer review.'],
  ['Where can buyers find setup and sourcing guidance?', 'The TrolinkTek Blog contains product knowledge, sourcing, compatibility and OEM/ODM guidance for global B2B teams.'],
] as const;

export default function HomePage() {
  const structuredData = [
    {
      '@context': 'https://schema.org', '@type': 'Organization', name: 'TrolinkTek', url: 'https://www.trolinktek.com/',
      logo: 'https://www.trolinktek.com/images/logo/trolinktek-logo.svg', email: 'support@trolink.cn', telephone: '+86 18576474087',
      address: { '@type': 'PostalAddress', streetAddress: 'Floors 4–7, Building 5, Donghua Intelligent Manufacturing Park Phase II, Sanwei Community, Hangcheng Subdistrict', addressLocality: 'Shenzhen', addressRegion: "Bao'an District", addressCountry: 'CN' },
    },
    { '@context': 'https://schema.org', '@type': 'WebSite', name: 'TrolinkTek', url: 'https://www.trolinktek.com/' },
  ];

  return <>
    {/* SEO structured data: organization and website identity for search engines. */}
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

    {/* Global site chrome: announcement bar and primary navigation. */}
    <TopBar />
    <Header />
    <main className="bg-[#070808] text-white">
      {/* Hero: primary positioning, visual identity and first conversion actions. */}
      <section className="relative isolate min-h-[620px] overflow-hidden" id="top">
        <Image src="/images/home/hero-carplay.png" alt="Wireless in-car connectivity product shown inside a modern vehicle" fill priority className="-z-20 object-cover object-[64%_center]" sizes="100vw" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="container-page flex min-h-[620px] items-center py-20">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold leading-[1.02] tracking-[-.045em] sm:text-6xl lg:text-[68px]">Wireless CarPlay.<br />Built for your market.</h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">Factory-direct CarPlay and Android Auto product solutions for distributors, brands and global sales channels.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#F5C400] px-6 font-bold text-[#080909]" href="/products">Explore Products<ArrowRight size={18} /></Link><Link className="inline-flex min-h-12 items-center justify-center border border-[#F5C400] px-6 font-bold text-[#F5C400]" href="/inquiry">Start Your Project</Link></div>
          </div>
        </div>
      </section>

      {/* Capability strip: quickly communicates core B2B cooperation strengths. */}
      <section className="border-y border-white/10 bg-gradient-to-r from-[#0B0C0C] via-[#171818] to-[#0B0C0C]" aria-label="TrolinkTek capabilities">
        <div className="container-page grid sm:grid-cols-2 lg:grid-cols-4">{capabilities.map(([title, text]) => <div className="border-b border-white/10 px-6 py-7 sm:border-l sm:last:border-r lg:border-b-0" key={title}><strong className="text-xl">{title}</strong><span className="mt-2 block text-xs uppercase tracking-[.08em] text-slate-400">{text}</span></div>)}</div>
      </section>

      {/* Product categories: introduces the main product families and channel fit. */}
      <section id="products" className="py-20 sm:py-24">
        <div className="container-page"><div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"><h2 className="text-4xl font-bold tracking-[-.04em] sm:text-5xl">Products engineered<br />for your channel.</h2><p className="max-w-xl leading-7 text-slate-400">A focused product range for wholesale, distribution and private-label cooperation. Unconfirmed specifications remain clearly marked.</p></div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">{categories.map(([model, name, description, image]) => <article className="overflow-hidden border border-white/10 bg-[#101111]" key={model}><div className="relative aspect-[16/10] bg-white"><span className="absolute left-5 top-5 z-10 text-xs font-bold tracking-[.12em] text-[#667085]">{model}</span><Image src={image} alt={`${model} ${name}`} fill className="object-contain p-7" sizes="(max-width:1024px) 100vw,400px" /></div><div className="p-6"><h3 className="text-xl font-bold">{name}</h3><p className="mt-3 min-h-14 text-sm leading-6 text-slate-400">{description}</p><Link href="/products#catalog" className="mt-5 inline-flex items-center gap-2 font-bold text-[#F5C400]">View category<ArrowRight size={17} /></Link></div></article>)}</div>
        </div>
      </section>

      {/* Solutions: maps common buyer challenges to TrolinkTek support services. */}
      <section className="border-y border-white/10 bg-[#0D0E0E]" id="solutions">
        <div className="container-page grid min-h-[520px] lg:grid-cols-[.9fr_1.1fr]">
          <div className="py-20 lg:pr-16"><h2 className="text-4xl font-bold leading-[1.05] tracking-[-.04em] sm:text-5xl">Your challenges.<br /><span className="text-[#F5C400]">Our solutions.</span></h2><div className="mt-10 space-y-7">{[
            ['01', 'Product selection', 'Match the product category to the target vehicle system, buyer and channel.'],
            ['02', 'Compatibility communication', 'Collect vehicle and original-system information before making product recommendations.'],
            ['03', 'Private-label planning', 'Confirm branding, packaging and documentation requirements before sample approval.'],
          ].map(([number, title, text]) => <div className="grid grid-cols-[40px_1fr] gap-3" key={number}><span className="font-mono text-sm font-bold text-[#F5C400]">{number}</span><div><h3 className="font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{text}</p></div></div>)}</div></div>
          <div className="relative min-h-[380px] overflow-hidden"><Image src="/images/home/showroom.webp" alt="TrolinkTek product showroom in Shenzhen" fill className="object-cover opacity-65" sizes="(max-width:1024px) 100vw,660px" /><div className="absolute inset-0 bg-gradient-to-r from-[#0D0E0E] to-transparent" /><div className="absolute bottom-8 left-8 right-8 border-t border-white/30 pt-4 text-sm text-slate-300">Product selection and buyer communication support</div></div>
        </div>
      </section>

      {/* OEM & ODM: presents confirmed private-label customization capabilities. */}
      <section id="oem" className="py-20 sm:py-24">
        <div className="container-page"><div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"><h2 className="text-4xl font-bold tracking-[-.04em] sm:text-5xl">Your brand.<br />Our engineering support.</h2><p className="max-w-xl leading-7 text-slate-400">Company materials confirm customization support for logo, packaging, user manual and product appearance. Project scope is confirmed before quotation.</p></div>
          <div className="mt-10 grid overflow-hidden border border-white/10 lg:grid-cols-[.8fr_1.2fr]"><div className="relative min-h-[360px] bg-[radial-gradient(circle_at_center,#292B2B,#090A0A_68%)]"><div className="absolute bottom-0 left-10 grid h-52 w-36 place-items-center border border-white/20 bg-[#161818] text-center font-mono text-sm text-slate-300">YOUR<br />BRAND</div><Image src="/images/products/tk-cp01/main-01.webp" alt="B42 adapter available for qualified customization projects" width={280} height={280} className="absolute right-8 top-1/2 -translate-y-1/2 object-contain" /></div><div className="grid gap-px bg-white/10 sm:grid-cols-2"><div className="bg-[#101111] p-7"><Settings2 className="text-[#F5C400]" /><h3 className="mt-5 text-xl font-bold">Logo & appearance</h3><p className="mt-3 text-sm leading-6 text-slate-400">Confirm brand application and appearance requirements.</p></div><div className="bg-[#101111] p-7"><PackageCheck className="text-[#F5C400]" /><h3 className="mt-5 text-xl font-bold">Retail packaging</h3><p className="mt-3 text-sm leading-6 text-slate-400">Plan packaging and label requirements for the intended channel.</p></div><div className="bg-[#101111] p-7"><FileText className="text-[#F5C400]" /><h3 className="mt-5 text-xl font-bold">User manual</h3><p className="mt-3 text-sm leading-6 text-slate-400">Prepare instructions and supported language requirements.</p></div><div className="bg-[#101111] p-7"><Link href="/inquiry" className="inline-flex h-full items-end gap-2 font-bold text-[#F5C400]">Discuss your OEM project<ArrowRight size={18} /></Link></div></div></div>
        </div>
      </section>

      {/* Quality and trust: explains the verification standard for product claims. */}
      <section id="quality" className="border-y border-white/10 bg-[#0F1010]">
        <div className="container-page grid lg:grid-cols-[.78fr_1.22fr]"><div className="py-20 lg:pr-14"><h2 className="text-4xl font-bold tracking-[-.04em] sm:text-5xl">Quality information buyers can verify.</h2><ul className="mt-8 space-y-4 text-slate-300">{['Product requirement confirmation', 'Sample testing and approval', 'Quality inspection information', 'Verified documents for qualified review'].map((item) => <li className="flex items-center gap-3" key={item}><span className="grid h-5 w-5 place-items-center border border-[#F5C400] text-[#F5C400]"><Check size={13} /></span>{item}</li>)}</ul><p className="mt-7 text-sm leading-6 text-slate-500">Certificate names, numbers and model scope are published only after verification.</p></div><div className="relative min-h-[420px]"><Image src="/images/home/showroom.webp" alt="TrolinkTek showroom and customer reception environment" fill className="object-cover" sizes="(max-width:1024px) 100vw,730px" /></div></div>
      </section>

      {/* Company introduction: combines the representative, showroom and reception. */}
      <section id="about" className="py-20 sm:py-24">
        <div className="container-page grid gap-8 lg:grid-cols-[.72fr_1.1fr_.8fr] lg:items-center"><div className="relative aspect-[4/5] overflow-hidden bg-[#101111]"><Image src="/images/home/founder-kai.webp" alt="TrolinkTek company representative" fill className="object-cover object-top" sizes="(max-width:1024px) 100vw,340px" /></div><div><h2 className="text-4xl font-bold leading-[1.05] tracking-[-.04em] sm:text-5xl">Built by people who understand the product.</h2><p className="mt-6 leading-8 text-slate-400">TrolinkTek focuses on automotive connectivity products and B2B cooperation for distributors, importers, e-commerce sellers and private-label partners.</p><p className="mt-5 border-l-2 border-[#F5C400] pl-5 leading-7 text-slate-300">Product claims, specifications and certification information are released only after confirmation.</p><Link href="/about" className="mt-7 inline-flex items-center gap-2 font-bold text-[#F5C400]">About TrolinkTek<ArrowRight size={18} /></Link></div><div className="relative aspect-[4/5] overflow-hidden"><Image src="/images/home/reception.webp" alt="TrolinkTek company reception in Shenzhen" fill className="object-cover" sizes="(max-width:1024px) 100vw,340px" /></div></div>
      </section>

      {/* Featured models: direct entry points to confirmed models and product pages. */}
      <section className="border-y border-white/10 bg-[#0B0C0C] py-20" aria-labelledby="featured-models-title">
        <div className="container-page"><div className="flex items-center justify-between gap-5"><h2 id="featured-models-title" className="text-4xl font-bold tracking-[-.04em]">Featured models</h2><Link href="/products" className="hidden font-bold text-[#F5C400] sm:block">View all products →</Link></div><div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{models.map(([model, name, image, href]) => <Link href={href} className="border border-white/10 bg-[#101111] p-4" key={model}><div className="relative aspect-square bg-white"><Image src={image} alt={`${model} ${name}`} fill className="object-contain p-5" sizes="(max-width:640px) 100vw,(max-width:1024px) 50vw,300px" /></div><strong className="mt-5 block text-lg">{model}</strong><span className="mt-2 block text-sm text-slate-400">{name}</span></Link>)}</div></div>
      </section>

      {/* Support hub: links visitors to products, knowledge, contact and inquiry. */}
      <section id="support" className="py-20 sm:py-24">
        <div className="container-page"><div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"><h2 className="text-4xl font-bold tracking-[-.04em] sm:text-5xl">Support beyond<br />the product page.</h2><p className="max-w-xl leading-7 text-slate-400">Use the current website routes for product information, setup guidance, compatibility questions and direct B2B contact.</p></div><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[
          [FileText, 'Product Center', 'Confirmed models and clearly marked pending information.', '/products'],
          [Headphones, 'Knowledge Blog', 'Setup, sourcing and compatibility guidance.', '/blog'],
          [ShieldCheck, 'Contact Team', 'Email, WhatsApp and Shenzhen location.', '/contact'],
          [Factory, 'Wholesale Inquiry', 'Submit product and OEM/ODM requirements.', '/inquiry'],
        ].map(([Icon, title, text, href]) => { const ItemIcon = Icon as typeof FileText; return <Link href={href as string} className="border border-white/10 bg-[#101111] p-6" key={title as string}><ItemIcon className="text-[#F5C400]" /><h3 className="mt-5 text-xl font-bold">{title as string}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{text as string}</p><span className="mt-5 inline-flex items-center gap-2 font-bold text-[#F5C400]">Open page<ArrowRight size={17} /></span></Link>; })}</div></div>
      </section>

      {/* Buyer FAQ: answers common sourcing, compatibility and documentation questions. */}
      <section className="border-t border-white/10 bg-[#0B0C0C] py-20">
        <div className="container-page"><div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"><h2 className="text-4xl font-bold tracking-[-.04em] sm:text-5xl">Buyer questions,<br />answered clearly.</h2><p className="max-w-xl leading-7 text-slate-400">Model-specific parameters, MOQ and lead times are confirmed against the selected product and project.</p></div><div className="mt-10 grid border-t border-white/10 md:grid-cols-2">{faqs.map(([question, answer]) => <details className="border-b border-white/10 md:odd:border-r md:odd:border-white/10" key={question}><summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-6 font-bold">{question}<span className="text-xl text-[#F5C400]">+</span></summary><p className="px-5 pb-6 text-sm leading-7 text-slate-400">{answer}</p></details>)}</div></div>
      </section>

      {/* Final CTA: drives qualified buyers to the wholesale inquiry page. */}
      <section className="bg-[#F5C400] py-16 text-[#080909]">
        <div className="container-page flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between"><div><h2 className="text-4xl font-bold tracking-[-.04em]">Bring the right CarPlay product to your market.</h2><p className="mt-4 max-w-2xl text-lg leading-7">Tell us your target product, destination and expected quantity. The team will confirm the information required for the next step.</p></div><Link href="/inquiry" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 bg-[#080909] px-7 font-bold text-white">Get a Quote<ArrowRight size={18} /></Link></div>
      </section>
    </main>
    {/* Global footer: product, resource, company and contact navigation. */}
    <Footer />
  </>;
}
