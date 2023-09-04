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
        <h1>Make a production build</h1>
        <Link href="/product">Product</Link>
        <Link style={{ marginLeft: '20px' }} href="/seller">
          Seller
        </Link>
      </main>
    </>
  );
}
