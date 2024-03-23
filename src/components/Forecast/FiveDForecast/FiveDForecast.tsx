import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Container } from "@mui/material";

import FiveDForecastItem from "./FiveDForecastItem/FiveDForecastItem";

import { useAppSelector } from "../../../hooks/typedhooks";
import { IWeather } from "../../../types/IWeather";
import "./FiveDForecast.css";
const FiveDForecast: React.FC = () => {
  const State = useAppSelector((State) => State.Weather);

  return (
    <div className="FiveDForecast">
      <p className="FiveDTitle">5 Days Forecast:</p>
      {State.isLoading ? (
        <Container
          sx={{
            width: 100 + "%",
            height: 70 + "%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress sx={{ color: "white" }} />
        </Container>
      ) : (
        State.FiveDForecast &&
        State.FiveDForecast.map((item: IWeather, key) => {
          return (
            <FiveDForecastItem
              key={item.dt}
              dt_txt={item.dt_txt}
              dt={item.dt}
              weather={item.weather}
              main={item.main}
              wind={item.wind}
            ></FiveDForecastItem>
          );
        })
      )}
    </div>
  );
};
export { FiveDForecast };
