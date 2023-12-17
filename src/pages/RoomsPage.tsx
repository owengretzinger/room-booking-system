import RoomCard from '@/components/RoomCard';

const roomMaker = (
  name: string,
  capacity: number,
  utilities: Set<string>,
  building: string
) => {
  return { name, capacity, utilities, building };
};

const ghc = 'Gerald Hatch Center';
const mills = 'Mills';
const thode = 'Thode';
const hsl = 'Health Science Library';

const rooms = [
  // Hatch
  roomMaker('H201', 6, new Set(['TV', 'Outlets', 'Whiteboard']), ghc),
  roomMaker('H203', 6, new Set(['TV', 'Outlets', 'Whiteboard']), ghc),
  roomMaker('H204A', 12, new Set(['TV', 'Outlets', 'Whiteboard']), ghc),
  roomMaker('H204B', 12, new Set(['TV', 'Outlets', 'Whiteboard']), ghc),
  // Mills
  roomMaker('L310/A', 6, new Set(['Whiteboard', 'Outlets']), mills),
  roomMaker('L310/B', 6, new Set(['Whiteboard', 'Outlets']), mills),
  roomMaker('L310/C', 6, new Set(['Whiteboard', 'Outlets']), mills),
  roomMaker('L310/D', 8, new Set(['Whiteboard', 'Outlets']), mills),
  roomMaker('L310/E', 8, new Set(['Whiteboard', 'Outlets']), mills),
  // Thode
  roomMaker('Group Study 1', 6, new Set(['Outlets']), thode),
  roomMaker('Group Study 2', 6, new Set(['Outlets']), thode),
  roomMaker('Group Study 3', 6, new Set(['Outlets']), thode),
  roomMaker('Group Study 6', 6, new Set(['Outlets']), thode),
  roomMaker('Group Study 7', 6, new Set(['Outlets']), thode),
  roomMaker('Group Study 8', 6, new Set(['Outlets']), thode),
  roomMaker('Group Study 9', 6, new Set(['Outlets']), thode),
  roomMaker('Group Study 10', 6, new Set(['Outlets']), thode),
  roomMaker('Individual/Tutorial/Meditation Room - 102', 2, new Set([]), thode),
  // HSL
  roomMaker('1B14', 10, new Set(['Outlets']), hsl),
  roomMaker('1B15', 10, new Set(['Outlets']), hsl),
  roomMaker('1B16', 10, new Set(['Outlets']), hsl),
  roomMaker('1B17', 10, new Set(['Outlets', 'TV']), hsl),
  roomMaker('1B18', 10, new Set(['Outlets']), hsl),
  roomMaker('1B19', 10, new Set(['Outlets']), hsl),
  roomMaker('1B20', 22, new Set(['Outlets', 'TV']), hsl),
  roomMaker('1B26', 10, new Set(['Outlets']), hsl),
  roomMaker('1B27', 10, new Set(['Outlets']), hsl),
  roomMaker('1B4', 10, new Set(['Outlets']), hsl),
  roomMaker('1B5', 10, new Set(['Outlets']), hsl),
  roomMaker('1B6', 10, new Set(['Outlets']), hsl),
  roomMaker('2B21', 9, new Set(['Outlets', 'TV']), hsl),
  roomMaker('2B22', 9, new Set(['Outlets', 'TV']), hsl),
];

interface RoomsPage {
  setCurrentPage: Function;
}

export default function RoomsPage({ setCurrentPage }: RoomsPage) {
  return (
    <>
      <main className="flex flex-col items-center justify-between px-2">
        <div className="flex flex-col gap-8 w-full items-center">
          <RoomCard setCurrentPage={setCurrentPage} />
          <RoomCard setCurrentPage={setCurrentPage} />
          <RoomCard setCurrentPage={setCurrentPage} />
        </div>
      </main>
    </>
  );
}
