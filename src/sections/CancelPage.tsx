import RoomDetails from "@/components/RoomDetails";

interface CancelPage {
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

export default function CancelPage({
  room,
  date,
  startTime,
  endTime,
  setCurrentPage,
  setSelectedRoom,
}: CancelPage) {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between">
        {room.score == 0 ? (
          <div className="text-red text-2xl">No bookings made yet</div>
        ) : (
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
          ></RoomDetails>
        )}
      </main>
    </>
  );
}
