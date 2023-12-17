import FilterButtons from '../components/FilterButtons';
import Image from 'next/image';

// Capacity Options
const capacity = ['Any', '1-4', '5-9', '10-20', '>20'];

// Utilities Options
const utilities = [
  'Any',
  'Projector',
  'Whiteboard',
  'Blackboard',
  'Windows',
  'Computer',
];
// Building Options
const building = [
  'Any',
  'Mills',
  'Thode',
  'Gerald Hatch Centre',
  'Health Sciences Library',
];

interface FiltersPage {
  filters: {
    capacity: Set<string>;
    utilities: Set<string>;
    buildings: Set<string>;
  };
  setFilters: Function;
}

export default function FiltersPage({ filters, setFilters }: FiltersPage) {
  return (
    <>
      <main className="flex justify-center">
        <div className="flex flex-col items-start max-w-[500px] gap-5">
          {/* Capacity*/}
          <div className="flex flex-col items-start">
            <div className="flex flex-row">
              <Image
                src="digital_wellbeing.svg"
                alt="capacity icon"
                width={40}
                height={40}
              />
              <h1 className="text-2xl font-bold text-red algin-middle leading-[3rem]">
                Capacity
              </h1>
            </div>
            <div className="flex flex-row justify-start flex-wrap">
              {/* {displayCapacity} */}
              <FilterButtons
                filters={filters.capacity}
                setFilters={(newCapacities: Set<string>) =>
                  setFilters({ ...filters, capacity: newCapacities })
                }
                items={capacity}
              />
            </div>
          </div>

          {/* Utilities */}
          <div className="flex flex-col items-start">
            <div className="flex flex-row">
              <Image src="power.svg" alt="outlet icon" width={40} height={40} />
              <h1 className="text-2xl font-bold text-red algin-middle leading-[3rem]">
                Utilities
              </h1>
            </div>
            <div className="flex flex-row justify-start flex-wrap">
              {/* {displayUtilities} */}
              <FilterButtons
                filters={filters.utilities}
                setFilters={(newUtilities: Set<string>) =>
                  setFilters({ ...filters, utilities: newUtilities })
                }
                items={utilities}
              />
            </div>
          </div>

          {/* Building */}
          <div className="flex flex-col items-start">
            <div className="flex flex-row">
              <Image
                src="account_balance.svg"
                alt="building icon"
                width={40}
                height={40}
              />
              <h1 className="text-2xl font-bold text-red algin-middle leading-[3rem]">
                Building
              </h1>
            </div>
            <div className="flex flex-row justify-start flex-wrap">
              {/* {displayBuilding} */}
              <FilterButtons
                filters={filters.buildings}
                setFilters={(newBuildings: Set<string>) =>
                  setFilters({ ...filters, buildings: newBuildings })
                }
                items={building}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
