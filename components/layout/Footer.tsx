import Image from 'next/image';

const columns = [
  { title: 'Products', links: [['Product Center', '/products'], ['Wireless CarPlay Adapter', '/products#catalog'], ['4-in-1 CarPlay Adapter', '/products#catalog'], ['Android AI Box', '/products#catalog']] },
  { title: 'Resources', links: [['CarPlay Insights', '/blog'], ['Android Auto Setup Guide', '/blog/how-to-set-up-wireless-android-auto'], ['Contact Support', '/contact'], ['Wholesale Inquiry', '/inquiry']] },
  { title: 'Company', links: [['OEM & ODM', '/#oem'], ['Solutions', '/#solutions'], ['About TrolinkTek', '/about'], ['Contact', '/contact']] },
] as const;

export function Footer() {
  return <footer className="bg-[#0B1424] text-slate-300">
    <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.2fr_repeat(3,1fr)]">
      <div><a href="/" className="inline-flex rounded-lg bg-white px-3 py-2 shadow-sm" aria-label="TrolinkTek home"><Image src="/images/logo/trolinktek-original.png" width={220} height={26} alt="TrolinkTek" className="h-auto w-[220px]" /></a><p className="mt-5 max-w-xs text-sm leading-6">CarPlay product supply and flexible OEM/ODM support for global B2B partners.</p><p className="mt-5 text-sm"><a href="mailto:sales03@trolinkiot.com">sales03@trolinkiot.com</a><br /><a className="mt-2 inline-block" href="https://wa.me/8618665350398">WhatsApp: +86 18665350398</a></p></div>
      {columns.map((column) => <div key={column.title}><h3 className="mb-5 font-semibold text-white">{column.title}</h3>{column.links.map(([label, href]) => <a className="mb-3 block text-sm hover:text-white" href={href} key={label}>{label}</a>)}</div>)}
    </div>
    <div className="border-t border-white/10"><div className="container-page flex flex-col gap-3 py-5 text-xs sm:flex-row sm:justify-between"><span>© 2026 TrolinkTek. All Rights Reserved.</span><span>Privacy Policy　 Terms &amp; Conditions　 Cookie Policy</span></div></div>
  </footer>;
}
