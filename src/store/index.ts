import { configureStore } from "@reduxjs/toolkit";
import { WeatherReducer } from "./weatherSlice";
const store = configureStore({
  reducer: {
    Weather: WeatherReducer,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
