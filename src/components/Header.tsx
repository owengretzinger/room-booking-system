import styles from '../styles/header.module.css';

const stateConstructor = (
  state: string,
  page: string
): { state: string; page: string } => {
  return { state, page };
};

const states = [
  stateConstructor('Select Date & Time', 'datetime'),
  stateConstructor('Select Filters', 'filters'),
  stateConstructor('Select Room', 'rooms'),
  stateConstructor('Confirm Booking', 'confirm'),
];

interface Header {
  back: string | undefined;
  next: string | undefined;
  reset: Function;
  stage: number | undefined;
  setCurrentPage: Function;
  nextButtonDisabled: boolean;
  setNextButtonDisabled: Function;
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
  nextButtonDisabled,
  setNextButtonDisabled
}: Header) {
  return (
    <>
      <header className="w-screen flex items-center justify-center flex-col p-5 gap-5 select-none flex-wrap fixed bg-white z-50 border-b-4 border-red">
        {/* Back, Title, Next */}
        <nav className="flex-auto flex w-full text-red gap-1 sm:gap-3 lg:gap-5">


          <div className="flex-1 max-w-[12rem] min-w-[4rem]">
            {back &&
              <button
                onClick={() => setCurrentPage(back)}
                className="flex items-center justify-center text-[0.7rem] sm:text-base lg:text-xl  border-4 rounded-xl border-red h-10 md:h-12 lg:h-16 w-full"
              >
                Back
              </button>
            }
          </div>


          <button
            onClick={() => {
              reset();
              setCurrentPage('main');
            }}
            disabled={stage === undefined}
            className="flex items-center justify-center text-center text-sm md:text-2xl lg:text-4xl border-solid border-4 rounded-xl border-red flex-auto h-10 md:h-12 lg:h-16"
          >
            McMaster Room Booking
          </button>


          <div className="flex-1 max-w-[12rem] min-w-[4rem]"></div>
          
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
                  className={`${i <= stage ? 'bg-red' : 'bg-neutral-300'
                    } text-white text-[0.5rem] sm:text-xs lg:text-base box-border flex-auto w-24 ${i === 0
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

      {next && <div className="w-screen h-screen fixed flex justify-end items-end pointer-events-none z-50">
        <button
          onClick={() => setCurrentPage(next)}
          disabled={nextButtonDisabled}
          // make cursor change to x when disabled


          className={`flex items-center justify-center text-[0.7rem] sm:text-base lg:text-xl text-white bg-yellow rounded-xl flex-1 h-10 md:h-12 lg:h-16 max-w-[12rem] min-w-[4rem] m-20 pointer-events-auto ${nextButtonDisabled ? "opacity-40 cursor-not-allowed" : ""}`}
        >
          Next
        </button>
      </div>}
    </>
  );
}
