import type { Metadata } from 'next';
import { AlertTriangle, ArrowRight, CheckCircle2, ChevronRight, ClipboardCheck, Factory, HelpCircle, ShieldCheck, Smartphone, Wifi } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { TopBar } from '@/components/layout/TopBar';

const url = 'https://www.trolinktek.com/blog/how-to-set-up-wireless-android-auto';

export const metadata: Metadata = {
  title: 'How to Set Up Wireless Android Auto | TrolinkTek Guide',
  description: 'Learn how to set up wireless Android Auto with native vehicle support or a compatible adapter, plus troubleshooting and B2B product guidance.',
  keywords: ['how to set up wireless Android Auto', 'wireless Android Auto adapter setup', 'Android Auto adapter guide', 'wireless Android Auto supplier'],
  alternates: { canonical: url },
  openGraph: {
    title: 'How to Set Up Wireless Android Auto | TrolinkTek',
    description: 'A practical setup and troubleshooting guide for wireless Android Auto users and B2B product teams.',
    url,
    type: 'article',
    images: ['/images/products/tk-cp01/main-03.webp'],
  },
  twitter: { card: 'summary_large_image', title: 'How to Set Up Wireless Android Auto', description: 'Native wireless, adapter and troubleshooting setup paths explained.' },
};

const toc = [
  ['quick-answer', 'Quick answer'],
  ['before-you-start', 'Before you start'],
  ['native-wireless', 'Native wireless setup'],
  ['adapter-setup', 'Adapter setup'],
  ['unsupported-vehicles', 'Vehicles without Android Auto'],
  ['troubleshooting', 'Troubleshooting'],
  ['b2b-guidance', 'B2B guidance'],
  ['faq', 'FAQ'],
] as const;

const faqs = [
  ['Can a wireless adapter add Android Auto to any vehicle?', 'No. A wired-to-wireless adapter normally requires the vehicle to already support factory wired Android Auto. Confirm the original vehicle system before ordering.'],
  ['Why are Bluetooth and Wi-Fi both required?', 'Bluetooth is commonly used for discovery and initial pairing, while Wi-Fi carries the higher-bandwidth projection connection. Keep both enabled during setup.'],
  ['Should the first setup be completed while driving?', 'No. Park the vehicle, turn on the infotainment system and complete all prompts before driving.'],
  ['What should I check if the adapter does not appear?', 'Confirm you are using the vehicle USB data port, verify wired Android Auto works with a suitable cable, restart the phone and infotainment system, and follow the adapter-specific manual.'],
  ['How should distributors handle compatibility questions?', 'Collect vehicle brand, model, year, market, phone information and confirmation of original wired Android Auto before recommending a product.'],
] as const;

const troubleshooting = [
  ['No device appears', 'Check the USB data port, adapter power and the adapter-specific pairing instructions.'],
  ['Pairing completes but projection does not start', 'Keep Bluetooth, Wi-Fi and Location Services enabled; review prompts on both displays.'],
  ['Connection drops', 'Remove competing saved connections, restart both systems and test in a less congested wireless environment.'],
  ['Works by cable only', 'Confirm whether the vehicle supports native wireless Android Auto or requires a compatible wired-to-wireless adapter.'],
] as const;

export default function WirelessAndroidAutoGuide() {
  const articleSchema = {
    '@context': 'https://schema.org', '@type': 'BlogPosting', headline: 'How to Set Up Wireless Android Auto: A Practical Guide',
    description: 'Setup paths for native wireless Android Auto, compatible adapters and vehicles without an original Android Auto system.',
    image: 'https://www.trolinktek.com/images/products/tk-cp01/main-03.webp', author: { '@type': 'Organization', name: 'TrolinkTek' },
    publisher: { '@type': 'Organization', name: 'TrolinkTek' }, mainEntityOfPage: url,
  };
  const breadcrumbSchema = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.trolinktek.com/' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.trolinktek.com/blog' },
    { '@type': 'ListItem', position: 3, name: 'How to Set Up Wireless Android Auto', item: url },
  ] };
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) };

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([articleSchema, breadcrumbSchema, faqSchema]) }} />
    <TopBar />
    <Header />
    <main>
      <section className="border-b border-[#E4E7EC] bg-white">
        <div className="container-page py-12 sm:py-16">
          <nav className="flex flex-wrap items-center gap-2 text-sm text-[#667085]" aria-label="Breadcrumb"><Link href="/">Home</Link><ChevronRight size={15} aria-hidden="true" /><Link href="/blog">Blog</Link><ChevronRight size={15} aria-hidden="true" /><span>Product Knowledge</span></nav>
          <div className="mt-8 max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[.1em] text-[#0877F9]">Product Knowledge</p>
            <h1 className="mt-4 text-4xl font-bold leading-[1.08] tracking-[-.045em] text-[#101828] sm:text-5xl lg:text-[58px]">How to set up wireless Android Auto.</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#475467]">A clear guide to native wireless connections, wired-to-wireless adapters and the checks B2B sellers should understand before recommending a solution.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F9FC] py-10">
        <div className="container-page relative aspect-[16/7] min-h-[300px] overflow-hidden rounded-xl bg-white shadow-[0_16px_45px_rgba(16,24,40,.08)]">
          <Image src="/images/products/tk-cp01/detail-01.webp" alt="Wireless adapter connected with an in-car Android Auto display" fill priority className="object-cover" sizes="(max-width:1200px) 100vw,1200px" />
        </div>
      </section>

      <div className="container-page grid gap-12 py-14 lg:grid-cols-[minmax(0,800px)_300px] lg:justify-between">
        <article className="min-w-0 text-[17px] leading-8 text-[#344054]">
          <section id="quick-answer" className="scroll-mt-28 rounded-xl border border-blue-200 bg-[#EAF3FF] p-6 sm:p-8">
            <h2 className="flex items-center gap-3 text-2xl font-bold text-[#101828]"><Wifi className="text-[#0877F9]" aria-hidden="true" />Quick answer</h2>
            <p className="mt-4">If the vehicle supports native wireless Android Auto, pair the phone and vehicle by Bluetooth while Bluetooth, Wi-Fi and Location Services are enabled. If the vehicle only supports factory wired Android Auto, a compatible wired-to-wireless adapter may provide the wireless bridge. An adapter does not normally add Android Auto to a vehicle that has no original Android Auto system.</p>
          </section>

          <section id="before-you-start" className="scroll-mt-28 pt-12">
            <h2 className="text-3xl font-bold tracking-tight text-[#101828]">Before you start</h2>
            <p className="mt-5">Complete the first setup with the vehicle parked and the infotainment system switched on. Confirm which of the three paths below matches the vehicle before changing settings or selecting hardware.</p>
            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              {[[Smartphone, 'Native wireless', 'The vehicle already supports wireless Android Auto.'], [Wifi, 'Factory wired only', 'Wired Android Auto works, but wireless projection is not built in.'], [AlertTriangle, 'No Android Auto', 'The original system does not provide wired or wireless Android Auto.']].map(([Icon, title, text]) => { const ItemIcon = Icon as typeof Smartphone; return <div className="rounded-xl border border-[#E4E7EC] p-5" key={title as string}><ItemIcon className="text-[#0877F9]" size={22} aria-hidden="true" /><h3 className="mt-4 font-bold text-[#101828]">{title as string}</h3><p className="mt-2 text-sm leading-6">{text as string}</p></div>; })}
            </div>
            <div className="mt-7 flex gap-3 rounded-lg border border-amber-200 bg-amber-50 p-5 text-[15px] leading-6 text-amber-950"><AlertTriangle className="mt-0.5 shrink-0" size={20} aria-hidden="true" /><p>Vehicle features can vary by model year, trim and sales region. When uncertain, check the vehicle manual or contact the vehicle manufacturer.</p></div>
          </section>

          <section id="native-wireless" className="scroll-mt-28 pt-12">
            <h2 className="text-3xl font-bold tracking-tight text-[#101828]">Path 1: set up native wireless Android Auto</h2>
            <p className="mt-5">Google’s current setup guidance begins with confirming vehicle compatibility and pairing the phone and vehicle through Bluetooth.</p>
            <ol className="mt-7 space-y-5">
              {[
                ['Park and prepare', 'Place the vehicle in Park, turn on the infotainment system and ensure the phone has a working mobile data connection.'],
                ['Enable connection services', 'Turn on Bluetooth, Wi-Fi and Location Services on the phone.'],
                ['Open the pairing menu', 'Open the phone Bluetooth menu. Use the vehicle voice-command or phone-pairing control to add a new phone, following the vehicle manual.'],
                ['Accept the prompts', 'Complete the Bluetooth pairing and approve the Android Auto prompts shown on the phone and vehicle display.'],
                ['Start Android Auto', 'Android Auto should start after pairing. If needed, select Android Auto on the vehicle display.'],
              ].map(([title, text], index) => <li className="grid grid-cols-[44px_1fr] gap-4" key={title}><span className="grid h-11 w-11 place-items-center rounded-full bg-[#101828] font-bold text-[#F5C400]">{index + 1}</span><div><h3 className="font-bold text-[#101828]">{title}</h3><p className="mt-1">{text}</p></div></li>)}
            </ol>
          </section>

          <section id="adapter-setup" className="scroll-mt-28 pt-12">
            <h2 className="text-3xl font-bold tracking-tight text-[#101828]">Path 2: use a compatible wireless adapter</h2>
            <p className="mt-5">This path is intended for vehicles where Android Auto already works through the original USB data connection. Product-specific pairing names and controls vary, so always follow the supplied adapter manual.</p>
            <div className="mt-7 grid gap-8 rounded-xl bg-[#101828] p-7 text-white sm:grid-cols-[1fr_220px] sm:items-center">
              <div><h3 className="text-2xl font-bold">Confirm wired Android Auto first</h3><p className="mt-3 text-[15px] leading-7 text-slate-300">Connect a compatible Android phone with a suitable USB cable. If wired Android Auto does not launch, investigate the vehicle, port, cable and phone before testing a wireless adapter.</p></div>
              <div className="relative aspect-square rounded-lg bg-white"><Image src="/images/products/tk-cp01/main-03.webp" alt="Compact wireless adapter product view" fill className="object-contain p-5" sizes="220px" /></div>
            </div>
            <ol className="mt-8 space-y-5">
              {[
                'Plug the adapter into the same vehicle USB data port used for wired Android Auto.',
                'Wait for the adapter interface or pairing instruction to appear on the vehicle display.',
                'On the phone, enable Bluetooth and Wi-Fi, then select the device name specified in the adapter manual.',
                'Accept all requested pairing and Android Auto permissions on the phone and vehicle display.',
                'Turn the vehicle off and back on later to verify automatic reconnection before relying on the setup.',
              ].map((text, index) => <li className="flex gap-4" key={text}><CheckCircle2 className="mt-1 shrink-0 text-[#0877F9]" size={22} aria-hidden="true" /><p><strong className="text-[#101828]">Step {index + 1}.</strong> {text}</p></li>)}
            </ol>
          </section>

          <section id="unsupported-vehicles" className="scroll-mt-28 pt-12">
            <h2 className="text-3xl font-bold tracking-tight text-[#101828]">Path 3: vehicles without original Android Auto</h2>
            <p className="mt-5">A wired-to-wireless adapter is not the correct category for a vehicle that lacks Android Auto entirely. Depending on the vehicle, a compatible aftermarket head unit or a portable in-car display may be considered. Installation requirements and retained vehicle functions should be reviewed by a qualified professional.</p>
          </section>

          <section id="troubleshooting" className="scroll-mt-28 pt-12">
            <h2 className="text-3xl font-bold tracking-tight text-[#101828]">Wireless Android Auto troubleshooting</h2>
            <div className="mt-7 overflow-hidden rounded-xl border border-[#E4E7EC]">
              {troubleshooting.map(([issue, action]) => <div className="grid border-b border-[#E4E7EC] last:border-0 sm:grid-cols-[210px_1fr]" key={issue}><h3 className="bg-[#F7F9FC] p-4 font-bold text-[#101828]">{issue}</h3><p className="p-4 text-[15px] leading-6">{action}</p></div>)}
            </div>
          </section>

          <section id="b2b-guidance" className="scroll-mt-28 pt-12">
            <h2 className="text-3xl font-bold tracking-tight text-[#101828]">What B2B sellers should communicate</h2>
            <p className="mt-5">Clear product boundaries reduce returns and support workload. Wholesale listings, marketplace pages and distributor training should consistently state the vehicle requirement.</p>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                ['State the prerequisite', 'Explain whether factory wired Android Auto is required.'],
                ['Collect compatibility details', 'Ask for brand, model, year, market and original system behavior.'],
                ['Document first-time pairing', 'Provide readable setup steps and the correct device-name convention.'],
                ['Prepare troubleshooting scripts', 'Separate vehicle, phone, cable, port and wireless-environment checks.'],
              ].map(([title, text]) => <li className="rounded-xl border border-[#E4E7EC] p-5" key={title}><ClipboardCheck className="text-[#0877F9]" size={21} aria-hidden="true" /><h3 className="mt-4 font-bold text-[#101828]">{title}</h3><p className="mt-2 text-sm leading-6">{text}</p></li>)}
            </ul>
          </section>

          <section id="faq" className="scroll-mt-28 pt-12">
            <h2 className="text-3xl font-bold tracking-tight text-[#101828]">Frequently asked questions</h2>
            <div className="mt-6 divide-y divide-[#E4E7EC] rounded-xl border border-[#E4E7EC] bg-white px-6">
              {faqs.map(([question, answer]) => <details className="group py-5" key={question}><summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-bold text-[#101828]"><span>{question}</span><HelpCircle className="mt-0.5 shrink-0 text-[#0877F9]" size={20} aria-hidden="true" /></summary><p className="mt-3 pr-8 text-[15px] leading-7">{answer}</p></details>)}
            </div>
          </section>

          <section className="mt-12 rounded-xl bg-[#102A56] p-7 text-white sm:p-9">
            <h2 className="text-3xl font-bold">Planning a wireless Android Auto product project?</h2>
            <p className="mt-4 text-[16px] leading-7 text-blue-100">Share your target market, product category and confirmed vehicle requirements with TrolinkTek. Product specifications and compatibility should be verified before quotation.</p>
            <Link href="/inquiry" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#F5C400] px-6 py-3 font-bold text-[#080909]">Start an inquiry<ArrowRight size={18} aria-hidden="true" /></Link>
          </section>

          <section className="mt-10 border-t border-[#E4E7EC] pt-8 text-sm">
            <h2 className="font-bold text-[#101828]">Source note</h2>
            <p className="mt-2 leading-6">The native wireless setup sequence is based on Google’s official Android Auto Help guidance. Vehicle-specific instructions remain controlled by the vehicle manufacturer.</p>
            <a className="mt-3 inline-flex font-semibold text-[#0877F9]" href="https://support.google.com/androidauto/answer/6348029?hl=en" target="_blank" rel="noreferrer">Google Android Auto setup guidance ↗</a>
          </section>
        </article>

        <aside className="order-first lg:order-none">
          <div className="space-y-6 lg:sticky lg:top-28">
            <nav className="rounded-xl border border-[#E4E7EC] bg-white p-6" aria-label="Table of contents">
              <h2 className="font-bold text-[#101828]">Table of contents</h2>
              <ol className="mt-4 space-y-3 text-sm">{toc.map(([id, label]) => <li key={id}><a className="text-[#475467] hover:text-[#0877F9]" href={`#${id}`}>{label}</a></li>)}</ol>
            </nav>
            <div className="rounded-xl bg-[#101828] p-6 text-white"><Factory className="text-[#F5C400]" aria-hidden="true" /><h2 className="mt-4 text-xl font-bold">For distributors and brands</h2><p className="mt-3 text-sm leading-6 text-slate-300">Discuss sourcing, samples and OEM/ODM requirements after confirming the intended product category.</p><Link href="/inquiry" className="mt-5 inline-flex items-center gap-2 font-bold text-[#F5C400]">Contact TrolinkTek<ArrowRight size={17} aria-hidden="true" /></Link></div>
            <div className="flex gap-3 rounded-xl border border-[#E4E7EC] p-5 text-sm leading-6"><ShieldCheck className="mt-0.5 shrink-0 text-[#0877F9]" size={20} aria-hidden="true" /><p>Always finish setup while parked and follow applicable traffic laws.</p></div>
          </div>
        </aside>
      </div>

      <section className="border-t border-[#E4E7EC] bg-[#F7F9FC] py-14">
        <div className="container-page"><div className="flex items-end justify-between gap-5"><div><h2 className="text-3xl font-bold text-[#101828]">Continue reading</h2><p className="mt-2">More product and sourcing topics for B2B teams.</p></div><Link href="/blog" className="hidden font-bold text-[#0877F9] sm:block">View all insights</Link></div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Link href="/blog#articles" className="rounded-xl border border-[#E4E7EC] bg-white p-6"><p className="text-xs font-bold uppercase tracking-[.08em] text-[#0877F9]">Compatibility</p><h3 className="mt-3 text-xl font-bold text-[#101828]">Vehicle compatibility checks before a wholesale order</h3></Link>
            <Link href="/blog#articles" className="rounded-xl border border-[#E4E7EC] bg-white p-6"><p className="text-xs font-bold uppercase tracking-[.08em] text-[#0877F9]">Sourcing</p><h3 className="mt-3 text-xl font-bold text-[#101828]">How to evaluate a wireless adapter supplier</h3></Link>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>;
}

