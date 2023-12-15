"use client";
import React from "react";

import RoomDetails from "@/components/RoomDetails";

let counter = 0;

export default function ConfirmPage() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);
  const [email, setEmail] = React.useState<string[]>([]);

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
      <main className="flex flex-row items-center justify-center mx-20">
        <div className="flex flex-col items-start w-1/2 mr-5">
          {isLoggedIn ? (
            <>
              <h1 className="text-2xl font-bold text-red-925">
                Email Confirmation will be sent to:
              </h1>
              <h1 className="text-2xl font-bold text-slate-500">
                doej@mcmaster.ca
              </h1>
              <h1 className="text-2xl font-bold text-red-925 mt-10">
                Optionally add group member emails to send them confirmation &
                directions
              </h1>
              <div className="flex flex-col items-start w-full">
                {email.map((email, index) => (
                  <div key={index} className="flex flex-row flex-nowrap">
                    <input
                      className="text-red-925 rounded-md outline-3 outline outline-red-925 w-72 my-2 py-1 px-2 focus:outline-amber-350"
                      type="email"
                      placeholder="MacID@mcmaster.ca"
                      value={email}
                      onChange={(e) => handleChange(e, index)}
                    />
                    <button
                      className="text-red-925 rounded-md outline-3 outline my-2 mx-3 py-1 px-2"
                      onClick={(e) => handleDeleteField(e, index)}
                    >
                      X
                    </button>
                  </div>
                ))}
                {counter < 5 ? (
                  <button
                    className="text-red-925 rounded-md outline-3 outline-dashed w-[80%] my-2 py-1 px-2"
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
            </>
          ) : (
            <button
              className="bg-red-925 text-white rounded-lg w-[80%] px-10 py-4 my-5"
              onClick={() => setIsLoggedIn(true)}
            >
              Log In With Avenue
            </button>
          )}
        </div>
        <RoomDetails isLoggedIn={isLoggedIn} />
      </main>
    </>
  );
}