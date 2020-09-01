import { IWeatherData } from '../../Types';
import { GET_WEATHER } from '../Constants';
import { IWeatherState } from '../Reducers/rootReducer';

export const getWeather = (payload: IWeatherState) => ({
  type: GET_WEATHER,
  payload,
});

export const GetWeatherThunk = (city: string) => (dispatch: any) => {
  if (city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=74bcb8750f0c21ae8bdb22dc41f21ec1
      `
    )
      .then((res) => res.json())
      .then((data: IWeatherData) =>
        dispatch(
          getWeather({
            city,
            temp: Math.round(data.main.temp),
            main: data.weather[0].main,
            description: data.weather[0].description,
            humidity: data.main.humidity,
            pressure: data.main.pressure,
            wind: {
              speed: data.wind.speed,
              deg: data.wind.deg,
            },
          })
        )
      );
  }
};
