'use client';

import React, { useState } from 'react';
import { useScheduleStore } from '../../store/useScheduleStore';
import { exportScheduleToPDF, exportScheduleToPNG } from '../../lib/exportSchedule';
import { Download, FileText, Loader2 } from 'lucide-react';

type ExportButtonsProps = { onSuccessfulExport?: () => void };

export default function ExportButtons({ onSuccessfulExport }: ExportButtonsProps) {
  const { clearSchedule, currentVariant } = useScheduleStore();
  const [isExporting, setIsExporting] = useState(false);
  const [isPdfExporting, setIsPdfExporting] = useState(false);

  const handleDownload = async () => {
    setIsExporting(true);
    try {
      const fileName = `${currentVariant}_schedule.png`;
      await exportScheduleToPNG('schedule-grid', fileName);
      onSuccessfulExport?.();
    } catch {
      alert('Failed to download schedule image. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  const handleSavePDF = async () => {
    setIsPdfExporting(true);
    try {
      await exportScheduleToPDF('schedule-grid', `${currentVariant.replace(/_/g, ' ')} schedule`);
      onSuccessfulExport?.();
    } catch {
      alert('Failed to prepare PDF. Please allow popups and try again.');
    } finally {
      setIsPdfExporting(false);
    }
  };

  return (
    <div className="space-y-2 w-full">
      {/* Export Buttons */}
      <button 
        type="button"
        onClick={handleDownload}
        disabled={isExporting}
        className="w-full min-h-11 flex justify-center items-center gap-2 bg-[#eef1f6] text-[#1e3a8a] border border-[#1e3a8a]/30 font-bold hover:bg-[#1e3a8a] hover:text-white px-3 py-3 rounded-xl text-xs transition shadow-xs disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
      >
        {isExporting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Exporting...
          </>
        ) : (
          <>
            <Download className="h-4 w-4 shrink-0" />
            <span className="leading-tight">Download Schedule PNG</span>
          </>
        )}
      </button>

      <button
        type="button"
        onClick={handleSavePDF}
        disabled={isPdfExporting}
        className="w-full min-h-11 flex justify-center items-center gap-2 bg-white text-slate-800 border border-slate-300 font-bold hover:bg-slate-900 hover:text-white px-3 py-3 rounded-xl text-xs transition shadow-xs disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
      >
        {isPdfExporting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Preparing PDF...
          </>
        ) : (
          <>
            <FileText className="h-4 w-4 shrink-0" />
            <span className="leading-tight">Save as PDF</span>
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
        className="w-full min-h-10 text-center border border-slate-200 text-slate-500 hover:bg-red-50 hover:text-red-600 hover:border-red-200 px-3 py-2.5 rounded-xl text-xs font-semibold transition cursor-pointer"
      >
        Clear Current Schedule
      </button>
    </div>
  );
}
