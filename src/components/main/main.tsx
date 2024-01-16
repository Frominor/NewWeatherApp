import React from "react";

import "./Main.css";
import { DateAndTime } from "../DateAndTime/DateAndTime";
import { Forecasts } from "../Forecast/Forecasts";
import { WeatherDetails } from "../WeatherDetails/WeatherDetail";
const Main: React.FC = () => {
  return (
    <div className="Main">
      <div className="container">
        <div className="Box">
          <div className="DateAndTimeInfoBox">
            <DateAndTime></DateAndTime>
            <WeatherDetails></WeatherDetails>
          </div>
          <Forecasts></Forecasts>
        </div>
      </div>
    </div>
  );
};
export { Main };
