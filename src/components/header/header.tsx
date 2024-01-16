import React from "react";
import "./Header.css";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import location from "../../imgs/current location icon.png";
import Switch from "@mui/material/Switch";

const Header: React.FC = () => {
  return (
    <header className="Header">
      <div className="container">
        <div className="header_box">
          <div>
            <FormGroup>
              <FormControlLabel
                control={<Switch defaultChecked />}
                label="Label"
                sx={{ color: "white" }}
              />
            </FormGroup>
          </div>
          <div className="FindLocation">
            <input placeholder="Search for your preffered city..."></input>
          </div>
          <div className="Button">
            <button>
              <img src={location} className="geoposition"></img>
              <p>Current Location</p>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
