"use client";

import Header from '../components/Header';
import { useState } from 'react';
import { format } from 'date-fns';

import { DayPicker } from 'react-day-picker';
import '../styles/day-picker.css';

import FilterButtons from '../components/Timeslots';

export default function Datetime() {
  const today = new Date();
  const [selectedDay, setSelected] = useState<Date | undefined>(today);
  const footer = selectedDay ? (
    <p>You selected {format(selectedDay, 'PPP')}.</p>
  ) : (
    <p>Please pick a day.</p>
  );
  const capacity = [
    { key: 1, name: '8:00 AM - 8:30 AM' },
    { key: 2, name: '8:30 AM - 9:00 AM' },
    { key: 3, name: '9:00 AM - 9:30 AM' },
    { key: 4, name: '9:30 AM - 10:00 AM' },
    { key: 5, name: '10:00 AM - 10:30 AM' },
    { key: 6, name: '10:30 AM - 11:00 AM' },
    { key: 7, name: '11:00 AM - 11:30 AM' },
    { key: 8, name: '11:30 AM - 12:00 PM' },
    { key: 9, name: '12:00 PM - 12:30 PM' },
    { key: 10, name: '12:30 PM - 1:00 PM' },
    { key: 11, name: '1:00 PM - 1:30 PM' },
    { key: 12, name: '1:30 PM - 2:00 PM' },
    { key: 13, name: '2:00 PM - 2:30 PM' },
    { key: 14, name: '2:30 PM - 3:00 PM' },
    { key: 15, name: '3:00 PM - 3:30 PM' },
    { key: 16, name: '3:30 PM - 4:00 PM' },
    { key: 17, name: '4:00 PM - 4:30 PM' },
    { key: 18, name: '4:30 PM - 5:00 PM' },
    { key: 18, name: '5:00 PM - 5:30 PM' },
    { key: 20, name: '5:30 PM - 6:00 PM' },
    { key: 21, name: '6:00 PM - 6:30 PM' },
    { key: 22, name: '6:30 PM - 7:00 PM' },
    { key: 23, name: '7:00 PM - 7:30 PM' },
    { key: 24, name: '7:30 PM - 8:00 PM' },
    { key: 25, name: '8:00 PM - 8:30 PM' },
    { key: 26, name: '8:30 PM - 9:00 PM' },
    { key: 27, name: '9:00 PM - 9:30 PM' },
    { key: 28, name: '9:30 PM - 10:00 PM' },
    { key: 29, name: '10:00 PM - 10:30 PM' },
    { key: 30, name: '10:30 PM - 11:00 PM' },
    { key: 31, name: '11:00 PM - 11:30 PM' },
    { key: 32, name: '11:30 PM - 12:00 AM' },
  ];

  return (
    <>
      <main className="flex min-h-screen flex-row items-start justify-self-center px-80">
        <DayPicker
          showOutsideDays
          mode="single"
          required
          selected={selectedDay}
          onSelect={setSelected}
          footer={footer}
          disabled={{ before: today }}
        />
      </main>
    </>
  );
}

