import { ExternalLink, MapPin } from 'lucide-react';

export const companyAddress = "Floors 4–7, Building 5, Donghua Intelligent Manufacturing Park Phase II, Sanwei Community, Hangcheng Subdistrict, Bao'an District, Shenzhen";

type GoogleMapProps = {
  address?: string;
  mapQuery?: string;
  title?: string;
  className?: string;
};

const companyMapQuery = '爱思特力克, 东华智造园二期5栋, 三围社区, 航城街道, 宝安区, 深圳';

export function GoogleMap({ address = companyAddress, mapQuery = companyMapQuery, title = 'Visit TrolinkTek', className = '' }: GoogleMapProps) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY;
  const query = encodeURIComponent(mapQuery);
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;
  const embedUrl = apiKey
    ? `https://www.google.com/maps/embed/v1/place?key=${encodeURIComponent(apiKey)}&q=${query}&zoom=18`
    : `https://www.google.com/maps?q=${query}&z=18&output=embed`;

  return <section className={`overflow-hidden rounded-[14px] border border-white/10 bg-[#0B0D0E] shadow-[0_24px_70px_rgba(0,0,0,.28)] ${className}`} aria-labelledby="company-map-title">
    <div className="flex flex-col gap-4 border-b border-white/10 bg-gradient-to-r from-[#0B0D0E] to-[#171A1B] p-6 text-white sm:flex-row sm:items-center sm:justify-between">
      <div>
        <span className="text-xs font-bold tracking-[.16em] text-[#F5C400]">SHENZHEN · CHINA</span>
        <h2 id="company-map-title" className="mt-2 text-2xl font-bold">{title}</h2>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300"><MapPin className="mr-1 inline text-[#F5C400]" size={16} />{address}</p>
      </div>
      <a className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#F5C400] px-5 py-3 text-sm font-bold text-[#080909]" href={googleMapsUrl} target="_blank" rel="noreferrer">View on Google Maps<ExternalLink size={16} /></a>
    </div>
    <iframe
      title={`Interactive Google Map showing ${address}`}
      src={embedUrl}
      width="100%"
      height="440"
      className="block w-full border-0"
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
    />
  </section>;
}
