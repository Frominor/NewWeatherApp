export interface Props {
  weather: {
    description: string;
    icon: string;
  }[];
  dt_txt: string;
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
