import axios from "axios";
import jwt_decode from "jwt-decode";

const URL = "https://api.documentorai.com/";
const Login = async (user: any) => {
  try {
    const users = await axios({
      method: "POST",
      url: URL + "account/login",
      data: user,
    });
 
    const token = users.data.data.token;
    const decoded = jwt_decode(token);
     
    console.log(decoded);
    console.log(users.data.data.token)

    localStorage.setItem("token",`Bearer ${users.data.data.token}`);
    // console.log(users);
  } catch (erorr) {
    console.log(erorr);
  }
};

export { Login };
