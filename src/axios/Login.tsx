import axios from "axios";
import Swal from "sweetalert2";

// const URL = "https://api.documentorai.com/";
const Login = async (user: any, cb: any) => {
  try {
    const users = await axios({
      method: "POST",
      url: URL + "account/login",
      data: user,
    });

    cb(users.data);
    localStorage.setItem("token", `Bearer ${users.data.data.token}`);
    Swal.fire("Success", "Login Success", "success");
  } catch (erorr) {
    Swal.fire("Error", "Internet error", "error");
  }
};

export { Login };
