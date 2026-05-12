import { createSlice } from "@reduxjs/toolkit";
import information from "../data/information";

type ReduxMenuState = {
  data: typeof information;
};

const initialState: ReduxMenuState = {
  data: information,
};

const constantsSlice = createSlice({
  name: "constant",
  initialState,
  reducers: {},
});

export const constantActions = constantsSlice.actions;
export default constantsSlice;
