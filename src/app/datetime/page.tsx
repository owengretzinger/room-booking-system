import Header from '../Header';

export default function Home() {
  return (
    <>
      <Header back={'/'} next={'filters'} state_progress={0}></Header>
      <main className="flex min-h-screen flex-col items-center justify-between"></main>
    </>
  );
}
