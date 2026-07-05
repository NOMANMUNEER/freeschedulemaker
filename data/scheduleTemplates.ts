import { ScheduleEvent, BuilderVariantId } from '../types/schedule';

export interface ScheduleTemplate {
  id: string;
  name: string;
  description: string;
  variant: BuilderVariantId;
  events: Omit<ScheduleEvent, 'id'>[];
}

export const SCHEDULE_TEMPLATES: ScheduleTemplate[] = [
  // 🎓 UNIVERSITY TEMPLATES
  {
    id: 'uni-basic',
    name: 'Basic University Timetable',
    description: 'A standard weekly timetable layout for regular lecture courses and breaks.',
    variant: 'university',
    events: [
      { title: 'Intro to Computer Science', days: ['Monday', 'Wednesday'], startTime: '09:00', endTime: '10:00', color: '#00796b', category: 'Lecture', location: 'Hall A', person: 'Dr. Alan Turing' },
      { title: 'Calculus I', days: ['Monday', 'Wednesday', 'Friday'], startTime: '11:00', endTime: '12:00', color: '#ef4444', category: 'Lecture', location: 'Math Bldg 102', person: 'Prof. Leibniz' },
      { title: 'Physics I', days: ['Tuesday', 'Thursday'], startTime: '10:00', endTime: '11:00', color: '#2e3152', category: 'Lecture', location: 'Science Auditorium', person: 'Dr. Newton' },
      { title: 'Lunch Break', days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], startTime: '12:00', endTime: '13:00', color: '#afb42b', category: 'Break', location: 'Student Union' },
      { title: 'Algorithms Lab', days: ['Tuesday'], startTime: '14:00', endTime: '16:00', color: '#f57c00', category: 'Lab', location: 'Turing Lab 3', person: 'Dr. Lovelace' },
    ]
  },
  {
    id: 'uni-student',
    name: 'Student Weekly Timetable',
    description: 'Full timetable containing classroom work, library hours, and sports activities.',
    variant: 'university',
    events: [
      { title: 'English Literature', days: ['Monday', 'Wednesday'], startTime: '10:00', endTime: '11:00', color: '#ce93d8', category: 'Lecture', location: 'Humanities 204', person: 'Dr. Shakespeare' },
      { title: 'Organic Chemistry', days: ['Tuesday', 'Thursday'], startTime: '09:00', endTime: '10:00', color: '#00796b', category: 'Lecture', location: 'Chem Lab 1', person: 'Prof. Curie' },
      { title: 'Library Study Block', days: ['Monday', 'Friday'], startTime: '14:00', endTime: '16:00', color: '#1e293b', category: 'Study Session', location: 'Central Library' },
      { title: 'Chemistry Lab Session', days: ['Thursday'], startTime: '13:00', endTime: '15:00', color: '#f06292', category: 'Lab', location: 'Lab Bldg B', person: 'T.A. Watson' },
      { title: 'College Football Practice', days: ['Wednesday', 'Friday'], startTime: '16:00', endTime: '17:00', color: '#4caf50', category: 'Extra-curricular', location: 'Sports Arena' },
    ]
  },
  {
    id: 'uni-lecture-lab',
    name: 'Lecture and Lab Timetable',
    description: 'Heavy science major schedule with multiple lecture slots and long laboratory practicals.',
    variant: 'university',
    events: [
      { title: 'Molecular Biology', days: ['Monday', 'Wednesday'], startTime: '08:00', endTime: '09:00', color: '#880e4f', category: 'Lecture', location: 'Bio Auditorium', person: 'Dr. Franklin' },
      { title: 'Genetics Seminar', days: ['Friday'], startTime: '09:00', endTime: '11:00', color: '#ce93d8', category: 'Seminar', location: 'Seminar Hall 3', person: 'Dr. Mendel' },
      { title: 'Biology Practicum Lab', days: ['Wednesday'], startTime: '13:00', endTime: '16:00', color: '#ffb74d', category: 'Lab', location: 'Bio Lab Floor 2', person: 'Dr. Watson' },
      { title: 'General Chemistry', days: ['Tuesday', 'Thursday'], startTime: '11:00', endTime: '12:00', color: '#00796b', category: 'Lecture', location: 'Auditorium C', person: 'Dr. Boyle' },
      { title: 'Chemistry Lab', days: ['Tuesday'], startTime: '13:00', endTime: '15:00', color: '#ef4444', category: 'Lab', location: 'Main Lab 4', person: 'Dr. Mendeleev' },
    ]
  },
  {
    id: 'uni-semester',
    name: 'Semester Class Schedule',
    description: 'Standard multi-disciplinary semester course schedule.',
    variant: 'university',
    events: [
      { title: 'Macroeconomics 101', days: ['Monday', 'Wednesday'], startTime: '10:00', endTime: '11:00', color: '#fbc02d', category: 'Lecture', location: 'Business Hall 12', person: 'Prof. Smith' },
      { title: 'Intro to Psychology', days: ['Monday', 'Wednesday'], startTime: '13:00', endTime: '14:00', color: '#f06292', category: 'Lecture', location: 'Social Sciences 1', person: 'Dr. Freud' },
      { title: 'World History', days: ['Tuesday', 'Thursday'], startTime: '11:00', endTime: '12:00', color: '#ffb74d', category: 'Lecture', location: 'Old Main Hall 4', person: 'Dr. Herodotus' },
      { title: 'Statistics I', days: ['Tuesday', 'Thursday'], startTime: '14:00', endTime: '15:00', color: '#2e3152', category: 'Lecture', location: 'Math Annex B', person: 'Dr. Gauss' },
    ]
  },

  // 🏪 ROTA TEMPLATES
  {
    id: 'rota-restaurant',
    name: 'Restaurant Staff Rota',
    description: 'Weekly schedule allocating kitchen staff, floor servers, and bartenders.',
    variant: 'rota',
    events: [
      { title: 'Head Chef Shift', days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], startTime: '08:00', endTime: '16:00', color: '#1e293b', category: 'Kitchen', location: 'Main Kitchen', person: 'Chef Gordon' },
      { title: 'Sous Chef Shift', days: ['Thursday', 'Friday', 'Saturday', 'Sunday'], startTime: '15:00', endTime: '23:00', color: '#f57c00', category: 'Kitchen', location: 'Main Kitchen', person: 'Chef Marco' },
      { title: 'Floor Server 1', days: ['Friday', 'Saturday', 'Sunday'], startTime: '11:00', endTime: '19:00', color: '#00796b', category: 'Front of House', location: 'Dining Room', person: 'Sarah Smith' },
      { title: 'Floor Server 2', days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], startTime: '16:00', endTime: '23:00', color: '#fbc02d', category: 'Front of House', location: 'Dining Room', person: 'Alex Jones' },
      { title: 'Lead Bartender', days: ['Thursday', 'Friday', 'Saturday'], startTime: '17:00', endTime: '24:00', color: '#ce93d8', category: 'Bar', location: 'Cocktail Bar', person: 'Derrick Rose' },
    ]
  },
  {
    id: 'rota-retail',
    name: 'Retail Staff Rota',
    description: 'Roster covering retail cashiers, floor support, and weekend peak times.',
    variant: 'rota',
    events: [
      { title: 'Store Opening Manager', days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], startTime: '08:00', endTime: '16:00', color: '#ef4444', category: 'Management', location: 'Main Store', person: 'Alice Manager' },
      { title: 'Cashier Shift A', days: ['Monday', 'Wednesday', 'Friday'], startTime: '09:00', endTime: '17:00', color: '#00796b', category: 'Cashier', location: 'Register 1', person: 'John Cashier' },
      { title: 'Cashier Shift B', days: ['Tuesday', 'Thursday', 'Saturday'], startTime: '10:00', endTime: '18:00', color: '#fbc02d', category: 'Cashier', location: 'Register 2', person: 'Jane Worker' },
      { title: 'Stock Room Assistant', days: ['Monday', 'Thursday'], startTime: '13:00', endTime: '17:00', color: '#2e3152', category: 'Inventory', location: 'Warehouse Room', person: 'Bobby Stocker' },
      { title: 'Weekend Lead Shift', days: ['Saturday', 'Sunday'], startTime: '09:00', endTime: '17:00', color: '#ffb74d', category: 'Management', location: 'Main Store', person: 'Charlie Supervisor' },
    ]
  },
  {
    id: 'rota-shifts',
    name: 'Morning/Evening Shift Rota',
    description: ' Roster dividing operating hours into clear morning and evening work shifts.',
    variant: 'rota',
    events: [
      { title: 'Morning Shift A', days: ['Monday', 'Wednesday', 'Friday'], startTime: '08:00', endTime: '14:00', color: '#00796b', category: 'Morning Shift', location: 'Front Desk', person: 'Emily White' },
      { title: 'Morning Shift B', days: ['Tuesday', 'Thursday'], startTime: '08:00', endTime: '14:00', color: '#4caf50', category: 'Morning Shift', location: 'Front Desk', person: 'Mark Green' },
      { title: 'Evening Shift A', days: ['Monday', 'Wednesday', 'Friday'], startTime: '14:00', endTime: '20:00', color: '#2e3152', category: 'Evening Shift', location: 'Front Desk', person: 'Tom Black' },
      { title: 'Evening Shift B', days: ['Tuesday', 'Thursday', 'Saturday'], startTime: '14:00', endTime: '20:00', color: '#880e4f', category: 'Evening Shift', location: 'Front Desk', person: 'Sara Grey' },
    ]
  },

  // 📝 REVISION TEMPLATES
  {
    id: 'rev-exam',
    name: 'Exam Revision Timetable',
    description: 'Comprehensive study schedule planning out revision for multiple academic subjects.',
    variant: 'revision',
    events: [
      { title: 'Mathematics Revision', days: ['Monday', 'Wednesday'], startTime: '09:00', endTime: '11:00', color: '#ef4444', category: 'High Priority', location: 'Desk', notes: 'Solve algebra practice papers.' },
      { title: 'Chemistry Study Block', days: ['Monday', 'Thursday'], startTime: '13:00', endTime: '15:00', color: '#00796b', category: 'Science', location: 'Library Room A', notes: 'Revise periodic tables and bonding.' },
      { title: 'History Essay Outline', days: ['Tuesday', 'Friday'], startTime: '10:00', endTime: '12:00', color: '#ffb74d', category: 'History', location: 'Study Desk', notes: 'Draft WW2 essay outline.' },
      { title: 'Biology Past Papers', days: ['Wednesday', 'Saturday'], startTime: '14:00', endTime: '16:00', color: '#f06292', category: 'Medium Priority', location: 'Library' },
      { title: 'Literature Notes Review', days: ['Tuesday', 'Thursday'], startTime: '16:00', endTime: '17:00', color: '#ce93d8', category: 'Low Priority', location: 'Desk', notes: 'Review Hamlet quotes.' },
    ]
  },
  {
    id: 'rev-subject',
    name: 'Subject Study Plan',
    description: 'Highly focused study intervals with allocated break blocks.',
    variant: 'revision',
    events: [
      { title: 'Core Topic Study', days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], startTime: '09:00', endTime: '11:00', color: '#2e3152', category: 'Study Session', location: 'Home Study' },
      { title: 'Revision Active Recall', days: ['Monday', 'Wednesday', 'Friday'], startTime: '11:00', endTime: '12:00', color: '#4caf50', category: 'Active Recall', location: 'Home Study' },
      { title: 'Rest & Lunch Break', days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], startTime: '12:00', endTime: '13:00', color: '#afb42b', category: 'Break', location: 'Break Area' },
      { title: 'Past Exam Practice', days: ['Tuesday', 'Thursday'], startTime: '14:00', endTime: '16:00', color: '#ef4444', category: 'Practice Exam', location: 'Local Library' },
    ]
  },

  // 👥 EMPLOYEE TEMPLATES
  {
    id: 'emp-weekly',
    name: 'Weekly Employee Schedule',
    description: 'Standard corporate team work-schedule for regular office hours.',
    variant: 'employee',
    events: [
      { title: 'Full Team Standup', days: ['Monday'], startTime: '09:00', endTime: '10:00', color: '#1e293b', category: 'Meeting', location: 'Conference Rm A', person: 'All Employees' },
      { title: 'Customer Support Lead', days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], startTime: '10:00', endTime: '17:00', color: '#00796b', category: 'Support', location: 'Ground Floor Desk', person: 'David Harris' },
      { title: 'Marketing Sync Rota', days: ['Tuesday', 'Thursday'], startTime: '14:00', endTime: '15:00', color: '#fbc02d', category: 'Marketing', location: 'Room 302', person: 'Alice Green' },
      { title: 'Finance Check-in', days: ['Wednesday'], startTime: '11:00', endTime: '12:00', color: '#f57c00', category: 'Finance', location: 'Executive Office', person: 'Peter Finance' },
    ]
  },
];
