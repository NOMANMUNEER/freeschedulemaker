import type { Metadata } from 'next';
import SpecializedSchedulePage from '../../components/seo/SpecializedSchedulePage';

export const metadata: Metadata = {
  title: 'Class Schedule Maker Online | Create a Class Timetable Free',
  description: 'Use this free class schedule maker to create a class timetable online for school, college, lectures, labs, study blocks, and exams.',
  keywords: 'class schedule maker, create class schedule, class schedule maker online, class schedule generator online, free class schedule maker',
  alternates: {
    canonical: 'https://www.freeschedulemaker.com/class-schedule-maker',
  },
  openGraph: {
    title: 'Class Schedule Maker Online | FreeScheduleMaker',
    description: 'Create a class schedule online for lectures, labs, study time, and exams.',
    url: 'https://www.freeschedulemaker.com/class-schedule-maker',
    type: 'website',
  },
};

export default function ClassScheduleMakerPage() {
  return (
    <SpecializedSchedulePage
      badge="Free Class Schedule Maker"
      heading="Class Schedule Maker Online"
      subheading="Create a clear class schedule for school, college, lectures, labs, tutorials, study sessions, and exams. Add your classes, color-code subjects, and download your timetable for free."
      builderVariant="university"
      sections={[
        {
          title: 'Plan every class block',
          body: 'Add class names, lecture times, rooms, teachers, labs, tutorials, study periods, and breaks into one weekly timetable.',
        },
        {
          title: 'Useful for students and teachers',
          body: 'Students can organize their week, while teachers can prepare office hours, classroom schedules, and course timetables.',
        },
        {
          title: 'Export a clean timetable',
          body: 'Download your class schedule as a PNG image and keep it on your phone, laptop, wall, or student planner.',
        },
      ]}
      faqs={[
        {
          question: 'Is this class schedule maker free?',
          answer: 'Yes. You can create, edit, color-code, and download your class schedule without paying or creating an account.',
        },
        {
          question: 'Can I add lectures, labs, and tutorials?',
          answer: 'Yes. The academic layout supports class names, rooms, teachers, lecture types, labs, tutorials, exams, and breaks.',
        },
        {
          question: 'Can I print my class timetable?',
          answer: 'Yes. Export the finished schedule as a PNG image, then print it or share it with classmates.',
        },
      ]}
    />
  );
}
