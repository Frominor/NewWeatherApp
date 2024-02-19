import { AsideProps } from "../components/header/aside_menu/Aside-menu";
import { InputProps } from "./InputProps";

export interface FindLocationProps extends InputProps {
  Dadat: { value: string }[];
  dispatch: (argument: any) => void;
  SetDadat: (arr: []) => void;
  FindCityCoords: (city: string) => void;
}
export interface FindLocationProps extends AsideProps {}
