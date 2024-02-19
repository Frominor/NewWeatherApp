import { FindLocationProps } from "./IFindLocationProps";

export interface HeaderBoxProps extends FindLocationProps {
  theme: string;
  setTheme: (theme: string) => void;
  getCurrentWeather: () => void;
}
