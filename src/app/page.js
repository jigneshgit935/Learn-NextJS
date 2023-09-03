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
        <h1>Fetch Data with API in Client Component</h1>
      </main>

      <section
        style={{
          textAlign: 'center',
          marginTop: '20px',
          fontSize: '30px',
        }}
      >
        <Link href="/productlist">Go to product page</Link>
      </section>
    </>
  );
}
