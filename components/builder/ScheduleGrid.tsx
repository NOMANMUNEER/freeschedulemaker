'use client';

import React, { useState } from 'react';
import { useScheduleStore } from '../../store/useScheduleStore';
import EventCard from './EventCard';
import AddEventModal from './AddEventModal';

export default function ScheduleGrid() {
  const { events, settings } = useScheduleStore();
  const { visibleDays, startHour, endHour, clockType, lineSpacing } = settings;

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
    const normalizedHour = hour % 24;
    const ampm = normalizedHour >= 12 ? 'PM' : 'AM';
    const displayHour = normalizedHour % 12 === 0 ? 12 : normalizedHour % 12;
    return `${displayHour.toString().padStart(2, '0')} ${ampm}`;
  };

  // Generate rows array dynamically based on start/end hour settings
  const timeSlots = [];
  for (let minutes = startHour * 60; minutes <= endHour * 60; minutes += lineSpacing) {
    const i = Math.floor(minutes / 60);
    const minute = minutes % 60;
    timeSlots.push({
      label: minute === 0 ? formatHourLabel(i) : '',
      value: `${i.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`,
    });
  }

  const getEventForSlot = (day: string, time: string) => {
    const [hour, minute] = time.split(':').map(Number);
    const slotStart = hour * 60 + minute;
    return events.find((event) => {
      const isSameDay = event.days.includes(day);
      const [eventHour, eventMinute] = event.startTime.split(':').map(Number);
      const eventStart = eventHour * 60 + eventMinute;
      // Events not aligned to the selected grid increment (for example 2:20 PM)
      // appear in the slot that contains their start time.
      const isSameTime = eventStart >= slotStart && eventStart < slotStart + lineSpacing;
      return isSameDay && isSameTime;
    });
  };

  // Dynamic grid column setup styling based on visible days length + 1 time column
  const gridTemplateColumns = {
    gridTemplateColumns: `88px repeat(${visibleDays.length}, minmax(96px, 1fr))`,
  };

  return (
    <div className="w-full overflow-x-auto pb-2 [-webkit-overflow-scrolling:touch]">
      <div id="schedule-grid" className="min-w-[760px] bg-white rounded-xl shadow-xs border border-slate-200 overflow-hidden relative">
        
        {/* Header Row Days */}
        <div 
          style={gridTemplateColumns} 
          className="grid border-b border-slate-200 bg-slate-100/70 text-center font-semibold text-sm text-slate-600 select-none"
        >
          <div className="p-3 sm:p-4 border-r border-slate-200 sticky left-0 z-20 bg-slate-100">Time</div>
          {visibleDays.map((day) => (
            <div key={day} className="p-3 sm:p-4 border-r border-slate-200 last:border-r-0 capitalize truncate">
              {day.substring(0, 3)}
            </div>
          ))}
        </div>

        {/* Time Rows Loop */}
        {timeSlots.map((slot) => (
          <div 
            key={slot.value} 
            style={gridTemplateColumns} 
            className={`grid border-b border-slate-200 last:border-b-0 ${lineSpacing === 60 ? 'h-24' : lineSpacing === 30 ? 'h-14' : 'h-8'}`}
          >
            {/* Time Column */}
            <div className="flex flex-col justify-center items-center font-bold text-xs text-indigo-950 bg-slate-50 border-r border-slate-200 p-2 select-none sticky left-0 z-10">
              {slot.label}
            </div>

            {/* Day Intersection Cells */}
            {visibleDays.map((day) => {
              const event = getEventForSlot(day, slot.value);
              return (
                <button
                  key={day}
                  type="button"
                  onClick={() => !event && handleSlotClick(day, slot.value)}
                  className={`border-r border-slate-200 last:border-r-0 p-1 relative bg-white group hover:bg-slate-50/50 transition-colors text-left ${!event ? 'cursor-pointer' : 'cursor-default'}`}
                >
                  {event && <EventCard event={event} />}
                </button>
              );
            })}
          </div>
        ))}
      </div>

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
