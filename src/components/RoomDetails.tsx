"use client";
import React from "react";
import Popup from "reactjs-popup";
import { GrGroup } from "react-icons/gr";
import { FaXmark } from "react-icons/fa6";
import { utilityToIcon } from "@/sections/FiltersPage";
import { Room } from "./RoomCard";
import Image from "next/image";

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
        {/* darken background */}
        <Popup open={open} closeOnDocumentClick onClose={closeModal} overlayStyle={{ background: 'rgba(0,0,0,0.2)' }} >
          <div className="w-[80vw] h-[80vh] bg-white border-4 border-red flex flex-col items-center">
            <button
              className="cursor-pointer absolute block p-1 -right-4 -top-4 bg-white border-4 border-red rounded-full"
              onClick={closeModal}
            >
              {/* &times; */}
              <FaXmark size={24} />
            </button>
            <div className="h-full w-full flex flex-col">
              <div className="text-center text-2xl text-red pt-2">{room.building} {room.name} Floor Plan</div>
              <div className="w-full h-full relative">
                <Image className="object-contain p-4" src={`/images/floor-plans/${room.image}`} layout="fill" alt="Floor plan" />
              </div>
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
