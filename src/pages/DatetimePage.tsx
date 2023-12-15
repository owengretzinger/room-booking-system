'use client';

import { useState } from 'react';
import { format } from 'date-fns';

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import '../styles/datetime.module.css';

export default function DatetimePage() {
  const today = new Date();
  const [selectedDay, setSelected] = useState<Date | undefined>(today);
  const footer = selectedDay ? (
    <p>You selected {format(selectedDay, 'PPP')}.</p>
  ) : (
    <p>Please pick a day.</p>
  );

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between">
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
