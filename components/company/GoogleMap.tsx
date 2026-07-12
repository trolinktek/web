import{ExternalLink,MapPin}from'lucide-react';

export const companyAddress="Floors 4–7, Building 5, Donghua Intelligent Manufacturing Park Phase II, Sanwei Community, Hangcheng Subdistrict, Bao'an District, Shenzhen";

type GoogleMapProps={address?:string;title?:string;className?:string};

export function GoogleMap({address=companyAddress,title='Visit TrolinkTek',className=''}:GoogleMapProps){
  const apiKey=process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY;
  const query=encodeURIComponent(address);
  const googleMapsUrl=`https://www.google.com/maps/search/?api=1&query=${query}`;
  const openStreetMapUrl=`https://www.openstreetmap.org/search?query=${query}`;
  const embedUrl=apiKey?`https://www.google.com/maps/embed/v1/place?key=${encodeURIComponent(apiKey)}&q=${query}&zoom=14`:null;
  return <section className={`overflow-hidden rounded-[14px] border border-white/10 bg-[#0B0D0E] shadow-[0_24px_70px_rgba(0,0,0,.28)] ${className}`} aria-labelledby="company-map-title">
    <div className="flex flex-col gap-4 border-b border-white/10 bg-gradient-to-r from-[#0B0D0E] to-[#171A1B] p-6 text-white sm:flex-row sm:items-center sm:justify-between">
      <div><span className="text-xs font-bold tracking-[.16em] text-[#F5C400]">SHENZHEN · CHINA</span><h2 id="company-map-title" className="mt-2 text-2xl font-bold">{title}</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300"><MapPin className="mr-1 inline text-[#F5C400]" size={16}/>{address}</p></div>
      <a className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#F5C400] px-5 py-3 text-sm font-bold text-[#080909]" href={googleMapsUrl} target="_blank" rel="noreferrer">View on Google Maps<ExternalLink size={16}/></a>
    </div>
    {embedUrl?<iframe title={`Google Map showing ${address}`} src={embedUrl} width="100%" height="440" className="block w-full border-0" loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade"/>:<div className="grid min-h-[360px] place-items-center bg-[radial-gradient(circle_at_center,#222729,#0B0D0E_70%)] p-8 text-center text-white"><div className="max-w-xl"><MapPin className="mx-auto text-[#F5C400]" size={42}/><h3 className="mt-5 text-xl font-bold">Google Maps API Key Required</h3><p className="mt-3 leading-7 text-slate-300">Add <code className="rounded bg-white/10 px-2 py-1 text-[#F5C400]">NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY</code> to <code>.env.local</code>, then restart Next.js to load the interactive map.</p><a className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#F5C400]" href={openStreetMapUrl} target="_blank" rel="noreferrer">Search this address on OpenStreetMap<ExternalLink size={15}/></a></div></div>}
  </section>
}
