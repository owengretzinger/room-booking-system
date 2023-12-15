import Header from "../Header";
import RoomDetails from "../RoomDetails";

export default function Confirm() {
  return (
    <>
      <Header back={"rooms"} next={undefined} state_progress={3}></Header>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <RoomDetails />
      </main>
    </>
  );
}
