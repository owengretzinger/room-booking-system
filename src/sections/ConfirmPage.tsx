"use client";
import React, { useState } from "react";

import RoomDetails from "@/components/RoomDetails";
import { Room } from "@/components/RoomCard";
import { BookedRoom } from "./CancelPage";

let counter = 0;

interface ConfirmPage {
  room: Room;
  date: string;
  startTime: string;
  endTime: string;
  setCurrentPage: Function;
  isLoggedIn: boolean;
  setIsLoggedIn: Function;
  bookedRooms: BookedRoom[];
  setBookedRooms: Function;
}

export default function ConfirmPage({
  room,
  date,
  startTime,
  endTime,
  setCurrentPage,
  isLoggedIn,
  setIsLoggedIn,
  bookedRooms,
  setBookedRooms,
}: ConfirmPage) {
  const [email, setEmail] = useState<string[]>([]);
  const [prototypeAcknowledged, setPrototypeAcknowledged] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const values = [...email];
    values[index] = e.target.value;
    setEmail(values);
  };

  const handleDeleteField = (
    e: React.MouseEvent<HTMLButtonElement>,
    index: number
  ) => {
    const values = [...email];
    values.splice(index, 1);
    setEmail(values);
    counter--;
  };

  return (
    <>
      <main className={`flex flex-col md:flex-row gap-10 md:gap-0 ${isLoggedIn ? "" : "items-center"} justify-center md:mx-20`}>
        <div className={`flex flex-col ${isLoggedIn ? "items-start" : "items-center md:items-start"} w-full md:w-1/2 md:mr-5`}>
          {isLoggedIn ? (
            <>
              <h1 className="text-2xl font-bold text-red">
                Email Confirmation will be sent to:
              </h1>
              <h1 className="text-2xl font-bold text-slate-500">
                YourMacID@mcmaster.ca
              </h1>
              <div className="max-w-[350px]">
                <h1 className="text-2xl font-bold text-red mt-10">
                  Optionally add group member emails to send them confirmation & directions:
                </h1>
                <div className="flex flex-col items-start w-full">
                  {email.map((email, index) => (
                    <div key={index} className="flex flex-row flex-nowrap w-full">
                      <input
                        className="text-red rounded-md outline-3 outline outline-red w-full my-2 py-1 px-2 focus:outline-amber-350"
                        type="email"
                        placeholder="MacID@mcmaster.ca"
                        value={email}
                        onChange={(e) => handleChange(e, index)}
                      />
                      <button
                        className="text-red rounded-md outline-3 outline my-2 ml-3 py-1 px-2"
                        onClick={(e) => handleDeleteField(e, index)}
                      >
                        X
                      </button>
                    </div>
                  ))}
                  {counter < 5 ? (
                    <button
                      className="text-red rounded-md outline-3 outline-dashed w-full my-2 py-1 px-2"
                      onClick={() => {
                        setEmail([...email, ""]);
                        counter++;
                      }}
                    >
                      Add Email
                    </button>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </>
          ) : (
            <button
              className="bg-yellow text-white rounded-lg w-[350px] md:w-[80%] py-2 my-5"
              onClick={() => setIsLoggedIn(true)}
            >
              Log In With Avenue
            </button>
          )}
        </div>
        <div className="flex flex-col items-start md:w-1/2">
          <h1 className="text-2xl font-bold text-red mb-2">
            Room Details
          </h1>
          <RoomDetails
            room={room}
            date={date}
            startTime={startTime}
            endTime={endTime}
          />
          {/* Prototype disclaimer checkbox */}
          <label className="flex items-start gap-3 mt-4 max-w-[600px]">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4"
              checked={prototypeAcknowledged}
              onChange={(e) => setPrototypeAcknowledged(e.target.checked)}
            />
            <span className="text-sm text-slate-600">
              I understand that this is a prototype and does not actually work
            </span>
          </label>
          {/* Confirmation Button */}
          <button
            disabled={!isLoggedIn || !prototypeAcknowledged}
            className={`${isLoggedIn && prototypeAcknowledged
              ? ""
              : "opacity-40 cursor-not-allowed"
              } ${(isLoggedIn && prototypeAcknowledged) ? "bg-yellow" : "bg-red"}
          text-white rounded-lg w-[350px] py-2 my-5`}
            onClick={() => {
              setCurrentPage("done");
              setBookedRooms([...bookedRooms, {
                room: room,
                date: date,
                startTime: startTime,
                endTime: endTime,
                bookingId: Math.max(...bookedRooms.map((bookedRoom: BookedRoom) => bookedRoom.bookingId), 0) + 1,
                bookingCancelled: false,
              }]);
            }}
          >
            Confirm
          </button>
        </div>
      </main>
    </>
  );
}
