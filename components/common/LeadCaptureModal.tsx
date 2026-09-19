'use client';

import { FormEvent, useEffect, useState } from 'react';
import { CheckCircle2, ChevronRight, X } from 'lucide-react';
import { LEAD_CAPTURE_CONFIG, LEAD_INTENTS } from '../../config/leadCapture';
import { logEvent } from '../../lib/analytics';

type LeadCaptureModalProps = {
  page: string;
  onClose: () => void;
};

export default function LeadCaptureModal({ page, onClose }: LeadCaptureModalProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [intent, setIntent] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle');
  const [error, setError] = useState('');

  useEffect(() => {
    logEvent('lead_popup_shown', 'lead_capture', page, undefined, { tool_page: page, source: LEAD_CAPTURE_CONFIG.source });
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') handleClose(); };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  // The dialog intentionally registers this once when it opens.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleClose() {
    localStorage.setItem(LEAD_CAPTURE_CONFIG.storageKey, 'dismissed');
    logEvent('lead_popup_dismissed', 'lead_capture', page, undefined, { tool_page: page, intent: intent || 'not_selected' });
    onClose();
  }

  function chooseIntent(selectedIntent: string) {
    setIntent(selectedIntent);
    setStep(2);
    logEvent('lead_intent_selected', 'lead_capture', selectedIntent, undefined, { tool_page: page, intent: selectedIntent });
  }

  function handleFormFocus() {
    logEvent('lead_form_started', 'lead_capture', intent, undefined, { tool_page: page, intent });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setStatus('sending');
    setError('');

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'tool_lead',
          email: form.get('email'),
          message: form.get('message'),
          creationIntent: intent,
          page,
          source: LEAD_CAPTURE_CONFIG.source,
          website: form.get('website'),
        }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Unable to send your request.');
      localStorage.setItem(LEAD_CAPTURE_CONFIG.storageKey, 'submitted');
      logEvent('lead_submitted', 'lead_capture', intent, undefined, { tool_page: page, intent, source: LEAD_CAPTURE_CONFIG.source });
      setStep(3);
    } catch (submissionError) {
      const message = submissionError instanceof Error ? submissionError.message : 'Unable to send your request.';
      setError(message);
      setStatus('error');
      logEvent('lead_submission_failed', 'lead_capture', intent, undefined, { tool_page: page, intent, source: LEAD_CAPTURE_CONFIG.source });
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-slate-950/45 p-4 sm:items-center" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) handleClose(); }}>
      <section role="dialog" aria-modal="true" aria-labelledby="lead-capture-title" className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-start justify-between gap-4">
          <div className="flex gap-1" aria-label={`Step ${Math.min(step, 2)} of 2`}><span className="h-1.5 w-8 rounded-full bg-indigo-600" /><span className={`h-1.5 w-8 rounded-full ${step >= 2 ? 'bg-indigo-600' : 'bg-slate-200'}`} /></div>
          <button type="button" onClick={handleClose} className="-mt-2 -mr-2 rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-800" aria-label="Close"><X className="h-5 w-5" /></button>
        </div>

        {step === 1 && <div className="pt-5">
          <h2 id="lead-capture-title" className="text-2xl font-bold tracking-tight text-slate-900">Need more from your schedule?</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">We can help create a custom scheduling solution for your school, business, team, or personal workflow.</p>
          <p className="mt-6 text-sm font-bold text-slate-800">What are you looking for?</p>
          <div className="mt-3 grid gap-2">
            {LEAD_INTENTS.map((option) => <button key={option} type="button" onClick={() => chooseIntent(option)} className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-700 transition hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-800">{option}<ChevronRight className="h-4 w-4" /></button>)}
          </div>
        </div>}

        {step === 2 && <form onSubmit={handleSubmit} className="pt-5" noValidate>
          <button type="button" onClick={() => setStep(1)} className="text-xs font-semibold text-indigo-600 hover:underline">← Change selection</button>
          <h2 id="lead-capture-title" className="mt-3 text-2xl font-bold tracking-tight text-slate-900">We can help with that.</h2>
          <p className="mt-2 text-sm text-slate-600">Tell us a little about what you need.</p>
          <label className="mt-5 block text-sm font-semibold text-slate-700">Email address<input required name="email" type="email" autoComplete="email" onFocus={handleFormFocus} className="mt-1.5 w-full rounded-lg border border-slate-300 p-3 font-normal outline-none focus:border-indigo-500" /></label>
          <label className="mt-4 block text-sm font-semibold text-slate-700">What do you need? <span className="font-normal text-slate-400">(optional)</span><textarea name="message" rows={4} className="mt-1.5 w-full resize-y rounded-lg border border-slate-300 p-3 font-normal outline-none focus:border-indigo-500" /></label>
          <input name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
          {status === 'error' && <p role="alert" className="mt-3 text-sm text-rose-600">{error}</p>}
          <button disabled={status === 'sending'} className="mt-5 w-full rounded-lg bg-indigo-600 px-5 py-3 font-bold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60">{status === 'sending' ? 'Sending…' : 'Get in Touch'}</button>
        </form>}

        {step === 3 && <div className="py-12 text-center"><CheckCircle2 className="mx-auto h-12 w-12 text-emerald-500" /><h2 id="lead-capture-title" className="mt-4 text-2xl font-bold text-slate-900">Thanks — we’ll be in touch.</h2><p className="mt-2 text-sm text-slate-600">Your request has been sent to the FreeScheduleMaker team.</p><button type="button" onClick={onClose} className="mt-6 text-sm font-bold text-indigo-600 hover:underline">Back to my schedule</button></div>}
      </section>
    </div>
  );
}
