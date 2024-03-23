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
import { useAppSelector } from "../../hooks/typedhooks";
import { Container, CircularProgress } from "@mui/material";
const WeatherDetails: React.FC = () => {
  const State = useAppSelector((State) => State.Weather);
  return (
    <div className="WeatherDetails">
      {State.isLoading ? (
        <Container
          sx={{
            width: 600 + "px",

            height: 100 + "%",
            display: "flex",
            flexGrow: 1,
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
                State.FiveDForecast
                  ? State.FiveDForecast[1]?.weather[0]?.icon
                  : ""
              }
            ></img>
            <p>
              {State.FiveDForecast
                ? State.FiveDForecast[0]?.weather[0].description.toUpperCase()
                : ""}
            </p>
          </div>
          <ExtraDetails></ExtraDetails>
        </div>
      )}
    </div>
  );
};
export { WeatherDetails };
