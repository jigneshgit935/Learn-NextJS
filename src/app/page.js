import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h2>Hello</h2>
      {/* Used resuable components and passed data to components */}
      <User name="Jignesh Sharma" />
      <User name="Ashish Jain" />
      <User name="Raju Bhai" />
    </main>
  );
}

const User = ({ name }) => {
  return (
    <div>
      <h3>
        User name is:
        <span style={{ color: 'grey', fontWeight: 'bold' }}>{name}</span>{' '}
      </h3>
    </div>
  );
};
