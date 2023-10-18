import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

const initialState = {};

const pdfSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setMessage: (_, action) => {
      return { message: action.payload };
    },
    clearMessage: () => {
      return { message: "" };
    },
  },
});

const { reducer, actions } = pdfSlice;

export const { setMessage, clearMessage } = actions;
export default reducer;

export const messageSelector = (state: RootState) => state.message;