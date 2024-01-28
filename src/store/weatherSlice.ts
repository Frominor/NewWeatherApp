import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { IWeather, State } from "../models/IWeather";
import clouds from "../imgs/clouds 1.png";
import sneg from "../imgs/rain 1.png";
import drizzle from "../imgs/drizzle 1.png";
import clear from "../imgs/clear 2.png";
import mist from "../imgs/mist 1.png";
import sun from "../imgs/sun.png";
export const GetWeather = createAsyncThunk<
  { city: { name: string }; list: IWeather[] },
  { State: State; isCurrent: Boolean }
>("users/fetchById", async (Parametr) => {
  if (Parametr.isCurrent) {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${Parametr.State.CurrentWeather.lat}&lon=${Parametr.State.CurrentWeather.lon}&appid=${process.env.REACT_APP_API_KEY}`
    );
    return response.data;
  } else {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${Parametr.State.Lat}&lon=${Parametr.State.Lon}&appid=${process.env.REACT_APP_API_KEY}`
    );
    return response.data;
  }
});
export const FindCityCoords = createAsyncThunk(
  "weather/fetchByCityName",
  async (CityName: String) => {
    const response = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${CityName}&limit=5&appid=${process.env.REACT_APP_API_KEY}`
    );
    return response.data;
  }
);

const initialState: State = {
  Lat: 37.9839412,
  isLoading: false,
  Lon: 23.7283052,
  themecolor: null,
  token: {},
  weather: null,
  FiveDForecast: [],
  HourlyWeather: [],
  CurrentWeather: {
    lat: null,
    lon: null,
  },
  City: "",
  Error: null,
};

const WeatherSlice = createSlice({
  name: "Weather",
  initialState,
  reducers: {
    addWeather(
      state,
      action: PayloadAction<{ latitude: number; longitude: number }>
    ) {
      state.CurrentWeather.lat = action.payload?.latitude;
      state.CurrentWeather.lon = action.payload?.longitude;
    },
    getThemeColor(state, action: PayloadAction<string>) {
      state.themecolor = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(GetWeather.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        GetWeather.fulfilled,
        (
          state,
          action: PayloadAction<{
            city: {
              name: string;
            };
            list: IWeather[];
          }>
        ) => {
          let arr = [];
          state.FiveDForecast = [];

          let boolean = false;
          state.Lat = null;
          state.Lon = null;
          console.log(action.payload);
          state.City = action.payload.city.name;
          for (let i = 0; i < 8; i++) {
            if (
              +action.payload.list[i].dt_txt.split(" ")[1].split(":")[0] == 0
            ) {
              arr.push(action.payload.list[i]);
            }
            if (
              +action.payload.list[i].dt_txt.split(" ")[1].split(":")[0] >= 12
            ) {
              arr.push(action.payload.list[i]);
            }
            if (i == 5) {
              state.weather = action.payload.list[i];
            }
          }
          for (let i = 0; i < arr.length; i++) {
            for (let k = i + 1; k < arr.length; k++) {
              if (arr[i].dt_txt.split(" ")[1] > arr[k].dt_txt.split(" ")[1]) {
                let aaa: any = arr[k];
                arr[k] = arr[i];
                arr[i] = aaa;
              }
            }
          }

          for (let k of action.payload.list) {
            for (let z of state.FiveDForecast) {
              if (k.dt_txt.split(" ")[0] == z.dt_txt.split(" ")[0]) {
                boolean = true;
              }
            }
            if (!boolean) {
              if (k.dt_txt.split(" ")[1] == "15:00:00") {
                state.FiveDForecast.push(k);
              }
            }
            boolean = false;
          }
          let zero = arr[0];
          arr.splice(0, 1);
          arr.push(zero);
          state.HourlyWeather = arr;
          for (let k of state.FiveDForecast) {
            switch (k.weather[0].description) {
              case "light rain":
                k.weather[0].icon = drizzle;
                break;
              case "overcast clouds":
                k.weather[0].icon = clouds;
                break;
              case "light snow":
                k.weather[0].icon = mist;
                break;
              case "broken clouds":
                k.weather[0].icon = mist;
                break;
              case "few clouds":
                k.weather[0].icon = drizzle;
                break;
              case "scattered clouds":
                k.weather[0].icon = clouds;
                break;
              case "snow":
                k.weather[0].icon = sneg;
                break;
              case "clear sky":
                k.weather[0].icon = clear;
                break;
              default:
                break;
            }
          }
          for (let k of state.HourlyWeather) {
            switch (k.weather[0].description) {
              case "light rain":
                k.weather[0].icon = drizzle;
                break;
              case "overcast clouds":
                k.weather[0].icon = clouds;
                break;
              case "light snow":
                k.weather[0].icon = mist;
                break;
              case "broken clouds":
                k.weather[0].icon = mist;
                break;
              case "few clouds":
                k.weather[0].icon = drizzle;
                break;
              case "scattered clouds":
                k.weather[0].icon = clouds;
                break;
              case "snow":
                k.weather[0].icon = sneg;
                break;
              case "clear sky":
                k.weather[0].icon = clear;
                break;
              default:
                break;
            }
          }
          state.Error = null;
          state.isLoading = false;
        }
      )
      .addCase(GetWeather.rejected, (state, action) => {
        state.Error =
          "Произошла ошибка на стороне сервера,попробуйте чуть позже";
        state.isLoading = false;
      })
      .addCase(
        FindCityCoords.fulfilled,
        (
          state,
          action: PayloadAction<
            {
              country: String;
              lat: number;
              lon: number;
              name: String;
            }[]
          >
        ) => {
          console.log(action.payload);
          if (action.payload.length == 0) {
            state.Error = "Ошибка,проверьте название города";
          } else {
            state.Lat = action.payload[0].lat;

            state.Lon = action.payload[0].lon;
          }
          state.Error = null;
        }
      )
      .addCase(FindCityCoords.rejected, (state) => {
        state.Error = "Ошибка,проверьте название города";
        state.isLoading = false;
      });
  },
});
export const { addWeather, getThemeColor } = WeatherSlice.actions;
export const UserReducer = WeatherSlice.reducer;
