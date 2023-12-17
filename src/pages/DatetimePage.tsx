"use client";

import { useState } from 'react';
import { format } from 'date-fns';

import { DayPicker } from 'react-day-picker';
import '../styles/day-picker.css';

import TimePicker from '../components/Timeslots';

interface DatetimePage {
  setCurrentPage: Function;
  nextButtonDisabled: boolean;
  setNextButtonDisabled: Function;
}

export default function Datetime({setCurrentPage,nextButtonDisabled,setNextButtonDisabled}: DatetimePage) {
  const today = new Date();
  const [selectedDay, setSelected] = useState<Date | undefined>(today);
  const footer = selectedDay ? (
    <p>You selected {format(selectedDay, 'PPP')}.</p>
  ) : (
    <p>Please pick a day.</p>
  );

  return (
    <>
      <main className="flex justify-center gap-4 items-stretch">
        <DayPicker
          showOutsideDays
          mode="single"
          required
          selected={selectedDay}
          onSelect={setSelected}
          footer={footer}
          disabled={{ before: today }}
        />
        <TimePicker nextButtonDisabled={nextButtonDisabled} setNextButtonDisabled={setNextButtonDisabled} />
      </main>
    </>
  );
}

