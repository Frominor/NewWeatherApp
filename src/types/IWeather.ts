export interface IWeather {
  clouds: {
    all: number;
  };
  dt_txt: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
    icon: string | null;
    pressure: number;
  };
  weather: { main: string; description: string; icon: string }[];
  wind: { speed: number; deg: number };
  dt: string;
}

export interface State {
  Lat: number | null;
  isLoading: boolean;
  Lon: number | null;
  weather: IWeather | null;
  FiveDForecast: IWeather[];
  HourlyWeather: IWeather[];
  CurrentWeather: {
    lat: number | null;
    lon: number | null;
  };
  City: string;
  Error: string | null;
}
