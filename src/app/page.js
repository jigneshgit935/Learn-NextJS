import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: '100',
  subsets: ['latin'],
  display: 'swap',
});
export default function Home() {
  return (
    <>
      <main
        style={{
          textAlign: 'center',
          padding: '10px 0px',
          border: '1px solid black',
        }}
      >
        <h1 className={roboto.className}>Font Optimization</h1>
      </main>
    </>
  );
}
