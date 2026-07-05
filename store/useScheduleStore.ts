import { create } from 'zustand';
import { ScheduleEvent, ScheduleSettings, BuilderVariantId } from '../types/schedule';

export const DEFAULT_SETTINGS: ScheduleSettings = {
  showTitle: true,
  firstDayOfWeek: 'Monday',
  visibleDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  showDates: true,
  activeWeek: 'Week 26, 2026',
  clockType: '12-Hour',
  lineSpacing: 60,
  startHour: 8,
  endHour: 17,
  autoSelectColor: false,
  showTimeInEvents: true,
  stretchToFit: true,
  centerText: true,
  textFont: 'Roboto Slab',
  textColor: '#1e1b4b',
};

interface ScheduleState {
  currentVariant: BuilderVariantId;
  events: ScheduleEvent[];
  settings: ScheduleSettings;
  addEvent: (event: ScheduleEvent) => void;
  removeEvent: (id: string) => void;
  clearSchedule: () => void;
  updateSettings: (newSettings: Partial<ScheduleSettings>) => void;
  setEvents: (events: ScheduleEvent[]) => void;
  switchVariant: (variantId: BuilderVariantId) => void;
}

const isClient = typeof window !== 'undefined';

const getLocalStorageKey = (variant: BuilderVariantId) => `schedule_builder_${variant}`;

const loadState = (variant: BuilderVariantId) => {
  if (!isClient) return null;
  try {
    const data = localStorage.getItem(getLocalStorageKey(variant));
    return data ? JSON.parse(data) : null;
  } catch (e) {
    console.error('Failed to load state from localStorage', e);
    return null;
  }
};

const saveState = (variant: BuilderVariantId, events: ScheduleEvent[], settings: ScheduleSettings) => {
  if (!isClient) return;
  try {
    localStorage.setItem(getLocalStorageKey(variant), JSON.stringify({ events, settings }));
  } catch (e) {
    console.error('Failed to save state to localStorage', e);
  }
};

export const useScheduleStore = create<ScheduleState>((set) => ({
  currentVariant: 'default',
  events: [
    {
      id: '1',
      title: 'Evening walking',
      days: ['Monday'],
      startTime: '08:00',
      endTime: '09:00',
      color: '#ef4444',
      variant: 'default',
    },
  ],
  settings: DEFAULT_SETTINGS,
  
  addEvent: (newEvent) => set((state) => {
    const nextEvents = [...state.events, newEvent];
    saveState(state.currentVariant, nextEvents, state.settings);
    return { events: nextEvents };
  }),
  
  removeEvent: (id) => set((state) => {
    const nextEvents = state.events.filter((e) => e.id !== id);
    saveState(state.currentVariant, nextEvents, state.settings);
    return { events: nextEvents };
  }),
  
  clearSchedule: () => set((state) => {
    const nextEvents: ScheduleEvent[] = [];
    saveState(state.currentVariant, nextEvents, state.settings);
    return { events: nextEvents };
  }),
  
  updateSettings: (newSettings) => set((state) => {
    const nextSettings = { ...state.settings, ...newSettings };
    saveState(state.currentVariant, state.events, nextSettings);
    return { settings: nextSettings };
  }),
  
  setEvents: (newEvents) => set((state) => {
    saveState(state.currentVariant, newEvents, state.settings);
    return { events: newEvents };
  }),
  
  switchVariant: (variantId) => set((state) => {
    // Save current variant state first if needed
    if (state.currentVariant) {
      saveState(state.currentVariant, state.events, state.settings);
    }
    
    const saved = loadState(variantId);
    if (saved) {
      return {
        currentVariant: variantId,
        events: saved.events || [],
        settings: { ...DEFAULT_SETTINGS, ...saved.settings },
      };
    } else {
      // Default initial states for different variants
      const initialEvents: ScheduleEvent[] = variantId === 'default' ? [
        {
          id: '1',
          title: 'Evening walking',
          days: ['Monday'],
          startTime: '08:00',
          endTime: '09:00',
          color: '#ef4444',
          variant: 'default',
        }
      ] : [];
      
      return {
        currentVariant: variantId,
        events: initialEvents,
        settings: DEFAULT_SETTINGS,
      };
    }
  }),
}));
export type { ScheduleEvent, ScheduleSettings, BuilderVariantId };