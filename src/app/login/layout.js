'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Layout({ children }) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div>
      {pathname !== '/login/loginteacher' ? (
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
      ) : (
        <Link href="/login" style={{ textAlign: 'center' }}>
          Back to login page
        </Link>
      )}
      {children}
    </div>
  );
}
