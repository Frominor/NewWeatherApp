import React from "react";

import sun from "../../imgs/sun.png";
import "./WeatherDetail.css";
import { ExtraDetails } from "./ExtraDetails/ExtraDetails";
import { TempAndSunInfo } from "./TempAndSun/TempAndSunInfo";
const WeatherDetails: React.FC = () => {
  return (
    <div className="WeatherDetails">
      <TempAndSunInfo></TempAndSunInfo>

      <div className="imgTemperature">
        <img src={sun}></img>
        <p>Sunny</p>
      </div>
      <ExtraDetails></ExtraDetails>
    </div>
  );
};
export { WeatherDetails };
