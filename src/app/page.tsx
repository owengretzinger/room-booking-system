"use client";

import Header from "../components/Header";
import CancelPage from "../sections/CancelPage";
import ConfirmPage from "../sections/ConfirmPage";
import DonePage from "../sections/DonePage";
import DatetimePage from "../sections/DatetimePage";
import FiltersPage from "../sections/FiltersPage";
import MainPage from "../sections/MainPage";
import RoomsPage from "../sections/RoomsPage";

import { format } from "date-fns";

import { useState } from "react";

export default function Home() {
  const [currentPage, setCurrentPage] = useState("main");
  const [nextButtonDisabled, setNextButtonDisabled] = useState(false);
  const [selectedDay, setSelectedDay] = useState<Date>(new Date());
  const [selectedSlots, setSelectedSlots] = useState<Set<number>>(
    new Set<number>([])
  );
  const [filters, setFilters] = useState({
    capacity: new Set<string>(["Any"]),
    utilities: new Set<string>(["Any"]),
    buildings: new Set<string>(["Any"]),
  });
  const [selectedRoom, setSelectedRoom] = useState<{
    score: number;
    has: string[];
    missing: string[];
    matchingCapacity: boolean;
    name: string;
    capacity: number;
    utilities: Set<string>;
    building: string;
  }>({
    score: 0,
    has: [],
    missing: [],
    matchingCapacity: true,
    name: "",
    capacity: 0,
    utilities: new Set<string>([]),
    building: "",
  });

  let next = undefined,
    back = undefined,
    stage = undefined,
    renderedPage = null;

  switch (currentPage) {
    case "main":
      renderedPage = <MainPage setCurrentPage={setCurrentPage}></MainPage>;
      break;
    case "datetime":
      back = "main";
      next = "filters";
      stage = 0;
      renderedPage = (
        <DatetimePage
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
          selectedSlots={selectedSlots}
          setSelectedSlots={setSelectedSlots}
          nextButtonDisabled={nextButtonDisabled}
          setNextButtonDisabled={setNextButtonDisabled}
        ></DatetimePage>
      );
      break;
    case "filters":
      back = "datetime";
      next = "rooms";
      stage = 1;
      renderedPage = (
        <FiltersPage filters={filters} setFilters={setFilters}></FiltersPage>
      );
      break;
    case "rooms":
      back = "filters";
      stage = 2;
      renderedPage = (
        <RoomsPage
          filters={filters}
          setSelectedRoom={setSelectedRoom}
          setCurrentPage={setCurrentPage}
        ></RoomsPage>
      );
      break;
    case "confirm":
      back = "rooms";
      stage = 3;
      renderedPage = (
        <ConfirmPage
          room={selectedRoom}
          date={format(selectedDay, "EEEE, LLLL d, yyyy")}
          startTime={indexToTime(Math.min(...Array.from(selectedSlots)) - 1)}
          endTime={indexToTime(Math.max(...Array.from(selectedSlots)))}
          setCurrentPage={setCurrentPage}
        ></ConfirmPage>
      );
      break;
    case "done":
      renderedPage = (
        <DonePage
          room={selectedRoom}
          date={format(selectedDay, "EEEE, LLLL d, yyyy")}
          startTime={indexToTime(Math.min(...Array.from(selectedSlots)) - 1)}
          endTime={indexToTime(Math.max(...Array.from(selectedSlots)))}
          setCurrentPage={setCurrentPage}
          setSelectedRoom={setSelectedRoom}
        ></DonePage>
      );
      break;
    case "cancel":
      back = "main";
      renderedPage = (
        <CancelPage
          room={selectedRoom}
          date={format(selectedDay, "EEEE, LLLL d, yyyy")}
          startTime={indexToTime(Math.min(...Array.from(selectedSlots)) - 1)}
          endTime={indexToTime(Math.max(...Array.from(selectedSlots)))}
          setCurrentPage={setCurrentPage}
          setSelectedRoom={setSelectedRoom}
        ></CancelPage>
      );
      break;
    default:
      break;
  }

  const headerProps = {
    back,
    next,
    stage,
    setCurrentPage,
    reset: () => {
      setSelectedDay(new Date());
      setSelectedSlots(new Set<number>([]));
      setFilters({
        capacity: new Set<string>(["Any"]),
        utilities: new Set<string>(["Any"]),
        buildings: new Set<string>(["Any"]),
      });
    },
    nextButtonDisabled,
    setNextButtonDisabled,
  };

  return (
    <>
      {/* <TimeSelector /> */}
      {currentPage === "main" ? (
        renderedPage
      ) : (
        <>
          <Header {...headerProps}></Header>
          <div className="pt-52 relative">{renderedPage}</div>
        </>
      )}
    </>
  );
}

function indexToTime(i: number) {
  return `${(Math.floor(i / 2 + 7) % 12) + 1}:${i % 2 == 0 ? "0" : "3"}0${
    i / 2 + 8 <= 11 ? "AM" : "PM"
  }`;
}
