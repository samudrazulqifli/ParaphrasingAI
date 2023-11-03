import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";
import jwt_decode from "jwt-decode";
import AuthService from "../../axios/auth.service";
import { IFormRegister, IFormLogin } from "../../interface/api/IFormInput";
import { UserDecode } from "../../interface/api/UserDecode";
import Swal from "sweetalert2";

const user = localStorage.getItem("token");

const decodeToken = (token: string) => jwt_decode(token) as UserDecode;

export const register = createAsyncThunk(
  "auth/register",
  async (body: IFormRegister, thunkAPI) => {
    try {
      const data = await AuthService.registerUser(body);
      thunkAPI.dispatch(setMessage("Register Success"));
      const userData: UserDecode = jwt_decode(data.data.token);
      console.log(userData);
      Swal.fire("Success", "Register Success", "success");
      return { username: userData.username, uuid: userData.uuid };
    } catch (error) {
      const responseError = error.response.data;
      Swal.fire(
        responseError.statusCode.toString(),
        responseError.message,
        "warning"
      );
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
      Swal.fire("Success", "Login Success", "success");
      return { username: userData.username, uuid: userData.uuid };
    } catch (error) {
      const responseError = error.response.data;
      Swal.fire(
        responseError.statusCode.toString(),
        responseError.message,
        "warning"
      );
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
      loading: false,
      finish: false,
      failed: false,
    }
  : {
      isLoggedIn: false,
      username: null,
      uuid: null,
      loading: false,
      finish: false,
      failed: false
    };

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(register.pending, (state) => {
      state.loading = true;
      state.finish = false;
      state.failed = false;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.loading = false;
      state.finish = true;
      state.isLoggedIn = true;
      state.failed = false;
      if (action.payload.username) {
        state.username = action.payload.username;
      }
      if (action.payload.uuid) {
        state.uuid = action.payload.uuid;
      }
    });
    builder.addCase(register.rejected, (state) => {
      state.loading = false;
      state.finish = true;
      state.isLoggedIn = false;
      state.failed = true;
    });
    builder.addCase(login.pending, (state) => {
      state.loading = true;
      state.finish = false;
      state.failed = false;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.finish = true;
      state.loading = false;
      state.isLoggedIn = true;
      state.failed = false;
      if (action.payload.username) {
        state.username = action.payload.username;
      }
      if (action.payload.uuid) {
        state.uuid = action.payload.uuid;
      }
    });
    builder.addCase(login.rejected, (state) => {
      state.finish = true;
      state.loading = false;
      state.isLoggedIn = false;
      state.username = null;
      state.uuid = null;
      state.failed = true;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.isLoggedIn = false;
      state.username = null;
      state.uuid = null;
      state.failed = false;
    });
  },
  reducers: {},
});

export default authSlice.reducer;
