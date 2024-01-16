import React from "react";
import clear3 from "../../../imgs/clear 3.png";
import "./HourlyForecast.css";
import navigation from "../../../imgs/navigation 1.png";
const HourlyForecast: React.FC = () => {
  return (
    <div className="HourlyForecast">
      <p className="HourlyForTitle">Hourly Forecast:</p>
      <div className="HourlyForecast_Box">
        <div className="HourlyForecast_item">
          <div className="HourlyForecast_item_header">
            <p>12:00</p>
          </div>
          <div className="HourlyForecast_item_main">
            <div className="HourlyForecast_item_main_first">
              <img src={clear3}></img>
              <p>26°C</p>
            </div>
            <div className="HourlyForecast_item_main_second">
              <img src={navigation}></img>
              <p>3km/h</p>
            </div>
          </div>
        </div>
        <div className="HourlyForecast_item"></div>
        <div className="HourlyForecast_item"></div>
        <div className="HourlyForecast_item"></div>
        <div className="HourlyForecast_item"></div>
      </div>
    </div>
  );
};
export { HourlyForecast };
