import React from "react";
import "./ExtraDetails.css";
import { HumidAndPressure } from "./HumidAndPressure/HumidAndPressure";
import { WindAndUv } from "./WindAndUv/WindAndUv.jsx";
const ExtraDetails: React.FC = () => {
  return (
    <div className="ExtraDetails">
      <HumidAndPressure></HumidAndPressure>
      <WindAndUv></WindAndUv>
    </div>
  );
};
export { ExtraDetails };
