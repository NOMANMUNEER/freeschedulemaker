import type { Metadata } from 'next';
import SpecializedSchedulePage from '../../components/seo/SpecializedSchedulePage';

export const metadata: Metadata = {
  title: 'Timetable Maker Online Free | Create a Printable Timetable',
  description: 'Use this free timetable maker online to create school timetables, class schedules, weekly plans, study timetables, and work schedules.',
  keywords: 'timetable maker, free timetable maker, timetable maker online free, online timetable maker, create timetable online free',
  alternates: {
    canonical: 'https://www.freeschedulemaker.com/timetable-maker',
  },
  openGraph: {
    title: 'Timetable Maker Online Free | FreeScheduleMaker',
    description: 'Create a printable timetable online for school, study, classes, or work.',
    url: 'https://www.freeschedulemaker.com/timetable-maker',
    type: 'website',
  },
};

export default function TimetableMakerPage() {
  return (
    <SpecializedSchedulePage
      badge="Free Timetable Maker"
      heading="Timetable Maker Online Free"
      subheading="Create a printable timetable for school, college, revision, work, or personal planning. Add time blocks, color-code activities, and download your timetable as a PNG."
      builderVariant="default"
      sections={[
        {
          title: 'Create any timetable layout',
          body: 'Use the timetable maker for classes, weekly routines, employee schedules, study plans, workouts, appointments, and daily planning.',
        },
        {
          title: 'Customize days and times',
          body: 'Choose the days you want to show, set start and end hours, and adjust the spacing for short or long schedule blocks.',
        },
        {
          title: 'Print or share instantly',
          body: 'Export the timetable as a PNG image so it is simple to print, save, send, or use as a planning reference.',
        },
      ]}
      faqs={[
        {
          question: 'What can I make with this timetable maker?',
          answer: 'You can make school timetables, college schedules, weekly plans, revision timetables, work rosters, and personal routines.',
        },
        {
          question: 'Is the timetable maker online free?',
          answer: 'Yes. The tool is free to use and does not require an account.',
        },
        {
          question: 'Can I download my timetable?',
          answer: 'Yes. You can download the finished timetable as a PNG image for printing or sharing.',
        },
      ]}
    />
  );
}
