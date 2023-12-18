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
}

export default function DonePage({
  room,
  date,
  startTime,
  endTime,
  setCurrentPage,
  setSelectedRoom,
}: DonePage) {
  return (
    <>
      <main className="flex flex-row items-center justify-center mx-20">
        <div className="flex flex-col items-start w-1/2 mr-5">
          {room.score != 0 ? (
            <>
              <h1 className="text-4xl font-bold text-red mb-10">
                Booking Confirmed!
              </h1>
              <h1 className="text-4xl font-bold text-red mb-10">
                Email Confirmation Sent!
              </h1>
            </>
          ) : (
            <></>
          )}
          <button
            onClick={() => setCurrentPage("main")}
            className="w-[90%] md:w-3/4 lg:w-1/2 text-center text-white rounded sm:text-lg md:text-xl lg:text-2xl py-1 md:py-2 lg:py-4 bg-red"
          >
            Return to Home
          </button>
        </div>
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
      </main>
    </>
  );
}
