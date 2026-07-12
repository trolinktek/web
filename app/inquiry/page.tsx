import type { Metadata } from 'next';
import { Clock3, Mail, MessageCircle, ShieldCheck } from 'lucide-react';
import { InquiryForm } from '@/components/inquiry/InquiryForm';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { TopBar } from '@/components/layout/TopBar';

export const metadata: Metadata = {
  title: 'Wholesale & OEM Inquiry | TrolinkTek',
  description: 'Contact TrolinkTek about CarPlay adapter wholesale supply, samples, product requirements and OEM/ODM customization.',
  alternates: { canonical: 'https://www.trolinktek.com/inquiry' },
  robots: { index: true, follow: true },
};

const supportItems = [
  [MessageCircle, 'WhatsApp', '+86 18576474087'],
  [Mail, 'Email', 'support@trolink.cn'],
  [Clock3, 'Business Hours', 'Mon–Fri: 9:00 AM–6:00 PM GMT+8'],
] as const;

export default function InquiryPage() {
  return <>
    <TopBar />
    <Header />
    <main className="bg-[#F7F9FC]">
      <section className="bg-[#071426] py-14 text-white sm:py-16">
        <div className="container-page">
          <h1 className="max-w-3xl text-4xl font-bold tracking-[-.04em] sm:text-5xl">Start your wholesale or OEM/ODM inquiry.</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">Share your contact details and product requirements. Required fields are kept to a minimum for a faster first conversation.</p>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="container-page grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
          <aside className="lg:sticky lg:top-28">
            <p className="text-sm font-bold uppercase tracking-[.1em] text-[#0877F9]">B2B contact</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#101828]">Tell us what you need.</h2>
            <p className="mt-4 leading-7">Use this form for wholesale products, sample requests, compatibility questions and private-label projects.</p>
            <div className="mt-8 space-y-4">
              {supportItems.map(([Icon, label, value]) => <div className="flex gap-4 rounded-xl border border-[#E4E7EC] bg-white p-5" key={label}><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#101828] text-[#F5C400]"><Icon size={19} aria-hidden="true" /></span><div><p className="text-sm text-[#667085]">{label}</p><p className="mt-1 break-words font-semibold text-[#101828]">{value}</p></div></div>)}
            </div>
            <p className="mt-6 flex items-start gap-2 text-sm leading-6 text-[#475467]"><ShieldCheck className="mt-0.5 shrink-0 text-[#0877F9]" size={18} aria-hidden="true" />Your contact details are used only to respond to this inquiry.</p>
          </aside>
          <InquiryForm />
        </div>
      </section>
    </main>
    <Footer />
  </>;
}

