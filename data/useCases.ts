import { BuilderVariantId } from '../types/schedule';

export interface UseCaseItem {
  title: string;
  description: string;
}

export const USE_CASES: Record<BuilderVariantId, UseCaseItem[]> = {
  default: [
    { title: 'Personal Daily Routines', description: 'Schedule gym sessions, meal plans, chores, and personal habits into a beautiful color-coded daily grid.' },
    { title: 'Small Business Rota', description: 'Plan shift rotations, front-desk staffing hours, and team coverage for retail and service shops.' },
    { title: 'Academic Timetables', description: 'Students can organize school, college, or university classes, study blocks, and extracurriculars.' }
  ],
  weekly: [
    { title: 'Weekly Habit Tracker', description: 'Block out dedicated recurring hours for reading, exercise, hobbies, and family time to maintain a balanced lifestyle.' },
    { title: 'Freelancer Time Blocking', description: 'Group client work, admin tasks, meetings, and project development into dedicated weekly blocks to maximize focus.' },
    { title: 'Household Task Board', description: 'Coordinate weekly chores, grocery shopping, school runs, and household tasks for all family members.' }
  ],
  university: [
    { title: 'Semester Course Mapping', description: 'Map out lectures, laboratories, tutorials, and office hours at the start of the semester to avoid double-bookings.' },
    { title: 'Study & Homework Sessions', description: 'Block out empty intervals between university classes for revision, homework, and assignment drafting.' },
    { title: 'Professor Office Hours', description: 'Academics can construct and print out office hours timetables to pin on office doors for students.' }
  ],
  rota: [
    { title: 'Restaurant & Bar Shifts', description: 'Roster kitchen staff, waiters, hosts, and cleaning crew for weekend rush hours and dinner service.' },
    { title: 'Retail Staff Scheduling', description: 'Coordinate cashier schedules, sales associates, and inventory stocking shifts for physical store locations.' },
    { title: 'Healthcare Shift Roster', description: 'Design coverage charts for clinic receptionists, on-duty nurses, assistants, and resident practitioners.' }
  ],
  employee: [
    { title: 'Corporate Department Schedules', description: 'Organize team members in specific departments (e.g. Sales, Marketing, HR) to ensure continuous operational coverage.' },
    { title: 'Hourly Team Tracking', description: ' Roster part-time employees and student workers, tracking their specific start and end times clearly.' },
    { title: 'Remote Work Coordination', description: 'Clarify core hours for remote team members working across different regions, ensuring overlapping availability.' }
  ],
  shift: [
    { title: '24/7 Operations Coverage', description: 'Generate morning, evening, and overnight shift rosters for factories, call centers, and logistics hubs.' },
    { title: 'Emergency Services Roster', description: 'Construct visual timetables for security guards, on-call technicians, and dispatch teams.' },
    { title: 'Rotating Shift Cycles', description: 'Easily track staff shifting from morning to evening slots week-over-week without layout errors.' }
  ],
  revision: [
    { title: 'GCSE & A-Level Planning', description: 'Break down biology, mathematics, literature, and history study blocks during stressful exam periods.' },
    { title: 'University Exam Preparation', description: 'Coordinate intense revision sessions, tutor calls, practice papers, and break hours leading up to finals.' },
    { title: 'Professional Certification Study', description: 'Working professionals can schedule night/weekend study sessions for CFA, bar exams, or developer certifications.' }
  ]
};
