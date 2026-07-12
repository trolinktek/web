import { NextRequest, NextResponse } from 'next/server';

type InquiryPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  company?: unknown;
  country?: unknown;
  productRequirement?: unknown;
  message?: unknown;
  website?: unknown;
  elapsedMs?: unknown;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^\+?[0-9\s().-]{7,20}$/;
const requests = new Map<string, number[]>();

function clean(value: unknown, maxLength: number) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[character] || character);
}

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (requests.get(ip) || []).filter((timestamp) => now - timestamp < 10 * 60 * 1000);
  if (recent.length >= 5) return true;
  recent.push(now);
  requests.set(ip, recent);
  return false;
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'local';
  if (rateLimited(ip)) return NextResponse.json({ message: 'Too many submissions. Please wait and try again.' }, { status: 429 });

  let payload: InquiryPayload;
  try {
    payload = await request.json() as InquiryPayload;
  } catch {
    return NextResponse.json({ message: 'Invalid request.' }, { status: 400 });
  }

  if (clean(payload.website, 200)) return NextResponse.json({ message: 'Thank you. Your inquiry has been received.' });
  if (typeof payload.elapsedMs !== 'number' || payload.elapsedMs < 2000) return NextResponse.json({ message: 'Please review the form and try again.' }, { status: 400 });

  const data = {
    name: clean(payload.name, 100),
    email: clean(payload.email, 160),
    phone: clean(payload.phone, 30),
    company: clean(payload.company, 160),
    country: clean(payload.country, 100),
    productRequirement: clean(payload.productRequirement, 500),
    message: clean(payload.message, 3000),
  };

  if (!data.name || !emailPattern.test(data.email) || !phonePattern.test(data.phone)) {
    return NextResponse.json({ message: 'Please complete the required fields correctly.' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.INQUIRY_TO_EMAIL;
  const fromEmail = process.env.INQUIRY_FROM_EMAIL;
  if (!apiKey || !toEmail || !fromEmail) {
    return NextResponse.json({ message: 'Email delivery is not configured. Please contact support@trolink.cn.' }, { status: 503 });
  }

  const rows = [
    ['Name', data.name], ['Email', data.email], ['Phone / WhatsApp', data.phone], ['Company', data.company || 'Not provided'],
    ['Country / Region', data.country || 'Not provided'], ['Product Requirement', data.productRequirement || 'Not provided'], ['Message', data.message || 'Not provided'],
  ];
  const html = `<h2>New TrolinkTek B2B Inquiry</h2><table cellpadding="8" cellspacing="0" border="1" style="border-collapse:collapse;border-color:#e4e7ec">${rows.map(([label, value]) => `<tr><th align="left">${escapeHtml(label)}</th><td>${escapeHtml(value).replace(/\n/g, '<br>')}</td></tr>`).join('')}</table>`;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ from: fromEmail, to: [toEmail], reply_to: data.email, subject: `New B2B inquiry from ${data.name}`, html }),
    });
    if (!response.ok) throw new Error(`Email provider returned ${response.status}`);
    return NextResponse.json({ message: 'Thank you. Your inquiry has been sent successfully.' });
  } catch (error) {
    console.error('Inquiry delivery failed:', error instanceof Error ? error.message : 'Unknown email error');
    return NextResponse.json({ message: 'Submission failed. Please try again or email support@trolink.cn.' }, { status: 502 });
  }
}

