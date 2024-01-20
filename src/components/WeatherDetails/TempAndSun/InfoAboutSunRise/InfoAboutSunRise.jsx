import React from "react";
import sunrise from "../../../../imgs/sunrise-white 1.png";
import sunset from "../../../../imgs/sunset-white 1.png";
import "./InfoAboutSunRise.css";
import { UseAppSelector } from "../../../../hooks";
const InfoAboutSunRise = () => {
  const State = UseAppSelector((State) => State.Weather);
  console.log(State?.weather);
  return (
    <div className="InfoAboutSunRise">
      <div className="sunrise">
        <img src={sunrise}></img>
        <div className="sunnumbers">
          <p>Sunrise</p>

          <span>
            {State?.weather?.sys?.sunrise
              ? new Date(State?.weather?.sys?.sunrise * 1000)
                  .toUTCString()
                  .split(" ")[4] +
                " " +
                "AM"
              : "Not info"}
          </span>
        </div>
      </div>
      <div className="sunset">
        <img src={sunset}></img>
        <div className="sunnumbers">
          <p>Sunset</p>
          <span>
            {State?.weather?.sys?.sunset
              ? new Date(State?.weather?.sys?.sunset * 10000)
                  .toUTCString()
                  .split(" ")[4] +
                " " +
                "AM"
              : "Not info"}
          </span>
        </div>
      </div>
    </div>
  );
};
export { InfoAboutSunRise };
