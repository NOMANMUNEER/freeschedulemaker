'use client';

import React from 'react';
import Sidebar from '../../components/Sidebar';
import ScheduleGrid from '../../components/ScheduleGrid';

export default function BuilderPage() {
  return (
    <div className="flex h-screen w-screen bg-slate-50 text-slate-900 overflow-hidden">
      {/* Sidebar Controller */}
      <Sidebar />

      {/* Main Timetable View Area */}
      <main className="flex-1 p-8 overflow-y-auto">
        <ScheduleGrid />
      </main>
    </div>
  );
}