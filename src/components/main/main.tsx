import React from "react";
import sunrise from "../../imgs/sunrise-white 1.png";
import sunset from "../../imgs/sunset-white 1.png";
import sun from "../../imgs/sun.png";
import humid from "../../imgs/humidity 1.png";
import pressure from "../../imgs/pressure-white 1.png";
import wind from "../../imgs/wind 1.png";
import Uv from "../../imgs/uv-white 1.png";
import clear from "../../imgs/clear 2.png";
import clouds from "../../imgs/clouds 1.png";
import drizzle from "../../imgs/drizzle 1.png";
import rain from "../../imgs/rain 1.png";
import mist from "../../imgs/mist 1.png";
import clear3 from "../../imgs/clear 3.png";
import navigation from "../../imgs/navigation 1.png";
import "./Main.css";
import { DateAndTime } from "../DateAndTime/DateAndTime";
const Main: React.FC = () => {
  const [Forecast, SetForecast] = React.useState([
    { img: clear, temp: "12°C", date: "Friday, 1 Sep" },
    { img: clouds, temp: "23°C", date: "Saturday, 2 Sep" },
    { img: drizzle, temp: "26°C", date: "Sunday, 3 Sep" },
    { img: rain, temp: "17°C", date: "Monday, 4 Sep" },
    { img: mist, temp: "16°C", date: "Tuesday, 5 Sep" },
  ]);

  return (
    <div className="Main">
      <div className="container">
        <div className="Box">
          <div className="DateAndTimeInfoBox">
            <DateAndTime></DateAndTime>
            <div className="WeatherDetails">
              <div className="TemperaturaAndInfoAboutSun">
                <div className="InfoAboutTemp">
                  <p className="Temp">24°C</p>
                  <p className="FeelsLike">Feels like: 22°C</p>
                </div>

                <div className="InfoAboutSunRise">
                  <div className="sunrise">
                    <img src={sunrise}></img>
                    <div className="sunnumbers">
                      <p>Sunrise</p>
                      <span>{new Date().getHours()} AM</span>
                    </div>
                  </div>
                  <div className="sunset">
                    <img src={sunset}></img>
                    <div className="sunnumbers">
                      <p>Sunset</p>
                      <span>{new Date().getHours()} AM</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="imgTemperature">
                <img src={sun}></img>
                <p>Sunny</p>
              </div>
              <div className="ExtraDetails">
                <div className="HumidAndPressure">
                  <div className="Humid">
                    <img src={humid}></img>
                    <p className="procent">41%</p>
                    <p className="humidityP">Humidity</p>
                  </div>
                  <div className="Pressure">
                    <img src={pressure}></img>
                    <p className="hpa">9997hpa</p>
                    <p className="pressureP">Pressure</p>
                  </div>
                </div>
                <div className="WindAndUv">
                  <div className="Humid">
                    <img src={wind}></img>
                    <p className="procent">2km/h</p>
                    <p className="humidityP">Wind Speed</p>
                  </div>
                  <div className="Pressure">
                    <img src={Uv}></img>
                    <p className="hpa">8</p>
                    <p className="pressureP">UV</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ForecastsBox">
            <div className="FiveDForecast">
              <p className="FiveDTitle">5 Days Forecast:</p>

              {Forecast.map((item) => {
                return (
                  <div
                    className={
                      item.date.split(",")[0] == "Saturday"
                        ? "syka"
                        : "forecast_item"
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
          </div>
        </div>
      </div>
    </div>
  );
};
export { Main };
