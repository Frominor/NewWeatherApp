import { configureStore } from "@reduxjs/toolkit";
import { UserReducer } from "./weatherSlice";
const store = configureStore({
  reducer: {
    Weather: UserReducer,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
