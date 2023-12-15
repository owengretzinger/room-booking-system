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

  return (
    <button
      onClick={handleClick}
      className={`${
        isSelected || name == "Any"
          ? "text-white bg-red"
          : "text-red outline outline-3"
      }  rounded-md px-4 py-2 m-2`}
    >
      <span>{name}</span>
    </button>
  );
}
