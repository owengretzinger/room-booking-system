import RoomDetails from "@/components/RoomDetails";

interface DonePage {
  room: {
    score: number;
    has: string[];
    missing: string[];
    matchingCapacity: boolean;
    name: string;
    capacity: number;
    utilities: Set<string>;
    building: string;
  };
  date: string;
  startTime: string;
  endTime: string;
  setCurrentPage: Function;
  setSelectedRoom: Function;
  reset: Function;
}

export default function DonePage({
  room,
  date,
  startTime,
  endTime,
  setCurrentPage,
  setSelectedRoom,
  reset,
}: DonePage) {
  return (
    <>
      <main className="w-screen h-screen flex justify-center items-center">
        <div className="w-full flex flex-row items-center justify-center mx-20 gap-32">
          <div className="flex flex-col items-end basis-1/2">
            <RoomDetails
              room={room}
              date={date}
              startTime={startTime}
              endTime={endTime}
              isLoggedIn={true}
              setCurrentPage={setCurrentPage}
              isConfirmed={true}
              isCancelPage={false}
              setSelectedRoom={setSelectedRoom}
            />
          </div>
          <div className="flex flex-col items-start basis-1/2">
            {room.score != 0 ? (
              <>
                <h1 className="text-4xl font-bold text-red">
                  Booking Confirmed!
                </h1>
                <p className="text-2xl font-bold text-red mb-10">
                  Email Confirmation Sent!
                </p>
              </>
            ) : (
              <></>
            )}
            <button
              onClick={() => {reset(); setCurrentPage("main");}}
              className="w-[90%] md:w-3/4 lg:w-1/2 text-center text-white rounded sm:text-lg md:text-xl lg:text-2xl py-1 md:py-2 lg:py-4 bg-yellow"
            >
              Return to Home
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
