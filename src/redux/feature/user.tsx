// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { IFormPassword } from "../../interface/api/IFormInput";
// import user from "../../axios/user.service";
// import { setMessage } from "./message";

// export const changePasswordUser = createAsyncThunk(
//   "user/changepassword",
//   async (body: IFormPassword, thunkAPI) => {
//     try {
//       const response = await user.changePassword(body);
//       thunkAPI.dispatch(setMessage("Register Success"));
//       return response.data;
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       thunkAPI.dispatch(setMessage(message));
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// export const getListBookUser = createAsyncThunk(
//   "user/listbook",
//   async (_, thunkAPI) => {
//     try {
//       const response = await user.getListBook(0, 3);
//       thunkAPI.dispatch(setMessage("Success"));
//       return response.data;
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       thunkAPI.dispatch(setMessage(message));
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// const book = localStorage.getItem('book')

// const initialState = book 

// const userSlice = createSlice({
//     name: "user",

// })
