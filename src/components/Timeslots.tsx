"use client";

import { useState } from "react";

export default function Timeslots({ items }: { items: { key: number, name: string }[] }) {
  const [selectedButtons, setSelectedButtons] = useState(new Set<number>([0]));

  const handleClick = (key: number) => {
    if (selectedButtons.has(key)) {
      const updatedButtons = new Set(selectedButtons);
      updatedButtons.delete(key);
      if (updatedButtons.size === 0) {
        setSelectedButtons(new Set());
      }
      else {
        setSelectedButtons(updatedButtons);
      }
    }
    else {
      const updatedButtons = new Set(selectedButtons);
      updatedButtons.add(key);
      if (updatedButtons.has(0)) updatedButtons.delete(0);
      setSelectedButtons(updatedButtons);
    }
  };
  
  return (
    <>
      {/* Capacity*/}
      {items.map((item) => (item.name !== "" &&
        <button
          key={item.key}
          onClick={() => handleClick(item.key)}
          className={`${selectedButtons.has(item.key)
            ? "text-white bg-red"
            : "text-red outline outline-3"
            }  rounded-md px-4 py-2 m-2`}
        >
          <span>{item.name}</span>
        </button>
      ))}
    </>
  )
}
