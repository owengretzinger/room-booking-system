import Header from '../Header';

export default function Home() {
  return (
    <>
      <Header back={'rooms'} next={undefined} state_progress={3}></Header>
      <main className="flex min-h-screen flex-col items-center justify-between"></main>
    </>
  );
}
