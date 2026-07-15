import { BuilderVariantId } from '../types/schedule';

export type ProgrammaticPage = {
  slug: string;
  title: string;
  description: string;
  keywords: string;
  badge: string;
  heading: string;
  subheading: string;
  builderVariant: BuilderVariantId;
  sections: {
    title: string;
    body: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

export const PROGRAMMATIC_PAGES: ProgrammaticPage[] = [
  {
    slug: 'class-timetable-maker',
    title: 'Class Timetable Maker Online Free | Build a Class Schedule',
    description: 'Create a class timetable online for lectures, labs, tutorials, study blocks, and exams. Free class timetable maker with PNG export.',
    keywords: 'class timetable maker, class timetable creator, class schedule maker, class schedule creator, online class schedule maker',
    badge: 'Free Class Timetable Maker',
    heading: 'Class Timetable Maker Online Free',
    subheading: 'Build a clear class timetable for lectures, labs, tutorials, seminars, exams, and study sessions. Add your classes, color-code subjects, and download the timetable as a PNG.',
    builderVariant: 'university',
    sections: [
      {
        title: 'Organize every class',
        body: 'Add subject names, teachers, rooms, lecture types, labs, tutorials, seminars, and exam blocks in a weekly academic layout.',
      },
      {
        title: 'Best for school and college',
        body: 'Use the timetable for high school, college, university, online courses, training programs, or mixed class and study routines.',
      },
      {
        title: 'Easy to print or share',
        body: 'Export your class timetable as a clean PNG image for printing, sharing with classmates, or saving on your phone.',
      },
    ],
    faqs: [
      {
        question: 'Is this class timetable maker free?',
        answer: 'Yes. You can create, customize, and download your class timetable without paying or creating an account.',
      },
      {
        question: 'Can I add labs and tutorials?',
        answer: 'Yes. The academic schedule builder supports lectures, labs, tutorials, seminars, exams, breaks, rooms, and teacher names.',
      },
      {
        question: 'Can I use it for a weekly class timetable?',
        answer: 'Yes. The timetable layout is designed to show classes across the week with clear days and times.',
      },
    ],
  },
  {
    slug: 'course-schedule-maker',
    title: 'Course Schedule Maker Online | Free Course Timetable Builder',
    description: 'Use this free course schedule maker to organize course times, lectures, labs, assignments, office hours, and study sessions.',
    keywords: 'course schedule maker, course timetable maker, course schedule creator, online course schedule maker, course calendar maker',
    badge: 'Free Course Schedule Maker',
    heading: 'Course Schedule Maker Online',
    subheading: 'Create a course schedule for classes, lectures, labs, professor office hours, assignment blocks, and exam preparation. Build it online and download your plan for free.',
    builderVariant: 'university',
    sections: [
      {
        title: 'Map your course week',
        body: 'Place each course into a weekly view with its lecture time, room, instructor, and related study blocks.',
      },
      {
        title: 'Track academic commitments',
        body: 'Add labs, tutorials, office hours, assignment time, group work, and exam review sessions around your classes.',
      },
      {
        title: 'Create a visual semester plan',
        body: 'Use colors to separate courses and export the finished schedule as an image you can reference all semester.',
      },
    ],
    faqs: [
      {
        question: 'Can I make a course schedule for multiple classes?',
        answer: 'Yes. Add as many course blocks as you need and color-code them by subject or course type.',
      },
      {
        question: 'Does it work for online courses?',
        answer: 'Yes. You can use locations for room numbers, video links, or online class notes.',
      },
      {
        question: 'Can I include study time?',
        answer: 'Yes. Add study sessions, homework time, revision blocks, or assignment work as normal schedule events.',
      },
    ],
  },
  {
    slug: 'work-schedule-maker',
    title: 'Work Schedule Maker Online Free | Create Staff Schedules',
    description: 'Create work schedules online for employees, shifts, teams, departments, and weekly coverage. Free work schedule maker with PNG export.',
    keywords: 'work schedule maker, work schedule maker online, free work schedule maker, work schedule generator, work schedule creator',
    badge: 'Free Work Schedule Maker',
    heading: 'Work Schedule Maker Online Free',
    subheading: 'Create weekly work schedules for employees, shifts, departments, locations, and team coverage. Build a clear staff schedule online and export it as a PNG.',
    builderVariant: 'employee',
    sections: [
      {
        title: 'Schedule employees clearly',
        body: 'Add employee names, roles, departments, locations, shift times, and task notes so everyone can see the weekly plan.',
      },
      {
        title: 'Useful for small teams',
        body: 'Plan schedules for offices, retail teams, service businesses, clinics, restaurants, volunteers, and part-time staff.',
      },
      {
        title: 'Share the finished schedule',
        body: 'Download the work schedule as an image and send it to employees, print it, or post it for your team.',
      },
    ],
    faqs: [
      {
        question: 'Is this work schedule maker free?',
        answer: 'Yes. You can create and export work schedules without signing up or paying.',
      },
      {
        question: 'Can I schedule multiple employees?',
        answer: 'Yes. Add employee names to each shift and use colors to separate people, roles, or departments.',
      },
      {
        question: 'Can I print the schedule?',
        answer: 'Yes. Export the schedule as a PNG image and print or share it with your team.',
      },
    ],
  },
  {
    slug: 'staff-schedule-maker',
    title: 'Staff Schedule Maker Online | Free Team Roster Builder',
    description: 'Make staff schedules online for teams, shifts, departments, and weekly coverage. Free staff schedule maker for small businesses.',
    keywords: 'staff schedule maker, staff schedule creator, staff schedule builder, team schedule maker, staff rota maker',
    badge: 'Free Staff Schedule Maker',
    heading: 'Staff Schedule Maker Online',
    subheading: 'Build a staff schedule for weekly coverage, employee shifts, departments, roles, and locations. Keep the roster easy to read, print, and share.',
    builderVariant: 'employee',
    sections: [
      {
        title: 'Plan staff coverage',
        body: 'Create a clear view of who is working, when each shift starts, and which role or department each person covers.',
      },
      {
        title: 'Reduce scheduling confusion',
        body: 'Use color-coded blocks and labels so employees can quickly understand their schedule for the week.',
      },
      {
        title: 'Works without spreadsheets',
        body: 'Build a visual staff schedule directly in the browser and export it as an image when the roster is ready.',
      },
    ],
    faqs: [
      {
        question: 'Can I use this as a staff rota maker?',
        answer: 'Yes. The tool works well for staff rotas, employee schedules, work rosters, and team coverage planning.',
      },
      {
        question: 'Can I add roles and locations?',
        answer: 'Yes. Each schedule block can include a person, location, category, and notes.',
      },
      {
        question: 'Do I need an account?',
        answer: 'No. You can build and download your staff schedule without creating an account.',
      },
    ],
  },
  {
    slug: 'student-schedule-maker',
    title: 'Student Schedule Maker Online Free | Plan Classes and Study Time',
    description: 'Create a student schedule for classes, homework, study blocks, exams, part-time work, and weekly routines.',
    keywords: 'student schedule maker, student schedule generator, school schedule maker, class schedule maker, study schedule maker',
    badge: 'Free Student Schedule Maker',
    heading: 'Student Schedule Maker Online Free',
    subheading: 'Plan your student week with classes, homework, study time, exams, clubs, work shifts, and breaks. Create a visual schedule you can download and follow.',
    builderVariant: 'university',
    sections: [
      {
        title: 'Balance classes and study',
        body: 'Add lectures, homework sessions, revision blocks, assignments, meals, commuting, and part-time work to one schedule.',
      },
      {
        title: 'Keep the week visible',
        body: 'A weekly student schedule helps you spot free time, avoid clashes, and keep important deadlines easier to manage.',
      },
      {
        title: 'Useful for every level',
        body: 'Use it for school, college, university, online courses, exam prep, or self-study routines.',
      },
    ],
    faqs: [
      {
        question: 'Can students use this for free?',
        answer: 'Yes. The student schedule maker is free and works in your browser without signup.',
      },
      {
        question: 'Can I include non-class activities?',
        answer: 'Yes. Add clubs, sports, work shifts, commute time, meals, and personal routines.',
      },
      {
        question: 'Can I save my student schedule?',
        answer: 'You can download it as a PNG image and keep it on your device or print it.',
      },
    ],
  },
  {
    slug: 'study-schedule-maker',
    title: 'Study Schedule Maker Online Free | Create a Study Timetable',
    description: 'Use this free study schedule maker to plan study blocks, subjects, revision sessions, breaks, tutors, and exam preparation.',
    keywords: 'study schedule maker, study schedule creator, study timetable maker, schedule maker for studying, exam study schedule maker',
    badge: 'Free Study Schedule Maker',
    heading: 'Study Schedule Maker Online Free',
    subheading: 'Create a study schedule for subjects, revision sessions, assignments, practice tests, tutor calls, and breaks. Build a focused timetable for exam preparation.',
    builderVariant: 'revision',
    sections: [
      {
        title: 'Plan focused study blocks',
        body: 'Add subjects, topics, priorities, study locations, and tutor sessions so every block has a clear purpose.',
      },
      {
        title: 'Prepare for exams',
        body: 'Spread difficult subjects across the week and reserve time for practice papers, review, memorization, and breaks.',
      },
      {
        title: 'Build a routine you can follow',
        body: 'A visual study schedule makes it easier to stay consistent and avoid last-minute cramming.',
      },
    ],
    faqs: [
      {
        question: 'Can I make an exam study schedule?',
        answer: 'Yes. Add subjects, revision blocks, exam prep sessions, practice tests, and breaks into the weekly timetable.',
      },
      {
        question: 'Can I prioritize subjects?',
        answer: 'Yes. Use labels, notes, and colors to show high-priority subjects and difficult topics.',
      },
      {
        question: 'Can I download the study timetable?',
        answer: 'Yes. Export it as a PNG image for printing or keeping near your desk.',
      },
    ],
  },
  {
    slug: 'daily-schedule-maker',
    title: 'Daily Schedule Maker Online Free | Plan Your Day',
    description: 'Create a daily schedule online for tasks, meetings, study time, workouts, chores, and routines. Free daily schedule maker.',
    keywords: 'daily schedule maker, daily schedule creator, online daily schedule maker, free online daily schedule maker, daily routine maker',
    badge: 'Free Daily Schedule Maker',
    heading: 'Daily Schedule Maker Online Free',
    subheading: 'Plan your day with time blocks for work, school, meetings, meals, workouts, chores, errands, and personal routines. Create a clean visual schedule for free.',
    builderVariant: 'default',
    sections: [
      {
        title: 'Time-block your day',
        body: 'Add focused work, appointments, routines, study sessions, workouts, chores, and breaks into an easy-to-scan schedule.',
      },
      {
        title: 'Make routines visible',
        body: 'Use colors to separate work, health, family, school, errands, and personal tasks.',
      },
      {
        title: 'Download and follow it',
        body: 'Export the finished daily schedule as an image and keep it on your phone, desktop, or printed planner.',
      },
    ],
    faqs: [
      {
        question: 'Can I use this for a daily routine?',
        answer: 'Yes. The daily schedule maker works for routines, task planning, appointments, school, work, and personal habits.',
      },
      {
        question: 'Is the daily schedule maker free?',
        answer: 'Yes. You can create and download a daily schedule for free.',
      },
      {
        question: 'Can I color-code my day?',
        answer: 'Yes. Choose colors for different tasks, categories, or priority levels.',
      },
    ],
  },
  {
    slug: 'workout-schedule-maker',
    title: 'Workout Schedule Maker Online Free | Plan Fitness Routines',
    description: 'Create a workout schedule online for gym sessions, training days, rest days, cardio, strength workouts, and fitness routines.',
    keywords: 'workout schedule maker, workout routine maker, workout routine creator, gym routine maker, workout plan maker',
    badge: 'Free Workout Schedule Maker',
    heading: 'Workout Schedule Maker Online Free',
    subheading: 'Plan workouts, gym sessions, cardio, strength training, rest days, mobility work, and weekly fitness routines. Build your workout schedule online and download it.',
    builderVariant: 'weekly',
    sections: [
      {
        title: 'Plan training days',
        body: 'Add strength workouts, cardio sessions, mobility work, rest days, sports practice, and recovery blocks to your weekly schedule.',
      },
      {
        title: 'Keep workouts consistent',
        body: 'A visual workout schedule helps you balance muscle groups, recovery time, and training frequency across the week.',
      },
      {
        title: 'Share or print the plan',
        body: 'Download your workout schedule as a PNG and keep it on your phone, gym bag, or wall planner.',
      },
    ],
    faqs: [
      {
        question: 'Can I create a weekly workout routine?',
        answer: 'Yes. Use the weekly layout to plan gym days, cardio, strength sessions, rest days, and recovery.',
      },
      {
        question: 'Can I color-code workout types?',
        answer: 'Yes. Use different colors for strength, cardio, mobility, sports, and rest days.',
      },
      {
        question: 'Is this a workout plan generator?',
        answer: 'It is a schedule maker for organizing your workout plan. You choose the exercises or training blocks you want to add.',
      },
    ],
  },
  {
    slug: 'rotating-schedule-maker',
    title: 'Rotating Schedule Maker Online | Free Shift Rotation Planner',
    description: 'Create rotating schedules online for shifts, teams, departments, 24/7 coverage, and weekly work rotations.',
    keywords: 'rotating schedule maker, rotating schedule generator, rotating schedule generator free, shift rotation planner, shift schedule maker',
    badge: 'Free Rotating Schedule Maker',
    heading: 'Rotating Schedule Maker Online',
    subheading: 'Plan rotating shifts for teams, departments, morning shifts, evening shifts, night shifts, and 24/7 coverage. Create a clear rotation schedule online.',
    builderVariant: 'shift',
    sections: [
      {
        title: 'Plan shift rotations',
        body: 'Add morning, evening, night, on-call, split, or rotating shift blocks across the weekly schedule.',
      },
      {
        title: 'Show team coverage',
        body: 'Use labels and colors to show teams, stations, departments, roles, and handover periods.',
      },
      {
        title: 'Export the rotation',
        body: 'Download the rotating schedule as a PNG for printing, sharing, or posting in a workplace.',
      },
    ],
    faqs: [
      {
        question: 'Can I make rotating shift schedules?',
        answer: 'Yes. You can create repeating shift blocks for morning, evening, night, and rotating team coverage.',
      },
      {
        question: 'Is it useful for 24/7 teams?',
        answer: 'Yes. The shift layout can show overnight work, multiple teams, and coverage across different hours.',
      },
      {
        question: 'Can I print the rotating schedule?',
        answer: 'Yes. Export the final schedule as a PNG image and print or share it.',
      },
    ],
  },
];

export const PROGRAMMATIC_PAGE_MAP = new Map(
  PROGRAMMATIC_PAGES.map((page) => [page.slug, page])
);
