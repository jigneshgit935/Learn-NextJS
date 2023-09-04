import Link from 'next/link';

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
        <h1>Static Site Generation</h1>
        <Link href="/userlist">UserList</Link>
      </main>
    </>
  );
}
