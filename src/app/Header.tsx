import './globals.css'

const states = [
  'Select Date & Time',
  'Select Filters',
  'Select Room',
  'Confirm Booking',
];

export default function Header({ back, next, state_progress }) {
  return (
    <header>
      <div>
        {back ? <button>Back</button> : null}
        <h1>McMaster Room Booking</h1>
        {next ? <button>Next</button> : null}
      </div>
      <nav>
        {state_progress ? states.map((state, i) => (
          <a key={i}>{state}</a>
        )) : null}
      </nav>
    </header>
  );
}
