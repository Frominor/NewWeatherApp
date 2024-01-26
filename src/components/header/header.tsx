import React from "react";
import "./Header.css";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import location from "../../imgs/current location icon.png";
import Switch from "@mui/material/Switch";
import Alert from "@mui/material/Alert";
import { useTheme } from "./../../hooks/useTheme";
//@ts-ignore
import { debounce } from "lodash-es";
import { ReactComponent as Menu } from "./menu-svgrepo-com.svg";
import { UseAppDispatch, UseAppSelector } from "../../typedhooks";
import {
  FindCityCoords,
  addWeather,
  GetWeather,
} from "../../store/weatherSlice";

const Header = () => {
  const dispatch = UseAppDispatch();
  const { theme, setTheme } = useTheme();
  const [Coords, SetCoords] = React.useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const State = UseAppSelector((State) => State.Weather);
  console.log(State);
  const [City, SetCity] = React.useState("");
  const [PhoneMenuActive, setPhoneMenuActive] = React.useState<boolean>();
  const getCurrentWeather = (): void => {
    dispatch(GetWeather({ State, isCurrent: true }));
  };
  const ToggleMenu = (e: React.MouseEvent<SVGSVGElement>) => {
    setPhoneMenuActive(!PhoneMenuActive);
  };
  React.useEffect(() => {
    function success(pos: any): void {
      const crd = pos.coords;
      SetCoords(crd);
    }
    navigator.geolocation.getCurrentPosition(success);
  }, []);
  React.useEffect(() => {
    if (Coords) {
      dispatch(addWeather(Coords));
    }
  }, [Coords]);
  React.useEffect(() => {});
  const makeRequest = React.useCallback(
    debounce((e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(FindCityCoords(e.target.value));
    }, 300),
    []
  );
  React.useEffect(() => {
    dispatch(GetWeather({ State, isCurrent: false }));
  }, []);
  return (
    <header className="Header">
      <div className="container">
        <div className="aside_menu">
          <div className="aside_menu_box">
            <div className="FindLocation">
              <input
                value={City}
                placeholder="Search for your preffered city..."
                onChange={(e) => {
                  SetCity(e.target.value);
                  if (e.target.value.length > 0) {
                    return makeRequest(e);
                  }
                }}
              ></input>
              <button
                className="Find"
                onClick={() => {
                  if (City.length !== 0) {
                    dispatch(GetWeather({ State, isCurrent: false }));
                    SetCity("");
                  }
                }}
              >
                Find
              </button>
            </div>
            <div className="open">
              <Menu className="Menu_button" onClick={ToggleMenu}></Menu>
            </div>
          </div>
        </div>
        <div className="header_box">
          <div>
            <FormGroup>
              <FormControlLabel
                control={<Switch />}
                label="Theme"
                defaultValue={"dark"}
                onChange={() => {
                  if (theme == "dark") {
                    setTheme("light");
                  } else {
                    setTheme("dark");
                  }
                }}
                sx={{ color: " var(--text-color)" }}
              />
            </FormGroup>
          </div>
          <div className="FindLocation">
            <input
              value={City}
              placeholder="Search for your preffered city..."
              onChange={(e) => {
                SetCity(e.target.value);
                if (e.target.value.length > 0) {
                  return makeRequest(e);
                }
              }}
            ></input>
            <button
              className="Find"
              onClick={() => {
                if (City.length !== 0) {
                  dispatch(GetWeather({ State, isCurrent: false }));
                  SetCity("");
                }
              }}
            >
              Find
            </button>
          </div>
          <div className="Button">
            <button onClick={getCurrentWeather}>
              <img src={location} className="geoposition"></img>
              <p>Current Location</p>
            </button>
          </div>
        </div>
      </div>

      <Alert
        sx={{
          position: "absolute",
          bottom: 6,
          left: 2 + "%",
          opacity: `${State.Error ? 1 : 0}`,
        }}
        severity="error"
      >
        {State.Error}
      </Alert>
    </header>
  );
};

export { Header };
