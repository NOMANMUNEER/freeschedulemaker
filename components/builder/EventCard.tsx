'use client';

import React from 'react';
import { useScheduleStore } from '../../store/useScheduleStore';
import { ScheduleEvent } from '../../types/schedule';
import { MapPin, User, Tag } from 'lucide-react';

interface EventCardProps {
  event: ScheduleEvent;
}

export default function EventCard({ event }: EventCardProps) {
  const settings = useScheduleStore((state) => state.settings);

  const textAlignment = settings.centerText ? 'text-center' : 'text-left';
  const displayFlexAlignment = settings.centerText ? 'items-center' : 'items-start';

  // Safety check: ensure the color is a valid hex code
  const rawColor = (event.color && event.color.startsWith('#')) ? event.color : '#4f46e5';

  const cardStyle = {
    fontFamily: settings.textFont,
    color: rawColor,
    backgroundColor: `${rawColor}15`, // ~8% opacity for a subtle background
    borderColor: rawColor,
  };

  return (
    <div 
      style={cardStyle}
      className={`absolute inset-1 p-2 rounded border-l-4 flex flex-col justify-between shadow-xs transition-all duration-200 hover:shadow-sm overflow-hidden ${textAlignment} ${displayFlexAlignment}`}
    >
      <div className="w-full flex-1 flex flex-col justify-start">
        {settings.showTitle && (
          <p className="font-bold text-xs leading-tight break-words mb-1">
            {event.title}
          </p>
        )}
        
        {/* Additional Metadata Fields */}
        <div className={`flex flex-col gap-0.5 text-[9px] opacity-85 leading-normal ${settings.centerText ? 'items-center' : 'items-start'}`}>
          {event.person && (
            <span className="flex items-center gap-1 font-medium truncate max-w-full">
              <User className="h-2.5 w-2.5 shrink-0" />
              <span className="truncate">{event.person}</span>
            </span>
          )}
          {event.location && (
            <span className="flex items-center gap-1 font-medium truncate max-w-full">
              <MapPin className="h-2.5 w-2.5 shrink-0" />
              <span className="truncate">{event.location}</span>
            </span>
          )}
          {event.category && (
            <span className="flex items-center gap-1 font-medium truncate max-w-full">
              <Tag className="h-2.5 w-2.5 shrink-0" />
              <span className="truncate">{event.category}</span>
            </span>
          )}
        </div>
      </div>
      
      {settings.showTimeInEvents && (
        <p className="text-[9px] opacity-75 font-semibold whitespace-nowrap w-full mt-1 border-t border-current/10 pt-0.5">
          {event.startTime} - {event.endTime}
        </p>
      )}
    </div>
  );
}
