import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div>
      <div
        style={{
          padding: '30px 100px',
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: 'lightsalmon',
        }}
      >
        <Link href="/login">
          <h2>Login Page</h2>
        </Link>

        <ul
          style={{
            display: 'flex',
            listStyle: 'none',
            columnGap: '40px',
          }}
        >
          <li>
            <Link href="/login/loginteacher">Login Teacher</Link>
          </li>
          <Link href="/login/loginstudent">Login Student</Link>
          <li></li>
        </ul>
      </div>
      {children}
    </div>
  );
}
