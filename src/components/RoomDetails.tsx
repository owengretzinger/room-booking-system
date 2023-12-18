"use client";
import React from "react";
import Popup from "reactjs-popup";
import { GrGroup } from "react-icons/gr";
import { CiCircleCheck, CiCircleRemove } from "react-icons/ci";

interface RoomDetails {
  room: {
    score: number;
    capacityMatches: boolean;
    matchingUtilities: string[];
    missingUtilities: string[];
    buildingMatches: boolean;
    name: string;
    capacity: number;
    utilities: Set<string>;
    building: string;
  };
  date: string;
  startTime: string;
  endTime: string;
  isLoggedIn: boolean;
  setCurrentPage: Function;
  isConfirmed: boolean;
  isCancelPage: boolean;
  setSelectedRoom: Function;
}

export default function RoomDetails({
  room,
  date,
  startTime,
  endTime,
  isLoggedIn,
  setCurrentPage,
  isConfirmed,
  isCancelPage,
  setSelectedRoom,
}: RoomDetails) {
  const [open, setOpen] = React.useState(false);
  const closeModal = () => setOpen(false);

  return (
    <div className="flex flex-col items-start">
      {/* Title */}
      <h1 className="text-2xl font-bold text-red mb-2">
        {isCancelPage ? "" : "Room Details"}
      </h1>
      {/* Boooking Info */}
      <div className="flex flex-col gap-1 items-start border-4 border-red px-10 py-5 rounded-lg">
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
        <ul className="flex flex-col gap-2">
          <li className="flex items-center gap-2">
            <GrGroup className="" size={24} />
            <span className="">{room.capacity} people</span>
          </li>
          {room.matchingUtilities.length > 0
            ? room.matchingUtilities.map((util, i) => {
              return (
                <li
                  className="flex items-center gap-2 text-green-700"
                  key={i}
                >
                  <CiCircleCheck className="" size={24} />
                  <span className="">{util}</span>
                </li>
              );
            })
            : null}
          {room.missingUtilities.length > 0
            ? room.missingUtilities.map((util, i) => {
              return (
                <li
                  className="flex items-center gap-2 text-rose-700"
                  key={i}
                >
                  <CiCircleRemove className="" size={24} />
                  <span className="">{util}</span>
                </li>
              );
            })
            : null}
        </ul>
      </div>
      {/* Confirmation Button */}
      {room.score != 0 ? (
        <button
          disabled={!isLoggedIn}
          className={`${isLoggedIn
            ? ""
            : "opacity-40 cursor-not-allowed"
            } ${isConfirmed || !isLoggedIn ? "bg-red" : "bg-yellow"}
          text-white rounded-lg w-full py-2 my-5`}
          onClick={() => {
            isConfirmed
              ? setSelectedRoom({
                score: 0, // To show cancelled
                has: [],
                missing: [],
                matchingCapacity: true,
                name: "",
                capacity: 0,
                utilities: new Set<string>([]),
                building: "",
              })
              : setCurrentPage("done");
          }}
        >
          {isConfirmed ? "Cancel Reservation" : "Confirm"}
        </button>
      ) : (
        <></>
      )}
    </div>
  );
}
