'use client';

import Header from '../components/Header';
import CancelPage from '../pages/CancelPage';
import ConfirmPage from '../pages/ConfirmPage';
import DonePage from '../pages/DonePage';
import DatetimePage from '../pages/DatetimePage';
import FiltersPage from '../pages/FiltersPage';
import MainPage from '../pages/MainPage';
import RoomsPage from '../pages/RoomsPage';

import { useState } from 'react';
import TimeSelector from '@/components/Timepicker';

export default function Home() {
  const [currentPage, setCurrentPage] = useState('main');
  const [nextButtonDisabled, setNextButtonDisabled] = useState(false);
  const [selectedDay, setSelectedDay] = useState<Date>(new Date());
  const [selectedSlots, setSelectedSlots] = useState<Set<number>>(
    new Set<number>([])
  );
  const [filters, setFilters] = useState({
    capacity: new Set<string>(['Any']),
    utilities: new Set<string>(['Any']),
    buildings: new Set<string>(['Any']),
  });

  let next = undefined,
    back = undefined,
    stage = undefined,
    renderedPage = null;

  switch (currentPage) {
    case 'main':
      renderedPage = <MainPage setCurrentPage={setCurrentPage}></MainPage>;
      break;
    case 'datetime':
      back = 'main';
      next = 'filters';
      stage = 0;
      renderedPage = (
        <DatetimePage
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
          selectedSlots={selectedSlots}
          setSelectedSlots={setSelectedSlots}
          nextButtonDisabled={nextButtonDisabled}
          setNextButtonDisabled={setNextButtonDisabled}
        ></DatetimePage>
      );
      break;
    case 'filters':
      back = 'datetime';
      next = 'rooms';
      stage = 1;
      renderedPage = (
        <FiltersPage filters={filters} setFilters={setFilters}></FiltersPage>
      );
      break;
    case 'rooms':
      back = 'filters';
      stage = 2;
      renderedPage = <RoomsPage setCurrentPage={setCurrentPage}></RoomsPage>;
      break;
    case 'confirm':
      back = 'rooms';
      stage = 3;
      renderedPage = (
        <ConfirmPage setCurrentPage={setCurrentPage}></ConfirmPage>
      );
      break;
    case 'done':
      renderedPage = <DonePage setCurrentPage={setCurrentPage}></DonePage>;
      break;
    case 'cancel':
      back = 'main';
      renderedPage = <CancelPage setCurrentPage={setCurrentPage}></CancelPage>;
      break;
    default:
      break;
  }

  const headerProps = {
    back,
    next,
    stage,
    setCurrentPage,
    reset: () => {
      setSelectedDay(new Date());
      setSelectedSlots(new Set<number>([]));
      setFilters({
        capacity: new Set<string>(['Any']),
        utilities: new Set<string>(['Any']),
        buildings: new Set<string>(['Any']),
      });
    },
    nextButtonDisabled,
    setNextButtonDisabled,
  };

  return (
    <>
      {/* <TimeSelector /> */}
      {currentPage === 'main' ? (
        renderedPage
      ) : (
        <>
          <Header {...headerProps}></Header>
          <div className="pt-52 relative">{renderedPage}</div>
        </>
      )}
    </>
  );
}
