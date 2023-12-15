"use client";

import Header from '../Header';
import { useState } from 'react';
import { format } from 'date-fns';

import {  DayPicker } from 'react-day-picker';
import  'react-day-picker/dist/style.css';

export default function Datetime() {
  const today = new Date();
  const [selectedDay, setSelected] = useState<Date | undefined>(today);
  const footer = selectedDay ? (
    <p>You selected {format(selectedDay, 'PPP')}.</p>
  ) : (
    <p>Please pick a day.</p>
  );
  return (
    <>
      <Header back={'/'} next={'filters'} state_progress={0}></Header>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <DayPicker
        styles={{ caption: { color: '#A60505' } }}
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
