'use client';

import React, { useState } from 'react';
import { useScheduleStore } from '../../store/useScheduleStore';
import { SCHEDULE_TEMPLATES, ScheduleTemplate } from '../../data/scheduleTemplates';
import { Sparkles, HelpCircle, RefreshCw, Layers, X } from 'lucide-react';

export default function TemplateSelector() {
  const { currentVariant, events, setEvents } = useScheduleStore();
  const [selectedTemplate, setSelectedTemplate] = useState<ScheduleTemplate | null>(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  // Filter templates for current variant, fall back to default if none exist
  const templates = SCHEDULE_TEMPLATES.filter((t) => t.variant === currentVariant);
  const activeTemplates = templates.length > 0 
    ? templates 
    : SCHEDULE_TEMPLATES.filter((t) => t.variant === 'default');

  const handleTemplateClick = (template: ScheduleTemplate) => {
    if (events.length > 0) {
      setSelectedTemplate(template);
      setShowConfirmModal(true);
    } else {
      loadTemplate(template, 'replace');
    }
  };

  const loadTemplate = (template: ScheduleTemplate, mode: 'replace' | 'merge') => {
    // Generate new unique UUIDs for events to prevent collisions
    const formattedEvents = template.events.map((e) => ({
      ...e,
      id: crypto.randomUUID(),
      variant: currentVariant,
    }));

    if (mode === 'replace') {
      setEvents(formattedEvents);
    } else {
      setEvents([...events, ...formattedEvents]);
    }
    
    setSelectedTemplate(null);
    setShowConfirmModal(false);
  };

  return (
    <div className="w-full space-y-2 mb-4">
      <div className="grid grid-cols-1 gap-1.5">
        {activeTemplates.map((template) => (
          <button
            key={template.id}
            type="button"
            onClick={() => handleTemplateClick(template)}
            className="w-full flex items-center justify-between text-left px-3 py-2 bg-slate-50 border border-slate-200 hover:border-indigo-400 hover:bg-indigo-50/20 rounded-xl text-xs font-semibold text-slate-700 transition cursor-pointer"
          >
            <span className="truncate pr-2">{template.name}</span>
            <Sparkles className="h-3.5 w-3.5 text-amber-500 shrink-0" />
          </button>
        ))}
      </div>

      {/* Merge or Replace Confirmation Modal */}
      {showConfirmModal && selectedTemplate && (
        <div className="fixed inset-0 z-[400] flex items-center justify-center bg-black/40 backdrop-blur-xs">
          <div className="w-[420px] bg-[#eef1f6] rounded-xl shadow-2xl border border-slate-300 flex flex-col text-slate-800 p-5 relative">
            <button 
              type="button"
              onClick={() => { setShowConfirmModal(false); setSelectedTemplate(null); }}
              className="absolute right-4 top-4 text-slate-400 hover:text-slate-700 transition"
            >
              <X className="h-4.5 w-4.5" />
            </button>

            <div className="flex items-start gap-3 mt-1.5">
              <div className="h-10 w-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 shrink-0">
                <HelpCircle className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-900 text-base mb-1">Load Schedule Template</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Your schedule already has active events. How would you like to apply the template <span className="font-semibold text-slate-800">&quot;{selectedTemplate.name}&quot;</span>?
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-6">
              <button
                type="button"
                onClick={() => loadTemplate(selectedTemplate, 'replace')}
                className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition cursor-pointer"
              >
                <RefreshCw className="h-3.5 w-3.5" /> Replace Events
              </button>
              <button
                type="button"
                onClick={() => loadTemplate(selectedTemplate, 'merge')}
                className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition cursor-pointer"
              >
                <Layers className="h-3.5 w-3.5" /> Merge Events
              </button>
            </div>
            
            <button
              type="button"
              onClick={() => { setShowConfirmModal(false); setSelectedTemplate(null); }}
              className="w-full text-center mt-3 text-[11px] text-slate-500 hover:text-slate-800 font-medium transition"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
