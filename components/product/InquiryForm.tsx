export function InquiryForm() {
  return <section id="inquiry" className="section-pad bg-[#EAF3FF]">
    <div className="container-page grid gap-8 rounded-xl border border-blue-100 bg-white p-8 shadow-soft lg:grid-cols-[1fr_auto] lg:items-center">
      <div><h2 className="section-title">Get a Wholesale Quote</h2><p className="mt-4 max-w-2xl leading-7">Tell us about your product requirement, target quantity or OEM/ODM project through the secure inquiry form.</p></div>
      <a href="/inquiry" className="inline-flex rounded-lg bg-brand px-6 py-3 font-semibold text-white">Open Inquiry Form</a>
    </div>
  </section>;
}
