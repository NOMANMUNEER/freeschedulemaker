import { NextResponse } from 'next/server';

type LeadPayload = {
  type: 'contact' | 'feedback' | 'tool_lead';
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  isUseful?: boolean | null;
  creationIntent?: string;
  page?: string;
  source?: string;
  website?: string;
};

const MAX_MESSAGE_LENGTH = 5_000;

function clean(value: unknown, maxLength = 200): string {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

export async function POST(request: Request) {
  let body: LeadPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Please submit the form again.' }, { status: 400 });
  }

  if (!body || typeof body !== 'object') {
    return NextResponse.json({ error: 'Please submit the form again.' }, { status: 400 });
  }

  const type = body.type;
  const name = clean(body.name);
  const email = clean(body.email).toLowerCase();
  const subject = clean(body.subject);
  const message = clean(body.message, MAX_MESSAGE_LENGTH);
  const creationIntent = clean(body.creationIntent);
  const page = clean(body.page, 500);
  const source = clean(body.source);

  // Quietly accept honeypot submissions without sending mail.
  if (clean(body.website)) return NextResponse.json({ ok: true });

  if (type !== 'contact' && type !== 'feedback' && type !== 'tool_lead') {
    return NextResponse.json({ error: 'Invalid submission.' }, { status: 400 });
  }

  if (type === 'contact' && (!name || !email || !message || !/^\S+@\S+\.\S+$/.test(email))) {
    return NextResponse.json({ error: 'Please add your name, a valid email address, and a message.' }, { status: 400 });
  }
  if (type === 'tool_lead' && (!email || !creationIntent || !/^\S+@\S+\.\S+$/.test(email))) {
    return NextResponse.json({ error: 'Please choose an option and enter a valid email address.' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.LEADS_TO_EMAIL;
  const from = process.env.LEADS_FROM_EMAIL;

  if (!apiKey || !recipient || !from) {
    console.error('Lead email is not configured. Set RESEND_API_KEY, LEADS_TO_EMAIL, and LEADS_FROM_EMAIL.');
    return NextResponse.json({ error: 'The form is temporarily unavailable. Please try again later.' }, { status: 503 });
  }

  const feedbackSummary = [
    `Useful: ${body.isUseful === null || body.isUseful === undefined ? 'Not provided' : body.isUseful ? 'Yes' : 'No'}`,
    `Schedule type: ${creationIntent || 'Not provided'}`,
    `Page: ${page || 'Not provided'}`,
    '',
    message || 'No written feedback provided.',
  ].join('\n');

  const emailSubject = type === 'contact'
    ? `Contact lead: ${subject || 'General inquiry'}`
    : type === 'tool_lead'
      ? 'New FreeScheduleMaker Lead'
    : `Builder feedback: ${creationIntent || 'No schedule type selected'}`;
  const text = type === 'contact'
    ? [`Name: ${name}`, `Email: ${email}`, `Page: ${page || 'Not provided'}`, '', message].join('\n')
    : type === 'tool_lead'
      ? [`Email: ${email}`, `Intent: ${creationIntent}`, `Tool/page: ${page || 'Not provided'}`, `Source: ${source || 'Not provided'}`, `Time: ${new Date().toISOString()}`, '', `Message: ${message || 'Not provided'}`].join('\n')
    : feedbackSummary;

  try {
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to: [recipient],
        reply_to: type === 'contact' || type === 'tool_lead' ? email : undefined,
        subject: emailSubject,
        text,
      }),
    });

    if (!resendResponse.ok) {
      console.error('Resend rejected lead submission:', await resendResponse.text());
      return NextResponse.json({ error: 'We could not send your message. Please try again later.' }, { status: 502 });
    }
  } catch (error) {
    console.error('Lead email delivery failed:', error);
    return NextResponse.json({ error: 'We could not send your message. Please try again later.' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
