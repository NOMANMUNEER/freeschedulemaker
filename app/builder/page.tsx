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
      <main className="flex-1 p-8 overflow-y-auto flex flex-col">
        <h1 className="sr-only">Free Schedule Builder &amp; Generator</h1>
        <div className="flex-1">
          <ScheduleGrid />
        </div>
        <div className="mt-8 text-center text-sm text-slate-500 max-w-2xl mx-auto">
          <p>This free online schedule builder lets you generate any schedule instantly. Use it as a class schedule generator, work roster creator, or weekly planner — all for free, no login required.</p>
        </div>
      </main>
    </div>
  );
}