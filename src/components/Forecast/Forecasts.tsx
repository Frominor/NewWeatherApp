import React from "react";
import "./Forecasts.css";
import { HourlyForecast } from "./HourlyForecast/HourlyForecast";
import { FiveDForecast } from "./FiveDForecast/FiveDForecast";
const Forecasts: React.FC = () => {
  return (
    <div className="ForecastsBox">
      <FiveDForecast></FiveDForecast>
      <HourlyForecast></HourlyForecast>
    </div>
  );
};
export { Forecasts };
