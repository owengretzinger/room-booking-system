'use client';

import { format } from 'date-fns';

import { DayPicker } from 'react-day-picker';
import '../styles/day-picker.css';

import TimePicker from '../components/Timepicker';

interface DatetimePage {
  selectedDay: Date;
  setSelectedDay: Function;
  selectedSlots: Set<number>;
  setSelectedSlots: Function;
  nextButtonDisabled: boolean;
  setNextButtonDisabled: Function;
}

export default function Datetime({
  selectedDay,
  setSelectedDay,
  selectedSlots,
  setSelectedSlots,
  nextButtonDisabled,
  setNextButtonDisabled,
}: DatetimePage) {
  const today = new Date();
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
          onSelect={(day) => setSelectedDay(day)}
          footer={footer}
          disabled={{ before: today }}
        />
        <TimePicker
          selectedSlots={selectedSlots}
          setSelectedSlots={setSelectedSlots}
          nextButtonDisabled={nextButtonDisabled}
          setNextButtonDisabled={setNextButtonDisabled}
        />
      </main>
    </>
  );
}
