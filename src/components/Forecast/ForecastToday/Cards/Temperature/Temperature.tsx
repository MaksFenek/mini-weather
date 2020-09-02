// React
import React from 'react';

// Styles
import './Temperature.scss';

// Types
interface ITemperature {
  temp: number | '--';
  description: string;
}

const Temperature: React.FC<ITemperature> = ({ temp, description }) => {
  return (
    <div className='temperature'>
      <div className='temperature-value'>
        <svg className='icon' height='96px' width='96px'>
          <use
            aria-label='icon'
            xlinkHref={`icons/icons.svg#${description.toLowerCase()}`}
          />
        </svg>
        <h2 aria-label='temp'>{temp} °C</h2>
      </div>
      <h3 aria-label='temp'>{description}</h3>
    </div>
  );
};

export default Temperature;
