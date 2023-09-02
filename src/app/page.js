'use client';
import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [name, setName] = useState('Jignesh');
  // const apple = () => {
  //   alert('Apple is a Fruit');
  // };

  // const apple = (item) => {
  //   alert(`Apple is a ${item}`);
  // };

  const updateName = () => {
    setName('Jignesh Sharma');
  };

  const InnerComponent = () => {
    return <div>Inner Component</div>;
  };

  return (
    <main className={styles.main}>
      <h2>Events Functions and State {name}</h2>
      {/* <button
        onClick={() => alert('Button Clicked')}
        style={{
          padding: '10px 30px',
          background: 'black',
          color: '#fff',
          fontSize: '18px',
          outline: 'none',
          border: 'none',
          borderRadius: '10px',
        }}
      >
        Click
      </button> */}

      {/* <button
        onClick={apple}
        style={{
          padding: '10px 30px',
          background: 'black',
          color: '#fff',
          fontSize: '18px',
          outline: 'none',
          border: 'none',
          borderRadius: '10px',
        }}
      >
        Click
      </button> */}

      {/* <button
        onClick={() => apple('Fruit')}
        style={{
          padding: '10px 30px',
          background: 'black',
          color: '#fff',
          fontSize: '18px',
          outline: 'none',
          border: 'none',
          borderRadius: '10px',
        }}
      >
        Click
      </button> */}

      <button
        onClick={updateName}
        style={{
          padding: '10px 30px',
          background: 'black',
          color: '#fff',
          fontSize: '18px',
          outline: 'none',
          border: 'none',
          borderRadius: '10px',
        }}
      >
        Click
      </button>

      <InnerComponent />
    </main>
  );
}
