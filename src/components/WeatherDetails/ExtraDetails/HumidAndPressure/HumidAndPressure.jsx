import React from "react";
import humid from "../../../../imgs/humidity 1.png";
import pressure from "../../../../imgs/pressure-white 1.png";
import "./HumidAndPressure.css";
import { UseAppSelector } from "../../../../hooks";
const HumidAndPressure = () => {
  const State = UseAppSelector((State) => State.Weather);
  return (
    <div className="HumidAndPressure">
      <div className="Humid">
        <img src={humid}></img>
        <p className="procent">
          {State.weather?.main
            ? Math.trunc(
                (State.weather.main.humidity *
                  State.weather.main.temp *
                  State.weather.main.pressure) /
                  1000000
              )
            : 42}
          %
        </p>
        <p className="humidityP">Humidity</p>
      </div>
      <div className="Pressure">
        <img src={pressure}></img>
        <p className="hpa">
          {State.weather?.main ? State.weather.main.pressure : 9322} hpa
        </p>
        <p className="pressureP">Pressure</p>
      </div>
    </div>
  );
};
export { HumidAndPressure };
