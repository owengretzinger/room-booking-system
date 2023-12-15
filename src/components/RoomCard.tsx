import { PiPlugBold, PiTelevision } from "react-icons/pi";
import { GrGroup } from "react-icons/gr";
import Image from "next/image";


export default function RoomCard() {

  return (
    <div className="flex h-[250px] p-4 border-red border-4 rounded-xl gap-4 w-full md:w-[750px]">
      {/* image */}
      <div className="aspect-square bg-gray-400 rounded-xl hidden sm:block">
        <Image src="/images/big-bingo.png" width={100} height={100} className="rounded-xl w-full h-full object-cover" alt="Picture of the room" />

      </div>

      {/* info */}
      <div className="flex flex-col gap-4 text-red ">
        <div className="text-5xl">
          BSB 124
        </div>
        <ul className="flex flex-col gap-2">
          <li className="flex items-center gap-2">
            <GrGroup className="" size={24} />
            <span className="">
              8 people
            </span>
          </li>
          <li className="flex items-center gap-2">
            <PiPlugBold className="" size={24} />
            <span className="">
              4 outlets
            </span>
          </li>
          <li className="flex items-center gap-2">
            <PiTelevision className="" size={24} />
            <span className="">
              TV
            </span>
          </li>
        </ul>

      </div>

      {/* match */}
      <div className="flex flex-col h-full border-red border-4 rounded-xl p-4 gap-4 ml-auto">
        <div className="h-full flex justify-center items-center">
          <ProgressCircle percentFilled={70} />
        </div>
        <a href="#" className="w-full text-white bg-amber-350 rounded-xl px-4 py-2 text-center">
          Book Now
        </a>
      </div>
    </div>
  )

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
        {percentFilled}%<br />Match
      </div>
    </div>
  )
}