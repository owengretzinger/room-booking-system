"use client";
import React from "react";

interface RoomDetails {
  isLoggedIn: boolean;
  setCurrentPage: Function;
}

export default function RoomDetails({
  isLoggedIn,
  setCurrentPage,
}: RoomDetails) {
  return (
    <div className="flex flex-col items-start">
      {/* Title */}
      <h1 className="text-2xl font-bold text-red mb-2">Room Details</h1>
      {/* Boooking Info */}
      <div className="flex flex-col items-start border-4 border-red px-10 py-5 rounded-lg">
        <h2 className="text-xl font-bold my-2">Gerald Hatch Centre H204A</h2>
        <p className="text-lg">Date: December 14, 2023</p>
        <p className="text-lg">Time: 12:30am - 3:30pm</p>
        <div className="flex flex-row mt-5">
          <img src="person.svg" />
          <p className="text-lg text-red algin-middle leading-[3rem]">
            5-10 people
          </p>
        </div>
        <div className="flex flex-row">
          <img src="power.svg" />
          <p className="text-lg text-red algin-middle leading-[3rem]">
            4 outlets
          </p>
        </div>
        <div className="flex flex-row">
          <img src="camera.svg" />
          <p className="text-lg text-red algin-middle leading-[3rem]">
            Projector
          </p>
        </div>
      </div>
      {/* Confirmation Button */}
      <button
        disabled={!isLoggedIn}
        className={`${
          isLoggedIn ? "bg-amber-350" : "bg-slate-500"
        } text-white rounded-lg w-full py-2 my-5`}
        onClick={() => {
          setCurrentPage("done");
        }}
      >
        Confirm
      </button>
    </div>
  );
}
