"use client";
import React from "react";
import Popup from "reactjs-popup";
import { GrGroup } from "react-icons/gr";
import { CiCircleCheck, CiCircleRemove } from "react-icons/ci";
import { BookedRoom } from "@/sections/CancelPage";
import { set } from "date-fns";
import { utilityToIcon } from "@/sections/FiltersPage";
import { Room } from "./RoomCard";

interface RoomDetails {
  room: Room;
  date: string;
  startTime: string;
  endTime: string;
  cancelButton?: JSX.Element;
}

export default function RoomDetails({
  room,
  date,
  startTime,
  endTime,
  cancelButton,
}: RoomDetails) {
  const [open, setOpen] = React.useState(false);
  const closeModal = () => setOpen(false);

  return (
    <>
      <div className="flex flex-col gap-1 items-start border-4 border-red p-5 rounded-lg w-[350px] h-full">
        <h2 className="text-xl font-bold">
          {room.building} - {room.name}
        </h2>
        <button
          className="text-red underline"
          onClick={() => setOpen((o) => !o)}
        >
          {" "}
          Get Directions{" "}
        </button>
        <Popup open={open} closeOnDocumentClick onClose={closeModal}>
          <div className="w-[80vw] h-[80vh] bg-white border-4 border-red flex flex-col items-center">
            <button
              className="cursor-pointer absolute block px-[5px] py-[2px] right-[-10px] top-[-10px] text-[24px] leading-[20px] bg-white border-4 border-red rounded-[18px]"
              onClick={closeModal}
            >
              &times;
            </button>
            <div className="flex w-[95%] text-red text-2xl justify-center py-5 border-b-2 border-red">
              {" "}
              Get Directions{" "}
            </div>
            <div className="flex items-center justify-center w-[95%] h-full border-dashed border-2 my-6 p-5 border-yellow text-yellow text-xl">
              Embedded Directional Video Goes Here
            </div>
          </div>
        </Popup>
        <p className="text-lg">Date: {date}</p>
        <p className="text-lg">
          Time: {startTime} - {endTime}
        </p>
        <ul className="flex flex-col gap-1">
          <li className="flex items-center gap-2">
            <GrGroup className="" size={24} />
            <span className="">{room.capacity} people</span>
          </li>
          {
            Array.from(room.utilities).map((util, i) => {
              return (
                <li
                  className="flex items-center gap-2"
                  key={i}
                >
                  {utilityToIcon[util]}
                  <span className="">{util}</span>
                </li>
              );
            })
          }
        </ul>
        {cancelButton &&
          <div className="w-full pt-5 mt-auto">
            {cancelButton}
          </div>
        }
      </div>
    </>
  );
}
