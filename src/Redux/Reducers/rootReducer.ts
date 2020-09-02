import { IDay } from '../../Types';
import { GET_FORECAST, GET_WEATHER } from '../Constants';

export interface IWeatherState {
  today: {
    city: string;
    temp: number | '--';
    main: string;
    description: string;
    humidity: number;
    pressure: number;
    wind: {
      speed: number;
      deg: number;
    };
    coord: {
      lon: number;
      lat: number;
    };
  };
  daily?: IDay[];
}

const initialState: IWeatherState = {
  today: {
    city: '',
    temp: '--',
    main: '',
    description: 'void',
    humidity: 0,
    pressure: 0,
    wind: {
      speed: 0,
      deg: 0,
    },
    coord: {
      lon: 0,
      lat: 0,
    },
  },
  daily: [],
};

export default (
  state = initialState,
  { type, payload }: { type: string; payload: any }
) => {
  switch (type) {
    case GET_WEATHER:
      return { ...state, ...payload };

    case GET_FORECAST:
      return { ...state, ...payload };

    default:
      return state;
  }
};
