import React from 'react';
import './Card.scss';
import { IDay } from '../../../../Types';

const Card: React.FC<IDay> = ({
  temp,
  pressure,
  humidity,
  weather,
  wind_deg,
  wind_speed,
  name,
}) => {
  return (
    <div className='card'>
      <div className='card-day' aria-label='name'>
        {name}
      </div>
      <svg className='card-icon' height='84px' width='84px'>
        <use
          aria-label='icon'
          xlinkHref={`icons/icons.svg#${weather[0].main.toLowerCase()}`}
        />
      </svg>
      <div className='card-weather'>
        <span aria-label='temp-day'>{temp.day}</span> °C /{' '}
        <span aria-label='temp-night'>{temp.night}</span> °C
      </div>

      <ul className='card-params'>
        <li>
          <svg className='icon' height='36px' width='36px'>
            <use xlinkHref={`icons/params.svg#humidity`} />
          </svg>
          <p>
            <span aria-label='humidity'>{humidity}</span> %
          </p>
        </li>
        <li>
          <svg className='icon' height='36px' width='36px'>
            <use xlinkHref={`icons/params.svg#barometer`} />
          </svg>
          <p>
            <span aria-label='pressure'>{pressure}</span> hPa
          </p>
        </li>
        <li>
          <svg
            className='icon'
            height='52px'
            width='52px'
            style={{ margin: '-7px' }}
          >
            <use
              xlinkHref={`icons/compass.svg#main
              `}
            ></use>
            <use
              style={{
                transform: `rotate(${wind_deg + 270}deg)`,
                transformOrigin: 'center',
              }}
              xlinkHref={`icons/compass.svg#arrow`}
            ></use>
          </svg>
          <p>
            <span aria-label='wind_speed'>
              {wind_speed ? wind_speed : '--'}
            </span>{' '}
            mph
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Card;
