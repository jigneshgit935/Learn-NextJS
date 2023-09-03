'use client';
import custom from './custom.module.css';
import { useState } from 'react';

export default function Home() {
  const [updateColor, setUpdateColor] = useState({
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px',
  });
  return (
    <>
      <main
        style={{
          textAlign: 'center',
          padding: '10px 0px',
          border: '1px solid black',
        }}
      >
        <h1 className={custom.main}>Module Css</h1>
        <h2 className="main">Heading 2</h2>
      </main>
    </>
  );
}
