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
          state.FiveDForecast = FilteredWeather(state.FiveDForecast);
          state.HourlyWeather = FilteredWeather(state.HourlyWeather);
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
export const { addWeather } = WeatherSlice.actions;
export const WeatherReducer = WeatherSlice.reducer;
