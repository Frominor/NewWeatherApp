import React from "react";
import clear3 from "../../../../imgs/clear 3.png";
import navigation from "../../../../imgs/navigation 1.png";
import clouds from "../../../../imgs/clouds 1.png";
import sneg from "../../../../imgs/rain 1.png";
import drizzle from "../../../../imgs/drizzle 1.png";
export const HourlyForecastItem = ({ item }) => {
  return (
    <div className="HourlyForecast_item">
      <div className="HourlyForecast_item_header">
        <p>
          {item.dt_txt.split(" ")[1].split(":")[0] +
            ":" +
            item.dt_txt.split(" ")[1].split(":")[1]}
        </p>
      </div>
      <div className="HourlyForecast_item_main">
        <div className="HourlyForecast_item_main_first">
          <img
            src={
              item.weather[0].description == "overcast clouds"
                ? clouds
                : item.weather[0].description == "light snow"
                ? sneg
                : item.weather[0].description == "light rain"
                ? drizzle
                : item.weather[0].description == ""
            }
          ></img>
          <p>{Math.floor(item.main.temp - 273)}°C</p>
        </div>
        <div className="HourlyForecast_item_main_second">
          <img
            src={navigation}
            className="deg"
            style={{ rotate: `${item.wind.deg}deg` }}
          ></img>
          <p>{Math.ceil(item.wind.speed)}km/h</p>
        </div>
      </div>
    </div>
  );
};
