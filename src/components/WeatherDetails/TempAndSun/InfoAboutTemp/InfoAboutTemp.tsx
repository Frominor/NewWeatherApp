import React from "react";
import "./InfoAboutTemp.css";
const InfoAboutTemp: React.FC = () => {
  return (
    <div className="InfoAboutTemp">
      <p className="Temp">24°C</p>
      <p className="FeelsLike">Feels like: 22°C</p>
    </div>
  );
};
export { InfoAboutTemp };
