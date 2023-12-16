"use client";

import Header from '../components/Header';
import { useState } from 'react';
import * as React from 'react';
import { format } from 'date-fns';

import { DayPicker } from 'react-day-picker';
import '../styles/day-picker.css';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs, { Dayjs } from 'dayjs';

interface DatetimePage {
  setCurrentPage: Function;
}

export default function Datetime({ setCurrentPage }: DatetimePage) {
  const today = new Date();
  const [selectedDay, setSelected] = useState<Date | undefined>(today);
  const footer = selectedDay ? (
    <p>You selected {format(selectedDay, 'PPP')}.</p>
  ) : (
    <p>Please pick a day.</p>
  );

  const [Svalue, SsetValue] = React.useState<Dayjs | null>(dayjs('00:00'));
  const [Evalue, EsetValue] = React.useState<Dayjs | null>(dayjs('00:00'));

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
        <div className="pt-40 pl-44">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['TimePicker']}>
              <TimePicker
                label="Start Time"
                value={Svalue}
                onChange={(newValue) => SsetValue(newValue)}
              />
            </DemoContainer>
          </LocalizationProvider>
          <div className="pt-10 pl-28">
            <h1>to</h1>
          </div>
          <div className="pt-10">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['TimePicker']}>
                <TimePicker
                  label="End Time"
                  value={Evalue}
                  onChange={(newValue) => EsetValue(newValue)}
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>
        </div>
      </main>
    </>
  );
}

