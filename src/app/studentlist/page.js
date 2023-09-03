import Link from 'next/link';
import React from 'react';

const StudentList = () => {
  return (
    <div>
      <h1>StudentList</h1>
      <br />
      <br />
      <br />
      <div>
        <ul>
          <li>
            <Link href="/studentlist/jignesh">Jignesh</Link>
          </li>
          <li>
            <Link href="/studentlist/christine">Christine</Link>
          </li>
          <li>
            <Link href="/studentlist/rajesh">Rajesh</Link>
          </li>
          <li>
            <Link href="/studentlist/taimour">Taimour</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StudentList;
