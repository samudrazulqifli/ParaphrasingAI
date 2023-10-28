import axios from "axios";
import { SummarizeInput } from "../interface/api/IFormInput";
import { ResponseData } from "../interface/api/Response";
import Swal from "sweetalert2";

const textSummarize = async (data: SummarizeInput, cb: any) => {
  try {
    const result: ResponseData = await axios({
      method: "POST",
      url: "https://api.documentorai.com/book/summarize",
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

export { textSummarize };
