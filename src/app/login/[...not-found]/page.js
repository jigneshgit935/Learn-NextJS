import Link from 'next/link';
import React from 'react';

const LoginPageNotFound = () => {
  return (
    <div>
      <h3>This login page not available</h3>

      <Link href="/">Click here to go home page</Link>
    </div>
  );
};

export default LoginPageNotFound;
