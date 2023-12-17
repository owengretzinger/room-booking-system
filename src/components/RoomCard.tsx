import { GrGroup } from 'react-icons/gr';
import { CiCircleCheck, CiCircleRemove } from 'react-icons/ci';
import Image from 'next/image';

interface RoomCard {
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
  setSelectedRoom: Function;
  setCurrentPage: Function;
}

export default function RoomCard({
  room,
  setSelectedRoom,
  setCurrentPage,
}: RoomCard) {
  return (
    <div className="flex min-h-[250px] p-4 border-red border-4 rounded-xl gap-4 w-full md:w-[750px]">
      {/* image */}
      <div className="aspect-square bg-gray-400 rounded-xl hidden sm:block">
        <Image
          src="/images/room-sample.jpg"
          width={100}
          height={100}
          className="rounded-xl w-full h-full object-cover"
          alt="Picture of the room"
        />
      </div>

      {/* info */}
      <div className="flex flex-col gap-2 text-red ">
        <div className="text-4xl">{room.name}</div>
        <div className="text-sm">{room.building}</div>
        <ul className="flex flex-col gap-2">
          <li className="flex items-center gap-2">
            <GrGroup className="" size={24} />
            <span className="">{room.capacity} people</span>
          </li>
          <div className="flex gap-3">
            {room.has.length > 0 ? (
              <ul>
                {room.has.map((util, i) => {
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
            {room.missing.length > 0 ? (
              <ul>
                {room.missing.map((util, i) => {
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
        </ul>
      </div>

      {/* match */}
      <div className="flex flex-col h-full border-red border-4 rounded-xl p-4 gap-4 ml-auto">
        <div className="h-full flex justify-center items-center">
          <ProgressCircle percentFilled={Math.round(room.score * 100)} />
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
