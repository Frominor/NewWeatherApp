export interface Props {
  weather: {
    description: String;
  }[];
  dt_txt: String;
  main: {
    temp: number;
    feels_like: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
  dt: string | null;
  key?: string;
}
