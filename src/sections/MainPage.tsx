import { useEffect } from "react";
import { BookedRoom } from "./CancelPage";

interface MainPage {
  setCurrentPage: Function;
  bookedRooms: BookedRoom[];
  setBookedRooms: Function;
}

const optionClasses =
  'w-[90%] md:w-3/4 lg:w-1/2 text-center text-white rounded sm:text-lg md:text-xl lg:text-2xl py-2 lg:py-4';

export default function MainPage({ setCurrentPage, bookedRooms, setBookedRooms }: MainPage) {
  // remove rooms that have been cancelled
  useEffect(() => {
    setBookedRooms(bookedRooms.filter((bookedRoom) => !bookedRoom.bookingCancelled));
  });

  return (
    <main className="h-screen flex flex-col items-center justify-center gap-5 min-h-full">
      <button
        onClick={() => setCurrentPage('datetime')}
        className={`${optionClasses} bg-amber-350`}
      >
        Book a Room
      </button>
      <button
        onClick={() => setCurrentPage('cancel')}
        className={`${optionClasses} bg-red`}
      >
        Cancel a Reservation
      </button>
      <p className="mt-6 text-xs text-slate-600 text-center">
        Built by <a href="https://owengretzinger.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-800">Owen Gretzinger</a> for Human Computer Interfaces
      </p>
    </main>
  );
}
