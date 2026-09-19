'use client';

import React, { useEffect, useState } from 'react';
import { useScheduleStore } from '../../store/useScheduleStore';
import { BuilderVariantId } from '../../types/schedule';
import { BUILDER_VARIANTS } from '../../config/builderVariants';
import ScheduleGrid from './ScheduleGrid';
import SettingsModal from './SettingsModal';
import AddEventModal from './AddEventModal';
import TemplateSelector from './TemplateSelector';
import ExportButtons from './ExportButtons';
import FeedbackBox from '../common/FeedbackBox';
import LeadCaptureModal from '../common/LeadCaptureModal';
import { LEAD_CAPTURE_CONFIG } from '../../config/leadCapture';
import { Calendar, Plus, Settings, Sparkles } from 'lucide-react';

type ScheduleBuilderProps = {
  variant: BuilderVariantId;
  fullScreen?: boolean;
};

export default function ScheduleBuilder({ variant, fullScreen = false }: ScheduleBuilderProps) {
  const { events, removeEvent, switchVariant, currentVariant } = useScheduleStore();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isAddEventOpen, setIsAddEventOpen] = useState(false);
  const [isLeadCaptureOpen, setIsLeadCaptureOpen] = useState(false);

  // Switch state variant on mount/change
  useEffect(() => {
    switchVariant(variant);
  }, [variant, switchVariant]);

  const config = BUILDER_VARIANTS[currentVariant] || BUILDER_VARIANTS.default;

  const showLeadCapture = () => {
    if (typeof window !== 'undefined' && !localStorage.getItem(LEAD_CAPTURE_CONFIG.storageKey)) {
      setIsLeadCaptureOpen(true);
    }
  };

  return (
    <div className={`w-full bg-slate-50 text-slate-900 ${fullScreen ? 'min-h-screen lg:h-screen flex overflow-hidden' : 'py-5 px-3 sm:py-8 sm:px-6 lg:px-8 max-w-7xl mx-auto'}`}>
      
      <div className={`w-full flex flex-col lg:flex-row gap-4 lg:gap-8 ${fullScreen ? 'h-full overflow-hidden' : ''}`}>
        
        {/* SIDEBAR PANEL */}
        <aside className={`bg-white border border-slate-200 rounded-xl lg:rounded-2xl p-4 sm:p-6 flex flex-col justify-between shrink-0 shadow-xs ${
          fullScreen ? 'w-full lg:w-80 lg:h-full lg:border-r lg:border-y-0 lg:rounded-none max-h-[48vh] lg:max-h-none overflow-hidden' : 'w-full lg:w-80'
        }`}>
          <div className="space-y-6 overflow-y-auto pr-1 flex-1">
            
            {/* Header: Title and Settings */}
            <div className="flex items-center justify-between gap-3 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Calendar className="h-6 w-6 text-indigo-600" />
                <span className="font-bold text-base sm:text-lg text-slate-900 tracking-tight">Builder Options</span>
              </div>
              <button 
                type="button"
                onClick={() => setIsSettingsOpen(true)} 
                className="p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-800 rounded-lg transition" 
                title="Customize Timetable Layout"
              >
                <Settings className="h-5 w-5" />
              </button>
            </div>

            {/* Quick Template Selector */}
            <div>
              <div className="flex items-center gap-1.5 mb-2.5">
                <Sparkles className="h-4 w-4 text-amber-500" />
                <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Starter Templates</h3>
              </div>
              <TemplateSelector />
            </div>

            {/* Add Event Button */}
            <button 
              type="button"
              onClick={() => setIsAddEventOpen(true)}
              className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-xl transition shadow-xs hover:shadow-md cursor-pointer"
            >
              <Plus className="h-4.5 w-4.5" /> {config.primaryActionLabel}
            </button>

            {/* Active Items List */}
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                Active Events ({events.length})
              </h3>
              {events.length === 0 ? (
                <div className="text-center py-6 px-4 border border-dashed border-slate-200 bg-slate-50/50 rounded-xl text-xs text-slate-400">
                  <p>No events added yet.</p>
                  <p className="mt-1">Click the button above or a calendar grid cell to get started.</p>
                </div>
              ) : (
                <div className="space-y-2 max-h-44 sm:max-h-[300px] overflow-y-auto pr-1">
                  {events.map((event) => {
                    const displayColor = event.color || '#4f46e5';
                    return (
                      <div key={event.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-200">
                        <div className="min-w-0 flex-1 pr-2">
                          <p style={{ color: displayColor }} className="font-bold text-xs truncate">{event.title}</p>
                          <p className="text-[10px] text-slate-500 font-medium">
                            {event.startTime} - {event.endTime}
                            {event.location && ` | ${event.location}`}
                          </p>
                        </div>
                        <button 
                          type="button"
                          onClick={() => removeEvent(event.id)} 
                          className="text-slate-400 hover:text-red-500 p-1.5 transition rounded-lg hover:bg-slate-100"
                        >
                          &times;
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

          </div>

          {/* Action Buttons Section */}
          <div className="pt-4 border-t border-slate-100 mt-6">
            <ExportButtons onSuccessfulExport={showLeadCapture} />
          </div>
        </aside>

        {/* MAIN CALENDAR GRID VIEW */}
        <main className={`flex-1 flex flex-col min-w-0 ${fullScreen ? 'h-full overflow-y-auto p-3 sm:p-6' : 'space-y-8'}`}>
          <div className="lg:hidden rounded-lg border border-indigo-100 bg-indigo-50 px-3 py-2 text-[11px] font-semibold text-indigo-900">
            Swipe the schedule left and right to view all days. Tap an empty time slot to add an event.
          </div>
          <div className="flex-1">
            <ScheduleGrid />
          </div>
          
          {/* Feedback Box Render */}
          {!fullScreen && (
            <div className="mt-4">
              <FeedbackBox />
            </div>
          )}
        </main>
      </div>

      {/* Popovers */}
      {isSettingsOpen && (
        <SettingsModal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
      )}
      {isAddEventOpen && (
        <AddEventModal isOpen={isAddEventOpen} onClose={() => setIsAddEventOpen(false)} />
      )}
      {isLeadCaptureOpen && <LeadCaptureModal page={window.location.pathname} onClose={() => setIsLeadCaptureOpen(false)} />}
    </div>
  );
}
