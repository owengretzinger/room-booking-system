import Header from "../Header";

export default function Rooms() {
  return (
    <>
      <Header back={"filters"} next={"confirm"} state_progress={2}></Header>
      <main className="flex min-h-screen flex-col items-center justify-between"></main>
    </>
  );
}
