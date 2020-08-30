import React from 'react';
import Temperature from './Cards/Temperature/Temperature';
import './Forecast.scss';

const Forecast = () => {
  return (
    <div className='forecast' aria-label='forecast'>
      <div className='forecast-header'>
        <span>Toronto</span>
        <span>30 august</span>
      </div>
      <div className='forecast-content'>
        <div className='forecast-content__today'>
          <Temperature />
        </div>
        <div className='forecast-content__params'></div>
      </div>
    </div>
  );
};

export default Forecast;
