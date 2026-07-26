export type PlanningGuide = {
  slug: string;
  title: string;
  description: string;
  audience: string;
  readTime: string;
  intro: string;
  keyTakeaways: string[];
  steps: {
    title: string;
    body: string;
  }[];
  examples: {
    title: string;
    body: string;
  }[];
  mistakes: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

export const PLANNING_GUIDES: PlanningGuide[] = [
  {
    slug: 'how-to-make-a-weekly-schedule',
    title: 'How to Make a Weekly Schedule That You Can Actually Follow',
    description: 'Learn a simple weekly scheduling process for work, school, routines, appointments, and personal goals.',
    audience: 'Students, workers, parents, freelancers, and anyone planning a busy week.',
    readTime: '7 min read',
    intro:
      'A useful weekly schedule is not just a list of tasks. It shows when your time is already committed, where your energy is highest, and which tasks deserve protected space. The goal is to make the week visible enough that you can make better decisions before the week becomes stressful.',
    keyTakeaways: [
      'Start with fixed commitments before adding flexible tasks.',
      'Use time blocks for focused work, study, exercise, meals, and reset time.',
      'Leave open buffers so one delay does not break the whole week.',
      'Review the schedule once at the start of the week and once halfway through.',
    ],
    steps: [
      {
        title: 'List the commitments that cannot move',
        body:
          'Add classes, shifts, meetings, appointments, commuting, school pickup, and any deadlines with a fixed time. These blocks are the frame of the week. Planning flexible work before fixed commitments usually creates a schedule that looks good but fails quickly.',
      },
      {
        title: 'Group similar tasks together',
        body:
          'Batch errands, admin tasks, study sessions, workouts, and content creation into blocks. Grouping reduces context switching and makes the schedule easier to scan.',
      },
      {
        title: 'Protect your highest-energy hours',
        body:
          'Place demanding work when you usually have the most focus. For many people this is morning, but students and shift workers may have a different pattern. Put shallow tasks in lower-energy parts of the day.',
      },
      {
        title: 'Add buffer time between heavy blocks',
        body:
          'A weekly schedule needs breathing room. Add 15 to 30 minutes after travel, meetings, study blocks, or workouts. Buffers make the plan realistic and reduce the chance that one late start ruins the day.',
      },
      {
        title: 'Use colors for categories, not decoration',
        body:
          'Choose a small set of colors for work, school, health, family, chores, and personal time. Consistent colors help you understand the balance of your week at a glance.',
      },
    ],
    examples: [
      {
        title: 'Student weekly schedule',
        body:
          'Classes go in first, then study blocks within 24 hours of each lecture, then part-time work, meals, exercise, and one weekly reset block for laundry, planning, and admin.',
      },
      {
        title: 'Work-from-home weekly schedule',
        body:
          'Meetings and deadlines go in first. Deep work blocks are placed in the morning, email is checked in short windows, and household tasks are grouped near lunch or late afternoon.',
      },
      {
        title: 'Family weekly schedule',
        body:
          'School times, pickup, appointments, and meals create the structure. Chores and errands are batched, and open blocks are kept for unexpected family needs.',
      },
    ],
    mistakes: [
      'Filling every empty hour with tasks.',
      'Planning only work and forgetting meals, travel, rest, and admin.',
      'Using too many colors, which makes the schedule harder to read.',
      'Creating a schedule once and never adjusting it after real life changes.',
    ],
    faqs: [
      {
        question: 'What should a weekly schedule include?',
        answer:
          'A weekly schedule should include fixed commitments, flexible work blocks, study or focus time, meals, exercise, chores, travel, rest, and buffer time.',
      },
      {
        question: 'Is a digital weekly schedule better than paper?',
        answer:
          'Digital schedules are easier to edit and export, while paper schedules can be easier to keep visible. Many people use both: digital for planning, printed or image export for quick reference.',
      },
    ],
  },
  {
    slug: 'student-timetable-examples',
    title: 'Student Timetable Examples for School, College, and University',
    description: 'See practical student timetable examples for lectures, study blocks, revision, assignments, meals, and rest.',
    audience: 'High school, college, and university students.',
    readTime: '6 min read',
    intro:
      'A student timetable works best when it connects class time with study time. The most common mistake is adding lectures but forgetting the review blocks that make lectures useful. A good timetable balances classes, independent study, assignments, meals, commute, rest, and social time.',
    keyTakeaways: [
      'Schedule review time soon after each class.',
      'Use shorter blocks for difficult subjects and longer blocks for project work.',
      'Keep revision separate from homework when exams are close.',
      'Add meals and breaks so study time stays realistic.',
    ],
    steps: [
      {
        title: 'Add classes and labs first',
        body:
          'Start with lectures, seminars, labs, tutorials, and office hours. These are the immovable pieces of a student timetable.',
      },
      {
        title: 'Add same-day review blocks',
        body:
          'Place 30 to 60 minutes of review after each important class. This helps you clean notes, summarize key ideas, and identify questions before the material fades.',
      },
      {
        title: 'Separate assignments from revision',
        body:
          'Assignments need production time. Revision needs recall and practice. Keeping them separate makes your timetable more accurate and less stressful during exam weeks.',
      },
      {
        title: 'Reserve one planning block each week',
        body:
          'Use a Sunday or Monday planning block to check deadlines, prepare materials, and adjust the timetable for the week ahead.',
      },
    ],
    examples: [
      {
        title: 'Lecture-heavy week',
        body:
          'Use small review blocks after lectures and one longer weekend block to organize notes and prepare readings for the next week.',
      },
      {
        title: 'Exam preparation week',
        body:
          'Reduce low-priority tasks and schedule subject-based revision blocks with practice questions, flashcards, and short breaks.',
      },
      {
        title: 'Part-time job week',
        body:
          'Place job shifts first, then classes, then compact study blocks around commute and high-energy hours.',
      },
    ],
    mistakes: [
      'Only entering class times and calling it a timetable.',
      'Studying one subject for too many hours without breaks.',
      'Leaving assignments until the day before they are due.',
      'Ignoring sleep and meals during exam planning.',
    ],
    faqs: [
      {
        question: 'How many hours should a student timetable include for study?',
        answer:
          'It depends on course load, but many students start with one to two hours of independent study for each hour of class, then adjust based on difficulty and deadlines.',
      },
      {
        question: 'What colors work best for a student timetable?',
        answer:
          'Use one color per subject or one color per activity type. Avoid using both systems at the same time unless the timetable stays easy to read.',
      },
    ],
  },
  {
    slug: 'employee-schedule-examples',
    title: 'Employee Schedule Examples for Small Teams',
    description: 'Learn how to plan employee schedules for coverage, fairness, shift handoffs, time off, and busy periods.',
    audience: 'Small business owners, managers, team leads, and operations staff.',
    readTime: '7 min read',
    intro:
      'Employee scheduling is about more than putting names into shifts. A strong schedule protects coverage, keeps the workload fair, shows who is responsible for each period, and makes time-off conflicts visible before they become operational problems.',
    keyTakeaways: [
      'Plan coverage needs before assigning names.',
      'Keep shift rules simple and visible.',
      'Use notes for handoffs, role coverage, and special events.',
      'Review fairness over several weeks, not just one schedule.',
    ],
    steps: [
      {
        title: 'Define coverage by day and hour',
        body:
          'List how many people are needed for each part of the day. A cafe, shop, clinic, or support team may need more staff during rush periods and fewer people during quiet hours.',
      },
      {
        title: 'Mark availability and time-off requests',
        body:
          'Before assigning shifts, collect availability, approved leave, training sessions, and role restrictions. This reduces last-minute edits.',
      },
      {
        title: 'Assign roles, not just names',
        body:
          'If one shift needs a supervisor, cashier, opener, closer, or specialist, show that in the schedule. Role clarity prevents gaps even when the headcount looks correct.',
      },
      {
        title: 'Balance weekends and late shifts',
        body:
          'A fair schedule is easier to defend. Track less popular shifts across multiple weeks so the same people are not always assigned the hardest blocks.',
      },
    ],
    examples: [
      {
        title: 'Retail weekly rota',
        body:
          'Add opening, midday, and closing shifts. Mark one supervisor per shift and use extra coverage for weekend rush hours.',
      },
      {
        title: 'Support team coverage',
        body:
          'Create morning and afternoon coverage blocks, then add backup coverage for peak ticket hours and planned absences.',
      },
      {
        title: 'Clinic staff schedule',
        body:
          'Schedule front desk, practitioner rooms, lunch coverage, and closing duties so patient flow is covered throughout the day.',
      },
    ],
    mistakes: [
      'Scheduling names before understanding coverage demand.',
      'Not showing role requirements inside each shift.',
      'Ignoring handoff time between shifts.',
      'Making schedule changes without communicating the latest version.',
    ],
    faqs: [
      {
        question: 'What is the easiest employee schedule format?',
        answer:
          'A weekly grid with days across the top and time blocks down the side is easy for small teams because everyone can quickly see coverage and shift overlap.',
      },
      {
        question: 'How far ahead should employee schedules be made?',
        answer:
          'Many teams publish schedules one to two weeks ahead. More notice helps employees plan, but the right timing depends on the business and local requirements.',
      },
    ],
  },
  {
    slug: 'time-blocking-guide',
    title: 'Time Blocking Guide: Plan Your Day Without Overloading It',
    description: 'Use time blocking to plan focused work, meetings, errands, routines, and recovery time without filling every minute.',
    audience: 'Creators, freelancers, students, remote workers, and busy professionals.',
    readTime: '6 min read',
    intro:
      'Time blocking turns a task list into a visual plan. Instead of asking what you need to do, you decide when the work will happen. The method is powerful because it reveals overload early: if the blocks do not fit, the plan needs fewer commitments or more time.',
    keyTakeaways: [
      'Block outcomes, not vague intentions.',
      'Keep demanding work away from constant interruptions.',
      'Use buffers to protect the plan.',
      'Review completed blocks to improve future estimates.',
    ],
    steps: [
      {
        title: 'Choose the planning window',
        body:
          'Start with one day if you are new to time blocking. Move to a full week once you understand how long your common tasks really take.',
      },
      {
        title: 'Turn tasks into specific blocks',
        body:
          'Replace vague labels like work with clear labels like draft report, answer invoices, review lecture notes, or design Pinterest pins.',
      },
      {
        title: 'Place deep work before shallow work',
        body:
          'If possible, schedule important thinking, writing, coding, studying, or planning before email, messages, and small admin tasks take your attention.',
      },
      {
        title: 'Add a shutdown block',
        body:
          'End the day with a short block for checking unfinished tasks, choosing tomorrow priorities, and clearing small loose ends.',
      },
    ],
    examples: [
      {
        title: 'Creator day',
        body:
          'Plan research, script writing, design, publishing, and analytics as separate blocks instead of leaving content creation as one vague task.',
      },
      {
        title: 'Remote work day',
        body:
          'Use deep work blocks in the morning, meetings in the middle of the day, and communication/admin blocks near the end.',
      },
      {
        title: 'Study day',
        body:
          'Alternate 45 to 90 minute subject blocks with breaks and active recall, then end with a review block.',
      },
    ],
    mistakes: [
      'Scheduling every minute with no buffer.',
      'Making blocks too vague to act on.',
      'Ignoring energy levels.',
      'Treating the schedule as a failure when one block changes.',
    ],
    faqs: [
      {
        question: 'Is time blocking good for ADHD or scattered attention?',
        answer:
          'Many people find it helpful because it makes time visible and reduces decision fatigue. It works best with flexible buffers and realistic block lengths.',
      },
      {
        question: 'How long should a time block be?',
        answer:
          'Simple admin blocks can be 15 to 30 minutes. Deep work or study blocks often work well between 45 and 120 minutes depending on the task.',
      },
    ],
  },
  {
    slug: 'study-schedule-templates',
    title: 'Study Schedule Templates for Exams, Homework, and Revision',
    description: 'Build a study schedule with subject blocks, revision sessions, assignment time, breaks, and exam preparation.',
    audience: 'Students preparing for exams, coursework, homework, and revision.',
    readTime: '6 min read',
    intro:
      'A study schedule is most useful when it shows both what to study and how to study it. Reading notes, practicing questions, writing summaries, revising flashcards, and completing assignments require different kinds of time. Separating those activities helps you plan more accurately.',
    keyTakeaways: [
      'Use active study blocks, not only reading blocks.',
      'Plan harder subjects earlier in the day when possible.',
      'Schedule revision in repeated sessions instead of one long cram.',
      'Track deadlines next to study blocks so coursework is not forgotten.',
    ],
    steps: [
      {
        title: 'List subjects and upcoming deadlines',
        body:
          'Write down each subject, exam date, assignment due date, and topic that needs attention. This gives the schedule a clear priority order.',
      },
      {
        title: 'Choose study methods for each block',
        body:
          'Label blocks as practice questions, notes review, flashcards, essay outline, problem set, reading, or project work. The more specific the label, the easier it is to start.',
      },
      {
        title: 'Use spaced revision',
        body:
          'Repeat important topics across several shorter blocks. Revisiting material over time is usually more effective than saving everything for one long session.',
      },
      {
        title: 'Add breaks and recovery time',
        body:
          'Breaks protect focus. Add short pauses between study blocks and avoid planning high-intensity revision late into every night.',
      },
    ],
    examples: [
      {
        title: 'Exam week template',
        body:
          'Use morning blocks for the hardest subjects, afternoon blocks for practice questions, and evening blocks for light review or flashcards.',
      },
      {
        title: 'Homework week template',
        body:
          'Place assignment blocks near the start of the week, then use smaller review blocks after each class.',
      },
      {
        title: 'Weekend revision template',
        body:
          'Use two or three focused blocks with breaks, then leave space for rest so the schedule does not become unrealistic.',
      },
    ],
    mistakes: [
      'Planning to study without naming the exact topic.',
      'Saving all revision until the night before an exam.',
      'Using long blocks without breaks.',
      'Forgetting assignment deadlines while planning exam revision.',
    ],
    faqs: [
      {
        question: 'What is the best study schedule template?',
        answer:
          'The best template includes subjects, specific topics, study methods, deadlines, breaks, and revision repeats. It should be easy to adjust when a topic needs more time.',
      },
      {
        question: 'Should I study one subject per day or mix subjects?',
        answer:
          'Mixing subjects often helps with attention and memory, but one-subject days can work for large projects. Most students benefit from a balanced mix.',
      },
    ],
  },
];

export const PLANNING_GUIDE_MAP = new Map(
  PLANNING_GUIDES.map((guide) => [guide.slug, guide])
);
