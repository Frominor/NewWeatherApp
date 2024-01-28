import React from "react";
import { Props } from "../../../../models/IForecastItem";
import clouds from "../../../../imgs/clouds 1.png";
import sneg from "../../../../imgs/rain 1.png";
import drizzle from "../../../../imgs/drizzle 1.png";
import clear from "../../../../imgs/clear 2.png";
import mist from "../../../../imgs/mist 1.png";
const FiveDForecastItem: React.FC<Props> = ({
  weather,
  dt_txt,
  dt,

  main,
}) => {
  const Months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <div className="forecast_item" key={dt}>
      <div className="test">
        <img src={weather[0].icon}></img>
      </div>
      <p className="forecat_temp">{Math.round(main.feels_like - 273)}°C</p>
      <div className="forecast_date_box">
        <p className="forecast_date">
          {new Date(
            +dt_txt.split(" ")[0].split("-")[0],
            +dt_txt.split(" ")[0].split("-")[1],
            +dt_txt.split(" ")[0].split("-")[2]
          ).toLocaleDateString("en-US", { weekday: "short" })}
        </p>
        <p className="forecast_date">{dt_txt.split(" ")[0].split("-")[2]}</p>
        <p className="forecast_date">
          {Months[+dt_txt.split(" ")[0].split("-")[1] - 1]}
        </p>
      </div>
    </div>
  );
};
export { FiveDForecastItem };
