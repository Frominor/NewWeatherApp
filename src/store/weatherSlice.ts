import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
type Weather = {
  Lat: number;
  Lon: number;
  token: object;
};
type WeatherState = {
  list: Weather[];
};
const initialState: WeatherState = {
  list: [],
};
const UserSlice = createSlice({
  name: "Weather",
  initialState,
  reducers: {
    addWeather(state, action) {},
  },
});
export const {} = UserSlice.actions;
export const UserReducer = UserSlice.reducer;
