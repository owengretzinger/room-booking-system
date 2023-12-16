interface DonePage {
  setCurrentPage: Function;
}

export default function DonePage({ setCurrentPage }: DonePage) {
  return (
    <>
      {/* <main className="flex min-h-screen flex-col items-center justify-between"></main> */}
      <main className="flex flex-col items-center justify-center gap-5 min-h-full">
        <button
          onClick={() => setCurrentPage('main')}
          className={`w-[90%] md:w-3/4 lg:w-1/2 text-center text-white rounded sm:text-lg md:text-xl lg:text-2xl py-1 md:py-2 lg:py-4 bg-yellow`}
        >
          Back to Home
        </button>
      </main>
    </>
  );
}
