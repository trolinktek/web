'use client';

import { ChevronDown, Menu, X } from 'lucide-react';
import { useState } from 'react';

const groups = [
  { name: 'Products', href: '/products', items: [['Product Center', '/products'], ['Wireless CarPlay Adapter', '/products#catalog'], ['Wireless Android Auto Adapter', '/products#catalog'], ['4-in-1 CarPlay Adapter', '/products#catalog'], ['CarPlay Android AI Box', '/products#catalog'], ['Portable Car Display', '/products#catalog']] },
  { name: 'Solutions', href: '/#solutions', items: [['For Distributors', '/#solutions'], ['For Online Sellers', '/#solutions'], ['For Private Labels', '/#oem'], ['Start a Project', '/inquiry']] },
  { name: 'Support', href: '/#support', items: [['Knowledge Blog', '/blog'], ['Android Auto Setup Guide', '/blog/how-to-set-up-wireless-android-auto'], ['Contact Support', '/contact'], ['Wholesale Inquiry', '/inquiry']] },
] as const;

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState('');
  return <>
    <button className="focus-ring rounded-lg p-2 text-white min-[900px]:hidden" aria-label="Open navigation" onClick={() => setOpen(true)}><Menu /></button>
    {open ? <div className="fixed inset-0 z-[100] bg-black/60" onClick={() => setOpen(false)}>
      <aside className="ml-auto h-full w-[88%] max-w-sm overflow-y-auto bg-white p-6 shadow-2xl" onClick={(event) => event.stopPropagation()}>
        <div className="mb-6 flex items-center justify-between"><b className="text-xl text-ink">TrolinkTek</b><button className="rounded-lg p-2" onClick={() => setOpen(false)} aria-label="Close menu"><X /></button></div>
        <a className="block border-b border-line py-4 font-semibold text-ink" href="/">Home</a>
        {groups.map((group) => <div className="border-b border-line" key={group.name}>
          <button className="flex w-full items-center justify-between py-4 font-semibold text-ink" aria-expanded={expanded === group.name} onClick={() => setExpanded(expanded === group.name ? '' : group.name)}>{group.name}<ChevronDown className={expanded === group.name ? 'rotate-180' : ''} size={18} /></button>
          {expanded === group.name ? <div className="grid gap-3 pb-4 text-sm">{group.items.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}</div> : null}
        </div>)}
        <a className="block border-b border-line py-4 font-semibold text-ink" href="/#oem">OEM &amp; ODM</a>
        <a className="block border-b border-line py-4 font-semibold text-ink" href="/blog">Blog</a>
        <a className="block border-b border-line py-4 font-semibold text-ink" href="/about">About</a>
        <a className="block border-b border-line py-4 font-semibold text-ink" href="/contact">Contact</a>
        <a className="mt-6 block rounded-lg bg-[#F5C400] px-5 py-3 text-center font-semibold text-[#080909]" href="/inquiry">Get Wholesale Quote</a>
      </aside>
    </div> : null}
  </>;
}
