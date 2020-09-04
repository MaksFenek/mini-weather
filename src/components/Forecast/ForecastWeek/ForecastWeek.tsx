// React
import React from 'react';

// Styles
import './ForecastWeek.scss';

// Types
import { IDay } from '../../../Types';
import Card from './Card/Card';
export interface IForecastWeek {
  week: IDay[] | undefined;
}

const ForecastWeek: React.FC<IForecastWeek> = ({ week }) => {
  return (
    <div aria-label='week' className='week'>
      {week &&
        week.map((day, index) => {
          if (index < 7) return <Card key={index} {...day} />;
        })}
    </div>
  );
};

export default ForecastWeek;
