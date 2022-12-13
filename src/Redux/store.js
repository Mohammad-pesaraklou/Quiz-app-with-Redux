import { configureStore, isAsyncThunkAction } from "@reduxjs/toolkit";
import levelReducer from "./Slices/level";

export const store = configureStore({
  reducer: {
    level: levelReducer,
  },
});
