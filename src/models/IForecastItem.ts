export interface Props {
  weather: {
    description: String;
  }[];
  dt_txt: String;
  main: {
    temp: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
}
