'use client';

import React, { useState } from 'react';
import { useScheduleStore } from '../../store/useScheduleStore';
import { exportScheduleToPNG } from '../../lib/exportSchedule';
import { Download, Trash2, Loader2 } from 'lucide-react';

export default function ExportButtons() {
  const { clearSchedule, currentVariant } = useScheduleStore();
  const [isExporting, setIsExporting] = useState(false);

  const handleDownload = async () => {
    setIsExporting(true);
    try {
      const fileName = `${currentVariant}_schedule.png`;
      await exportScheduleToPNG('schedule-grid', fileName);
    } catch (error) {
      alert('Failed to download schedule image. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="space-y-2 w-full">
      {/* Export to PNG Button */}
      <button 
        type="button"
        onClick={handleDownload}
        disabled={isExporting}
        className="w-full flex justify-center items-center gap-2 bg-[#eef1f6] text-[#1e3a8a] border border-[#1e3a8a]/30 font-bold hover:bg-[#1e3a8a] hover:text-white py-3 rounded-xl text-xs transition shadow-xs disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
      >
        {isExporting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Exporting...
          </>
        ) : (
          <>
            <Download className="h-4 w-4" /> Download Free Schedule (PNG)
          </>
        )}
      </button>

      {/* Clear Schedule Button */}
      <button 
        type="button"
        onClick={() => {
          if (confirm('Are you sure you want to clear your current schedule? This will delete all active events.')) {
            clearSchedule();
          }
        }} 
        className="w-full text-center border border-slate-200 text-slate-500 hover:bg-red-50 hover:text-red-600 hover:border-red-200 py-2.5 rounded-xl text-xs font-semibold transition cursor-pointer"
      >
        Clear Current Schedule
      </button>
    </div>
  );
}
