'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import ScheduleBuilder from '../builder/ScheduleBuilder';
import { SCHEDULE_TEMPLATES } from '../../data/scheduleTemplates';

const DEFAULT_TEMPLATE = 'wedding-4pm-first-look';

export default function WeddingTimelineBuilder() {
  const params = useSearchParams();
  const requested = params.get('template');
  const presetId = SCHEDULE_TEMPLATES.some((template) => template.id === requested && template.variant === 'wedding') ? requested! : DEFAULT_TEMPLATE;
  const templates = SCHEDULE_TEMPLATES.filter((template) => template.variant === 'wedding');

  return <section id="builder" className="scroll-mt-6 py-8">
    <div className="mb-5"><h2 className="text-2xl font-bold text-slate-900">Choose a wedding timeline template</h2><p className="mt-2 text-sm text-slate-600">Every block is editable. Adjust it to your venue and vendors.</p></div>
    <div className="mb-5 grid gap-2 sm:grid-cols-2">
      {templates.map((template) => <Link key={template.id} href={`?template=${template.id}#builder`} className={`rounded-xl border p-4 text-sm font-semibold transition ${template.id === presetId ? 'border-indigo-500 bg-indigo-50 text-indigo-900' : 'border-slate-200 bg-white text-slate-700 hover:border-indigo-300'}`}><span className="block">{template.name}</span><span className="mt-1 block text-xs font-normal text-slate-500">{template.description}</span></Link>)}
    </div>
    <ScheduleBuilder variant="wedding" presetId={presetId} />
  </section>;
}
