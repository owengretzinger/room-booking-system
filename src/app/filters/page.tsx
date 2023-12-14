import Header from '../Header';

export default function Home() {
  return (
    <>
      <Header back={'datetime'} next={'rooms'} state_progress={1}></Header>
      <main className="flex min-h-screen flex-col items-center justify-between"></main>
    </>
  );
}