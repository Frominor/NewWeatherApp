import React from "react";
import { Switch } from "@mui/material";
import location from "../../../imgs/current location icon.png";

import "./Right-side-menu.css";
interface RightSide {
  PhoneMenuActive: boolean;
  setTheme: (theme: string) => void;
  getCurrentWeather: () => void;
  theme: string;
}
const Right_side_menu: React.FC<RightSide> = ({
  PhoneMenuActive,
  getCurrentWeather,
  theme,
  setTheme,
}) => {
  return (
    <div
      className="right_side_menu"
      style={{ opacity: PhoneMenuActive ? "1" : "0" }}
    >
      <div className="right_side_menu_box">
        <div className="curr_weath_box">
          <button onClick={getCurrentWeather}>
            <img src={location} className="geoposition"></img>
          </button>
        </div>
        <div>
          <Switch
            defaultValue={"dark"}
            onChange={() => {
              if (theme == "dark") {
                setTheme("light");
              } else {
                setTheme("dark");
              }
            }}
            sx={{ color: " var(--right_side_menu_background)" }}
          />
        </div>
      </div>
    </div>
  );
};
export default Right_side_menu;
