import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import "./FiveDForecast.css";
import { UseAppSelector } from "../../../hooks/typedhooks";
import { Container } from "@mui/material";
import { FiveDForecastItem } from "./FiveDForecastItem/FiveDForecastItem";
import { IWeather } from "../../../types/IWeather";
const FiveDForecast: React.FC = () => {
  const State = UseAppSelector((State) => State.Weather);

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
