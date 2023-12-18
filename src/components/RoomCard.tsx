import { GrGroup, GrPlug } from 'react-icons/gr';
import { CiCircleCheck, CiCircleRemove } from 'react-icons/ci';
import { BiError } from "react-icons/bi";
import Image from 'next/image';

export type Room = {
  score: number;
  capacityMatches: boolean;
  matchingUtilities: string[];
  missingUtilities: string[];
  buildingMatches: boolean;
  name: string;
  capacity: number;
  utilities: Set<string>;
  building: string;
}

interface RoomCard {
  room: Room;
  setSelectedRoom: Function;
  setCurrentPage: Function;
}

export default function RoomCard({
  room,
  setSelectedRoom,
  setCurrentPage,
}: RoomCard) {
  return (
    <div className="flex h-[250px] p-4 border-red border-4 rounded-xl gap-4 w-full md:w-[750px]">
      {/* image */}
      <div className="h-full aspect-square bg-gray-400 rounded-xl hidden sm:block">
        <Image
          src="/images/room-sample.jpg"
          width={100}
          height={100}
          className="rounded-xl w-full h-full object-cover"
          alt="Picture of the room"
        />
      </div>

      {/* info */}
      <div className="flex flex-col gap-4 text-red flex-1">
        <div className="">
          <div className="flex gap-1 items-center">
            <div>{room.building}</div>
            <BiError className={`text-xl ${room.buildingMatches ? "hidden" : ""}`} />
          </div>
          <div className="text-4xl leading-7 -mt-[6px]">{room.name}</div>
        </div>
        <div className="w-full flex">
          <div className="basis-1/2 flex items-center gap-2">
            <GrGroup className="" size={24} />
            <div className="flex gap-1 items-center">
              <span className="">{room.capacity} people</span>
              <BiError className={`text-xl ${room.capacityMatches ? "hidden" : ""}`} />
            </div>
          </div>
          <div className="basis-1/2 flex items-center gap-2">
            <GrPlug className="" size={24} />
            <span className="">4 outlets</span>
          </div>
        </div>
        <div className="flex">
          {room.matchingUtilities.length > 0 ? (
            <ul className="basis-1/2">
              {room.matchingUtilities.map((util, i) => {
                return (
                  <li
                    className="flex items-center gap-2 text-green-700"
                    key={i}
                  >
                    <CiCircleCheck className="" size={24} />
                    <span className="">{util}</span>
                  </li>
                );
              })}
            </ul>
          ) : null}
          {room.missingUtilities.length > 0 ? (
            <ul className="basis-1/2">
              {room.missingUtilities.map((util, i) => {
                return (
                  <li
                    className="flex items-center gap-2 text-rose-700"
                    key={i}
                  >
                    <CiCircleRemove className="" size={24} />
                    <span className="">{util}</span>
                  </li>
                );
              })}
            </ul>
          ) : null}
        </div>
      </div>

      {/* match */}
      <div className="flex flex-col h-full p-4 gap-4">
        <div className="h-full flex justify-center items-center">
          <ProgressCircle percentFilled={room.score} />
        </div>
        <button
          className="w-full text-white bg-amber-350 rounded-xl px-4 py-2 text-center"
          onClick={() => {
            setSelectedRoom(room);
            setCurrentPage('confirm');
          }}
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

function ProgressCircle({ percentFilled }: { percentFilled: number }) {
  return (
    <div className="relative w-28 h-28 text-red">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        {/* <!-- Background circle --> */}
        <circle
          className="text-gray-200 stroke-current"
          stroke-width="10"
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
        ></circle>
        {/* <!-- Progress circle --> */}
        <circle
          className="text-red progress-ring__circle stroke-current"
          stroke-width="10"
          stroke-linecap="round"
          cx="50"
          cy="50"
          r="40"
          fill="transparent"
          // https://stackoverflow.com/a/77095851
          stroke-dashoffset={`calc(400 - (250 * ${percentFilled}) / 100)`}
        ></circle>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-center leading-[14px]">
        {percentFilled}%<br />
        Match
      </div>
    </div>
  );
}
