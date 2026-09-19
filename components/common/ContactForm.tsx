'use client';

import { FormEvent, useState } from 'react';
import { Send } from 'lucide-react';
import { logEvent } from '../../lib/analytics';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    setStatus('sending');
    setError('');
    const form = new FormData(formElement);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'contact',
          name: form.get('name'),
          email: form.get('email'),
          subject: form.get('subject'),
          message: form.get('message'),
          website: form.get('website'),
          page: window.location.pathname,
        }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Unable to send your message.');
      setStatus('success');
      logEvent('generate_lead', 'contact', 'contact_form');
      formElement.reset();
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : 'Unable to send your message.');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5 text-center text-emerald-900">Thanks — your message is on its way. We’ll get back to you by email.</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-4 text-left" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-semibold text-slate-700">Name<input required name="name" autoComplete="name" className="mt-1.5 w-full rounded-lg border border-slate-300 p-3 font-normal outline-none focus:border-indigo-500" /></label>
        <label className="text-sm font-semibold text-slate-700">Email<input required name="email" type="email" autoComplete="email" className="mt-1.5 w-full rounded-lg border border-slate-300 p-3 font-normal outline-none focus:border-indigo-500" /></label>
      </div>
      <label className="block text-sm font-semibold text-slate-700">Subject <span className="font-normal text-slate-400">(optional)</span><input name="subject" className="mt-1.5 w-full rounded-lg border border-slate-300 p-3 font-normal outline-none focus:border-indigo-500" /></label>
      <label className="block text-sm font-semibold text-slate-700">How can we help?<textarea required name="message" rows={5} className="mt-1.5 w-full resize-y rounded-lg border border-slate-300 p-3 font-normal outline-none focus:border-indigo-500" /></label>
      <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <p className="text-xs leading-relaxed text-slate-500">We use your details only to respond to this message. See our <a className="text-indigo-600 underline" href="/privacy-policy">Privacy Policy</a>.</p>
      {status === 'error' && <p role="alert" className="text-sm text-rose-600">{error}</p>}
      <button disabled={status === 'sending'} className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 font-bold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"><Send className="h-4 w-4" />{status === 'sending' ? 'Sending…' : 'Send message'}</button>
    </form>
  );
}
