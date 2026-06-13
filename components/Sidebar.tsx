'use client';

import React, { useState } from 'react';
import AddEventModal from './AddEventModal';
import SettingsModal from './SettingsModal';
import { useScheduleStore } from '../store/useScheduleStore';
import { Trash2, Plus, Calendar, Settings, Download, Loader2 } from 'lucide-react';
import { toPng } from 'html-to-image'; // 🚀 Using the modern export library

export default function Sidebar() {
  const { events, clearSchedule, removeEvent } = useScheduleStore();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isAddEventOpen, setIsAddEventOpen] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  // 📸 The NEW Export Function using html-to-image
  const handleExportPNG = async () => {
    const gridElement = document.getElementById('schedule-grid');
    if (!gridElement) return;

    setIsExporting(true);
    try {
      // toPng easily handles modern Tailwind CSS and SVGs without crashing
      const dataUrl = await toPng(gridElement, { 
        pixelRatio: 2, // High resolution
        backgroundColor: '#ffffff', // Ensures no transparent background
        style: {
          margin: '0', // Prevents weird offsetting
        }
      });
      
      // Create a fake link and trigger the download
      const link = document.createElement('a');
      link.download = 'My_Schedule.png';
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error('Failed to export schedule:', error);
      alert('Failed to export schedule. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <>
      <aside className="w-80 border-r border-slate-200 bg-white p-6 flex flex-col justify-between shrink-0 h-full">
        <div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-6 w-6 text-indigo-600" />
              <h1 className="text-xl font-bold tracking-tight text-slate-800">ScheduleBuilder</h1>
            </div>
            <button onClick={() => setIsSettingsOpen(true)} className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition" title="Settings">
              <Settings className="h-5 w-5" />
            </button>
          </div>

          {/* Trigger Button to Open Add Event Modal */}
          <button 
            onClick={() => setIsAddEventOpen(true)}
            className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white font-medium py-2.5 px-4 rounded-lg hover:bg-indigo-700 transition mb-4 shadow-sm"
          >
            <Plus className="h-4 w-4" /> Add Course / Event
          </button>

          {/* Active items list loop */}
          <div className="mt-6">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Active Events ({events.length})</h3>
            <div className="space-y-2 max-h-[50vh] overflow-y-auto pr-1">
              {events.map((event) => {
                const displayColor = event.color || '#4f46e5';
                
                return (
                  <div key={event.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="min-w-0 flex-1 pr-2">
                      <p style={{ color: displayColor }} className="font-bold text-sm truncate">{event.title}</p>
                      <p className="text-xs text-slate-500">{event.startTime} - {event.endTime}</p>
                    </div>
                    <button onClick={() => removeEvent(event.id)} className="text-slate-400 hover:text-red-500 p-1.5 transition">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer Actions Container */}
        <div className="space-y-3 pt-4 border-t border-slate-100">
          
          {/* Export to PNG Button */}
          <button 
            onClick={handleExportPNG}
            disabled={isExporting}
            className="w-full flex justify-center items-center gap-2 bg-[#eef1f6] text-[#1e3a8a] border border-[#1e3a8a]/30 font-bold hover:bg-[#1e3a8a] hover:text-white py-2.5 rounded-lg text-sm transition shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isExporting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" /> Exporting...
              </>
            ) : (
              <>
                <Download className="h-4 w-4" /> Export as PNG
              </>
            )}
          </button>

          {/* Clear Schedule Button */}
          <button 
            onClick={clearSchedule} 
            className="w-full text-center border border-slate-200 text-slate-600 hover:bg-red-50 hover:text-red-600 py-2.5 rounded-lg text-sm font-medium transition"
          >
            Clear Schedule
          </button>
        </div>
      </aside>

      {/* Popover Modals Mount Anchor Points */}
      <SettingsModal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
      <AddEventModal isOpen={isAddEventOpen} onClose={() => setIsAddEventOpen(false)} />
    </>
  );
}