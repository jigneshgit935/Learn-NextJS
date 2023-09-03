'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const About = () => {
  const router = useRouter();
  return (
    <div>
      <h1>About Page</h1>
      <br />
      <Link href="/">Go to home page</Link>

      <br />
      <br />
      <button
        style={{
          cursor: 'pointer',
          padding: '10px 30px',
          marginLeft: '2px',
          background: 'black',
          color: '#fff',
          fontSize: '18px',
          outline: 'none',
          border: 'none',
          borderRadius: '2px',
        }}
        onClick={() => router.push('/about/aboutcollege')}
      >
        Go to About College page
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
        onClick={() => router.push('/about/aboutstudent')}
      >
        Go to About College page
      </button>
    </div>
  );
};

export default About;
