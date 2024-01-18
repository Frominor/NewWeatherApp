import React from "react";

import "./HourlyForecast.css";

import { UseAppSelector } from "../../../hooks";
import { HourlyForecastItem } from "./HourlyForecastItem/HourlyForecastItem";
const HourlyForecast = () => {
  const State = UseAppSelector((State) => State.Weather);

  return (
    <div className="HourlyForecast">
      <p className="HourlyForTitle">Hourly Forecast:</p>
      <div className="HourlyForecast_Box">
        {State.HourlyWeather.map((item) => {
          return <HourlyForecastItem item={item}></HourlyForecastItem>;
        })}
      </div>
    </div>
  );
};
export { HourlyForecast };
