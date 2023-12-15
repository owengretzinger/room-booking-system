'use client';

import Header from '../components/Header';
import CancelPage from '../pages/CancelPage';
import ConfirmPage from '../pages/ConfirmPage';
import DatetimePage from '../pages/DatetimePage';
import FiltersPage from '../pages/FiltersPage';
import MainPage from '../pages/MainPage';
import RoomsPage from '../pages/RoomsPage';

import { useState } from 'react';

export default function Home() {
  const [currentPage, setCurrentPage] = useState('main');

  let next = undefined,
    back = undefined,
    stateProgress = undefined,
    renderedPage = null;

  switch (currentPage) {
    case 'main':
      renderedPage = <MainPage setCurrentPage={setCurrentPage}></MainPage>;
      break;
    case 'datetime':
      back = () => setCurrentPage('main');
      next = () => setCurrentPage('filters');
      stateProgress = 0;
      renderedPage = <DatetimePage setCurrentPage={setCurrentPage}></DatetimePage>;
      break;
    case 'filters':
      back = () => setCurrentPage('datetime');
      next = () => setCurrentPage('filters');
      stateProgress = 1;
      renderedPage = <FiltersPage setCurrentPage={setCurrentPage}></FiltersPage>;
      break;
    case 'rooms':
      back = () => setCurrentPage('rooms');
      next = () => setCurrentPage('filters');
      stateProgress = 2;
      renderedPage = <RoomsPage setCurrentPage={setCurrentPage}></RoomsPage>;
      break;
    case 'confirm':
      back = () => setCurrentPage('rooms');
      stateProgress = 3;
      renderedPage = <ConfirmPage setCurrentPage={setCurrentPage}></ConfirmPage>;
      break;
    case 'cancel':
      back = () => setCurrentPage('main');
      renderedPage = <CancelPage setCurrentPage={setCurrentPage}></CancelPage>;
      break;
    default:
      break;
  }

  const headerProps = {
    back,
    next,
    state_progress: stateProgress,
    reset: () => {
      setCurrentPage('main');
      // reset filters, datetime, etc.
    },
  };

  return (
    <>
      <Header {...headerProps}></Header>
      {renderedPage}
    </>
  );
}
