import React from "react";

//@ts-ignore
import { debounce } from "lodash-es";
import { UseAppDispatch, UseAppSelector } from "../../hooks/typedhooks";
import {
  FindCityCoords,
  addWeather,
  GetWeather,
} from "./../../store/weatherSlice";
import { useTheme } from "../../hooks/useTheme";

import axios from "axios";

import AsideMenu from "./aside_menu/Aside-menu";
import HeaderBox from "./HeaderBox/HeaderBox";

import "./Header.css";
import Right_side_menu from "./Right-side-menu/Right-side-menu";
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
        <Right_side_menu
          getCurrentWeather={getCurrentWeather}
          setTheme={setTheme}
          theme={theme}
          PhoneMenuActive={PhoneMenuActive}
        ></Right_side_menu>

        <AsideMenu
          PhoneMenuActive={PhoneMenuActive}
          setPhoneMenuActive={setPhoneMenuActive}
          City={City}
          dispatch={dispatch}
          SetCity={SetCity}
          makeRequest={makeRequest}
          GetWeather={GetWeather}
        ></AsideMenu>
        <HeaderBox
          City={City}
          Dadat={Dadat}
          FindCityCoords={FindCityCoords}
          GetWeather={GetWeather}
          PhoneMenuActive={PhoneMenuActive}
          SetCity={SetCity}
          SetDadat={SetDadat}
          SetIsFetchingDatas={SetIsFetchingDatas}
          dispatch={dispatch}
          getCurrentWeather={getCurrentWeather}
          isFectingDadatas={isFectingDadatas}
          makeRequest={makeRequest}
          setPhoneMenuActive={setPhoneMenuActive}
          setTheme={setTheme}
          theme={theme}
        ></HeaderBox>
      </div>
    </header>
  );
};

export { Header };
