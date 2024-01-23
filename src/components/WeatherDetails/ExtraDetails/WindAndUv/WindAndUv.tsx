import React from "react";
import wind from "../../../../imgs/wind 1.png";
import Uv from "../../../../imgs/uv-white 1.png";
import "./WindAndUv.css";
import { UseAppSelector } from "../../../../hooks";

const WindAndUv: React.FC = () => {
  const State = UseAppSelector((State) => State.Weather);
  return (
    <div className="WindAndUv">
      <div className="Humid">
        <img src={wind}></img>
        <p className="procent">
          {State.weather?.main ? State.weather.wind.speed : 2} km/h
        </p>
        <p className="humidityP">Wind Speed</p>
      </div>
      <div className="Pressure">
        <img src={Uv}></img>
        <p className="hpa">8</p>
        <p className="pressureP">UV</p>
      </div>
    </div>
  );
};
export { WindAndUv };
