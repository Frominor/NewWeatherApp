import React from "react";
import "./InfoAboutTemp.css";
import { UseAppSelector } from "../../../../hooks/typedhooks";
const InfoAboutTemp: React.FC = () => {
  const State = UseAppSelector((State) => State.Weather);
  return (
    <div className="InfoAboutTemp">
      {State?.weather?.main ? (
        <div className="InfoAboutTemp">
          <p className="Temp">
            {Math.round(State.weather.main.temp) - 273 + "°C"}
          </p>
          <div className="FeelsLike">
            <p>Feels like:</p>

            <p>
              {" "}
              {" " +
                Number(Math.round(State.weather.main.feels_like) - 273) +
                "°C"}
            </p>
          </div>
        </div>
      ) : (
        <div className="InfoAboutTemp">
          <p className="Temp">24°C</p>
          <p className="FeelsLike">Feels like: 22°C</p>
        </div>
      )}
    </div>
  );
};
export { InfoAboutTemp };
