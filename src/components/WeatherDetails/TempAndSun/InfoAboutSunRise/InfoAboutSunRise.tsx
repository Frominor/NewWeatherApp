import React from "react";
import sunrise from "../../../../imgs/sunrise-white 1.png";
import sunset from "../../../../imgs/sunset-white 1.png";
import "./InfoAboutSunRise.css";
const InfoAboutSunRise: React.FC = () => {
  return (
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
  );
};
export { InfoAboutSunRise };
