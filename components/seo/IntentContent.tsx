import React from 'react';
import { BuilderVariantId } from '../../types/schedule';

type IntentBlock = {
  heading: string;
  intro: string;
  sections: {
    title: string;
    body: string;
  }[];
};

const CONTENT: Record<BuilderVariantId, IntentBlock> = {
  default: {
    heading: 'A Free Online Schedule Maker for School, Work, and Personal Planning',
    intro: 'FreeScheduleMaker helps you turn scattered tasks, classes, appointments, and shifts into a clean visual timetable. It is designed for people searching for a free schedule maker online without spreadsheets, signups, or paid templates.',
    sections: [
      {
        title: 'Best for flexible schedule making',
        body: 'Use it for personal routines, study blocks, work rosters, family calendars, gym plans, appointment schedules, or any timetable that needs clear days, times, colors, and labels.',
      },
      {
        title: 'Built around visual output',
        body: 'Instead of forcing you into a complex project-management workflow, the tool focuses on a printable schedule layout you can download as an image and share with classmates, staff, teammates, or family.',
      },
      {
        title: 'No account barrier',
        body: 'Visitors can open the builder, add events, choose colors, adjust the time range, and export the final schedule directly from the browser.',
      },
    ],
  },
  weekly: {
    heading: 'Plan a Complete Weekly Schedule Online Free',
    intro: 'The weekly schedule maker is built for people who want to see the whole week at once. It works well for time blocking, recurring routines, meetings, study sessions, chores, fitness plans, family planning, and weekly work shifts.',
    sections: [
      {
        title: 'Create repeatable weekly routines',
        body: 'Add the same activity across multiple days, color-code your categories, and keep work, school, errands, and personal time easy to scan.',
      },
      {
        title: 'Useful weekly schedule examples',
        body: 'Students can map classes and homework. Freelancers can block client work and admin time. Families can coordinate school runs, grocery trips, chores, appointments, and weekend plans.',
      },
      {
        title: 'Simple export for sharing',
        body: 'Once the weekly timetable is ready, download it as a PNG for printing, sending in a message, or keeping on your desktop or phone.',
      },
    ],
  },
  university: {
    heading: 'Build a University Timetable for Lectures, Labs, Tutorials, and Exams',
    intro: 'The university timetable maker is focused on academic planning. It helps students organize course names, room numbers, lecture types, professors, tutorials, labs, study sessions, and exam preparation blocks.',
    sections: [
      {
        title: 'Designed for semester planning',
        body: 'Create a weekly class timetable before the semester starts so lecture times, lab sessions, office hours, and travel gaps are easy to understand.',
      },
      {
        title: 'Add academic details',
        body: 'Use labels for course names, instructors, rooms, tutorials, seminars, labs, exams, and breaks so the timetable is useful beyond basic start and end times.',
      },
      {
        title: 'Balance classes and study time',
        body: 'Block independent study sessions between lectures and reserve revision time before deadlines or exams.',
      },
    ],
  },
  rota: {
    heading: 'Create a Staff Rota for Retail, Hospitality, Clinics, and Small Teams',
    intro: 'The rota maker helps managers lay out weekly staff coverage without building a spreadsheet from scratch. It is useful for restaurants, cafes, retail stores, salons, clinics, offices, and service businesses.',
    sections: [
      {
        title: 'Plan staff coverage clearly',
        body: 'Add employee names, shift times, roles, departments, and locations so everyone can see who is working and when.',
      },
      {
        title: 'Reduce rota confusion',
        body: 'Color-coded shifts make it easier to spot opening coverage, closing coverage, lunch rushes, handovers, and gaps in the rota.',
      },
      {
        title: 'Share a printable rota',
        body: 'Export the rota as a PNG and send it to staff, print it for a noticeboard, or keep it as a weekly planning reference.',
      },
    ],
  },
  employee: {
    heading: 'Make Employee Schedules for Weekly Work Planning',
    intro: 'The employee schedule creator is for teams that need a clear view of work hours, staff assignments, departments, roles, and recurring weekly shifts.',
    sections: [
      {
        title: 'Assign shifts by person or role',
        body: 'Add employee names, job roles, locations, departments, and start and end times to create a practical weekly team schedule.',
      },
      {
        title: 'Works for small teams',
        body: 'Use it for shops, offices, clinics, service businesses, remote teams, volunteer groups, or part-time employee scheduling.',
      },
      {
        title: 'Easy to update each week',
        body: 'Adjust the time range, edit shift blocks, change colors, and export a clean version whenever the weekly schedule changes.',
      },
    ],
  },
  shift: {
    heading: 'Generate Shift Schedules for Morning, Evening, Night, and Rotating Teams',
    intro: 'The shift schedule generator is built for operations teams that need to show coverage across different shift types, departments, stations, or time ranges.',
    sections: [
      {
        title: 'Support different shift patterns',
        body: 'Plan morning shifts, evening shifts, overnight shifts, split shifts, 8-hour shifts, 12-hour shifts, and rotating coverage schedules.',
      },
      {
        title: 'Make coverage easier to scan',
        body: 'Use colors and labels to show shift groups, stations, teams, on-call blocks, breaks, and handover periods.',
      },
      {
        title: 'Useful for operations planning',
        body: 'Factories, warehouses, support desks, clinics, security teams, and service teams can use the exported schedule as a visual staffing reference.',
      },
    ],
  },
  revision: {
    heading: 'Create a Revision Timetable for Exams and Study Planning',
    intro: 'The revision timetable maker helps students break exam preparation into focused study blocks. It is useful for GCSE, A-Level, university exams, professional certifications, and any subject-heavy study plan.',
    sections: [
      {
        title: 'Organize subjects by time',
        body: 'Add subject names, topics, tutors, locations, and priority levels so each study session has a clear purpose.',
      },
      {
        title: 'Balance revision and breaks',
        body: 'A visual timetable makes it easier to spread difficult subjects across the week and protect time for rest, meals, and exercise.',
      },
      {
        title: 'Prepare a printable study plan',
        body: 'Download the revision timetable as a PNG and keep it near your desk, send it to a study group, or use it as your weekly exam-prep plan.',
      },
    ],
  },
};

export default function IntentContent({ variant }: { variant: BuilderVariantId }) {
  const content = CONTENT[variant] || CONTENT.default;

  return (
    <section className="py-16 px-6 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-10">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-4">{content.heading}</h2>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">{content.intro}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {content.sections.map((section) => (
            <article key={section.title} className="border border-slate-200 rounded-lg p-5 bg-slate-50">
              <h3 className="text-base font-bold text-slate-900 mb-2">{section.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{section.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
