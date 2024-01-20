import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { IWeather, State } from "../models/IWeather";

export const fetchUserById = createAsyncThunk<
  {
    city: {
      name: string;
    };
    list: IWeather[];
  },
  State
>("users/fetchById", async (State: State) => {
  console.log(State);
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${State.Lat}&lon=${State.Lon}&appid=9e2676b5d5179f93b75b68b95d3b7bf3`
  );
  return response.data;
});

const initialState: State = {
  Lat: 0,
  Lon: 0,
  token: {},
  weather: {},
  FiveDForecast: [],
  HourlyWeather: [],
  City: "",
  Error: "Error",
};

const UserSlice = createSlice({
  name: "Weather",
  initialState,
  reducers: {
    addWeather(
      state,
      action: PayloadAction<{ latitude: number; longitude: number }>
    ) {
      state.Lat = action.payload?.latitude;
      state.Lon = action.payload?.longitude;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserById.pending, (state) => {})
      .addCase(
        fetchUserById.fulfilled,
        (
          state,
          action: PayloadAction<{
            city: {
              name: string;
            };
            list: IWeather[];
          }>
        ) => {
          console.log(action);
          let arr = [];
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

          state.HourlyWeather = arr;
        }
      )
      .addCase(fetchUserById.rejected, (state, action) => {
        state.Error = "Произошла ошибка,повторите попытку позже";
      });
  },
});
export const { addWeather } = UserSlice.actions;
export const UserReducer = UserSlice.reducer;
