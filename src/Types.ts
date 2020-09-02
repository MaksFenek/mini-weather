export interface IWeatherData {
  weather: [
    {
      main: string;
      description: string;
    }
  ];
  main: {
    temp: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  coord: {
    lon: number;
    lat: number;
  };
}

export interface IDay {
  name: string;
  temp: {
    day: number;
    night: number;
  };
  pressure: number;
  humidity: number;
  weather: [
    {
      main: string;
    }
  ];
  wind_speed: number;
  wind_deg: number;
}

export interface IForecastData {
  daily: IDay[];
}
