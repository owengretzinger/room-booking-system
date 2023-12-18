import RoomCard from '@/components/RoomCard';

export const utilities = ['Projector', 'Whiteboard', 'Blackboard', 'Computer'] as const;
export type Utility = typeof utilities[number];

export const buildings = ['Any', 'Mills Memorial Library', 'Thode Library', 'Gerald Hatch Centre', 'Health Sciences Library'] as const;
export type Building = typeof buildings[number];


const roomMaker = (
  name: string,
  capacity: number,
  utilities: Set<Utility>,
  building: Building,
  image: string,
) => {
  return { name, capacity, utilities, building, image };
};

const ghc = 'Gerald Hatch Centre';
const mills = 'Mills Memorial Library';
const thode = 'Thode Library';
const hsl = 'Health Sciences Library';

const rooms = [
  // Hatch
  roomMaker('H201', 9, new Set<Utility>(['Whiteboard']), ghc, 'room-1.jpg'),
  roomMaker('H203', 10, new Set<Utility>(['Projector']), ghc, 'room-2.jpg'),
  roomMaker('H204A', 7, new Set<Utility>(['Whiteboard', 'Blackboard']), ghc, 'room-3.jpg'),
  roomMaker('H204B', 8, new Set<Utility>(), ghc, 'room-4.jpg'),
  // Mills
  roomMaker('L310/A', 12, new Set<Utility>(['Whiteboard', 'Projector']), mills, 'room-5.jpg'),
  roomMaker('L310/B', 12, new Set<Utility>(['Whiteboard', 'Projector']), mills, 'room-6.jpg'),
  roomMaker('L310/C', 16, new Set<Utility>(['Whiteboard', 'Projector']), mills, 'room-7.jpg'),
  roomMaker('L310/D', 22, new Set<Utility>(['Whiteboard', 'Projector']), mills, 'room-8.jpg'),
  roomMaker('L310/E', 8, new Set<Utility>(['Whiteboard']), mills, 'room-9.jpg'),
  // Thode
  roomMaker('Group Study 1', 10, new Set<Utility>(['Blackboard']), thode, 'room-10.jpg'),
  roomMaker('Group Study 2', 6, new Set<Utility>(['Blackboard']), thode, 'room-11.jpg'),
  roomMaker('Group Study 3', 12, new Set<Utility>(['Blackboard']), thode, 'room-12.jpg'),
  roomMaker('Group Study 6', 6, new Set<Utility>(['Blackboard', 'Projector']), thode, 'room-13.jpg'),
  roomMaker('Group Study 7', 8, new Set<Utility>(['Blackboard']), thode, 'room-14.jpg'),
  roomMaker('Group Study 8', 8, new Set<Utility>(['Blackboard']), thode, 'room-15.jpg'),
  roomMaker('Group Study 9', 4, new Set<Utility>(['Blackboard']), thode, 'room-16.jpg'),
  roomMaker('Group Study 10', 4, new Set<Utility>(['Blackboard']), thode, 'room-17.jpg'),
  roomMaker('ITM Room - 102', 4, new Set<Utility>(['Blackboard']), thode, 'room-18.jpg'),
  // HSL
  roomMaker('1B14', 5, new Set<Utility>(['Blackboard']), hsl, 'room-19.jpg'),
  roomMaker('1B15', 6, new Set<Utility>(['Blackboard']), hsl, 'room-20.jpg'),
  roomMaker('1B16', 6, new Set<Utility>(['Blackboard']), hsl, 'room-21.jpg'),
  roomMaker('1B17', 6, new Set<Utility>(['Blackboard']), hsl, 'room-22.jpg'),
  roomMaker('1B18', 5, new Set<Utility>(['Blackboard']), hsl, 'room-23.jpg'),
  roomMaker('1B19', 6, new Set<Utility>(['Blackboard']), hsl, 'room-24.jpg'),
  roomMaker('1B20', 6, new Set<Utility>(['Projector']), hsl, 'room-25.jpg'),
  roomMaker('1B26', 2, new Set<Utility>(['Computer']), hsl, 'room-26.jpg'),
  roomMaker('1B27', 6, new Set<Utility>([]), hsl, 'room-27.jpg'),
  roomMaker('1B4', 4, new Set<Utility>([]), hsl, 'room-28.jpg'),
  roomMaker('1B5', 5, new Set<Utility>(['Blackboard']), hsl, 'room-29.jpg'),
  roomMaker('1B6', 5, new Set<Utility>(['Blackboard']), hsl, 'room-30.jpg'),
  roomMaker('2B21', 5, new Set<Utility>(['Blackboard']), hsl, 'room-31.jpg'),
  roomMaker('2B22', 6, new Set<Utility>(['Blackboard']), hsl, 'room-32.jpg'),
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
      <main className="justify-center pb-4">
        <p className="text-center -mt-4 py-4 text-red text-xs">
          <em>
            Note that for the purposes of this prototype, information is not accurate to actual McMaster rooms.
          </em>
        </p>
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
