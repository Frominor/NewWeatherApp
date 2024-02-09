import React from "react";

import { ReactComponent as Sunset } from "./sunset.svg";
import { ReactComponent as Sunrise } from "./sunrise.svg";
import "./InfoAboutSunRise.css";
import { UseAppSelector } from "../../../../typedhooks";
const InfoAboutSunRise = () => {
  const State = UseAppSelector((State) => State.Weather);
  return (
    <div className="InfoAboutSunRise">
      <div className="sunrise">
        <Sunrise className="sunrise"></Sunrise>
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
        <Sunset className="sunset"></Sunset>

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
