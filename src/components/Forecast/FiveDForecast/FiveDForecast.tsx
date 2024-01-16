import React from "react";
import clear from "../../../imgs/clear 2.png";
import clouds from "../../../imgs/clouds 1.png";
import drizzle from "../../../imgs/drizzle 1.png";
import rain from "../../../imgs/rain 1.png";
import mist from "../../../imgs/mist 1.png";
import "./FiveDForecast.css";
const FiveDForecast: React.FC = () => {
  const [Forecast, SetForecast] = React.useState([
    { img: clear, temp: "12°C", date: "Friday, 1 Sep" },
    { img: clouds, temp: "23°C", date: "Saturday, 2 Sep" },
    { img: drizzle, temp: "26°C", date: "Sunday, 3 Sep" },
    { img: rain, temp: "17°C", date: "Monday, 4 Sep" },
    { img: mist, temp: "16°C", date: "Tuesday, 5 Sep" },
  ]);
  return (
    <div className="FiveDForecast">
      <p className="FiveDTitle">5 Days Forecast:</p>

      {Forecast.map((item) => {
        return (
          <div
            className={
              item.date.split(",")[0] == "Saturday" ? "syka" : "forecast_item"
            }
          >
            <div className="test">
              <img src={item.img}></img>
              <p className="forecat_temp">{item.temp}</p>
            </div>

            <p className="forecast_date">{item.date}</p>
          </div>
        );
      })}
    </div>
  );
};
export { FiveDForecast };
