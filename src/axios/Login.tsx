import axios from "axios";

const URL = "https://api.documentorai.com/";
const Login = async (user: any) => {
  try {
    const users = await axios({
      method: "POST",
      url: URL + "account/login",
      data: user,
    });

    console.log(users.data.data.token)

    localStorage.setItem("token",`Bearer ${users.data.data.token}`);
    // console.log(users);
  } catch (erorr) {
    console.log(erorr);
  }
};

export { Login };
