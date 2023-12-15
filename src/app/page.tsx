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
  const [back, setBack] = useState(undefined);
  const [next, setNext] = useState(undefined);
  const [stateProgress, setStateProgress] = useState(undefined);
  const [currentPage, setCurrentPage] = useState('main');

  const headerProps = { back, next, state_progress: stateProgress };

  return (
    <>
      <Header {...headerProps}></Header>
      {() => {
        switch (currentPage) {
          case 'main':
            return <MainPage></MainPage>
          case 'datetime':
            return <DatetimePage></DatetimePage>
          case 'filters':
            return <FiltersPage></FiltersPage>
          case 'rooms':
            return <RoomsPage></RoomsPage>
          case 'confirm':
            return <ConfirmPage></ConfirmPage>
          case 'cancel':
            return <CancelPage></CancelPage>
          default:
            return null;
        }
      }}
    </>
  );
}
