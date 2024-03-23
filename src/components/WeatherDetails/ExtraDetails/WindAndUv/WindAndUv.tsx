import React from "react";
import Uv from "../../../../imgs/uv-white 1.png";
import "./WindAndUv.css";
import { useAppSelector } from "../../../../hooks/typedhooks";
import { ReactComponent as Wind } from "./wind-svgrepo-com.svg";
import { ReactComponent as UV } from "./uv-index-alt-svgrepo-com.svg";
const WindAndUv: React.FC = () => {
  const State = useAppSelector((State) => State.Weather);
  return (
    <div className="WindAndUv">
      <div className="Humid">
        <Wind className="wind"></Wind>
        <p className="procent">
          {State.weather?.main ? State.weather.wind.speed : 2} km/h
        </p>
        <p className="humidityP">Wind Speed</p>
      </div>
      <div className="Pressure">
        <UV className="Uv"></UV>
        <p className="hpa">8</p>
        <p className="pressureP">UV</p>
      </div>
    </div>
  );
};
export { WindAndUv };
