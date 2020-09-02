// React
import React, { ReactNode } from 'react';

// Styles
import './ForecastToday.scss';

// Types
import { IDate } from '../../Main/Main';
interface IForecastToday {
  city: string;
  children: ReactNode;
  date: IDate | '--';
}

const ForecastToday: React.FC<IForecastToday> = ({ city, children, date }) => {
  return (
    <div className='forecast' aria-label='forecast'>
      <div className='forecast-header'>
        <span className='city'>{city}</span>
        {date !== '--' && (
          <span className='date'>{`${date.day} ${date.month}, ${date.name}`}</span>
        )}
      </div>
      <div className='forecast-content'>{children}</div>
    </div>
  );
};

export default ForecastToday;
