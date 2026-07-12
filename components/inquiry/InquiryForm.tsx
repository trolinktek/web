'use client';

import { AlertCircle, CheckCircle2, LoaderCircle, Send } from 'lucide-react';
import { FormEvent, useRef, useState } from 'react';

type Fields = {
  name: string;
  email: string;
  phone: string;
  company: string;
  country: string;
  productRequirement: string;
  message: string;
  website: string;
};

type FieldErrors = Partial<Record<keyof Fields, string>>;

const initialFields: Fields = { name: '', email: '', phone: '', company: '', country: '', productRequirement: '', message: '', website: '' };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^\+?[0-9\s().-]{7,20}$/;

function validate(fields: Fields): FieldErrors {
  const errors: FieldErrors = {};
  if (!fields.name.trim()) errors.name = 'Please enter your full name.';
  if (!fields.email.trim()) errors.email = 'Please enter your business email.';
  else if (!emailPattern.test(fields.email)) errors.email = 'Please enter a valid email address.';
  if (!fields.phone.trim()) errors.phone = 'Please enter your phone or WhatsApp number.';
  else if (!phonePattern.test(fields.phone)) errors.phone = 'Use 7–20 digits and an optional international + prefix.';
  return errors;
}

function FieldMessage({ id, message }: { id: string; message?: string }) {
  return message ? <p id={id} className="mt-2 flex items-center gap-1.5 text-sm text-red-600"><AlertCircle size={15} aria-hidden="true" />{message}</p> : null;
}

const inputClass = 'mt-2 w-full rounded-lg border border-[#D0D5DD] bg-white px-4 py-3 text-[#101828] outline-none transition placeholder:text-[#98A2B3] focus:border-[#0877F9] focus:ring-4 focus:ring-[#0877F9]/10';

export function InquiryForm() {
  const [fields, setFields] = useState<Fields>(initialFields);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [serverMessage, setServerMessage] = useState('');
  const startedAt = useRef(Date.now());

  function update(name: keyof Fields, value: string) {
    setFields((current) => ({ ...current, [name]: value }));
    if (errors[name]) setErrors((current) => ({ ...current, [name]: undefined }));
    if (status !== 'idle') setStatus('idle');
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(fields);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setStatus('error');
      setServerMessage('Please complete all required fields correctly.');
      return;
    }

    setStatus('loading');
    setServerMessage('');
    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...fields, elapsedMs: Date.now() - startedAt.current }),
      });
      const result = await response.json() as { message?: string };
      if (!response.ok) throw new Error(result.message || 'Unable to submit your inquiry.');
      setFields(initialFields);
      setErrors({});
      setStatus('success');
      setServerMessage(result.message || 'Thank you. Your inquiry has been received.');
      startedAt.current = Date.now();
    } catch (error) {
      setStatus('error');
      setServerMessage(error instanceof Error ? error.message : 'Submission failed. Please try again or contact us by email.');
    }
  }

  return <form noValidate onSubmit={submit} className="rounded-xl border border-[#E4E7EC] bg-white p-6 shadow-[0_18px_50px_rgba(16,24,40,.08)] sm:p-9">
    <div className="grid gap-x-5 gap-y-6 sm:grid-cols-2">
      <label className="block text-sm font-semibold text-[#344054]">Full Name <span className="text-red-600" aria-hidden="true">*</span><span className="sr-only"> required</span>
        <input className={inputClass} name="name" autoComplete="name" placeholder="Your full name" value={fields.name} onChange={(event) => update('name', event.target.value)} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} />
        <FieldMessage id="name-error" message={errors.name} />
      </label>

      <label className="block text-sm font-semibold text-[#344054]">Business Email <span className="text-red-600" aria-hidden="true">*</span><span className="sr-only"> required</span>
        <input className={inputClass} type="email" name="email" autoComplete="email" inputMode="email" placeholder="name@company.com" value={fields.email} onChange={(event) => update('email', event.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} />
        <FieldMessage id="email-error" message={errors.email} />
      </label>

      <label className="block text-sm font-semibold text-[#344054]">Phone / WhatsApp <span className="text-red-600" aria-hidden="true">*</span><span className="sr-only"> required</span>
        <input className={inputClass} type="tel" name="phone" autoComplete="tel" inputMode="tel" placeholder="+1 202 555 0148" value={fields.phone} onChange={(event) => update('phone', event.target.value)} aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? 'phone-error' : 'phone-help'} />
        <p id="phone-help" className="mt-2 text-xs font-normal text-[#667085]">Include the international country code.</p>
        <FieldMessage id="phone-error" message={errors.phone} />
      </label>

      <label className="block text-sm font-semibold text-[#344054]">Company Name <span className="font-normal text-[#667085]">(optional)</span>
        <input className={inputClass} name="company" autoComplete="organization" placeholder="Your company name" value={fields.company} onChange={(event) => update('company', event.target.value)} />
      </label>

      <label className="block text-sm font-semibold text-[#344054]">Country / Region <span className="font-normal text-[#667085]">(optional)</span>
        <input className={inputClass} name="country" autoComplete="country-name" placeholder="Country or region" value={fields.country} onChange={(event) => update('country', event.target.value)} />
      </label>

      <label className="block text-sm font-semibold text-[#344054]">Product Requirement <span className="font-normal text-[#667085]">(optional)</span>
        <input className={inputClass} name="productRequirement" placeholder="Model, quantity or customization" value={fields.productRequirement} onChange={(event) => update('productRequirement', event.target.value)} />
      </label>
    </div>

    <label className="mt-6 block text-sm font-semibold text-[#344054]">Message <span className="font-normal text-[#667085]">(optional)</span>
      <textarea className={`${inputClass} min-h-36 resize-y`} name="message" placeholder="Tell us about your market, target quantity, vehicle requirements or OEM/ODM project." value={fields.message} onChange={(event) => update('message', event.target.value)} />
    </label>

    <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
      <label>Website<input name="website" tabIndex={-1} autoComplete="off" value={fields.website} onChange={(event) => update('website', event.target.value)} /></label>
    </div>

    <p className="mt-6 text-xs leading-5 text-[#667085]">By submitting this form, you agree that TrolinkTek may contact you regarding this inquiry. Required fields are marked with an asterisk.</p>

    <button type="submit" disabled={status === 'loading'} className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#F5C400] px-6 py-3 font-bold text-[#080909] transition hover:bg-[#FFD21A] disabled:cursor-wait disabled:opacity-70 sm:w-auto">
      {status === 'loading' ? <><LoaderCircle className="animate-spin" size={19} aria-hidden="true" />Submitting…</> : <><Send size={18} aria-hidden="true" />Submit Inquiry</>}
    </button>

    <div aria-live="polite" aria-atomic="true">
      {status === 'success' ? <p className="mt-5 flex items-start gap-2 rounded-lg border border-green-200 bg-green-50 p-4 text-sm font-semibold text-green-800"><CheckCircle2 className="mt-0.5 shrink-0" size={18} aria-hidden="true" />{serverMessage}</p> : null}
      {status === 'error' && serverMessage ? <p className="mt-5 flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-800"><AlertCircle className="mt-0.5 shrink-0" size={18} aria-hidden="true" />{serverMessage}</p> : null}
    </div>
  </form>;
}

