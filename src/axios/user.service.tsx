import axios from "axios";
import { IFormRegister, IFormLogin } from "../interface/api/IFormInput";
import Swal from "sweetalert2";

const URL = "https://api.documentorai.com/";

const changePassword = async (body, cb: any) => {
  try {
    const result = await axios({
      method: "POST",
      url: URL + "book/question",
      data: body,
      headers: {
        Authorization: localStorage.token,
      },
    });

    cb(result.data.data);
  } catch (error) {
    console.log(error);
  }
};

const deleteAccount = async (body) => {
  try {
    const result = await axios({
      method: "DELETE",
      url: URL + "book/question",
      data: body,
      headers: {
        Authorization: localStorage.token,
      },
    });

    cb(result.data.data);
  } catch (error) {
    console.log(error);
  }
};

const user = {
    changePassword,
    deleteAccount
}

export default user;
