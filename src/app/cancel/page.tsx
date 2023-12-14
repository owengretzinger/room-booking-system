import Header from '../Header';

export default function Cancel() {
  return (
    <>
      <Header back={'/'} next={undefined} state_progress={undefined}></Header>
      <main className="flex min-h-screen flex-col items-center justify-between"></main>
    </>
  );
}
