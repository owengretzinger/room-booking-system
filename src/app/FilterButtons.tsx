"use client";
import React from "react";

interface FilterButtons {
  name: string | undefined;
}

export default function FilterButtons({ name }: FilterButtons) {
  const [isSelected, setIsSelected] = React.useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  return isSelected ? (
    <button
      onClick={handleClick}
      className="w-[7rem] h-[3rem] text-white bg-red-925 rounded-md"
    >
      <span>{name}</span>
    </button>
  ) : (
    <button
      onClick={handleClick}
      className="w-[7rem] h-[3rem] text-red-925 outline outline-3 rounded-md"
    >
      <span>{name}</span>
    </button>
  );
}
