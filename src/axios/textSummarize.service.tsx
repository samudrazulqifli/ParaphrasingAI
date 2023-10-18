import axios from "axios";
import { SummarizeInput } from "../interface/api/IFormInput";
import { ResponseData } from "../interface/api/Response";

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
    console.log(data.type)
    console.log(result.data)
  } catch (error) {
    console.log(error);
  }
};

export { textSummarize };
