import React from 'react';
import './Params.scss';

interface IParams {
  humidity: number | '--';
  pressure: number | '--';
  wind: {
    speed: number;
    deg: number;
  };
}

const Params = ({ humidity = '--', pressure = '--', wind }: IParams) => {
  return (
    <div className='forecast-content__params'>
      <div className='params'>
        <ul>
          <li>
            <svg className='icon' height='36px' width='36px'>
              <use xlinkHref={`/src/Icons/params.svg#humidity`} />
            </svg>
            <span>Humidity: {humidity} %</span>
          </li>
          <li>
            <svg className='icon' height='36px' width='36px'>
              <use xlinkHref={`/src/Icons/params.svg#barometer`} />
            </svg>
            <span>Pressure: {pressure} hPa</span>
          </li>
          <li>
            <svg
              className='icon'
              height='52px'
              width='52px'
              style={{ margin: '-8px' }}
            >
              <use
                xlinkHref={`/src/Icons/compass.svg#main
              `}
              ></use>
              <use
                style={{
                  transform: `rotate(${wind.deg + 90}deg)`,
                  transformOrigin: 'center',
                }}
                xlinkHref={`/src/Icons/compass.svg#arrow`}
              ></use>
            </svg>
            <span>Wind: {wind ? wind.speed : '--'} mph</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Params;
