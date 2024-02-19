import React, { memo } from "react";
import navigation from "../../../../imgs/navigation 1.png";
import { Props } from "../../../../types/IForecastItem";
import "./HourlyForecastItem.css";
const HourlyForecastItem: React.FC<Props> = ({
  dt_txt,
  weather,
  main,
  wind,
}) => {
  return (
    <div
      className="HourlyForecast_item"
      style={{
        background:
          dt_txt.split(" ")[1].split(":")[0] == "00" ||
          dt_txt.split(" ")[1].split(":")[0] > "18"
            ? " linear-gradient(174deg, #443D64 -15.92%, rgba(101, 130, 198, 0.00) 192.45%)"
            : "linear-gradient(169deg, #F88508 -15.98%, rgba(246, 250, 217, 0.00) 150.58%)",
      }}
    >
      <div className="HourlyForecast_item_header">
        <p>
          {dt_txt.split(" ")[1].split(":")[0] +
            ":" +
            dt_txt.split(" ")[1].split(":")[1]}
        </p>
      </div>
      <div className="HourlyForecast_item_main">
        <div className="HourlyForecast_item_main_first">
          <img src={weather[0].icon}></img>
          <p>{Math.floor(main.temp - 273)}°C</p>
        </div>
        <div className="HourlyForecast_item_main_second">
          <img
            src={navigation}
            className="deg"
            style={{ rotate: `${wind.deg}deg` }}
          ></img>
          <p>{Math.ceil(wind.speed)}km/h</p>
        </div>
      </div>
    </div>
  );
};
export default memo(HourlyForecastItem);
