"use client";

import { useState } from "react";


export default function FilterButtons({ items }: { items: { key: number, name: string }[] }) {
  const [selectedButtons, setSelectedButtons] = useState(new Set<number>([0]));

  // note: need to create a new set to trigger rerender for any changes
  const handleClick = (key: number) => {
    // if "any" is selected, deselect everything else
    if (key === 0) {
      setSelectedButtons(new Set([0]));
      return;
    }

    // already selected, deselect
    if (selectedButtons.has(key)) {
      const updatedButtons = new Set(selectedButtons);
      updatedButtons.delete(key);
      // if everything is unselected, select any
      if (updatedButtons.size === 0) {
        setSelectedButtons(new Set([0]));
      }
      // otherwise just unselect
      else {
        setSelectedButtons(updatedButtons);
      }
    }
    // not selected, select 
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

// interface FilterButtons {
//   name: string | undefined;
// }

// export default function FilterButtons({ name }: FilterButtons) {
//   const [isSelected, setIsSelected] = useState(false);

//   const handleClick = () => {
//     setIsSelected(!isSelected);
//   };

//   return (
// <button
//   onClick={handleClick}
//   className={`${
//     isSelected || name == "Any"
//       ? "text-white bg-red"
//       : "text-red outline outline-3"
//   }  rounded-md px-4 py-2 m-2`}
// >
//   <span>{name}</span>
// </button>
//   );
// }
