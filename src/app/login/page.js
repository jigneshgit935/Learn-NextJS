'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const Login = () => {
  const router = useRouter();

  const navigate = (routeName) => {
    router.push(routeName);
  };

  return (
    <div>
      <h1>Login Page</h1>
      <Link href="/">Go to home page</Link>
      <br />
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
        onClick={() => navigate('/login/loginteacher')}
      >
        Go to teacher login page
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
        onClick={() => navigate('/login/loginstudent')}
      >
        Go to student login page
      </button>
    </div>
  );
};

export default Login;
