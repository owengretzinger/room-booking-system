"use client";
import React from "react";
import Popup from "reactjs-popup";

interface RoomDetails {
  isLoggedIn: boolean;
  setCurrentPage: Function;
  isConfirmed: boolean;
}

export default function RoomDetails({
  isLoggedIn,
  setCurrentPage,
  isConfirmed,
}: RoomDetails) {
  const [open, setOpen] = React.useState(false);
  const closeModal = () => setOpen(false);
  return (
    <div className="flex flex-col items-start">
      {/* Title */}
      <h1 className="text-2xl font-bold text-red mb-2">Room Details</h1>
      {/* Boooking Info */}
      <div className="flex flex-col items-start border-4 border-red px-10 py-5 rounded-lg">
        <h2 className="text-xl font-bold my-2">Gerald Hatch Centre H204A</h2>
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
          isLoggedIn
            ? "bg-amber-350"
            : "bg-yellow opacity-40 cursor-not-allowed"
        } text-white rounded-lg w-full py-2 my-5`}
        onClick={() => {
          setCurrentPage("done");
        }}
      >
        {isConfirmed ? "Cancel Reservation" : "Confirm"}
      </button>
    </div>
  );
}
