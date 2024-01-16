import React from "react";
import humid from "../../../../imgs/humidity 1.png";
import pressure from "../../../../imgs/pressure-white 1.png";
import "./HumidAndPressure.css";
const HumidAndPressure: React.FC = () => {
  return (
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
  );
};
export { HumidAndPressure };
