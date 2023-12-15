import RoomCard from '@/components/RoomCard';

interface RoomsPage {
  setCurrentPage: Function;
}

export default function RoomsPage({ setCurrentPage }: RoomsPage) {
  return (
    <>
      <main className="flex flex-col items-center justify-between px-2">
        <div className="flex flex-col gap-8 w-full items-center">
          <RoomCard />
          <RoomCard />
          <RoomCard />
        </div>
      </main>
    </>
  );
}
