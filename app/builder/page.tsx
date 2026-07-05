import React from 'react';
import ScheduleBuilder from '../../components/builder/ScheduleBuilder';
import { generatePageMetadata } from '../../lib/generateMetadata';
import type { Metadata } from 'next';

export const metadata: Metadata = generatePageMetadata('default');

export default function BuilderPage() {
  return (
    <main className="h-screen w-screen bg-slate-50 overflow-hidden">
      <ScheduleBuilder variant="default" fullScreen={true} />
    </main>
  );
}