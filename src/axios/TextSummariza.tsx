import axios from "axios";
import { SummarizeInput } from "../interface/api/IFormInput";
import { ResponseData } from "../interface/api/Response";

const textSummarize = async (data: SummarizeInput, cb: any) => {
  try {
    data.type = "financial_report";
    const result: ResponseData = await axios({
      method: "POST",
      url: "https://api.documentorai.com/book/summarize",
      data: data,
      headers: {
        Authorization: localStorage.token,
      },
    });

    cb(result);
    
  } catch (error) {
    console.log(error);
  }
};

export { textSummarize };
