import React from "react";
import "./Header.css";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import location from "../../imgs/current location icon.png";
import Switch from "@mui/material/Switch";
import axios from "axios";
import { UseAppSelector } from "../../hooks";

const Header: React.FC = () => {
  interface IState {
    user: Object;
  }
  const State = UseAppSelector((State) => State.Weather.list);
  console.log(State);
  const GetWeather = async () => {
    const res = await axios.get(
      "http://api.openweathermap.org/geo/1.0/direct?q=Oryol&limit=5&appid=9e2676b5d5179f93b75b68b95d3b7bf3"
    );
    console.log(res.data);
  };
  const [City, SetCity] = React.useState<String>("");
  function success(pos: any) {
    const crd = pos.coords;

    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }
  console.log(window.navigator.geolocation.getCurrentPosition(success));
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
            <input
              placeholder="Search for your preffered city..."
              onChange={(e) => {
                SetCity(e.target.value);
              }}
            ></input>
          </div>
          <div className="Button">
            <button onClick={GetWeather}>
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
