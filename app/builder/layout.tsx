import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Schedule Builder — Free Online Schedule Generator | freeschedulemaker.com',
  description: 'Use our free schedule builder and generator online. Drag, drop, customize — create class schedules, work rosters, and weekly timetables.',
};

export default function BuilderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
