import React from "react";
import "./HumidAndPressure.css";
import { UseAppSelector } from "../../../../typedhooks";
import { ReactComponent as Humidity } from "./humidity-svgrepo-com.svg";
import { ReactComponent as Pressure } from "./pressure-svgrepo-com.svg";
const HumidAndPressure: React.FC = () => {
  const State = UseAppSelector((State) => State.Weather);
  return (
    <div className="HumidAndPressure">
      <div className="Humid">
        <Humidity className="Humidity"></Humidity>
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
        <Pressure className="Pressure"></Pressure>
        <p className="hpa">
          {State.weather?.main ? State.weather.main.pressure : 9322} hpa
        </p>
        <p className="pressureP">Pressure</p>
      </div>
    </div>
  );
};
export { HumidAndPressure };
