'use client';

import Link from 'next/link';
import React from 'react';

const Student = ({ params }) => {
  console.log(params);
  return (
    <div>
      <h2>Student Details</h2>
      <h3>Name is : {params.student}</h3>
      <Link href="/studentlist">Back to student list page</Link>
    </div>
  );
};

export default Student;
