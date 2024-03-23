import React from "react";
import { useAppSelector } from "../../../hooks/typedhooks";
import { ReactComponent as Menu } from "../menu-svgrepo-com.svg";
import "./Aside-menu.css";
export interface AsideProps {
  City: string;
  SetCity: (e: string) => void;
  dispatch: Function;
  makeRequest: (e: any) => void;
  PhoneMenuActive: boolean;
  setPhoneMenuActive: (PhoneMenuActive: boolean) => void;
  GetWeather: ({
    State,
    isCurrent,
  }: {
    State: any;
    isCurrent: boolean;
  }) => void;
}
const Aside_menu: React.FC<AsideProps> = ({
  City,
  SetCity,
  dispatch,
  makeRequest,
  GetWeather,
  setPhoneMenuActive,
  PhoneMenuActive,
}) => {
  const State = useAppSelector((State) => State.Weather);
  const ToggleMenu = (e: React.MouseEvent<SVGSVGElement>) => {
    setPhoneMenuActive(!PhoneMenuActive);
  };
  return (
    <div className="aside_menu">
      <div className="aside_menu_box">
        <div className="FindLocation">
          <input
            value={City}
            placeholder="Search for your preffered city..."
            onChange={(e) => {
              SetCity(e.target.value);
              if (e.target.value.length > 0) {
                return makeRequest(e);
              }
            }}
          ></input>
          <button
            className="Find"
            onClick={() => {
              if (City.length !== 0) {
                dispatch(GetWeather({ State, isCurrent: false }));
                SetCity("");
              }
            }}
          >
            Find
          </button>
        </div>
        <div className="open">
          <Menu className="Menu_button" onClick={ToggleMenu}></Menu>
        </div>
      </div>
    </div>
  );
};
export default React.memo(Aside_menu);
