import { createSlice } from "@reduxjs/toolkit";
import { useReducer } from "react";
// data
import { data } from "../../data/dummy";
const initialState = data;

export const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
   
  },
});

export default questionSlice.reducer;
