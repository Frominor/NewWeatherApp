import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import axios from "axios";
import { IWeather, State } from "../types/IWeather";
import { FilteredWeather } from "../utils/filteredWeather";
import { FilterWeatherForData } from "../utils/filterForData";
export const GetWeather = createAsyncThunk<
  { city: { name: string }; list: IWeather[] },
  { State: State; isCurrent: Boolean }
>("weather/fetchWeather", async (Parametr) => {
  if (Parametr.isCurrent) {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${Parametr.State.CurrentWeather.lat}&lon=${Parametr.State.CurrentWeather.lon}&appid=9e2676b5d5179f93b75b68b95d3b7bf3`
    );
    return response.data;
  } else {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${Parametr.State.Lat}&lon=${Parametr.State.Lon}&appid=9e2676b5d5179f93b75b68b95d3b7bf3`
    );
    return response.data;
  }
});
export const FindCityCoords = createAsyncThunk(
  "weather/fetchByCityName",
  async (CityName: String) => {
    const response = await axios.get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${CityName}&limit=5&appid=9e2676b5d5179f93b75b68b95d3b7bf3`
    );
    return response.data;
  }
);

const initialState: State = {
  Lat: 37.9839412,
  isLoading: false,
  Lon: 23.7283052,
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
          state.City = action.payload.city.name;
          FilterWeatherForData(action.payload.list, state);
          if (state.FiveDForecast && state.HourlyWeather) {
            state.FiveDForecast = FilteredWeather(state.FiveDForecast);
            state.HourlyWeather = FilteredWeather(state.HourlyWeather);
          }
        }
      )
      .addCase(GetWeather.rejected, (state) => {
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
          if (action.payload.length == 0) {
            state.Error = "Ошибка,проверьте название города";
          } else {
            state.Lat = action.payload[0].lat;
            state.Lon = action.payload[0].lon;
            console.log(state.Lat);
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
export const { addWeather } = WeatherSlice.actions;
export const WeatherReducer = WeatherSlice.reducer;
