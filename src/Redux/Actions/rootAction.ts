import { IDay, IForecastData, IWeatherData } from '../../Types';
import { GET_WEATHER, GET_FORECAST } from '../Constants';
import { IWeatherState } from '../Reducers/rootReducer';

export const getWeather = (payload: IWeatherState) => ({
  type: GET_WEATHER,
  payload,
});

export const getForecast = (payload: IForecastData) => ({
  type: GET_FORECAST,
  payload,
});

export const GetWeatherThunk = (city: string) => (dispatch: any) => {
  if (city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.API_WEATHER_KEY}
      `
    )
      .then((res) => res.json())
      .then((data: IWeatherData) =>
        dispatch(
          getWeather({
            today: {
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
              coord: {
                lat: data.coord.lat,
                lon: data.coord.lon,
              },
            },
          })
        )
      )
      .then(() => {
        dispatch(GetForecast7daysThunk());
      });
  }
};

export const GetForecast7daysThunk = () => (
  dispatch: any,
  getState: () => IWeatherState
) => {
  const city = getState().today.city;
  const coord = getState().today.coord;

  if (city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&units=metric&appid=${process.env.API_WEATHER_KEY}
      `
    )
      .then((res) => res.json())
      .then((data: IForecastData) => {
        const dayName = [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ];

        dispatch(
          getForecast({
            daily: data.daily.map((day: IDay, index) => ({
              name:
                dayName[
                  new Date().getDay() + index >= 7
                    ? new Date().getDay() + index - 7
                    : new Date().getDay() + index
                ],
              temp: {
                day: Math.round(day.temp.day),
                night: Math.round(day.temp.night),
              },
              pressure: day.pressure,
              humidity: day.humidity,
              weather: [
                {
                  main: day.weather[0].main,
                },
              ],
              wind_speed: day.wind_speed,
              wind_deg: day.wind_deg,
            })),
          })
        );
      });
  }
};
