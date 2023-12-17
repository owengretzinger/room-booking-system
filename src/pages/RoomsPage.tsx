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

const getRooms = (filters: {
  capacity: Set<string>;
  utilities: Set<string>;
  buildings: Set<string>;
}) => {
  // Assign rooms with score and initialize empty has and missing arrays
  let matchedRooms = rooms.map((room) => {
    return {
      ...room,
      score: 0,
      has: new Array<string>(),
      missing: new Array<string>(),
      matchingCapacity: false,
    };
  });

  // Check buildings
  matchedRooms = matchedRooms.map((room) => {
    const buildingMatches = filters.buildings.has(room.building);
    if (buildingMatches || filters.buildings.has('Any')) {
      return { ...room, score: 1 / 3, has: [room.building] };
    }
    return { ...room, score: 0, missing: [room.building] };
  });

  // Check utilities
  matchedRooms = matchedRooms.map((room) => {
    let has = new Array<string>();
    let missing = new Array<string>();
    room.utilities.forEach((utility) => {
      const utilityMatches =
        filters.utilities.has(utility) || filters.utilities.has('Any');
      if (utilityMatches) {
        has = [...has, utility];
      } else {
        missing = [...missing, utility];
      }
    });
    const score = has.length / filters.utilities.size / 3;
    return { ...room, has, missing, score: room.score + score };
  });

  // Check capacity
  matchedRooms = matchedRooms.map((room) => {
    let capacityMatches = false;
    filters.capacity.forEach((capacity) => {
      switch (capacity) {
        case 'Any':
          capacityMatches = true;
          break;
        case '1-4':
          capacityMatches =
            capacityMatches || (room.capacity >= 1 && room.capacity <= 4);
          break;
        case '5-9':
          capacityMatches =
            capacityMatches || (room.capacity >= 5 && room.capacity <= 9);
          break;
        case '10-20':
          capacityMatches =
            capacityMatches || (room.capacity >= 10 && room.capacity <= 20);
          break;
        case '>20':
          capacityMatches = capacityMatches || room.capacity > 20;
          break;
        default:
          break;
      }
    });
    return {
      ...room,
      matchingCapacity: capacityMatches,
      score: room.score + (capacityMatches ? 1 / 3 : 0),
    };
  });

  return matchedRooms
    .filter((room) => room.score >= 0.5)
    .sort((room1, room2) => room2.score - room1.score);
};

interface RoomsPage {
  filters: {
    capacity: Set<string>;
    utilities: Set<string>;
    buildings: Set<string>;
  };
  setSelectedRoom: Function;
  setCurrentPage: Function;
}

export default function RoomsPage({
  filters,
  setSelectedRoom,
  setCurrentPage,
}: RoomsPage) {
  const filteredRooms = getRooms(filters);

  console.log(filteredRooms);

  return (
    <>
      <main className="flex flex-col items-center justify-between px-2">
        <div className="flex flex-col gap-8 w-full items-center">
          {filteredRooms.map((room, idx) => {
            return (
              <RoomCard
                key={idx}
                room={room}
                setSelectedRoom={setSelectedRoom}
                setCurrentPage={setCurrentPage}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}
