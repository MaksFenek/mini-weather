import React, { ReactNode } from 'react';
import { IDate } from '../Main/Main';
import Temperature from './Cards/Temperature/Temperature';
import './Forecast.scss';

interface IForecast {
  city: string;
  children: ReactNode;
  date: IDate | '--';
}

const Forecast: React.FC<IForecast> = ({ city, children, date }) => {
  return (
    <div className='forecast' aria-label='forecast'>
      <div className='forecast-header'>
        <span>{city}</span>
        {date !== '--' && <span>{`${date.day} ${date.month}`}</span>}
      </div>
      <div className='forecast-content'>{children}</div>
    </div>
  );
};

export default Forecast;
