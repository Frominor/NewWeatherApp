import React from "react";

import { useAppSelector } from "../../../hooks/typedhooks";
import HourlyForecastItem from "./HourlyForecastItem/HourlyForecastItem";
import { IWeather } from "../../../types/IWeather";

import { CircularProgress, Container } from "@mui/material";

import "./HourlyForecast.css";
const HourlyForecast = () => {
  const State = useAppSelector((State) => State.Weather);
  return (
    <div className="HourlyForecast">
      <p className="HourlyForTitle">Hourly Forecast:</p>

      {State.isLoading ? (
        <Container
          sx={{
            width: 100 + "%",
            height: 60 + "%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress sx={{ color: "white" }} />
        </Container>
      ) : (
        <div className="HourlyForecast_Box">
          {State.HourlyWeather &&
            State.HourlyWeather.map((item: IWeather, key) => {
              return (
                <HourlyForecastItem
                  dt={item.dt}
                  weather={item.weather}
                  dt_txt={item.dt_txt}
                  wind={item.wind}
                  main={item.main}
                ></HourlyForecastItem>
              );
            })}
        </div>
      )}
    </div>
  );
};
export { HourlyForecast };
