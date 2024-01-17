import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchUserById = createAsyncThunk(
  "users/fetchById",
  async (State) => {
    console.log(State);
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${State.Lat}&lon=${State.Lon}&appid=9e2676b5d5179f93b75b68b95d3b7bf3`
    );
    return response.data;
  }
);
const initialState = {
  Lat: 0,
  Lon: 0,
  token: {},
  weather: {},
};

const UserSlice = createSlice({
  name: "Weather",
  initialState,
  reducers: {
    addWeather(state, action) {
      console.log(action);
      state.Lat = action.payload?.latitude;
      state.Lon = action.payload?.longitude;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserById.pending, (state) => {})
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.weather = action.payload;
      });
  },
});
export const { addWeather } = UserSlice.actions;
export const UserReducer = UserSlice.reducer;
