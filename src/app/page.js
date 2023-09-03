'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const navigate = (routeName) => {
    router.push(routeName);
  };
  return (
    <main>
      <h2>Basic Routing</h2>
      <br />
      {/* Linking */}
      <Link href="/login">Go to login page</Link>
      <br />
      <br />
      <Link href="/about">Go to about page</Link>
      {/* Linking */}
      <br />
      {/* Navigation */}
      <div style={{ marginTop: '30px' }}>
        <button
          style={{
            padding: '10px 30px',
            background: 'black',
            marginLeft: '2px',

            color: '#fff',
            fontSize: '18px',
            outline: 'none',
            border: 'none',
            borderRadius: '2px',
            cursor: 'pointer',
          }}
          onClick={() => navigate('/login')}
        >
          Go to login page
        </button>

        <button
          style={{
            cursor: 'pointer',
            padding: '10px 30px',
            marginLeft: '20px',
            background: 'black',
            color: '#fff',
            fontSize: '18px',
            outline: 'none',
            border: 'none',
            borderRadius: '2px',
          }}
          onClick={() => navigate('/about')}
        >
          Go to about page
        </button>
      </div>
    </main>
  );
}
