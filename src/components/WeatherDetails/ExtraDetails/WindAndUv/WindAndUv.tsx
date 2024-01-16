import React from "react";
import wind from "../../../../imgs/wind 1.png";
import Uv from "../../../../imgs/uv-white 1.png";
import "./WindAndUv.css";
const WindAndUv: React.FC = () => {
  return (
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
  );
};
export { WindAndUv };
