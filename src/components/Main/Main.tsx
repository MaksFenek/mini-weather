import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useStorage } from '../../API/localStorageAPI';
import { GetWeatherThunk } from '../../Redux/Actions/rootAction';
import { IWeatherState } from '../../Redux/Reducers/rootReducer';
import Params from '../Forecast/Cards/Params/Params';
import Temperature from '../Forecast/Cards/Temperature/Temperature';
import Forecast from '../Forecast/Forecast';
import Navbar from '../Navbar/Navbar';
import './Main.scss';

export interface IDate {
  day: number;
  month: string;
}

function Main() {
  // Create useSelector
  const state = useSelector((state: IWeatherState) => state);

  // Create dispatch for Redux
  const dispatch = useDispatch();

  // State for city name
  const [city, setCity] = React.useState<string>('Toronto');

  const [date, setDate] = React.useState<IDate | '--'>('--');

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
    const month = monthNames[new Date().getMonth()];

    setDate({ day, month });
  }, []);
  React.useEffect(() => {
    if (state.city) {
      setCity(state.city);
    }
  }, [state.city]);

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
      <Forecast city={city} date={date}>
        <Temperature temp={state.temp} description={state.main} />
        <Params
          humidity={state.humidity}
          pressure={state.pressure}
          wind={state.wind}
        />
      </Forecast>
    </section>
  );
}

export default Main;
