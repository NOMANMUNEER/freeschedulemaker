'use client';

import React from 'react';
import { useScheduleStore, ScheduleEvent } from '../store/useScheduleStore';

interface EventCardProps {
  event: ScheduleEvent;
}

export default function EventCard({ event }: EventCardProps) {
  const settings = useScheduleStore((state) => state.settings);

  const textAlignment = settings.centerText ? 'text-center' : 'text-left';
  const displayFlexAlignment = settings.centerText ? 'items-center' : 'items-start';

  // SAFETY CHECK: Ensure the color is actually a Hex code (starts with #).
  // If it's old data like "bg-slate...", force it to default Indigo (#4f46e5).
  const rawColor = (event.color && event.color.startsWith('#')) ? event.color : '#4f46e5';

  const cardStyle = {
    fontFamily: settings.textFont,
    color: rawColor,
    backgroundColor: `${rawColor}25`, // Hex string + 15% opacity
    borderColor: rawColor,
  };

  return (
    <div 
      style={cardStyle}
      className={`absolute inset-1 p-2 rounded border flex flex-col justify-between shadow-sm transition-all duration-200 hover:shadow-md ${textAlignment} ${displayFlexAlignment}`}
    >
      <div className="w-full">
        {settings.showTitle && (
          <p className="font-bold text-xs leading-tight break-words">
            {event.title}
          </p>
        )}
      </div>
      
      {settings.showTimeInEvents && (
        <p className="text-[10px] opacity-90 font-bold whitespace-nowrap w-full mt-1">
          {event.startTime} - {event.endTime}
        </p>
      )}
    </div>
  );
}