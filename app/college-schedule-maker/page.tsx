import type { Metadata } from 'next';
import SpecializedSchedulePage from '../../components/seo/SpecializedSchedulePage';

export const metadata: Metadata = {
  title: 'College Schedule Maker | Free College Timetable Creator',
  description: 'Create a college schedule online for classes, lectures, labs, study sessions, office hours, exams, and weekly routines.',
  keywords: 'college schedule maker, free college schedule maker, college timetable maker, schedule maker college, college calendar maker',
  alternates: {
    canonical: 'https://www.freeschedulemaker.com/college-schedule-maker',
  },
  openGraph: {
    title: 'College Schedule Maker | FreeScheduleMaker',
    description: 'Create a college schedule online for classes, labs, exams, and study time.',
    url: 'https://www.freeschedulemaker.com/college-schedule-maker',
    type: 'website',
  },
};

export default function CollegeScheduleMakerPage() {
  return (
    <SpecializedSchedulePage
      badge="Free College Schedule Maker"
      heading="College Schedule Maker"
      subheading="Build a college schedule for lectures, labs, seminars, study blocks, office hours, work shifts, and exam preparation. Make your semester easier to manage with a free online timetable."
      builderVariant="university"
      sections={[
        {
          title: 'Map your semester week',
          body: 'Put your college classes, labs, professor office hours, study sessions, and campus activities into one weekly view.',
        },
        {
          title: 'Balance class and study time',
          body: 'Use open spaces between lectures to schedule reading, assignments, revision, meals, commuting, and part-time work.',
        },
        {
          title: 'Keep it easy to share',
          body: 'Download your college schedule as an image and send it to friends, classmates, family, or study partners.',
        },
      ]}
      faqs={[
        {
          question: 'Can I use this for college classes?',
          answer: 'Yes. The college schedule maker is designed for weekly class timetables, lectures, labs, seminars, and study sessions.',
        },
        {
          question: 'Can I include study blocks and work shifts?',
          answer: 'Yes. You can add any scheduled block, including homework time, library time, office hours, part-time work, and breaks.',
        },
        {
          question: 'Do I need to sign up?',
          answer: 'No. You can create and export your college schedule directly in the browser.',
        },
      ]}
    />
  );
}
