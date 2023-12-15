import styles from '../styles/header.module.css';

const stateConstructor = (
  state: string,
  page: string
): { state: string; page: string } => {
  return { state, page };
};

const states = [
  stateConstructor('Date & Time', 'datetime'),
  stateConstructor('Filters', 'filters'),
  stateConstructor('Rooms', 'rooms'),
  stateConstructor('Confirm', 'confirm'),
];

interface Header {
  back: string | undefined;
  next: string | undefined;
  reset: Function;
  setCurrentPage: Function;
  stage: number | undefined;
}

/**
 * Header component for pages.
 * back: the page the back button should take you to. Leave undefined to hide.
 * next: the page the next button should take you to. Leave undefined to hide.
 * stage: the current room booking state from 0 to 3. Leave undefined to hide.
 */
export default function Header({
  back,
  next,
  stage,
  setCurrentPage,
  reset,
}: Header) {
  return (
    <header className="w-full flex items-center justify-center flex-col p-5 gap-5 select-none flex-wrap">
      {/* Back, Title, Next */}
      <nav className="flex-auto flex w-full text-red gap-1 sm:gap-3 lg:gap-5">
        {back !== undefined ? (
          <button
            onClick={() => setCurrentPage(back)}
            className="flex items-center justify-center text-[0.7rem] sm:text-base lg:text-xl border-solid border-4 rounded-xl border-red flex-1 h-10 md:h-12 lg:h-16 max-w-[12rem] min-w-[4rem]"
          >
            Back
          </button>
        ) : null}
        <button
          onClick={() => {
            reset();
            setCurrentPage('main');
          }}
          className="flex items-center justify-center text-center text-sm md:text-2xl lg:text-4xl border-solid border-4 rounded-xl border-red flex-auto h-10 md:h-12 lg:h-16"
        >
          McMaster Room Booking
        </button>
        {next !== undefined ? (
          <button
            onClick={() => setCurrentPage(next)}
            className="flex items-center justify-center text-[0.7rem] sm:text-base lg:text-xl text-white bg-amber-350 rounded-xl flex-1 h-10 md:h-12 lg:h-16 max-w-[12rem] min-w-[4rem]"
          >
            Next
          </button>
        ) : null}
      </nav>
      {/* Navigation Bar */}
      <nav className="flex w-full lg:w-3/4 h-10 lg:h-16">
        {stage !== undefined
          ? states.map(({ state, page }, i) => {
              const clickable = i < stage;
              const onClick =
                i < stage ? { onClick: () => setCurrentPage(page) } : {};
              return (
                <button
                  key={i}
                  {...onClick}
                  className={`${
                    i <= stage ? 'bg-red' : 'bg-neutral-300'
                  } text-white text-[0.5rem] sm:text-xs lg:text-base box-border flex-auto w-24 ${
                    i === 0
                      ? styles['first-arrow']
                      : i === states.length - 1
                      ? styles['last-arrow']
                      : styles['middle-arrow']
                  } flex items-center justify-center`}
                  disabled={!clickable}
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
