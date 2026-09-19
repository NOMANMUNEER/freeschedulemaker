export type PinterestLandingPage = {
  slug: string;
  title: string;
  description: string;
  badge: string;
  heading: string;
  intro: string;
  board: string;
  primaryHref: string;
  primaryLabel: string;
  pinIdeas: {
    title: string;
    description: string;
    palette: string;
    textOverlay: string;
  }[];
  sections: {
    title: string;
    body: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

export const PINTEREST_LANDING_PAGES: PinterestLandingPage[] = [
  {
    slug: 'aesthetic-schedule-templates',
    title: 'Aesthetic Schedule Templates for Weekly Planning',
    description: 'Browse aesthetic schedule template ideas for weekly planners, class timetables, routines, and printable planning layouts.',
    badge: 'Pinterest schedule ideas',
    heading: 'Aesthetic Schedule Templates',
    intro:
      'Aesthetic schedules work best when they are still easy to read. Use soft color groups, clean time blocks, and short labels so the design looks good on Pinterest but still works as a real weekly plan.',
    board: 'Aesthetic Schedule Templates',
    primaryHref: '/templates',
    primaryLabel: 'View template ideas',
    pinIdeas: [
      {
        title: 'Soft weekly planner',
        description: 'A calm weekly plan with pastel blocks for work, self-care, errands, and reset time.',
        palette: 'Sage, cream, slate, and dusty rose',
        textOverlay: 'Aesthetic Weekly Schedule Template',
      },
      {
        title: 'Minimal class timetable',
        description: 'A clean student timetable with one color per subject and compact room labels.',
        palette: 'White, navy, sky, and lavender',
        textOverlay: 'Clean Class Schedule Idea',
      },
      {
        title: 'Routine wall planner',
        description: 'A printable routine schedule for morning habits, work blocks, meals, workouts, and evening reset.',
        palette: 'Warm white, charcoal, peach, and olive',
        textOverlay: 'Printable Routine Planner',
      },
    ],
    sections: [
      {
        title: 'Keep the layout readable',
        body: 'Use a simple grid, short event names, and enough spacing between blocks. A beautiful schedule is only useful if someone can understand it quickly.',
      },
      {
        title: 'Use colors with purpose',
        body: 'Assign colors to activity types like school, work, health, chores, and personal time instead of using random decoration.',
      },
      {
        title: 'Make it printable',
        body: 'Leave a white or light background, avoid tiny text, and export a clean image or PDF for planner pages and wall prints.',
      },
    ],
    faqs: [
      {
        question: 'What makes a schedule template aesthetic?',
        answer: 'A good aesthetic schedule uses balanced spacing, readable fonts, soft color contrast, and clear categories while still showing times and tasks accurately.',
      },
      {
        question: 'Can I download these schedule ideas?',
        answer: 'You can recreate the ideas in the free builder and download your finished schedule as a PNG or PDF.',
      },
    ],
  },
  {
    slug: 'study-planner-ideas',
    title: 'Study Planner Ideas for Students and Exam Revision',
    description: 'Use these study planner ideas for revision timetables, homework planning, subject blocks, and exam preparation.',
    badge: 'Student planning ideas',
    heading: 'Study Planner Ideas',
    intro:
      'A strong study planner shows exactly what to study, when to study it, and how the session will work. The best layouts include subjects, topics, breaks, practice questions, and review blocks.',
    board: 'Study Planner Ideas',
    primaryHref: '/guides/study-schedule-templates',
    primaryLabel: 'Read study schedule guide',
    pinIdeas: [
      {
        title: 'Exam revision week',
        description: 'A subject-by-subject revision plan with mock tests, flashcards, and rest blocks.',
        palette: 'Indigo, mint, white, and graphite',
        textOverlay: 'Exam Study Schedule Template',
      },
      {
        title: 'Homework planner',
        description: 'A weekday homework plan that separates assignments, reading, and review time.',
        palette: 'Sky, lemon, white, and navy',
        textOverlay: 'Simple Homework Planner',
      },
      {
        title: 'Finals countdown',
        description: 'A printable study timetable for the final two weeks before exams.',
        palette: 'Lavender, plum, white, and silver',
        textOverlay: 'Finals Week Study Plan',
      },
    ],
    sections: [
      {
        title: 'Separate study methods',
        body: 'Label blocks as practice questions, flashcards, reading, summary writing, essay planning, or mock tests so each session has a clear action.',
      },
      {
        title: 'Repeat hard topics',
        body: 'Place difficult topics in shorter repeated sessions across the week instead of saving them for one long cramming block.',
      },
      {
        title: 'Add breaks and meals',
        body: 'Study planners fail when they ignore real energy. Schedule breaks, meals, exercise, and sleep so the plan is possible to follow.',
      },
    ],
    faqs: [
      {
        question: 'What should I put in a study planner?',
        answer: 'Include subjects, topics, study methods, deadlines, breaks, review sessions, and exam dates.',
      },
      {
        question: 'Is this good for Pinterest study content?',
        answer: 'Yes. Study planner pins work well when they show a clear template, readable text, and a useful planning idea students can copy.',
      },
    ],
  },
  {
    slug: 'sunday-reset-routine',
    title: 'Sunday Reset Routine Planner and Schedule Ideas',
    description: 'Plan a Sunday reset routine with cleaning, laundry, meal prep, planning, self-care, and weekly organization blocks.',
    badge: 'Weekly reset planner',
    heading: 'Sunday Reset Routine Planner',
    intro:
      'A Sunday reset routine helps you enter the week with fewer loose ends. The best reset schedule is calm and realistic: a few cleaning blocks, one planning block, and enough rest that Sunday does not become another overloaded workday.',
    board: 'Sunday Reset Routine',
    primaryHref: '/weekly-schedule-maker',
    primaryLabel: 'Create weekly reset schedule',
    pinIdeas: [
      {
        title: 'Calm Sunday reset',
        description: 'A soft Sunday routine with laundry, meal prep, planning, cleaning, and evening self-care.',
        palette: 'Cream, sage, clay, and charcoal',
        textOverlay: 'Sunday Reset Routine',
      },
      {
        title: 'Weekly prep checklist',
        description: 'A printable checklist-style schedule for groceries, cleaning, outfits, and calendar review.',
        palette: 'White, teal, tan, and ink',
        textOverlay: 'Weekly Reset Checklist',
      },
      {
        title: 'Student Sunday reset',
        description: 'A student-friendly reset routine for assignments, bag prep, laundry, room cleaning, and planning.',
        palette: 'Lilac, blue, white, and slate',
        textOverlay: 'Student Sunday Reset',
      },
    ],
    sections: [
      {
        title: 'Start with the next week',
        body: 'Review appointments, classes, work shifts, deadlines, and errands before deciding what needs preparation.',
      },
      {
        title: 'Batch household tasks',
        body: 'Group laundry, cleaning, groceries, and meal prep into blocks so the day feels organized rather than scattered.',
      },
      {
        title: 'End with a quiet block',
        body: 'Add a short evening reset for packing bags, choosing priorities, and making Monday morning easier.',
      },
    ],
    faqs: [
      {
        question: 'How long should a Sunday reset take?',
        answer: 'A realistic Sunday reset can take one to four hours depending on the week. It should help the week feel easier, not consume the entire day.',
      },
      {
        question: 'Can I make a printable Sunday reset schedule?',
        answer: 'Yes. Use the weekly schedule maker, add Sunday routine blocks, then export your plan as a PNG or PDF.',
      },
    ],
  },
  {
    slug: 'time-blocking-templates',
    title: 'Time Blocking Templates for Work, Study, and Daily Routines',
    description: 'Explore time blocking template ideas for deep work, study sessions, daily routines, content creation, and weekly planning.',
    badge: 'Time blocking ideas',
    heading: 'Time Blocking Templates',
    intro:
      'Time blocking turns a to-do list into a visual plan. Instead of hoping tasks fit into the day, you give important work a clear start time, end time, and purpose.',
    board: 'Time Blocking Templates',
    primaryHref: '/guides/time-blocking-guide',
    primaryLabel: 'Read time blocking guide',
    pinIdeas: [
      {
        title: 'Deep work day',
        description: 'A focused workday template with deep work, meetings, admin, breaks, and shutdown planning.',
        palette: 'Navy, white, green, and soft gray',
        textOverlay: 'Time Blocking Template',
      },
      {
        title: 'Creator content day',
        description: 'A creator schedule for research, filming, editing, pin design, publishing, and analytics.',
        palette: 'Black, white, coral, and mint',
        textOverlay: 'Content Day Schedule',
      },
      {
        title: 'Balanced daily routine',
        description: 'A full-day template for work, health, errands, meals, family time, and evening reset.',
        palette: 'Slate, cream, amber, and sky',
        textOverlay: 'Daily Time Blocking Plan',
      },
    ],
    sections: [
      {
        title: 'Name the outcome',
        body: 'Use labels like draft blog outline, finish assignment, design three pins, or review invoices instead of vague labels like work.',
      },
      {
        title: 'Protect focus blocks',
        body: 'Place demanding work away from messages and meetings when possible. Use shorter admin blocks for email and small tasks.',
      },
      {
        title: 'Leave space for reality',
        body: 'Add buffers around travel, meetings, errands, and hard tasks. A time blocking template should guide the day, not break the moment something changes.',
      },
    ],
    faqs: [
      {
        question: 'What is a time blocking template?',
        answer: 'It is a schedule layout that divides the day or week into named blocks of time for specific tasks, routines, or focus sessions.',
      },
      {
        question: 'Can I use time blocking for Pinterest planning?',
        answer: 'Yes. You can block research, Canva design, pin writing, publishing, and analytics review into one repeatable content workflow.',
      },
    ],
  },
];

export const PINTEREST_LANDING_PAGE_MAP = new Map(
  PINTEREST_LANDING_PAGES.map((page) => [page.slug, page])
);
