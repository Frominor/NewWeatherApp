import React from "react";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";

import location from "../../../imgs/current location icon.png";
import FindLocation from "../../FindLocation/FindLocation";
import Button from "../../button/Button";

import { HeaderBoxProps } from "../../../types/IHeaderBoxProps";

import "./HeaderBox.css";
const HeaderBox: React.FC<HeaderBoxProps> = ({
  theme,
  setTheme,
  City,
  Dadat,
  GetWeather,
  FindCityCoords,
  SetDadat,
  SetCity,
  SetIsFetchingDatas,
  setPhoneMenuActive,
  dispatch,
  PhoneMenuActive,
  isFectingDadatas,
  makeRequest,
  getCurrentWeather,
}) => {
  return (
    <div className="header_box">
      <FormGroup>
        <FormControlLabel
          control={<Switch />}
          label="Theme"
          defaultValue={"dark"}
          onChange={() => {
            if (theme == "dark") {
              setTheme("light");
            } else {
              setTheme("dark");
            }
          }}
          sx={{ color: "var(--text-color)" }}
        />
      </FormGroup>

      <FindLocation
        City={City}
        Dadat={Dadat}
        FindCityCoords={FindCityCoords}
        GetWeather={GetWeather}
        SetCity={SetCity}
        SetDadat={SetDadat}
        SetIsFetchingDatas={SetIsFetchingDatas}
        setPhoneMenuActive={setPhoneMenuActive}
        dispatch={dispatch}
        PhoneMenuActive={PhoneMenuActive}
        isFectingDadatas={isFectingDadatas}
        makeRequest={makeRequest}
      ></FindLocation>
      <Button
        clasS="currentLocation"
        OnClick={getCurrentWeather}
        location={location}
        title="Current Location"
      ></Button>
    </div>
  );
};
export default HeaderBox;
