export interface IWeather {
  clouds: {
    all: number;
  };
  dt_txt: String;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
    pressure: number;
  };
  weather: { main: String; description: String }[];
  wind: { speed: number; deg: number };
}

export interface State {
  Lat: number;
  Lon: number;
  token: {};
  weather: IWeather | {};
  FiveDForecast: {}[];
  HourlyWeather: IWeather[];
  City: String;
  Error: String;
}
