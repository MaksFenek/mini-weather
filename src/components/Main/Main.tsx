// React
import React from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { GetWeatherThunk } from '../../Redux/Actions/rootAction';
import { IWeatherState } from '../../Redux/Reducers/rootReducer';

// API
import { useStorage } from '../../API/localStorageAPI';
// Components
import Params from '../Forecast/ForecastToday/Cards/Params/Params';
import Temperature from '../Forecast/ForecastToday/Cards/Temperature/Temperature';
import ForecastToday from '../Forecast/ForecastToday/ForecastToday';
import Navbar from '../Navbar/Navbar';

// Styles
import './Main.scss';
import ForecastWeek from '../Forecast/ForecastWeek/ForecastWeek';
import { IDay } from '../../Types';

// Types
export interface IDate {
  name: string;
  day: number;
  month: string;
}

const Main: React.FC = () => {
  // Create useSelector
  const state = useSelector((state: IWeatherState) => state);

  // Create dispatch for Redux
  const dispatch = useDispatch();

  // State for city name
  const [city, setCity] = React.useState<string>('Toronto');

  // State for date
  const [date, setDate] = React.useState<IDate | '--'>('--');

  // State for week
  const [week, setWeek] = React.useState<IDay[]>();

  // Refs
  const searchRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    // Get the city from local storage
    if (useStorage('get', 'city')) {
      setCity(useStorage('get', 'city'));
    }
    // Get the weather in the city
    dispatch(GetWeatherThunk(city));

    // Create date
    const day = new Date().getDate();
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const dayName = [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ];
    const month = monthNames[new Date().getMonth()];
    const name = dayName[new Date().getDay() - 1];

    setDate({ day, month, name });
  }, []);

  React.useEffect(() => {
    if (state.daily) {
      setWeek(state.daily);
    }
  });
  React.useEffect(() => {
    if (state.today.city) {
      // Set the city
      setCity(state.today.city);
    }
  }, [state.today.city]);

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter' && searchRef && e.currentTarget.value !== '') {
      const cityValue =
        searchRef.current!.value.charAt(0).toUpperCase() +
        searchRef.current!.value.slice(1);
      searchRef.current!.value = '';
      dispatch(GetWeatherThunk(cityValue));
    }
  };

  return (
    <section className='main'>
      <Navbar onKeyPress={onKeyPress} searchRef={searchRef} />
      <ForecastToday city={city} date={date}>
        <Temperature temp={state.today.temp} description={state.today.main} />
        <Params
          humidity={state.today.humidity}
          pressure={state.today.pressure}
          wind={state.today.wind}
        />
      </ForecastToday>
      <div className='map'>
        <iframe
          src={`https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
          frameBorder='0'
          style={{
            border: 0,
            width: '100%',
            height: '100%',
            borderRadius: '20px',
          }}
          allowFullScreen
        ></iframe>
      </div>
      <ForecastWeek week={week} />
    </section>
  );
};

export default Main;
