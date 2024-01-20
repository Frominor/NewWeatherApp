import React from "react";
import "./Header.css";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import location from "../../imgs/current location icon.png";
import Switch from "@mui/material/Switch";
import Alert from "@mui/material/Alert";

import axios from "axios";
import { UseAppDispatch, UseAppSelector } from "../../hooks";
import { addWeather, fetchUserById } from "../../store/weatherSlice";

const Header = () => {
  const dispatch = UseAppDispatch();

  const [Coords, SetCoords] = React.useState();
  const State = UseAppSelector((State) => State.Weather);
  console.log(State);

  const [City, SetCity] = React.useState("");
  const getCurrentWeather = () => {
    dispatch(fetchUserById(State));
  };
  React.useEffect(() => {
    function success(pos) {
      const crd = pos.coords;
      SetCoords(crd);
    }
    navigator.geolocation.getCurrentPosition(success);
  }, []);
  React.useEffect(() => {
    dispatch(addWeather(Coords));
  }, [Coords]);
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
            <button onClick={getCurrentWeather}>
              <img src={location} className="geoposition"></img>
              <p>Current Location</p>
            </button>
          </div>
        </div>
      </div>
      {State.Error ? (
        <Alert
          sx={{
            position: "absolute",
            transform: `translateX(${State.Error !== null ? "-110%" : "20%"})`,
            transition: "0.5s easy-in-out",
          }}
          severity="error"
        >
          {State.Error}
        </Alert>
      ) : (
        ""
      )}
    </header>
  );
};

export { Header };
