import { Car, Download, MessageCircle, Mic2, PlugZap, RefreshCw, Smartphone, Wifi, Zap } from 'lucide-react';
import type { Product } from '@/data/products/tk-cp01';

const icons = [Smartphone, Car, Wifi, RefreshCw, PlugZap, Mic2, Download, Zap];

export function ProductInfo({ product }: { product: Product }) {
  return <div>
    <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-brand">Product Model: B42</span>
    <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-ink">{product.name}</h1>
    <p className="mt-4 text-lg leading-7 text-body">{product.shortDescription}</p>
    <div className="mt-6 grid grid-cols-2 gap-3">{product.features.map((feature, index) => { const Icon = icons[index]; return <div className="flex items-center gap-2 rounded-lg bg-soft p-3 text-sm font-medium text-ink" key={feature}><Icon className="text-brand" size={19} />{feature}</div>; })}</div>
    <p className="mt-6 leading-7">Designed for vehicles equipped with factory wired CarPlay or wired Android Auto. Product specifications not confirmed by the supplied materials are listed as “To Be Confirmed” in the Technical Specifications section.</p>
    <div className="mt-7 grid gap-3 sm:grid-cols-2">
      <a href="/inquiry" className="rounded-lg bg-brand px-5 py-3 text-center font-semibold text-white">Get Wholesale Quote</a>
      <a href="/inquiry" className="rounded-lg border border-brand px-5 py-3 text-center font-semibold text-brand">Request a Sample</a>
      <a href="https://wa.me/8618576474087" className="flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-5 py-3 font-semibold text-white"><MessageCircle size={19} />Chat on WhatsApp</a>
      <a href="#" className="flex items-center justify-center gap-2 rounded-lg border border-line px-5 py-3 font-semibold text-ink"><Download size={19} />Download Datasheet</a>
    </div>
    <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-body"><span>✓ OEM/ODM Available</span><span>✓ Sample Available</span></div>
  </div>;
}
