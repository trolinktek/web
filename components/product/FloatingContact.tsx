'use client';

import { ArrowUp, Mail, MessageCircle } from 'lucide-react';

export function FloatingContact() {
  return <>
    <div className="fixed bottom-6 right-6 z-40 hidden gap-2 lg:grid"><a aria-label="WhatsApp" className="grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white shadow-lg" href="https://wa.me/8618576474087"><MessageCircle /></a><a aria-label="Email" className="grid h-12 w-12 place-items-center rounded-full bg-brand text-white shadow-lg" href="mailto:support@trolink.cn"><Mail /></a><button aria-label="Back to top" className="grid h-12 w-12 place-items-center rounded-full bg-ink text-white shadow-lg" onClick={() => scrollTo({ top: 0, behavior: 'smooth' })}><ArrowUp /></button></div>
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-line bg-white p-2 lg:hidden"><a className="rounded-lg bg-[#25D366] p-3 text-center font-semibold text-white" href="https://wa.me/8618576474087">WhatsApp</a><a className="rounded-lg bg-brand p-3 text-center font-semibold text-white" href="/inquiry">Get Quote</a></div>
  </>;
}
