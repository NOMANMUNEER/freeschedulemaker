'use client';

import React, { useState } from 'react';
import { useScheduleStore } from '../../store/useScheduleStore';
import EventCard from './EventCard';
import AddEventModal from './AddEventModal';

export default function ScheduleGrid() {
  const { events, settings, currentVariant } = useScheduleStore();
  const { visibleDays, startHour, endHour, clockType } = settings;

  // Add state for the grid's modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState({ day: '', time: '' });

  const handleSlotClick = (day: string, time: string) => {
    setSelectedSlot({ day, time });
    setIsModalOpen(true);
  };

  // Helper to format hours based on 12-Hour or 24-Hour type setting
  const formatHourLabel = (hour: number) => {
    if (clockType === '24-Hour') {
      return `${hour.toString().padStart(2, '0')}:00`;
    }
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 === 0 ? 12 : hour % 12;
    return `${displayHour.toString().padStart(2, '0')} ${ampm}`;
  };

  // Generate rows array dynamically based on start/end hour settings
  const timeSlots = [];
  for (let i = startHour; i <= endHour; i++) {
    timeSlots.push({
      label: formatHourLabel(i),
      value: `${i.toString().padStart(2, '0')}:00`,
    });
  }

  const getEventForSlot = (day: string, time: string) => {
    return events.find((event) => {
      const isSameDay = event.days.includes(day);
      const isSameTime = event.startTime === time;
      return isSameDay && isSameTime;
    });
  };

  // Dynamic grid column setup styling based on visible days length + 1 time column
  const gridTemplateColumns = {
    gridTemplateColumns: `repeat(${visibleDays.length + 1}, minmax(0, 1fr))`,
  };

  return (
    <div id="schedule-grid" className="w-full bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden relative">
      
      {/* Header Row Days */}
      <div 
        style={gridTemplateColumns} 
        className="grid border-b border-slate-200 bg-slate-100/70 text-center font-semibold text-sm text-slate-600 select-none"
      >
        <div className="p-4 border-r border-slate-200">Time</div>
        {visibleDays.map((day) => (
          <div key={day} className="p-4 border-r border-slate-200 last:border-r-0 capitalize truncate">
            {day.substring(0, 3)}
          </div>
        ))}
      </div>

      {/* Time Rows Loop */}
      {timeSlots.map((slot) => (
        <div 
          key={slot.value} 
          style={gridTemplateColumns} 
          className="grid border-b border-slate-200 last:border-b-0 h-24"
        >
          {/* Time Column */}
          <div className="flex flex-col justify-center items-center font-bold text-xs text-indigo-950 bg-slate-50/50 border-r border-slate-200 p-2 select-none">
            {slot.label}
          </div>

          {/* Day Intersection Cells */}
          {visibleDays.map((day) => {
            const event = getEventForSlot(day, slot.value);
            return (
              <div 
                key={day} 
                onClick={() => !event && handleSlotClick(day, slot.value)}
                className={`border-r border-slate-200 last:border-r-0 p-1 relative bg-white group hover:bg-slate-50/50 transition-colors ${!event ? 'cursor-pointer' : ''}`}
              >
                {event && <EventCard event={event} />}
              </div>
            );
          })}
        </div>
      ))}

      {/* Mount the Modal specifically for grid clicks */}
      {isModalOpen && (
        <AddEventModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          initialDay={selectedSlot.day}
          initialTime={selectedSlot.time}
        />
      )}
    </div>
  );
}
