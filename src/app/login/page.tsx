import Header from '../Header';

interface Login {
  origin: string;
}

export default function Login({ origin }: Login) {
  return (
    <>
      {origin === 'rooms' ? (
        <Header back={'rooms'} next={'confirm'} state_progress={3}></Header>
      ) : origin === '/' ? (
        <Header back={'/'} next={'cancel'} state_progress={3}></Header>
      ) : null}
      <main className="flex min-h-screen flex-col items-center justify-between"></main>
    </>
  );
}
