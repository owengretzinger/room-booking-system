interface MainPage {
  setCurrentPage: Function;
}

const optionClasses =
  'w-[90%] md:w-3/4 lg:w-1/2 text-center text-white rounded sm:text-lg md:text-xl lg:text-2xl py-1 md:py-2 lg:py-4';

export default function MainPage({ setCurrentPage }: MainPage) {
  return (
    <main className="h-screen flex flex-col items-center justify-center gap-5 min-h-full">
      <button
        onClick={() => setCurrentPage('datetime')}
        className={`${optionClasses} bg-amber-350`}
      >
        Start New Booking
      </button>
      <button
        onClick={() => setCurrentPage('cancel')}
        className={`${optionClasses} bg-red`}
      >
        Cancel a Reservation
      </button>
    </main>
  );
}
