import RoomCard from '@/components/RoomCard';
import Header from '../Header';

export default function Rooms() {
  return (
    <>
      <Header back={'filters'} next={'login'} state_progress={2}></Header>
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

