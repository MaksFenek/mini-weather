import React from 'react';
import './Temperature.scss';

interface ITemperature {
  temp: number | '--';
  description: string;
}

const Temperature: React.FC<ITemperature> = ({ temp, description }) => {
  return (
    <div className='forecast-content__today'>
      <div className='temperature'>
        <div className='temperature-value'>
          <svg className='icon' height='96px' width='96px'>
            <use xlinkHref={`icons/icons.svg#${description.toLowerCase()}`} />
          </svg>
          <h2>{temp} °C</h2>
        </div>
        <h3>{description}</h3>
      </div>
    </div>
  );
};

export default Temperature;
