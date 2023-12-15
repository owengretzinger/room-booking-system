import FilterButtons from "../FilterButtons";
import Header from "../Header";

export default function Filters() {
  // Capacity Options
  const capacity = [
    { key: 0, name: "Any" },
    { key: 1, name: "1-4" },
    { key: 2, name: "5-9" },
    { key: 3, name: "10-14" },
    { key: 4, name: ">15" },
  ];
  // Utilities Options
  const utilities = [
    { key: 0, name: "Any" },
    { key: 1, name: "Wifi" },
    { key: 2, name: "Projector" },
    { key: 3, name: "Whiteboard" },
    { key: 4, name: "TV" },
    { key: 5, name: "Outlets" },
    { key: 6, name: "Computer" },
    { key: 7, name: "Blackboard" },
    { key: 8, name: "Windows" },
    { key: 9, name: "Markers" },
  ];
  // Building Options
  const building = [
    { key: 0, name: "Any" },
    { key: 0, name: "Mills" },
    { key: 0, name: "Thode" },
    { key: 0, name: "Gerald Hatch Centre" },
    { key: 0, name: "Health Sciences Library" },
  ];

  // Display Capacity
  const displayCapacity = capacity.map((item) => (
    <div key={item.key}>
      <FilterButtons name={item.name} />
    </div>
  ));
  // Display Utilities
  const displayUtilities = utilities.map((item) => (
    <div key={item.key}>
      <FilterButtons name={item.name} />
    </div>
  ));
  // Display Building
  const displayBuilding = building.map((item) => (
    <div key={item.key}>
      <FilterButtons name={item.name} />
    </div>
  ));

  return (
    <>
      <Header back={"datetime"} next={"rooms"} state_progress={1}></Header>
      <main className="flex justify-center">
        <div className="flex flex-col items-start px-40 py-16">
          {/* Capacity*/}
          <div className="flex flex-col items-start my-5">
            <div className="flex flex-row">
              <img src="digital_wellbeing.svg" />
              <h1 className="text-2xl font-bold text-red-925 algin-middle leading-[3rem]">
                Capacity
              </h1>
            </div>
            <div className="flex flex-row justify-start flex-wrap">
              {displayCapacity}
            </div>
          </div>

          {/* Utilities */}
          <div className="flex flex-col items-start my-5">
            <div className="flex flex-row">
              <img src="power.svg" />
              <h1 className="text-2xl font-bold text-red-925 algin-middle leading-[3rem]">
                Utilities
              </h1>
            </div>
            <div className="flex flex-row justify-start flex-wrap">
              {displayUtilities}
            </div>
          </div>

          {/* Building */}
          <div className="flex flex-col items-start my-5">
            <div className="flex flex-row">
              <img src="account_balance.svg" />
              <h1 className="text-2xl font-bold text-red-925 algin-middle leading-[3rem]">
                Building
              </h1>
            </div>
            <div className="flex flex-row justify-start flex-wrap">
              {displayBuilding}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
