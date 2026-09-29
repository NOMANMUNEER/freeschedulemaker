'use client';

import { Check } from 'lucide-react';
import { useEffect } from 'react';

type ExportSuccessCelebrationProps = { onComplete: () => void; onSkip: () => void };

export default function ExportSuccessCelebration({ onComplete, onSkip }: ExportSuccessCelebrationProps) {
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timeout = window.setTimeout(onComplete, reducedMotion ? 400 : 1300);
    const handleKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') onSkip(); };
    window.addEventListener('keydown', handleKeyDown);
    return () => { window.clearTimeout(timeout); window.removeEventListener('keydown', handleKeyDown); };
  }, [onComplete, onSkip]);

  return <div className="export-celebration fixed inset-0 z-[500] flex items-center justify-center bg-slate-950/35 p-6 backdrop-blur-sm" role="status" aria-live="polite" aria-label="Schedule exported. Your schedule is ready.">
    <div className="export-celebration-card flex flex-col items-center text-center"><div className="export-success-mark relative flex h-20 w-20 items-center justify-center rounded-full bg-indigo-600 text-white shadow-[0_18px_50px_rgba(79,70,229,0.38)]"><span className="export-success-ring export-success-ring-one" aria-hidden="true" /><span className="export-success-ring export-success-ring-two" aria-hidden="true" /><Check className="h-10 w-10" strokeWidth={2.5} aria-hidden="true" /></div><h2 className="mt-6 text-2xl font-bold tracking-tight text-slate-950">Schedule exported</h2><p className="mt-1.5 text-sm text-slate-600">Your schedule is ready.</p></div>
  </div>;
}
