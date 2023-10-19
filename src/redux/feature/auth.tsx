import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";
import jwt_decode from "jwt-decode";
import AuthService from "../../axios/auth.service";
import { IFormRegister, IFormLogin } from "../../interface/api/IFormInput";
import { UserDecode } from "../../interface/api/UserDecode";

const user = localStorage.getItem("token");

const decodeToken = (token: string) => jwt_decode(token) as UserDecode;

export const register = createAsyncThunk(
  "auth/register",
  async (body: IFormRegister, thunkAPI) => {
    try {
      const response = await AuthService.registerUser(body);
      thunkAPI.dispatch(setMessage("Register Success"));
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (body: IFormLogin, thunkAPI) => {
    try {
      const data = await AuthService.loginUser(body);
      const userData: UserDecode = jwt_decode(data.data.token);
      console.log(userData);
      return { username: userData.username, uuid: userData.uuid };
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await AuthService.logoutUser();
});

const initialState = user
  ? {
      isLoggedIn: true,
      username: decodeToken(user).username,
      uuid: decodeToken(user).uuid,
    }
  : { isLoggedIn: false, username: null, uuid: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state) => {
      state.isLoggedIn = false;
    });
    builder.addCase(register.rejected, (state) => {
      state.isLoggedIn = false;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      if (action.payload.username) {
        state.username = action.payload.username;
      }
      if (action.payload.uuid) {
        state.uuid = action.payload.uuid;
      }
    });
    builder.addCase(login.rejected, (state) => {
      state.isLoggedIn = false;
      state.username = null;
      state.uuid = null;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.isLoggedIn = false;
      state.username = null;
      state.uuid = null;
    });
  },
  reducers: {},
});

export default authSlice.reducer;
