import React from "react";
import clouds from "../../imgs/clouds 1.png";
import sneg from "../../imgs/rain 1.png";
import drizzle from "../../imgs/drizzle 1.png";
import clear from "../../imgs/clear 2.png";
import mist from "../../imgs/mist 1.png";
import sun from "../../imgs/sun.png";
import "./WeatherDetail.css";
import { ExtraDetails } from "./ExtraDetails/ExtraDetails";
import { TempAndSunInfo } from "./TempAndSun/TempAndSunInfo";
import { UseAppSelector } from "../../typedhooks";
import { Container, CircularProgress } from "@mui/material";
const WeatherDetails: React.FC = () => {
  const State = UseAppSelector((State) => State.Weather);
  return (
    <div className="WeatherDetails">
      {State.isLoading ? (
        <Container
          sx={{
            width: 100 + "%",
            height: 100 + "%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress sx={{ color: "white" }}></CircularProgress>
        </Container>
      ) : (
        <div className="WeatherDetails">
          <TempAndSunInfo></TempAndSunInfo>

          <div className="imgTemperature">
            <img
              src={
                State.FiveDForecast.length !== 0
                  ? State?.FiveDForecast[0]?.weather[0].description ==
                    "overcast clouds"
                    ? clouds
                    : State?.FiveDForecast[0]?.weather[0].description ==
                      "light snow"
                    ? sneg
                    : State?.FiveDForecast[0]?.weather[0].description ==
                      "light rain"
                    ? drizzle
                    : State?.FiveDForecast[0]?.weather[0].description ==
                      "broken clouds"
                    ? mist
                    : State?.FiveDForecast[0]?.weather[0].description ==
                      "few clouds"
                    ? drizzle
                    : State?.FiveDForecast[0]?.weather[0].description ==
                      "scattered clouds"
                    ? clouds
                    : State?.FiveDForecast[0]?.weather[0].description == "snow"
                    ? sneg
                    : State?.FiveDForecast[0]?.weather[0].description ==
                      "clear sky"
                    ? clear
                    : ""
                  : ""
              }
            ></img>
            <p>
              {State?.FiveDForecast[0]?.weather[0].description.toUpperCase()}
            </p>
          </div>
          <ExtraDetails></ExtraDetails>
        </div>
      )}
    </div>
  );
};
export { WeatherDetails };
