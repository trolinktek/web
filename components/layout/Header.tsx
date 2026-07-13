'use client';

import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { MobileMenu } from './MobileMenu';

type NavItem = { label: string; href: string; description?: string };

const productLinks: NavItem[] = [
  { label: 'Product Center', href: '/products', description: 'Browse confirmed categories and models.' },
  { label: 'Wireless CarPlay Adapter', href: '/products#catalog' },
  { label: 'Wireless Android Auto Adapter', href: '/products#catalog' },
  { label: '4-in-1 CarPlay Adapter', href: '/products#catalog' },
  { label: 'CarPlay Android AI Box', href: '/products#catalog' },
  { label: 'Portable Car Display', href: '/products#catalog' },
];

const solutionLinks: NavItem[] = [
  { label: 'For Distributors', href: '/#solutions' },
  { label: 'For Online Sellers', href: '/#solutions' },
  { label: 'For Private Labels', href: '/#oem' },
  { label: 'Start a Project', href: '/inquiry' },
];

const supportLinks: NavItem[] = [
  { label: 'Knowledge Blog', href: '/blog' },
  { label: 'Android Auto Setup Guide', href: '/blog/how-to-set-up-wireless-android-auto' },
  { label: 'Contact Support', href: '/contact' },
  { label: 'Wholesale Inquiry', href: '/inquiry' },
];

function Dropdown({ label, items, href }: { label: string; items: NavItem[]; href: string }) {
  return <div className="group relative flex h-full items-center">
    <a className="flex items-center gap-1 font-semibold text-white" href={href}>{label}<ChevronDown size={14} aria-hidden="true" /></a>
    <div className="invisible absolute left-1/2 top-[67px] z-30 w-72 -translate-x-1/2 translate-y-2 rounded-[14px] border border-white/10 bg-[#111313]/95 p-3 opacity-0 shadow-2xl backdrop-blur-2xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
      {items.map((item) => <a className="block rounded-lg px-3 py-2.5 text-sm text-slate-300 hover:bg-white/5 hover:text-[#F5C400]" key={item.label} href={item.href}><b className="font-semibold">{item.label}</b>{item.description ? <span className="mt-1 block text-xs leading-5 text-slate-500">{item.description}</span> : null}</a>)}
    </div>
  </div>;
}

export function Header() {
  return <header className="sticky top-0 z-50 h-[76px] border-b border-white/10 bg-[#080909]/85 shadow-xl backdrop-blur-2xl">
    <div className="container-page flex h-full items-center justify-between gap-5">
      <a href="/" className="flex shrink-0 items-center rounded-lg bg-white px-3 py-2 shadow-sm" aria-label="TrolinkTek home">
        <Image src="/images/logo/trolinktek-original.png" alt="TrolinkTek" width={205} height={24} priority className="h-auto w-[180px] sm:w-[205px]" />
      </a>
      <nav className="hidden h-full flex-1 items-center justify-center gap-3 text-xs min-[900px]:flex min-[1100px]:gap-5 min-[1100px]:text-[13px]" aria-label="Main navigation">
        <a className="font-semibold text-white" href="/">Home</a>
        <Dropdown label="Products" items={productLinks} href="/products" />
        <Dropdown label="Solutions" items={solutionLinks} href="/#solutions" />
        <a className="font-semibold text-white" href="/#oem">OEM &amp; ODM</a>
        <Dropdown label="Support" items={supportLinks} href="/#support" />
        <a className="font-semibold text-white" href="/blog">Blog</a>
        <a className="font-semibold text-white" href="/about">About</a>
        <a className="font-semibold text-white" href="/contact">Contact</a>
      </nav>
      <div className="flex shrink-0 items-center gap-2"><a className="hidden rounded-lg bg-[#F5C400] px-5 py-3 text-sm font-bold text-[#080808] min-[1200px]:block" href="/inquiry">Get Wholesale Quote</a><MobileMenu /></div>
    </div>
  </header>;
}
