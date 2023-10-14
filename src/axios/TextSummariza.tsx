import axios from "axios";
import { SummarizeInput } from "../interface/api/IFormInput";
import { ResponseData } from "../interface/api/Response";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiNTc1Mzg1YmQtNTk3YS00Nzg3LWEyMzgtOTk2ZTE5Yzc1ZGE5IiwidXNlcm5hbWUiOiJrYW11IiwiaXNzIjoiSVNTIiwiYXVkIjoiQVVEIiwiaWF0IjoxNjk3MjAxMTc1fQ.Y9TZHPoXkoBpoaDqOFwh1vC8wyKCMTKD_CWzFtRj8_E";

const textSummarize = async (data: SummarizeInput, cb: any) => {
  try {
    data.type = "financial_report";
    const result: ResponseData = await axios({
      method: "POST",
      url: "https://api.documentorai.com/book/summarize",
      data: data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    cb(result);
    
  } catch (error) {
    console.log(error);
  }
};

export { textSummarize };
