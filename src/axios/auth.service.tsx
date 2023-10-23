import axios from "axios";
import { IFormRegister, IFormLogin } from "../interface/api/IFormInput";

// eslint-disable-next-line react-refresh/only-export-components
const URL = "https://api.documentorai.com/";

const registerUser = (data: IFormRegister) => {
  console.log(data);
  return axios.post(URL + "account/register", data).then((response) => {
    return response.data;
  });
};

const loginUser = async (data: IFormLogin) => {
  const response = await axios.post(URL + "account/login", data);
  if (response.data.data.token) {
    localStorage.setItem("token", `Bearer ${response.data.data.token}`);
    if (data.rememberme) {
      localStorage.setItem("rememberme", "true");
      localStorage.setItem("username", data.username);
      localStorage.setItem("password", data.password);
    } else {
      localStorage.removeItem("rememberme");
      localStorage.removeItem("username");
      localStorage.removeItem("password");
    }
  }
  return response.data;
};

const logoutUser = () => {
  localStorage.removeItem("token");
};

const getListBook = (skip: number, limit: number) => {
  return axios.get(URL + `book?skip=${skip}&limit=${limit}`, {
    headers: {
      Authorization: localStorage.token,
    },
  });
};

const authService = {
  registerUser,
  loginUser,
  logoutUser,
  getListBook,
};

export default authService;
