import FilterButtons from '../components/FilterButtons';
import Image from 'next/image';

export default function FiltersPage() {
  // Capacity Options
  const capacity = [
    { key: 0, name: 'Any' },
    { key: 1, name: '1-4' },
    { key: 2, name: '5-9' },
    { key: 3, name: '10-20' },
    { key: 4, name: '>20' },
  ];
  // Utilities Options
  const utilities = [
    { key: 0, name: '' },
    { key: 1, name: 'Projector' },
    { key: 2, name: 'Whiteboard' },
    { key: 3, name: 'Blackboard' },
    { key: 4, name: 'Windows' },
    { key: 5, name: 'Computer' },
  ];
  // Building Options
  const building = [
    { key: 0, name: 'Any' },
    { key: 1, name: 'Mills' },
    { key: 2, name: 'Thode' },
    { key: 3, name: 'Gerald Hatch Centre' },
    { key: 4, name: 'Health Sciences Library' },
  ];
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
              <FilterButtons items={capacity} />
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
              <FilterButtons items={utilities} />
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
              <FilterButtons items={building} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
