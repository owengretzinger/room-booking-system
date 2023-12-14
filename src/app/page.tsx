import Header from './Header';

const optionClasses =
  'w-[90%] md:w-3/4 lg:w-1/2 text-center text-white rounded sm:text-lg md:text-xl lg:text-2xl py-1 md:py-2 lg:py-4';

export default function Home() {
  return (
    <>
      <Header
        back={undefined}
        next={undefined}
        state_progress={undefined}
      ></Header>
      <main className="flex flex-col items-center justify-center gap-5 min-h-full">
        <a href="datetime" className={`${optionClasses} bg-amber-350`}>
          Start New Booking
        </a>
        <a href="cancel" className={`${optionClasses} bg-red-925`}>
          Cancel a Reservation
        </a>
      </main>
    </>
  );
}
