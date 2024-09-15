import React from 'react';

const Top = ({ weather }) => {
  return (
    <div className="weather__top">
      <h2>{weather.name}</h2>
      <h3>{weather.sys.country}</h3>
    </div>
  );
};

export default Top;
