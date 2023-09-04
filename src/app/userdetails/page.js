'use client';

import Script from 'next/script';
import React from 'react';

const UserDetails = () => {
  return (
    <div>
      <Script
        src="/location.js"
        onLoad={() => {
          console.log('file loaded');
        }}
      />
      <h2>UserDetails</h2>
    </div>
  );
};

export default UserDetails;
