import React from 'react';
import './Temperature.scss';

const Temperature = () => {
  return (
    <div className='temperature'>
      <div className='temperature-value'>
        <img src='favicon.png' alt='forecast' height='96px' width='96px' />
        <h2>+30'</h2>
      </div>
      <h3>Mostly clear</h3>
    </div>
  );
};

export default Temperature;
