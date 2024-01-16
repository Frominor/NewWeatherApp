import React from "react";
import "./TempAndSunInfo.css";
import { InfoAboutTemp } from "./InfoAboutTemp/InfoAboutTemp";
import { InfoAboutSunRise } from "./InfoAboutSunRise/InfoAboutSunRise";
const TempAndSunInfo: React.FC = () => {
  return (
    <div className="TemperaturaAndInfoAboutSun">
      <InfoAboutTemp></InfoAboutTemp>
      <InfoAboutSunRise></InfoAboutSunRise>
    </div>
  );
};
export { TempAndSunInfo };
