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
  Lat: number | null;
  Lon: number | null;
  themecolor: string | null;
  token: {};
  weather: IWeather | null;
  FiveDForecast: IWeather[];
  HourlyWeather: IWeather[];
  CurrentWeather: {
    lat: number | null;
    lon: number | null;
  };
  City: String;
  Error: String | null;
}
