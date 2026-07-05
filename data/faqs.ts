import { BuilderVariantId } from '../types/schedule';

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQS: Record<BuilderVariantId, FAQItem[]> = {
  default: [
    {
      question: "Is this Schedule Maker really free?",
      answer: "Yes, our online schedule maker is 100% free to use and will remain so forever. There are no hidden fees, subscriptions, or premium tiers locking features away."
    },
    {
      question: "Can I use this as a calendar maker or timetable maker?",
      answer: "Absolutely! Whether for college academic schedules, employee shift planning, professional agendas, or personal gym routines, our versatile calendar creator adapts to any scenario."
    },
    {
      question: "Do I need to create an account to use it?",
      answer: "No sign-up is required! You can start building instantly in your browser without handing over your email or creating a password."
    },
    {
      question: "How do I save and export my schedule?",
      answer: "Once generated, you can download your timetable directly to your device as a high-quality PNG image file. Simply click the 'Download Free Schedule (PNG)' button in the sidebar."
    }
  ],
  weekly: [
    {
      question: "How do I create a weekly schedule?",
      answer: "Choose your active days and hours in settings. Add your tasks and events specifying which days they repeat, color-code them, and download your schedule as a PNG."
    },
    {
      question: "Can I plan multiple days for a single event?",
      answer: "Yes! When adding an event, you can toggle multiple days (e.g. Mon, Wed, Fri) and the event will automatically replicate across those days at the specified time."
    },
    {
      question: "Is there a limit to how many events I can add?",
      answer: "No, there are no limits. You can add as many tasks, classes, or meetings as your weekly layout requires."
    }
  ],
  university: [
    {
      question: "How do I create a university timetable?",
      answer: "Start by selecting one of our pre-built student templates or click 'Add Class'. Input your course name, teacher name, room number, lecture type, and times. Click add, customize the colors, and download."
    },
    {
      question: "Can I add lectures, labs, and tutorials?",
      answer: "Yes! The university variant includes custom fields for 'Teacher Name', 'Room Number', and 'Lecture Type' (with quick tags for Lecture, Lab, Tutorial, Seminar, Exam, Break) which render clearly inside each calendar block."
    },
    {
      question: "Can I customize the start and end hours for my classes?",
      answer: "Absolutely. Open the Settings panel (gear icon) to adjust the starting hour, ending hour, and time interval spacing (15, 30, or 60 minute rows) to match your university schedule."
    }
  ],
  rota: [
    {
      question: "How do I create a staff rota?",
      answer: "Select the Rota Maker tool, click 'Add Shift', enter shift details, employee names, locations, and hours. Use different colors for employees or shift types to make the rota easy to scan, then download it."
    },
    {
      question: "Can I plan morning, evening, and night shifts?",
      answer: "Yes. You can configure active hours in the settings to cover morning, afternoon, and night shift durations, and use categories like 'Morning Shift' or 'Night Shift' to label them."
    },
    {
      question: "Can I use this rota maker for restaurants or retail teams?",
      answer: "Yes, it is designed exactly for retail outlets, cafes, restaurants, bars, security teams, and clinics. Use the template selector to load restaurant and retail rota presets."
    }
  ],
  employee: [
    {
      question: "How do I build an employee schedule?",
      answer: "Input roles or tasks under the Shift Title, enter the Employee Name, department location, and shift times. Share the finalized roster with your staff by sending them the exported PNG image."
    },
    {
      question: "Does the employee scheduler store my data?",
      answer: "All your data is saved automatically to your browser's local storage under a specific key for the employee variant, meaning you can close the browser and resume editing anytime."
    },
    {
      question: "Can I clear the schedule to start fresh for a new week?",
      answer: "Yes. Simply click the 'Clear Current Schedule' button in the sidebar to remove all active events and start layout planning for the next week."
    }
  ],
  shift: [
    {
      question: "How do I generate a shift schedule?",
      answer: "Add shifts with their corresponding tasks, team members, stations, and shift codes. Custom color codes can be assigned to different shifts (e.g. blue for morning, orange for night) for clear visibility."
    },
    {
      question: "What types of shifts are supported?",
      answer: "You can create any shift configuration, including 8-hour, 12-hour, rotating, split, or on-call shifts. You can set the timeline boundaries anywhere from 0:00 to 23:00."
    },
    {
      question: "Can I print the shift schedule?",
      answer: "Yes. The exported PNG image is formatted with a clean high-resolution ratio (2x pixel ratio), making it perfect for printing and pinning on bulletin boards."
    }
  ],
  revision: [
    {
      question: "How do I create a revision timetable?",
      answer: "Select the Revision Timetable Maker, click 'Add Study Session', input the subject or topic, tutor name, study location, and priority level (High, Medium, Low). Lay out your study blocks and break periods."
    },
    {
      question: "Can I plan subjects by day and time?",
      answer: "Yes. You can place study blocks at specific hours across the week. Standardizing your study schedule is key to successful exam revision."
    },
    {
      question: "Are there study schedule templates I can load?",
      answer: "Yes. The Revision Planner includes templates such as 'Exam Revision Timetable' and 'Subject Study Plan' that you can load instantly with a click."
    }
  ]
};
