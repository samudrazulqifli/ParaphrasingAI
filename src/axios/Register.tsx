import axios from "axios";
import { IFormInput } from "../interface/api/IFormInput";

const registerUser = async (user: IFormInput) => {
  try {
    const result = await axios({
      method: "POST",
      url: "https://api.documentorai.com/account/register",
      data: user,
    });

    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export { registerUser };
