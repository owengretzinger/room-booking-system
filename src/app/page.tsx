import Header from '../components/Header';
import CancelPage from './pages/CancelPage';
import ConfirmPage from './pages/ConfirmPage';
import DatetimePage from './pages/DatetimePage';
import FiltersPage from './pages/FiltersPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import RoomsPage from './pages/RoomsPage';

export default function Home() {
  return (
    <>
      <Header
        back={undefined}
        next={undefined}
        state_progress={undefined}
      ></Header>
    </>
  );
}
