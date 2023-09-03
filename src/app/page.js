'use client';

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
        <h1>Css</h1>
        <h3 style={{ color: 'green' }}>Inline Css</h3>
        <h2 style={updateColor}>Update Color on button click</h2>
        <button
          onClick={() =>
            setUpdateColor({
              backgroundColor: 'green',
              color: 'red',
              padding: '10px',
            })
          }
        >
          Update style
        </button>
      </main>
    </>
  );
}
