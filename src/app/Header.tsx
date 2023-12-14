import styles from './header.module.css';

const states = [
  'Select Date & Time',
  'Select Filters',
  'Select Room',
  'Confirm Booking',
];

export default function Header({ back, next, state_progress }) {
  return (
    <header className="box-border w-full flex items-center justify-center flex-col p-5 gap-5 select-none flex-wrap">
      <div className="flex-auto flex w-full text-red-925 gap-5">
        {back ? (
          <button className="flex items-center justify-center text-xl border-solid border-4 rounded-xl py-4 px-16 border-red-925">
            Back
          </button>
        ) : null}
        <h1 className="flex-auto text-center text-4xl border-solid border-4 rounded-xl p-4 border-red-925">
          McMaster Room Booking
        </h1>
        {next ? (
          <button className="flex items-center justify-center text-xl text-white bg-amber-350 rounded-xl py-4 px-16">
            Next
          </button>
        ) : null}
      </div>
      <nav className="flex w-3/4 h-16">
        {state_progress
          ? states.map((state, i) => {
              const visitedState = i <= state_progress;
              return (
                <button
                  key={i}
                  className={`bg-red-925 disabled:bg-neutral-300 text-white box-border flex-auto w-24 ${
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
