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
      back = 'main';
      next = 'filters';
      stateProgress = 0;
      renderedPage = (
        <DatetimePage setCurrentPage={setCurrentPage}></DatetimePage>
      );
      break;
    case 'filters':
      back = 'datetime';
      next = 'rooms';
      stateProgress = 1;
      renderedPage = (
        <FiltersPage setCurrentPage={setCurrentPage}></FiltersPage>
      );
      break;
    case 'rooms':
      back = 'filters';
      stateProgress = 2;
      renderedPage = <RoomsPage setCurrentPage={setCurrentPage}></RoomsPage>;
      break;
    case 'confirm':
      back = 'rooms';
      stateProgress = 3;
      renderedPage = (
        <ConfirmPage setCurrentPage={setCurrentPage}></ConfirmPage>
      );
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
    state_progress: stateProgress,
    setCurrentPage,
    reset: () => {
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
