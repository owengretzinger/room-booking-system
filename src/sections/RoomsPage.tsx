import RoomCard from '@/components/RoomCard';

export const utilities = ['Projector', 'Whiteboard', 'Blackboard', 'Computer'] as const;
export type Utility = typeof utilities[number];

export const buildings = ['Any', 'Mills Memorial Library', 'Thode Library', 'Gerald Hatch Centre', 'Health Sciences Library'] as const;
export type Building = typeof buildings[number];


const roomMaker = (
  name: string,
  capacity: number,
  utilities: Set<Utility>,
  building: Building
) => {
  return { name, capacity, utilities, building };
};

const ghc = 'Gerald Hatch Centre';
const mills = 'Mills Memorial Library';
const thode = 'Thode Library';
const hsl = 'Health Sciences Library';

const rooms = [
  // Hatch
  roomMaker('H201', 6, new Set<Utility>(['Projector']), ghc),
  roomMaker('H203', 6, new Set<Utility>(['Projector', 'Whiteboard']), ghc),
  roomMaker('H204A', 12, new Set<Utility>(['Projector', 'Whiteboard']), ghc),
  roomMaker('H204B', 12, new Set<Utility>(['Projector', 'Whiteboard']), ghc),
  // Mills
  roomMaker('L310/A', 6, new Set<Utility>(['Whiteboard',]), mills),
  roomMaker('L310/B', 6, new Set<Utility>(['Whiteboard',]), mills),
  roomMaker('L310/C', 6, new Set<Utility>(['Whiteboard',]), mills),
  roomMaker('L310/D', 8, new Set<Utility>(['Whiteboard',]), mills),
  roomMaker('L310/E', 8, new Set<Utility>(['Whiteboard',]), mills),
  // Thode
  roomMaker('Group Study 1', 6, new Set<Utility>([]), thode),
  roomMaker('Group Study 2', 6, new Set<Utility>([]), thode),
  roomMaker('Group Study 3', 6, new Set<Utility>([]), thode),
  roomMaker('Group Study 6', 6, new Set<Utility>([]), thode),
  roomMaker('Group Study 7', 6, new Set<Utility>([]), thode),
  roomMaker('Group Study 8', 6, new Set<Utility>([]), thode),
  roomMaker('Group Study 9', 6, new Set<Utility>([]), thode),
  roomMaker('Group Study 10', 6, new Set<Utility>([]), thode),
  roomMaker('ITM Room - 102', 2, new Set<Utility>([]), thode),
  // HSL
  roomMaker('1B14', 10, new Set<Utility>([]), hsl),
  roomMaker('1B15', 10, new Set<Utility>([]), hsl),
  roomMaker('1B16', 10, new Set<Utility>([]), hsl),
  roomMaker('1B17', 10, new Set<Utility>(['Projector']), hsl),
  roomMaker('1B18', 10, new Set<Utility>([]), hsl),
  roomMaker('1B19', 10, new Set<Utility>([]), hsl),
  roomMaker('1B20', 22, new Set<Utility>(['Projector']), hsl),
  roomMaker('1B26', 10, new Set<Utility>([]), hsl),
  roomMaker('1B27', 10, new Set<Utility>([]), hsl),
  roomMaker('1B4', 10, new Set<Utility>([]), hsl),
  roomMaker('1B5', 10, new Set<Utility>([]), hsl),
  roomMaker('1B6', 10, new Set<Utility>([]), hsl),
  roomMaker('2B21', 9, new Set<Utility>(['Projector']), hsl),
  roomMaker('2B22', 9, new Set<Utility>(['Projector']), hsl),
];

function capacityMatch(selectedCapacities: Set<string>, roomCapacity: number) {
  for (let capacity of Array.from(selectedCapacities)) {
    switch (capacity) {
      case 'Any':
        return true;
      case '1-4':
        if (roomCapacity >= 1 && roomCapacity <= 4) {
          return true;
        }
        break;
      case '5-9':
        if (roomCapacity >= 5 && roomCapacity <= 9) {
          return true;
        }
        break;
      case '10-20':
        if (roomCapacity >= 10 && roomCapacity <= 20) {
          return true;
        }
        break;
      case '>20':
        if (roomCapacity > 20) {
          return true;
        }
        break;
      default:
        break;
    }
  }
  return false;
}

const getRooms = (filters: {
  capacity: Set<string>;
  utilities: Set<Utility>;
  buildings: Set<Building>;
}) => {
  return rooms.map((room) => {
    let numFilters = 0;
    let numMatches = 0;

    // capacity
    let capacityMatches = null;
    if (!filters.capacity.has('Any')) {
      capacityMatches = false;
      if (capacityMatch(filters.capacity, room.capacity)) {
        numMatches++;
        capacityMatches = true;
      }
      numFilters++;
    }

    // utilities
    let matchingUtilities = new Set<Utility>();
    let missingUtilities = new Set<Utility>();
    for (let utility of Array.from(filters.utilities)) {
      if (room.utilities.has(utility)) {
        numMatches++;
        matchingUtilities.add(utility);
      } else {
        missingUtilities.add(utility);
      }
      numFilters++;
    }

    // buildings
    let buildingMatches = null;
    if (!filters.buildings.has('Any')) {
      buildingMatches = false;
      if (filters.buildings.has('Any') || filters.buildings.has(room.building)) {
        numMatches++;
        buildingMatches = true;
      }
      numFilters++;
    }

    let score = 100;
    if (numFilters > 0) {
      score = Math.round((numMatches / numFilters) * 100);
    }
    

    return {
      ...room,
      score,
      capacityMatches: capacityMatches,
      matchingUtilities: Array.from(matchingUtilities),
      missingUtilities: Array.from(missingUtilities),
      buildingMatches: buildingMatches,
    };
  })
    .sort(() => Math.random() - 0.5) // randomize to give top matches more variety
    .sort((room1, room2) => { return room2.score - room1.score; })
    .slice(0, 10);
};
interface RoomsPage {
  filters: {
    capacity: Set<string>;
    utilities: Set<Utility>;
    buildings: Set<Building>;
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

  return (
    <>
      <main className="flex flex-col items-center justify-between px-2 pb-4">
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
