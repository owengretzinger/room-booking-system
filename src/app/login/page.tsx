import Header from '../Header';

export default function Login() {
  return (
    <>
      <Header back={'rooms'} next={'confirm'} state_progress={3}></Header>
      <main className="flex min-h-screen flex-col items-center justify-between"></main>
    </>
  );
}
