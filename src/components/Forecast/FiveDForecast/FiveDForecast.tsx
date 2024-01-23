import React from "react";
import clear from "../../../imgs/clear 2.png";
import clouds from "../../../imgs/clouds 1.png";
import drizzle from "../../../imgs/drizzle 1.png";
import sneg from "../../../imgs/rain 1.png";
import mist from "../../../imgs/mist 1.png";
import "./FiveDForecast.css";
import { UseAppSelector } from "../../../hooks";
const FiveDForecast: React.FC = () => {
  const State = UseAppSelector((State) => State.Weather);
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
    <div className="FiveDForecast">
      <p className="FiveDTitle">5 Days Forecast:</p>

      {State.FiveDForecast.map((item) => {
        console.log(item);
        return (
          <div className={"forecast_item"}>
            <div className="test">
              <img
                src={
                  item.weather[0].description == "overcast clouds"
                    ? clouds
                    : item.weather[0].description == "light snow"
                    ? sneg
                    : item.weather[0].description == "light rain"
                    ? drizzle
                    : item.weather[0].description == "broken clouds"
                    ? mist
                    : item.weather[0].description == "few clouds"
                    ? drizzle
                    : item.weather[0].description == "scattered clouds"
                    ? clouds
                    : item.weather[0].description == "snow"
                    ? sneg
                    : ""
                }
              ></img>
              <p className="forecat_temp">
                {Math.round(item.main.feels_like - 273)}°C
              </p>
            </div>
            <div className="forecast_date_box">
              <p className="forecast_date">
                {new Date(
                  +item.dt_txt.split(" ")[0].split("-")[0],
                  +item.dt_txt.split(" ")[0].split("-")[1],
                  +item.dt_txt.split(" ")[0].split("-")[2]
                ).toLocaleDateString("en-US", { weekday: "short" })}
              </p>
              <p className="forecast_date">
                {item.dt_txt.split(" ")[0].split("-")[2]}
              </p>
              <p className="forecast_date">
                {Months[+item.dt_txt.split(" ")[0].split("-")[1] - 1]}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export { FiveDForecast };
