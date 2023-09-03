'use client';
import { useState } from 'react';
import style from './style.module.css';

export default function Home() {
  const [color, setColor] = useState('red');
  const { red } = style;
  return (
    <>
      <main
        style={{
          textAlign: 'center',
          padding: '10px 0px',
          border: '1px solid black',
        }}
      >
        <h1 className={color === 'red' ? style.red : style.green}>
          Conditional style
        </h1>
        <h2 style={{ backgroundColor: color === 'red' ? 'red' : 'green' }}>
          Heading
        </h2>
        <h3 id={style.orange}>Heading 3</h3>

        <h3 className={red}>Dummy</h3>
        <h3 className={red}>Dummy</h3>
        <h3 className={red}>Dummy</h3>
        <h3 className={red}>Dummy</h3>
        <button onClick={() => setColor('green')}>Change color</button>
      </main>
    </>
  );
}
