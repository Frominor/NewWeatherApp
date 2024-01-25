import React from "react";

import "./HourlyForecast.css";

import { UseAppSelector } from "../../../typedhooks";
import { HourlyForecastItem } from "./HourlyForecastItem/HourlyForecastItem";
import { IWeather } from "../../../models/IWeather";
const HourlyForecast = () => {
  const State = UseAppSelector((State) => State.Weather);

  return (
    <div className="HourlyForecast">
      <p className="HourlyForTitle">Hourly Forecast:</p>
      <div className="HourlyForecast_Box">
        {State.HourlyWeather.map((item: IWeather) => {
          return (
            <HourlyForecastItem
              weather={item.weather}
              dt_txt={item.dt_txt}
              wind={item.wind}
              main={item.main}
            ></HourlyForecastItem>
          );
        })}
      </div>
    </div>
  );
};
export { HourlyForecast };
