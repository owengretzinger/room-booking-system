import { GrGroup, GrPlug } from 'react-icons/gr';
import { FaRegBuilding } from "react-icons/fa";
import FilterButtons from '../components/FilterButtons';
import Image from 'next/image';

// Capacity Options
const capacity = ['Any', '1-4', '5-9', '10-20', '>20'];

// Utilities Options
const utilities = [
  'Projector',
  'Whiteboard',
  'Blackboard',
  'Computer',
];
// Building Options
const building = [
  'Any',
  'Mills Memorial Library',
  'Thode Library',
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
            <div className="flex gap-1 items-center">
              <GrGroup className="text-red" size={30} />
              <h1 className="text-2xl font-bold text-red algin-middle">
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
            <div className="flex gap-1 items-center">
              <GrPlug className="text-red" size={30} />
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
            <div className="flex gap-1 items-center">
              <FaRegBuilding  className="text-red" size={30} />
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
