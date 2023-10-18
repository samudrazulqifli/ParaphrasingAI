import axios from "axios";
import { IFormRegister, IFormLogin } from "../interface/api/IFormInput";
import Swal from "sweetalert2";

// eslint-disable-next-line react-refresh/only-export-components
const URL = "https://api.documentorai.com/";

const registerUser = (data: IFormRegister) => {
  console.log(data)
  return axios.post(URL + "account/register", data).then((response) => {
    if (!response.data.message) {
      Swal.fire("Success", "Register Success", "success");
    }

    return response.data
  });
};

const loginUser = async (data: IFormLogin) => {
  const response = await axios.post(URL + "account/login", data);
  if (response.data.data.token) {
    localStorage.setItem("token", `Bearer ${response.data.data.token}`);
    Swal.fire("Success", "Login Success", "success");
  }
  return response.data;
};

const logoutUser = () => {
  localStorage.removeItem("token");
};

const authService = {
  registerUser,
  loginUser,
  logoutUser,
};

export default authService;
