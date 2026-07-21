import Link from 'next/link';

const SEARCH_INTENTS = [
  {
    title: 'Free Online Schedule Maker',
    body: 'Create a schedule online for classes, work shifts, study blocks, appointments, workouts, and routines. FreeScheduleMaker gives you a visual timetable you can edit, color-code, and download without creating an account.',
    href: '/',
    linkLabel: 'Open the free schedule maker',
  },
  {
    title: 'Free Schedule Builder',
    body: 'Use the schedule builder when you want more control than a basic planner template. Choose days, set hours, add events, apply colors, and export the finished schedule as a PNG for printing or sharing.',
    href: '/builder',
    linkLabel: 'Start the schedule builder',
  },
  {
    title: 'Schedule Maker Free Online',
    body: 'If you need a schedule maker free online, start with the main builder and then choose a more specific tool for weekly schedules, class timetables, work schedules, or study plans.',
    href: '/tools',
    linkLabel: 'Browse all schedule tools',
  },
  {
    title: 'Weekly Schedule Maker Online Free',
    body: 'For recurring routines, school weeks, work blocks, chores, workouts, or family planning, the weekly schedule maker helps you see the whole week in one clean layout.',
    href: '/weekly-schedule-maker',
    linkLabel: 'Make a weekly schedule',
  },
];

export default function HomepageSearchIntent() {
  return (
    <section className="py-16 px-6 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-10">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-4">
            Free Schedule Maker, Builder, and Timetable Tools
          </h2>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed">
            Google is already showing FreeScheduleMaker for schedule maker searches, so this page is built to help you quickly choose the right free scheduling tool for your task.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {SEARCH_INTENTS.map((item) => (
            <article key={item.title} className="bg-white border border-slate-200 rounded-lg p-5">
              <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">{item.body}</p>
              <Link href={item.href} className="text-xs font-bold text-indigo-600 hover:underline">
                {item.linkLabel}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
