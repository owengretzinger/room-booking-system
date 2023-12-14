import styles from './header.module.css';

const states = [
  'Select Date & Time',
  'Select Filters',
  'Select Room',
  'Confirm Booking',
];

/*
 * Header for pages
 */
export default function Header({ back, next, state_progress }) {
  return (
    <header className="w-full flex items-center justify-center flex-col p-5 gap-5 select-none flex-wrap">
      <div className="flex-auto flex w-full text-red-925 gap-1 sm:gap-3 lg:gap-5">
        {back ? (
          <button className="flex items-center justify-center text-[0.7rem] sm:text-base lg:text-xl border-solid border-4 rounded-xl border-red-925 flex-1 h-10 md:h-12 lg:h-16 max-w-[12rem] min-w-[4rem]">
            Back
          </button>
        ) : null}
        <h1 className="flex items-center justify-center text-center text-sm md:text-2xl lg:text-4xl border-solid border-4 rounded-xl border-red-925 flex-auto h-10 md:h-12 lg:h-16">
          McMaster Room Booking
        </h1>
        {next ? (
          <button className="flex items-center justify-center text-[0.7rem] sm:text-base lg:text-xl text-white bg-amber-350 rounded-xl flex-1 h-10 md:h-12 lg:h-16 max-w-[12rem] min-w-[4rem]">
            Next
          </button>
        ) : null}
      </div>
      <nav className="flex w-full lg:w-3/4 h-10 lg:h-16">
        {state_progress
          ? states.map((state, i) => {
              const visitedState = i <= state_progress;
              return (
                <button
                  key={i}
                  className={`bg-red-925 disabled:bg-neutral-300 text-white text-[0.5rem] sm:text-xs lg:text-base box-border flex-auto w-24 ${
                    i === 0
                      ? styles['first-arrow']
                      : i === states.length - 1
                      ? styles['last-arrow']
                      : styles['middle-arrow']
                  }`}
                  disabled={!visitedState}
                >
                  {state}
                </button>
              );
            })
          : null}
      </nav>
    </header>
  );
}
