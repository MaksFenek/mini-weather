import { GET_WEATHER } from '../Constants';

export interface IWeatherState {
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
}

const initialState = {
  city: '',
  temp: '--',
  main: '',
  description: 'void',
  humidity: null,
  pressure: null,
  wind: {
    speed: null,
    deg: null,
  },
};

export default (
  state = initialState,
  { type, payload }: { type: string; payload: any }
) => {
  switch (type) {
    case GET_WEATHER:
      return { ...state, ...payload };

    default:
      return state;
  }
};
