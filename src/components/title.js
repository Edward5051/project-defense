// components/Header.js

import React from 'react';

const Title = ({ username }) => {
  return (
    <div className="bg-gray-200 p-4">
      <h2>Welcome, {username}!</h2>
    </div>
  );
};

export default Title;
