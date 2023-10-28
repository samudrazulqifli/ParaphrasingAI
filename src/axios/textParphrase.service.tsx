import axios from "axios";
import { ParaphraseInput } from "../interface/api/IFormInput";
import Swal from "sweetalert2";

const textParaphrase = async (data: ParaphraseInput, cb: any) => {
  try {
    const result = await axios({
      method: "POST",
      url: "https://api.documentorai.com/book/paraphrase",
      data: data,
      headers: {
        Authorization: localStorage.token,
      },
    });
    cb(result.data);
  } catch (error) {
    const responseError = error.response.data;
    Swal.fire(
      responseError.statusCode.toString(),
      responseError.message,
      "warning"
    );
  }
};

export { textParaphrase };
