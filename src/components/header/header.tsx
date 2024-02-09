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
import { HeadersDefaults } from "axios";
import axios from "axios";
import { FormControl } from "@mui/material";
const Header = () => {
  const dispatch = UseAppDispatch();
  const { theme, setTheme } = useTheme();
  const [Coords, SetCoords] = React.useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const State = UseAppSelector((State) => State.Weather);

  const [City, SetCity] = React.useState("");
  const [Dadat, SetDadat] = React.useState<{ value: string }[]>([]);
  const [isFectingDadatas, SetIsFetchingDatas] = React.useState<boolean>(false);
  const [PhoneMenuActive, setPhoneMenuActive] = React.useState<boolean>(false);
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
    dispatch(GetWeather({ State, isCurrent: false }));
  }, []);

  React.useEffect(() => {
    if (Coords) {
      dispatch(addWeather(Coords));
    }
  }, [Coords]);
  const makeRequest = React.useCallback(
    debounce((e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value.length > 2) {
        dispatch(FindCityCoords(e.target.value));
      }
    }, 300),
    []
  );

  React.useEffect(() => {
    if (isFectingDadatas) {
      axios
        .post(
          "http://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address",
          { query: City },
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: "Token " + process.env.React_APP_API_DADATA_KEY,
            },
          }
        )
        .then((res) => {
          let filteredsuggestions = res.data.suggestions.filter(
            (item: { value: string }) => {
              if (item.value.split(" ").includes("г")) {
                return true;
              }
              return false;
            }
          );
          SetDadat([...filteredsuggestions]);
        });
    }
  }, [City]);
  return (
    <header className="Header">
      <div className="container">
        <div
          className="right_side_menu"
          style={{ opacity: PhoneMenuActive ? "1" : "0" }}
        >
          <div className="right_side_menu_box">
            <div className="curr_weath_box">
              <button onClick={getCurrentWeather}>
                <img src={location} className="geoposition"></img>
              </button>
            </div>
            <div>
              <Switch
                defaultValue={"dark"}
                onChange={() => {
                  if (theme == "dark") {
                    setTheme("light");
                  } else {
                    setTheme("dark");
                  }
                }}
                sx={{ color: " var(--right_side_menu_background)" }}
              />
            </div>
          </div>
        </div>
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

          <div className="FindLocation">
            <input
              value={City}
              placeholder="Search for your preffered city..."
              onChange={(e) => {
                if (isFectingDadatas == false) {
                  SetIsFetchingDatas(!isFectingDadatas);
                }
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
            <ul className="dadatArr">
              {Dadat.map((item) => {
                return (
                  <li
                    onClick={() => {
                      let arr = item.value.split(" ");
                      let city = arr[arr.indexOf("г") + 1].trim();
                      SetCity(city);
                      dispatch(FindCityCoords(city));
                      SetIsFetchingDatas(false);
                      SetDadat([]);
                    }}
                  >
                    {item.value}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="Button">
            <button onClick={getCurrentWeather}>
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
