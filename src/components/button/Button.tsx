import React from "react";
import "./Button.css";
interface ButtonProps {
  OnClick: () => void;
  title: string;
  location?: string;
  clasS: string;
}
const Button: React.FC<ButtonProps> = ({ OnClick, title, location, clasS }) => {
  return (
    <>
      <button className={clasS} onClick={OnClick}>
        {location && <img src={location} className="geoposition"></img>}
        <p>{title}</p>
      </button>
    </>
  );
};
export default Button;
