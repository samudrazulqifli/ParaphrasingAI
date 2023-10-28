import axios from "axios";
import { ImprovementInput } from "../interface/api/IFormInput";
import Swal from "sweetalert2";

const textImprovement = async (data: ImprovementInput, cb: any) => {
  try {
    const result = await axios({
      method: "POST",
      url: "https://api.documentorai.com/book/text",
      data: data,
      headers: {
        Authorization: localStorage.token,
      },
    });
    cb(result.data.data);
  } catch (error) {
    const responseError = error.response.data;
    Swal.fire(
      responseError.statusCode.toString(),
      responseError.message,
      "warning"
    );
  }
};

export { textImprovement };
