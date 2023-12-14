import Header from '../Header';

export default function Home() {
  return (
    <>
      <Header back={'filters'} next={'login'} state_progress={2}></Header>
      <main className="flex min-h-screen flex-col items-center justify-between"></main>
    </>
  );
}
