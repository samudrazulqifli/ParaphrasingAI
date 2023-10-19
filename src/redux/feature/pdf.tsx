import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

const numberPdf = 0;

const initialState = {
  numberList = 0
};

const pdfSlice = createSlice({
  name: "pdf",
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
