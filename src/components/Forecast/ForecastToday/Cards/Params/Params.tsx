// React
import React from 'react';

// Styles
import './Params.scss';

// Types
interface IParams {
  humidity: number | '--';
  pressure: number | '--';
  wind: {
    speed: number;
    deg: number;
  };
}

const Params: React.FC<IParams> = ({
  humidity = '--',
  pressure = '--',
  wind,
}) => {
  return (
    <div className='params'>
      <ul>
        <li>
          <svg className='icon' height='36px' width='36px'>
            <use xlinkHref={`icons/params.svg#humidity`} />
          </svg>
          <p>
            Humidity: <span>{humidity}</span> %
          </p>
        </li>
        <li>
          <svg className='icon' height='36px' width='36px'>
            <use xlinkHref={`icons/params.svg#barometer`} />
          </svg>
          <p>
            Pressure: <span>{pressure}</span> hPa
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
                transform: `rotate(${wind.deg + 270}deg)`,
                transformOrigin: 'center',
              }}
              xlinkHref={`icons/compass.svg#arrow`}
            ></use>
          </svg>
          <p>
            Wind: <span>{wind ? wind.speed : '--'}</span> mph
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Params;
